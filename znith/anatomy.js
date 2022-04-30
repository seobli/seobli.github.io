function get(id){
	return document.getElementById(id);
}
function grab(cn){
	return document.querySelector(cn);
}
function langRelay(langId){
	if (langId == 1){
		mainChaperone();
		setTimeout("chaperone1()", 2000);
		setTimeout("infoLang1(1)", 4000);
		setTimeout("infoLang2(1)", 11000);
		setTimeout("optLang(1)", 13000);

	}else if(langId == 2){
		mainChaperone();
		setTimeout("chaperone2()", 2000);
		setTimeout("infoLang1(2)", 4000);
		setTimeout("infoLang2(2)", 11000);
		setTimeout("optLang(2)", 13000);
	}
}
function timeIntel(){
	var salutation = new Array('Hello', 'Hujambo');
	var date = new Date();
	var hr = date.getHours();
	if (hr < 12){
		salutation[0] = "Good Morning";
		salutation[1] = "Habari za Asubuhi";
	}else if(hr < 18){
		salutation[0] = "Good Afternoon";
		salutation[1] = "Habari za Mchana";
	}else{
		salutation[0] = "Good Evening";
		salutation[1] = "Habari za Jioni";
	}
	return salutation;
}
function mainChaperone(){
	get('main').style.display = 'none';
	get('body').style.transition = '1s';
	get('body').style.backgroundColor = '#000';
	
}
function chaperone1(){
	glowLoop();
	var s = timeIntel();
	get('sub-lang1-msg-ttl').innerHTML = s[0] + " Human";
}
function infoLang1(organizationID){
	if (organizationID == 1){
		get('sub-lang1-msg').innerHTML = "Welcome to ZNITH WORLD, an experience design agency responsible for the most high-end appreciation of art in ways like you have'nt imagined before. We are makers of any form of art but currently dominating the digital realm in Kenya";
	}else if(organizationID == 2){
		get('sub-lang1-msg').innerHTML = "Karibu ZNITH WORLD, wakala wa ubunifu wa tajriba inayewajibika kwa uthamini wa hali ya juu wa sanaa kwa njia ambazo hukuwazia hapo awali. Sisi ni waundaji wa aina yoyote ya sanaa lakini kwa sasa tunatawala ulimwengu wa sanaa za kidijitali nchini Kenya";
	}
}
function infoLang2(organizationID){
	if (organizationID == 1){
		get('sub-lang1-msg2').innerHTML = "What is it you wish to do here?";
	}else if(organizationID == 2){
		get('sub-lang1-msg2').innerHTML = "Je, ungependa kufanya nini katika jukwaa hili?";
	}
}
function optLang(langID){
	if (langID == 1){
		commonbehaviour(1);
		get('opt1-menu').innerHTML = "I want a design/s";
		get('opt2-menu').innerHTML = "I want to explore";
		get('opt3-menu').innerHTML = "I want to contact";
	}else if(langID == 2){
		commonbehaviour(1);
		get('opt1-menu').innerHTML = "Nataka kubuni";
		get('opt2-menu').innerHTML = "Nataka kuchunguza";
		get('opt3-menu').innerHTML = "Nataka kuwasiliana";
	}
}
function chaperone2(){
	glowLoop();
	var s = timeIntel();
	get('sub-lang1-msg-ttl').innerHTML = s[1] + " ?";
}
function comingsoon(){
	get('body').style.opacity = "0";
	get('body').style.transition = "0.5s";
	setTimeout("transitionscreen()", 2000);

}
function glowLoop(){
	setTimeout("get('sub-lang1-msg-ttl').classList.add('glow'); fallback();", 1500);
}
function fallback(){
	setTimeout("get('sub-lang1-msg-ttl').classList.remove('glow'); glowLoop();", 1500);
}
function commonbehaviour(handleID){
	if (handleID == 1) {
		get('opt-menu').style.display = "block";
		get('opt-menu').style.opacity = "1"
		get('opt-menu').style.transition = "0.5s"
	}
}
function transitionscreen(){
	get('sub-lang').style.display = "none";
	get('opt-menu').style.display = "none";
	get('body').style.background = "url(https://seobli.github.io/commons/ns.gif) no-repeat center center fixed";
	get('body').style.backgroundSize = "cover";
	get('body').style.opacity = "1";
	get('body').style.transition = "0.5s";
	get('ns').style.display = "block";
}
