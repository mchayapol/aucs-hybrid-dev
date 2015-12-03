Template.SubmitUserId.events( {
  'submit form': function (e) {
    e.preventDefault();
    var customer = Session.get('customer');
    customer.userId = {};
    if(customer != undefined) {
      customer.userId = {
        eid:$(e.target).find('[name=eid]').val(),
        password:$(e.target).find('[name=password]').val(),
        uid:$(e.target).find('[name=uid]').val()
      };
    }
    Session.set('customer', customer);
    Router.go('/');
  }
})
