/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.mngr;

import com.noun.entities.Resource;
import com.noun.entities.User;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author azibit
 */

@Local
public interface UserMngrLocal {
    User create(User resource);

    User update(User resource);

    void delete(String id);

    User getUser(String id);

    List<User> getAll();

    int getUserCount();
    
    
    
    
}
