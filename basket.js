const b_point_a = document.querySelectorAll('.b_point_a');
const b_point_b = document.querySelectorAll('.b_point_b');
const b_point_c = document.querySelectorAll('.b_point_c');
const b_point_d = document.querySelectorAll('.b_point_d');
const b_point_e = document.querySelectorAll('.b_point_e');
const b_resultText = document.querySelectorAll('.b_result');
const b_num = document.querySelector('.b_num');
const b_canvas = document.getElementById('b_stage');
// let b_sum_a = [0,0];
// let b_sum_b = [0,0];
// let b_sum_c = [0,0];
// let b_sum_d = [0,0];
// let b_sum_e = [0,0];//[勝ち点,得失点]
            
document.querySelector('.b_submit').addEventListener('click', () => {
    if(b_num.value!=""){
        b_sumupPoints(b_num.value);
        //console.log(b_sum_a,b_sum_b,b_sum_c,b_sum_d,b_sum_e);
        b_makeresult();
        console.log(b_result);
        if (b_chart) {
            b_chart.destroy();
        }
        //setb_resultText();
        b_makeGraph();
    }
});

function b_sumupPoints(b_num) {
    b_sum_a = [0,0];
    b_sum_b = [0,0];
    b_sum_c = [0,0];
    b_sum_d = [0,0];
    b_sum_e = [0,0];
    for(var i = 0; i < 4; ++i){
        if(!b_point_a[i].value=="")b_sum_a[1] += Number(b_point_a[i].value);
        if(!b_point_b[i].value=="")b_sum_b[1] += Number(b_point_b[i].value);
        if(!b_point_c[i].value=="")b_sum_c[1] += Number(b_point_c[i].value);
        if(!b_point_d[i].value=="")b_sum_d[1] += Number(b_point_d[i].value);
        if(!b_point_e[i].value=="")b_sum_e[1] += Number(b_point_e[i].value);
    }
    if(b_num >= 10){
        if(b_point_c[3].value==b_point_d[3].value){
            b_sum_c[0]+=1;
            b_sum_d[0]+=1;
        }else if(b_point_c[3].value > b_point_d[3].value){
            b_sum_c[0]+=3;
        }else{
            b_sum_d[0]+=3;
        }
    }
    if (b_num >= 9){
        if(b_point_a[3].value==b_point_b[3].value){
            b_sum_a[0]+=1;
            b_sum_b[0]+=1;
        }else if(b_point_a[3].value > b_point_b[3].value){
            b_sum_a[0]+=3;
        }else{
            b_sum_b[0]+=3;
        }
    }
    if (b_num >= 8){
        if(b_point_e[2].value==b_point_d[3].value){
            b_sum_e[0]+=1;
            b_sum_d[0]+=1;
        }else if(b_point_e[2].value > b_point_d[3].value){
            b_sum_e[0]+=3;
        }else{
            b_sum_d[0]+=3;
        }
    }
    if (b_num >= 7){
        if(b_point_a[2].value==b_point_c[2].value){
            b_sum_a[0]+=1;
            b_sum_c[0]+=1;
        }else if(b_point_a[2].value > b_point_c[2].value){
            b_sum_a[0]+=3;
        }else{
            b_sum_c[0]+=3;
        }
    }
    if (b_num >= 6){
        if(b_point_e[2].value==b_point_b[2].value){
            b_sum_e[0]+=1;
            b_sum_b[0]+=1;
        }else if(b_point_e[2].value > b_point_b[2].value){
            b_sum_e[0]+=3;
        }else{
            b_sum_b[0]+=3;
        }
    }
    if (b_num >= 5){
        if(b_point_a[1].value==b_point_d[1].value){
            b_sum_a[0]+=1;
            b_sum_d[0]+=1;
        }else if(b_point_a[1].value > b_point_d[1].value){
            b_sum_a[0]+=3;
        }else{
            b_sum_d[0]+=3;
        }
    }
    if (b_num >= 4){
        if(b_point_e[1].value==b_point_c[1].value){
            b_sum_c[0]+=1;
            b_sum_e[0]+=1;
        }else if(b_point_c[1].value > b_point_e[1].value){
            b_sum_c[0]+=3;
        }else{
            b_sum_e[0]+=3;
        }
    }
    if (b_num >= 3){
        if(b_point_d[0].value==b_point_b[1].value){
            b_sum_d[0]+=1;
            b_sum_b[0]+=1;
        }else if(b_point_d[1].value > b_point_b[0].value){
            b_sum_d[0]+=3;
        }else{
            b_sum_b[0]+=3;
        }
    }
    if (b_num >= 2){
        if(b_point_e[0].value==b_point_a[0].value){
            b_sum_e[0]+=1
            b_sum_a[0]+=1;
        }else if(b_point_e[0].value > b_point_a[0].value){
            b_sum_e[0]+=3;
        }else{
            b_sum_a[0]+=3;
        }
    }
    if (b_num >= 1){
        if(b_point_b[0].value==b_point_c[0].value){
            b_sum_b[0]+=1
            b_sum_c[0]+=1;
        }else if(b_point_b[0].value > b_point_c[0].value){
            b_sum_b[0]+=3;
        }else{
            b_sum_c[0]+=3;
        }
    }
}

function b_makeresult(){
    b_result = [
        {
            "クラス":"A",
            "勝ち点":b_sum_a[0],
            "得失点":b_sum_a[1]
        },
        {
            "クラス":"B",
            "勝ち点":b_sum_b[0],
            "得失点":b_sum_b[1]
        },
        {
            "クラス":"C",
            "勝ち点":b_sum_c[0],
            "得失点":b_sum_c[1]
        },
        {
            "クラス":"D",
            "勝ち点":b_sum_d[0],
            "得失点":b_sum_d[1]
        },
        {
            "クラス":"E",
            "勝ち点":b_sum_e[0],
            "得失点":b_sum_e[1]
        },
    ]
    b_result.sort(function(a,b){
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

function setb_resultText(){
    for(var i = 0;i < 5; ++i){
        b_resultText[i].innerHTML = `${i+1}位:${b_result[i]['クラス']}組 勝ち点:${b_result[i]['勝ち点']}点 得失点:${b_result[i]['得失点']}点`
    }
}

function b_makeGraph(){
    var forlabels = [];
    for(var i=0;i<5;++i){
        forlabels[i] = b_result[i]['クラス']+"組 (得失点: "+b_result[i]['得失点']+")"
    }
    var data = {
        labels:[forlabels[0],forlabels[1],forlabels[2],forlabels[3],forlabels[4]],
        datasets: [
            {
                label:'勝ち点',
                hoverBackgroundColor: "#33333342",
                data: [b_result[0]['勝ち点'],b_result[1]['勝ち点'],b_result[2]['勝ち点'],b_result[3]['勝ち点'],b_result[4]['勝ち点']],
            }
        ]
    }
    var options = {
        title: {    
          display: true,
          text: 'バスケ 結果表'
        }
      };
    b_chart = new Chart(b_canvas, {
        type: 'bar',  //グラフの種類
        data: data,  //表示するデータ
        options: options  //オプション設定  
    });
}

window.addEventListener('DOMContentLoaded',() =>{
    b_sumupPoints(0);
    b_makeresult();
    b_makeGraph();
});