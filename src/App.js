import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cover from "./Components/Cover/Cover";
import Ongoing from "./Components/Ongoing/Ongoing";
import Latest from "./Components/Latest/Latest";

function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <Ongoing />
      <Latest />
    </>
  );
}

export default App;
