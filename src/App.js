import React, { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"

import "./App.scss"
import Navigation from "./components/Navigation"
import Container from "./components/Container"

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navigation />
        <Container />
      </div>
    </Router>
  )
}

export default App
