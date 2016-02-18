function go() {
    var row1 = document.getElementById("firstRow");

    var one = parseInt(row1.getElementsByClassName("firstColumn")[0].value);
    var two = parseInt(row1.getElementsByClassName("secondColumn")[0].value);
    var three = parseInt(row1.getElementsByClassName("thirdColumn")[0].value);
    var row2 = document.getElementById("secondRow");

    var four = parseInt(row2.getElementsByClassName("firstColumn")[0].value);
    var five = parseInt(row2.getElementsByClassName("secondColumn")[0].value);
    var six = parseInt(row2.getElementsByClassName("thirdColumn")[0].value);

    var row3 = document.getElementById("thirdRow");

    var seven = parseInt(row3.getElementsByClassName("firstColumn")[0].value);
    var eight = parseInt(row3.getElementsByClassName("secondColumn")[0].value);
    var nine = parseInt(row3.getElementsByClassName("thirdColumn")[0].value);

    function checkInput(first, second, third, element) {
        if (isNaN(first) || isNaN(second) || isNaN(third)) {
            element.innerHTML = "wrong input!";
        }
        else {
            element.innerHTML = first + second + third;
        }
    }

    var tdElement = document.createElement("td");

    checkInput(one, two, three, tdElement);
    row1.appendChild(tdElement);

    tdElement = document.createElement("td");
    checkInput(four, five, six, tdElement);
    row2.appendChild(tdElement);

    tdElement = document.createElement("td");
    checkInput(seven, eight, nine, tdElement);
    row3.appendChild(tdElement);

    var tr = document.createElement("tr");

    var td = document.createElement("td");
    checkInput(one, four, seven, td);
    tr.appendChild(td);

    td = document.createElement("td");
    checkInput(two, five, eight, td);
    tr.appendChild(td);

    td = document.createElement("td");
    checkInput(three, six, nine, td);
    tr.appendChild(td);

    var last = document.getElementById("last");
    row3.parentNode.insertBefore(tr, last);
}