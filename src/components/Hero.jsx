import React from 'react'
import img1 from './sponserbackground.png'
import img2 from './sponserbg.jpg'
export default function Hero(props) {
    const images = [ img1,img2,img1,img2,img1,img2]
  return (
    <div>
        <img src={images[props.count]} alt="" />
    </div>
  )
}
