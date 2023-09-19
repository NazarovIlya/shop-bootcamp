package tech.hamlet850.shoplibrary.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "product_table")
@Data
public class Order {

  public Order() {
  }

  public Order(
      String userEmail,
      String orderDate,
      String returnDate,
      Long productId) {
    this.userEmail = userEmail;
    this.orderDate = orderDate;
    this.returnDate = returnDate;
    this.productId = productId;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "user_email")
  private String userEmail;

  @Column(name = "order_date")
  private String orderDate;

  @Column(name = "return_date")
  private String returnDate;

  @Column(name = "product_id")
  private Long productId;

}