import React from "react";
import "./Laptop.css";
import logo from "../img/logo.svg";
import left_arrow from "../img/arrow-left.svg";
import right_arrow from "../img/arrow-right.svg";
import big_eclipse from "../img/big-eclipse.svg";
import cart from "../img/cart.svg";
import dot_full from "../img/dot-full.svg";
import dot from "../img/dot.svg";
import matebook from "../img/matebook.png";
import mid_eclipse from "../img/mid-eclipse.svg";
import small_eclipse from "../img/small-eclipse.svg";

class Laptop extends React.Component {
  render() {
    return (
      <div className="Entire">
        <header>
          <div className="logo-container">
            <img src={logo} alt="logo"></img>
            <h4 className="logo">Srikanth</h4>
          </div>
          <nav>
            <ul className="nav-links">
              <li className="nav-link">
                <a href="#">Specs</a>
              </li>
              <li className="nav-link">
                <a href="#">Products</a>
              </li>
              <li className="nav-link">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="cart">
            <img src={cart} alt="cart"></img>
          </div>
        </header>

        <main>
          <section className="presentation">
            <div className="introduction">
              <div className="intro-text">
                <h1>Laptop for the future</h1>
                <p>The new 16 inch mac book pro in 2020</p>
              </div>
              <div className="cta">
                <button className="cta-select">16 Inch</button>
                <button className="cta-add">Add to Cart</button>
              </div>
            </div>
            <div className="cover">
              <img src={matebook} alt="matebook" />
            </div>
          </section>

          <div className="latop-select">
            <img src={left_arrow} />
            <img src={dot} />
            <img src={dot_full} />
            <img src={dot_full} />
            <img src={right_arrow} />
          </div>

          <img className="big-circle" src={big_eclipse} alt="" />
          <img className="midum-circle" src={mid_eclipse} alt="" />
          <img className="small-circle" src={small_eclipse} alt="" />
        </main>
      </div>
    );
  }
}

export default Laptop;
