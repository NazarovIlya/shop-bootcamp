import { useState, useEffect } from "react";
import Book from "../../../models/Book";
import SpinnerLoading from "../../Utils/SpinnerLoading";
import SearchBookItem from "./SearchBookItem";
import LibraryServices from "./LibraryService";
import Pagination from "../../Utils/Panination";

function SearchBooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState<any>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const booksPerPage = Number(process.env.REACT_APP_API_COUNT_BOOKS_PER_PAGE);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl = `${process.env.REACT_APP_API_URL}/products`;
      const url = `${baseUrl}?page${currentPage - 1}&size${booksPerPage}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Ошибка загрузки");
      }

      const responseJson = await response.json();
      const responseData = responseJson._embedded.products;

      setTotalAmountOfBooks(responseJson.page.totalElements);
      setTotalPages(responseJson.page.totalPages);

      const loadedBooks: Book[] = [];

      for (const key in responseData) {
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          creator: responseData[key].creator,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copiesAvailable,
          category: responseData[key].category,
          img: responseData[key].img,
        });
      }

      setBooks(loadedBooks);
      setIsLoading(false);
    };
    fetchBooks().catch((err: any) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (loading) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  const indexOfLastBook: number = currentPage * booksPerPage;
  const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
  let lastItem =
    booksPerPage * currentPage <= totalAmountOfBooks
      ? booksPerPage * currentPage
      : totalAmountOfBooks;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-5 col-6">
            <div className="d-flex">
              <input
                type="search"
                className="form-control"
                placeholder="Поиск"
                aria-labelledby="Search"
                onClick={(e) => {}}
              />
              <button className="btn btn-outline-success" onClick={(e) => {}}>
                Найти
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Категория
              </button>
              <ul className="dropdown-menu">
                <li onClick={(e) => {}}>
                  <a href="/" className="dropdown-item">
                    Категория 1
                  </a>
                </li>
                <li onClick={(e) => {}}>
                  <a href="/" className="dropdown-item">
                    Категория 2
                  </a>
                </li>
                <li onClick={(e) => {}}>
                  <a href="/" className="dropdown-item">
                    Категория 3
                  </a>
                </li>
                <li onClick={(e) => {}}>
                  <a href="/" className="dropdown-item">
                    Категория 4
                  </a>
                </li>
                {/* <li onClick={(e) => {}}>
                  <a href="/" className="dropdown-item">
                    Категория 5
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {totalAmountOfBooks > 0 ? (
          <>
            <div className="mt-3">
              <h5>Всего книг:{totalAmountOfBooks}</h5>
            </div>
            <p>
              На странице: {indexOfFirstBook + 1} .. {lastItem} из{" "}
              {totalAmountOfBooks}
            </p>
            {books.map((item) => (
              <SearchBookItem book={item} />
            ))}
          </>
        ) : (
          <LibraryServices />
        )}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
}

export default SearchBooksPage;
