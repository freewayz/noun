/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.util;

/**
 *
 * @author azibit
 */
public interface ResourcePath {
    
    String PATH = "noun";
    
    String USER_PATH = "users/";
    
    String USER_ID = "/userId/";

    
    String CREATE_RESOURSE = "resources/create";
    
    String RESOURCE_ID = "/resourceId/";
    
    String CREATE = "create";
    String REGISTRATION_PATH = USER_PATH + CREATE;
    
    String UPDATE = "update";
    
    String DELETE = "delete";
    
    String GET_ALL_USERS = "users/all";
    
    String GET_ALL_RESOURCES = "resources/all";
    String GET_ALL_RESOURCES_BY_DEP_FACULTY = "resources/query";

}
