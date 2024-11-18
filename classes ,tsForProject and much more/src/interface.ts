//an interface is basically a set of rule or blueprint which defines the blueprint for objects or classes which is implementing it
//interface is part of typescript not of js
interface camera {
  //here it means that any class or object which use this interface must define these
  cameraMode: string;
  pixels: number;
  //we can only define function defination
  sharma(): void;
  //we can not implement funtion in interface
  //   sharma() : void{
  //     return 9;
  //   }
}

class Mobile implements camera {
  //like here we are defing these in the class which implements this interface
  constructor(public cameraMode: string, public pixels: number) {}
  sharma(): void {
    console.log("hello");
  }
}
