/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.service;

import com.noun.crud.CrudServiceProviderLocal;
import com.noun.dto.EntityMapper;
import com.noun.dto.ResourceDto;
import com.noun.dto.UserDto;
import com.noun.entities.Resource;
import com.noun.entities.User;
import com.noun.mngr.ResourceMngrLocal;
import com.noun.mngr.UserMngrLocal;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * @author azibit
 */
@Stateless
public class NounService {

    @EJB
    CrudServiceProviderLocal crudServiceProviderLocal;
    
    @EJB
    UserMngrLocal userMngrLocal;
    
    @EJB
    ResourceMngrLocal resourceLocal;
    

    public UserDto saveUser(UserDto newUserDto) {

        //TODO get the
        return EntityMapper.mapToUserDto(crudServiceProviderLocal
                .create(EntityMapper.mapToUser(newUserDto)));
    }
    
    public ResourceDto saveResource(ResourceDto newResourceDto) {
        String hrefTag = "<a href=\""+newResourceDto.getName()+"\"></a>";
        newResourceDto.setUrl(hrefTag);
        //create the date
        newResourceDto.setDateUploaded(new Date());
        return EntityMapper.mapToResourceDto(crudServiceProviderLocal
                .create(EntityMapper.mapToResource(newResourceDto)));
    }
    
    public UserDto getUser(String id){
        return EntityMapper.mapToUserDto(userMngrLocal.getUser(id));
    }

    public List<UserDto> getAllUsers() {
        List<User> users = crudServiceProviderLocal.findAll(User.class);
        List<UserDto> userDtos = new ArrayList<>();
        if (users != null || users.size() > 0) {
            for (User user : users) {
                userDtos.add(EntityMapper.mapToUserDto(user));
            }
            return userDtos;
        } else {
            return userDtos;
        }

    }
    
    public List<ResourceDto> getAllResources(){
        List<Resource> resources = crudServiceProviderLocal.findAll(Resource.class);
        List<ResourceDto> resourcesDto = new ArrayList();
        
        if (resources != null || resources.size() > 0) {
            for (Resource resource : resources) {
                resourcesDto.add(EntityMapper.mapToResourceDto(resource));
            }
            return resourcesDto;
        } else {
            return resourcesDto;
        }
    }
    
    public List<ResourceDto> getByDeptAndFaculty(String deptId, String faculty){
        List<Resource> resources = 
                resourceLocal.getByDeptAndFaculty(deptId, faculty);
        List<ResourceDto> resourcesDto = new ArrayList();
        
        if (resources != null || resources.size() > 0) {
            for (Resource resource : resources) {
                resourcesDto.add(EntityMapper.mapToResourceDto(resource));
            }
            return resourcesDto;
        } else {
            return resourcesDto;
        }
    }
    
}
