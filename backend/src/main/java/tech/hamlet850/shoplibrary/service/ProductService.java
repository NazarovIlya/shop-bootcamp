package tech.hamlet850.shoplibrary.service;

import java.time.LocalDate;
import java.util.*;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tech.hamlet850.shoplibrary.dao.*;
import tech.hamlet850.shoplibrary.entity.*;

@Service
@Transactional
public class ProductService {

  private ProductRepository productRepository;
  private OrderRepository orderRepository;

  public ProductService(
      ProductRepository productRepository,
      OrderRepository orderRepository) {
    this.productRepository = productRepository;
    this.orderRepository = orderRepository;
  }

  public Product orderProduct(String userEmail, Long productId) throws Exception {
    Optional<Product> product = productRepository.findById(productId);

    Order validate = orderRepository.findByUserEmailAndProductId(userEmail, productId);

    if (!product.isPresent()
        || validate != null
        || product.get().getCopiesAvailable() <= 0) {
      throw new Exception("Ошибка");
    }

    product.get().setCopiesAvailable(product.get().getCopiesAvailable() - 1);
    productRepository.save(product.get());

    Order order = new Order(
        userEmail,
        LocalDate.now().toString(),
        LocalDate.now().plusDays(7).toString(),
        product.get().getId());

    orderRepository.save(order);
    return product.get();
  }

  public Boolean orderProductByUser(
      String userEmail,
      Long productId) {
    Order validate = orderRepository.findByUserEmailAndProductId(userEmail, productId);
    return validate != null;
  }

  public int currentOrderCount(String userEmail) {
    return orderRepository.findProductByUserEmail(userEmail).size();
  }
}