import './PostItem.css';
import React from 'react';
const PostItem = (props) => {
    const refName = React.useRef(null);
    const refPrice = React.useRef(null);
    const refDescription = React.useRef(null);
    const refURL = React.useRef(null);

    const handlerCreateObject = () =>{
        const newItem = {
            name: refName.current.value,
            price: refPrice.current.value,
            description: refDescription.current.value,
            quantity: "1",
            urlPhoto: refURL.current.value
        };
        props.setList((prev) => {return [...prev, newItem]});
    };
    return(
        <div className="container-post">
            <div className="container-data">
                <label> Ingrese el Nombre del producto: </label>
                <input ref={refName}></input>
            </div>
            <div className="container-data">
                <label> Ingrese el precio: </label>
                <input ref={refPrice}></input>
            </div>
            <div className="container-data">
                <label> Ingrese la descripcion del producto: </label>
                <textarea ref={refDescription}></textarea>
            </div>
            <div className="container-data">
                <label> Ingrese la URL de la foto del producto: </label>
                <input ref={refURL}></input>
            </div>
            <button onClick={handlerCreateObject}>Ingresar</button>
        </div>
    );

}
export default PostItem;
