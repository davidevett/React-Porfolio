import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        {location.pathname !== '/' && (
          <button
            className="button"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4 className='subtitle'>&copy; {new Date().getFullYear()} - Vitelize</h4>
      </div>
    </footer>
  );
};

export default Footer;
