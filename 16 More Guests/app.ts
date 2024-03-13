let Guestname : string [] = [" TAHA AMIR", "IMRAN", "KHURRAM" ];
console.log("Great news! I found a bigger dinner table! "); 
// Adding more guests
Guestname.unshift("FAWAD");
Guestname.splice(Guestname.length / 2, 0, "RAHEEL");
Guestname.push("Asim");

Guestname.forEach(Guestname => {
    console.log(`Dear ${Guestname}, would you like to join me for dinner?`);
});
