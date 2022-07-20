import React from "react";

const AgregarComentarioComponent = ({comentarioEditado}) => {
    return(
    <form>
        <h1>Comentarios</h1>
        <hr/>
        <div class="form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Deje su comentario!">{comentarioEditado}</textarea>
            <button type="button" class="btn btn-outline-warning m-2" >Warning</button>
            <button type="button" class="btn btn-outline-success m-2">Success</button>
        </div>
    </form>

    )
}

export default AgregarComentarioComponent;