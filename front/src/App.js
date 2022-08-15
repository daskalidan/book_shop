import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Leftside from "./Leftside";
import Rightside from "./Rightside";


const SERVER_URL = "http://127.0.0.1:8000/";

function App() {
  

  return (
    <div className="bg-secondary">
      <Header></Header>
      <div className="container mt-5">
        <div className="row">
          <Leftside></Leftside>
          <Rightside></Rightside>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
export {SERVER_URL}