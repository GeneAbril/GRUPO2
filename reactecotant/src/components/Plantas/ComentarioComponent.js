import React from "react";

const ComentarioComponent = ({comentario}) => {
    return(
        <div class="col">
           <span class="border border-2 rounded">{comentario}</span>
        </div>

    )
}
export default ComentarioComponent;