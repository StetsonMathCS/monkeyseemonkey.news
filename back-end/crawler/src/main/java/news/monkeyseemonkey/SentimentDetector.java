package news.monkeyseemonkey;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;


public class SentimentDetector
{

    private Connection db;
    private Logger logger;

    public SentimentDetector(Connection db)
    {
        this.db = db;
        logger = LogManager.getLogger("SentimentDetector");
    }

    public boolean alreadyProcessed(String url)
    {
        try
        {
            String sql = "SELECT web_address FROM articles WHERE web_address like ?";
            PreparedStatement pstmt = db.prepareStatement(sql);
            pstmt.setString(1, url + "%");
            pstmt.execute();
            return pstmt.getResultSet().first();
        }
        catch(SQLException e)
        {
            logger.log(Level.ERROR, e.getMessage());
            return false;
        }
    }  
    
    public void intoDB(String url, Object pub, Object date, String body, 
    				Object title, String img) throws SQLException
    {
    	if(!alreadyProcessed(url))
        {
        	System.out.println("inserting into DB");
        	
        	String newDate = formatDate(date);        	
        	PreparedStatement pstmt = null;
        	try
        	{
        		String sql = "INSERT INTO articles" 
        				+ "(web_address, publisher, fetch_date, body, title, image_address)"
        				+ " VALUES(?,?,?,?,?, ?)";
        		pstmt = db.prepareStatement(sql);
        		pstmt.setString(1, url);
        		pstmt.setObject(2, pub);
        		pstmt.setString(3, newDate);
        		pstmt.setString(4, body);
        		pstmt.setObject(5, title);
        		pstmt.setString(6, img);
        		pstmt.executeUpdate();
        	}
        	catch (SQLException e)
        	{
        		System.out.println("ERROR");
        		logger.log(Level.ERROR, e.getMessage());
        	}
        	finally
        	{
        		if(pstmt != null) pstmt.close();
        	}
        }
        else
        {
        	System.out.println("Failed insert into DB, already processed");
        }
    }
    
    public String formatDate (Object date)
    {
    	char[] dateArray = date.toString().toCharArray();
    	String formattedDate = "";
    	for(int i = 0; i < dateArray.length; i++)
    	{
    		if(dateArray[i] == 'T')
    		{
    			dateArray[i] = ' ';
    		}
    		if(i != dateArray.length - 1)
    		{
    			formattedDate += dateArray[i];
    		}
    	}
    	return formattedDate;
    }
}