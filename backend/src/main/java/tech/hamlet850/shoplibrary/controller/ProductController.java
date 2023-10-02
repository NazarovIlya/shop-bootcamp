package tech.hamlet850.shoplibrary.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tech.hamlet850.shoplibrary.entity.Product;
import tech.hamlet850.shoplibrary.service.ProductService;
import tech.hamlet850.shoplibrary.utils.JWTParser;
import tech.hamlet850.shoplibrary.config.Environment;

@CrossOrigin(Environment.host)
@RestController
@RequestMapping("/api/products")
public class ProductController {

  private ProductService productService;

  public ProductController(ProductService productService) {
    this.productService = productService;
  }

  private String extractEmail(String token, String string) {
    String email = JWTParser.jwtExtraction(token, "\"sub\"");
    if (email != null) {
      return email;
    }
    return "";
  }

  @PutMapping("/secure/order")
  public Product orderProduct(
      @RequestHeader(value = "Authorization") String token, @RequestParam Long productId) throws Exception {
    String userEmail = extractEmail(token, "\"sub\"");
    return productService.orderProduct(userEmail, productId);
  }

  @GetMapping("/secure/isorder/byuser")
  public Boolean orderProductByUser(
      @RequestHeader(value = "Authorization") String token,
      @RequestParam Long productId) {
    String userEmail = extractEmail(token, "\"sub\"");
    return productService.orderProductByUser(userEmail, productId);
  }

  @GetMapping("/secure/currentorder/count")
  public int currentOrderCount(
      @RequestHeader(value = "Authorization") String token) {
    String userEmail = extractEmail(token, "\"sub\"");
    return productService.currentOrderCount(userEmail);
  }
}