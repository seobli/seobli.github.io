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
	}else if(langId == 2){
		mainChaperone();
		setTimeout("chaperone2()", 2000);
		setTimeout("infoLang1(2)", 4000);
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
		get('sub-lang1-msg').innerHTML = "My name is ZNITH WORLD, an experience design agency responsible for the most high-end appreciation of art in ways like you have'nt imagined before. We are makers of any form of art but currently dominating the digital realm in Kenya";
	}else if(organizationID == 2){
		get('sub-lang1-msg').innerHTML = "Jina langu ni ZNITH WORLD, wakala wa ubunifu wa tajriba inayewajibika kwa uthamini wa hali ya juu wa sanaa kwa njia ambazo hukuwazia hapo awali. Sisi ni waundaji wa aina yoyote ya sanaa lakini kwa sasa tunatawala ulimwengu wa sanaa za kidijitali nchini Kenya";
	}
}
function chaperone2(){
	glowLoop();
	var s = timeIntel();
	get('sub-lang1-msg-ttl').innerHTML = s[1] + " ?";
}
function glowLoop(){
	setTimeout("get('sub-lang1-msg-ttl').classList.add('glow'); fallback();", 1500);
}
function fallback(){
	setTimeout("get('sub-lang1-msg-ttl').classList.remove('glow'); glowLoop();", 1500);
}
