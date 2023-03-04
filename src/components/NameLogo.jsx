import "../styles/nameLogo.scss";

export default function NameLogo() {
  return (
    <div className="landing-info">
      <a className="logo" href="">
        <span className="firstName">JOMEL</span>
        <span className="lastName">EDODOLLON</span>
      </a>
      <p className="blurb">
        2023 Portfolio of an aspiring web developer based in Vancouver
      </p>
      <p>Currently learning: Nextjs</p>
    </div>
  );
}
