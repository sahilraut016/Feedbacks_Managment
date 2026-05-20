package com.feedbacks.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.feedbacks.Model.User;
import com.feedbacks.Repo.UserRepo;

@Service
public class UserService
{
@Autowired
 private UserRepo repo;

	public User login(String mail,String pass) {
		User user = repo.findByMail(mail);
		if(user != null && user.getPass().equals(pass)) {
			return user;
		}
		return null;
	}
	
	public User register(User user) {
		User users = repo.findByMail(user.getMail());
		if(users != null) {
			return null;	
		}
		if(user.getRole() == null) {
			user.setRole("USER");
		}
		return repo.save(user);
		
	}
}
