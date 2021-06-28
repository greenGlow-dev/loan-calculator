// isFinite();// cheklangan son ekanligini aniqlaydi// sonmi uzi yoki boshqa narsaga tekshiradi
// parseFloat(); //  '324234adasdadad'.parseFloat()=324234;
// .toFixed()  123.43.toFixed()=123; 123.43.toFixed(1)=123.4; 
a=0;

document.getElementById('form').addEventListener('submit',calcul);
function calcul(e){
console.log('calculating');
console.log(100);
    // user interface vars
    const Ammount = document.getElementById('loanAmmount');
    const Persent = document.getElementById('persent');
    const Years = document.getElementById('years');
    
    const Month = document.getElementById('Month');
    const TotalP= document.getElementById('Tpayment');
    const Tpersent= document.getElementById('Tpersent');
    


    const Aval = parseFloat(Ammount.value);
    const Pval  = parseFloat(Persent.value)/100/12;
    const Yval = parseFloat(Years.value)*12;


    const x = Math.pow(1+Pval, Yval);
    const monthly = (Pval*x*Aval)/(x-1);

    if (isFinite(monthly)){
        Month.value = monthly.toFixed(2);
        TotalP.value = (12 * monthly).toFixed(2);
        Tpersent.value = (monthly * Yval - Aval).toFixed(2);

        document.getElementById('gif').style.display = 'grid';
        // e.preventDefault()

        setTimeout(gifremove, 2000);

    }else{
        if (a !== 2) { myError() }

    }



    function gifremove() {
        document.getElementById('gif').remove();
        document.getElementById('results').style.display = 'block';
    }

    e.preventDefault();


}




function myError(){

    a=2
     
    var errorDiv = document.createElement('div');
    errorDiv.className='alert alert-danger';

    errorDiv.appendChild(document.createTextNode('Place check your amount'));


    const heading = document.querySelector('.card-title');
    const card = document.getElementById('card');

   card.insertBefore(errorDiv, heading);

   setTimeout(claerError, 3000)


}

function claerError(){
    a=3;
    document.querySelector('.alert').remove();
}






