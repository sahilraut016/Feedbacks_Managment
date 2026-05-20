package com.feedbacks.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feedbacks.Model.User;
import com.feedbacks.Services.UserService;

@RestController()
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserContoller 
{

	@Autowired
	private UserService service;
	
	@PostMapping("/login")
	public User login(@RequestBody User user) {
		return service.login(user.getMail(), user.getPass());
	}
	
	@PostMapping("/register")
	public User register(@RequestBody User user) {
		return service.register(user);
	}
}