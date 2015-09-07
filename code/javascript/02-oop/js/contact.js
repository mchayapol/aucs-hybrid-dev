function Contact(fname,lname,phone) {
    this.firstname = fname;
    this.lastname = lname;
    this.phone = phone;
    this.email = 'sample@email.com';
    this.picture = 'inventech.png';
    this.fullname = function() {
        return this.firstname + ' ' +this.lastname;
    }

    this.sayHello = function(){
    	console.log("Hello!");
    }
};


Contact.prototype.sayHi = function() {
    console.log("Hi!");
}