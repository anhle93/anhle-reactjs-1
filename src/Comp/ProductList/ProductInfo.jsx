import React from "react";

function ProductInfo(props) {
    return (
        <div>
            <div>
                <a href="/">{props.type}</a>
            </div>
            <h4>
                <a href="/">{props.name}</a>
            </h4>
            <div>
                <p>{props.finalprice}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default ProductInfo;
