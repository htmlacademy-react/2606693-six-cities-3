import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  placesCount: number;
  placeCardsPerPageCount: number;
}

function App({ placesCount, placeCardsPerPageCount }: AppProps): JSX.Element {
  return (
    <MainScreen
      placesCount={placesCount}
      placeCardsPerPageCount={placeCardsPerPageCount}
    />
  );
}

export default App;
