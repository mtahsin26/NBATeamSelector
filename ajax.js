////////////////DATA/////////////////
var startArray = [0, "Choose a Conference", "Eastern", "Western"];

var EasternArray = [1,"Pick an Eastern Division", "Atlantic", "Central", "Southeast"];
	var AtlanticArray = [2, "Choose an Atlantic Division Player"];
	var CentralArray = [2, "Choose a Central Division Player"];
	var SoutheastArray = [2, "Choose a Southeast Division Player"];

var WesternArray = [1, "Pick a Western Division", "Pacific", "Northwest", "Southwest"];
	var PacificArray = [2, "Choose a Pacific Divison Player"];
	var NorthwestArray = [2, "Choose a Northwest Division Player"];
	var SouthwestArray = [2, "Choose a Southwest Division Player"];

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

var playerData = new Object();
var playersArray = [];


////////////////////////////////////////////////////



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

function populate(){
	var choices = xmlDoc.getElementsByTagName('Player');
	//find target node
	for(var i=0, j=choices.length;i<j;i++){
		//console.log(choices[i].getElementsByTagName('Name')[0].childNodes[0].nodeValue);
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

		dataArray[PlayerDivision].push(PlayerName);
		playerData[PlayerName] = myPlayer;
	}
}

function dumpData(){
	console.log(dataArray.Atlantic);
}