console.log("Siema Developerze! Stronę stworzył chory psychicznie człowiek więc się nie przejmój, tylko baw się dobrze.");

let butt = document.querySelector(".butt");
let container = document.querySelector(".container");


butt.addEventListener("click", () => {
    container.innerHTML = "Wyskakujesz przez okno. Niestety zapomniałeś, że mieszkasz na piątym piętrze i umierasz od wypadku :( A MOGŁEŚ OTWORZYĆ!"
});

