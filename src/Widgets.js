import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("L’Australie choisit les États-Unis pour construire ses sous-marins", "inquiétudes à Cherbourg.")}
      {newsArticle("Comment Jared Isaacman", "le touriste spatial de SpaceX, a construit sa fortune.")}
      {newsArticle("Non, les vaccins anti-Covid ne vont pas être remplacés par des médicaments le 20 octobre", "Mais la coloscopie a le vent en poupe...")}
      {newsArticle("Le Smic augmentera de 34,20 euros brut par mois au 1er octobre", "En raison de l'inflation!")}
      {newsArticle("“Dune” par Denis Villeneuve", "Un space opera épicé à souhait.")}
      {newsArticle("Meghan Markle photoshopée à outrance:", "Son maxi brushing fait un flop.")}
      {newsArticle("Un nain dynamité dans la Drôme, un cratère de 20cm de large", "Le choc des riverains est total.")}
    </div>
  );
}

export default Widgets;
