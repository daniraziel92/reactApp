import './ListItem.css';

const ListItem = (props) => {
    const handlerDataItem = (e) => {
        let total = 0;
        if(e.target.name === "minus")
        {
            total = parseInt(props.quantity) - 1;
            props.setDataItem((prev) => {return{...prev, quantity: total}});
            console.log(total);
        };
        if(e.target.name === "plus")
        {
            total = parseInt(props.quantity) + 1;
            props.setDataItem((prev) => {return{...prev, quantity:total}});
            console.log(total);
        }
    }
    return (
        <div className="container-box">
            <img className="object-photo" src={props.urlPhoto}/>
            <div className="object-body">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <div className="price-quantity">
                    <p>{props.price}</p>
                    <div className="quantity">
                        <button className="button-quantity" onClick={handlerDataItem} name="plus">+</button>
                        <p>{props.quantity}</p>
                        <button className="button-quantity" onClick={handlerDataItem} name="minus">-</button>
                    </div>
                </div>  
            </div>
        </div>
    )
};

export default ListItem;