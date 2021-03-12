window.onload=function(){
  document.getElementById('form').addEventListener('submit',formValidate)

  //formValidate function
  function formValidate(e){
    const username=document.getElementById('username').value
    const password=document.getElementById('password').value
    const pass=document.querySelector('.passError')
    const error=document.querySelector('.errorBox')
    if(username==='' || password===''){
      error.style.display='block'
      setTimeout(clearDiv,2000)
    }else if(password.length<8){
      pass.style.display='block'
      setTimeout(clearBox,2000)
    }
    function clearBox(){
      pass.style.display='none'
    }
    function clearDiv(){
      error.style.display='none'
    }
    e.preventDefault();
  }
}