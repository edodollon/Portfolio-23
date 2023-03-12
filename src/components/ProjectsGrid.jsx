import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";

import "../styles/projectCards.scss";

export default function ProjectsGrid() {
  const { ref: firstRef, inView: fInView, entry: fEntry } = useInView();
  const {
    ref: secondRef,
    inView: sInView,
    entry: sEentry,
  } = useInView({ threshold: 1 });
  const { ref: thirdRef, inView: tInView, entry: tEentry } = useInView();

  return (
    <>
      <div id="section-gap"></div>
      <section className="section-portfolio">
        <InView>
          <div
            ref={firstRef}
            className={`project-card ${fInView && "show"}`}
            id="first-card"
          >
            <section className="card-info">
              <p>The Pokemon Library</p>
              <p>Status: Completed</p>
            </section>
          </div>
        </InView>
        <InView>
          <div ref={secondRef} className={`project-card ${sInView && "show"}`}>
            <section className="card-info">
              <p>StoreMe</p>
              <p>Status: Completed</p>
            </section>
          </div>
        </InView>
        <InView>
          <div ref={thirdRef} className={`project-card ${tInView && "show"}`}>
            <section className="card-info">
              <p>Portfolio 2023</p>
              <p>Status: In Progess</p>
            </section>
          </div>
        </InView>
      </section>
    </>
  );
}
