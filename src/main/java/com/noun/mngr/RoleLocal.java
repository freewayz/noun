/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.mngr;

import com.noun.entities.Role;
import java.util.List;

/**
 *
 * @author azibit
 */
public interface RoleLocal {
    Role create(Role role);
    
    Role update(Role role);
    
    Role get(String roleId);
    
    void delete(String roleId);
    
    List<Role> getAll();
}
