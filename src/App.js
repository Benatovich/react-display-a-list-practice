import './App.css';
import ColorsList from './1 (colors)/ColorsList';
import { colors } from './1 (colors)/colors-data';
import CandiesList from './2 (candies)/CandiesList';
import { candies } from './2 (candies)/candies-data';
import IPList from './3 (IPs)/IPList';
import { ips } from './3 (IPs)/ip-data';
import SnackList from './4 (snacks)/SnackList';
import { snacks } from './4 (snacks)/snack-data';

function App() {
  return (
    <div className="App">
      {/* Render all your lists here. Pass the arrays as props. */}
      <ColorsList colors={colors}/>
      <CandiesList candies={candies}/>
      <IPList ips={ips}/>
      <SnackList snacks={snacks}/>
    </div>
  );
}

export default App;
