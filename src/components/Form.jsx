import { Cursor } from 'mongoose';
import React, {useState} from 'react'
export default function Form(props) {
    const [text, setText] = useState("");
    const uppercase = (event) =>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const lowercase = (event) =>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const change = (event) =>{
        // let newtext = text.toUpperCase();
        setText(event.target.value);
    }
    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();
    }
    const clear = event =>{
        setText("");
    }
    const speak = event => {
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    }
    const copy = event => {
        navigator.clipboard.writeText(text)
    }
  return (
    <div>
        <form action="" className='my-5 mx-10 container flex-col  ' onSubmit={handleSubmit}>
            <h1 className={`text-5xl my-2 text-${(props.mode=='dark:bg-gray-200')? 'black':'white'}`}>Enter Text Here</h1>
            <textarea className={`border border-gray-300 w-4/5`} style={{backgroundColor: (props.mode=='dark:bg-gray-200')?'white':'#242424', color: (props.mode=='dark:bg-gray-200')?'black':'white'}} name="Text" value={text} onChange={change} id="" cols="30" rows="10"></textarea>
            <div className='flex justify-around my-3 '>
                <button className=' w-1/5 button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer' onClick={uppercase} >Convert to uppercase</button>
                <button className=' w-1/5 button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer' onClick={lowercase} >Convert to lowercase</button>
                <button className=' w-1/5 button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer' onClick={clear} >Clear</button>
                <button className=' w-1/5 button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer' onClick={speak} >Speak</button>
                <button className=' w-1/5 button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer' onClick={copy} >Copy</button>
            </div>
            <div className={` text-${(props.mode=='dark:bg-gray-200')? 'black':'white'}`}>
                <section>{text.length} characters</section>
                <section>{text.split(" ").length} words</section>
            </div>
        </form>
    </div>
  )
}
