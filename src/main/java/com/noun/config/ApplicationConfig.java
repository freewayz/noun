/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.config;

import java.util.Collection;
import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;

/**
 *
 * @author azibit
 */

@ApplicationPath("api")
public class ApplicationConfig extends ResourceConfig{

    public ApplicationConfig() {
        register(JacksonFeature.class);
        register(JacksonProvider.class);
        packages("com.noun.resources");
        
    }

    @Override
    public Collection<String> getPropertyNames() {
        return super.getPropertyNames(); //To change body of generated methods, choose Tools | Templates.
    }
    
    
    
  
   
}
