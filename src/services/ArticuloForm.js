export const validationsForm = (form) => {
    let errores = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexComments = /^.{1,255}$/;
    let regexText40 = /^.{1,40}$/;

    if (!form.nombre) {
        errores.nombre = "Please the field is required.";
    } else if (!regexText40.test(form.nombre.trim())) {
        errores.nombre = "The field accepts up to 40 characters.";
    } else{
        errores.nombre = "";
    }

    if (!form.descripcion) {
        errores.descripcion = "Please the field is required.";
    } else if (!regexText40.test(form.descripcion.trim())) {
        errores.descripcion = "The field accepts up to 40 characters.";
    } else{
        errores.descripcion = "";
    }

    if (!form.cantidad) {
        errores.cantidad = "Please the field is required.";
    } else if (!regexText40.test(form.cantidad.trim())) {
        errores.cantidad = "The field accepts up to 40 characters.";
    } else{
        errores.cantidad = "";
    }

    if (!form.categoria) {
        errores.categoria = "Please the field is required.";
    } else if (!regexText40.test(form.categoria.trim())) {
        errores.categoria = "The field accepts up to 40 characters.";
    } else{
        errores.categoria = "";
    }

    if (!form.estado) {
        errores.estado = "Please the field is required.";
    } else if (!regexText40.test(form.estado.trim())) {
        errores.estado = "The field accepts up to 40 characters.";
    } else{
        errores.estado = "";
    }
        

    return errores;
};

const ClienteForm = {
    validationsForm,
};

export default ClienteForm;