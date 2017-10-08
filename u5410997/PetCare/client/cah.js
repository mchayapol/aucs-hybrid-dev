if (Meteor.isClient) {

    Meteor.startup(function () {
        console.log("cah application started!");
        Session.setDefault('language', 'en');
        Session.setDefault("showLoadingIndicator", true);

        TAPi18n.setLanguage(Session.get('language'))
            .done(fnLanguageCompleted)
            .fail(fnLanguageFail);
    });

    var fnLanguageCompleted = function () {
        Session.set("showLoadingIndicator", false);
        console.log("toggle language = " + Session.get('language'));
    }

    var fnLanguageFail = function (error_message) {
        console.log(error_message);
    }

    var paintLanguageSwitch = function () {
        var defaults = {
            color: '#F5A81C'
            , secondaryColor: '#dfdfdf'
            , jackColor: '#fff'
            , jackSecondaryColor: null
            , className: 'switchery'
            , disabled: false
            , disabledOpacity: 0.5
            , speed: '0.1s'
            , size: 'default'
        }
        var elem = document.querySelector('.lang-switch');
        new Switchery(elem, defaults);
        elem.onchange = function () {
            if (elem.checked) {
                Session.set('language', 'en');
            } else {
                Session.set('language', 'th');
            }
            TAPi18n.setLanguage(Session.get('language'))
                .done(fnLanguageCompleted)
                .fail(fnLanguageFail);
            Router.go('/');
        };
    }



    Template.layout.onRendered(paintLanguageSwitch);
}
