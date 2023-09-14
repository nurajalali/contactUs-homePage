import "./App.scss";
import Header from "./components/Header/Header";
import ContactForm from "./components/SectionTwo/ContactUs";
import FabiziBranch from "./components/SectionThree/FabiziBranch";
import AboutFabizi from "./components/SectionFour/AboutFabizi";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <ContactForm />
      <FabiziBranch />
      <AboutFabizi />
      <Footer />
    </>
  );
}

export default App;
