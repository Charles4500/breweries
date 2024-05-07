// Fetching data here  
import React,{useState,useEffect} from 'react'
import Render from './components/Render'
function App() {
 const [breweries,setBreweries] = useState([]);
 function fetchData(){
  return fetch("http://localhost:3000/breweries")
  .then((resp) => resp.json())
  .then((data)=> {
    setBreweries(data);
  });
 }
 useEffect(()=> {
  fetchData();
 },[]);


  return (
    <>
     <Render breweries={breweries}/> 
    </>
  )
}

export default App;
