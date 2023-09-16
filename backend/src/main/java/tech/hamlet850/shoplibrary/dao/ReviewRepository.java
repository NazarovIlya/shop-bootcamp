package tech.hamlet850.shoplibrary.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

import tech.hamlet850.shoplibrary.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

  Page<Review> findByRepository(@RequestParam("productId") Long productId, Pageable pageable);

  Page<Review> findByUserEmailAndProductId(String userEmail, Long productId);

}
