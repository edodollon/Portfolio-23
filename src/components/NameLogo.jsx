import "../styles/nameLogo.scss";
import MainLinks from "./MainLinks";

export default function NameLogo() {
  return (
    <div className="landing-info">
      <section className="landing-left-section">
        <a className="logo" href="">
          <span className="firstName">JOMEL</span>
          <span className="lastName">EDODOLLON</span>
        </a>
        <p className="blurb">
          2023 Portfolio of an aspiring web developer based in Vancouver
        </p>
        <p>Currently learning: Nextjs</p>
      </section>
      <MainLinks />
    </div>
  );
}
