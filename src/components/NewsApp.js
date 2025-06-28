import React, { useEffect, useState } from 'react'
import Card from './Card'
import logo from '../assets/logo2.png'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

    
    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0,18)
        setNewsData(dt)
    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)
        
    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div className='newsApp'>
        <nav>
            <div className='logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='nav-option' style={{display:"flex"}}>
                <button onClick={userInput} value="World" style={{fontWeight:600, fontSize:"24px",color:'white'}}>World</button>
                <button onClick={userInput} value="latest" style={{fontWeight:600, fontSize:"24px",color:'white'}}>Latest</button>
                <button onClick={userInput} value="politics" style={{fontWeight:600, fontSize:"24px",color:'white'}}>Politics</button>

            </div>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay Updated with NewsMania</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="business">Business</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
            <button onClick={userInput} value="Lifestyle">Lifestyle</button>
            <button onClick={userInput} value="Education">Education</button>
        </div>

        <div>
        {newsData? <Card data={newsData}/> : null}
        </div>
    </div>
  )
}

export default Newsapp