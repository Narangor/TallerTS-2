import {serie} from './Serie.js' 
import {series} from './datos.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
function datosSerie(listaSeries: serie[]): void {
    let tbodySeries: HTMLElement = document.createElement("tbody");
    for(let serie of listaSeries){
        let trElement: HTMLElement = document.createElement("tr");
        let nameElement: HTMLElement = document.createElement("td");
        nameElement.style.color = "rgb(36, 129, 211)";
        nameElement.textContent = serie.name;
        nameElement.addEventListener("click", function() {
            showCard(serie);
        });
        trElement.innerHTML = `<td style="font-weight: bold">${serie.id}</td>
        <td></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        trElement.children[1].appendChild(nameElement);
        tbodySeries.appendChild(trElement);
    }
    seriesTable.appendChild(tbodySeries);
}

function promedioSeries(listaSeries: serie[]):void{
    let trElement: HTMLElement = document.createElement("tr");
    let tdElement: HTMLTableCellElement = document.createElement("td");
    let sumaSeries: number = 0;
    series.forEach(n => sumaSeries+= n.seasons);

    let average: number =sumaSeries/listaSeries.length;
    tdElement.colSpan = 4;
    tdElement.textContent = `Seasons average: ${average}`;
    trElement.appendChild(tdElement);
    seriesTable.appendChild(trElement);


}

function createCard(serie: serie): string {
    return `<div class="card" style="width: 18rem;">
        <img src="./images/${serie.image}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
            <h5 class="card-title">${serie.name}</h5>
            <p class="card-text">${serie.description}</p>
            <a href="${serie.page}" class="btn btn-primary" target="_blank">Go to Page</a>
        </div>
    </div>`;
}

function showCard(serie: serie): void {
    let cardContainer: HTMLElement = document.getElementById("cardContainer")!;
    cardContainer.innerHTML = createCard(serie);
}

datosSerie(series);
promedioSeries(series);