import "./App.css";

import NavBar from "./components/navbar/NavBar";
import CustomForm from "./components/CustomForm/CustomForm";
import CountrySelect from "./components/CountrySelect/CountrySelect";
import MachineLearningPage from "./pages/machineLearning";
import ResultPage from "./pages/result";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customForm" element={<CustomForm />} />
        <Route path="CountrySelect" element={<CountrySelect />} />
        <Route path="MachineLearningModels" element={<MachineLearningPage />} />
        <Route path="/ResultPage/:LE" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
