function make_shirt(size: string = "large", message: string = " KARACHI KINGS ") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", " QUETTA GLADIATORS "); // Custom message, small size
