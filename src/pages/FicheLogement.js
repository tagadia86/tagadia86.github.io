import { useState } from "react"
import Carrousel from "../components/Carrousel"
import DescriptionEquipements from "../components/DescriptionEquipements"
import DetailsLogement from "../components/DetailsLogement"
import Footer from "../components/Footer"
import Header from "../components/Header"
import '../styles/fichelogement.css'


function FicheLogement(logement){

   const [picture, setPictures] = useState(logement)
   console.log('données')
   console.log(logement.logement.pictures)

    return(
        <div className="fichelogement" >
            <Header/>
            <Carrousel pictures={logement.logement.pictures} />
            <DetailsLogement details={logement} />
            <DescriptionEquipements details={logement} />
            <Footer/>

        </div>
    )

}
export default FicheLogement