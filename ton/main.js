let xearn = document.getElementById('xearn');
let xboost = document.getElementById('xboost');
let xtask = document.getElementById('xtask');
let xassset = document.getElementById('xasset');
let earn = document.getElementById('earn');
let boost = document.getElementById('boost');
let task = document.getElementById('task');
let assset = document.getElementById('asset');
let tap = document.getElementById('tap');
let bal = document.getElementById('bal');
let bbal = document.getElementById('bbal');
let bar = document.getElementById('bar');
let pg = document.getElementById('pg');
let task1 = document.getElementById('task1');
let tkp1 = document.getElementById('tkp1');
let task2 = document.getElementById('task2');
let tkp2 = document.getElementById('tkp2');
let task4 = document.getElementById('task4');
let tkp4 = document.getElementById('tkp4');
let task5 = document.getElementById('task5');
let tkp5 = document.getElementById('tkp5');
let mutitap = document.getElementById('mutitap');
let mutitapugp = document.getElementById('mutitapugp');
let shpt = document.getElementById('shpt');
let demo = document.getElementById('demo');
let text = document.getElementById('text');
let name = document.getElementById('name');
let xname = document.getElementById('xname');
let barp = 100;
let rebal = 0;
let muti = "level 1";
let xtap = 0.0001;

if (document.cookie.includes("name")) {
  name.style.display = "none";
  let v = document.cookie.replace(/name=|;/gi, "");
  xname.innerHTML = v;
}




function ntext() {
 if(text.value !== null){
   document.cookie = "name = " + text.value;
   name.style.display = "none";
   xname.innerHTML = text.value;
 }
}

mutitap.addEventListener('click' , function(){
  rebal = parseFloat(localStorage.getItem("bal"));
  if(rebal >= 5){
    xtap = 0.0002;
    rebal -= 5;
    mutitapugp.innerHTML = "15 TON | 2 level";
    shpt.innerHTML = "+0.0002";
    localStorage.setItem("bal", rebal);
    bal.innerHTML = parseFloat(localStorage.getItem("bal")).toFixed(4);
bbal.innerHTML = parseFloat(localStorage.getItem("bal")).toFixed(4);
muti = localStorage.setItem('mutitap', '15 TON | 2 level');
  }
});

if(localStorage.getItem('mutitap') ===  '15 TON | 2 level'){
mutitapugp.innerHTML = localStorage.getItem('mutitap');
shpt.innerHTML = "+0.0002";
xtap = 0.0002;
}


task1.addEventListener('click', function(){
  if(localStorage.getItem("tsk1") === null){
  rebal = parseFloat(localStorage.getItem("bal"));
window.location = "https://t.me/chinesemovieszonetv";
tkp1.innerHTML = "claimed";
rebal += 0.0005;
localStorage.setItem("bal", rebal);
localStorage.setItem('tsk1', "completed");
}
});

if(localStorage.getItem("tsk1") !== null){
tkp1.innerHTML = "claimed";
}

task2.addEventListener('click', function(){
  if(localStorage.getItem("tsk2") === null){
    rebal = parseFloat(localStorage.getItem("bal"));
window.location = "https://t.me/pixel_wallet_bot?start=7179646431";
tkp2.innerHTML = "claimed";
rebal += 0.0005;
localStorage.setItem("bal", rebal);
localStorage.setItem('tsk2', "completed");
}
});

if(localStorage.getItem("tsk2") !== null){
tkp2.innerHTML = "claimed";
}


task4.addEventListener('click', function(){
  if(localStorage.getItem("tsk4") === null){
  rebal = parseFloat(localStorage.getItem("bal"));
window.location = "https://whatsapp.com/channel/0029Va9H80RBvvsinLprBZ2x";
tkp4.innerHTML = "claimed";
rebal += 0.001;
localStorage.setItem("bal", rebal);
localStorage.setItem('tsk4', "completed");
}
});

if(localStorage.getItem("tsk4") !== null){
tkp4.innerHTML = "claimed";
}


task5.addEventListener('click', function(){
  if(localStorage.getItem("tsk5") === null){
 rebal = parseFloat(localStorage.getItem("bal"));
window.location = "https://t.me/Simple_Tap_Bot?start=1717257376509";
tkp5.innerHTML = "claimed";
rebal += 0.0009;
localStorage.setItem("bal", rebal);
localStorage.setItem('tsk5', "completed");
}
});

if(localStorage.getItem("tsk5") !== null){
tkp5.innerHTML = "claimed";
}


bal.innerHTML = parseFloat(localStorage.getItem("bal")).toFixed(4);
bbal.innerHTML = parseFloat(localStorage.getItem("bal")).toFixed(4);
if(localStorage.getItem("bal") === null){
  bal.innerHTML = rebal.toFixed(4);
  bbal.innerHTML = rebal.toFixed(4);
localStorage.setItem("bal", 0);
}

pg.innerHTML = parseFloat(localStorage.getItem("energy")) + "% / 100%";
bar.style.width = parseFloat(localStorage.getItem("energy")) + "%";
if(localStorage.getItem("energy") === null){
  pg.innerHTML = barp + "% / 100%";
localStorage.setItem("energy", 100);
}


tap.addEventListener('click', function(){
  if(barp > 0){
    rebal = parseFloat(localStorage.getItem("bal"));
    barp = parseFloat(localStorage.getItem("energy"));
  rebal += xtap;
  barp -= 2;
  pg.innerHTML = barp +"% / " + "100%";
  bbal.innerHTML = rebal.toFixed(4);
  bal.innerHTML = rebal.toFixed(4);
  bar.style.width = barp + "%";
  demo.style.display = "block";
  }
  localStorage.setItem("bal", rebal);
  localStorage.setItem("energy", barp);
});

    barp = parseFloat(localStorage.getItem("energy"));

function fill(){
  if(barp < 100){
  barp += 1;
  pg.innerHTML = barp +"% / " + "100%";
  bar.style.width = barp + "%";
  demo.style.display = "block";
  }
}

function fillp(){
  if(barp === 100){
    demo.style.display = "none";
 }
}

setInterval(fillp, 500);
setInterval(fill, 30000);

xearn.addEventListener('click', function(){
  xearn.style.background = "dodgerblue";
  xearn.style.color = "white";
  xboost.style.background = "whitesmoke";
  xboost.style.color = "black";
    xtask.style.background = "whitesmoke";
  xtask.style.color = "black";
    xassset.style.background = "whitesmoke";
  xassset.style.color = "black";
  
  
    earn.style.display = "block";
    boost.style.display = "none";
    task.style.display = "none";
    asset.style.display = "none";
});



xboost.addEventListener('click', function(){
  xboost.style.background = "dodgerblue";
  xboost.style.color = "white";
  xearn.style.background = "whitesmoke";
  xearn.style.color = "black";
    xtask.style.background = "whitesmoke";
  xtask.style.color = "black";
    xassset.style.background = "whitesmoke";
  xassset.style.color = "black";
  
  
    earn.style.display = "none";
    boost.style.display = "block";
    task.style.display = "none";
    asset.style.display = "none";
});


xtask.addEventListener('click', function(){
  xtask.style.background = "dodgerblue";
  xtask.style.color = "white";
  xearn.style.background = "whitesmoke";
  xearn.style.color = "black";
    xboost.style.background = "whitesmoke";
  xboost.style.color = "black";
    xassset.style.background = "whitesmoke";
  xassset.style.color = "black";
  
  
    earn.style.display = "none";
    boost.style.display = "none";
    task.style.display = "block";
    asset.style.display = "none";
});

xassset.addEventListener('click', function(){
  xassset.style.background = "dodgerblue";
  xassset.style.color = "white";
  xearn.style.background = "whitesmoke";
  xearn.style.color = "black";
    xtask.style.background = "whitesmoke";
  xtask.style.color = "black";
    xboost.style.background = "whitesmoke";
  xboost.style.color = "black";
  
  
    earn.style.display = "none";
    boost.style.display = "none";
    task.style.display = "none";
    asset.style.display = "block";
});


