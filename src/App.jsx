import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyHeader from "./components/CompanyHeader";
import Navbar from "./components/Navbar";
import ImageHolder from "./components/ImageHolder";
import Heading from "./components/Headers";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, urna nec pellentesque auctor, metus quam interdum nisl, ac volutpat neque mi nec dui. Fusce lacinia, tortor id convallis pellentesque, velit turpis hendrerit orci, sit amet fringilla dolor augue a justo. In sit amet scelerisque justo. Vivamus mattis erat vitae justo semper, ut varius eros ultricies. Sed ullamcorper tristique augue, eu hendrerit urna volutpat id. Nullam eget fringilla ex. Quisque sit amet scelerisque libero. Vivamus vel tortor id ex fringilla venenatis. Sed convallis bibendum augue vel elementum. Nullam nec suscipit lectus.";

  const data = [
    {
      id: 1,
      name: "Hugo Silva",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, urna nec pellentesque auctor, metus quam interdum nisl, ac volutpat neque mi nec dui.",
    },
    {
      id: 2,
      name: "Imanol Arias",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, urna nec pellentesque auctor, metus quam interdum nisl, ac volutpat neque mi nec dui.",
    },
    {
      id: 3,
      name: "Javier Bardem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, urna nec pellentesque auctor, metus quam interdum nisl, ac volutpat neque mi nec dui.",
    },
  ];
  return (
    <>
      <CompanyHeader />
      <Navbar />
      <ImageHolder />
      <Heading Heading="Our teams are here" Description={desc} />
      <Cards data={data} />
      <Footer />
    </>
  );
}

export default App;
