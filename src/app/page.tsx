import AnnouncementBar from "./components/AnnoucementBar";
import BestSeller from "./components/bestSeller";
import Categories from "./components/categories";
import Footer from "./components/footer";
import GreenDiv from "./components/green-div";
import Header from "./components/Header";
import HeroSection from "./components/herosection";


export default function Home() {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <Categories />
      <BestSeller/>
      <GreenDiv />
      <Footer/>
    </div>
  );
}
