import "./App.css";
import { Navbar } from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
      {/* <h1>Ecommerce Application</h1> */}
    </div>
  );
}

export default App;
