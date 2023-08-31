function ReturnBookItem() {
  return (
    <div className="col-xs-6 col-sm-6 colmd-4 col-lg-3 mb-3">
      <div className="text-center">
        <img
          className="image-carousel image-img"
          src={require("./../../../Images/ImageDecor/image-01.png")}
          alt="book_photo"
        />
        <h6>Книга</h6>
        <p>Наименование</p>
        <a className="btn main-color text-white" href="/">
          Текст 1
        </a>
      </div>
    </div>
  );
}

export default ReturnBookItem;
