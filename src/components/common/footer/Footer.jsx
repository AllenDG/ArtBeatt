import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            {/* Use Link to navigate to the contact page */}
            <Link to="/contact" className='btn5'>
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
        
          {footer.map((val) => (
            <div className='box' key={val.title}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, index) => (
                  <li key={index}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 ArtBeat. Designed By Curly Bracket.</span>
      </div>
    </>
  );
};

export default Footer;
