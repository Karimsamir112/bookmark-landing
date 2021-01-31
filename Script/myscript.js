

function showburger() {
	document.querySelector(".nav-show").style.display="block";
}
function close() {
	document.querySelector(".nav-close").style.display="none";
}

function closeburger(){
	
	document.querySelector(".nav-show").style.display="none";
	document.querySelector(".nav-close").style.display="block";
	setTimeout(close , 300);
	
}











// lg and md for desktop 
function showsimple(){
	//show div
	document.querySelector(".easy-sharing").style.display="none";
	document.querySelector(".speedy-searching").style.display="none";
	document.querySelector(".simple-bookmarking").style.display="block";
	document.querySelector(".simple-bookmarking").style.WebkitAnimationPlayState= "running"; 
	
	//color of a
	document.querySelector(".easy-lign").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".speedy-lign").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".simple-lign").style.color="black";
	// lign of a
	document.querySelector(".easy-lign").style.borderBottom="0px solid";
	document.querySelector(".speedy-lign").style.borderBottom="0px solid";
	document.querySelector(".simple-lign").style.borderBottom="4px solid hsl(0, 94%, 66%)";
	

	
}


function showspeedy(){
	//show div
	document.querySelector(".simple-bookmarking").style.display="none";
document.querySelector(".easy-sharing").style.display="none";
	document.querySelector(".speedy-searching").style.display="block";
	document.querySelector(".speedy-searching").style.WebkitAnimationPlayState= "running"; 
	
	//color of a
	document.querySelector(".simple-lign").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".easy-lign").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".speedy-lign").style.color="black";
	// lign of a
	document.querySelector(".simple-lign").style.borderBottom="0px solid";
	document.querySelector(".easy-lign").style.borderBottom="0px solid";
	document.querySelector(".speedy-lign").style.borderBottom="4px solid hsl(0, 94%, 66%)";
	

}

function showeasy(){

//show div
	document.querySelector(".simple-bookmarking").style.display="none";
document.querySelector(".speedy-searching").style.display="none";
	document.querySelector(".easy-sharing").style.display="block";
	document.querySelector(".easy-sharing").style.WebkitAnimationPlayState= "running"; 
	
	//color of a
	document.querySelector(".simple-lign").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".speedy-lign").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".easy-lign").style.color="black";
	// lign of a
	document.querySelector(".simple-lign").style.borderBottom="0px solid";
	document.querySelector(".speedy-lign").style.borderBottom="0px solid";
	document.querySelector(".easy-lign").style.borderBottom="4px solid hsl(0, 94%, 66%)";


}


//sm and xs for mobile

function showsimpleSmXs(){
	//show div
	document.querySelector(".easy-sharing-sm-xs").style.display="none";
	document.querySelector(".speedy-searching-sm-xs").style.display="none";
	document.querySelector(".simple-bookmarking-sm-xs").style.display="block";
	document.querySelector(".simple-bookmarking-sm-xs").style.WebkitAnimationPlayState= "running"; 
	
	//color of a
	document.querySelector(".easy-lign-sm-xs").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".speedy-lign-sm-xs").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".simple-lign-sm-xs").style.color="black";
	// lign of a
	document.querySelector(".easy-lign-sm-xs").style.borderBottom="0px solid";
	document.querySelector(".speedy-lign-sm-xs").style.borderBottom="0px solid";
	document.querySelector(".simple-lign-sm-xs").style.borderBottom="4px solid hsl(0, 94%, 66%)";
	

	
}


function showspeedySmXs(){
	//show div
	document.querySelector(".simple-bookmarking-sm-xs").style.display="none";
document.querySelector(".easy-sharing-sm-xs").style.display="none";
	document.querySelector(".speedy-searching-sm-xs").style.display="block";
	document.querySelector(".speedy-searching-sm-xs").style.WebkitAnimationPlayState= "running"; 
	
	//color of a
	document.querySelector(".simple-lign-sm-xs").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".easy-lign-sm-xs").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".speedy-lign-sm-xs").style.color="black";
	// lign of a
	document.querySelector(".simple-lign-sm-xs").style.borderBottom="0px solid";
	document.querySelector(".easy-lign-sm-xs").style.borderBottom="0px solid";
	document.querySelector(".speedy-lign-sm-xs").style.borderBottom="4px solid hsl(0, 94%, 66%)";
	

}

function showeasySmXs(){

//show div
	document.querySelector(".simple-bookmarking-sm-xs").style.display="none";
document.querySelector(".speedy-searching-sm-xs").style.display="none";
	document.querySelector(".easy-sharing-sm-xs").style.display="block";
	document.querySelector(".easy-sharing-sm-xs").style.WebkitAnimationPlayState= "running"; 
	
	//color of a
	document.querySelector(".simple-lign-sm-xs").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".speedy-lign-sm-xs").style.color="hsl(229, 8%, 60%)";
	document.querySelector(".easy-lign-sm-xs").style.color="black";
	// lign of a
	document.querySelector(".simple-lign-sm-xs").style.borderBottom="0px solid";
	document.querySelector(".speedy-lign-sm-xs").style.borderBottom="0px solid";
	document.querySelector(".easy-lign-sm-xs").style.borderBottom="4px solid hsl(0, 94%, 66%)";
	

}


























// paragraph1



//lg and md and sm for desktop 



function whatHide(){
	
	
	document.querySelector(".what-bookmarking-hide").style.display="none";
	document.querySelector(".how-request-hide").style.display="block";
	document.querySelector(".is-app-hide").style.display="block";
	document.querySelector(".what-about-hide").style.display="block";
	// xs
	document.querySelector(".what-bookmarking-hide-xs").style.display="none";
	document.querySelector(".how-request-hide-xs").style.display="block";
	document.querySelector(".is-app-hide-xs").style.display="block";
	document.querySelector(".what-about-hide-xs").style.display="block";
	
	document.querySelector(".what-bookmarking-show").style.display="block";
	document.querySelector(".how-request-show").style.display="none";
	document.querySelector(".is-app-show").style.display="none";
	document.querySelector(".what-about-show").style.display="none";
	//xs
	document.querySelector(".what-bookmarking-show-xs").style.display="block";
	document.querySelector(".how-request-show-xs").style.display="none";
	document.querySelector(".is-app-show-xs").style.display="none";
	document.querySelector(".what-about-show-xs").style.display="none";
	
	}
	
	
	
	
	


// paragraph 2

function howHide(){
	
	document.querySelector(".what-bookmarking-hide").style.display="block";
	document.querySelector(".how-request-hide").style.display="none";
	document.querySelector(".is-app-hide").style.display="block";
	document.querySelector(".what-about-hide").style.display="block";
	//xs
	document.querySelector(".what-bookmarking-hide-xs").style.display="block";
	document.querySelector(".how-request-hide-xs").style.display="none";
	document.querySelector(".is-app-hide-xs").style.display="block";
	document.querySelector(".what-about-hide-xs").style.display="block";
	
	document.querySelector(".what-bookmarking-show").style.display="none";
	document.querySelector(".how-request-show").style.display="block";
	document.querySelector(".is-app-show").style.display="none";
	document.querySelector(".what-about-show").style.display="none";
	//xs
	document.querySelector(".what-bookmarking-show-xs").style.display="none";
	document.querySelector(".how-request-show-xs").style.display="block";
	document.querySelector(".is-app-show-xs").style.display="none";
	document.querySelector(".what-about-show-xs").style.display="none";
	
	}
	









// paragraph 3

function isHide(){
	
		document.querySelector(".what-bookmarking-hide").style.display="block";
	document.querySelector(".how-request-hide").style.display="block";
	document.querySelector(".is-app-hide").style.display="none";
	document.querySelector(".what-about-hide").style.display="block";
	//xs
	document.querySelector(".what-bookmarking-hide-xs").style.display="block";
	document.querySelector(".how-request-hide-xs").style.display="block";
	document.querySelector(".is-app-hide-xs").style.display="none";
	document.querySelector(".what-about-hide-xs").style.display="block";
	
	document.querySelector(".what-bookmarking-show").style.display="none";
	document.querySelector(".how-request-show").style.display="none";
	document.querySelector(".is-app-show").style.display="block";
	document.querySelector(".what-about-show").style.display="none";
	//xs
	document.querySelector(".what-bookmarking-show-xs").style.display="none";
	document.querySelector(".how-request-show-xs").style.display="none";
	document.querySelector(".is-app-show-xs").style.display="block";
	document.querySelector(".what-about-show-xs").style.display="none";
	}
	



//  paragraph 4

function aboutHide(){
	
	document.querySelector(".what-bookmarking-hide").style.display="block";
	document.querySelector(".how-request-hide").style.display="block";
	document.querySelector(".is-app-hide").style.display="block";
	document.querySelector(".what-about-hide").style.display="none";
	//xs
	document.querySelector(".what-bookmarking-hide-xs").style.display="block";
	document.querySelector(".how-request-hide-xs").style.display="block";
	document.querySelector(".is-app-hide-xs").style.display="block";
	document.querySelector(".what-about-hide-xs").style.display="none";
	
	document.querySelector(".what-bookmarking-show").style.display="none";
	document.querySelector(".how-request-show").style.display="none";
	document.querySelector(".is-app-show").style.display="none";
	document.querySelector(".what-about-show").style.display="block";
	//xs
	document.querySelector(".what-bookmarking-show-xs").style.display="none";
	document.querySelector(".how-request-show-xs").style.display="none";
	document.querySelector(".is-app-show-xs").style.display="none";
	document.querySelector(".what-about-show-xs").style.display="block";
	
	}
	
		
	
	 
		 
		
	
	
	

function showdiv(class1 , class2){
	document.querySelector(class1).style.display="none";
	document.querySelector(class2).style.display="block";
}












	
	
	
	
	
	


//lg and md for desktop 
function checkEmail(){
	
	
	 var text = document.getElementById("input-email").value;
        
       
        var batt;
        
        batt=/^\w+\s?\w{5,20}[@]{1}[gy][ma][ah][io][lo]{1}[.][c][o][m]{1}$/
        var b = batt.test(text);
	
	
	
	
	

	
	if(b){
		
		
		document.querySelector(".check-email").style.backgroundColor="green";
		document.querySelector(".check-email").style.border="1px solid  green";
		document.querySelector(".valid-email").style.display="block";
		document.querySelector(".invalid-email").style.display="none";
		document.getElementById("invalid-image").style.display="none";
		
		
		
		
	}
	
	
	else{
		document.querySelector(".check-email").style.backgroundColor="hsl(0, 94%, 66%)";
		document.querySelector(".check-email").style.border="1px solid  hsl(0, 94%, 66%)";
		document.querySelector(".invalid-email").style.display="block";
		document.getElementById("invalid-image").style.display="block";
		document.querySelector(".valid-email").style.display="none";
		
		
	}
	
}


/* sm and xs for mobile */
function checkEmailSmXs(){
	
	
	 var textt = document.getElementById("input-email-sm-xs").value;
        
       
        var battt;
        
        battt=/^\s?\w+\s?\w{5,20}[@]{1}[gy][ma][ah][io][lo]{1}[.][c][o][m]{1}$/
        var s = battt.test(textt);
	
	
	
	
	

	
	if(s){
		
		
		
		
		document.querySelector(".check-email-sm-xs").style.backgroundColor="green";
		document.querySelector(".check-email-sm-xs").style.border="1px solid  green";
		document.querySelector(".valid-email-sm-xs").style.display="block";
		document.querySelector(".invalid-email-sm-xs").style.display="none";
		document.getElementById("invalid-image-sm-xs").style.display="none";
		
		
		
	}
	
	
	else{
		
		
		document.querySelector(".check-email-sm-xs").style.backgroundColor="hsl(0, 94%, 66%)";
		document.querySelector(".check-email-sm-xs").style.border="1px solid  hsl(0, 94%, 66%)";
		document.querySelector(".invalid-email-sm-xs").style.display="block";
		document.getElementById("invalid-image-sm-xs").style.display="block";
		document.querySelector(".valid-email-sm-xs").style.display="none";
	}
	
}






















