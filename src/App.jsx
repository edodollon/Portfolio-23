import { useState } from "react";

// Components
import NameLogo from "./components/NameLogo";
import ProjectsGrid from "./components/ProjectsGrid";

function App() {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("show");
  //       console.log("IS SHOWING");
  //     } else {
  //       // this is to show multiple times if you want.. removes the class if it is NOT intersecting
  //       entry.target.classList.remove("show");
  //       console.log("IS NOT SHOWING");
  //     }
  //   });
  // });
  // const test = document.querySelectorAll(".project-card");
  // // Tells what to observe
  // test.forEach((el) => observer.observe(el));

  return (
    <div className="App">
      <NameLogo />
      <ProjectsGrid />
    </div>
  );
}

export default App;
