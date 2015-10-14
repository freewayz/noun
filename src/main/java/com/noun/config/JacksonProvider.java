package com.noun.config;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;

/**
 * Created by peter on 9/18/15.
 */
@Provider
public class JacksonProvider implements ContextResolver<ObjectMapper> {



    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    static {
        OBJECT_MAPPER.setSerializationInclusion(JsonInclude.Include.NON_EMPTY);
        OBJECT_MAPPER.disable(MapperFeature.USE_GETTERS_AS_SETTERS);
        OBJECT_MAPPER.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);

//        OBJECT_MAPPER.configure(DeserializationFeature.UNWRAP_ROOT_VALUE, true);
//        OBJECT_MAPPER.configure(SerializationFeature.WRAP_ROOT_VALUE, true);

    }

    public JacksonProvider(){

    }
    @Override
    public ObjectMapper getContext(Class<?> aClass) {
        System.out.println("Jackson Provider is called with type " + aClass);
        return OBJECT_MAPPER;
    }


}
