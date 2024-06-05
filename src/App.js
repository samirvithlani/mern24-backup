import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Content from "./components/Content";
import { MapDemo } from "./components/MapDemo";
import { Students } from "./components/students/Students";

function App() {
  var title = "Welcome to React";
  var city = "Ahmedabad";
  var employee = {
    id: 101,
    name: "Rahul",
  };

  return (
    <div className="App">
      <Header title={title} c={city}></Header>
      {/* <Content emp ={employee}></Content> */}
      {/* <MapDemo/> */}
      <Students/>
    </div>
  );
}

export default App;
