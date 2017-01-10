
var skey = "";
var tin=setInterval(function(){
    skey = window.name;
    window.name = "";
	if(!!skey){
		document.getElementById('registeInviteCode').value=skey;
        skey = "";
		document.getElementById('registePhone').value='15651693056';
		document.getElementById('registePassword').value='qinyue1018';
		document.getElementById('getCode').click();
		clearInterval(tin)
	}

},50);





var skey2 = "";
var lock = 0;
var keybox = document.getElementsByClassName('code-box')[0];
var tin2 = setInterval(function(){
	if(!lock && !!keybox.innerHTML){
		skey2=keybox.innerHTML;
		lock=1;
		if(!!skey2){
			top.name = skey2;
			skey2 = "";
			clearInterval(tin2)
		}
	}
	
},50);