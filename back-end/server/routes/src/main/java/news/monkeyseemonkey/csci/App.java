package news.monkeyseemonkey.csci;
import static spark.Spark.*;

import org.eclipse.jetty.client.api.Request;

import com.google.gson.Gson;

/**
 * @author Greg Fichthorn Charles Mercenit Boyd Compton
 */
public class App 
{
	public static void main( String[] args )
	{
		Gson gson = new Gson();
		
		String home = "/home";
		System.out.println(gson.toJson(home));
		get(home, (req, res) -> "homepage");
		
		String home_search = "/home/search";
		System.out.println(gson.toJson(home_search));
		get(home_search, (req, res) -> "searchbar");
		
		String home_results = "/home/results";
		System.out.println(gson.toJson(home_results));
		get(home_results, (req, res) -> "results");
	}
}
