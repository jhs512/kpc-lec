import {initializeTts} from '../shared/speech-loader.mjs';
import Prism from '../shared/vendor/prism.mjs';
initializeTts(document.querySelector('#tts-toggle'));
Prism.highlightAll();
for(const button of document.querySelectorAll('.copy-code'))button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(button.closest('.code-wrap').querySelector('code').textContent);button.textContent='복사 완료';}catch{button.textContent='코드를 선택해 복사하세요';}setTimeout(()=>button.textContent='복사',2200);});
const mobile=document.querySelector('.mobile-toc');
mobile?.addEventListener('click',()=>{const open=document.querySelector('.sidebar').classList.toggle('open');mobile.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.sidebar a').forEach(a=>a.addEventListener('click',()=>{if(a.hash){document.querySelector('.sidebar').classList.remove('open');mobile?.setAttribute('aria-expanded','false');}}));
const progress=document.querySelector('.reading-progress i');
if(progress){let pending=false;const update=()=>{const article=document.querySelector('.prose');const start=article.getBoundingClientRect().top+scrollY;const end=start+article.offsetHeight-innerHeight;progress.style.width=`${Math.max(0,Math.min(100,(scrollY-start)/Math.max(1,end-start)*100))}%`;pending=false;};addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update);}},{passive:true});addEventListener('resize',update);update();}
const headings=[...document.querySelectorAll('.prose h2[id], .prose h3[id]')];
if(headings.length){const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){document.querySelectorAll('.sidebar a.active').forEach(a=>a.classList.remove('active'));document.querySelector(`.sidebar a[href="#${e.target.id}"]`)?.classList.add('active');}},{rootMargin:'-90px 0px -65% 0px'});headings.forEach(h=>observer.observe(h));}
const search=document.querySelector('#lesson-search');
search?.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();let shown=0;document.querySelectorAll('.lesson-card').forEach(card=>{card.hidden=!card.textContent.toLowerCase().includes(q);if(!card.hidden)shown++;});document.querySelectorAll('.day-section').forEach(day=>day.hidden=![...day.querySelectorAll('.lesson-card')].some(c=>!c.hidden));document.querySelector('#search-status').textContent=q?`${shown}개 수업을 찾았습니다.`:'';});
