


// function _(id) {
// 	return document.getElementById(id);
// }
// var user = _('name').value;
// var day = _('day').value;
// var activities = _('log').value;
// function getFormData(event) {
// 	event.preventDefault();
// 	if (user === "" || date === "" || activities === "") {
// 		alert("No fields should be empty");
// 		// return;
// 	}
// 	alert("ok");
// 	_("form").style.display = "none";
	
// 	// var dummy = new Journal(user, date, activities);
// 	// dummy.saveInObj();
// }

function displayInfo() {

}


function start(){
	function _(id) {
	return document.getElementById(id);
}
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
function Journal(user, date, activities) {
	this.journals = {};
	this.data = [];
	this.user = user;
	this.date = date;
	this.activities = activities;
	
	this.saveInObj = function () {
		this.journals.user = this.user;
		this.journals.date = this.date;
		this.journals.activities = this.activities;
		return this.journals;
	}

	
}
	var getJournals = new Data();
	document.getElementById('submit').addEventListener('click', function () {
		var user = _("name").value;
		var day = _('day').value;
		var activities = _('log').value;
		event.preventDefault();
		if (user === "" || day === "" || activities === "") {
			alert("No fields should be empty");
			return;
		}
		var dummy = new Journal(user, day, activities);
		dummy.saveInObj();
		_("form").style.display = "none";
		getJournals.addData(dummy);
		document.getElementById("display").innerHTML = "Name: "+getJournals.getLastData()['user']+"<br>";
		document.getElementById("display-activites").innerHTML = "Journal: "+getJournals.getLastData()['activities'];
}, false);
}
window.addEventListener('load',start,false);