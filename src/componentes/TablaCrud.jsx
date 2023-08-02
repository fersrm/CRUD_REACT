import React, { useState, useEffect} from "react";
import { ModalAdd } from "./ModalAdd"; 
import { ModalDelete } from "./ModalDelete";
import { MoldalUpdate } from "./ModalUpdate";
import { Tabla } from "./Tabla";
import { alertaSwal, alertaSwalError } from './Alertas';

const KEY = "tbody";

export function TablaCrud(){
    const [listar , setListar] = useState(   
        JSON.parse(localStorage.getItem(KEY))?JSON.parse(localStorage.getItem(KEY)):[]
    );
    
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(listar));
    }, [listar]);
    
    const agregarProducto = (nuevoProducto) => {
        const producto = listar.find((producto)=> producto.codigo === nuevoProducto.codigo);
        if(producto){
            return(
                alertaSwalError('El codigo de producto ya existe')
            );
        };
        setListar((prevListar) => [...prevListar, nuevoProducto]);
        alertaSwal('Producto Agregado con exito')
    };
    
    const [productoSeleccionado, setProductoSeleccionado] = useState({id:"",nombre:"", stock:"" , precio:""});  

    const eliminarProducto = (idProducto) => {
        const nuevaLista = listar.filter((elemento)=> elemento.id !== idProducto);
        setListar(nuevaLista);
        setProductoSeleccionado({id:"",nombre:"", stock:"" , precio:""})
        alertaSwal('Producto Eliminado con exito')
    };  

    const actualizarProducto = (updateProducto) =>{
        const newLista = [...listar];
        const elemento = listar.find((elemento)=> elemento.id === updateProducto.id);
        elemento.nombre = updateProducto.nombre;
        elemento.stock = updateProducto.stock;
        elemento.precio = updateProducto.precio;
        setListar(newLista);
        alertaSwal('Producto Actualizado con exito')
    };
    
    return(
        <>
            <ModalAdd agregarProducto={agregarProducto} />
            <Tabla lista = {listar} setProductoSeleccionado={setProductoSeleccionado}/>
            <ModalDelete eliminarProducto={eliminarProducto} producto={productoSeleccionado}/>
            <MoldalUpdate actualizarProducto={actualizarProducto} producto={productoSeleccionado}/>
        </>
    );
}