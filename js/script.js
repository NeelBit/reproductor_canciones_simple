const play = document.querySelectorAll(".play");
const detener = document.querySelectorAll(".stop");
const download = document.querySelectorAll(".download");
const volumen = document.querySelector("#volumen");
const nVolumen = document.querySelector(".n-volumen");

//  para parar varios en caso de que se les haya dado play a muchos
/* let listado_canciones = document.querySelector('.listado-canciones'); */

let audio;

/* reproducir */
for (const elemento of play) {
    elemento.addEventListener("click", function() {
        let cancion = this.getAttribute('id');

        volumen.disabled = false;

        audio = new Audio(`media/audio/${cancion}.mp3`);

        audio.play();

        //  para parar varios en caso de que se les haya dado play a muchos
        /* listado_canciones.appendChild(audio); */
    });
}

/* detener */
for (const elemento of detener) {
    elemento.addEventListener("click", function() {
        audio.pause();

        // para parar varios en caso de que se les haya dado play a muchos
        /* let canciones = document.querySelectorAll('audio');
        canciones.forEach(element => {
            element.pause();
            element.remove();
        }); */
    });
}

/* download: la descarga mediante a href con atributo download  */

/* cambiar volumen */
volumen.addEventListener("change", function() {
    audio.volume = this.value; // this hace referencia a volumen
});

/* mostrar numero de volumen al cambiarlo */
volumen.addEventListener("click", function() {
    nVolumen.classList.remove("invisible")
    nVolumen.innerHTML = volumen.value;
});