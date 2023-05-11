import logo from './logo.svg';
import './App.css';
import Contact_list from './components/container/Contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contact_list></Contact_list>
      </header>
      
    </div>
  );
}

export default App;
