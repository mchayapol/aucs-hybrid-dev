Template.SubmitProfile.events({
    "click #delete": function(event, template){
        var customer = Session.get("customer");
        if(customer) {
            if(customer._id) {
                Customer.remove(customer._id);
                Session.set("customer", undefined);
                console.log("delete success!");
            }
        }
    }
});
