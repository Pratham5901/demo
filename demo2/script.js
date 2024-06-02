const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button) {
   
    button.addEventListener('click',function(e){
       
        if(e.target.id=== 'blue'){
            body.style.backgroundColor='#4c56af';
        }
        if(e.target.id==='red'){
            body.style.backgroundColor='#ec5113'
            
        }
        if(e.target.id==='green'){
            body.style.backgroundColor='#4CAF50';
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor='#ecdd04';
        }
    });
});
