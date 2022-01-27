import './App.css';
import CandiesList from './2 (candies)/CandiesList';
import { candies } from './2 (candies)/candies-data';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <CandiesList candies={candies}/>
    </div>
  );
}

export default App;
