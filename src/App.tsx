import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import  Bill  from "./components/Bill"
import  Brenda  from "./components/brenda"
import  Dennis  from "./components/dennis"
import  Mark  from "./components/mark"
import  Steve  from "./components/steve"
import "./estilos.css"


function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/bill" element={<Bill/>} />
          <Route path="/brenda" element={<Brenda />} />
          <Route path="/dennis" element={<Dennis />} />
          <Route path="/mark" element={<Mark />} />
          <Route path="/steve" element={<Steve />} />
        </Routes>
      </Container>


    </ShoppingCartProvider>
  )
}

export default App
