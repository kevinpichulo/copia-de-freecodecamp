import React from "react";
import "../hojas-de-estilo/Testimonios.css"
function Testimonio(props){
    return(
        <div className="contendor-testimonio">
            <img className="imagen-testimonio"
            src={require(`../imagens/testimonio-${props.imagen}.png`)}
            alt="foto de emma"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio"><strong>{props.negras}</strong>"{props.Testimonio}"<strong>{props.negra}</strong>{props.demas}<strong>{props.negritas}</strong></p>
            </div>
        </div>
    );
}
export default Testimonio;