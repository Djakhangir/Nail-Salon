import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import Reservation from "./components/Reservation/Reservation";
import ContactUs from "./components/ContactUs/ContactUs";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Main from "./components/Layout/Main/Main";
import Education from "./components/Education/Education";
import FAQ from "./components/FAQ/Faq";
import { Policy } from "@mui/icons-material";
import Hiring from "./components/Hiring/Hiring";
import ClassDetails from "./components/ClassDetails/ClassDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <HomePage /> {/* HomePage now renders AboutUs, Services, and Gallery */}
              <Footer />
            </Main>
          }
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education/:id" element={<ClassDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/join-our-team" element={<Hiring />} />
      </Routes>
    </Router>
  );
};

export default App;

//When carousel is used as a slide with mouse on lappy or but clicking and moving it should not unselect or select the cards.
// when in reservations page and the cards selected we sohuld not render book buttton as in homepage
//make the form of reservations to be centered and not stretched. but services should stay as it is.
// change the color of the buttons to corp colors
// make the hamburger menu into prettier color
//FIX THE CHEKCBOX IN SERVICES OF thE HOMEPAGE IN SERVICE COMPONENT
