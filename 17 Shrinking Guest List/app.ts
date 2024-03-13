console.log("Unfortunately, I can only invite two people for dinner.");

while (Guestname.length > 2) {
    let removedGuest = Guestname.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

Guestname.forEach(Guestname => {
    console.log(`Dear ${Guestname}, you're still invited to dinner.`);
});
Guestname.splice(0, Guestname.length);
console.log(Guestname); // Shows an empty list
