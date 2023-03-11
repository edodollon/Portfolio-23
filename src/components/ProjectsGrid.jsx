import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";

import "../styles/projectCards.scss";

export default function ProjectsGrid() {
  const { ref, inView, entry } = useInView();

  return (
    <>
      <div id="section-gap"></div>
      <section className="section-portfolio">
        <div id="first-card" className="project-card">
          Image
        </div>
        <div ref={ref} className="project-card">
          Image
        </div>
        <InView>
          <div ref={ref} className="project-card">
            Image
            {inView ? "IN VIEW" : "NONONO"}
          </div>
        </InView>
      </section>
    </>
  );
}
