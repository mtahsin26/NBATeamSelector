//data.js

////////////////DATA/////////////////

//Creates the levels of data, then uses XML to populate the respective divisions with players

//The first index number given is which select menu level we are in
var startArray = [0, "Choose a Conference", "Eastern", "Western"];

var EasternArray = [1,"Pick an Eastern Division", "Atlantic", "Central", "Southeast"];
	var AtlanticArray = [2, "Choose an Atlantic Division Player"];
	var CentralArray = [2, "Choose a Central Division Player"];
	var SoutheastArray = [2, "Choose a Southeast Division Player"];

var WesternArray = [1, "Pick a Western Division", "Pacific", "Northwest", "Southwest"];
	var PacificArray = [2, "Choose a Pacific Divison Player"];
	var NorthwestArray = [2, "Choose a Northwest Division Player"];
	var SouthwestArray = [2, "Choose a Southwest Division Player"];

//Create the master dataArray object which is referenced by each of the choices selected
//For scalability, the above must be consistent with the way the dataArray is structured
//This is used for the choices in our select menus
var dataArray = new Object();
dataArray.Start = startArray;
dataArray.Eastern = EasternArray;
	dataArray.Atlantic = AtlanticArray;
	dataArray.Central = CentralArray;
	dataArray.Southeast = SoutheastArray;
dataArray.Western = WesternArray;
	dataArray.Pacific = PacificArray;
	dataArray.Northwest = NorthwestArray;
	dataArray.Southwest = SouthwestArray;

//Separate array to hold the player object
var playerData = new Object();

//The array for the current players we added in our lineup 
var playersArray = [];


////////////////////////////////////////////////////


//Get data function that opens an XML file
//then parses the data from the file and stores them in the data arrays when the populate function is called
function getData(){

	if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.open("GET","playerData.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

populate();
}

//Parses in the data from the XML file
//and creates a new player object and adds the player to its respective division
function populate(){
	var choices = xmlDoc.getElementsByTagName('Player');
	//find target node
	for(var i=0, j=choices.length;i<j;i++){
		//console.log(choices[i].getElementsByTagName('Name')[0].childNodes[0].nodeValue);

		//Gets the following player attributes to create a player object that is referenced
		//by the player name in order to access it
		var PlayerName = choices[i].getElementsByTagName('Name')[0].childNodes[0].nodeValue;
		var PlayerTeam = choices[i].getElementsByTagName('Team')[0].childNodes[0].nodeValue;
		var PlayerPosition = choices[i].getElementsByTagName('Position')[0].childNodes[0].nodeValue;
		var PlayerNumber = choices[i].getElementsByTagName('Number')[0].childNodes[0].nodeValue;
		var PlayerHeight = choices[i].getElementsByTagName('Height')[0].childNodes[0].nodeValue;
		var PlayerDivision = choices[i].getElementsByTagName('Division')[0].childNodes[0].nodeValue;

		
		var myPlayer = new Object();
		myPlayer.Name = PlayerName;
		myPlayer.Team = PlayerTeam;
		myPlayer.Position = PlayerPosition;
		myPlayer.pNumber = PlayerNumber;
		myPlayer.Height = PlayerHeight;
		myPlayer.Division = PlayerDivision;

		//Adds the player attributes to the player array which is 
		playerData[PlayerName] = myPlayer;
		
		//Adds the player to its respective division array
		dataArray[PlayerDivision].push(PlayerName);
	}
}
