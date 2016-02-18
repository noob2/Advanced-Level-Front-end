var Person = (function () {

    function Person(firstName, lastName) {

        this._firstName = firstName;
        this._lastName = lastName;

        Person.prototype.name = this._firstName + " " + this._lastName;
        Person.prototype.firstName = this._firstName;
        Person.prototype.lastName = this._lastName;
    }

    return Person;
})();

var peter = new Person("Peter", "Jackson");
console.log(peter.name);
console.log(peter.firstName);
console.log(peter.lastName);
