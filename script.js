// JavaScript source code
let dictionaryMapA12 = new Map();
let dictionaryMapB12 = new Map();
let dictionaryMapC12 = new Map();
dictionaryMapA12.set("Apple", "Яблуко");
dictionaryMapA12.set("Chair", "Стілець");
dictionaryMapA12.set("Happy", "Веселий");
dictionaryMapA12.set("Friend", "Друг");
dictionaryMapA12.set("Blue", "Синій");
dictionaryMapA12.set("Jump", "Стрибати");
dictionaryMapA12.set("Open", "Відкрити");
dictionaryMapA12.set("Dog", "Собака");
dictionaryMapA12.set("Water", "Вода");
dictionaryMapA12.set("Sleep", "Спати");
dictionaryMapA12.set("Read", "Читати");
dictionaryMapA12.set("Tree", "Дерево");
dictionaryMapA12.set("Fast", "Швидко");
dictionaryMapA12.set("Small", "Малий");
dictionaryMapA12.set("Family", "Родина");
dictionaryMapA12.set("Cloud", "Хмара");

dictionaryMapB12.set("Opportunity", "Можливість");
dictionaryMapB12.set("Accommodation", "Проживання");
dictionaryMapB12.set("Comprehend", "Розуміти");
dictionaryMapB12.set("Essential", "Суттєвий");
dictionaryMapB12.set("Reflect", "Відображати");
dictionaryMapB12.set("Contribute", "Вносити");
dictionaryMapB12.set("Potential", "Потенціальний");
dictionaryMapB12.set("Evaluate", "Оцінювати");
dictionaryMapB12.set("Navigate", "Навігація");
dictionaryMapB12.set("Diversity", "Різноманітність");
dictionaryMapB12.set("Appropriate", "Відповідний");
dictionaryMapB12.set("Persist", "Наполягати");
dictionaryMapB12.set("Convenient", "Зручно");
dictionaryMapB12.set("Significant", "Значний");
dictionaryMapB12.set("Construct", "Будувати");
dictionaryMapB12.set("Convince", "Переконувати");

dictionaryMapC12.set("Ubiquitous", "Повсюдний");
dictionaryMapC12.set("Illuminate", "Освітлювати");
dictionaryMapC12.set("Pragmatic", "Прагматичний");
dictionaryMapC12.set("Innovate", "Оновлювати");
dictionaryMapC12.set("Eloquent", "Красномовний");
dictionaryMapC12.set("Conundrum", "Головоломка");
dictionaryMapC12.set("Meticulous", "Педантичний");
dictionaryMapC12.set("Voracious", "Ненажерливий");
dictionaryMapC12.set("Prolific", "Плідний");
dictionaryMapC12.set("Discern", "Розрізняти");
dictionaryMapC12.set("Alacrity", "Спритність");
dictionaryMapC12.set("Profound", "Глибокий");
dictionaryMapC12.set("Quintessential", "Найважливіший");
dictionaryMapC12.set("Esoteric", "Особливий");
dictionaryMapC12.set("Facetious", "Жартівливий");
dictionaryMapC12.set("Disparate", "Розрізнені");

let enWordsA = [];
let enWordsB = [];
let enWordsC = [];
let index = 0;

dictionaryMapA12.forEach((value, key) => {
    enWordsA[index] = key;
    index++;
});
index = 0;
dictionaryMapB12.forEach((value, key) => {
    enWordsB[index] = key;
    index++;
});
index = 0;
dictionaryMapC12.forEach((value, key) => {
    enWordsC[index] = key;
    index++;
});

let roundCount = 0;
let rightAns = 0;
let wrongAns = 0;
let persentage = 0;
let reserve = [];
let gameStart = false;
let mode;

$("#start").bind('click', start);
$(function () {
    $("#start").hover(intoS, outS);
});

function intoS() {
    $("#start").css({ cursor: "pointer" });
}

function outS() {
    $("#start").css({ cursor: "default" });
}

function start() {
    if ($("input[name='difficulty']:checked").val() == undefined) { }
    else {
        mode = $("input[name='difficulty']:checked").val();
        gameStart = true;
        $("#start").css({ display: "none" });
        $(".action, #input").css({ display: "block" });
        reserve.length = 0;
        roundCount = 0;
        rightAns = 0;
        wrongAns = 0;
        persentage = 0;
        $("#right").text("Right answers: " + rightAns);
        $("#wrong").text("Wrong answers: " + wrongAns);
        $(".roundCount").text(roundCount + "/15");
        if ($("input[name='difficulty']:checked").val() == "A") {
            newWord(enWordsA);
        }
        if ($("input[name='difficulty']:checked").val() == "B") {
            newWord(enWordsB);
        }
        if ($("input[name='difficulty']:checked").val() == "C") {
            newWord(enWordsC);
        }
    }
}

$("#accept").on('click', cont);
$(function () {
    $("#accept").hover(into, out);
});

function into() {
    $("#accept").css({ cursor: "pointer"});
}

function out() {
    $("#accept").css({ cursor: "default" });
}

function cont() {
    if ($("#input").val().trim() != "") {
        if ($("input[name='difficulty']:checked").val() == "A") {
            if ($("#input").val() == dictionaryMapA12.get(reserve[roundCount])) {
                rightAns++;
                $("#right").text("Right answers: " + rightAns);
                $("#windowTest").css({ borderColor: "green" });
                setTimeout(function () {
                    $("#windowTest").css({ borderColor: "rgba(00, 00, 00, 0.4)" });
                }, 1000);
                console.log(dictionaryMapA12.get(reserve[roundCount]));
            }
            else {
                wrongAns++;
                $("#wrong").text("Wrong answers: " + wrongAns);
                $("#windowTest").css({ borderColor: "red" });
                setTimeout(function () {
                    $("#windowTest").css({ borderColor: "rgba(00, 00, 00, 0.4)" });
                }, 1000);
                console.log(dictionaryMapA12.get(reserve[roundCount]));
            }
            newWord(enWordsA);
        }
        else if ($("input[name='difficulty']:checked").val() == "B") {
            if ($("#input").val() == dictionaryMapB12.get(reserve[roundCount])) {
                rightAns++;
                $("#right").text("Right answers: " + rightAns);
                $("#windowTest").css({ borderColor: "green" });
                setTimeout(function () {
                    $("#windowTest").css({ borderColor: "rgba(00, 00, 00, 0.4)" });
                }, 1000);
                console.log(dictionaryMapB12.get(reserve[roundCount]));
            }
            else {
                wrongAns++;
                $("#wrong").text("Wrong answers: " + wrongAns);
                $("#windowTest").css({ borderColor: "red" });
                setTimeout(function () {
                    $("#windowTest").css({ borderColor: "rgba(00, 00, 00, 0.4)" });
                }, 1000);
                console.log(dictionaryMapB12.get(reserve[roundCount]));
            }
            newWord(enWordsB);
        }
        else if ($("input[name='difficulty']:checked").val() == "C") {
            if ($("#input").val() == dictionaryMapC12.get(reserve[roundCount])) {
                rightAns++;
                $("#right").text("Right answers: " + rightAns);
                $("#windowTest").css({ borderColor: "green" });
                setTimeout(function () {
                    $("#windowTest").css({ borderColor: "rgba(00, 00, 00, 0.4)" });
                }, 1000);
                console.log(dictionaryMapC12.get(reserve[roundCount]));
            }
            else {
                wrongAns++;
                $("#wrong").text("Wrong answers: " + wrongAns);
                $("#windowTest").css({ borderColor: "red" });
                setTimeout(function () {
                    $("#windowTest").css({ borderColor: "rgba(00, 00, 00, 0.4)" });
                }, 1000);
                console.log(dictionaryMapC12.get(reserve[roundCount]));
            }
            newWord(enWordsC);
        }
        roundCount++;
        persentage = rightAns / roundCount * 100;
        $(".roundCount").text(roundCount + "/15");
        $("#input").val("");
        if (roundCount >= 15) {
            if (mode == "A") {
                if (persentage >= 50) {
                    $("#windowTest").text("Confirmed A2");
                }
                else if (persentage > 0) {
                    $("#windowTest").text("Confirmed A1");
                }
                else {
                    $("#windowTest").text("-\(*_*)/-");
                }
            }
            else if (mode == "B") {
                if (persentage >= 70) {
                    $("#windowTest").text("Confirmed B2");
                }
                else if (persentage > 0) {
                    $("#windowTest").text("Confirmed B1");
                }
                else {
                    $("#windowTest").text("Try an easier mode");
                }
            }
            else if (mode == "C") {
                if (persentage >= 90) {
                    $("#windowTest").text("Confirmed A2");
                }
                else if (persentage > 0) {
                    $("#windowTest").text("Confirmed A1");
                }
                else {
                    $("#windowTest").text("Try an easier mode");
                }
            }
            $("#start").css({ display: "block" });
            $(".action, #input").css({ display: "none" });
            gameStart = false;
        }
    }
    else { }
}

function newWord(dict) {
    let found = true;
    while (found == true) {
        index = Math.floor(Math.random() * 16);
        found = present(roundCount, dict, index);
    }
    $("#windowTest").text(dict[index]);
    reserve = reserve.concat(dict[index]);
}

function present(words, place, indx) {
    for (let i = 0; i < reserve.length; i++) {
        if (place[indx] == reserve[i]) {
            return true;
        }
    }
    return false;
}

$("#cancel").on('click', clear);
function clear() {
    $("#input").val("");
}

$("#A").on('click', restart);
$("#B").on('click', restart);
$("#C").on('click', restart);
function restart() {
    if (gameStart == true) {
        if (mode == $("input[name='difficulty']:checked").val()) { }
        else {
            $("#start").css({ display: "block" });
            $(".action, #input").css({ display: "none" });
            $(".roundCount").text("0/15");
            $("#windowTest").text("Start new game");
            $("#right").text("Right answers: 0");
            $("#wrong").text("Wrong answers: 0");
            gameStart = false;
        }
    }
}