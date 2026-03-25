/* Letterbot — site interactions */
document.addEventListener('DOMContentLoaded',()=>{
  /* burger menu */
  const b=document.getElementById('burger');
  if(b)b.addEventListener('click',()=>{
    document.querySelectorAll('.nav-links,.nav-actions').forEach(el=>el.classList.toggle('open'));
  });
  /* auto-fill dynamic links from config */
  if(window.LB){
    document.querySelectorAll('[data-lb]').forEach(el=>{
      const k=el.getAttribute('data-lb');
      if(LB[k])el.href=LB[k];
    });
    document.querySelectorAll('[data-lb-text]').forEach(el=>{
      const k=el.getAttribute('data-lb-text');
      if(LB[k])el.textContent=LB[k];
    });
  }
});
