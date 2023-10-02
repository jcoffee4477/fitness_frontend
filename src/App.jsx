import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App;