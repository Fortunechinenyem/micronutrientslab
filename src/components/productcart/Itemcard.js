import React from "react";
import { useCart } from "react-use-cart";

function Itemcard(props) {
  const { addItem } = useCart();
  return (
    <div className="col-md mb-4 ">
      <div className=" mx-auto  shadow">
        <div className="text-center">
          <h5>{props.title}</h5>
          <p>{props.desc1}</p>
          <p>{props.desc2}</p>
          <button
            className="btn btn-warning mt-3 mb-3"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Itemcard;
