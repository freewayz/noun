/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.resources;

import com.noun.dto.ResourceDto;
import com.noun.dto.UserDto;
import com.noun.util.ResourcePath;

import javax.ejb.Local;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 *
 * @author azibit
 */

@Local
@Path(ResourcePath.PATH)
public interface UserResourceLocal {
    
    @Path(ResourcePath.CREATE_RESOURSE)
    @POST
    @Consumes("application/json")
    @Produces("application/json")
    ResourceDto addResource(ResourceDto resourceDto);
    
    @Path(ResourcePath.UPDATE)
    @PUT
    @Consumes("application/json")
    @Produces("application/json")
    UserDto updateUser(@PathParam("") String employeeId , UserDto userDto);
    
    @Path(ResourcePath.GET_ALL_USERS)
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    Response getAllUsers();
    
    @Path(ResourcePath.GET_ALL_RESOURCES) 
    @GET
    @Produces(MediaType.APPLICATION_JSON)
     Response getAllResources();
    
    @Path(ResourcePath.USER_PATH) 
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    UserDto getUser(@PathParam("userId") String userId);
    
    @Path(ResourcePath.GET_ALL_RESOURCES_BY_DEP_FACULTY+"/{deptId}/{faculty}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    List<ResourceDto>
        getResourceByDeptAndFaculty(@PathParam("deptId") String deptId,
                @PathParam("faculty") String faculty);

    @Path(ResourcePath.REGISTRATION_PATH) @POST @Consumes("application/json") @Produces("application/json")
    Response registration(UserDto userDto);

}
