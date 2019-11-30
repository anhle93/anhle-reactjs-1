import React from "react";

function ProductImage(props) {
    return (
        <div>
            <img src={props.src} alt="img"></img>
            <div>
                <span>{props.saleText}</span>
            </div>
        </div>
    );
}

export default ProductImage;