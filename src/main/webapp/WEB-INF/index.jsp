<%@page language="java"%>
<%
String webRoot = "WEB-INF/www/";

request.getRequestDispatcher(webRoot+"login.jsp").forward(request,response);
%>