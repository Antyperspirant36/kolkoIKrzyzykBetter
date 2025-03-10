const Letters = ['a', 'b', 'c'];
const Numbers = [1, 2, 3];

const BasicCombinations = [
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"],
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
    ["a3", "b3", "c3"],
    ["a1", "b2", "c3"],
    ["a3", "b2", "c1"]
]

const DocumentCombinaions = BasicCombinations.map(Combination => {
    return Combination.map(square => {
        return document.getElementById(square);
    })
})

let player = 0;
let XWins = 0;
let OWins = 0;
let Won = false;
// const click = (id) => {
//     console.log('Clicked on:', id);
//     const currentSquare = document.getElementById(id);
//     if (currentSquare.innerHTML === '') {
//     currentSquare.innerHTML = player === 0 ? 'O' : 'X';
//     player = player === 0 ? 1 : 0;
//     }
//   };

const click = id => {
    if (Won == true) {
        for (let i = 0; i < Letters.length; i++) {
            for (let j = 0; j < Numbers.length; j++) {
                document.getElementById(Letters[i] + Numbers[j]).innerHTML = "";
            }
        }
        Won = false;
        player = 0;
        return;
    }
    const currentSquare = document.getElementById(id);
    if (currentSquare.innerHTML === '') {
        if (currentSquare.innerHTML = player === 0) {
            currentSquare.innerHTML = 'O';
            currentSquare.style.color = "red";
        } else {
            currentSquare.innerHTML = 'X';
            currentSquare.style.color = "blue";
        };
        player = player === 0 ? 1 : 0;
        const CheckWin = () => {
            for (let i = 0; i < DocumentCombinaions.length; i++) {
                const Combination = DocumentCombinaions[i];
                const IsX = Combination.every(item => item.innerHTML === 'X');
                const IsO = Combination.every(item => item.innerHTML === 'O');
                if (IsX) {
                    console.log('X wins');
                    alert("X wygrał");
                    XWins++;
                    document.getElementById('xScore').innerHTML = XWins;
                    return true;
                }
                if (IsO) {
                    console.log('O wins');
                    alert("O wygrało");
                    OWins++;
                    document.getElementById('oScore').innerHTML = OWins;
                    return true;
                }
            }
        }
        Won = CheckWin();
    }
}

const reset = () => {
    document.getElementById('oScore').innerHTML = 0;
    OWins = 0;

    document.getElementById('xScore').innerHTML = 0;
    XWins = 0;

    player = 0;

    Won = false;
    for (let i = 0; i < Letters.length; i++) {
        for (let j = 0; j < Numbers.length; j++) {
            document.getElementById(Letters[i] + Numbers[j]).innerHTML = "";
        }
    }

}