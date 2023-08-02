import React, {useRef} from "react";

export function ModalDelete({ eliminarProducto, producto }) {
    const closeModal = useRef();

    const handleEliminarProducto = () => {
      eliminarProducto(producto.id);
      closeModal.current.click();
    };

  return (
    <>
      <div className="modal fade"  id="DeleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Eliminar producto</h1>
              <button ref={closeModal}  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="hidden" id="hiddenId-eliminar" name="hiddenId-editar"/>
              <p>¿Estás seguro de que deseas eliminar este producto?</p>
              <p>Nombre: <span>{producto.nombre}</span></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-danger" id="eliminar" onClick={handleEliminarProducto}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
