function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = " KARACHI KINGS "; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", " QUETTA GLADIATORS "); // Custom message, small size
