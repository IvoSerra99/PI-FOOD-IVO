const validate = (form)=>{
    
    let errors= {};
    
    if(!form.name){
        errors.e1 = 'Debe ingresar un nombre a la receta'
    }
    if(form.name.length < 4){
        errors.e2 = 'Debe ingresar un nombre valido a la receta de al menos 4 caracteres'
    }
    
    if(!form.resumen){
        errors.e3 = 'Debe ingresar un resumen de la receta'
    }
    if(form.resumen.length < 10){
        errors.e4 = 'Debe ingresar un resumen de al menos 10 caracteres'
    }
    if(!form.pasos){
        errors.e5 = 'Debe ingresar los pasos a seguir'
    }
    if(form.pasos.length < 10){
        errors.e6 = 'Al menos debe ingresar un paso de  10 caracteres'
    }
    if(!form.health){
        errors.e7 = 'Debe ingresar el Heald Score de la receta'
    }
    
     if(form.health.value < 1 && form.heald.value > 100){
         errors.e8 = 'El Heald Score debe ser un numero del 1 al 100'
     }
    if (!form.image) {
        errors.e9 = 'Debe ingresar la URL de la imagen';
    }
    const urlRegex =/^https:\/\/.+$/;
    
    if (!urlRegex.test(form.image)) {
        errors.e10 = 'Ingrese una URL válida para la imagen';
    }
    
    
    return errors;
    }
    export default validate;