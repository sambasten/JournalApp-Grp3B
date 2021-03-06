function start(){
	function _(id) {
		return document.getElementById(id);
	}
	/* a data class that stores main data
	*intansiated with data {array}
	*/
	function Data(){
		this.data = [];
		/*
		*this method adds data to the data array
		*/
		this.addData = function (obj) {
			this.data.push(obj);
		}
		/*
		* this method gets the data given the index
		* of the value needed
		*/
		this.getData = function (value) {
			return this.data[value];
		}
		/* 
		* this method gets all data in data
		*/
		this.getAllData = function () {
			return this.data;
		}
		/*
		* this method gets the last data inputted
		*/
		this.getLastData = function () {
			return this.data[this.data.length -1];
		}

	}


	/*
	* Journal class instantiated with parameters
	* user{string} , date and activities{log}
	*and a jornal obj to store inputs
	*/
	function Journal(user, date, activities) {
		this.journals = {};//journal object 
		this.data = [];
		this.user = user;
		this.date = date;
		this.activities = activities;
		
		//this method to save parameters in journal object
		this.saveInObj = function () {
			this.journals.user = this.user;
			this.journals.date = this.date;
			this.journals.activities = this.activities;
			return this.journals;
		}

		
	}
     //create instance of Data getjournals
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
	_("ListOfJournals").style.display = "none";
	_("lastEntry").style.display = "none";
	_("currentJournal").style.display = "block";
	getJournals.addData(dummy);
	document.getElementById("display").innerHTML = "Name: "+getJournals.getLastData()['user']+"<br>";
	document.getElementById("display-activites").innerHTML = "Journal: "+getJournals.getLastData()['activities'];
	_("name").value = "";
	_('log').value = "";

	_("viewAllLists").addEventListener("click", function (event) {
		event.preventDefault();
		_("form").style.display = "none";
		_("currentJournal").style.display = "none";
		_("lastEntry").style.display = "none";
		_("ListOfJournals").style.display = "block";
		var allJournals = getJournals.getAllData();
		_("ListJournals").innerHTML = "";
		for (var i = 0; i < allJournals.length; i++) {
			_("ListJournals").innerHTML += "Name: "+allJournals[i].user+"<br>Journal: "+allJournals[i].activities+"<br><br>";
		}
		
	});
	_("viewForm").addEventListener("click", function(event) {
		_("currentJournal").style.display = "none";
		_("ListOfJournals").style.display = "none";
		_("lastEntry").style.display = "none";
		_("form").style.display = "block";
	});
	_("viewLastJournal").addEventListener("click", function(event) {
		event.preventDefault();
		_("currentJournal").style.display = "none";
		_("ListOfJournals").style.display = "none";
		_("form").style.display = "none";
		_("lastEntry").style.display = "block";
		_("lastJournal").innerHTML = "Name: "+getJournals.getLastData()['user']+"<br>Journal: "+getJournals.getLastData()['activities'];
		// _("display-activites").innerHTML = "Journal: "+getJournals.getLastData()['activities'];
	})

}, false);
}
window.addEventListener('load',start,false);