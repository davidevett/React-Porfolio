// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Nav from "./components/NavTabs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <div className="main">
        <Nav />
        <Header />
        <main className="content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
