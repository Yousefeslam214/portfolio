const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* <h2 className="footer__title">Yousef Eslam</h2> */}
        <div className="footer__social">
          <a href="https://github.com/abozain1?tab=repositories" target="blank">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-khalid-0a88b5220/"
            target="blank">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="phone__number">
          <i className="bx bxs-phone"></i>
          +20 100 530 7391
        </span>
        <p>© 2024 copyright all right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
