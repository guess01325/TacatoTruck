import "./MenuItem.css";

function MenuItem(props) {
  return (
    <>
      {props._id}
      <img className="taco-img" src={props.imgURL} alt={props.name}></img>
      <div className="taco-name">{props.name}</div>
      <div className="taco-price">{`${props.price}`}</div>
      <div className="ingredients">{props.ingredients}</div>
      <div className="key">{props.key}</div>
    </>
  );
}

export default MenuItem;
