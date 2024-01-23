import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import AppBC from "./Boxes/AppBC";



function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <AppBC darkMode={true} />
    </div>
  );
}

export default App;
