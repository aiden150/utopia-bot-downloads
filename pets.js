const root=document.getElementById('pets');
root.setAttribute('aria-label','Five mystery companion eggs');
const names=['Uto','Pia','Stu','Dio','Qat'];
const messages=['Let me out!','Can you hatch me?','Hey! I’m in here!','Open up, please!','A little help here?'];
for(let i=0;i<names.length;i++){
 const card=document.createElement('div');card.className='pet mystery-pet';
 card.innerHTML=`<button type="button" class="egg-button" aria-label="Tap ${names[i]}’s egg"><span class="mystery-egg" aria-hidden="true"><span>?</span></span></button><span class="egg-speech" role="status" aria-live="polite" aria-atomic="true"></span><span class="pet-name">${names[i]}</span><span class="pet-label">${i===4?'One special secret':'Waiting to hatch'}</span>`;
 const button=card.querySelector('button');const bubble=card.querySelector('.egg-speech');let timer;
 button.addEventListener('click',()=>{
  clearTimeout(timer);
  button.classList.remove('is-shaking');void button.offsetWidth;button.classList.add('is-shaking');
  bubble.textContent=messages[i];card.classList.add('is-speaking');
  timer=setTimeout(()=>{card.classList.remove('is-speaking');bubble.textContent='';button.classList.remove('is-shaking');},2800);
 });
 button.addEventListener('animationend',()=>button.classList.remove('is-shaking'));
 root.append(card);
}
