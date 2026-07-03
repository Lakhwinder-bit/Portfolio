gsap.registerPlugin(SplitText);

const cur  = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
const reveal = document.querySelector(".page-reveal");
document.addEventListener("DOMContentLoaded",()=>{

const tabs =
document.querySelectorAll(".nav-tab");

const current =
window.location.pathname
.split("/")
.pop() || "index.html";

/* active on load */

tabs.forEach((tab)=>{

if(
tab.getAttribute("href") === current
){

tab.classList.add("active");

}else{

tab.classList.remove("active");

}

});

/* click animation */

tabs.forEach((tab)=>{

tab.addEventListener("click",(e)=>{

e.preventDefault();

tabs.forEach((t)=>
t.classList.remove("active")
);

tab.classList.add("active");

const link =
tab.getAttribute("href");

const rect =
tab.getBoundingClientRect();



gsap.set(reveal,{

left:
rect.left +
rect.width/2,

top:
rect.top +
rect.height/2,

xPercent:-50,
yPercent:-50,

scale:0

});

gsap.to(reveal,{

scale:200,

duration:1,

ease:"expo.inOut",

onComplete(){

window.location.href =
link;

}

});

});

});

});

let mx = 0, my = 0;
let rx = 0, ry = 0;

window.addEventListener('mousemove', function(e) {
  mx = e.clientX;
  my = e.clientY;
});

// RAF loop — dot snaps, ring lerps
function cursorLoop() {
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';

  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';

  requestAnimationFrame(cursorLoop);
}
cursorLoop();

// cursor state on hover
var hoverEls = document.querySelectorAll('a, .btn-touch, .copy-icon, .cta-main, .cta-sec, .nav-tab, .talk-btn');
hoverEls.forEach(function(el) {
  el.addEventListener('mouseenter', function() { document.body.classList.add('on-link'); });
  el.addEventListener('mouseleave', function() { document.body.classList.remove('on-link'); });
});

/* ══════════════════════════════════
   COPY EMAIL
══════════════════════════════════ */
document.getElementById('copyBtn').addEventListener('click', function() {
  navigator.clipboard.writeText('singhlakhiwinder3@gmail.com');
  var btn = document.getElementById('copyBtn');
  btn.textContent = '✓';
  btn.style.color = '#3ddc84';
  setTimeout(function() {
    btn.textContent = '⧉';
    btn.style.color = '';
  }, 1500);
});


/* ══════════════════════════════════
   GSAP INTRO TIMELINE
══════════════════════════════════ */
var tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
const split = SplitText.create(".big-name",{
  type:"chars"
});
const subsplit = SplitText.create(".sub-text",{
  type:"chars"
});
tl.to('.nav-name',   { opacity: 1, duration: 0.7, delay: 0.15 })
  .to('.nav-right',  { opacity: 1, duration: 0.6 }, '-=0.4')

.from(split.chars,{

  opacity:0,

  y:100,

  rotateX:-90,

  stagger:0.03,

  duration:1.2,

  ease:"expo.out"

},"-=0.3")

  .from(subsplit.chars,
    { opacity: 0, y: 100, rotateX:-90,stagger:0.02, duration:0.5, ease:"expo.out"},
    '-=0.4')

  .fromTo('.avail',
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')

  .fromTo('.cta-row',
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')

  .fromTo('.tag',
    { opacity: 0, y: 14, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.4')

  .to('#bottomBar',  { opacity: 1, duration: 0.5 }, '-=0.2')
  .to('#sideLabel',  { opacity: 1, duration: 0.5 }, '-=0.3')
  .to('#wantSec',    { opacity: 1, duration: 0.5 }, '-=0.2');

/* ══════════════════════════════════
   FLOATING TAG BOB ANIMATION
══════════════════════════════════ */
gsap.to('.t1', { y: -8, repeat: -1, yoyo: true, duration: 2.8, ease: 'sine.inOut', delay: 0 });
gsap.to('.t2', { y: -6, repeat: -1, yoyo: true, duration: 3.2, ease: 'sine.inOut', delay: 0.5 });
gsap.to('.t3', { y: -7, repeat: -1, yoyo: true, duration: 3.6, ease: 'sine.inOut', delay: 1 });
gsap.to('.t4', { y: -5, repeat: -1, yoyo: true, duration: 2.6, ease: 'sine.inOut', delay: 0.3 });



/* ══════════════════════════════════
   Project page cards
══════════════════════════════════ */

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".card").forEach((card, index) => {

gsap.to(card, {

scale: 0.82,
y: -80,

rotateX: 10,
rotateZ: -5,

opacity: 0.75,

filter: "blur(5px)",

transformOrigin: "center center",

ease: "none",

scrollTrigger: {
trigger: card,

start: "top 8%",
end: "bottom top",

scrub: 1.5,

}

});

});


let lastScroll = 0;

window.addEventListener("scroll",()=>{
// console.log(window.scrollY);
let current = window.scrollY;

let nav =
document.querySelector(".nav");

if(current > lastScroll){

nav.classList.add("hide");

}else{

nav.classList.remove("hide");

}

lastScroll = current;

});



// ── Nav Dropdown "Get in touch" ──────────────────────────────

const touchBtn =
document.querySelector(".btn-touch");

const touchBox =
document.querySelector(".touch-box");

const touchMenu =
document.querySelector(".touch-menu");

let isOpen = false;

/* initial state */

gsap.set(touchMenu, {
opacity: 0,
y: -20,
scale: 0.95,
display: "none"
});

touchBtn.addEventListener("click",(e)=>{
 console.log()
e.preventDefault();

if(!isOpen){

touchBox.classList.add("active");

gsap.set(touchMenu,{
display:"flex"
});

gsap.to(touchMenu,{

opacity:1,

y:0,

scale:1,

duration:0.45,

ease:"power3.out"

});

}else{

gsap.to(touchMenu,{

opacity:0,

y:-20,

scale:0.95,

duration:0.35,

ease:"power3.in",

onComplete:()=>{

touchBox.classList.remove("active");

gsap.set(touchMenu,{
display:"none"
});

}

});

}

isOpen = !isOpen;

});