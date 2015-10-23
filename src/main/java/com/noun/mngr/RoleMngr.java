/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.mngr;

import com.noun.crud.CrudServiceProviderLocal;
import com.noun.entities.Role;
import java.util.List;
import javax.ejb.EJB;

/**
 *
 * @author azibit
 */
public class RoleMngr implements RoleLocal{
    
    @EJB
    private CrudServiceProviderLocal crud;

    @Override
    public Role create(Role role) {
        return crud.create(role);
    }

    @Override
    public Role update(Role role) {
        return crud.update(role);
    }

    @Override
    public Role get(String roleId) {
        return crud.find(roleId, Role.class);
    }

    @Override
    public void delete(String roleId) {
        crud.remove(get(roleId));
    }

    @Override
    public List<Role> getAll() {
        return crud.findAll(Role.class);
    }
    
}
