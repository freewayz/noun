/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.noun.crud;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author faizbash
 */
public class QueryParameter {
    private Map<String,Object> parameters = null;
    private QueryParameter(String name,Object value){
        this.parameters = new HashMap<String,Object>();
        this.parameters.put(name, value);
    }
    public static QueryParameter with(String name,Object value){
        return new QueryParameter(name, value);
    }
    public QueryParameter and(String name,Object value){
        this.parameters.put(name, value);
        return this;
    }
    public Map<String,Object> parameters(){
        return this.parameters;
    }
}
