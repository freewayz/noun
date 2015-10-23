/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.dto;

<<<<<<< HEAD
/**
 *
 * @author peter
=======
import java.util.Objects;

/**
 *
 * @author azibit
>>>>>>> a22cdad014d3639cef43215092a8b87d93ae1836
 */
public class RoleDto {
    private String roleId;
    private String description;

    public RoleDto() {
    }

    public RoleDto(String roleId, String description) {
        this.roleId = roleId;
        this.description = description;
    }

<<<<<<< HEAD
    
    
=======
    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "RoleDto{" + "roleId=" + roleId + ", description=" + description + '}';
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 83 * hash + Objects.hashCode(this.roleId);
        hash = 83 * hash + Objects.hashCode(this.description);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final RoleDto other = (RoleDto) obj;
        if (!Objects.equals(this.roleId, other.roleId)) {
            return false;
        }
        if (!Objects.equals(this.description, other.description)) {
            return false;
        }
        return true;
    }
>>>>>>> a22cdad014d3639cef43215092a8b87d93ae1836
    
    
    
}
