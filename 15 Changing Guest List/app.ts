let unableToAttend = "IMRAN";
console.log(`${unableToAttend} can't make it to dinner.`);
//Replace the guest
let newGuest = "FAWAD";
Guestname[Guestname.indexOf(unableToAttend)] = newGuest;
//New invitations
Guestname.forEach(Guestname => {
    console.log(`Dear ${Guestname}, would you like to join me for dinner?`);
});
