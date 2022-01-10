function sortListAZ() {
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("card");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    // Make a loop that will continue until no switching has been done:
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        a = list.getElementsByTagName("figure");
        b = list.getElementsByTagName("h2");
        // Loop through all list-items:
        for (i = 0; i < (a.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should switch place with the current item,
            based on the sorting direction (asc or desc): */
            if (dir == "asc") {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically lower than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically higher than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            a[i].parentNode.insertBefore(a[i + 1], a[i]);
            switching = true;
            // Each time a switch is done, increase switchcount by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = false;
            }
        }
    }
}

function sortListZA() {
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("card");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "desc";
    // Make a loop that will continue until no switching has been done:
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        a = list.getElementsByTagName("figure");
        b = list.getElementsByTagName("h2");
        // Loop through all list-items:
        for (i = 0; i < (a.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should switch place with the current item,
            based on the sorting direction (asc or desc): */
            if (dir == "asc") {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically lower than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically higher than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            a[i].parentNode.insertBefore(a[i + 1], a[i]);
            switching = true;
            // Each time a switch is done, increase switchcount by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "desc") {
                dir = "desc";
                switching = false;
            }
        }
    }
}

function sortListCity() {
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("card");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    // Make a loop that will continue until no switching has been done:
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        a = list.getElementsByTagName("figure");
        b = list.getElementsByTagName("code");
        // Loop through all list-items:
        for (i = 0; i < (a.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should switch place with the current item,
            based on the sorting direction (asc or desc): */
            if (dir == "asc") {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically lower than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically higher than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            a[i].parentNode.insertBefore(a[i + 1], a[i]);
            switching = true;
            // Each time a switch is done, increase switchcount by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = false;
            }
        }
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}