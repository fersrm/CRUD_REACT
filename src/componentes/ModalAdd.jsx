import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import { validaCodigo, validaStr , validaNumeros} from "./validaciones";
import { alertaSwalModal } from "./Alertas";

export function ModalAdd({ agregarProducto }) {
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");

  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const handlePrecioChange = (event) =>{
    setPrecio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar los campos antes de agregar el producto
    const codigoValidado = validaCodigo(codigo);
    const nombreValidado = validaStr(nombre);
    const stockValidado = validaNumeros(stock);
    const precioValidado = validaNumeros(precio);
    // Verificar si los campos son válidos
    if (codigoValidado && nombreValidado && stockValidado && precioValidado) {
      const nuevoProducto = { id: uuid(), codigo: codigoValidado, nombre: nombreValidado, stock: stockValidado, precio: precioValidado };
      agregarProducto(nuevoProducto);
      // limpia loscampos
      setCodigo("");
      setNombre("");
      setStock("");
      setPrecio("");
    }else{
      alertaSwalModal();
    }

  };

  return (
    <>
      <div className="modal fade" id="AddModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar producto</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="addForm" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                  <label htmlFor="add-recipient-codigo" className="col-form-label">Codido:</label>
                  <input type="text" className="form-control" id="add-recipient-codigo" name="codigo" value={codigo} onChange={handleCodigoChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="add-recipient-name" className="col-form-label">Nombre:</label>
                  <input type="text" className="form-control" id="add-recipient-name" name="nombre" value={nombre} onChange={handleNombreChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="add-recipient-stock" className="col-form-label">Stock:</label>
                  <input type="number" className="form-control" id="add-recipient-stock" name="stock" value={stock} onChange={handleStockChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="add-recipient-precio" className="col-form-label">Precio:</label>
                  <input type="number" className="form-control" id="add-recipient-precio" name="precio" value={precio} onChange={handlePrecioChange} required/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="submit" className="btn btn-primary" id="agregar">Agregar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
