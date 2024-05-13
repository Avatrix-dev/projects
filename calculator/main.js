const calculate = document.getElementById("calculate");
  const result = document.getElementById("result");
  var x = '';
  
  
  function $1(){
    x += '1';
    calculate.innerHTML = x;
  }
  
  function $2(){
    x += '2';
    calculate.innerHTML = x;
  }
  
  function $3(){
    x += '3';
    calculate.innerHTML = x;
  }
  
  function $4(){
    x += '4';
    calculate.innerHTML = x;
  }
  
  function $5(){
    x += '5';
    calculate.innerHTML = x;
  }
  
  function $6(){
    x += '6';
    calculate.innerHTML = x;
  }
  
  function $7(){
    x += '7';
    calculate.innerHTML = x;
  }
  
  function $8(){
    x += '8';
    calculate.innerHTML = x;
  }
  
  function $9(){
    x += '9';
    calculate.innerHTML = x;
  }
  
  function $0(){
    x += '0';
    calculate.innerHTML = x;
  }
  
  function $c(){
    x = '';
    result.innerHTML = 0;
    calculate.innerHTML = x;
  }
  
  function $dv(){
    x += '/';
    calculate.innerHTML = x;
  }
  
  function $mu(){
    x += '*';
    calculate.innerHTML = x;
  }
  
  function $pl(){
    x += '+';
    calculate.innerHTML = x;
  }
  
  function $mi(){
    x += '-';
    calculate.innerHTML = x;
  }
  
  function $dt(){
    if(x === ''){
      x += '0.';
    }
    else{
    x += '.';
    }
    calculate.innerHTML = x;
  }
  
  function $eq(){
    if(x === ''){
      result.innerHTML = 0;
    }
    else {
    result.innerHTML = eval(x);
    }
  }
  
  function $pc(){
    x += '00';
    calculate.innerHTML = x;
  }
  
  function del(){
    x = x.slice(0, -1);
     calculate.innerHTML = x;
  }
  
