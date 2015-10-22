/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.dto;

import com.noun.entities.Resource;
import com.noun.entities.Role;
import com.noun.entities.User;
import com.noun.mngr.RoleLocal;
import javax.ejb.EJB;

/**
 *
 * @author azibit
 */
public class EntityMapper {
    
    @EJB
    private static RoleLocal roleCrud;
    
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
        user.setOtherName(userDto.getOtherName());
        user.setPassword(userDto.getPassword());
        user.setRoleId(mapToRole(userDto.getRole()));
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
        userDto.setRole(mapToRoleDto(user.getRoleId()));
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
    
    public static Role mapToRole(RoleDto roleDto){
        if(roleDto == null)
            return null;
        
        Role role = new Role();
        role.setDescription(roleDto.getDescription());
        role.setRoleId(roleDto.getRoleId());
        
        return role;
    }
    
    public static RoleDto mapToRoleDto(Role role){
        if(role == null)
            return null;
        
        RoleDto roleDto = new RoleDto();
        roleDto.setDescription(role.getDescription());
        roleDto.setRoleId(role.getRoleId());
        
        return roleDto;
    }
    
    
}
