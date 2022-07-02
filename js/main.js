const openPopUp=document.getElementById('open_pop_up');
const closePopUp=document.getElementById('pop_up_close');
const popUp=document.getElementById('pop_up');
const openPopUpA=document.getElementById('open_pop_up_a');
const closePopUpA=document.getElementById('pop_up_close_a');
const popUpA=document.getElementById('pop_up_a');
const openPopUpPhone=document.getElementById('open_pop_up_phone');
const closePopUpPhone=document.getElementById('pop_up_phone_close');
const popUpPhone=document.getElementById('pop_up_phone');
const openPopUpReg=document.getElementById('open_pop_up_reg');

openPopUp.addEventListener('click',function(e){
    e.preventDefault();
    popUpA.classList.remove('active');
    popUp.classList.add('active');
})
closePopUp.addEventListener('click',()=>{
    popUp.classList.remove('active');
})
openPopUpA.addEventListener('click',function(e){
    e.preventDefault();
    popUp.classList.remove('active');
    popUpA.classList.add('active');
})
closePopUpA.addEventListener('click',()=>{
    popUpA.classList.remove('active');
})
openPopUpPhone.addEventListener('click',function(e){
    e.preventDefault();
    popUpPhone.classList.add('active');
})
closePopUpPhone.addEventListener('click',()=>{
    popUpPhone.classList.remove('active');
})
openPopUpReg.addEventListener('click',function(e){
    e.preventDefault();
    popUpA.classList.remove('active');
    popUp.classList.add('active');
})

