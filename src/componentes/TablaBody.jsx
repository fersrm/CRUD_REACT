import React from "react";

export function TablaBody({ elementoTabla, setProductoSeleccionado, contador}){
    const { id, codigo, nombre, stock, precio } = elementoTabla;

    const handleProductoClick = () => {
        setProductoSeleccionado(elementoTabla);
    };
    return(
        <>
            <tr>
                <td>{contador}</td>
                <td>{codigo}</td>
                <td>{nombre}</td>
                <td>{stock}</td>
                <th>{precio}</th>
                <td className="d-flex justify-content-around">
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#EditModal" data-id={id} onClick={handleProductoClick} ><i className="fa-solid fa-pen-to-square"></i></button> 
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#DeleteModal" data-id={id} onClick={handleProductoClick} ><i className="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>

        </>
    );
};
    