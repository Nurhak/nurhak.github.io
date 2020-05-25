import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import Visipurs from "../../assests/images/visipurs_logo.jpg";
import Partnersbond from "../../assests/images/partnersbond_logo.png";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main row">
          <div className="startup-project-text">
            {bigProjects.projects.map((project,index) => {
              return (
                <div className="saaya-health-div col-md-6" key={index} onClick={() => openProjectInNewWindow(project.link)}>
                    <ReturnImage name={project.image}/>
                </div>
              );
            })}
          </div>
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
    </Fade>
  );
}

function ReturnImage(props){
  if(props.name==="visipurs"){
    return  <img alt="visipurs" src={Visipurs}></img>;
  } else if(props.name==="partnersbond"){
    return <img alt="partnersbond" src={Partnersbond}></img>;
  }else{
    return  <img alt="visipurs" src={Visipurs}></img>;
  }
}
