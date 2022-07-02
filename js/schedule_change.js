function checkComboBox(){
	var el1=document.getElementById("singleSelect1");
	var el0=document.getElementById("singleSelect0");
	var divTxt=document.getElementById("change-text");
	var shedule_time_wd=document.getElementById("shedule_time_wd");
	var shedule_time_ch=document.getElementById("shedule_time_ch");
	var shedule_tren_img=document.getElementById("shedule_tren_img");
	var shedule_gr_img=document.getElementById("shedule_gr_img");
	
	el1.onchange=function (){	
			divTxt.innerHTML="Расписание FitHell (Онежский)";
			shedule_time_wd.innerHTML="пн-пт с 8.00 - 23.00";
			shedule_time_ch.innerHTML="сб-вс с 9.00 - 22.00";
			shedule_tren_img.setAttribute('src','../img/price/6.png');
			shedule_gr_img.setAttribute('src','../img/price/3.png');
	}
	el0.onchange=function (){
			divTxt.innerHTML="Расписание FitHell (Высшая лига)";
			shedule_time_wd.innerHTML="пн-пт с 7.00 - 22.00";
			shedule_time_ch.innerHTML="сб-вс с 8.00 - 21.00";
			shedule_tren_img.setAttribute('src','../img/schedule/2.png');
			shedule_gr_img.setAttribute('src','../img/schedule/1.png');
	}
}
checkComboBox();


