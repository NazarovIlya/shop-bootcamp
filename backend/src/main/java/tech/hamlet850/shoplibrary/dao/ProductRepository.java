package tech.hamlet850.shoplibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.hamlet850.shoplibrary.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}