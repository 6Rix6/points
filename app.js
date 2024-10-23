const sports = document.querySelector('.sports');

sports.addEventListener('change',()=>{
    console.log(sports.value);
    if(sports.value=="バスケ"){
        document.getElementById('soccer').style.display = 'none';
        document.getElementById('basket').style.display = 'flex';
        document.getElementById('volleyball').style.display = 'none';
    }
    if(sports.value=="サッカー"){
        document.getElementById('soccer').style.display = 'flex';
        document.getElementById('basket').style.display = 'none';
        document.getElementById('volleyball').style.display = 'none';
    }
    if(sports.value=="女バレ"){
        document.getElementById('soccer').style.display = 'none';
        document.getElementById('basket').style.display = 'none';
        document.getElementById('volleyball').style.display = 'flex';
    }
    if(sports.value=="すべて"){
        document.getElementById('soccer').style.display = 'flex';
        document.getElementById('basket').style.display = 'flex';
        document.getElementById('volleyball').style.display = 'flex';
    }
});
