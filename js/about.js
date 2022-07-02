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


