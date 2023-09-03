import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
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
  private String copies;

  @Column(name = "copies_available")
  private String copiesAvailable;

  @Column(name = "category")
  private String category;

  @Column(name = "img")
  private String img;
}