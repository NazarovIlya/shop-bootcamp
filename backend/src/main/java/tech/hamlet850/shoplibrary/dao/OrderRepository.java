package tech.hamlet850.shoplibrary.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.hamlet850.shoplibrary.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

  Order findByUserEmailAndProductId(String userEmail, Long productId);

  List<Order> findProductByUserEmail(String userEmail);
}