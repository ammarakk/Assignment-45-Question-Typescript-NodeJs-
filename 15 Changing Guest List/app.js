var unableToAttend = "IMRAN";
console.log("".concat(unableToAttend, " can't make it to dinner."));
//Replace the guest
var newGuest = "FAWAD";
Guestname[Guestname.indexOf(unableToAttend)] = newGuest;
//New invitations
Guestname.forEach(function (Guestname) {
    console.log("Dear ".concat(Guestname, ", would you like to join me for dinner?"));
});
