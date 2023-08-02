import Swal from 'sweetalert2';

export const alertaSwal = (mj) =>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: mj,
        showConfirmButton: false,
        timer: 1500
    });
};

export const alertaSwalError = (mj) =>{
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: mj,
        showConfirmButton: false,
        timer: 2000
    });
};

export const alertaSwalModal = () =>{
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Algun campo es invalido o esta vacio',
        showConfirmButton: true,
    });
};