import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "./pages/index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import FoodList from "./components/FoodList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FoodList />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
