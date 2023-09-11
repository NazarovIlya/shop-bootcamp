import Book from "../../../models/Book";

interface Props {
  book: Book;
}

function SearchBookItem({ book }: Props) {
  return (
    <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-2">
          <div className="d-none d-lg-block">
            {book.img ? (
              <img
                src={book.img}
                className="image-carousel carousel-img"
                alt="book-item"
              />
            ) : (
              <img
                src={require("./../../../Images/ImagesBooks/book_000.png")}
                className="image-carousel carousel-img"
                alt="book_item_default"
              />
            )}
          </div>
          <div className="d-lg-none d-flex justify-content-center align-items-center">
            {book.img ? (
              <img
                src={book.img}
                className="image-carousel carousel-img"
                alt="book-item"
              />
            ) : (
              <img
                src={require("./../../../Images/ImagesBooks/book_000.png")}
                className="image-carousel carousel-img"
                alt="book_item_default"
              />
            )}
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{book.creator}</h5>
              <h4>book.title</h4>
              <p className="card-text">{book.description}</p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-content-center">
            <a href="/" className="btn btn-md main-color text-center">
              More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBookItem;
