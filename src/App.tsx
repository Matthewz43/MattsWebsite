// import Message from './Message';

// import Alert from './components/Alert';
//import ImageButton from './components/ImageButton'
// import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import PageLayout from "./components/PageLayout"
import ContactPage from "./components/ContactPage"
import AboutPage from "./components/AboutPage"

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<PageLayout pageInformation = "projects"/>} />
          <Route path="/contact" element={<ContactPage/>} />
          {/* You can add more routes here, including a default home page */}
          <Route path="/" element={<AboutPage />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;
/*
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Los Angelos", "Seattle", "Washington", "obungus"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items = {items} heading = {"aMOgus"} onSelectItem={handleSelectItem} />{" "}
    </div>
  );
}

export default App;
*/
