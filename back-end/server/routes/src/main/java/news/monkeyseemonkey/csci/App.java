package news.monkeyseemonkey.csci;
import static spark.Spark.*;
import com.google.gson.Gson;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	Gson gson = new Gson();
    	String app = gson.toJson(App.class);
    	System.out.println(app);
        get("/hello", (req, res) -> "Hello World");
        get("/home", (req, res) -> "homepage");
        get("/home/search", (req, res) -> "searchbar");
        get("/home/results", (req, res) -> "results");
    }
}
