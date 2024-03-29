package tech.hamlet850.shoplibrary.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "product")
@Data
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "title")
  private String title;

  @Column(name = "creator")
  private String creator;

  @Column(name = "description")
  private String description;

  @Column(name = "copies")
  private int copies;

  @Column(name = "copies_available")
  private int copiesAvailable;

  @Column(name = "category")
  private String category;

  @Column(name = "img")
  private String img;
}