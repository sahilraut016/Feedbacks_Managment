package com.feedbacks.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.feedbacks.Model.Feedback;
import com.feedbacks.Repo.FeedBackRepo;

@Service
public class FeedBackService 
{
@Autowired
	private FeedBackRepo repo;

public Feedback addFeedBack(Feedback feedback) {
	return repo.save(feedback);	
}

public List<Feedback> userFeedback(Integer userId) {
    return repo.findByUserId(userId);
}
	

public List<Feedback> allFeedBack(){
	return repo.findAll();

}

public Feedback updateFeedback(Integer id, Feedback feedback) {
    Feedback old = repo.findById(id).orElse(null);
    if(old == null) return null;

    old.setFeedback(feedback.getFeedback());
    return repo.save(old);
}

public void deleteFeedback(Integer id) {
    repo.deleteById(id);
}

}
