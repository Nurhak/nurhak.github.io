import React, { useContext } from "react";
import "./AiProjects.css";
import { aiProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function AiProjects() {
  const { isDark } = useContext(StyleContext);
  if (!aiProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="ai-work">
        <h1 className={isDark ? "dark-mode heading" : "heading"}>
          {aiProjects.title}
        </h1>
        <p
          className={
            isDark ? "dark-mode subTitle ai-subtitle" : "subTitle ai-subtitle"
          }
        >
          {aiProjects.subtitle}
        </p>
        <div className="ai-cards">
          {aiProjects.projects.map((project, i) => (
            <div key={i} className={isDark ? "ai-card ai-card-dark" : "ai-card"}>
              <div className="ai-card-head">
                <h5 className={isDark ? "dark-mode ai-card-title" : "ai-card-title"}>
                  {project.title}
                </h5>
                {project.status && (
                  <span className="ai-card-status">{project.status}</span>
                )}
              </div>
              <p className={isDark ? "dark-mode ai-card-desc" : "ai-card-desc"}>
                {project.desc}
              </p>
              <div className="ai-card-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="ai-card-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
