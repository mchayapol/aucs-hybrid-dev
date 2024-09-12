/**
 * Created by Natila on 29/9/2558.
 */
Template.SubmitProfileCont.events({
    'submit form': function (e) {
        e.preventDefault();
        var customer = Session.get("customer");
        if (customer === undefined) {
            customer = {};
        }

        customer.profile.tel1 = $(e.target).find('[name=tel1]').val();
        customer.profile.tel2 = $(e.target).find('[name=tel2]').val();
        customer.profile.tel3 = $(e.target).find('[name=tel3]').val();
        customer.profile.tel4 = $(e.target).find('[name=tel4]').val();
        customer.profile.lineId = $(e.target).find('[name=lineId]').val();
        
        Session.set("customer", customer);
        Router.go('/registerPetsSpecies');
    }
});
