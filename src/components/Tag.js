

import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Spinner from './Spinner';
const ApiKey = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
    const [gif,setgif] = useState('');
    const [loader, setloader]=useState(false);
    const [tag, settag]=useState('car');

    async function fetchData(){
      setloader(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${ApiKey}&tag=${tag}`
        const {data}= await axios.get(url);
        const imgsource=data.data.images.downsized_large.url;
        console.log(imgsource)
        setgif(imgsource);
        setloader(false);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    function clickhandler(){
      fetchData();
    }
  return (
    <div className='bg-green-500 border-1 border-black-500 rounded-lg w-[45vw] h-[45vh] flex flex-col items-center justify-between p-[10px]'>
        <h1>Random {tag} Gif</h1>
        <div className='h-[200px] flex justify-center items-center'>
        {
          loader ? (<Spinner></Spinner>): (<img src={gif}  className='object-contain w-[450px] h-[200px]' ></img>)
        }
        </div>
        

        <input 
        type='text'
        onChange={(event)=>{settag(event.target.value)}}
        className='w-[70%] bg-white rounded-sm p-[5px] m-[10px]'
        value={tag}
        ></input>
        <button onClick={clickhandler} className='w-[70%] bg-yellow-50 rounded-sm p-[5px]'>Generate</button>
    </div>
  )
}
