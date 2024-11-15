import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="hero is-align-items-center header">
      <div className="container hero-body header-container">
        <Link className="text-dark" to="/">
          <h1 className="title press-start-2p-regular" style={{ fontSize: '3rem' }}>
            Vitelize
          </h1>
        </Link>
        <p className="subtitle press-start-2p-regular" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Programming the world of tomorrow, today!
        </p>
      </div>
    </header>
  );
};

export default Header;
