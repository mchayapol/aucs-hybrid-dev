function Contact(fname, lname, phone) {
    this.firstname = fname;
    this.lastname = lname;
    this.phone = phone;
<<<<<<< HEAD
    this.email = 'sample@email.com';
    this.picture = 'inventech.png';
=======
    this.email = '';    // not in param list, not required
    this.picture = '';
>>>>>>> 7ba196852d87405deff024d7b23f0d39ad8ad97f
    this.fullname = function() {
        return this.firstname + ' ' +this.lastname;
    }

    this.sayHello = function(){
    	console.log("Hello!");
    }

    this.sayHello = function () {
        console.log( "Hello"  );
    }
};


Contact.prototype.sayHi = function() {
    console.log("Hi!");
}