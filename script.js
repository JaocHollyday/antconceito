document.addEventListener("DOMContentLoaded", function() {
    let map = L.map('map').setView([-23.5505, -46.6333], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    document.getElementById("openTest").addEventListener("click", function() {
        document.getElementById("testContainer").classList.toggle("hidden");
    });
});