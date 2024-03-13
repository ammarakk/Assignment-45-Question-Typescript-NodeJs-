console.log("Unfortunately, I can only invite two people for dinner.");
while (Guestname.length > 2) {
    var removedGuest = Guestname.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
Guestname.forEach(function (Guestname) {
    console.log("Dear ".concat(Guestname, ", you're still invited to dinner."));
});
Guestname.splice(0, Guestname.length);
console.log(Guestname); // Shows an empty list
