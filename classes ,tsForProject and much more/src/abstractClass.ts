//abstract class only provide blueprint but obj cannot be made and the class that extends abstract class must implement the blueprint
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  //here abstract class shows that this method must be implemented in the class that extends abstract class
  abstract sharma(): void;
  //this make abstract class different from the interface is that we can define and implement function in abstract class but in interface we can only provide the defination for the function not the implentation
  milan(): number {
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }
  sharma(): void {
    console.log("hello");
  }
}

const ms = new Instagram("test", "test");
//we can access the method as features of the abstract class that does not need to be strictly implemented in the inheritated class
ms.sharma();
