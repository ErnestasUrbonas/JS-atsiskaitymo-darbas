function saveData() {
    let vardas, pavarde, mokykla, miestas, sritis;

    vardas = document.getElementById("vardas").value;
    pavarde = document.getElementById("pavarde").value;
    mokykla = document.getElementById("mokykla").value;
    miestas = document.getElementById("miestas").value;
    sritis = document.getElementById("sritis").value;

    localStorage.setItem("vardas", vardas)
    localStorage.setItem("pavarde", pavarde)
    localStorage.setItem("mokykla", mokykla)
    localStorage.setItem("miestas", miestas)
    localStorage.setItem("sritis", sritis)

}