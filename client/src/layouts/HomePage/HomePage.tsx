import CallAction from "./components/CallAction";
import Carousel from "./components/Carousel";
import ExloreBooks from "./components/EploreBooks";
// import Footer from "../NavigationAndFooter/Footer";
import LibraryServices from "./components/LibraryService";

function HomePage() {
  return (
    <div>
      <ExloreBooks />
      <Carousel />
      <CallAction />
      <LibraryServices />
    </div>
  );
}

export default HomePage;
