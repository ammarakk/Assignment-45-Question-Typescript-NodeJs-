var Guestname = [" TAHA AMIR", "IMRAN", "KHURRAM"];
console.log("Great news! I found a bigger dinner table! ");
// Adding more guests
Guestname.unshift("FAWAD");
Guestname.splice(Guestname.length / 2, 0, "RAHEEL");
Guestname.push("Asim");
Guestname.forEach(function (Guestname) {
    console.log("Dear ".concat(Guestname, ", would you like to join me for dinner?"));
});
