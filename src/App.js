import './App.css';
import ColorsList from './1 (colors)/ColorsList';
import { colors } from './1 (colors)/colors-data';
import CandiesList from './2 (candies)/CandiesList';
import { candies } from './2 (candies)/candies-data';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <ColorsList colors={colors}/>
      <CandiesList candies={candies}/>
    </div>
  );
}

export default App;
