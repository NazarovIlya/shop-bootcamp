function Footer() {
  return (
    <div className="main-color">
      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-5 main-color">
        <p className="col-md-4 mb-0 text-white">&copy; books.hamlet850.tech</p>
        <ul className="nav navbar-dark col-md-4 justufy-content-end">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-white">
              Домой
            </a>
          </li>
          <li className="nav-item">
            <a href="/search" className="nav-link px-2 text-white">
              Поиск
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
