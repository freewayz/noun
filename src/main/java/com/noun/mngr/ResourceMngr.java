/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.mngr;

import com.noun.crud.CrudServiceProviderLocal;
import com.noun.crud.DynamicQueryTwo;
import com.noun.crud.QueryParameter;
import com.noun.entities.Resource;
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
public class ResourceMngr implements  ResourceMngrLocal{
    
    @EJB
    CrudServiceProviderLocal crudServiceProvider;
    
    @Override
    public Resource create(Resource resource) {
        return crudServiceProvider.create(resource);
    }

    @Override
    public Resource update(Resource resource) {
        return crudServiceProvider.update(resource);
    }

    @Override
    public void delete(Integer id)  {
        Resource resource = crudServiceProvider.
                find(id, Resource.class);
        crudServiceProvider.delete(resource);
    }
    @Override
    public Resource getResource(int id) {
        return crudServiceProvider.
                find(id, Resource.class);
    }

    @Override
    public List<Resource> getAll() {
        return crudServiceProvider.findAll(Resource.class);
    }



    @Override
    public int getResourceCount() {
            CriteriaQuery cq = crudServiceProvider
                    .getEntityManager().getCriteriaBuilder().createQuery();
            Root<Resource> rt = cq.from(Resource.class);
            cq.select(crudServiceProvider
                    .getEntityManager().getCriteriaBuilder().count(rt));
            Query q = crudServiceProvider
                    .getEntityManager().createQuery(cq);
            return ((Long) q.getSingleResult()).intValue();

    }

    @Override
    public List<Resource> getByDeptAndFaculty(String deptId, String faculty) {
        return crudServiceProvider
                .findByNamedQuery("Resource.findByDeptAndFaculty",
                        QueryParameter.with("dept", deptId)
                                .and("faculty", faculty).parameters(), 
                Resource.class);
    }
}
