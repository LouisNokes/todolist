import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
// import "popper.js";
// import "jquery";
// import "./Components/css/qa.css";

import Header from "./components/header";
import Footer from "./components/footer";
import AllTodos from "./components/todolist";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container">
        <AllTodos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
