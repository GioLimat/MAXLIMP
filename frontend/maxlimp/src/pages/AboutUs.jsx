import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";

function AboutUs() {
  return (
    <div>
      <HeaderHome showSearch={false} />
      <AboutUsSection />
      <Footer />
    </div>
  );
}

export default AboutUs;
