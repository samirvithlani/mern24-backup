import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Content from "./components/Content";
import { MapDemo } from "./components/MapDemo";
import { Students } from "./components/students/Students";
import { UseStateDemo } from "./components/UseStateDemo";
import { Navbar } from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { Products } from "./amazon/Products";
import { Eletronics } from "./amazon/Eletronics";
import { Fashio } from "./amazon/Fashio";
import { AmazoneHome } from "./amazon/AmazoneHome";
import { Error404 } from "./amazon/Error404";
import { ProductDetail } from "./amazon/ProductDetail";
import { FormDemo1 } from "./form/FormDemo1";
import { FormDemo2 } from "./form/FormDemo2";
import { FormDemo3 } from "./form/FormDemo3";

function App() {
  var title = "Welcome to React";
  var city = "Ahmedabad";
  var employee = {
    id: 101,
    name: "Rahul",
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<AmazoneHome />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/ele" element={<Eletronics />}></Route>
        <Route path="/fashion" element={<Fashio />}></Route>
        <Route path = "/products/detail/:id" element = {<ProductDetail/>}></Route>
        <Route path ="/formdemo1" element  = {<FormDemo1/>}></Route>
        <Route path ="/formdemo2" element  = {<FormDemo2/>}></Route>
        <Route path ="/formdemo3" element  = {<FormDemo3/>}></Route>
        {/* <Route path="/*" element={<h1>404 page...</h1>}></Route> */}
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
