import {useState} from 'react';


import logo from './logo.svg';
import './App.css';

function App() {
    let [counter , setcounter] = useState(15)
    const addValue = () => {
      console.log('clicked' , counter);  

        setcounter (counter + 1);
        if (counter === 20 ){
          setcounter (counter = 1 );
        }

    }
    const removeValue = () =>{
      setcounter (counter - 1)


      if (counter === 0){
        setcounter (counter = 1);
      }
    }


  return (
    <>
    <h1>chai aur react</h1>
    <h2> counter value : {counter}</h2>
    <button onClick={addValue}>add value</button>
    <button
     onClick={removeValue}>remove value</button>


    
    
    </>
  );
}

export default App;
