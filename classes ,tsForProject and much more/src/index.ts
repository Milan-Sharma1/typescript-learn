// class User {
//   readonly email: string;
//   private name: string;
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

//produces same code
class User {
  //if we use protected then we can access it in subclass or inherited class also but not by object
  protected _courseCount = 1;
  //the private is only acccesable to the current class not inherited class
  // private _courseCount = 1;
  constructor(public email: string, public name: string) {}

  get userEmail(): string {
    return this.email;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  //Imp => in setter we does not have to declare type
  set courseCount(value) {
    this._courseCount = this._courseCount + value;
  }
}

class subUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const milan = new User("m@m.com", "milan");
