import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Spinner from './Spinner';
const ApiKey = process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {
    const [gif,setgif] = useState('');
    const [loader, setloader]=useState(false);
    async function fetchData(){
      setloader(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=SIj3J0z8wuRHC6x4plOu1Odnu8SXmR08`
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
    <div className='bg-blue-500 border-1 border-black-500 rounded-lg w-[45vw] h-[39vh] flex flex-col items-center justify-between p-[10px]'>
        <h1>Random Gif</h1>
        {
          loader ? (<Spinner></Spinner>): (<img src={gif}  className='object-contain w-[450px] h-[200px]' ></img>)
        }

        <button onClick={clickhandler} className='w-[70%] bg-yellow-50 rounded-sm p-[5px]'>Generate</button>
    </div>
  )
}
