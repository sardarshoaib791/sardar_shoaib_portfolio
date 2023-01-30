import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";


class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const linkedin = this.props.data.linkedin;
    const linktree = this.props.data.linktree;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Education
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade  bottom duration={1200}>
              <h3  className="description">{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a target="_blank" href={linkedin} className="button btn linkedIn-btn">
                  <i className="fa fa-linkedin"></i>LinkedIn
                </a>
                <a target="_blank"  href={linktree} className="button btn github-btn" >
                <i className="fa fa-link"></i>
                  {/* <img src="/images/linktree-logo-icon.svg"  style={{marginRight:"15px",height:"10px"}}/><span>Linktree</span> */}
                  Linktree
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
