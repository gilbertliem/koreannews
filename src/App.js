import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cover from "./Components/Cover/Cover";
import Ongoing from "./Components/Ongoing/Ongoing";
import Latest from "./Components/Latest/Latest";
import Performance from "./Components/Performance/Performance";
import Trending from "./Components/Trending/Trending";
import Popular from "./Components/Popular/Popular";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <Ongoing />
      <Latest />
      <Performance />
      <Trending />
      <Popular />
      <Footer />
    </>
  );
}

export default App;
