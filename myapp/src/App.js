import logo from './logo.svg';
import './App.css';
const hi ="안녕하세요. 리엑트입니다."
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {hi}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
