package com.codecool.teamup.service;

import com.codecool.teamup.model.feedback.Feedback;
import com.codecool.teamup.model.feedback.FeedbackDTO;
import com.codecool.teamup.model.user.MyUser;
import com.codecool.teamup.model.user.UserEntity;
import com.codecool.teamup.repository.FeedbackRepository;
import com.codecool.teamup.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;
    private final UserRepository userRepository;

    public FeedbackService(FeedbackRepository feedbackRepository, UserRepository userRepository) {
        this.feedbackRepository = feedbackRepository;
        this.userRepository = userRepository;
    }

    public void registerFeedback(long userId, FeedbackDTO feedbackDTO) {
        Feedback feedback = new Feedback();
        feedback.setFeedbackText(feedbackDTO.feedbackText());

        Optional<UserEntity> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            UserEntity user = optionalUser.get();
            feedback.setUser(user);
            feedback.setUserName(user.getUsername());
            feedback.setUserImage(user.getImage());
            feedback.setUserLevel(user.getLevel());
            feedbackRepository.save(feedback);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    public List<Feedback> getFeedbacksByUserId(Long id) {
        return feedbackRepository.findAllByUserId(id);
    }

    public void deleteFeedback(long feedbackId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        long userId = ((MyUser) authentication.getPrincipal()).getId();
        Optional<Feedback> optionalFeedback = feedbackRepository.findById(feedbackId);
        if (optionalFeedback.isPresent()) {
            if (optionalFeedback.get().getUser().getId() == userId || authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
                feedbackRepository.deleteById(feedbackId);
            } else {
                throw new RuntimeException("Unauthorized feedback request");
            }
        } else {
            throw new RuntimeException("Feedback not found");
        }
    }
}
