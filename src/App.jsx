import Amazing from "./components/Amazing";
import Collection from "./components/Collection";
import Discover from "./components/Discover Component/Discover";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="m-0 p-0 box-border">
      <Navbar />
      <Discover />
      <Amazing />
      <Collection />
    </div>
  );
}

export default App;
