import React, { useRef, useState, useEffect } from "react";
import { validaStr , validaNumeros} from "./validaciones";
import { alertaSwalModal } from "./Alertas";

export function MoldalUpdate({ actualizarProducto, producto }) {
  const closeModal = useRef();
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");
  
  useEffect(() => {
    setNombre(producto.nombre);
    setStock(producto.stock);
    setPrecio(producto.precio);
  }, [producto]);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const handlePrecioChange = (event) =>{
    setPrecio(event.target.value);
  };

  const handleActualizarProducto = (event) => {
    event.preventDefault();
    // Validar los campos antes de agregar el producto
    const nombreValidado = validaStr(nombre);
    const stockValidado = validaNumeros(stock);
    const precioValidado = validaNumeros(precio);
    // Verificar si los campos son válidos
    if (nombreValidado && stockValidado && precioValidado) {
      const updateProducto = { id: producto.id, nombre: nombreValidado, stock: stockValidado , precio: precioValidado};
      actualizarProducto(updateProducto);
      closeModal.current.click();
    }else{
      alertaSwalModal();
    }
  };

  return (
    <>
      <div className="modal fade" id="EditModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Editar producto</h1>
              <button ref={closeModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="editForm" onSubmit={handleActualizarProducto} encType="multipart/form-data">
                <input type="hidden" id="hiddenId-editar" name="hiddenId-editar" />
                <div className="mb-3">
                  <label htmlFor="edit-recipient-name" className="col-form-label">Nombre:</label>
                  <input type="text" className="form-control" id="edit-recipient-name" name="nombre" value={nombre} onChange={handleNombreChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="add-recipient-stock" className="col-form-label">Stock:</label>
                  <input type="number" className="form-control" id="edit-recipient-stock" name="stock" value={stock} onChange={handleStockChange} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="add-recipient-precio" className="col-form-label">Precio:</label>
                  <input type="number" className="form-control" id="add-recipient-precio" name="precio" value={precio} onChange={handlePrecioChange} required/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="submit" className="btn btn-primary" id="editar">Guardar cambios</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
