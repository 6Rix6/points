const v_point_a = document.querySelectorAll('.v_point_a');
const v_point_b = document.querySelectorAll('.v_point_b');
const v_point_c = document.querySelectorAll('.v_point_c');
const v_point_d = document.querySelectorAll('.v_point_d');
const v_point_e = document.querySelectorAll('.v_point_e');
const v_resultText = document.querySelectorAll('.v_result');
const v_num = document.querySelector('.v_num');
const v_canvas = document.getElementById('v_stage');
// let v_sum_a = [0,0];
// let v_sum_b = [0,0];
// let v_sum_c = [0,0];
// let v_sum_d = [0,0];
// let v_sum_e = [0,0];//[勝ち点,得失点]
            
document.querySelector('.v_submit').addEventListener('click', () => {
    if(v_num.value!=""){
        v_sumupPoints(v_num.value);
        //console.log(v_sum_a,v_sum_b,v_sum_c,v_sum_d,v_sum_e);
        v_makeresult();
        console.log(v_result);
        if (v_chart) {
            v_chart.destroy();
        }
        //setv_resultText();
        v_makeGraph();
    }
});

function v_sumupPoints(v_num) {
    v_sum_a = [0,0];
    v_sum_b = [0,0];
    v_sum_c = [0,0];
    v_sum_d = [0,0];
    v_sum_e = [0,0];
    for(var i = 0; i < 4; ++i){
        if(!v_point_a[i].value=="")v_sum_a[1] += Number(v_point_a[i].value);
        if(!v_point_b[i].value=="")v_sum_b[1] += Number(v_point_b[i].value);
        if(!v_point_c[i].value=="")v_sum_c[1] += Number(v_point_c[i].value);
        if(!v_point_d[i].value=="")v_sum_d[1] += Number(v_point_d[i].value);
        if(!v_point_e[i].value=="")v_sum_e[1] += Number(v_point_e[i].value);
    }
    if(v_num >= 10){
        if(v_point_e[3].value==v_point_b[3].value){
            v_sum_e[0]+=1;
            v_sum_b[0]+=1;
        }else if(v_point_e[3].value > v_point_b[3].value){
            v_sum_e[0]+=3;
        }else{
            v_sum_b[0]+=3;
        }
    }
    if (v_num >= 9){
        if(v_point_c[3].value==v_point_d[3].value){
            v_sum_c[0]+=1;
            v_sum_d[0]+=1;
        }else if(v_point_c[3].value > v_point_d[3].value){
            v_sum_c[0]+=3;
        }else{
            v_sum_d[0]+=3;
        }
    }
    if (v_num >= 8){
        if(v_point_e[2].value==v_point_a[3].value){
            v_sum_e[0]+=1;
            v_sum_a[0]+=1;
        }else if(v_point_e[2].value > v_point_a[3].value){
            v_sum_e[0]+=3;
        }else{
            v_sum_a[0]+=3;
        }
    }
    if (v_num >= 7){
        if(v_point_b[2].value==v_point_c[2].value){
            v_sum_b[0]+=1;
            v_sum_c[0]+=1;
        }else if(v_point_b[2].value > v_point_c[2].value){
            v_sum_b[0]+=3;
        }else{
            v_sum_c[0]+=3;
        }
    }
    if (v_num >= 6){
        if(v_point_d[2].value==v_point_a[2].value){
            v_sum_d[0]+=1;
            v_sum_a[0]+=1;
        }else if(v_point_d[2].value > v_point_a[2].value){
            v_sum_d[0]+=3;
        }else{
            v_sum_a[0]+=3;
        }
    }
    if (v_num >= 5){
        if(v_point_c[1].value==v_point_e[1].value){
            v_sum_c[0]+=1;
            v_sum_e[0]+=1;
        }else if(v_point_c[1].value > v_point_e[1].value){
            v_sum_c[0]+=3;
        }else{
            v_sum_e[0]+=3;
        }
    }
    if (v_num >= 4){
        if(v_point_b[1].value==v_point_a[1].value){
            v_sum_a[0]+=1;
            v_sum_b[0]+=1;
        }else if(v_point_b[1].value > v_point_a[1].value){
            v_sum_b[0]+=3;
        }else{
            v_sum_a[0]+=3;
        }
    }
    if (v_num >= 3){
        if(v_point_d[0].value==v_point_e[1].value){
            v_sum_d[0]+=1;
            v_sum_e[0]+=1;
        }else if(v_point_d[1].value > v_point_e[0].value){
            v_sum_d[0]+=3;
        }else{
            v_sum_e[0]+=3;
        }
    }
    if (v_num >= 2){
        if(v_point_c[0].value==v_point_a[0].value){
            v_sum_c[0]+=1
            v_sum_a[0]+=1;
        }else if(v_point_c[0].value > v_point_a[0].value){
            v_sum_c[0]+=3;
        }else{
            v_sum_a[0]+=3;
        }
    }
    if (v_num >= 1){
        if(v_point_b[0].value==v_point_d[0].value){
            v_sum_b[0]+=1
            v_sum_d[0]+=1;
        }else if(v_point_b[0].value > v_point_d[0].value){
            v_sum_b[0]+=3;
        }else{
            v_sum_d[0]+=3;
        }
    }
}

function v_makeresult(){
    v_result = [
        {
            "クラス":"A",
            "勝ち点":v_sum_a[0],
            "得失点":v_sum_a[1]
        },
        {
            "クラス":"B",
            "勝ち点":v_sum_b[0],
            "得失点":v_sum_b[1]
        },
        {
            "クラス":"C",
            "勝ち点":v_sum_c[0],
            "得失点":v_sum_c[1]
        },
        {
            "クラス":"D",
            "勝ち点":v_sum_d[0],
            "得失点":v_sum_d[1]
        },
        {
            "クラス":"E",
            "勝ち点":v_sum_e[0],
            "得失点":v_sum_e[1]
        },
    ]
    v_result.sort(function(a,b){
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

function setv_resultText(){
    for(var i = 0;i < 5; ++i){
        v_resultText[i].innerHTML = `${i+1}位:${v_result[i]['クラス']}組 勝ち点:${v_result[i]['勝ち点']}点 得失点:${v_result[i]['得失点']}点`
    }
}

function v_makeGraph(){
    var forlabels = [];
    for(var i=0;i<5;++i){
        forlabels[i] = v_result[i]['クラス']+"組 (得失点: "+v_result[i]['得失点']+")"
    }
    var data = {
        labels:[forlabels[0],forlabels[1],forlabels[2],forlabels[3],forlabels[4]],
        datasets: [
            {
                label:'勝ち点',
                hoverBackgroundColor: "#33333342",
                data: [v_result[0]['勝ち点'],v_result[1]['勝ち点'],v_result[2]['勝ち点'],v_result[3]['勝ち点'],v_result[4]['勝ち点']],
            }
        ]
    }
    var options = {
        title: {    
          display: true,
          text: '女バレ 結果表'
        }
      };
    v_chart = new Chart(v_canvas, {
        type: 'bar',
        data: data,
        options: options
    });
}

window.addEventListener('DOMContentLoaded',() =>{
    v_sumupPoints(0);
    v_makeresult();
    v_makeGraph();
});