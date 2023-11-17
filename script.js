let player = "X"
let table = ["", "", "", "", "", "", "", "", ""]

function mark(index) {
    if (table[index] != "") return

    table[index] = player

    if(player == "X"){
        player = "O"
    } else {
        player = "X"
    }

    // player = player == "X" ? "O" : "X" 

    render()
}

function render() {
    let tds = document.querySelectorAll("td")

    tds.forEach((td, indice) => {
        td.innerHTML = table[indice]
    })
}
