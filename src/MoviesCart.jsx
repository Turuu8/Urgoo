import './style/cart.css'
export const MoviesCart = (props) => {
    console.log(props.data.name)
    return(
        <div className="cartCss">
            <img src={props.data.image} alt="" />
            <h2>{props.data.name}</h2>
        </div>
    )
}