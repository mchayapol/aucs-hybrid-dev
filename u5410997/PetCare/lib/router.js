Router.configure({
  layoutTemplate:'layout'
});

Router.route('/delete', function (){
    this.render('delete');
    this.layout('layout');
});

Router.route('/save', function (){
    this.render('save');
    this.layout('layout');
});

Router.route('/', function () {
  this.render('checkname');
  this.layout('layout');
});

Router.route('/login', function () {
  this.render('login');
  this.layout('regLayout');
});

Router.route('/registerProfile', function () {
  this.render('registerProfile');
  this.layout('regLayout');
});

Router.route('/registerProfileCont', function () {
  this.render('registerProfileCont');
  this.layout('regLayout');
});

Router.route('/registerPetsSpecies', function () {
  this.render('registerPetsSpecies');
  this.layout('regLayout');
});

Router.route('/registerDog', function () {
  this.render('registerDog');
  this.layout('regLayout');
});

Router.route('/registerCat', function () {
  this.render('registerCat');
  this.layout('regLayout');
});

Router.route('/registerOthers', function () {
  this.render('registerOthers');
  this.layout('regLayout');
});

Router.route('/thankyou', function () {
  this.render('thankyou');
  this.layout('regLayout');
});
