/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.resources;

import com.noun.dto.ResourceDto;
import com.noun.dto.UserDto;
import com.noun.service.NounService;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 *
 * @author azibit
 */

@Stateless
public class UserResource implements UserResourceLocal {

    @EJB
    NounService service;

    @Override
    public ResourceDto addResource(ResourceDto resourceDto) {
        return service.saveResource(resourceDto);
    }

    @Override
    public UserDto updateUser(String userId, UserDto userDto) {
        return null;
    }

    @Override
    public Response getAllUsers() {
        List<UserDto> userDtos = service.getAllUsers();
        if (userDtos.size() < 0) {
            return Response.status(Response.Status.NO_CONTENT).build();
        } else {
            return Response.status(Response.Status.OK).entity(userDtos).build();
        }
    }

    @Override
    public Response getAllResources() {
     List<ResourceDto> resourceDtos = service.getAllResources();
        if (resourceDtos.size() < 0) {
            return Response.status(Response.Status.NO_CONTENT).build();
        } else {
            return Response.status(Response.Status.OK)
                    .entity(resourceDtos).build();
        }
    }
    
    @Override
    public UserDto getUser(String userId){
        return service.getUser(userId);
    }
    
    @Override
    public List<ResourceDto> getResourceByDeptAndFaculty
        (String deptId, String faculty){
        
            return service.getByDeptAndFaculty(deptId, faculty);
        }

    public  Response registration(UserDto userDto){
        Response response;
        if(!userDto.getEmail().isEmpty() ){
            UserDto newUser = service.saveUser(userDto);
            if (newUser != null) {
                response = Response.status(Response.Status.OK).entity(newUser).build();
            }else {
                response = Response.status(Response.Status.NOT_MODIFIED).build();
            }
        }else {
            response = Response.status(Response.Status.NOT_MODIFIED).build();
        }
        return  response;

    }

    @Override
    public Response getResourceByDept(String deptId) {
        List<ResourceDto> resourceDtos =  service.getByDept(deptId);
        
        if (resourceDtos.size() < 0) {
            return Response.status(Response.Status.NO_CONTENT).build();
        } else {
            return Response.status(Response.Status.OK).entity(resourceDtos).build();
        }
    }

    @Override
    public Response getResourceByFaculty(String faculty) {
        List<ResourceDto> resourceDtos = service.getByFaculty(faculty);
        
        if (resourceDtos.size() < 0) {
            return Response.status(Response.Status.NO_CONTENT).build();
        } else {
            return Response.status(Response.Status.OK).entity(resourceDtos).build();
        }
    }


}
