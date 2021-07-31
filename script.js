//Take input
let numAgeInputV = 0
let numEduInputV = 0
let numStateInputV = 0
let numWorkInputV = 0
let sum = 0

// Convert Input String to Number (Age)//
const loadingSubmit = function numAgeInput() {

    const ageInput = document.getElementById("age-input");
    const eduInput = document.getElementById("edu-input");
    const workexpInput = document.getElementById("workexp-input");
    const stateInput = document.getElementById("state-input");



    if (ageInput.value === "10 - 15") {
        numAgeInputV = 20;
    }
    else if (ageInput.value === "16 - 20") {
        numAgeInputV = 30;
    }
    else if (ageInput.value === "21 - 25") {
        numAgeInputV = 35;
    }
    else if (ageInput.value === "26 - 30") {
        numAgeInputV = 40;
    }
    else if (ageInput.value === "31 - 40") {
        numAgeInputV = 30;
    }
    else if (ageInput.value === "41 - 49") {
        numAgeInputV = 15;
    }
    else {
        numAgeInputV = 0;
    }


    // Convert Input to from String to Number (Education) //
    if (eduInput.value === "Graduate") {
        numEduInputV = 20;
    }
    else if (eduInput.value === "Under Graduate") {
        numEduInputV = 15;
    }
    else if (eduInput.value === "School Certificate") {
        numEduInputV = 10;
    }
    else {
        numEduInputV = 5;
    }


    // Convert Input to from String to Number (Work Experience)
    if (workexpInput.value === "Employed") {
        numWorkInputV = 15;
    }
    else if (workexpInput.value === "Unemployed") {
        numWorkInputV = 10;
    }
    else if (workexpInput.value === "Entrepreneur") {
        numWorkInputV = 5;
    }
    else {
        numWorkInputV = 0;
    }


    // Convert Input to from String to Number (Country)
    if (stateInput.value === "Lagos") {
        numStateInputV = 15;
    }
    else if (stateInput.value === "Abuja") {
        numStateInputV = 15;
    }
    else if (stateInput.value === "Other States in Nigeria") {
        numStateInputV = 10;
    }
    else {
        numStateInputV = 15;
    }

    //Calculate Result 
    let sum = numStateInputV + numWorkInputV + numEduInputV + numAgeInputV;

    //Load Image File 
    if (sum >= 80) {

        var myWindow = window.open("", "MsgWindow", "width=400, height=400");
        myWindow.document.write("<img src='result80to100.png'>");
    }

    else if (sum >= 50 && sum <= 79) {
        var myWindow = window.open("", "MsgWindow", "width=400, height=400");
        myWindow.document.write("<img src='result50to79.png'>");
    }

    else if (sum >= 20 && sum <= 49) {
        var myWindow = window.open("", "MsgWindow", "width=400, height=400");
        myWindow.document.write("<img src='result20to49.png'>");
    }

    else {
        var myWindow = window.open("", "MsgWindow", "width=400, height=400");
        myWindow.document.write("<img src='result19below.png'>");
    }
}

