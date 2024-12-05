console.log(typeof box);
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("clicked");
        if (turn0 === true) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();


    });
});

const disableboxes = () => {
    box.disabled = true;
}

const checkWinner = () => {
    for (let pattern of winpattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                boxes.forEach((box) => {
                    box.disabled = true;
                });
                let winner = pos1Val;
                //console.log("winner", winner);
                showWinner(winner);

            }
        }

    }
}


const showWinner = (winner) => {
    msg.innerText = `CONGRATULATION "${winner}"`;
    msgContainer.classList.remove("hide");
};

const resetBtn = () => {
    // console.log("hi");
    turn0 = true;
    boxes.forEach((box) => {
        enableboxes(box);
        box.innerText = "";
    })
    msgContainer.classList.add("hide");
}
const enableboxes = (box) => {
    box.disabled = false;
}

resetbtn.addEventListener("click", resetBtn);

