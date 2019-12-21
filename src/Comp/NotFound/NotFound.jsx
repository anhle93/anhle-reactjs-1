import React from 'react';

function NotFound(props) {

    return (
        <main>
            <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-text text-center">
                                <h1>Page Not Found</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default NotFound;