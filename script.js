class Nod {
    constructor(lit, ord, pli, exp) {
        this.lit = lit;
        this.ord = ord;
        this.pli = pli;
        this.exp = exp;
    }
}

let A = new Nod("A", 1, "001", 26);
let B = new Nod("B", 2, "002", 13);
let C = new Nod("C", 3, "010", 1);
let D = new Nod("D", 4, "011", 9);
let E = new Nod("E", 5, "012", 3);
let F = new Nod("F", 6, "020", 14);
let G = new Nod("G", 7, "021", 16);
let H = new Nod("H", 8, "022", 22);
let I = new Nod("I", 9, "100", 2);
let J = new Nod("J", 10, "101", 21);
let K = new Nod("K", 11, "102", 12);
let L = new Nod("L", 12, "110", 10);
let M = new Nod("M", 13, "111", 6);
let N = new Nod("N", 14, "112", 11);
let O = new Nod("O", 15, "120", 4);
let P = new Nod("P", 16, "121", 18);
let Q = new Nod("Q", 17, "122", 7);
let R = new Nod("R", 18, "200", 15);
let S = new Nod("S", 19, "201", 25);
let T = new Nod("T", 20, "202", 8);
let U = new Nod("U", 21, "210", 17);
let V = new Nod("V", 22, "211", 20);
let W = new Nod("W", 23, "212", 5);
let X = new Nod("X", 24, "220", 23);
let Y = new Nod("Y", 25, "221", 24);
let Z = new Nod("Z", 26, "222", 19);

let litere = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
let termeniA = ["021", "111"];
let termeniB = ["002", "110"];

function AfisareGalois() {
    for (let i = 0; i < litere.length; i++) {
        let auxString;

        auxString = "lit";
        auxString += litere[i].lit;
        let tdCaracter = document.getElementById(auxString);
        tdCaracter.innerText = litere[i].lit;

        auxString = "ord";
        auxString += litere[i].lit;
        let tdFrecventa = document.getElementById(auxString);
        tdFrecventa.innerText = litere[i].ord;

        auxString = "pli";
        auxString += litere[i].lit;
        let tdProbabilitate = document.getElementById(auxString);
        tdProbabilitate.innerText = litere[i].pli;

        auxString = "exp";
        auxString += litere[i].lit;
        let tdHuffman = document.getElementById(auxString);
        tdHuffman.innerText = litere[i].exp;
    }
}

AfisareGalois();

function AdunarePli(pliA, pliB) {
    let newPli = "";
    let rez;

    for (let i = 0; i < 3; i++) {
        rez = parseInt(pliA[i]) + parseInt(pliB[i]);
        while (rez >= 3) {
            rez = rez - 3;
        }
        newPli += rez.toString();
    }

    return newPli;
}

function InmultirePli(pliA, pliB) {
    let newPli = "";
    let rez = 0;

    for (let i = 0; i < litere.length; i++) {

        if (litere[i].pli === pliA) {
            rez += litere[i].exp;
        }

        if (litere[i].pli === pliB) {
            rez += litere[i].exp;
        }
    }

    while (rez >= 26) {
        rez -= 26;
    }

    for (let i = 0; i < litere.length; i++) {
        if (litere[i].exp === rez) {
            newPli = litere[i].pli;
        }
    }

    return newPli;
}

function PopulareA(limita) {
    for (let i = 0; i < limita; i++) {
        let newPli = "";
        newPli = AdunarePli(termeniA[termeniA.length - 2], termeniA[termeniA.length - 1]);
        termeniA.push(newPli);
    }
}

function PopulareB(limita) {
    for (let i = 0; i < limita; i++) {
        let newPli = "";
        newPli = InmultirePli(termeniB[termeniB.length - 2], termeniB[termeniB.length - 1]);
        termeniB.push(newPli);
    }
}

function ProcesareText() {
    let input;
    let output = "";
    input = document.getElementById("input").value;
    input = input.toUpperCase();

    PopulareA(input.length - 2);
    PopulareB(input.length - 2);

    for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
            output += " ";
        } else {
            let aux = "";
            let pliInput = "";

            for (let z = 0; z < litere.length; z++) {
                if (input[i] === litere[z].lit) {
                    pliInput = litere[z].pli;
                }
            }

            aux += AdunarePli(InmultirePli(termeniA[i], pliInput), termeniB[i]);

            for (let j = 0; j < litere.length; j++) {
                if (litere[j].pli === aux) {
                    output += litere[j].lit;
                }
            }
        }
    }

    let outputHtml = document.getElementById("output");
    outputHtml.innerText = output;
}


// PopulareA(3);
// PopulareB(3);
// console.log(litere);
// console.log(termeniA);
// console.log(termeniB);
// console.log(AdunarePli(litere[0].pli, litere[3].pli));
// console.log(InmultirePli(litere[0].pli, litere[3].pli));