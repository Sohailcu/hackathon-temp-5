import AnnouncementBar from "./components/AnnoucementBar";
import BestSeller from "./components/bestSeller";
import Categories from "./components/categories";
import Footer from "./components/footer";
import Futuredpost from "./components/futuredpost";
import GreenDiv from "./components/green-div";
import Header from "./components/Header";
import HeroSection from "./components/herosection";
import Universe from "./components/universe";


export default function Home() {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <Categories />
      <BestSeller/>
      <GreenDiv />
      <Universe/>
      <Futuredpost />
      <Footer/>
    </div>
  );
}
