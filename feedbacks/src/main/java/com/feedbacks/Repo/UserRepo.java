package com.feedbacks.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feedbacks.Model.User;

public interface UserRepo extends JpaRepository<User, Integer> {

 User findByMail(String mail) ;
}
