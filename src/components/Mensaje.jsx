import { useState } from "react"

function Mensaje({mensaje, tipo}){

    return (
    <div className={`mensaje ${tipo}`}>{mensaje}</div>
    );
}

export default Mensaje; 