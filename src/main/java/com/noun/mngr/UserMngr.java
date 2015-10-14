/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.mngr;

import com.noun.crud.CrudServiceProviderLocal;
import com.noun.entities.Resource;
import com.noun.entities.User;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

/**
 *
 * @author azibit
 */

@Stateless
public class UserMngr implements  UserMngrLocal{
    
    @EJB
    CrudServiceProviderLocal crudServiceProvider;
    
    @Override
    public User create(User resource) {
        return crudServiceProvider.create(resource);
    }

    @Override
    public User update(User resource) {
        return crudServiceProvider.update(resource);
    }

    @Override
    public void delete(String id)  {
        User resource = crudServiceProvider.
                find(id, User.class);
        crudServiceProvider.remove(resource);
    }

    @Override
    public User getUser(String id) {
        return crudServiceProvider.
                find(id, User.class);
    }

    @Override
    public List<User> getAll() {
        return crudServiceProvider.findAll(User.class);
    }



    public int getUserCount() {
            CriteriaQuery cq = crudServiceProvider
                    .getEntityManager().getCriteriaBuilder().createQuery();
            Root<User> rt = cq.from(User.class);
            cq.select(crudServiceProvider
                    .getEntityManager().getCriteriaBuilder().count(rt));
            Query q = crudServiceProvider
                    .getEntityManager().createQuery(cq);
            return ((Long) q.getSingleResult()).intValue();
        
    }
    

    
    
}
