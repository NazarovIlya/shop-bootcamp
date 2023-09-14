package tech.hamlet850.shoplibrary.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

import tech.hamlet850.shoplibrary.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

        Page<Product> findByTitleContaining(
                        @RequestParam("title") String title,
                        Pageable pageable);

        Page<Product> findByCategory(
                        @RequestParam("category") String category,
                        Pageable pageable);
}