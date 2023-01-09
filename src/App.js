import './App.css';
import Listing from './components/Listing';
import etsy from './data/etsy.json';
import { v4 as uuid } from 'uuid';
import './css/main.css';

const etsyList = [...etsy];

// Вероятно можно было использовать listing_id, я перестраховался
etsyList.forEach((item) => {
  item.uuid = uuid();
});

function App() {
  return (
    <div className="App">
      <Listing etsyList={etsyList}/>
    </div>
  );
}

export default App;
