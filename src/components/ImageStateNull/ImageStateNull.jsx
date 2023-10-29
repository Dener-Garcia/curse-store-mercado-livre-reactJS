import React, { useContext } from 'react'
import './index.css'
import image from '../../../public/estado-null.png'
import AppContext from '../../context/AppContext'


const ImageStateNull = () =>{

  const {imgStateNull} = useContext(AppContext)

  return(
    <div className={`state-null-img ${imgStateNull ? '' : 'dNone'}`} >
      <h4 className="state-title">O que vamos comprar hoje?</h4>
      <img className="state-img" src={image} alt="Imagem pesquisa" />
    </div>
    
  )
}

export default ImageStateNull
