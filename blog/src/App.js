import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
export default function App() {
  const title = "Welcome to My Blog";
  const likes = 10;
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1> {title}</h1> <p>Liked {likes} times</p>
      </div>
    </div>
  );
}
