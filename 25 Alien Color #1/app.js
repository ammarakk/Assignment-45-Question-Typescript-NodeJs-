var alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
console.log("Version that fails (no output):");
alien_color = "red";
if (alien_color == "green") {
    console.log("".concat(alien_color, "\" no earn becuse you choose red\""));
    // No output because the condition is false
}
