var app = app || {};

(function () {
    var router = Sammy(function () {
        var selector = '#container',
            navigationSelector = '#menu';

        var requester = app.requester.config('https://baas.kinvey.com/', 'kid_bJDKAsV6Jb', '52aaa1d64f22426896fe3b54e03558a7');

        var userViewBag = app.userViews.load(selector, navigationSelector);
        var calendarViewBag = app.calendarView.load(selector, navigationSelector);

        var userModel = app.userModel.load(requester);
        var calendarModel = app.calendarModel.load(requester);

        var userController = app.userController.load(userModel, userViewBag);
        var calendarController = app.calendarController.load(calendarModel, calendarViewBag);

        this.get('#/', function () {
            userViewBag.showWelcomePage();
        });

        this.get('#/login', function () {
            userController.showLoginPage();
        });

        this.get('#/register', function () {
            userController.showRegisterPage();
        });

        this.get('#/welcomeHome', function () {
            userViewBag.showMyHomePage();
        });

        this.get('#/home', function () {
            userViewBag.showHomePage();
        });

        this.get('#/logout', function () {
            userController.logout();
        });

        this.get('#/calendar', function () {
            calendarController.loadAllLectures();
        });

        // this.get('#/calendar/edit', function(){
        //     calendarViewBag.showEditLecture();
        // });

        this.get('#/calendar/my', function () {
            calendarController.loadMyLectures();
        });

        this.get('#/calendar/edit/:lectureId', function () {
            calendarController.showEditLecture(this.params['lectureId']);
        });

        this.get('#/calendar/delete/:lectureId', function () {
            calendarController.showDeleteLecture(this.params['lectureId']);
        });

        this.get('#/calendar/add', function () {
            calendarViewBag.loadAddLecture();
        });

        this.bind('redirectUrl', function (e, data) {
            this.redirect(data.url);
        });
        //
        this.bind('login', function (e, data) {
            userController.login(data);
        });
        //
        this.bind('register', function (e, data) {
            userController.register(data);
        });

        this.bind('addLecture', function (e, data) {
            calendarController.addLecture(data);
        });

         this.bind('editLecture', function (e,data){
             calendarController.editLecture(data);
         })

        this.bind('deleteLecture', function (e,data){
            calendarController.deleteLecture(data);
        })
    });

    router.run('#/');
}());