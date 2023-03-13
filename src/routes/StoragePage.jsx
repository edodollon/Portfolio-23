import "../styles/projectPage.scss";

export default function StoragePage() {
  return (
    <div className="project-wrapper">
      <section className="image-container">
        <img src="" alt="" />
      </section>
      <section className="project-info-wrapper">
        <div className="project-content-wrapper">
          <div className="project-info-header">
            <p>Personal project</p>
            <p>2023</p>
          </div>
          <h1 className="project-heading">Project Heading</h1>
          <div className="project-description-wrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptas assumenda quisquam temporibus dolore! Libero, recusandae
              est necessitatibus ducimus maiores tenetur cupiditate error fugiat
              molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellat dolore soluta, voluptatum maxime nemo libero provident
              possimus consectetur, cupiditate dicta neque numquam beatae. Neque
              quia corporis explicabo libero iusto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
