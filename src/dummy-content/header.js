const Header = () => {
  return (
    <header>
      <ul className="header-menu">
        <li className="hidden-md-up">
          <svg viewBox="0 0 100 80" width="20" height="20">
            <rect y="10" width="100" height="5"></rect>
            <rect y="40" width="100" height="5"></rect>
            <rect y="70" width="100" height="5"></rect>
          </svg>
        </li>
        <li>Shop all</li>
        <li>Shop sets</li>
        <li>Who we are</li>
      </ul>
      <img
        className="logo"
        src="https://athena-club.s3.amazonaws.com/web-assets/images/logo-header.svg"
        alt="Athena Club"
      />
      <ul className="header-menu">
        <li className="hidden-md-up">
          <img
            className="dummy-cart"
            src="https://athena-club.s3.amazonaws.com/web-assets/images/cart_mobile.png"
            alt=""
          />
        </li>
        <li>Referrals</li>
        <li>Account</li>
        <li>Cart</li>
      </ul>
    </header>
  );
};

export default Header;
