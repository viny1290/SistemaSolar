import { useState } from "react";
import planetas from './planetas.json';

export default function Planetas() {

    const [itens] = useState(planetas);

    return(

        <>
        
            {itens.map((plane) => {

                if(plane.lua === "nao") {
                    console.log("estou sendo criado")
                    console.log(plane)

                    return(

                        <div className={plane.outline}>
                            <div className={plane.nome + " planeta"}>
                                <img className={plane.nome + "_img img"} src={plane.imagem} alt="" />
                                <p>{plane.titulo}</p>
                            </div>
                        </div>
    
                    )

                }else if(plane.lua === "sim") {
                    console.log("estou sem lua")

                    return(

                        <div class={plane.outline}>
                            <div class={plane.nome}>
                                <div class={plane.nome + "-circle"}>
                                    <img className={plane.nome + "_img img"} src={plane.imagem} alt="" />
                                    <div class="earth-inner"></div>
                                </div>
                                <p>{plane.titulo}</p>
                            </div>
                        </div>

                    )

                }

            })}
        
        </>

    )

}