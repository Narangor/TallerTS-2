import { series } from './datos.js';
var seriesTable = document.getElementById("series");
function datosSerie(listaSeries) {
    var tbodySeries = document.createElement("tbody");
    var _loop_1 = function (serie_1) {
        var trElement = document.createElement("tr");
        var nameElement = document.createElement("td");
        nameElement.style.color = "rgb(36, 129, 211)";
        nameElement.textContent = serie_1.name;
        nameElement.addEventListener("click", function () {
            showCard(serie_1);
        });
        trElement.innerHTML = "<td style=\"font-weight: bold\">".concat(serie_1.id, "</td>\n        <td></td>\n        <td>").concat(serie_1.channel, "</td>\n        <td>").concat(serie_1.seasons, "</td>");
        trElement.children[1].appendChild(nameElement);
        tbodySeries.appendChild(trElement);
    };
    for (var _i = 0, listaSeries_1 = listaSeries; _i < listaSeries_1.length; _i++) {
        var serie_1 = listaSeries_1[_i];
        _loop_1(serie_1);
    }
    seriesTable.appendChild(tbodySeries);
}
function promedioSeries(listaSeries) {
    var trElement = document.createElement("tr");
    var tdElement = document.createElement("td");
    var sumaSeries = 0;
    series.forEach(function (n) { return sumaSeries += n.seasons; });
    var average = sumaSeries / listaSeries.length;
    tdElement.colSpan = 4;
    tdElement.textContent = "Seasons average: ".concat(average);
    trElement.appendChild(tdElement);
    seriesTable.appendChild(trElement);
}
function createCard(serie) {
    return "<div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(serie.name, "</h5>\n            <p class=\"card-text\">").concat(serie.description, "</p>\n            <a href=\"").concat(serie.page, "\" class=\"btn btn-primary\" target=\"_blank\">Go to Page</a>\n        </div>\n    </div>");
}
function showCard(serie) {
    var cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = createCard(serie);
}
datosSerie(series);
promedioSeries(series);
