const point_a = document.querySelectorAll('.point_a');
const point_b = document.querySelectorAll('.point_b');
const point_c = document.querySelectorAll('.point_c');
const point_d = document.querySelectorAll('.point_d');
const point_e = document.querySelectorAll('.point_e');
const resultText = document.querySelectorAll('.result');
const num = document.querySelector('.num');
const canvas = document.getElementById('stage');
let sum_a = [0,0];
let sum_b = [0,0];
let sum_c = [0,0];
let sum_d = [0,0];
let sum_e = [0,0];//[勝ち点,得失点]
            
document.querySelector('.submit').addEventListener('click', () => {
    if(num.value!=""){
        sumupPoints(num.value);
        //console.log(sum_a,sum_b,sum_c,sum_d,sum_e);
        makeresult();
        console.log(result);
        //setresultText();
        makeGraph();
    }
});

function sumupPoints(num) {
    sum_a = [0,0];
    sum_b = [0,0];
    sum_c = [0,0];
    sum_d = [0,0];
    sum_e = [0,0];
    for(var i = 0; i < 4; ++i){
        if(!point_a[i].value=="")sum_a[1] += Number(point_a[i].value);
        if(!point_b[i].value=="")sum_b[1] += Number(point_b[i].value);
        if(!point_c[i].value=="")sum_c[1] += Number(point_c[i].value);
        if(!point_d[i].value=="")sum_d[1] += Number(point_d[i].value);
        if(!point_e[i].value=="")sum_e[1] += Number(point_e[i].value);
    }
    if(num >= 10){
        if(point_d[3].value==point_e[3].value){
            sum_d[0]+=1;
            sum_e[0]+=1;
        }else if(point_d[3].value > point_e[3].value){
            sum_d[0]+=3;
        }else{
            sum_e[0]+=3;
        }
    }
    if (num >= 9){
        if(point_a[3].value==point_c[3].value){
            sum_a[0]+=1
            sum_c[0]+=1;
        }else if(point_a[3].value > point_c[3].value){
            sum_a[0]+=3;
        }else{
            sum_c[0]+=3;
        }
    }
    if (num >= 8){
        if(point_e[2].value==point_b[3].value){
            sum_e[0]+=1
            sum_b[0]+=1;
        }else if(point_e[2].value > point_b[3].value){
            sum_e[0]+=3;
        }else{
            sum_b[0]+=3;
        }
    }
    if (num >= 7){
        if(point_d[2].value==point_c[2].value){
            sum_d[0]+=1
            sum_c[0]+=1;
        }else if(point_d[2].value > point_c[2].value){
            sum_d[0]+=3;
        }else{
            sum_c[0]+=3;
        }
    }
    if (num >= 6){
        if(point_a[2].value==point_b[2].value){
            sum_a[0]+=1
            sum_b[0]+=1;
        }else if(point_a[2].value > point_b[2].value){
            sum_a[0]+=3;
        }else{
            sum_b[0]+=3;
        }
    }
    if (num >= 5){
        if(point_c[1].value==point_e[1].value){
            sum_c[0]+=1
            sum_e[0]+=1;
        }else if(point_c[1].value > point_e[1].value){
            sum_c[0]+=3;
        }else{
            sum_e[0]+=3;
        }
    }
    if (num >= 4){
        if(point_d[1].value==point_b[1].value){
            sum_d[0]+=1
            sum_b[0]+=1;
        }else if(point_d[1].value > point_b[1].value){
            sum_d[0]+=3;
        }else{
            sum_b[0]+=3;
        }
    }
    if (num >= 3){
        if(point_e[0].value==point_a[1].value){
            sum_a[0]+=1
            sum_e[0]+=1;
        }else if(point_a[1].value > point_e[0].value){
            sum_a[0]+=3;
        }else{
            sum_e[0]+=3;
        }
    }
    if (num >= 2){
        if(point_b[0].value==point_c[0].value){
            sum_b[0]+=1
            sum_c[0]+=1;
        }else if(point_b[0].value > point_c[0].value){
            sum_b[0]+=3;
        }else{
            sum_c[0]+=3;
        }
    }
    if (num >= 1){
        if(point_a[0].value==point_d[0].value){
            sum_a[0]+=1
            sum_d[0]+=1;
        }else if(point_a[0].value > point_d[0].value){
            sum_a[0]+=3;
        }else{
            sum_d[0]+=3;
        }
    }
}

function makeresult(){
    result = [
        {
            "クラス":"A",
            "勝ち点":sum_a[0],
            "得失点":sum_a[1]
        },
        {
            "クラス":"B",
            "勝ち点":sum_b[0],
            "得失点":sum_b[1]
        },
        {
            "クラス":"C",
            "勝ち点":sum_c[0],
            "得失点":sum_c[1]
        },
        {
            "クラス":"D",
            "勝ち点":sum_d[0],
            "得失点":sum_d[1]
        },
        {
            "クラス":"E",
            "勝ち点":sum_e[0],
            "得失点":sum_e[1]
        },
    ]
    result.sort(function(a,b){
        if(a.勝ち点 > b.勝ち点){
            return -1;
        }else if(a.勝ち点 < b.勝ち点){
            return 1;
        }else if(a.得失点 > b.得失点){
            return -1;
        }else if(a.得失点 < b.得失点){
            return 1;
        }
        return 0;
    });
}

function setresultText(){
    for(var i = 0;i < 5; ++i){
        resultText[i].innerHTML = `${i+1}位:${result[i]['クラス']}組 勝ち点:${result[i]['勝ち点']}点 得失点:${result[i]['得失点']}点`
    }
}

function makeGraph(){
    var data = {
        labels:[result[0]['クラス']+"組", result[1]['クラス']+"組", result[2]['クラス']+"組", result[3]['クラス']+"組",result[4]['クラス']+"組"],
        datasets: [
            {
                label:'勝ち点',
                hoverBackgroundColor: "#33333342",
                data: [result[0]['勝ち点'],result[1]['勝ち点'],result[2]['勝ち点'],result[3]['勝ち点'],result[4]['勝ち点']],
            }
        ]
    }
    var options = {
        title: {    
          display: true,
          text: '勝ち点'
        }
      };
    var chart = new Chart(canvas, {

        type: 'bar',  //グラフの種類
        data: data,  //表示するデータ
        options: options  //オプション設定  
    });
}
