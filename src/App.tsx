import markWordleGuess from "./utils/markWordleGuess";

function App(): JSX.Element {
  return (
    <>
      <h1>Target: APPLE</h1>
      <h1>Guess: PEOPE</h1>
      <h1>{markWordleGuess("PEOPE", "APPLE")}</h1>
    </>
  );
}

export default App;
