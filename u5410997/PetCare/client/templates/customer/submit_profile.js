/**
* Created by Natila on 29/9/2558.
*/

Template.SubmitProfile.helpers({
    "userName": function() {
      var customer = Session.get("customer");
      if(customer) {
        return customer.userName;
      }
    },
    "birthDay": function() {
      var customer = Session.get('customer');
      if (customer && customer.profile) {
        return customer.profile.birthDay;
      }
    },
    "id"      : function() {
      var customer = Session.get('customer');
      if (customer && customer.profile) {
        return customer.profile.id;
      }
    },
    "email"   : function() {
      var customer = Session.get('customer');
      if (customer && customer.profile) {
        return customer.profile.email;
      }
    },
    "address" : function() {
      var customer = Session.get('customer');
      if (customer && customer.profile) {
        return customer.profile.address;
      }
    },
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

        if ($(e.target).prop("submit").value == "Create") {
            e.preventDefault();
            customer.profile = {
                name    : $(e.target).find('[name=userName]').val(),
                birthDay: $(e.target).find('[name=birthDay]').val(),
                id      : $(e.target).find('[name=id]').val(),
                email   : $(e.target).find('[name=email]').val(),
                address : $(e.target).find('[name=address]').val()
            };
            Session.set("customer", customer);
            Router.go('/registerProfileCont');
        }
        else if ($(e.target).prop("submit").value == "Save") {
          e.preventDefault();
          customer.profile = {
              name    : $(e.target).find('[name=userName]').val(),
              birthDay: $(e.target).find('[name=birthDay]').val(),
              id      : $(e.target).find('[name=id]').val(),
              email   : $(e.target).find('[name=email]').val(),
              address : $(e.target).find('[name=address]').val()
          };
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
