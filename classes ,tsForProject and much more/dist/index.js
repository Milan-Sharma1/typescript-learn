"use strict";
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
    //the private is only acccesable to the current class not inherited class
    // private _courseCount = 1;
    constructor(email, name) {
        this.email = email;
        this.name = name;
        //if we use protected then we can access it in subclass or inherited class also but not by object
        this._courseCount = 1;
    }
    get userEmail() {
        return this.email;
    }
    get courseCount() {
        return this._courseCount;
    }
    //Imp => in setter we does not have to declare type
    set courseCount(value) {
        this._courseCount = this._courseCount + value;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const milan = new User("m@m.com", "milan");
