var person = {
  firstname: "Jim",
  lastname: "Morgan",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

for (var prop in person) {
  console.log(prop + ": " + person[prop]);
}
