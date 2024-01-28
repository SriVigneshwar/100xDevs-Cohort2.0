import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { set } from 'zod';

function useDebounce(value, timeout){
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() =>{
    const timerid = setTimeout(()=>{
      setDebouncedValue(value);
    }, timeout);

    return()=>{
      clearInterval(timerid);
    }
  }, [value, timeout]);
  return debouncedValue;
}

function App() {
  
  return (
    <>
      <SearchBar></SearchBar>
    </>
  )
}

function SearchBar ()  {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 800); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
    <p>{debouncedValue}</p>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </>
  );
}




export default App
