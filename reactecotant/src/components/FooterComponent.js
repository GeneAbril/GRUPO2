import React from "react";

const FooterComponent = () =>{
    return (
        <footer class="bg-dark align-items-end">
            <div class="d-flex justify-content-between">
                <div class="p-2 "><p class="text-center text-muted">@ 2022, EcoTank.inc</p></div>
                <div class="align-items-end text-muted">
                    <ul class="nav p-2 text-light me-3 text-muted">
                        <li class="nav-item me-3 ">Home</li>
                        <li class="nav-item ">Prueba</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default FooterComponent;