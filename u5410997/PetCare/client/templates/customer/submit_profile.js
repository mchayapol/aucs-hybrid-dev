/**
* Created by Natila on 29/9/2558.
*/

Template.SubmitProfile.helpers({

    "userName": function() { return Session.get('customer').userName;},
    "birthDay": function() { return Session.get('customer').profile.birthDay;},
    "id"      : function() { return Session.get('customer').profile.id;},
    "email"   : function() { return Session.get('customer').profile.email;},
    "address" : function() { return Session.get('customer').profile.address;},
    "isUpdate": function() {
        var customer = Session.get("customer");
        if(customer) {
            return customer._id ? true : false;
        }
        return false;
    }
});

Template.SubmitProfile.events({
    'submit form'   : function (e) {

        var customer = Session.get("customer");
        if (customer === undefined) {
            customer = {};
        }
        customer.profile = {
            name    : $(e.target).find('[name=userName]').val(),
            birthDay: $(e.target).find('[name=birthDay]').val(),
            id      : $(e.target).find('[name=id]').val(),
            email   : $(e.target).find('[name=email]').val(),
            address : $(e.target).find('[name=address]').val()
        };

        if ($(e.target).prop("submit").value == "create") {
            e.preventDefault();
            Session.set("customer", customer);
            Router.go('/registerProfileCont');
        }
        else if ($(e.target).prop("submit").value == "save") {
            if(customer) {
                if(customer._id) {
                    var update_id = customer._id;
                    delete customer._id;
                    Customer.update({_id:update_id}, {$set: customer});
                    console.log("save success!");
                }
            }
            Session.set("customer", undefined);
            Router.go('/save');
            return false;
        }
    }
});
