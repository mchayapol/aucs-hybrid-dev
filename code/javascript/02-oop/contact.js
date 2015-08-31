function Contact(fname,lname,phone) {
    this.firstname = fname;
    this.lastname = lname;
    this.phone = phone;
    this.fullname = function() {
        return this.firstname+' '+this.lastname;
    }
};


Contact.sayHi = function() {
    console.log("Hi!");
}