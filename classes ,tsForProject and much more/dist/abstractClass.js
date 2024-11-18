"use strict";
//abstract class only provide blueprint but obj cannot be made and the class that extends abstract class must implement the blueprint
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    //this make abstract class different from the interface is that we can define and implement function in abstract class but in interface we can only provide the defination for the function not the implentation
    milan() {
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    sharma() {
        console.log("hello");
    }
}
const ms = new Instagram("test", "test");
//we can access the method as features of the abstract class that does not need to be strictly implemented in the inheritated class
ms.sharma();
