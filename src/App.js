//Import Main Reviews Module
import ReviewsModule from "./reviews-module/ReviewsModule.js";

//Import Dummy content
import Header from "./dummy-content/header.js";
import Hero from "./dummy-content/hero.js";
import RotatingText from "./dummy-content/rotating-text.js";
import Section1 from "./dummy-content/section-1.js";
import Section2 from "./dummy-content/section-2.js";
import Section3 from "./dummy-content/section-3.js";
import Section4 from "./dummy-content/section-4.js";
import Section5 from "./dummy-content/section-5.js";
import Section6 from "./dummy-content/section-6.js";
import Section7 from "./dummy-content/section-7.js";
import Section8 from "./dummy-content/section-8.js";
import Section10 from "./dummy-content/section-10.js";
import Footer from "./dummy-content/footer.js";

//Import Styles
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section1 />
      <RotatingText />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <ReviewsModule />
      <Section10 />
      <Footer />
    </div>
  );
};

export default App;
