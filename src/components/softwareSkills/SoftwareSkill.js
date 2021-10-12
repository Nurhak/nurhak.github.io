import React from "react";
import "./SoftwareSkill.css";
import GoIcon from "../../assets/images/go-language-official.svg";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills,i) => {
            if(skills.imageType && skills.imageType === "local"){
              return (
                <li key={i} className="software-skill-inline" name={skills.skillName}>
                  <img src={skills.imageSrc.default} alt={skills.skillName}/>
                  <p>{skills.skillName}</p>
                </li>
              );
            }
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
