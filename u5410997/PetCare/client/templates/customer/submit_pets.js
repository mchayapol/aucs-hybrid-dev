/**
 * Created by Natila on 30/9/2558.
 */

 /***
 * Here we insert customer and include pets inside, after login in the future we
 * can lookup by customer id and then check pets already exist or not!
 **/
 function insertCustomer(customer){
   if(customer._id) {
     var update_id = customer._id;
     delete customer._id;
     Customer.update({_id:update_id}, {$set: customer});
   }else {
     Customer.insert(customer);
   }
   console.log(customer);
 }


Template.SubmitDog.events({
   'submit form'       : function (e) {
       e.preventDefault();
       var customer = Session.get('customer');
       if(customer === undefined) {
         customer = {};
       }

        customer.pets ={
          petName      :$(e.target).find('[name =petName]').val(),
          petMonth     : $(e.target).find('[name =petMonth]').val(),
          petYear      : $(e.target).find('[name =petYear]').val(),
          microchipId  : $(e.target).find('[name =microchipId]').val(),
          type         : $(e.target).find('[name =type]').val(),
          gender       : $(e.target).find('#gender :selected').val(),
          spayOrNeuterd: $(e.target).find('#spayOrNeuterd :selected').val(),
          moreInfo     : $(e.target).find('[name =moreInfo]').val()
        };

       Session.set('customer',customer);
       insertCustomer(customer);
       Router.go('/thankyou');
   }
});

Template.SubmitCat.events({
    'submit form'       : function (e) {
        e.preventDefault();
        var customer = Session.get('customer');
        if(customer === undefined) {
          customer = {};
        }

         customer.pets = {
           petName      :$(e.target).find('[name =petName]').val(),
           petMonth     : $(e.target).find('[name =petMonth]').val(),
           petYear      : $(e.target).find('[name =petYear]').val(),
           microchipId  : $(e.target).find('[name =microchipId]').val(),
           type         : $(e.target).find('[name =type]').val(),
           gender       : $(e.target).find('#gender :selected').val(),
           spayOrNeuterd: $(e.target).find('#spayOrNeuterd :selected').val(),
           moreInfo     : $(e.target).find('[name =moreInfo]').val()
         };
        Session.set('customer',customer);
        insertCustomer(customer);
        Router.go('/thankyou');
    }
});

Template.SubmitOthers.events({
    'submit form'       : function (e) {
        e.preventDefault();
        var customer = Session.get('customer');
        if(customer === undefined) {
            customer = {};
        }

         customer.pets ={
           petName      :$(e.target).find('[name =petName]').val(),
           petMonth     : $(e.target).find('[name =petMonth]').val(),
           petYear      : $(e.target).find('[name =petYear]').val(),
           microchipId  : $(e.target).find('[name =microchipId]').val(),
           type         : $(e.target).find('[name =type]').val(),
           gender       : $(e.target).find('#gender :selected').val(),
           spayOrNeuterd: $(e.target).find('#spayOrNeuterd :selected').val(),
           moreInfo     : $(e.target).find('[name =moreInfo]').val()
         };
        Session.set('customer',customer);
        insertCustomer(customer);
        Router.go('/thankyou');
    }
});
