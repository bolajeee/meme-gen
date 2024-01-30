import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import AppBC from "./Boxes/AppBC";
import Joke from "./Joke/Joke";



function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      {/* <AppBC darkMode={true} /> */}
      <Joke />
    </div>
  );
}

export default App;
