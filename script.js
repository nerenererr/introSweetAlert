function showAlert() {
    Swal.fire('Hola mundo');
}

function success() {
    Swal.fire({
        title: 'Éxito',
        text: 'Se envió correctamente',
        icon: 'info'
    });
}

function cat() {
    Swal.fire({
        title: "Nyaaaaa ₍^. .^₎⟆",
        width: 600,
        padding: "3em",
        color: "#b70c0c",
        background: "#f0bfe4 url(/images/trees.png)",
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXljam0ybjFvNXRtd2hsZmV2NnQwMHludXoyYjkxdWp5cGptd3JsOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/22kxQ12cxyEww/giphy.gif")
            left top
            no-repeat
        `
});
}

function alternative() {
    Swal.fire({
        title: 'Hola',
        text: '¿Cómo estás?',
        icon: 'question',
        confirmButtonTect: 'Okkk',
        customClass: {
            confirmButton: 'btn btn-success',
            title: 'myTitle'
        },
        background: '#D8D9E9',
        backdrop: 'rgba(0, 0, 123, o.4)'
    })
}

function promise() {
    Swal.fire({
        title: 'Eliminar tarjeta',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yeah',
        showCancelButtonText: 'Cancel'
    }).then(result => {
        if (result.isConfirmed) {
            fetch('/api/tareas/123', { method: 'DELETE' }
            .then(() => {
                Swal.fire('Eliminado', 'La tarea')
            })
            )
        }
    })
}




// alerta básica
// Swal.fire('Hola mundo');