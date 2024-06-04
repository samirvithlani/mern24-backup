import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Content from "./components/Content";

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
      <Content emp ={employee}></Content>
    </div>
  );
}

export default App;
