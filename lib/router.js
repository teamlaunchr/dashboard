Router.route('/', function () {
  if(Meteor.user()) {
    this.render('app');
  } else {
    this.redirect('/login');
  }
});

Router.route('/login', function() {
    this.render('login');
});

Router.route('/register', function() {
    this.render('register');
});

Router.route('/forgotpassword', function() {
    this.render('forgotpassword');
});