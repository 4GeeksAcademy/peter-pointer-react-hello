import React from "react";  //import react into the bundle
import ReactDOM from "react-dom/client";  // Import ReactDOM
import "../styles/index.css";  // include your styles into the webpack bundle
import Home from "./component/Home.jsx";  //import your own components

// Render your react application
//                  // donde ?                      // Qué 
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

