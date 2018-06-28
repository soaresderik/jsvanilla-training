class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }


}

class Customer extends Person {
    constructor(firstName, lastName, phonenumber, membership){
        super(firstName, lastName);
        this.phonenumber = phonenumber;
        this.membership = membership;
    }

    static getMemberCost(){
        return 500;
    }

}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john);
console.log(Customer.getMemberCost());