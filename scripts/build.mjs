import {readFile,writeFile,mkdir,cp} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {Marked} from 'marked';
const base='/kpc-lec/';
const dest=resolve('dist');await mkdir(dest,{recursive:true});
const {lessons,units}=JSON.parse(await readFile('content/course.json','utf8'));
const images=JSON.parse(await readFile('content/images.json','utf8'));
const dates={1:'10월 6일(화)',2:'10월 7일(수)',3:'10월 8일(목)'};
const unitHours=[3,3,2,3,3,2,4];
const unitLessons=[['d1-p01','d1-p02-03'],['d1-p04-05','d1-p06'],['d1-p07-08'],['d2-p01-02','d2-p03'],['d2-p04-05','d2-p06'],['d2-p07-08'],['d3-p01-02','d3-p03-04']];
const routes=new Map([[14880,base],[14891,base+'#schedule'],[14881,base+'setup/']]);
for(const p of lessons)routes.set(p.id,base+'lessons/'+p.slug+'/');
for(const p of units)routes.set(p.id,base+'units/'+p.slug+'/');
routes.set(14889,base+'#units');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const descriptions=['Python을 준비하고 첫 셀을 실행합니다.','이름을 붙이고, 반복하고, 표로 모읍니다.','파일을 읽고 필요한 값과 빈칸을 정리합니다.','웹페이지의 값과 브라우저 동작을 수집합니다.','승객의 특성과 생존율을 함께 읽습니다.','막대·히스토그램·히트맵으로 차이를 봅니다.','그림에서 관찰한 사실을 문장으로 씁니다.','연습 자료와 새 문제를 나누고 표를 준비합니다.','단순한 기준과 세 분류 모델을 비교합니다.','고객의 연체 이력과 부도 예측을 평가합니다.','주가를 읽고 다음 거래일의 정답을 준비합니다.','숫자 예측의 오차와 단순 기준을 비교합니다.'];
function header(){return `<a class="skip" href="#main">본문으로 바로가기</a><header class="topbar"><a class="brand" href="${base}"><span class="brand-mark">KPC</span><span>금융 데이터 분석<small>PYTHON · DATA · MACHINE LEARNING</small></span></a><nav class="toplinks" aria-label="전체 메뉴"><a href="${base}#schedule">3일 수업</a><a href="${base}#units">단원</a><a href="${base}setup/">실습 준비</a><button id="tts-toggle" class="quiet-btn" type="button" aria-pressed="true">읽어주기 켜짐</button></nav></header>`;}
function footer(){return `<footer class="footer"><span>KPC · 머신러닝을 활용한 금융데이터 분석<br>2026년 10월 6~8일 · 20시간</span><span><a href="${base}">수업 안내</a> · <a href="https://github.com/jhs512/kpc-lec">사이트 소스</a></span></footer>`;}
function shell(title,content,reader=false){return `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Python·pandas부터 Titanic, 신용카드 부도, 주가 예측까지 예시와 실습으로 배우는 3일 강의"><meta name="theme-color" content="#245a4a"><title>${esc(title)} · KPC 금융 데이터 분석</title><link rel="stylesheet" href="${base}assets/styles.css"><script type="module" src="${base}assets/reader.mjs"></script></head><body>${header()}${reader?'<div class="reading-progress" aria-hidden="true"><i></i></div>':''}${content}${footer()}</body></html>`;}
async function save(path,content){const target=resolve(dest,path);await mkdir(dirname(target),{recursive:true});await writeFile(target,content);}
function card(p,i){return `<a class="lesson-card" href="${routes.get(p.id)}"><span class="period">${p.label} · ${p.hours}시간</span><h4>${esc(p.title)}</h4><p>${descriptions[i]}</p><span class="card-foot"><span>${p.day}일차 · ${dates[p.day]}</span><span>수업 읽기 ↗</span></span></a>`;}
const catalog=[1,2,3].map(day=>`<section class="day-section" aria-label="${day}일차 수업"><div class="day-title"><b>DAY 0${day}</b><h3>${dates[day]}</h3><small>${day===3?'09:00~13:00 · 4시간':'09:00~18:00 · 8시간'}</small></div><div class="lesson-grid">${lessons.map((p,i)=>p.day===day?card(p,i):'').join('')}</div></section>`).join('');
await save('index.html',shell('수업 안내',`<main id="main" class="container" data-tts-content><section class="hero"><div><span class="eyebrow">3일 · 20시간 · 실습으로 배우는 Python</span><h1>데이터를 읽고,<br>미래를 예측하는<br>장치를 만듭니다.</h1><p class="tts-readable">다만, 안 맞을 수도 있어요.</p><p class="tts-readable">엑셀처럼 익숙한 표에서 시작합니다. 빈칸을 정리하고 그림으로 차이를 살핀 뒤, 새로운 데이터를 예측하는 모델을 만들고 단순한 기준과 비교합니다.</p><div class="hero-actions"><a class="primary" href="${routes.get(lessons[0].id)}">1교시부터 시작 <span>→</span></a><a href="${base}setup/">실습 준비 확인</a></div></div><img src="${base}assets/course.svg" alt="과거 데이터를 넣고 예측하는 프로그램을 만든 뒤 미래 값을 예상합니다. 예상한 값이 실제 값과 얼마나 맞는지 확인합니다." width="580" height="420"></section><div class="meta-strip"><span><strong>기간</strong>2026.10.06~10.08</span><span><strong>장소</strong>한국생산성본부 207호</span><span><strong>수업</strong>8 + 8 + 4시간</span><span><strong>접수</strong>08:30~09:00</span></div><section class="intro-note"><h3>첫 시간은 빈 폴더에서 시작합니다.</h3><p class="tts-readable">Python과 Notebook을 준비하고 직접 코드를 적어 봅니다. 자료 ZIP은 아직 필요하지 않습니다. Titanic을 시작하는 1일차 7교시에 데이터를 받습니다.</p></section><div id="schedule" class="section-head"><div><h2>3일의 수업 순서</h2><p>이어지는 실습은 한 페이지에서 함께 진행합니다.</p></div><div class="catalog-tools"><label for="lesson-search" class="eyebrow">수업 찾기</label><input id="lesson-search" type="search" placeholder="예: 빈칸, Titanic, 주가"></div></div><p id="search-status" role="status" class="empty"></p>${catalog}<section id="units"><div class="section-head"><div><h2>단원으로 찾아보기</h2><p>7개 단원의 학습 내용과 연결된 실습을 확인합니다.</p></div></div><div class="unit-list">${units.map((p,i)=>`<a href="${routes.get(p.id)}"><span>${esc(p.title)}</span><span>${unitHours[i]}시간 →</span></a>`).join('')}</div></section><p class="voice-note tts-readable">본문 옆의 재생 버튼으로 한 문단씩 들을 수 있습니다. 한국어 읽어주기는 기기와 브라우저에 설치된 음성을 사용합니다. 코드와 표는 눈으로 확인하며 실습합니다.</p></main>`));
const built=[];
async function page(p,source,{kind='lesson',index=-1,hours,related=[]}={}){
  let md=await readFile(source,'utf8');
  md=md.replace(/<!-- period-navigation:start -->[\s\S]*?<!-- period-navigation:end -->/g,'');
  md=md.replace(/## (원자료와 이어서 보기|이어서 보기|교시별 이동|원자료)\n[\s\S]*?(?=\n## |$)/g,'');
  md=md.replace(/\(surl:(\d+)(?:#[^)]*)?\)/g,(_,id)=>`(${routes.get(Number(id))||base})`);
  md=md.replaceAll('https://github.com/jhs512/kpc-finance-course/releases/latest/download/kpc-finance.zip',base+'assets/kpc-finance.zip');
  const headings=[];let n=0;
  const renderer={
    heading({tokens,depth}){const text=this.parser.parseInline(tokens);if(depth===1)return '';const id=`section-${++n}`;if(depth===2||depth===3)headings.push({id,text,depth});return `<h${depth} id="${id}" class="tts-readable">${text}</h${depth}>`;},
    paragraph({tokens}){return `<p class="tts-readable">${this.parser.parseInline(tokens)}</p>\n`;},
    code({text,lang}){const language=(lang||'text').split(' ')[0];return `<div class="code-wrap" data-tts-exclude><div class="code-top"><span>${esc(language)}</span><button class="copy-code" type="button" aria-label="${esc(language)} 코드 복사">복사</button></div><pre><code class="language-${esc(language)}">${esc(text)}</code></pre></div>`;},
    image({href,title,text}){const path=images[href];return `<img src="${esc(path?base+path:href)}" alt="${esc(text)}" loading="lazy">`;}
  };
  const marked=new Marked({gfm:true,renderer});
  let body=marked.parse(md).replace(/<table>/g,'<div class="table-scroll" tabindex="0" role="region" aria-label="가로로 넘겨 읽는 실습 표" data-tts-exclude><table>').replace(/<\/table>/g,'</table></div>').replace(/<li>/g,'<li class="tts-readable">');
  const group=kind==='lesson'?`${p.day}일차 · ${dates[p.day]} · ${p.label}`:kind==='unit'?'단원 안내':'시작하기';
  const adjacent=kind==='lesson'?`<nav class="lesson-bottom" aria-label="이전 다음 수업">${index>0?`<a href="${routes.get(lessons[index-1].id)}"><small>← 이전 수업</small>${esc(lessons[index-1].title)}</a>`:`<a href="${base}"><small>← 수업 안내</small>전체 일정</a>`}${index<lessons.length-1?`<a href="${routes.get(lessons[index+1].id)}"><small>다음 수업 →</small>${esc(lessons[index+1].title)}</a>`:`<a href="${base}"><small>수업 마무리 →</small>전체 일정으로</a>`}</nav>`:'';
  if(related.length)body+=`<h2 id="related">이 단원의 실습</h2><div class="unit-list">${related.map(slug=>{const l=lessons.find(x=>x.slug===slug);return `<a href="${routes.get(l.id)}">${l.label} · ${esc(l.title)} →</a>`;}).join('')}</div>`;
  const toc=headings.map(h=>`<li${h.depth===3?' class="toc-sub"':''}><a href="#${h.id}">${h.text}</a></li>`).join('');
  const content=`<button class="mobile-toc" type="button" aria-expanded="false" aria-controls="lesson-toc">이 수업의 목차 ▾</button><div class="reader-shell"><aside id="lesson-toc" class="sidebar" aria-label="수업 목차"><h2>이 페이지에서</h2><nav><ol>${toc}</ol></nav><nav class="course-nav" aria-label="다른 수업">${lessons.map(l=>`<a href="${routes.get(l.id)}"${l.slug===p.slug?' aria-current="page"':''}>${l.day}일차 ${l.label} · ${esc(l.title)}</a>`).join('')}</nav></aside><main id="main" class="reader"><div class="breadcrumb"><a href="${base}">수업 안내</a> / ${group}</div><header class="reader-header"><span class="eyebrow">${group}</span><h1>${esc(p.title)}</h1><div class="sub"><span>${hours?hours+'시간 · ':''}설명과 직접 실습</span><a href="${base}setup/">환경과 조작 안내</a><a href="${base}#schedule">전체 일정</a></div></header><article class="prose" data-tts-content>${body}</article>${adjacent}</main></div>`;
  const route=kind==='lesson'?`lessons/${p.slug}/index.html`:kind==='unit'?`units/${p.slug}/index.html`:'setup/index.html';
  await save(route,shell(p.title,content,true));built.push({id:p.id,route,title:p.title,headings:headings.length});
}
for(const [index,p] of lessons.entries())await page(p,`content/periods/${p.slug}.md`,{index,hours:p.hours});
for(const [index,p] of units.entries())await page(p,`content/${p.slug}.md`,{kind:'unit',hours:unitHours[index],related:unitLessons[index]});
await page({slug:'setup',id:14881,title:'실습 환경과 조작 안내'},'content/getting-started.md',{kind:'setup'});
await cp('assets',resolve(dest,'assets'),{recursive:true});await cp('shared',resolve(dest,'shared'),{recursive:true});
await writeFile(resolve(dest,'.nojekyll'),'');
await writeFile(resolve(dest,'pages.json'),JSON.stringify(built,null,2));
await save('404.html',shell('페이지를 찾을 수 없습니다',`<main id="main" class="container"><div class="hero"><div><h1>수업 안내로 돌아갑니다.</h1><p>주소가 바뀌었거나 페이지를 찾을 수 없습니다.</p><a class="primary" href="${base}">전체 수업 보기 →</a></div></div></main>`));
console.log(`Built course home + ${built.length} student pages. 3 days / 20 hours.`);
