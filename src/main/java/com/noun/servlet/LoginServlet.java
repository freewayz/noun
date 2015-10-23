///*
// * To change this template, choose Tools | Templates
// * and open the template in the editor.
// */
//
//package com.noun.servlet;
//
//
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.util.logging.Level;
//import java.util.logging.Logger;
//import javax.ejb.EJB;
//import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//@WebServlet(name="LoginServlet", urlPatterns={"/login"})
//public class LoginServlet extends HttpServlet {
//    @EJB
//    private UserMngrLocal userAccountsMngr;
//
//    /**
//     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
//     * @param request servlet request
//     * @param response servlet response
//     * @throws ServletException if a servlet-specific error occurs
//     * @throws IOException if an I/O error occurs
//     */
//    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//        response.setContentType("text/html;charset=UTF-8");
//        PrintWriter out = response.getWriter();
//        String username = request.getParameter("j_username");
//        String password = request.getParameter("j_password");
//
//        //login
//        try {
//            User user = userAccountsMngr.getUser(username);
//            if (user == null) {
//                prompt(request, out, "Invalid username. Check and try again.");
//                return;
//            }
//
//            request.login(username, password);
//            response.sendRedirect("");
//        } catch(ServletException | IOException ex) { //authentication failed
//            Logger.getLogger(LoginServlet.class.getName())
//                    .log(Level.INFO, null, ex);
//            prompt(request, out, null);
//            //throw new RuntimeException(ex);
//        }
//    }
//
//    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
//    /**
//     * Handles the HTTP <code>GET</code> method.
//     * @param request servlet request
//     * @param response servlet response
//     * @throws ServletException if a servlet-specific error occurs
//     * @throws IOException if an I/O error occurs
//     */
//    @Override
//    protected void doGet(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//        processRequest(request, response);
//    }
//
//    /**
//     * Handles the HTTP <code>POST</code> method.
//     * @param request servlet request
//     * @param response servlet response
//     * @throws ServletException if a servlet-specific error occurs
//     * @throws IOException if an I/O error occurs
//     */
//    @Override
//    protected void doPost(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//        processRequest(request, response);
//    }
//
//    /**
//     * Returns a short description of the servlet.
//     * @return a String containing servlet description
//     */
//    @Override
//    public String getServletInfo() {
//        return "Login Servlet";
//    }// </editor-fold>
//
//    private void prompt(HttpServletRequest request, PrintWriter out, String msg) {
//        out.println("<html>");
//        out.println("<head>");
//        out.println("<script type=\"text/javascript\">");
//
//        //display message
//        if (msg != null && !msg.isEmpty()) {
//            out.println("window.alert(\"" + msg + "\")");
//        }
//
//        //reload login page
//        out.println("window.location = \"" + request.getContextPath()
//                + SharedConstants.LOGIN_HTML + "\";");
//
//        out.println("</script>");
//        out.println("</head>");
//        out.println("<body>");
//        out.println("</body>");
//        out.println("</html>");
//        out.flush();
//    }
//}
