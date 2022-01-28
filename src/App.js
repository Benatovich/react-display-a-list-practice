import './App.css';
import ColorsList from './1 (colors)/ColorsList';
import { colors } from './1 (colors)/colors-data';
import CandiesList from './2 (candies)/CandiesList';
import { candies } from './2 (candies)/candies-data';
import IPList from './3 (IPs)/IPList';
import { IPs } from './3 (IPs)/ip-data';

function App() {
  return (
    <div className="App">
      {/* Render all your lists here. Pass the arrays as props. */}
      <ColorsList colors={colors}/>
      <CandiesList candies={candies}/>
      <IPList IPs={IPs}/>
    </div>
  );
}

export default App;
