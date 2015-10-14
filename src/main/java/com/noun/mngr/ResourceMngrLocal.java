/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.mngr;

import com.noun.entities.Resource;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author azibit
 */

@Local
public interface ResourceMngrLocal {
    Resource create(Resource resource);

    Resource update(Resource resource);

    void delete(Integer id);

    Resource getResource(int id);

    List<Resource> getAll();
    
    int getResourceCount();

    List<Resource> getByDeptAndFaculty(String deptId, String faculty);
}
