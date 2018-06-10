function logCar(car, callback) {
    console.log("widziano samochód %s", car);
    if (cars.length) {
        process.nextTick(function () {
            callback();
        })
    }
}

function logCars(cars) {
    var car = cars.pop();
    logCar(car, function () {
        logCars(cars);
    })
}

var cars = ["Ferrari", "Mercedes", "Łada", "Polonez"];
logCars(cars);