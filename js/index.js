	
	
var 
    names=[
    "Adrian",
    "Addison",
	"Adrian",
	"Aiden",
	"Ainsley",
	"Alby",
	"Alex",
	"Alexis",
	"Ali",
	"Amari",
	"Andy",
	"Angel",
	"Archer",
	"Ari",
	"Arya",
	"Ash",
	"Ashley",
	"Aspen",
	"Aubrey",
	"August",
	"Austen",
	"Avery",
	"Bailey",
	"Bay",
	"Billy",
	"Blaine",
	"Blair",
	"Blake",
	"Bobbie",
	"Brady",
	"Brett",
	"Brook",
	"Brooklyn",
	"Caelan",
	"Cameron",
	"Campbell",
	"Carmen",
	"Carroll",
	"Carson",
	"Casey",
	"Cassidy",
	"Celyn",
	"Charlie",
	"Chris",
	"Clay",
	"Cody",
	"Corey",
	"Dakota",
	"Dale",
	"Dallas",
	"Dana",
	"Dane",
	"Darrel",
	"Daryl",
	"Delta",
	"Devin",
	"Devon",
	"Dorian",
	"Drew",
	"Dylan",
	"Easton",
	"Eddie",
	"Eden",
	"Eli",
	"Ellery",
	"Elliott",
	"Emerson",
	"Emery",
	"Erin",
	"Fabian",
	"Finley",
	"Florian",
	"Flynn",
	"Frances",
	"Francis",
	"Frankie",
	"Gabriel",
	"Glenn",
	"Gray",
	"Hadley",
	"Harley",
	"Harper",
	"Hayden",
	"Hero",
	"Hudson",
	"Hunter",
	"Indiana",
	"Jade",
	"James",
	"Jamie",
	"Jayden",
	"Jean",
	"Jesse",
	"Jessie",
	"Jordan",
	"Jules",
	"Julian",
	"Justice",
	"Kaden",
	"Kadin",
	"Kai",
	"Karter",
	"Keegan",
	"Kelly",
	"Kelsey",
	"Kendall",
	"Kennedy",
	"Kerry",
	"Kyle",
	"Lake",
	"Landry",
	"Lane",
	"Lee",
	"Lincoln",
	"Linden",
	"Logan",
	"London",
	"Lonnie",
	"Lou",
	"Lucian",
	"Lumi",
	"Mackenzie",
	"Madison",
	"Marley",
	"Mason",
	"Max",
	"Maxwell",
	"Micah",
	"Monroe",
	"Montana",
	"Morgan",
	"Moriah",
	"Nevada",
	"Nico",
	"Noel",
	"Oakley",
	"Ode",
	"Ore",
	"Paris",
	"Parker",
	"Pat",
	"Payton",
	"Perry",
	"Peyton",
	"Phoenix",
	"Piper",
	"Quinn",
	"Raphael",
	"Ray",
	"Reagan",
	"Reed",
	"Reese",
	"Remy",
	"Riley",
	"River",
	"Roan",
	"Robin",
	"Rory",
	"Roux",
	"Rowan",
	"Rudy",
	"Ryan",
	"Sage",
	"Sam",
	"Samar",
	"Sawyer",
	"Scout",
	"Sean",
	"Shawn",
	"Sky",
	"Skylar",
	"Spencer",
	"Stevie",
	"Sunny",
	"Sydney",
	"Tanner",
	"Tatum",
	"Taylor",
	"Terry",
	"Toby",
	"Toni",
	"Tory",
	"Tru",
	"Tyler",
	"Umber",
	"Unique",
	"Val",
	"Vesper",
	"Wallace",
	"West",
	"Winter",
	"Wyatt",
	"Wynne",
	"Xen",
	"Xoan",
	"Yael",
	"Zion",
    "Gigi",
    "Johonas",
    "Juwel"
];
var flag=0;
var selector=Math.floor(Math.random() * 101);
var selector2=Math.floor(Math.random() * 101);
$("#first_name").text(names[selector].concat(" ").concat(names[selector2]))
var chooser=Math.floor(Math.random()*1000);
$.getJSON('address.json', function(data){
   
var address=data.addresses[chooser].address1;
var city=data.addresses[chooser].city;
var state=data.addresses[chooser].state;
var postal_code=data.addresses[chooser].postalCode;
$("#address_generate").text(address.concat(","))
$("#city_generate").text(city.concat(","))
$("#state_generate").text(state.concat(","))
$("#postal_code_generate").text(postal_code)


})
$.getJSON('https://randomuser.me/api/?format=json', function(data){

	var radom_mail=data.results[0].email
	var radom_phone=data.results[0].phone
	var radom_mail=data.results[0].email
	$("#radom_mail").text(radom_mail)
	$("#radom_phone").text(radom_phone)
})

function reload()
{
	window.location.href="index.html"
}

function modechanger()
{
	if(flag==0)
	{
	$('body').css('background-color','#343a40')
	$('.bg-lightnew').css('background-color','#343a40')
	$('.card').addClass('bg-dark')
	$('.card').css('color','white')
	$('mode').html('<font color=white>Toggle WhiteMode</font>')
	$('#head_color').css('color','white')
	$('#head_color1').css('color','white')
	$('#head_color2').css('color','white')
	$('#head_color3').css('color','white')
	localStorage.setItem("flag", "1");
	flag=1
}else
{
	$('body').css('background-color','white')
	$('.bg-lightnew').css('background-color','white')
	$('.card').css('color','black')
	$('mode').html('<font color=black>Toggle DarkMode</font>')
	$('.card').removeClass('bg-dark')
	$('#head_color').css('color','black')
	$('#head_color1').css('color','black')
	$('#head_color2').css('color','black')
	$('#head_color3').css('color','black')
	localStorage.setItem("flag", "0");
	flag=0
}
}
var flag_session= localStorage.getItem("flag");

if(flag_session==1)
{
	$('body').css('background-color','#343a40')
	$('.bg-lightnew').css('background-color','#343a40')
	$('.card').addClass('bg-dark')
	$('.card').css('color','white')
	$('mode').html('<font color=white>Toggle WhiteMode</font>')
	$('#head_color').css('color','white')
	$('#head_color1').css('color','white')
	$('#head_color2').css('color','white')
	$('#head_color3').css('color','white')
}


