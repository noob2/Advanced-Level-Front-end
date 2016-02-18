var people = [
    {firstname: 'George', lastname: 'Kolev', age: 32, hasSmartphone: false},
    {firstname: 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true},
    {firstname: 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true},
    {firstname: 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false}];

function findYoungestPerson(people) {
    var smallesPersonWithSmartphone = people[0];
    smallesPersonWithSmartphone.age = 200;

    for (var i = 1; i < people.length; i++) {
        if (smallesPersonWithSmartphone.age > people[i].age && people[i].hasSmartphone) {
            smallesPersonWithSmartphone = people[i];
        }
    }

    if (smallesPersonWithSmartphone.hasSmartphone) {
        return "The youngest person is " + smallesPersonWithSmartphone.firstname + " " + smallesPersonWithSmartphone.lastname;
    }
}

var youngestPersonWithSmartphone = findYoungestPerson(people);
console.log(youngestPersonWithSmartphone);