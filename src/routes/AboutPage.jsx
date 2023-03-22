import React from "react";
import MainNav from "../components/MainNav";
import github_icon from "../assets/github_icon_48px.png";
import html_icon from "../assets/html5_icon_48px.png";
import css_icon from "../assets/css3_icon_48px.png";
import git_icon from "../assets/git_icon_48px.png";
import react_icon from "../assets/react_icon_48px.png";
import next_icon from "../assets/nextjs_icon_48px.png";
import "../styles/aboutPage.scss";

export default function AboutPage() {
  return (
    <>
      <MainNav />
      <div className="about-wrapper">
        <h1>ABOUT ME</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          incidunt suscipit similique eum tenetur sint inventore consequatur
          dolores expedita commodi, eveniet repudiandae architecto, dolorum nisi
          omnis doloremque! Quis, totam consequatur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum magni cupiditate vel consequatur
          nesciunt autem consectetur iste asperiores, repellendus ullam animi
          voluptatibus reprehenderit officia ad.
        </p>

        <h2>SKILLS</h2>
        <div className="skills-wrapper">
          <div className="skill-container">
            <p>HTML5</p>
            <img src={html_icon} alt="html icon" />
          </div>
          <div className="skill-container">
            <p>CSS3</p>
            <img src={css_icon} alt="css icon" />
          </div>
          <div className="skill-container">
            <p>React</p>
            <img src={react_icon} alt="html icon" />
          </div>
          <div className="skill-container">
            <p>Next.js</p>
            <img src={next_icon} alt="html icon" />
          </div>
          <div className="skill-container">
            <p>Github</p>
            <img src={github_icon} alt="github icon" />
          </div>
          <div className="skill-container">
            <p>Git</p>
            <img src={git_icon} alt="git icon" />
          </div>
        </div>

        <button className="resume-btn">RESUME</button>
      </div>
    </>
  );
}
