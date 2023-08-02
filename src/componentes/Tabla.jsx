import React from "react";
import { TablaBody } from "./TablaBody";

export function Tabla({ lista , setProductoSeleccionado }){
    return(
        <>
            <div className="d-flex align-items-center">
                <h1 className="my-4 me-4">Productos</h1>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AddModal">Agregar</button>
            </div>  
            {lista.length > 0 ? (
                <>
                    <table className="table table-light table-striped text-center mt-4">
                        <thead className="table-primary">
                            <tr>
                                <th>N°</th>
                                <th>Codido</th>
                                <th>Nombre</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map((elementoTabla, index)=><TablaBody elementoTabla={elementoTabla} key={elementoTabla.id } setProductoSeleccionado={setProductoSeleccionado} contador={index + 1}/>)}
                        </tbody>
                    </table>
                </>
            ):(
                <div className="alert alert-danger" role="alert">
                    No hay productos para mostar
                </div>
            )}
        </>
    );
};