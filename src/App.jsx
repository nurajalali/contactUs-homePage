import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./Pages/Home";
import Message from "./Pages/Message";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
