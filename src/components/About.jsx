import React, { useState } from 'react';

export default function About() {
  const [mystyle, setmystyle] = useState({
    color: 'black',
    backgroundColor:'white'
  })
  const [mode, setmode] = useState('Enable Dark Mode')
  const changestyle = () => {
      if(mystyle.color=='white')
      {
        setmystyle({
        color: 'black',
        backgroundColor: 'white'
      })
       setmode('Enable Dark Mode')
      }
      else
      {
        setmystyle({
          color: 'white',
          backgroundColor: 'black'
        })
        setmode('Enable Light Mode')
      }
  }
  return (
    <div > 
      <h1 className='text-4xl'> About Us</h1>
      <div className=' mx-2 border-purple-600 border-2' style={mystyle}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate similique dignissimos accusantium quos aliquam corporis distinctio nulla asperiores porro alias. Commodi non repellat repudiandae cumque, vitae iusto iure modi ad minus voluptate consectetur tenetur temporibus doloribus porro sunt molestiae delectus, laborum reprehenderit facere officia fugiat quibusdam dolore vel mollitia! Ducimus, placeat harum assumenda sit, dicta, atque doloremque laudantium exercitationem culpa ipsam eum saepe deserunt iste? Possimus, ad. Quae corporis quidem facilis sunt officia. Delectus mollitia consequuntur distinctio laborum quis illum maiores consectetur fuga omnis aliquid ullam praesentium saepe fugit dolor, unde, nostrum nemo officia? Vitae quasi asperiores modi nam fuga!
      </div>
      <button onClick={changestyle} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-3">{mode}</button>
    </div>
  )
}
