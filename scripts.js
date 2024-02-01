function calculatetip (event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let servicequal = document.getElementById('servicequal').value;
    let numOfpeople = document.getElementById('people').value;

    if(bill == ''| servicequal == 0){
        alert("por favor, preencha os valores")
        return;
    }

    if(numOfpeople ==""| numOfpeople <= 1) {
        numOfpeople = 1;
        document.getElementById('each').style.display= 'none';
    } else {
        document.getElementById('each').style.display= 'block';
    }

    let total = (bill * servicequal)/numOfpeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTips').style.display ='block';
}

document.getElementById('totalTips').style.display ='none';
document.getElementById('each').style.display ='none';

document.getElementById('tipsForm').addEventListener('submit', calculatetip);