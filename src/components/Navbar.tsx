
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../public/global.module.scss";

const Navbar = () => {
  return (
<nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbar}`}>
  <a className="navbar-brand" href="/">Fréttavefurinn</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Heim</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/news">Fréttir</a>
      </li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;