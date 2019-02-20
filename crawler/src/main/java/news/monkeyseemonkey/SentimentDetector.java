package news.monkeyseemonkey;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
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

    public boolean alreadyProcessed(String msgId)
    {
        try
        {
            String sql = "SELECT 1 FROM testing WHERE id like ?";
            PreparedStatement pstmt = db.prepareStatement(sql);
            // append -% to like query arg because id's actually
            // have a sentencie # attached at the end
            pstmt.setString(1, msgId + "-%");
            pstmt.execute();
            return pstmt.getResultSet().next();
        }
        catch(SQLException e)
        {
            logger.log(Level.ERROR, e.getMessage());
            return false;
        }
    }  
    
    public void intoDB(String url, String pub, String body, 
    				String title, List imgs)
    {
    	/*
         * article url as varchar(1000)
         * publisher as varchar(1000)
         * fetch_date as datetime
         * body as longtext
         * title as varchar(1000)
         * image_address as varchar(1000)
         */
                
         try
         {
        	 String sql = "INSERT INTO testing" 
        			 + "(url, publisher, body, title, image)"
                     + " VALUES(?,?,?,?,?)";
             PreparedStatement pstmt = db.prepareStatement(sql);
             pstmt.setString(1, url);
             pstmt.setString(2, pub);
             pstmt.setString(3, body);
             pstmt.setString(4, title);
             pstmt.setString(5, imgs.toString());
             pstmt.executeUpdate();
         }
         catch (SQLException e)
         {
        	 logger.log(Level.ERROR, e.getMessage());
         }
         logger.log(Level.ERROR, url + ", " + imgs);
         logger.log(Level.DEBUG, url + ", " + imgs);
         logger.log(Level.INFO, url + ", " + imgs);
    }
}