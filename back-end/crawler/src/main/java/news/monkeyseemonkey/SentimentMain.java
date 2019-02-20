package news.monkeyseemonkey;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.Properties;

import com.google.gson.Gson;

public class SentimentMain
{
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
        
        /*
         * article url as varchar(1000)
         * publisher as varchar(1000)
         * fetch_date as datetime
         * body as longtext
         * title as varchar(1000)
         * image_address as varchar(1000)
         * 
         */

        Connection db = DriverManager.getConnection("jdbc:sqlite:" + props.getProperty("sqlitedb"));
        String tableSql = "CREATE TABLE IF NOT EXISTS testing (\n"
                + "	id int PRIMARY KEY NOT NULL,\n"
        		+ " url VARCHAR(1000) NOT NULL,\n"
                + " publisher VARCHAR(1000),\n"
                + " datefound DATE DEFAULT CURRENT_DATE,\n"
                + " body LONGTEXT NOT NULL,\n"
                + " title VARCHAR(1000),\n"
                + " image VARCHAR(1000) NOT NULL\n"
                + ");";
        Statement stmt = db.createStatement();
        stmt.execute(tableSql);

        Gson gson = new Gson();

        SentimentDetector sentimentDetector = new SentimentDetector(db);
        
        NewsStream newsStream = new NewsStream(sentimentDetector, gson, props);
        Thread newsStreamThread = new Thread(newsStream);
        
        newsStreamThread.start();
        newsStreamThread.join();
    }
}