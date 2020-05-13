// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  // no binding
  // printGuestList: () => {

  // printGuestList: function () {

  // remove the colon to bind 'this' to the function
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
