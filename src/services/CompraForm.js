export const validationsForm = (form) => {
    let errores = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexComments = /^.{1,255}$/;
    let regexText40 = /^.{1,40}$/;

    if (!form.fecha) {
        errores.fecha = "Please the field is required.";
    } else if (!regexText40.test(form.fecha.trim())) {
        errores.fecha = "The field accepts up to 40 characters.";
    } else{
        errores.fecha = "";
    }

    if (!form.valor) {
        errores.valor = "Please the field is required.";
    } else if (!regexText40.test(form.valor.trim())) {
        errores.valor = "The field accepts up to 40 characters.";
    } else{
        errores.valor = "";
    }

    if (!form.proveedor) {
        errores.proveedor = "Please the field is required.";
    } else if (!regexText40.test(form.proveedor.trim())) {
        errores.proveedor = "The field accepts up to 40 characters.";
    } else{
        errores.proveedor = "";
    }

    if (!form.detalle) {
        errores.detalle = "Please the field is required.";
    } else if (!regexText40.test(form.detalle.trim())) {
        errores.detalle = "The field accepts up to 40 characters.";
    } else{
        errores.detalle = "";
    }
        

    return errores;
};

const CompraForm = {
    validationsForm,
  };
  
  export default CompraForm;