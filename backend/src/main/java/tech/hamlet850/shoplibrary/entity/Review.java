package tech.hamlet850.shoplibrary.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import java.sql.Date;

@Entity
@Table(name = "review")
@Data
public class Review {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "user_email")
  private String userEmail;

  @Column(name = "date")
  private Date date;

  @Column(name = "raiting")
  private Long raiting;

  @Column(name = "product_id")
  private Long productId;

  @Column(name = "review_text")
  private String reviewDescription;

}
