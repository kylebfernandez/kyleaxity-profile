(()=>{
 const box=document.querySelector('#visit-counter'),number=document.querySelector('#visit-count');
 if(!box||!number)return;
 const key='kyleaxityprofile_vercel_app_visits_20261115_8fb6a291';
 const production=location.hostname==='kyleaxityprofile.vercel.app';
 const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),8000);
 fetch(`https://countapi.mileshilliard.com/api/v1/${production?'hit':'get'}/${key}`,{cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer',signal:controller.signal})
 .then(async response=>{if(response.status===404&&!production)return {value:0};if(!response.ok)throw Error('Counter unavailable');return response.json()})
 .then(data=>{const count=Number(data.value);if(!Number.isSafeInteger(count)||count<0)throw Error('Invalid count');number.textContent=new Intl.NumberFormat('en-US').format(count);box.setAttribute('aria-label',`${number.textContent} site visits`);})
 .catch(()=>{number.textContent='—';box.setAttribute('aria-label','Visit count temporarily unavailable');box.title='Visit count temporarily unavailable';})
 .finally(()=>clearTimeout(timeout));
})();
