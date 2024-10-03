import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="hero is-align-items-center header">
      <div className="hero-body header-container">
        <Link className="text-dark" to="/">
          <h1 className="title " style={{ fontSize: '3rem' }}>
            Vitelize
          </h1>
        </Link>
        <p className="subtitle" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Programming the world of tomorrow, today!
        </p>
      </div>
    </header>
  );
};

export default Header;
