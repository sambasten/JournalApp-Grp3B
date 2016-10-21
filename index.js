function Data(){
	this.data = [];
	this.addData = function (obj) {
		this.data.push(obj);
	}
	this.getData = function (value) {
		return this.data[value];
	}
	this.getAllData = function () {
		return this.data;
	}
	this.getLastData = function () {
		return this.data[this.data.length -1];
	}

}
function Journal(user, gender, date, activities) {
	this.journals = {};
	this.data = [];
	this.user = user;
	this.gender = gender;
	this.date = date;
	this.activities = activities;
	
	this.saveInObj = function () {
		this.journals.user = this.user;
		this.journals.gender = this.gender;
		this.journals.date = this.date;
		this.journals.activities = this.activities;
		return this.journals;
	}

	
}
var getJournals = new Data();
var dummy1 = new Journal("jorg", "M", "34", "I am a boy");
var dummy2 = new Journal("are", "F", "23", "I am a girl");
dummy1.saveInObj();
dummy2.saveInObj();
getJournals.addData(dummy1.saveInObj());
getJournals.addData(dummy2.saveInObj());
console.log(getJournals.getLastData());