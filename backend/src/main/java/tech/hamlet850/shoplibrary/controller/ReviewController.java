package tech.hamlet850.shoplibrary.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tech.hamlet850.shoplibrary.config.Environment;
import tech.hamlet850.shoplibrary.requestmodels.ReviewRequestModel;
import tech.hamlet850.shoplibrary.service.ReviewService;
import tech.hamlet850.shoplibrary.utils.JWTParser;

@CrossOrigin(Environment.host)
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

  private ReviewService reviewService;

  public ReviewController(ReviewService reviewService) {
    this.reviewService = reviewService;
  }

  private String extractEmail(String token, String string) {
    String email = JWTParser.jwtExtraction(token, "\"sub\"");
    if (email != null) {
      return email;
    }
    return "";
  }

  @GetMapping("/secure/user/product")
  public Boolean reviewProductByUser(
      @RequestHeader(value = "Authorization") String token,
      @RequestParam Long productId) throws Exception {

    String userEmail = extractEmail(token, "\"sub\"");

    if (userEmail == null) {
      throw new Exception("Ошибка пользователя");
    }
    return reviewService.userReviewListed(userEmail, productId);
  }

  @PostMapping("/secure")
  public void postReview(
      @RequestHeader(value = "Authorization") String token,
      @RequestBody ReviewRequestModel requestModel) throws Exception {
    String userEmail = extractEmail(token, "\"sub\"");
    if (userEmail == null) {
      throw new Exception("Ошибка пользователя");
    }
    reviewService.postReview(userEmail, requestModel);
  }
}
