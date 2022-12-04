import { useState } from 'react'
import '../styles/description.css'

function Description({details}){

    const [frameClosed, setFrameClosed] = useState(true)

    function openDescription(){
        setFrameClosed(false)
    }
    function closeDescription(){
        setFrameClosed(true)
    }


    return frameClosed ? 
        (   
            <div className='title-button' >
                <p > Description </p>
                <i class="fas fa-sharp fa-solid fa-chevron-down" onClick={ () => openDescription() }></i>
            </div>
            
        )
        :

        (   
            <div className="description">
                <div className='title-button' >
                    <p > Description </p>
                    <i class="fas fa-sharp fa-solid fa-chevron-up"  onClick={ () => closeDescription() } ></i>
                </div>
                <p className='description-text' >{details.logement.description}</p>
            </div>
        )

}

export default Description