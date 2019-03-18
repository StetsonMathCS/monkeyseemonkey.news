package news.monkeyseemonkey.csci;
import static spark.Spark.*;

import org.eclipse.jetty.client.api.Request;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

/**
 * @author Greg Fichthorn Charles Mercenit Boyd Compton
 */
public class App 
{
	public static void main( String[] args )
	{
		Gson gson = new Gson();
		JsonParser parser = new JsonParser();
		
		// String id = what+I+am+searching
		// split plusses what I am searching
		// use search api to find article names
		// respond with list of article names
		
		post("/search/:id", (req, res) -> {
			JsonElement search = parser.parse(res);
		});
		
		
		// string id = the+article+name
		// split by the plusses
		// respond (res) with the article name, date, story (array of bullet points), 
		//array of sources, array of ratings
		
		get("/article/:id", (req, res) -> "results");
	}
}
