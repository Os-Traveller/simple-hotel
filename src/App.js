import Nav from "./Components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";

function App() {
  return (
    <section className="min-h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
