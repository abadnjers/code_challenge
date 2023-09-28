//Seleccionar el formulario
const form = document.querySelector('form');
//escuchar el eventos submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); //para que no se recargue la página 
//crear un objeto con los datos ingresados
const datos = {
    name: document.getElementById('POST-name').value,
    surname: document.getElementById('POST-surname').value,
    born: document.getElementById('POST-born').value,
};
//crear objeto con los parámetros para el fetch
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
};
//hacer el fetch 
fetch('https://jsonplaceholder.typicode.com/users', options)
    .then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
    }).then(update => {
        console.log(update);
    }).catch(e => {
        console.log(e);
    });
});