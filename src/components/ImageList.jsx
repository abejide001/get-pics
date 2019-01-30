import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard';
export default function ImageList(props) {
  return (
    <div className="image-list">
        {props.display.map(({urls, id, description })=> (
            <ImageCard src={urls.regular} key={id} alt={description}/>
        ))}
    </div>
  )
}
