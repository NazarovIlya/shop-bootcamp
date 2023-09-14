import { Link } from "react-router-dom";
import Book from "../../../models/Book";
interface Props {
  book: Book;
}

function ReturnBookItem({ book }: Props) {
  return (
    <div className="col-xs-6 col-sm-6 colmd-4 col-lg-3 mb-3">
      <div className="text-center">
        {book.img ? (
          <img
            className="image-carousel carousel-img"
            src={book.img}
            alt="book_photo"
          />
        ) : (
          <img
            className="image-carousel carousel-img"
            src={require("./../../../Images/ImagesBooks/book_000.png")}
            alt="book_photo_default"
          />
        )}
        <h6>{book.title}</h6>
        <p>{book.creator}</p>
        <Link className="btn main-color text-white" to={`/checkout/${book.id}`}>
          More...
        </Link>
      </div>
    </div>
  );
}

export default ReturnBookItem;
