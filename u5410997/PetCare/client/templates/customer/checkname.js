Template.checkname.events ({
  'click .checkname > a' : function(e){
    var userName = $(e.target).parent().find('#userName').val();
    var customer = Customer.findOne({"userName":userName});
    //if userName exists in DB
    if(customer)
    {
      toastr.success("Weclome back !!", "Hi "+  customer.userName + ",", {timeOut: 1000});
    } else
    {
      customer = {};
      customer.userName = userName;
    }
    //move to this line becuase both do set customer to session
    Session.set('customer', customer);
  }
});
