package news.monkeyseemonkey;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

import com.google.gson.Gson;

public class SentimentMain
{
	private static final String DRIVER = "com.mysql.cj.jdbc.Driver";
	
    public static void main( String[] args ) throws Exception
    {
        Properties props = new Properties();
        try
        {
            props.load(new FileInputStream("properties.config"));
        }
        catch(IOException e)
        {
            System.out.println(e);
            System.exit(-1);
        }
        
        
        Connection db = null;
        Statement stmt = null;     
        
        try
        {
        	String url = props.getProperty("londo_url");
        	String user = props.getProperty("londo_user");
        	String pass = props.getProperty("londo_pass");
        	
        	Class.forName(DRIVER).newInstance();
//        	System.out.println("Connecting to database...");
        	db = DriverManager.getConnection(url, user, pass);
//        	System.out.println("Database connection established.");

        	
        	stmt = db.createStatement();
        	String createTable;
        	createTable = "CREATE TABLE IF NOT EXISTS db_test (\n"
        			+ "	id INT PRIMARY KEY auto_increment NOT NULL,\n"
        			+ " web_address VARCHAR(1000) NOT NULL,\n"
        			+ " publisher VARCHAR(1000) NOT NULL,\n"
        			+ " fetch_date DATETIME NOT NULL,\n"
        			+ " body LONGTEXT NOT NULL,\n"
        			+ " title VARCHAR(1000) NOT NULL,\n"
        			+ " image_address VARCHAR(1000),\n"
        			+ " score DOUBLE\n"
        			+ ");";
        	stmt.execute(createTable);
        stmt.close();
        //db.close();
        }
        catch(SQLException se)
        {
            se.printStackTrace();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        finally
        {
            try
            {
               if(stmt!=null) stmt.close();
            }
            catch(SQLException se2)
            {
            	//error
            }
            /*
            try
            {
               if(db!=null) db.close();
            }
            catch(SQLException se)
            {
               se.printStackTrace();
            }
            */
         }

        Gson gson = new Gson();

        SentimentDetector sentimentDetector = new SentimentDetector(db);
        
        NewsStream newsStream = new NewsStream(sentimentDetector, gson, props);
        Thread newsStreamThread = new Thread(newsStream);
        
        newsStreamThread.start();
        newsStreamThread.join();
    }
}