const flight = "Air Asia";

function query(flight, location, destination) {
    const ques = flight + " flight for " + location + " to " + destination + " available or not?";
    return ques;
}

// multiple export 
// you can also rename your exports using the AS keyword!
export { flight, query };