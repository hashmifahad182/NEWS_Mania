import React from 'react';

const Card = ({data}) => {
     console.log(data);

     const readMore = (url) =>{
        window.open(url)
    }
     
  return (
    <div className='cardContainer'>
    {data.map((curItem,index)=>{
        if(!curItem.urlToImage){
            return null
        }else{
            return(
            <div className='card'>
                <img src={curItem.urlToImage}/>
                <div className='content'>
                    <div className='title-div'>
                        <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.title?.substring(0, 80)}...</a>
                    </div>
                    <p className='description'>
                        {curItem.description?.substring(0, 200)}...</p>
                    <div className='content-button'><button  onClick={()=>window.open(curItem.url)}>Read More</button></div>
                    
                </div>
            </div>
        )
        }
         
    })}
    </div>
  )
}

export default Card