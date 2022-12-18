class Vehicle{       // baseclass
    constructor() {
        if (this.constructor == Vehicle) {
               throw new Error("This Class can't be instantiated!")
        }
    }

    numberOfTires = 4
    static hasSunRoof = true
    static brakePad = true
    

    fuel () {                        //a method
        console.log("I need fuel")
    }
    brake () {
            console.log("Brake is working fine")
        }

    service() {
        console.log("Car is in need of servicing.")
    }

}



class Car extends Vehicle{    // child class 1
    bodycolor = "White"
}

const camry = new Car()    //object under Car

class Bus extends Vehicle{      //child class 2
    bodyColor = "Red"
}

const danfo = new Bus()     //object under Bus

class Truck extends Vehicle{       //child class 3
    bodyColor = "Green"
}

const cementMixer = new Truck()    //object under Truck

console.log(camry)  // accessing an object

camry.service()    // calling a method (or something like that)
cementMixer.fuel()
danfo.brake()
    
let vehicle = new Vehicle()