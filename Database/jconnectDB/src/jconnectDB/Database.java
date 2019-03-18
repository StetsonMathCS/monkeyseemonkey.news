package jconnectDB;



import java.sql.*;

public class Database {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Database dbUser = new Database();
        dbUser.executeQueries();
	}

	private void executeQueries() {
		
		 try {
	            Class.forName("com.mysql.jdbc.Driver");
	            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:2222/monkey", "monkey", "epJiphQuitmeoneykbet");
	            Statement stmt = connection.createStatement();
	            
	            ResultSet query_set = stmt.executeQuery("SELECT web_address FROM articles");
	            while (query_set.next()) {
	            	  String web_address = query_set.getString("web_address");
	            	  System.out.println(web_address+ '\n');
	            	}
	            
	            System.out.println("total count: ");
	          //query counts the number of rows in the dom_all_vuln_infomation table
	          ResultSet rs = stmt.executeQuery("SELECT COUNT(*) FROM articles;");
	          //get the resulting number
	                      rs.next();
	          int count = rs.getInt(1);
	          //print out the answer
	          System.out.println("\tThere is a total of " + count + " articles.");
	            
		 } catch (ClassNotFoundException | SQLException e) {
	            e.printStackTrace();
		 }
		 
	}
}
