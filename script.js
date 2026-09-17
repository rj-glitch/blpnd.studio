const services={
 build:{num:'01 / BUILD',title:'BUILD',desc:'Websites and digital experiences that look good, make sense, load properly and help turn visitors into actual leads and customers.',tags:['Custom Website Creation','WordPress Development','Landing Pages','Website Redesign','UI/UX Design','Conversion Optimization','Local SEO','Technical SEO','SEO Audits','Google Business Profile','Performance Optimization']},
 brand:{num:'02 / BRAND',title:'BRAND',desc:'Visual systems that make your business look consistent, credible, memorable — and very much not like it was thrown together at 2 AM.',tags:['Brand Identity','Logo Design','Social Graphics','Digital Media','Print Design','Packaging','Illustration','Typography','Video Editing','Photo Retouching','Creative Direction']},
 automate:{num:'03 / AUTOMATE',title:'AUTOMATE',desc:'If you are doing it 100 times, let’s talk. We connect CRMs, workflows and integrations so repetitive work stops owning your day.',tags:['GoHighLevel','HubSpot','Zoho CRM','Monday CRM','Kajabi','CRM Setup','Lead Pipelines','Workflow Automation','Email Automation','Lead Nurturing','Forms & Funnels','Integrations']},
 ai:{num:'04 / AI',title:'AI BUSINESS SYSTEMS',desc:'AI is most useful when it is connected to the business. We integrate it into websites, CRMs, workflows, customer support and internal operations.',tags:['AI Integration','AI Workflows','AI Chatbots','AI Support','Lead Qualification','Knowledge Bases','Content Systems','Research','Data Processing','Prompt Development','API Integrations']},
 support:{num:'05 / SUPPORT',title:'SUPPORT',desc:'Automation is great. Sometimes customers still want a human. We help keep communication, tickets and after-sales issues moving.',tags:['Email Support','Customer Service','Technical Support','Ticket Management','Zendesk','Atlassian','Customer Follow-Ups','Issue Resolution','Helpdesk Management','After-Sales Support']}
};
const blogNotes={
 website:{num:'BLPND NOTES / WEB',title:'Your website is part of the sales team.',desc:'A website should do more than look polished. It should explain what you do quickly, build trust, remove friction and make the next step obvious.',tags:['Clear positioning','Conversion paths','Trust signals','Fast performance','Mobile-first UX']},
 automation:{num:'BLPND NOTES / AUTOMATION',title:'If you do it 100 times, build a workflow.',desc:'Repetitive work quietly becomes expensive. Map the task, remove unnecessary steps, connect the tools and automate the handoffs that do not need a human.',tags:['Process mapping','CRM workflows','Lead follow-up','Integrations','Time saved']},
 ai:{num:'BLPND NOTES / AI',title:'AI is more useful when it is connected.',desc:'The best AI use cases are not isolated prompts. They live inside the systems your team already uses — helping qualify leads, answer questions, process information and move work forward.',tags:['Connected AI','Knowledge bases','Lead qualification','Support systems','Workflow automation']}
};
const modal=document.querySelector('#modal');const modalTitle=document.querySelector('#modalTitle');const modalDesc=document.querySelector('#modalDesc');const modalNum=document.querySelector('#modalNum');const modalTags=document.querySelector('#modalTags');
function showModal(d,cta='Talk about this service'){if(!d)return;modalNum.textContent=d.num;modalTitle.textContent=d.title;modalDesc.textContent=d.desc;modalTags.innerHTML=d.tags.map(t=>`<span>${t}</span>`).join('');const ctaEl=modal.querySelector('.modal-cta');if(ctaEl)ctaEl.innerHTML=`${cta} <span>↗</span>`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function openModal(key){showModal(services[key],'Talk about this service')}
function openBlog(key){showModal(blogNotes[key],'Talk to BLPND')}

function closeModal(){if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-service]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.service)));document.querySelectorAll('[data-eco]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.eco)));document.querySelectorAll('[data-blog]').forEach(b=>{b.addEventListener('click',()=>openBlog(b.dataset.blog));b.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openBlog(b.dataset.blog)}})});
if(modal){modal.querySelector('.modal-close')?.addEventListener('click',closeModal);modal.querySelector('.modal-backdrop')?.addEventListener('click',closeModal)}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeStepModal();closeContactForm();closeSocialModal();closeWebsiteModal()}});
const work={website:['01','Websites built to do more than exist.','Conversion-focused websites, landing pages and digital experiences designed to look sharp, load properly and turn attention into action.','Clarity → Credibility → Conversion'],branding:['02','Brands that look like they have their life together.','Identity systems, campaigns and creative assets that make the business easier to recognize, trust and remember.','Identity → Consistency → Recall'],social:['03','Social content with a system behind it.','Content direction, design and management that keeps your channels active without making your team scramble for another post.','Plan → Create → Publish'],crm:['04','A CRM your team actually uses.','Pipelines, journeys, automations and integrations that organize leads and customers into a system built for action.','Capture → Nurture → Close'],automation:['05','AI and automation inside the workflow.','Connected systems that reduce repetitive work, speed up responses and make useful business information easier to use.','Connect → Automate → Scale']};
const ids=['workNumber','workTitle','workText','workMetric'];document.querySelectorAll('[data-work]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-work]').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  const d=work[btn.dataset.work];
  const panel=document.querySelector('.work-panel');
  panel.style.opacity='0';panel.style.transform='translateY(10px)';
  setTimeout(()=>{ids.forEach((id,i)=>document.getElementById(id).textContent=d[i]);panel.style.opacity='1';panel.style.transform='none'},170);
  if(btn.dataset.work==='website') openWebsiteModal();
  if(btn.dataset.work==='social') openSocialModal();
}));

const websiteModal=document.getElementById('websiteModal');
function openWebsiteModal(){if(!websiteModal)return;websiteModal.classList.add('open');websiteModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeWebsiteModal(){if(!websiteModal)return;websiteModal.classList.remove('open');websiteModal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
if(websiteModal){websiteModal.querySelector('.modal-close')?.addEventListener('click',closeWebsiteModal);websiteModal.querySelector('.modal-backdrop')?.addEventListener('click',closeWebsiteModal)}

const socialModal=document.getElementById('socialModal');
function openSocialModal(){if(!socialModal)return;socialModal.classList.add('open');socialModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeSocialModal(){if(!socialModal)return;socialModal.classList.remove('open');socialModal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
if(socialModal){socialModal.querySelector('.modal-close')?.addEventListener('click',closeSocialModal);socialModal.querySelector('.modal-backdrop')?.addEventListener('click',closeSocialModal)}
const steps=[['01','Discovery before decisions.','We start with the business, not the pixels. Goals, bottlenecks, customers and existing systems give us the context to build the right thing.'],['02','Direction with a reason behind it.','We turn discovery into priorities, structure and a clear direction. Everyone knows what we are making and why it matters.'],['03','Build the system.','Design, development, content, automation and integration come together in focused iterations with room for feedback.'],['04','Launch — then keep improving.','We ship, monitor, optimize and support what comes next. Launch is the start of the next useful phase, not the end of the relationship.']];
const stepModal=document.querySelector('#stepModal');
const stepModalNum=document.querySelector('#stepModalNum');
const stepModalTitle=document.querySelector('#stepModalTitle');
const stepModalDesc=document.querySelector('#stepModalDesc');
function showStepModal(d){if(!stepModal)return;stepModalNum.textContent=d[0]+' / HOW WE WORK';stepModalTitle.textContent=d[1];stepModalDesc.textContent=d[2];stepModal.classList.add('open');stepModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeStepModal(){if(!stepModal)return;stepModal.classList.remove('open');stepModal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-step]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-step]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');showStepModal(steps[btn.dataset.step])}));
if(stepModal){stepModal.querySelector('.modal-close')?.addEventListener('click',closeStepModal);stepModal.querySelector('.modal-backdrop')?.addEventListener('click',closeStepModal)}

const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -6%'});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const toggle=document.getElementById('themeToggle');toggle.addEventListener('click',()=>{document.body.classList.toggle('light');toggle.textContent=document.body.classList.contains('light')?'☾':'☼'});
const menu=document.getElementById('menuToggle'),nav=document.getElementById('mainNav');menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();


/* =========================================================
   TYPEWRITER SECTION HEADINGS + CONTENT FADE SYSTEM
   ========================================================= */
(function initEditorialReveal(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const headingSelector = '.section-head h2, .hero h1';
  const headings = [...document.querySelectorAll(headingSelector)];

  function wrapTextNodes(root){
    let index = 0;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node){ return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
    });
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      const frag=document.createDocumentFragment();
      [...node.nodeValue].forEach(char=>{
        if(char===' '){frag.appendChild(document.createTextNode(' '));return;}
        const span=document.createElement('span');
        span.className='typewriter-char';
        span.textContent=char;
        span.style.setProperty('--char-index', index++);
        frag.appendChild(span);
      });
      node.parentNode.replaceChild(frag,node);
    });
    root.classList.add('typewriter');
  }

  headings.forEach(h=>wrapTextNodes(h));

  /* Supporting copy/cards fade in after their local heading. */
  document.querySelectorAll('.section-head').forEach(head=>{
    const items=[...head.children].filter(el=>el.tagName!=='H2' && !el.classList.contains('typewriter'));
    items.forEach((el,i)=>{el.classList.add('reveal-fade');el.dataset.delay=Math.min(i+1,4)});
    const following=[...head.parentElement.children].filter(el=>el!==head);
    following.forEach((el,i)=>{
      if(el.classList.contains('section-head')) return;
      el.classList.add('reveal-fade');
      el.dataset.delay=Math.min(i+1,4);
    });
  });

  /* Hero is intentionally immediate; every other section types on entry. */
  if(reduce){
    headings.forEach(h=>h.classList.add('is-typing'));
    document.querySelectorAll('.reveal-fade').forEach(el=>el.classList.add('is-faded-in'));
    return;
  }

  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const heading=entry.target;
      heading.classList.add('is-typing');
      heading.closest('.section-head')?.classList.add('is-title-active');
      const section=heading.closest('section') || heading.parentElement;
      section.querySelectorAll('.reveal-fade').forEach(el=>el.classList.add('is-faded-in'));
      revealObserver.unobserve(heading);
    });
  },{threshold:.2,rootMargin:'0px 0px -12% 0px'});

  headings.forEach((heading,i)=>{
    if(heading.closest('#home')){
      requestAnimationFrame(()=>heading.classList.add('is-typing'));
    }else{
      revealObserver.observe(heading);
    }
  });
})();

/* Quick-look portfolio strip: mouse/touch drag for a tactile portfolio feel. */
const quicklook=document.querySelector('#workQuicklook');
if(quicklook){
  let down=false,startX=0,startScroll=0,moved=false;
  quicklook.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse' && e.button!==0)return;
    down=true;moved=false;startX=e.clientX;startScroll=quicklook.scrollLeft;quicklook.classList.add('dragging');
  });
  quicklook.addEventListener('pointermove',e=>{
    if(!down)return;
    const dx=e.clientX-startX;
    if(Math.abs(dx)>6)moved=true;
    if(moved){e.preventDefault();quicklook.scrollLeft=startScroll-dx*1.15;}
  });
  const stop=()=>{down=false;quicklook.classList.remove('dragging');setTimeout(()=>{moved=false},0)};
  quicklook.addEventListener('pointerup',stop);quicklook.addEventListener('pointercancel',stop);
  quicklook.addEventListener('mouseleave',()=>{if(down)stop()});
  // Hard-wire the four live project destinations so they still open even if the draggable strip intercepts a click.
  quicklook.querySelectorAll('[data-live]').forEach(link=>{
    link.addEventListener('click',e=>{
      if(moved){e.preventDefault();e.stopPropagation();return;}
      e.preventDefault();
      window.open(link.dataset.live,'_blank','noopener,noreferrer');
    });
  });
}


/* Contact form modal */
const contactFormModal=document.querySelector('#contactFormModal');
function openContactForm(){if(!contactFormModal)return;contactFormModal.classList.add('open');contactFormModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>document.querySelector('#contactName')?.focus(),120)}
function closeContactForm(){if(!contactFormModal)return;contactFormModal.classList.remove('open');contactFormModal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelector('#openContactForm')?.addEventListener('click',openContactForm);
document.querySelector('#headerContact')?.addEventListener('click',openContactForm);
if(contactFormModal){contactFormModal.querySelector('.modal-close')?.addEventListener('click',closeContactForm);contactFormModal.querySelector('.modal-backdrop')?.addEventListener('click',closeContactForm)}

// Contact delivery — FormSubmit
// Hosted HTTPS site: FormSubmit delivers to rjbpatricio@gmail.com.
// Local file:// preview: show a clear in-popup message instead of the FormSubmit browser error.
const blpndContactForm=document.getElementById('blpndContactForm');
const contactNext=document.getElementById('contactNext');
const contactSuccess=document.getElementById('contactSuccess');
const contactLocalNotice=document.getElementById('contactLocalNotice');
const contactSubmitBtn=document.getElementById('contactSubmitBtn');
const contactSuccessClose=document.getElementById('contactSuccessClose');

function showContactSuccess(){
  if(!contactFormModal)return;
  contactFormModal.classList.add('open');
  contactFormModal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  if(contactSuccess)contactSuccess.hidden=false;
  if(contactLocalNotice)contactLocalNotice.hidden=true;
  if(blpndContactForm){
    [...blpndContactForm.querySelectorAll('.form-field'), contactSubmitBtn].forEach(el=>{if(el)el.hidden=true});
  }
}
function resetContactFormView(){
  if(contactSuccess)contactSuccess.hidden=true;
  if(contactLocalNotice)contactLocalNotice.hidden=true;
  if(blpndContactForm){
    [...blpndContactForm.querySelectorAll('.form-field'), contactSubmitBtn].forEach(el=>{if(el)el.hidden=false});
  }
}
contactSuccessClose?.addEventListener('click',()=>{closeContactForm();resetContactFormView()});

blpndContactForm?.addEventListener('submit',e=>{
  if(window.location.protocol==='file:'){
    e.preventDefault();
    if(contactLocalNotice)contactLocalNotice.hidden=false;
    return;
  }
  // Return to this exact page after FormSubmit successfully delivers the message.
  if(contactNext){
    const cleanUrl=window.location.href.split('#')[0].split('?')[0];
    contactNext.value=`${cleanUrl}?contact=success#contact`;
  }
});

if(new URLSearchParams(window.location.search).get('contact')==='success'){
  setTimeout(showContactSuccess,120);
}


/* =========================================================
   BRANDING & MARKETING — GALLERY INTERACTION
   ========================================================= */
(function initBrandingGallery(){
  const gallery=document.getElementById('brandingGallery');
  if(!gallery)return;
  const slides=[...gallery.querySelectorAll('.gallery-slide')];
  const allThumbs=[...gallery.querySelectorAll('[data-gallery]')];
  const current=document.getElementById('galleryCurrent');
  const progress=document.getElementById('galleryProgress');
  const main=document.getElementById('galleryMain');
  let active=0;
  let touchStartY=0;

  function syncThumbs(){
    allThumbs.forEach(t=>t.classList.toggle('active',Number(t.dataset.gallery)===active));
    const activeThumb=gallery.querySelector('.gallery-thumbs [data-gallery="'+active+'"]');
    activeThumb?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  }
  function show(index){
    active=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>slide.classList.toggle('active',i===active));
    if(current)current.textContent=String(active+1).padStart(2,'0');
    if(progress)progress.style.width=((active+1)/slides.length*100)+'%';
    syncThumbs();
  }
  function open(){
    gallery.classList.add('open');
    gallery.style.zIndex='2147483000';
    gallery.setAttribute('aria-hidden','false');
    document.body.classList.add('gallery-open');
    show(0);
    setTimeout(()=>gallery.querySelector('.branding-gallery-close')?.focus(),80);
  }
  function close(){
    gallery.classList.remove('open');
    gallery.style.zIndex='';
    gallery.setAttribute('aria-hidden','true');
    document.body.classList.remove('gallery-open');
  }

  // The Branding & Marketing capability gets the full visual portfolio treatment.
  document.querySelector('[data-work="branding"]')?.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelectorAll('[data-work]').forEach(x=>x.classList.remove('active'));
    e.currentTarget.classList.add('active');
    open();
  });
  allThumbs.forEach(t=>t.addEventListener('click',()=>show(Number(t.dataset.gallery))));
  document.getElementById('galleryPrev')?.addEventListener('click',()=>show(active-1));
  document.getElementById('galleryNext')?.addEventListener('click',()=>show(active+1));
  gallery.querySelector('.branding-gallery-close')?.addEventListener('click',close);
  gallery.querySelector('.branding-gallery-backdrop')?.addEventListener('click',close);
  main?.addEventListener('touchstart',e=>{touchStartY=e.changedTouches[0].clientY},{passive:true});
  main?.addEventListener('touchend',e=>{
    const dy=e.changedTouches[0].clientY-touchStartY;
    if(Math.abs(dy)>45)show(active+(dy<0?1:-1));
  },{passive:true});
  document.addEventListener('keydown',e=>{
    if(!gallery.classList.contains('open'))return;
    if(e.key==='Escape')close();
    if(e.key==='ArrowRight'||e.key==='ArrowDown')show(active+1);
    if(e.key==='ArrowLeft'||e.key==='ArrowUp')show(active-1);
  });
  // Clicking the active artwork opens the complete original image in a full-screen viewer.
  const viewer=document.getElementById('imageViewer');
  const viewerImg=document.getElementById('imageViewerImg');
  const viewerCaption=document.getElementById('imageViewerCaption');
  function openViewer(){
    if(!viewer)return;
    const img=slides[active]?.querySelector('img');
    if(!img)return;
    viewerImg.src=img.currentSrc||img.src;
    viewerImg.alt=img.alt||'';
    const cap=slides[active]?.querySelector('figcaption');
    if(viewerCaption) viewerCaption.textContent=cap?.textContent?.trim()||'';
    viewer.classList.add('open');
    viewer.setAttribute('aria-hidden','false');
    document.body.classList.add('image-viewer-open');
    setTimeout(()=>document.getElementById('imageViewerClose')?.focus(),50);
  }
  function closeViewer(){
    if(!viewer)return;
    viewer.classList.remove('open');
    viewer.setAttribute('aria-hidden','true');
    document.body.classList.remove('image-viewer-open');
    if(viewerImg) viewerImg.src='';
  }
  main?.addEventListener('click',e=>{
    if(e.target.closest('.gallery-slide img')) openViewer();
  });
  document.getElementById('imageViewerClose')?.addEventListener('click',closeViewer);
  document.querySelector('.image-viewer-backdrop')?.addEventListener('click',closeViewer);
  document.getElementById('imageViewerPrev')?.addEventListener('click',()=>{show(active-1);openViewer()});
  document.getElementById('imageViewerNext')?.addEventListener('click',()=>{show(active+1);openViewer()});
  viewer?.addEventListener('click',e=>{if(e.target===viewer)closeViewer()});
  document.addEventListener('keydown',e=>{
    if(!viewer?.classList.contains('open'))return;
    if(e.key==='Escape')closeViewer();
    if(e.key==='ArrowRight') {show(active+1);openViewer()}
    if(e.key==='ArrowLeft') {show(active-1);openViewer()}
  });

  show(0);
})();
