package tech.hamlet850.shoplibrary.requestmodels;

import java.util.Optional;

import lombok.Data;

@Data
public class ReviewRequestModel {
  private double rating;
  private Long productId;
  private Optional<String> reviewDescription;
}
