/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.dto;

import com.noun.entities.Resource;
import com.noun.entities.User;

/**
 *
 * @author azibit
 */
public class EntityMapper {
    
    public static User mapToUser(UserDto userDto){
        if(userDto == null){
            return  null;
        }
        
        User user = new User();
        user.setCourse(userDto.getCourse());
        user.setEmail(userDto.getEmail());
        user.setUserId(userDto.getUserId());
        user.setDept(userDto.getDept());
        user.setFaculty(userDto.getFaculty());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setRole(userDto.getRole());
        user.setOtherName(userDto.getOtherName());
        user.setPassword(userDto.getPassword());
        return user;
    }
    
    public static UserDto mapToUserDto(User user){
        if(user == null){
            return  null;
        }
        UserDto userDto = new UserDto();
        userDto.setCourse(user.getCourse());
        userDto.setEmail(user.getEmail());
        userDto.setUserId(user.getUserId());
        userDto.setDept(user.getDept());
        userDto.setFaculty(user.getFaculty());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setRole(user.getRole());
        userDto.setOtherName(user.getOtherName());
        userDto.setPassword(user.getPassword());
        return userDto;
    }
    
    public static Resource mapToResource(ResourceDto resourceDto){
        if(resourceDto == null){
            return  null;
        }
        Resource resource = new Resource();
        resource.setCourse(resourceDto.getCourse());
        resource.setId(resourceDto.getId());
        resource.setDateUploaded(resourceDto.getDateUploaded());
        resource.setDept(resourceDto.getDepartment());
        resource.setName(resourceDto.getName());
        resource.setUrl(resourceDto.getUrl());
        resource.setFaculty(resourceDto.getFaculty());
       
        return resource;
    }
    
    public static ResourceDto mapToResourceDto(Resource resource){
       if(resource == null){
            return  null;
        }
        ResourceDto resourceDto = new ResourceDto();
        resourceDto.setCourse(resource.getCourse());
        resourceDto.setId(resource.getId());
        resourceDto.setDateUploaded(resource.getDateUploaded());
        resourceDto.setDepartment(resource.getDept());
        resourceDto.setName(resource.getName());
        resourceDto.setUrl(resource.getUrl());
        resourceDto.setFaculty(resource.getFaculty());
       
        return resourceDto;
    }
}
