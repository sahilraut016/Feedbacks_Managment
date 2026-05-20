package com.feedbacks.Repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.feedbacks.Model.Feedback;

public interface FeedBackRepo extends JpaRepository<Feedback, Integer> {

    List<Feedback> findByUserId(Integer userId);

}