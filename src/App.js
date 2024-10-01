import { useState } from 'react';
import StudentList from './components/StudentList';
import FavouriteStudent from './components/FavouritesStudent';
import StudentContextProvider from './components/StudentContextProvider';
import Header from './components/Header';
import './index.css'



function App(props) {

  const [slist, setSlist] = useState(props.setSList)
  const [flist, setFlist] = useState(props.setFList)
 
 
  return (
    <div className="App">
    <Header setSList={setSlist} setFList={setFlist}/>
      <StudentContextProvider>
        <div>
          {slist && <StudentList />}
          {flist && <FavouriteStudent />}
        </div>
      </StudentContextProvider>
    </div>
  );
}

export default App;