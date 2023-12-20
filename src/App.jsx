import Amazing from "./components/Amazing";
import Discover from "./components/Discover Component/Discover";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="m-0 p-0 box-border">
      <Navbar />
      <Discover/>
      <Amazing/>
    </div>
  );
}

export default App;
