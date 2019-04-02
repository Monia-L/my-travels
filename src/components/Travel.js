import React from "react";
import "./Travel.css";

const travels = [
{
destination: "Le bout du monde",
country: "l'Algérie - Timimoun",
photo:"http://www.wipplay.com/static/user-content//42066/501942-newvis.jpg",
distance : "3212km"
},

{
  destination:"L'autre bout du monde",
  country:"Indonésie - blue fire ",
  photo:"https://news.nationalgeographic.com/content/dam/news/photos/000/758/75878.jpg",
  credit:"Photograph by Olivier Grunewald",
  distance : "1345km"
},
{
  destination:"Paris",
  country:"Dame de fer ",
  photo:"http://www.wipplay.com/static/user-content//53116/749143-newvis.jpg",
  credit:"Photograph by Alekushi",
  distance : "0km"
},
{
  destination:"Soleil levant",
  country:"Thaïlande ",
  photo:"https://back-promocam.orchestra-platform.com/admin/TS/fckUserFiles/Image/TH-NOUVELLES_PHOTOS/AdobeStock_140163184.jpeg",
  distance : "9345km"
},
{
  destination:"Incredible India",
  country:"Inde ",
  photo:"https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FGEO.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fimages.2Frubrique-geo-infos.2Fdossier-special.2Fdossier-special-inde.2Ftaj-mahal.2F418470-1-fre-FR.2Ftaj-mahal.2Ejpg/960x551/background-color/ffffff/quality/70/inde-voyage.jpg",
  distance : "13845km"
}
];


const Travel = () => (
  <div>
  {travels.map(unObjet =>  
    <figure>
    <h3>{unObjet.country}</h3>
    <img className="test" src={unObjet.photo} alt={unObjet.country} />
    <figcaption>
      <blockquote>{unObjet.destination}</blockquote>
      <cite>{unObjet.distance}</cite>
      <br></br>
      <cite>{unObjet.credit}</cite>
    </figcaption>
    </figure>

    )}
</div>
);

export default Travel;