var app = app || {};

app.calendarModel = (function () {
    function CalendarModel(requester) {
        this._requester = requester;
        this.serviceUrl = requester.baseUrl + 'appdata/' + requester.appId + '/lectures';
    }

    CalendarModel.prototype.getLectureById = function (id) {
        var requestUrl = this._requester.baseUrl + 'appdata/' + this._requester.appId + '/lectures/' + id;
        return this._requester.get(requestUrl, true);
    };

    CalendarModel.prototype.getAllLectures = function(){
        return this._requester.get(this.serviceUrl, true)
    };

    CalendarModel.prototype.getMyLectures = function(){
        var url = this.serviceUrl + '/?query={"_acl.creator":"'+ sessionStorage['userId'] + '"}';
        return this._requester.get(url, true);
    };

    CalendarModel.prototype.uploadLecture= function(data) {
        return this._requester.post(this.serviceUrl,data,true)
    };

    CalendarModel.prototype.editLecture = function(data){
        var url = this.serviceUrl +'/' + data._id;
        return this._requester.put(url,data,true);
    };

    CalendarModel.prototype.deleteLecture = function(data){
        var url = this.serviceUrl +'/' + data._id;
        return this._requester.delete(url,true);
    };

    return {
        load: function (requester) {
            return new CalendarModel(requester);
        }
    }
}());