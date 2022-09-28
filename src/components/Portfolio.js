import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;
      return (
        <a href={projects.url} target="_blank" key={id++} className="project">
          <img className="project-image" alt={projects.title} src={projectImage} />
          <div className="project-title" >{projects.title}.</div>
        </a>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row education">
            <div className="twelve columns three collapsed">
              <h1>
                <span>Check Out Some of My Works.</span>
              </h1>
              <div
                id="portfolio-wrapper"
                className="projects"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
