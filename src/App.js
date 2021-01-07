import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cover from "./Components/Cover/Cover";
import Ongoing from "./Components/Ongoing/Ongoing";
import Latest from "./Components/Latest/Latest";
import Performance from "./Components/Performance/Performance";

function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <Ongoing />
      <Latest />
      <Performance />
    </>
  );
}

export default App;
