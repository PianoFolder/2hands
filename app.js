(function(){
var VP='?badge=0&autopause=0&title=0&byline=0&portrait=0';
var LINE='https://lin.ee/Nd6pxlW';
document.title=SONG.title+' — ปลดล็อกเปียโน 2 มือ';
document.body.innerHTML=
'<button class="close" id="close" aria-label="ปิดเต็มจอ">&times;</button>'+
'<div class="wrap">'+
'<p class="lv">เพลงที่ '+SONG.no+' · '+SONG.lv+'</p>'+
'<h1>'+SONG.title+'</h1>'+
'<div class="player" id="box"><iframe id="pl" src="" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>'+
'<div class="cue" id="cue"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#EFEBE2" fill-opacity=".9" fill-rule="evenodd" d="M50 0A50 50 0 1 0 50 100A50 50 0 1 0 50 0Z M39 29L73 50L39 71Z"/></svg></div></div>'+
'<div class="expand"><button id="big">ขยายเต็มจอ</button></div>'+
'<p class="now" id="now"></p>'+
'<p class="hint">กดปุ่มเล่นตรงกลางจอเพื่อเริ่มเรียน</p>'+
'<h2>โน้ตเพลง</h2>'+
'<p class="ask">อยากได้ไฟล์โน้ตไว้เปิดในไอแพด?<br>ถ่ายรูป<b>หน้าตารางไต่ระดับ 5 เพลง</b> ในหนังสือ ส่งมาที่ LINE พร้อมพิมพ์ว่า <b>ขอโน้ต</b> แล้วแอดมินจะส่งไฟล์ให้</p>'+
'<a class="ghost" href="'+LINE+'">ขอไฟล์โน้ตทาง LINE</a>'+
'<h2>คลิปสอน</h2><ol id="eps"></ol>'+
'<a class="hw" href="'+LINE+'">ส่งการบ้านให้ครูตรวจทาง LINE</a>'+
'</div>';
var pl=document.getElementById('pl'),now=document.getElementById('now'),
    eps=document.getElementById('eps'),cue=document.getElementById('cue'),
    box=document.getElementById('box');
function hide(){cue.classList.add('gone');}
window.addEventListener('blur',hide);
box.addEventListener('pointerdown',hide);
pl.addEventListener('load',function(){
  setTimeout(function(){try{new Vimeo.Player(pl).on('play',hide);}catch(e){}},300);
});
SONG.eps.forEach(function(e,i){
  var li=document.createElement('li'),b=document.createElement('button');
  b.innerHTML='<span class="num">'+e.n+'</span><span>'+e.t+'</span>';
  b.onclick=function(){pick(i,true);};
  li.appendChild(b); eps.appendChild(li);
});
function pick(i,click){
  var e=SONG.eps[i];
  pl.src='https://player.vimeo.com/video/'+e.vm+VP;
  cue.classList.remove('gone');
  now.textContent=e.n+' — '+e.t;
  var bs=eps.querySelectorAll('button');
  for(var j=0;j<bs.length;j++) bs[j].setAttribute('aria-current',j===i);
  if(click) box.scrollIntoView({behavior:'smooth',block:'start'});
}
document.getElementById('big').onclick=function(){
  box.classList.add('big'); document.body.classList.add('locked');
};
document.getElementById('close').onclick=function(){
  box.classList.remove('big'); document.body.classList.remove('locked');
};
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){box.classList.remove('big');document.body.classList.remove('locked');}
});
pick(0,false);
})();
