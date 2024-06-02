const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')
    const type=document.querySelector('#type')

    console.log(`Height: ${height}, Weight: ${weight}`);

    if(height === ''|| height < 0 || isNaN(height) ){
        result.innerHTML=`Please enter valit height ${height}`;
    }
    else if(weight === ''|| weight < 0 || isNaN(weight)){
        result.innerHTML=`Please enter valit height ${weight}`;
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`;
        
        if(bmi<18.6){
            type.innerHTML=`under weight`;
        }
        else if(bmi>18.6 &&bmi<24.9){
            type.innerHTML=`normal weight`;
        }
        else{
            type.innerHTML=`over weight`;
        }
    }

    


})