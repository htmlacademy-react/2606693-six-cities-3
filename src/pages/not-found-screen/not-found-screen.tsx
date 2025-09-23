function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link  header__logo-link--active'>
                <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className='page__main  page__main--index'>
        <div className="container">
          <h1>404. Page not found</h1>
          <a href="/">Вернуться на главную</a>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
