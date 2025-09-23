import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <main className="page__main  page__main--index">
        <div className="container">
          <h1>404. Page not found</h1>
          <Link to={AppRoute.Main}>Вернуться на главную</Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
