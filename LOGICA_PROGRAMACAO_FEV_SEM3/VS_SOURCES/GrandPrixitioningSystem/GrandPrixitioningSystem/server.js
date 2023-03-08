'use strict';
let http = require('http');
let port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
    let driver;
    let driverCar;
    let carNumber;
    let driverData;
    let hour = 0;
    let minute = 0;
    let second = 0;
    let milisecond = 0;
    let day
    let time;
function addNewDriver() {
    driver = prompt("Insert Driver Name");
    car = prompt("Insert Driver Car");
    carNumber = parseInt(prompt("Insert Car Number"));
    driverData = driver + " - " + car + " - #" + carNumber;

}

driver.forEach(addNewDriver());
++driver

function basicPhysics() {
    let frontDownforce;
    let rearDownforce;
    let tireType;
    let bodyDragCoefficient;
    let engineHorsepower;
    let engineTorque;
    let gearRatio;
    let currentSpeed
}
function selectPlannedRoute() {
    let plannedRoute;

}

function selectSavedRoute() {
    let savedRoute;
}
function liveTimingStart() {
    raceFinishRedFlag();
    time = setInterval(() => { timer(); }, 10);

}
function raceFinishRedFlag() {
    clearInterval(timer);
}
function newHeat() {

}

function timer() {
    if ((milisecond += 10) == 1000) {
        milisecond = 0;
        ++second;
    }
    if (second == 60) {
        second = 0;
        ++minute;
    }
        if (minute == 60) {
            minute = 0;
            ++hour;
    }
    if (hour == 24) {
        hour = 0
        ++day;
    }
}