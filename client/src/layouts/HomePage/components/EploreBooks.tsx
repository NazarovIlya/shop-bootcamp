import Carousel from "./Carousel";

function ExloreBooks() {
  return (
    <div className="p-2 mb-4 bg-dark header">
      <div className="container-fluid py-3 text-white d-flex justify-content-center aling-item-center">
        <div>
          <h1 className="display-5">Источник</h1>
          <p className="display-10">знаний</p>
          <a href="/" type="button" className="btn btn-primary main-color">
            Избранные книги
          </a>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default ExloreBooks;
