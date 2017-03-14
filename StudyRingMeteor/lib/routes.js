if(Meteor.isClient){
    Accounts.onLogin(function(){
        FlowRouter.go('dashboard');
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('dashboard');
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/login', {
  name: 'Login',
  action() {
      BlazeLayout.render('Login');
  }
});

FlowRouter.route('/forgotpassword', {
  name: 'ForgotPassword',
  action() {
      BlazeLayout.render('ForgotPassword');
  }
});

FlowRouter.route('/register', {
  name: 'Register',
  action() {
    BlazeLayout.render('Register');
  }
});


FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render('MainLayout', {main:'Dashboard'});
    }
});


FlowRouter.route('/rings', {
    name: 'rings',
    action() {
        BlazeLayout.render('MainLayout', {main:'Rings'});
    }
});

FlowRouter.route('/browse-rings', {
    name: 'browse-rings',
    action() {
        BlazeLayout.render('MainLayout', {main:'BrowseRings'});
    }
});

FlowRouter.route('/rings/:id', {
    name: 'ring-dash',
    action() {
        BlazeLayout.render('MainLayout', {main:'RingDash'});
    }
});

FlowRouter.route('/account', {
    name: 'account-settings',
    action() {
        BlazeLayout.render('MainLayout', {main:'AccountSettings'});
    }
});
