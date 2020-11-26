
import React,{useState,useEffect} from 'react';
import './App.css';
import { Header } from './components/ui/Header';
import axios from 'axios';
import { CharacterGrid } from './components/characters/CharacterGrid';

function App() {
const[items,SetItem]=useState([]);
const[loading,SetLoading]=useState(true);

useEffect(()=>{

const FetchItems = async() => {
  const result=await axios(`https://www.breakingbadapi.com/api/characters`)
  console.log(result.data)
  SetItem(result.data)
  SetLoading(false)
}

FetchItems();

},[]);
  return (
    <div className=".container">
     <Header/>
     <CharacterGrid items={items} loading={loading}/>
    </div>
  );
}

export default App;
