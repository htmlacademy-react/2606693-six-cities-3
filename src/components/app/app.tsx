import Main from '../../pages/main-screen/main-screen';

type AppProps = {
  placesCount: number;
  placeCardsPerPageCount: number;
}

function App({ placesCount, placeCardsPerPageCount }: AppProps): JSX.Element {
  return (
    <Main
      placesCount={placesCount}
      placeCardsPerPageCount={placeCardsPerPageCount}
    />
  );
}

export default App;
