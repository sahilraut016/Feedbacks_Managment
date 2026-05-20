package com.feedbacks.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feedbacks.Model.Feedback;
import com.feedbacks.Services.FeedBackService;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "http://localhost:3000")
public class FeedBackController 
{
	
@Autowired
private FeedBackService service;

@PostMapping("/add")
public Feedback addFeedback( @RequestBody Feedback feedback) {
	return service.addFeedBack(feedback);
}

@GetMapping("/user/{userId}")
public List<Feedback> userFeedback(@PathVariable Integer userId) {
    return service.userFeedback(userId);
}

@GetMapping("/all")
public List<Feedback> allFeedBack(){
	return service.allFeedBack();
}

@PutMapping("/update/{id}")
public Feedback updateFeedback(@PathVariable Integer id, @RequestBody Feedback feedback) {
    return service.updateFeedback(id, feedback);
}

@DeleteMapping("/delete/{id}")
public String deleteFeedback(@PathVariable Integer id) {
    service.deleteFeedback(id);
    return "Deleted Successfully";
}


}
