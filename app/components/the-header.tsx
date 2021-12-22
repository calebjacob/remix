import { Link } from 'remix';

export default function TheHeader() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        APP
      </Link>
    </header>
  );
}
