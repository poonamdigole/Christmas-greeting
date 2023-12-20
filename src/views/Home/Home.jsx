import { useSearchParams } from "react-router-dom";
import './Home.css';
import { useState } from "react";

const greetings = [
   " May your heart be lifted in praise this Christmas for the wonderful gift of Jesus and the joy He brings to our lives.",
   " Sending prayers and hearty Christmas greetings to you. May you receive the most special of God’s blessings during this Christmas season!",
   "May you have the gift of faith, the blessing of hope and the peace of His love at Christmas and always!",
   "May the true spirit of Christmas shine in your heart and light your path. Wishing you and your loved ones a blessed Christmas."
   
]

export default function Home(){
    const [searchParams] = useSearchParams();

    const [to , setTo] = useState(searchParams.get("to"));
    const [from , setFrom] = useState(searchParams.get("from"));
    const [greetingNumber , setGreetingNumber] = useState(searchParams.get("g") >= greetings.length? 0 
    :searchParams.get("g")|| 0);
    const [themeNumber , setThemeNumber] = useState(searchParams.get("t"));



    return (
        <>
        <div className={`greeting-container ${`theme-${themeNumber}`}`}>
<h1 className="heading">Merry Christmas 🧑‍🎄</h1>
    <h2>Dear {to} 🌺 </h2>
    <p className="wishes">  {greetings[greetingNumber]} </p>
    <span className="from-text">From {from} ❤️</span>
        </div>

        <div className="generate-tagline">
        <p > Do you want to create your own Christmas Greeting ? 
         Customize it here 👇</p>
        </div>

        <p className="url" onClick={
            ()=> {
                const url =`${import.meta.env.VITE_BASE_URL}?to=${to}&from=${from}&g=${greetingNumber}&t=${themeNumber}`;
                navigator.clipboard.writeText(url);
                alert(`url copied successfully`);
            }
        }>
           {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}&t={themeNumber}
            </p>

      

    <div className="input-container">
     <input className="input-box"
       type="text"
        placeholder="To"
        value={to}
        onChange={(e) => {
          setTo(e.target.value)
        }} />

      <input 
      className="input-box"
      type="text"
        placeholder="From"
        value={from}
        onChange={(e) => {
          setFrom(e.target.value)
        }} />

        <select
        className="input-box"
        value={greetingNumber}
        onChange={(e) => {
          setGreetingNumber(e.target.value)
        }}>

             <option value='0'>Greet 1</option>
             <option value='1'>Greet 2</option>
             <option value='2'>Greet 3</option>
             <option value='3'>Greet 4</option>
        </select>

        <select
        value={themeNumber}
        className="input-box"
        onChange={(e) => {
          setThemeNumber(e.target.value)
        }}>
            <option value='0'>None</option>
             <option value='1'>Theme 1</option>
             <option value='2'>Theme 2</option>
             <option value='3'>Theme 3</option>
             <option value='4'>Theme 4</option>
             
        </select>
     </div>

            </>

        
    )
}