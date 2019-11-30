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
                <span>{props.finalprice}</span>
                <span>{props.price}</span>
            </div>
        </div>
    );
}

export default ProductInfo;