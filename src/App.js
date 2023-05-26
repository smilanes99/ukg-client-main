// import FormOne from './components/FormOne/FormOne';
// import Survey from './components/Survey/Survey';
import FormTwo from "./components/FormTwo/FormTwo.js";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ThankYou from "./components/ThankYou/ThankYou";
import Report from "./components/report/Report";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/form" element={<FormTwo />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;
