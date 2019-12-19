
import React from 'react';

export default function Layout(props) {
    return (
        <section className="shop-area pt-150 pb-100">
            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </section>
    );
}