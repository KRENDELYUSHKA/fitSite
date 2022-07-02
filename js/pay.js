const openPopUpPhone=document.getElementById('open_pop_up_phone');
const closePopUpPhone=document.getElementById('pop_up_phone_close');
const popUpPhone=document.getElementById('pop_up_phone');


openPopUpPhone.addEventListener('click',function(e){
    e.preventDefault();
    popUpPhone.classList.add('active');
})
closePopUpPhone.addEventListener('click',()=>{
    popUpPhone.classList.remove('active');
})
function checkCombo(){
	var el=document.getElementById("menu");
	var divTxt=document.getElementById("price");
	
	el.onchange=function (){
		if(el.value=="3 месяца (1 месяц заморозки)"){
			divTxt.innerHTML="Итого: 3000";
		}	
        if(el.value=="6 месяцев (1 месяц заморозки)"){
			divTxt.innerHTML="Итого: 4000";
		}
        if(el.value=="9 месяцев (1 месяц заморозки)"){
			divTxt.innerHTML="Итого: 5000";
		}
        if(el.value=="12 месяцев (1 месяц заморозки)"){
			divTxt.innerHTML="Итого: 6000";
		}
        if(el.value=="6 месяцев (без заморозки)"){
			divTxt.innerHTML="Итого: 3500";
		}
        if(el.value=="12 месяцев (без заморозки)"){
			divTxt.innerHTML="Итого: 5500";
		}
	}
}
checkCombo();


