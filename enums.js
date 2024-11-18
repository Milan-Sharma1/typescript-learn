//restricting that the seatchoice must have only these choices
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice["WINDOW"] = "window";
})(SeatChoice || (SeatChoice = {}));
var msSeat = SeatChoice.AISLE;
console.log(msSeat);
