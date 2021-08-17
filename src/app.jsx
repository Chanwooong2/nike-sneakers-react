import { useState } from 'react';
import './app.css';
import SneakersList from './components/sneakersList/sneakersList';
import sneakersJsonData from './data/sneakersInformation.json'

function App() {

  const [sneakerList] = useState(sneakersJsonData);

  return (
    <>
      <div className="moving"></div>
      <SneakersList 
        className="sneakers-card-list"
        sneakersList={sneakerList}/>
    </>
  );
}

export default App;
