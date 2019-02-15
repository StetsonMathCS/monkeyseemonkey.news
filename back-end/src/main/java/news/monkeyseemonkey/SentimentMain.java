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
        try {
            props.load(new FileInputStream("config.properties"));
        } catch(IOException e) {
            System.out.println(e);
            System.exit(-1);
        }

        Connection db = DriverManager.getConnection("jdbc:sqlite:" + props.getProperty("sqlitedb"));
        String tableSql = "CREATE TABLE IF NOT EXISTS testing (\n"
                + "	id text PRIMARY KEY,\n"
                + " datefound DATE DEFAULT CURRENT_DATE,\n"
//                + "	source text NOT NULL,\n"
                + " msg text NOT NULL,\n"
//                + "	sentiment text NOT NULL,\n"
//                + " sentiment_num int NOT NULL,\n"
//                + " score double NOT NULL\n"
                + " image text NOT NULL\n"
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
