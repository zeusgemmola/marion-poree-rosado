import { Link } from "react-router-dom";
import Title3 from "../Title/Title3";
import image from "./piggybank.jpg";
import "./style.css";

const Error = () => (
  <div className="container">
    <div className="row flex">
      <Title3 title="Page inconnue" />
      <p>
        La page que vous recherchez n'hésite pas ...
        <br />
        Pour retourner au convertisseur, cliquez <Link to="/">ici</Link>
      </p>
      <img className="logo" src={image} alt="Tirelire cassée" />
    </div>
  </div>
);

export default Error;
