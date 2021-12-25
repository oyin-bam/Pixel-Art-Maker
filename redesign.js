// on submit of form #sizePicker:
const form = document.getElementById('sizePicker');
// form.onsubmit = function () {
//     submitForm();
// };
form.addEventListener("submit", function () {
    submitForm();
});
document.body.setAttribute('style', 'background-image: url(backgroundImage1.jpeg); width: 100%; background-repeat:no-repeat; background-size:cover;');

// gets values for height and width supplied in the form
// makes grid off those values
function submitForm() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    //declaring grid as an empty string, in order to later use string concatenation
    //to form a sring that can be assigned to .innerHTML as a DOM string.
    let grid = '';

    // loop over each row
    for (let rowCount = 0; rowCount < height; rowCount++) {
        // creating a sring with the html tag <tr> and
        //concatenate to the grid string declared.
        // class row is given to rows for easy identification
        grid += '<tr class="row-' + rowCount + '">';
        // loop for each cell
        for (let columnCount = 0; columnCount < width; columnCount++) {
          // creating a sring with the html tag <td> and
          //concatenate with grid variable.
          // class row is given to rows for easy identification
          grid += '<td class="cell" id="row-' + rowCount + '_cell-' + columnCount + '"></td>';
        }
        // adding the closing tag </td> to the grid variable to form a complete htmlElement
        grid += '</tr>';
    }
    // add grid into table element
    table.innerHTML = grid;

    // Add click event to grid cells
    // once the table grid has been created
    // to allow clicking cells and setting the color of cells
    colorEachCell();
}

// add click events to all cells
function colorEachCell(){
    // on color selection return color:
    const colorPicker = document.getElementById("colorPicker");
    const allCells = document.getElementsByClassName('cell');
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}
