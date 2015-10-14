/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.resources;

import com.noun.dto.ResourceDto;
import com.noun.dto.UserDto;
import com.noun.util.ResourcePath;
import java.util.List;
import javax.ejb.Local;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

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
    
//    @Path(ResourcePath.UPDATE)
//    @PUT
//    @Consumes("application/json")
//    @Produces("application/json")
//    UserDto updateUser(@PathParam("") String employeeId , UserDto userDto);
    
//    @Path(ResourcePath.GET_ALL_USERS) 
//    @GET
//    @Produces(MediaType.APPLICATION_JSON)
//    public   Response getAllUsers();
    
    @Path(ResourcePath.GET_ALL_RESOURCES) 
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllResources();
    
    @Path(ResourcePath.USER_PATH) 
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public   UserDto getUser(@PathParam("userId") String userId);
    
    @Path(ResourcePath.GET_ALL_RESOURCES_BY_DEP_FACULTY+"/{deptId}/{faculty}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<ResourceDto> 
        getResourceByDeptAndFaculty(@PathParam("deptId") String deptId,
                @PathParam("faculty") String faculty);

}
