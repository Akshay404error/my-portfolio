import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
  projects,
  patents,
} from "../../portfolio.js";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {projects.data.map((project, idx) => (
            <div key={idx} className="project-card">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              {project.url && project.url.trim() !== "" ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
              ) : null}
            </div>
          ))}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub, idx) => {
            return <PublicationCard key={idx} pub={pub} theme={theme} />;
          })}
        </div>

        {/* Patents */}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="patents-section-heading">
              <h1 style={{ color: theme.text }}>{patents.header.title}</h1>
              <p style={{ color: theme.secondaryText }}>{patents.header.description}</p>
            </div>
          </Fade>
        </div>
        <div className="patents-grid">
          {patents.data.map((patent, idx) => (
            <Fade key={idx} bottom duration={1500} distance="30px">
              <div className="patent-card">
                <span className="patent-card-badge">Patent Published</span>
                <h2>{patent.title}</h2>
                <div className="patent-card-appno">App. No: {patent.applicationNo}</div>
                <p>{patent.description}</p>
                <div className="patent-card-actions">
                  {patent.file ? (
                    <a
                      className="patent-view-btn"
                      href={patent.file}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {patent.type === "jpg" ? "View Patent Image" : "View Patent PDF"}
                    </a>
                  ) : (
                    <span className="patent-no-file">Document coming soon</span>
                  )}
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
