
export function validaCodigo(codigo) {
    const normalizarCodigo = codigo.trim().toUpperCase();
    if (normalizarCodigo.length > 2) {
      return normalizarCodigo;
    }
    return false;
};

export function validaStr(inputStr) {
    const normalizarStr = inputStr.trim();
    if (normalizarStr.length > 1) {
      return capitalize(normalizarStr);
    }
    return false;
};
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export function validaNumeros(inputnum) {
    const regex = /^\d+$/;
    const normalizarNum = inputnum.toString().trim();
    if (normalizarNum) {
      if (regex.test(normalizarNum)) {
        return Number(normalizarNum);
      }
    }
    return false;
  }
  
