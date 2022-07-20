import React from "react";

const FooterComponent = () =>{
    return (
        <footer className="bg-dark align-items-end fixed-bottom">
            <div className="d-flex justify-content-between">
                <div className="p-2 "><p className="text-center text-muted">@ 2022, EcoTank.inc</p></div>
                <div className="align-items-end text-muted">
                    <ul className="nav pb-2 text-light me-3 text-muted">
                        <li className="nav-item me-3 ">Home</li>
                        <li className="nav-item ">Prueba</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default FooterComponent;