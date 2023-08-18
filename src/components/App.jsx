import { Header } from "./Header/Header";
import { About } from "./About/About";
import { Prices } from "./Prices/Prices";
import { Project } from "./Project/Project";
import { Footer } from "./Footer/Footer";
import { Form } from "./Form/Form";

export const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Prices />
      <Project />
      {/* <Form /> */}
      <Footer />
    </div>
  );
};
