
import React,{useState,useEffect} from 'react';
import './App.css';
import { Header } from './components/ui/Header';
import axios from 'axios';
import { CharacterGrid } from './components/characters/CharacterGrid';
import { Search } from './components/ui/Search';

function App() {
const[items,SetItem]=useState([]);
const[loading,SetLoading]=useState(true);
const[query,Setquery]=useState('')

useEffect(()=>{

const FetchItems = async() => {
  const result=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
  console.log(result.data)
  SetItem(result.data)
  SetLoading(false)
}

FetchItems();

},[query]);
  return (
    <div className=".container">
     <Header/>
     <Search Getquery={Setquery}/>
     <CharacterGrid items={items} loading={loading}/>
    </div>
  );
}

export default App;
