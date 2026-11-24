(() => {
'use strict';


if(window.tailwind){
  window.tailwind.config = {
    theme: {
      extend: {
        colors: {
          blood: {
            DEFAULT: '#ff2438',
            soft: '#ff6b78',
            dim: '#b33a46',
            ok: '#ff4d5c',
            deep: '#7a2a33',
            ash: '#6b4046',
            dusk: '#4a1a20'
          },
          good: '#4ade80',
          warn: '#facc15',
          mute: '#5b5b63'
        },
        fontFamily: {
          mono: ['"Cascadia Code"', 'Consolas', '"Lucida Console"', 'ui-monospace', 'monospace']
        }
      }
    }
  };
}

const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const CONFIG = 
{
  siteName: '666',

  copy: {
    heroTagline: '𝙊𝙣𝙚 𝙤𝙖𝙩𝙝. 𝙒e 𝙬𝙖𝙡𝙠 𝙬𝙝𝙚𝙧𝙚 𝙖𝙣𝙜𝙚𝙡𝙨 𝙬𝙤𝙣𝙩.',
  },

  
  discordInvite: {
    name: '666',
    url: 'https://discord.gg/nNW8WBtxGw',
  },

  asciiArt: `    .ue~~%u.       .ue~~%u.       .ue~~%u.
  .d88   z88i    .d88   z88i    .d88   z88i
 x888E  *8888   x888E  *8888   x888E  *8888
:8888E   ^""   :8888E   ^""   :8888E   ^""
98888E.=tWc.   98888E.=tWc.   98888E.=tWc.
98888N  '888N  98888N  '888N  98888N  '888N
98888E   8888E 98888E   8888E 98888E   8888E
'8888E   8888E '8888E   8888E '8888E   8888E
 ?888E   8888"  ?888E   8888"  ?888E   8888"
  "88&   888"    "88&   888"    "88&   888"
    ""==*""        ""==*""        ""==*""`,

  bgAscii: `            ¶¶¶¶¶¶¶¶¶¶¶¶¶¶                  
        ¶¶¶¶             ¶¶¶¶¶              
       ¶¶¶                   ¶¶¶¶          
      ¶¶¶¶                      ¶¶¶        
     ¶¶                          ¶¶¶      
    ¶¶                              ¶¶     
   ¶¶                               ¶¶    
   ¶                                  ¶   
  ¶¶                                  ¶¶  
 ¶¶          ¶¶¶                       ¶  
  ¶         ¶¶                          ¶¶ 
  ¶         ¶               ¶¶¶         ¶¶ 
  ¶    ¶¶ ¶¶ ¶¶¶¶¶ ¶          ¶¶¶        ¶ 
  ¶        ¶   ¶¶¶¶¶¶¶¶¶¶    ¶¶¶        ¶ 
  ¶¶     ¶¶¶¶  ¶¶¶¶¶¶¶¶¶¶¶¶  ¶¶¶ ¶¶   ¶¶¶
  ¶¶   ¶¶¶¶¶¶  ¶¶¶¶¶¶¶¶¶¶¶¶¶¶ ¶¶¶¶¶¶¶ ¶¶ 
  ¶   ¶¶¶¶¶¶¶   ¶¶¶¶¶¶¶¶¶¶¶¶¶¶ ¶¶¶¶¶¶¶¶¶¶  
 ¶¶  ¶¶¶¶¶¶¶¶   ¶¶¶¶¶¶¶¶¶¶¶¶¶¶ ¶¶¶¶¶¶¶¶¶¶¶  
    ¶¶¶¶¶¶¶¶¶¶    ¶¶¶¶¶¶¶¶¶¶¶ ¶¶¶¶¶¶¶¶¶¶  
      ¶¶¶¶¶¶¶  ¶¶    ¶¶¶¶¶¶¶¶¶   ¶¶¶¶¶¶¶¶¶¶  
      ¶  ¶¶¶   ¶¶¶                 ¶¶¶¶¶¶¶   
     ¶¶       ¶¶¶¶¶¶ ¶               ¶¶¶     
     ¶¶     ¶¶¶    ¶¶¶¶           ¶¶¶¶       
      ¶¶     ¶      ¶¶        ¶¶¶¶¶¶¶¶¶      
       ¶¶¶¶¶          ¶  ¶ ¶¶¶¶¶¶¶¶¶¶¶       
          ¶¶¶   ¶¶¶¶ ¶¶ ¶¶¶  ¶¶¶¶¶  ¶¶       
           ¶¶¶¶¶ ¶  ¶¶ ¶ ¶ ¶   ¶¶    ¶       
            ¶          ¶¶    ¶     ¶       
             ¶¶¶¶¶ ¶¶¶¶¶¶       ¶¶    ¶       
                  ¶¶¶¶¶¶          ¶    ¶       
                   ¶¶ ¶¶          ¶¶  ¶¶       
                    ¶¶¶¶¶          ¶    ¶       
                     ¶¶¶¶¶        ¶¶    ¶¶      
                     ¶¶¶¶¶       ¶ ¶     ¶      
                     ¶ ¶¶¶      ¶  ¶¶    ¶      
                     ¶¶¶¶¶     ¶¶  ¶¶  ¶       
                     ¶¶¶¶¶   ¶¶¶  ¶¶  ¶       
                      ¶¶¶¶¶¶¶  ¶¶¶   ¶¶       
                       ¶¶    ¶¶¶    ¶          
                           ¶¶¶¶     ¶          
                             ¶¶    ¶¶          
                              ¶¶¶¶¶¶¶`,

  oneAboveAll: [
    { name:'ghost', music:'', background:'https://file.garden/awVxG5QkvdQT3UfA/gif%20(1).gif', discordId:'965848814164520970' },
  ],

  thronekeeper: [
    { name:'regrxt', discordId:'924889435068309564' },
  ],

  voidWardens: [
    { name:'nyx', music:'https://file.garden/awVxG5QkvdQT3UfA/blow%20my%20mind%20nyx.mp3', discordId:'919765436579610634' },
    { name:'yuhan', music:'https://file.garden/awVxG5QkvdQT3UfA/Yuhan%20Gangsta%20Baby.mp3', discordId:'1301551459305001001' },
    { name:'riri', discordId:'1005743967423438879' },
    { name:'ego', discordId:'843509507899654155' },
    { name:'burn', discordId:'972416260908392591' },
  ],

  twinDevils: [
    { name:'izana', discordId:'1329411181382991893' },
    { name:'torjack', discordId:'901199422287913050' },
  ],

  reapers: [
    { name:'matt', music:'https://file.garden/awVxG5QkvdQT3UfA/housewife%20tate.mp3', discordId:'1373311082214719561' },
    { name:'lance', discordId:'947160516890079243' },
    { name:'disconnected', discordId:'864545257537667113' },
    { name:'gyuri', music:'https://file.garden/awVxG5QkvdQT3UfA/Gracenote%20-%20When%20I%20Dream%20About%20You.mp3', discordId:'1168573045267501140' },
    { name:'nyx2', music:'https://file.garden/awVxG5QkvdQT3UfA/brent%20faiyaz%20-%20gang%20over%20luv%20nyx2.mp3', discordId:'1295876694267133986' },
  ],

  members: [
    { name:'omsimnida', discordId:'736197542244778115' },
    { name:'jano', discordId:'903443943423901726' },
  ],

  music: {
    url: 'https://file.garden/awVxG5QkvdQT3UfA/we%20back%20666%20site.mp3',
    volume: 0.50,
  },

  profileDefaults: {
    banner: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="340" viewBox="0 0 1200 340">'
      + '<defs>'
      + '<linearGradient id="g" x1="0" y1="0" x2=".85" y2="1">'
      + '<stop offset="0" stop-color="#2b0509"/><stop offset=".55" stop-color="#150207"/><stop offset="1" stop-color="#070102"/>'
      + '</linearGradient>'
      + '<radialGradient id="r" cx=".16" cy=".08" r=".95">'
      + '<stop offset="0" stop-color="#ff2438" stop-opacity=".38"/><stop offset="1" stop-color="#ff2438" stop-opacity="0"/>'
      + '</radialGradient>'
      + '<pattern id="d" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">'
      + '<line x1="0" y1="0" x2="0" y2="24" stroke="#ff2438" stroke-opacity=".07" stroke-width="1"/>'
      + '</pattern>'
      + '</defs>'
      + '<rect width="1200" height="340" fill="url(#g)"/>'
      + '<rect width="1200" height="340" fill="url(#r)"/>'
      + '<rect width="1200" height="340" fill="url(#d)"/>'
      + '<path d="M0 292 L1200 202" stroke="#ff2438" stroke-opacity=".12" stroke-width="2"/>'
      + '<path d="M0 310 L1200 220" stroke="#ff2438" stroke-opacity=".07" stroke-width="1"/>'
      + '<text x="1136" y="300" text-anchor="end" font-family="Consolas,monospace" font-size="196" font-weight="700" letter-spacing="-10" fill="#ff2438" fill-opacity=".08">666</text>'
      + '</svg>'
    ),
    background: 'images/banner.gif',
  },

};
document.getElementById('root').innerHTML = `
<div id="bg" aria-hidden="true"></div>
<canvas id="matrix" aria-hidden="true"></canvas>
<canvas id="smoke" aria-hidden="true"></canvas>

<div id="enter" role="button" tabindex="0" aria-label="Enter" class="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-hidden bg-black p-5 text-blood focus:outline-none">
  <div class="enter-inner relative z-[1] flex max-w-full animate-[fin_.9s_both] flex-col items-center gap-2.5">
    <pre id="enterArt" class="relative z-[1] m-0 select-none whitespace-pre font-mono leading-none text-blood" aria-hidden="true"></pre>
    <span class="enter-tag relative z-[1] -mt-0.5 self-end text-xs tracking-[.12em] text-blood-soft/70">@ 666</span>
    <span class="enter-hint relative z-[1] text-[10px] uppercase tracking-[.24em] text-blood-dim opacity-0">[ click to enter ]</span>
  </div>
</div>

<div id="shell" class="relative z-[3] flex h-full flex-col items-center overflow-x-hidden overflow-y-auto px-[4vw] pb-[7vh] pt-[6vh] max-[700px]:pb-[6vh] max-[700px]:pt-[5vh]">
  <section id="hero" class="relative flex min-h-[calc(100dvh_-_6vh)] w-full flex-col items-center justify-center max-[700px]:min-h-[calc(100dvh_-_5vh)]">
    <div class="banner-wrap relative flex w-full justify-center overflow-hidden"><pre id="banner" class="relative m-0 select-none whitespace-pre font-mono leading-none text-blood" aria-hidden="true"></pre></div>
    <p class="mt-[46px] text-center text-[17px] tracking-[.02em] max-[700px]:text-[15px]"><span class="tagline">${esc(CONFIG.copy.heroTagline)}</span></p>
  </section>
  <div id="roster" class="mt-12 flex w-[min(1120px,100%)] flex-col items-center gap-[34px] max-[700px]:mt-10 max-[700px]:gap-7"></div>
</div>

<div id="hoverCard" class="invisible fixed z-[25] w-[216px] translate-y-1.5 scale-[.98] overflow-hidden rounded-lg border border-blood/35 bg-[#0a0104] opacity-0 shadow-[0_16px_42px_rgba(0,0,0,.82),0_0_28px_rgba(255,36,56,.14),inset_0_1px_0_rgba(255,60,75,.06)]" aria-hidden="true">
  <div class="hc-banner relative h-[58px] bg-[#1a070a] bg-cover bg-center bg-no-repeat" id="hoverCardBanner"></div>
  <div class="relative z-[1] -mt-[21px] flex items-end gap-2 px-[11px]">
    <div class="hc-av offline relative h-[42px] w-[42px] flex-none rounded-full border-2 border-[#0a0405] shadow-[0_0_16px_rgba(255,36,56,.35)]" id="hoverCardAvatarWrap">
      <img class="a block h-full w-full rounded-full bg-[#1a070a] object-cover transition-opacity duration-300" id="hoverCardAvatar" src="" alt="">
      <span class="s absolute -bottom-px -right-px z-[2] h-3 w-3 rounded-full border-2 border-[#0a0405]"></span>
    </div>
    <div class="min-w-0 pb-px">
      <div class="truncate text-[12.5px] leading-tight tracking-[.02em] text-blood-soft" id="hoverCardName"></div>
      <div class="truncate text-[9.5px] tracking-[.03em] text-blood-dim" id="hoverCardHandle"></div>
    </div>
  </div>
  <div class="px-[11px] pt-[7px]"><span class="st offline" id="hoverCardStatus"><i></i><span>offline</span></span></div>
  <div class="truncate px-[11px] pb-2.5 pt-1 text-[9.5px] tracking-[.02em] text-blood-dim" id="hoverCardAct"></div>
</div>

<audio id="bgMusicEl" preload="none" loop></audio>
<audio id="profileMusicEl" preload="none" loop></audio>

<div id="profileModal" class="invisible fixed inset-0 z-30 grid place-items-center bg-black/70 p-[18px] opacity-0" aria-hidden="true">
  <div class="tm relative z-[1] flex max-h-[92dvh] w-[min(96vw,780px)] translate-y-4 scale-[.965] flex-col overflow-hidden rounded-[10px] border border-blood/40 bg-[#080103] shadow-[0_34px_90px_rgba(0,0,0,.92),0_0_70px_rgba(255,36,56,.16),inset_0_1px_0_rgba(255,60,75,.07)] max-[700px]:w-full" role="dialog" aria-modal="true" aria-label="Member profile">
    <div class="flex flex-none items-center gap-[11px] border-b border-blood/20 bg-[#100206] px-[13px] py-2.5 text-[11px] tracking-[.06em] text-blood-dim">
      <span class="tm-dots"><i></i><i></i><i></i></span>
      <span class="min-w-0 flex-1 truncate text-blood-soft/80" id="profileModalPath">666@shell: ~/profiles</span>
      <button class="grid h-[22px] w-[22px] flex-none place-items-center rounded-[3px] border-0 bg-transparent text-[13px] leading-none text-blood-dim transition-colors hover:bg-blood/20 hover:text-blood" type="button" id="profileModalClose" aria-label="Close profile">&#10005;</button>
    </div>
    <div class="tm-body relative min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-6 pt-5 font-mono text-[14.5px] leading-[1.66] text-blood-soft [-webkit-overflow-scrolling:touch] max-[700px]:px-4 max-[700px]:pb-[18px] max-[700px]:pt-4 max-[700px]:text-[13.5px]" id="profileModalBody">
      <div class="tm-line mb-1 truncate whitespace-nowrap text-blood-ok">
        <span class="text-blood-dim pm-user">666@shell</span><span class="text-[#6b4046]">:</span><span class="text-blood [text-shadow:0_0_8px_rgba(255,36,56,.35)]">~</span><span class="text-[#6b4046]">$</span> <span class="ml-1.5 text-blood" id="profileModalCmd"></span>
      </div>
      <div class="tm-run mt-[7px] flex items-center gap-2 text-[12.5px] tracking-[.01em] text-blood-dim opacity-0" id="profileModalRun" hidden>
        <span class="tm-spin h-2.5 w-2.5 flex-none animate-[spin_.7s_linear_infinite] rounded-full border-[1.5px] border-blood/30 border-t-blood"></span><span id="profileModalRunText"></span>
      </div>
      <div class="tm-out my-3.5 ml-0 pl-px">
        <div class="mb-3.5 text-xs tracking-[.02em] text-blood-dim">fetching profile from discord <span class="text-blood [text-shadow:0_0_8px_rgba(255,36,56,.35)]">[ ok ]</span></div>
        <div class="mb-3.5 flex items-center gap-3.5">
          <div class="tm-av offline relative h-20 w-20 flex-none max-[700px]:h-16 max-[700px]:w-16 max-[360px]:h-14 max-[360px]:w-14" id="profileModalAvatarWrap">
            <img class="a block h-full w-full rounded-full bg-[#1a070a] object-cover shadow-[0_0_26px_rgba(255,36,56,.36)] transition-opacity duration-300" id="profileModalAvatar" src="" alt="">
            <span class="s absolute -bottom-px -right-px z-[2] h-[18px] w-[18px] rounded-full border-[3px] border-[#0a0405]"></span>
          </div>
          <div class="min-w-0">
            <div class="truncate text-[22px] leading-tight tracking-[.03em] text-[#ff7b87] max-[700px]:text-[19px] max-[360px]:text-[17px]" id="profileModalName"></div>
            <div class="mt-1 text-[13px] tracking-[.03em] text-blood-dim" id="profileModalHandle"></div>
          </div>
          <pre class="pm-art" id="profileModalArt" aria-hidden="true"></pre>
        </div>
        <div class="grid grid-cols-[96px_1fr] gap-2.5 text-[13.5px] leading-[1.82] max-[700px]:grid-cols-[82px_1fr] max-[700px]:text-[12.5px]"><span class="k text-[#b06a72] after:float-right after:text-[#5e3a3f] after:content-[':']">status</span><span class="min-w-0 break-words text-blood-soft"><span class="st offline" id="profileModalStatus"><i></i><span>offline</span></span></span></div>
        <div class="grid grid-cols-[96px_1fr] gap-2.5 text-[13.5px] leading-[1.82] max-[700px]:grid-cols-[82px_1fr] max-[700px]:text-[12.5px]"><span class="k text-[#b06a72] after:float-right after:text-[#5e3a3f] after:content-[':']">activity</span><span class="min-w-0 break-words text-blood-soft" id="profileModalStatusText"></span></div>
        <div class="grid grid-cols-[96px_1fr] gap-2.5 text-[13.5px] leading-[1.82] max-[700px]:grid-cols-[82px_1fr] max-[700px]:text-[12.5px]"><span class="k text-[#b06a72] after:float-right after:text-[#5e3a3f] after:content-[':']">views</span><span class="min-w-0 break-words text-blood-soft" id="profileModalViewsCount">&middot;&middot;&middot;</span></div>
      </div>
      <div class="tm-line tm-end mb-1 mt-0.5 truncate whitespace-nowrap text-blood-ok"><span class="text-blood-dim pm-user">666@shell</span><span class="text-[#6b4046]">:</span><span class="text-blood [text-shadow:0_0_8px_rgba(255,36,56,.35)]">~</span><span class="text-[#6b4046]">$</span> <span class="tm-caret ml-[7px] inline-block h-4 w-2 -translate-y-[3px] animate-[bl_1s_steps(1)_infinite] bg-blood"></span></div>
    </div>
  </div>
</div>
`;

const BG_LAYOUT = [
  { top: '-10%', left: '62%',  size: 13, o: .16, r: 8,   dx: 18,  dy: -16 },
  { top: '44%',  left: '-7%',  size: 11, o: .13, r: 5,   dx: -14, dy: 20  },
  { top: '58%',  left: '47%',  size: 14, o: .12, r: -4,  dx: 12,  dy: -22 },
  { top: '18%',  left: '80%',  size: 8,  o: .14, r: -12, dx: -16, dy: 14  },
  { top: '-6%',  left: '-3%',  size: 9,  o: .09, r: -7,  dx: 14,  dy: 18  },
  { top: '66%',  left: '74%',  size: 9,  o: .13, r: 10,  dx: -18, dy: -12 },
  { top: '20%',  left: '26%',  size: 7,  o: .08, r: -10, dx: 16,  dy: -18 },
  { top: '76%',  left: '28%',  size: 8,  o: .09, r: 6,   dx: -12, dy: 16  },
];
(function buildBackground(){
  const bgEl = document.getElementById('bg');
  for(const cfg of BG_LAYOUT){
    const art = document.createElement('pre');
    art.className = 'bgart';
    art.setAttribute('aria-hidden', 'true');
    art.textContent = CONFIG.bgAscii;
    art.style.top = cfg.top;
    art.style.left = cfg.left;
    art.style.fontSize = cfg.size + 'px';
    art.style.setProperty('--o', cfg.o);
    art.style.setProperty('--r', cfg.r + 'deg');
    art.style.setProperty('--dx', cfg.dx + 'px');
    art.style.setProperty('--dy', cfg.dy + 'px');
    bgEl.appendChild(art);
  }
})();

const CDN = 'https://cdn.discordapp.com/';
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function slugify(str){
  return (str || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'member';
}
function def(id){
  try{ return CDN + 'embed/avatars/' + Number((BigInt(id) >> 22n) % 6n) + '.png'; }
  catch(e){ return CDN + 'embed/avatars/0.png'; }
}
function avatarUrl(u, id){
  if(!u) return def(id);
  return u.avatar
    ? CDN + 'avatars/' + u.id + '/' + u.avatar + '.' + (u.avatar.indexOf('a_') === 0 ? 'gif' : 'png') + '?size=256'
    : def(u.id);
}
function decoUrl(u){
  const dc = u && u.avatar_decoration_data;
  return dc && dc.asset ? CDN + 'avatar-decoration-presets/' + dc.asset + '.png?size=128&passthrough=true' : '';
}
function applyBackground(el, val){
  const v = (val || '').trim();
  if(!v) return false;
  if(/^(url\(|linear-gradient|radial-gradient|conic-gradient)/i.test(v)){ el.style.backgroundImage = v; return true; }
  if(/\.(png|jpe?g|gif|webp|avif|svg)$/i.test(v) || /^(https?:)?\//.test(v) || v.startsWith('data:')){ el.style.backgroundImage = 'url("' + v + '")'; return true; }
  el.style.backgroundColor = v;
  return false;
}
function backgroundValue(val){
  const probe = document.createElement('div');
  const ok = applyBackground(probe, val);
  return { image: probe.style.backgroundImage, ok };
}
function profileBanner(member){
  return (member && (member.banner || member.background)) || CONFIG.profileDefaults.banner;
}

const validOnly = arr => (arr || []).filter(m => m && m.name && m.name.trim());
const ALL_POOLS = () => [CONFIG.oneAboveAll, CONFIG.thronekeeper, CONFIG.voidWardens, CONFIG.twinDevils, CONFIG.reapers, CONFIG.members];
const BYID = {};
ALL_POOLS().forEach(pool => validOnly(pool).forEach(m => { if(!BYID[m.discordId]) BYID[m.discordId] = m; }));
const ALL = Object.keys(BYID);

function findMemberBySlug(slug){
  for(const pool of ALL_POOLS()){
    const found = (pool || []).find(m => m && m.name && slugify(m.name) === slug);
    if(found) return found;
  }
  return null;
}
const pathSlug = location.pathname.replace(/^\/+|\/+$/g, '');
const deepLinkedProfile = pathSlug ? findMemberBySlug(pathSlug) : null;

const GROUPS = [
  ['The One Above All', CONFIG.oneAboveAll, 0],
  ['Thronekeeper', CONFIG.thronekeeper, 0],
  ['Void Warden', CONFIG.voidWardens, 0],
  ['Twin Devils', CONFIG.twinDevils, 2],
  ['Reapers', CONFIG.reapers, 0],
  ['Members', CONFIG.members, 0],
];

const CARD_CLS = 'm group/card flex w-[84px] max-[700px]:w-[72px] max-[360px]:w-16 cursor-pointer appearance-none flex-col items-center border-0 bg-transparent p-0 text-center font-[inherit] text-inherit [-webkit-tap-highlight-color:transparent]';
const AV_CLS = 'av offline relative my-[9px] mb-2.5 h-16 w-16 flex-none max-[700px]:h-14 max-[700px]:w-14 max-[360px]:h-[50px] max-[360px]:w-[50px]';
const AV_IMG_CLS = 'a block h-full w-full rounded-full bg-[#1a070a] object-cover shadow-[0_0_14px_rgba(255,36,56,.24)] transition-[box-shadow,transform,opacity] duration-[350ms] group-hover/card:scale-105 group-hover/card:shadow-[0_0_24px_rgba(255,36,56,.55)]';
const DOT_CLS = 's absolute -bottom-px -right-px z-[2] h-4 w-4 rounded-full border-[3px] border-black';
const NM_CLS = 'nm max-w-full truncate text-[11.5px] text-blood-ok [text-shadow:0_0_4px_#000,0_0_8px_rgba(255,36,56,.4)] transition-colors duration-300 group-hover/card:text-blood';

function cardHTML(m){
  const id = m.discordId;
  return '<button class="' + CARD_CLS + '" type="button" data-id="' + esc(id) + '" aria-label="' + esc(m.name) + ' profile">'
    + '<span class="' + AV_CLS + '"><img class="' + AV_IMG_CLS + '" src="' + def(id) + '" alt="" loading="lazy" referrerpolicy="no-referrer"><span class="' + DOT_CLS + '"></span></span>'
    + '<span class="' + NM_CLS + '">' + esc(m.name) + '</span></button>';
}

function placeholderHTML(){
  return '<div class="m m-empty pointer-events-none flex w-[84px] max-[700px]:w-[72px] max-[360px]:w-16 flex-col items-center" aria-hidden="true">'
    + '<span class="av relative my-[9px] mb-2.5 grid h-16 w-16 flex-none place-items-center rounded-full border border-dashed border-blood/30 bg-blood/[.03] max-[700px]:h-14 max-[700px]:w-14 max-[360px]:h-[50px] max-[360px]:w-[50px]"><span class="q text-xl text-blood-dim [text-shadow:0_0_8px_rgba(255,36,56,.3)]">?</span></span>'
    + '<span class="nm max-w-full truncate text-[11.5px] italic text-blood-dim">empty</span></div>';
}

function cardsHTML(list, slots){
  const items = [], blanks = [];
  (list || []).forEach(m => {
    if(m && m.name && String(m.name).trim()) items.push(m);
    else blanks.push(m);
  });
  const empty = Math.max(0, (slots || 0) - items.length, blanks.length);
  return items.map(cardHTML).concat(Array.from({ length: empty }, placeholderHTML))
    .map((html, i) => html.replace(/^<([a-z][\w-]*)/i, '<$1 style="--i:' + i + '"'))
    .join('');
}

function sectionHTML(id, title, list, slots){
  return '<section class="reveal w-full" id="' + id + '">'
    + '<div class="sec-title">' + esc(title) + '</div>'
    + '<div class="row flex flex-wrap items-start justify-center gap-x-[22px] gap-y-[26px] max-[700px]:gap-x-3 max-[700px]:gap-y-5">'
    + cardsHTML(list, slots) + '</div></section>';
}

const groupAnchor = gi => 'sec-' + GROUPS[gi][0].toLowerCase().replace(/[^a-z0-9]+/g, '-');

const rosterEl = document.getElementById('roster');
rosterEl.innerHTML = GROUPS
  .map(([title, list, slots], gi) => sectionHTML(groupAnchor(gi), title, list, slots))
  .join('');

const revealRoot = document.getElementById('shell');
const revealTargets = Array.from(revealRoot.querySelectorAll('.reveal'));

function initScrollReveal(){
  if(reduceMotion || !('IntersectionObserver' in window)){
    revealTargets.forEach(el => el.classList.add('in'));
    return;
  }
  function syncSides(){
    const rootTop = revealRoot.getBoundingClientRect().top;
    for(const el of revealTargets){
      if(el.classList.contains('in')) continue;
      el.dataset.side = el.getBoundingClientRect().top < rootTop ? 'top' : 'bottom';
    }
  }
  let sideFrame = 0;
  revealRoot.addEventListener('scroll', () => {
    if(sideFrame) return;
    sideFrame = requestAnimationFrame(() => { sideFrame = 0; syncSides(); });
  }, { passive: true });

  const io = new IntersectionObserver(entries => {
    for(const entry of entries){
      const el = entry.target;
      const shown = entry.isIntersecting;
      el.inert = !shown;
      el.classList.toggle('in', shown);
    }
    syncSides();
  }, { root: revealRoot, rootMargin: '0px 0px -7% 0px', threshold: 0 });
  revealTargets.forEach(el => io.observe(el));
  syncSides();
}

const FETCH_ART = `    .ue~~%u.
  .d88   z88i
 x888E  *8888
:8888E   ^""
98888E.=tWc.
98888N  '888N
98888E   8888E
'8888E   8888E
 ?888E   8888"
  "88&   888"
    ""==*""`;

const enterArt = document.getElementById('enterArt');
const bannerEl = document.getElementById('banner');
const trimArt = text => text.replace(/\r/g, '').split('\n').map(line => line.replace(/\s+$/, '')).join('\n');
const artSource = () => trimArt(CONFIG.asciiArt);

function fitArt(el, text, maxFont, widthRatio, heightRatio){
  const lines = text.split('\n');
  const cols = Math.max(...lines.map(line => line.length), 1);
  const size = Math.min(maxFont, (innerWidth * widthRatio) / (cols * .62), (innerHeight * heightRatio) / lines.length);
  el.style.fontSize = Math.max(1.5, size).toFixed(2) + 'px';
}

const ART_GLYPHS = '.:-=+*#%@';
const ART_ORDER = {
  byRow: (row, col, rows) => row / rows,
  bottomUpDiagonal: (row, col, rows, cols) => (col / cols) * .8 + .2 * (1 - row / rows),
  fromCentre: (row, col, rows, cols) => {
    const x = (col - cols / 2) / (cols / 2);
    const y = (row - rows / 2) / (rows / 2);
    return Math.min(1, Math.sqrt(x * x * .5 + y * y * .5) / .9);
  },
};
const artEngines = new WeakMap();

function createArtEngine(el, text, opts){
  const cfg = {
    glyphs: ART_GLYPHS,
    sweep: 1.1,
    jitter: .45,
    order: ART_ORDER.byRow,
    glitchMin: 2000,
    glitchVar: 0,
    glitchRows: 4,
    glitchTime: 140,
    glitchDelay: 1100,
    corrupt: .12,
    scanDuration: 2600,
    scanPeriod: 6000,
    scanPeriodVar: 3000,
    scanWidth: 2,
    scanUp: false,
    scan: true,
    scanDelay: 1200,
    throttle: 28,
    ...opts,
  };
  text = text.replace(/\r/g, '');
  const lines = text.split('\n');
  const rows = lines.length;
  const cols = Math.max(1, ...lines.map(line => line.length));
  const grid = lines.map(line => Array.from(line));
  const times = grid.map((chars, r) => chars.map((ch, c) =>
    (ch === ' ' || ch === '\u2800') ? -1 : cfg.order(r, c, rows, cols) * cfg.sweep + Math.random() * cfg.jitter
  ));
  const rowMax = times.map(row => row.reduce((a, t) => (t > a ? t : a), 0));
  const doneRows = new Array(rows).fill(false);
  const hotRows = new Array(rows).fill(false);
  const lineText = new Array(rows).fill('');
  const rand = () => cfg.glyphs[(Math.random() * cfg.glyphs.length) | 0];

  el.innerHTML = '';
  const lineEls = grid.map(chars => {
    const div = document.createElement('div');
    div.textContent = ' '.repeat(chars.length);
    el.appendChild(div);
    return div;
  });

  let raf = 0, startedAt = 0, lastFrame = 0, started = false, revealDone = false;
  let glitchUntil = 0, glitching = false, glitchRowList = [];
  let nextGlitch = 0, scanActive = false, scanStartedAt = 0, nextScan = 0;

  function setLine(r, value){
    if(lineText[r] === value) return;
    lineText[r] = value;
    lineEls[r].textContent = value;
  }
  function corruptLine(value){
    let out = '';
    for(let i = 0; i < value.length; i++){
      const ch = value.charAt(i);
      out += (ch === ' ' || Math.random() > cfg.corrupt) ? ch : rand();
    }
    return out;
  }
  function restoreRow(r){
    lineEls[r].style.transform = '';
    setLine(r, grid[r].join(''));
  }
  function clearHot(){
    for(let r = 0; r < rows; r++){
      if(!hotRows[r]) continue;
      hotRows[r] = false;
      lineEls[r].classList.remove('hot');
    }
  }
  function revealAll(){
    for(let r = 0; r < rows; r++){
      doneRows[r] = true;
      if(glitching && glitchRowList.indexOf(r) >= 0) lineEls[r].style.transform = '';
      setLine(r, grid[r].join(''));
      lineEls[r].classList.remove('hot');
      hotRows[r] = false;
    }
    glitching = false;
    glitchRowList = [];
    revealDone = true;
    nextGlitch = performance.now() + cfg.glitchDelay;
  }
  function revealStep(now){
    const t = (now - startedAt) / 1000;
    let all = true;
    for(let r = 0; r < rows; r++){
      if(doneRows[r]) continue;
      if(t > rowMax[r] + .35){
        setLine(r, grid[r].join(''));
        doneRows[r] = true;
        continue;
      }
      all = false;
      const chars = grid[r], charTimes = times[r];
      let out = '';
      for(let c = 0; c < chars.length; c++){
        const at = charTimes[c];
        if(at < 0) out += chars[c];
        else if(t < at) out += ' ';
        else if(t < at + .3) out += rand();
        else out += chars[c];
      }
      setLine(r, out);
    }
    if(all) revealAll();
  }
  function glitchStep(now){
    if(now > nextGlitch){
      glitchUntil = now + cfg.glitchTime;
      nextGlitch = now + cfg.glitchMin + Math.random() * cfg.glitchVar;
      glitchRowList = [];
      const used = {};
      const count = Math.min(cfg.glitchRows, rows);
      while(glitchRowList.length < count){
        const r = (Math.random() * rows) | 0;
        if(used[r]) continue;
        used[r] = 1;
        glitchRowList.push(r);
      }
    }
    if(now < glitchUntil){
      glitching = true;
      for(const r of glitchRowList){
        lineEls[r].style.transform = 'translateX(' + ((Math.random() * 1.6) - .8).toFixed(2) + 'em)';
        setLine(r, corruptLine(grid[r].join('')));
      }
    }else if(glitching){
      glitching = false;
      for(const r of glitchRowList) restoreRow(r);
    }
  }
  function scanStep(now){
    if(!cfg.scan) return;
    if(!scanActive){
      if(now > nextScan){
        scanActive = true;
        scanStartedAt = now;
      }
      return;
    }
    const p = (now - scanStartedAt) / cfg.scanDuration;
    if(p > 1){
      scanActive = false;
      nextScan = now + cfg.scanPeriod + Math.random() * cfg.scanPeriodVar;
      clearHot();
      return;
    }
    const cur = (cfg.scanUp ? 1 - p : p) * (rows + 2 * cfg.scanWidth) - cfg.scanWidth;
    for(let r = 0; r < rows; r++){
      const on = Math.abs(r - cur) <= cfg.scanWidth;
      if(on === hotRows[r]) continue;
      hotRows[r] = on;
      lineEls[r].classList.toggle('hot', on);
    }
  }
  function loop(now){
    raf = requestAnimationFrame(loop);
    if(!started) return;
    if(now - lastFrame < cfg.throttle) return;
    lastFrame = now;
    if(!revealDone){
      revealStep(now);
      return;
    }
    glitchStep(now);
    scanStep(now);
  }
  function start(now){
    startedAt = now == null ? performance.now() : now;
    lastFrame = 0;
    started = true;
    revealDone = false;
    glitching = false;
    glitchRowList = [];
    glitchUntil = 0;
    doneRows.fill(false);
    hotRows.fill(false);
    for(let r = 0; r < rows; r++){
      lineText[r] = '';
      lineEls[r].textContent = ' '.repeat(grid[r].length);
      lineEls[r].style.transform = '';
      lineEls[r].classList.remove('hot');
    }
    nextScan = startedAt + 1000 * (cfg.sweep + cfg.jitter) + cfg.scanDelay;
    nextGlitch = startedAt + 1000 * (cfg.sweep + cfg.jitter) + 2500;
    if(!raf) raf = requestAnimationFrame(loop);
  }
  function destroy(){
    if(raf) cancelAnimationFrame(raf);
    raf = 0;
    started = false;
    el.innerHTML = '';
  }

  return {
    text,
    start,
    destroy,
    revealAll,
    get started(){ return started; },
    get done(){ return revealDone; },
    get startedAt(){ return startedAt; },
    get lineCount(){ return rows; },
    get hotCount(){ return hotRows.filter(Boolean).length; },
    get glitchRows(){ return glitchRowList.slice(); },
    get glitching(){ return glitching; },
    get cols(){ return cols; },
  };
}

function setArt(el, text, opts){
  const prev = artEngines.get(el);
  if(prev && prev.text === text) return prev;
  const wasStarted = prev && prev.started;
  if(prev) prev.destroy();
  if(reduceMotion){
    el.textContent = text;
    const stub = { text, start(){}, destroy(){ el.textContent = ''; }, started: true, done: true };
    artEngines.set(el, stub);
    return stub;
  }
  const engine = createArtEngine(el, text, opts);
  artEngines.set(el, engine);
  if(wasStarted) engine.start();
  return engine;
}
function startArtEngine(el){
  const engine = artEngines.get(el);
  if(engine && typeof engine.start === 'function') engine.start();
}

function layoutArt(){
  const text = artSource();
  fitArt(enterArt, text, 40, .88, .62);
  fitArt(bannerEl, text, 18, .9, .42);
  setArt(enterArt, text, {
    order: ART_ORDER.fromCentre, sweep: 1.2, jitter: .4,
    glitchMin: 3000, glitchVar: 3200, glitchRows: 3,
    scanPeriod: 7000, scanPeriodVar: 4000, scanWidth: 2,
    scan: false,
  });
  setArt(bannerEl, text, {
    order: ART_ORDER.bottomUpDiagonal, sweep: 1.05, jitter: .4,
    glitchMin: 2000, glitchVar: 0, glitchRows: 3, glitchDelay: 700,
    scanPeriod: 9000, scanPeriodVar: 3500, scanWidth: 2,
  });
}
layoutArt();
addEventListener('resize', layoutArt);

let bgArtStarted = false;
function startBackgroundArt(){
  if(bgArtStarted || reduceMotion) return;
  bgArtStarted = true;
  const arts = [...document.querySelectorAll('.bgart')].slice(0, 4);
  arts.forEach((el, i) => {
    const engine = createArtEngine(el, CONFIG.bgAscii, {
      order: i % 2 ? ART_ORDER.bottomUpDiagonal : ART_ORDER.fromCentre,
      sweep: 1.8 + Math.random() * .7, jitter: .8,
      glitchMin: 4200 + Math.random() * 2600, glitchVar: 4800, glitchRows: 2,
      scanDuration: 3000, scanPeriod: 9000 + Math.random() * 5000, scanWidth: 2,
      scan: false,
      throttle: 50,
    });
    engine.start();
  });
}

const S = {};
let hoverId = null;
const statusLabels = { online:'online', idle:'idle', dnd:'do not disturb', offline:'offline' };
const activityLabels = ['playing ', 'streaming ', 'listening to ', 'watching ', '', 'competing in '];

function describeActivity(data, status){
  if(!data) return statusLabels[status] || status;
  const custom = (data.activities || []).find(a => a.type === 4);
  if(custom && custom.state) return custom.state;
  const spotify = a => /spotify/i.test(a.name || '') || /^spotify:/i.test(a.id || '');
  const act = (data.activities || []).find(a => a.type !== 4 && !spotify(a));
  if(act) return (activityLabels[act.type] || '') + act.name;
  return statusLabels[status] || status;
}

const ST = ['online', 'idle', 'dnd', 'offline'];
function setSt(el, st){ ST.forEach(s => el.classList.toggle(s, s === st)); }
function setDeco(box, ds){
  let d = box.querySelector('.d');
  if(ds){
    if(!d){
      d = document.createElement('img');
      d.className = 'd';
      d.alt = '';
      box.insertBefore(d, box.querySelector('.s'));
    }
    if(d.getAttribute('src') !== ds) d.src = ds;
  }else if(d) d.remove();
}

function render(id){
  const p = S[id], u = p && p.discord_user, st = p ? (p.discord_status || 'offline') : 'offline';
  const av = avatarUrl(u, id), ds = decoUrl(u), nm = u ? (u.display_name || u.global_name || u.username) : '';
  document.querySelectorAll('.m[data-id="' + id + '"]').forEach(el => {
    const box = el.querySelector('.av'), a = box.querySelector('.a');
    setSt(box, st);
    if(a.getAttribute('src') !== av) a.src = av;
    setDeco(box, ds);
    if(nm) el.querySelector('.nm').textContent = nm.toLowerCase();
  });
  if(hoverId === id && BYID[id]) fillHover(BYID[id]);
  if(openMember && openMember.discordId === id) fillProfile(openMember);
}

function startPresence(){
  Promise.all(ALL.map(id =>
    fetch('https://api.lanyard.rest/v1/users/' + id)
      .then(r => r.json())
      .then(j => { if(j.success){ S[id] = j.data; render(id); } })
      .catch(() => {})
  )).then(socket);

  function socket(){
    let w, hb;
    try{ w = new WebSocket('wss://api.lanyard.rest/socket'); }catch(e){ return; }
    w.onmessage = m => {
      const j = JSON.parse(m.data);
      if(j.op === 1){
        w.send(JSON.stringify({ op: 2, d: { subscribe_to_ids: ALL } }));
        hb = setInterval(() => { if(w.readyState === 1) w.send('{"op":3}'); }, j.d.heartbeat_interval);
      }else if(j.op === 0 && j.t === 'INIT_STATE'){
        for(const key in j.d) if(j.d[key] && j.d[key].discord_user){ S[key] = j.d[key]; render(key); }
      }else if(j.op === 0 && j.t === 'PRESENCE_UPDATE' && j.d && j.d.discord_user){
        S[j.d.discord_user.id] = j.d;
        render(j.d.discord_user.id);
      }
    };
    w.onclose = () => { clearInterval(hb); setTimeout(socket, 5000); };
  }
}

const hoverCard = document.getElementById('hoverCard');
const hoverCardBanner = document.getElementById('hoverCardBanner');
let hoverBtn = null;

function fillHover(member){
  const id = member.discordId, p = S[id], u = p && p.discord_user, st = p ? (p.discord_status || 'offline') : 'offline';
  const av = avatarUrl(u, id);
  const avEl = document.getElementById('hoverCardAvatar');
  if(avEl.getAttribute('src') !== av) avEl.src = av;
  const box = document.getElementById('hoverCardAvatarWrap');
  setSt(box, st);
  setDeco(box, decoUrl(u));
  document.getElementById('hoverCardName').textContent = u ? (u.display_name || u.global_name || u.username) : member.name;
  document.getElementById('hoverCardHandle').textContent = u ? '@' + u.username : '@' + member.name;
  const sEl = document.getElementById('hoverCardStatus');
  setSt(sEl, st);
  sEl.querySelector('span').textContent = statusLabels[st] || st;
  const actText = p ? describeActivity(p, st) : (statusLabels[st] || st);
  document.getElementById('hoverCardAct').textContent = actText === (statusLabels[st] || st) ? '\u2014' : actText;

  hoverCardBanner.style.backgroundImage = '';
  hoverCardBanner.style.backgroundColor = '';
  const ok = applyBackground(hoverCardBanner, profileBanner(member));
  if(!ok && !hoverCardBanner.style.backgroundImage){
    hoverCardBanner.style.background = 'linear-gradient(135deg,#2a0a10,#0a0405)';
  }
}

function positionHover(btn){
  const r = btn.getBoundingClientRect();
  const cw = hoverCard.offsetWidth || 216;
  const ch = hoverCard.offsetHeight || 160;
  let x = r.left + r.width / 2 - cw / 2;
  let y = r.bottom + 12;
  if(y + ch > innerHeight - 12) y = r.top - ch - 12;
  if(y < 12) y = 12;
  x = Math.max(12, Math.min(innerWidth - cw - 12, x));
  hoverCard.style.left = Math.round(x) + 'px';
  hoverCard.style.top = Math.round(y) + 'px';
}


let hoverMusicAudio = null;
let hoverMusicUrl = '';

function startHoverMusic(member){
  const musicVal = String(member && member.music ? member.music : '').trim();

  if(!musicVal){
    stopHoverMusic();
    return;
  }

  if(!hoverMusicAudio){
    hoverMusicAudio = new Audio();
    hoverMusicAudio.preload = 'none';
    hoverMusicAudio.onended = stopHoverMusic;
  }

  // Don't restart the same song unnecessarily
  if(hoverMusicUrl === musicVal && !hoverMusicAudio.paused) return;

  hoverMusicAudio.pause();
  hoverMusicAudio.src = musicVal;
  hoverMusicAudio.volume = 0.5;
  hoverMusicUrl = musicVal;

  // Lower the website background music
  duckSiteAudio();

  hoverMusicAudio.play().catch(() => {
    stopHoverMusic();
  });
}

function stopHoverMusic(){
  if(!hoverMusicAudio || !hoverMusicUrl) return;

  hoverMusicAudio.pause();
  hoverMusicAudio.removeAttribute('src');
  hoverMusicAudio.load();

  hoverMusicUrl = '';

  // Restore website background music
  if(audioStarted) unduckSiteAudio();
  else startAmbientAudio();
}


function showHover(btn){
  const member = BYID[btn.dataset.id];
  if(!member) return;
  hoverBtn = btn;
  hoverId = member.discordId;
  fillHover(member);
  hoverCard.classList.add('on');
  hoverCard.setAttribute('aria-hidden', 'false');
  positionHover(btn);

    // Play this member's music
  startHoverMusic(member);
}
function hideHover(){
  hoverBtn = null;
  hoverId = null;
  hoverCard.classList.remove('on');
  hoverCard.setAttribute('aria-hidden', 'true');

    // Stop the member's music
  stopHoverMusic();
}

rosterEl.addEventListener('pointerover', e => {
  if(e.pointerType === 'touch') return;
  const btn = e.target.closest('.m');
  if(!btn || btn.classList.contains('m-empty') || btn === hoverBtn) return;
  showHover(btn);
});
rosterEl.addEventListener('pointerout', e => {
  const btn = e.target.closest('.m');
  if(!btn || btn !== hoverBtn) return;
  if(btn.contains(e.relatedTarget)) return;
  hideHover();
});
rosterEl.addEventListener('focusin', e => {
  const btn = e.target.closest('.m');
  if(btn && !btn.classList.contains('m-empty')) showHover(btn);
});
rosterEl.addEventListener('focusout', e => {
  if(e.target.closest('.m')) hideHover();
});
document.getElementById('shell').addEventListener('scroll', () => {
  if(hoverId) hideHover();
}, { passive: true });
addEventListener('resize', () => {
  if(hoverId) hideHover();
});

let audioStarted = false;
function startAmbientAudio(){
  if(audioStarted) return;
  audioStarted = true;
  const el = document.getElementById('bgMusicEl');
  el.src = CONFIG.music.url;
  el.volume = CONFIG.music.volume;
  el.play().catch(e => console.warn('background music blocked/unavailable', e));
}
function duckSiteAudio(){
  const bg = document.getElementById('bgMusicEl');
  if(bg && !bg.paused){ bg.dataset.wasPlaying = '1'; bg.pause(); }
}
function unduckSiteAudio(){
  const bg = document.getElementById('bgMusicEl');
  if(bg && bg.dataset.wasPlaying === '1'){ bg.play().catch(() => {}); delete bg.dataset.wasPlaying; }
}

const profileModal = document.getElementById('profileModal');
const profileBody = document.getElementById('profileModalBody');
const viewsCountEl = document.getElementById('profileModalViewsCount');
document.getElementById('profileModalArt').textContent = FETCH_ART;
let openMember = null;
let cmdTimer = 0;
let runTimer = 0;

const VIEW_COUNTER_NAMESPACE = '666-site';
const VIEW_CACHE_KEY = '666ProfileViewsCache';

function cacheView(slug, count){
  try{
    const cache = JSON.parse(localStorage.getItem(VIEW_CACHE_KEY) || '{}');
    cache[slug] = count;
    localStorage.setItem(VIEW_CACHE_KEY, JSON.stringify(cache));
  }catch(e){}
}
async function bumpProfileViewCount(slug){
  try{
    const res = await fetch('https://api.countapi.xyz/hit/' + VIEW_COUNTER_NAMESPACE + '/profile-' + slug);
    if(!res.ok) throw new Error('countapi responded ' + res.status);
    const data = await res.json();
    if(typeof data.value !== 'number') throw new Error('countapi returned no value');
    cacheView(slug, data.value);
    return data.value;
  }catch(err){
    try{
      const cache = JSON.parse(localStorage.getItem(VIEW_CACHE_KEY) || '{}');
      const next = (cache[slug] || 0) + 1;
      cacheView(slug, next);
      return next;
    }catch(err2){ return null; }
  }
}

function fillProfile(member){
  const id = member.discordId, p = S[id], u = p && p.discord_user, st = p ? (p.discord_status || 'offline') : 'offline';
  const box = document.getElementById('profileModalAvatarWrap');
  const a = document.getElementById('profileModalAvatar');
  const av = avatarUrl(u, id);
  setSt(box, st);
  if(a.getAttribute('src') !== av) a.src = av;
  setDeco(box, decoUrl(u));
  document.getElementById('profileModalName').textContent = u ? (u.display_name || u.global_name || u.username) : member.name;
  document.getElementById('profileModalHandle').textContent = u ? '@' + u.username : '@' + member.name;
  const sEl = document.getElementById('profileModalStatus');
  setSt(sEl, st);
  sEl.querySelector('span').textContent = statusLabels[st] || st;
  const act = p ? describeActivity(p, st) : (statusLabels[st] || st);
  document.getElementById('profileModalStatusText').textContent = act === (statusLabels[st] || st) ? '\u2014' : act;
}

function setRunLine(text, done){
  const run = document.getElementById('profileModalRun');
  document.getElementById('profileModalRunText').textContent = text;
  if(run.hidden){ run.hidden = false; requestAnimationFrame(() => run.classList.add('on')); }
  run.classList.toggle('done', !!done);
}

function typeProfileCommand(member){
  const cmdEl = document.getElementById('profileModalCmd');
  const run = document.getElementById('profileModalRun');
  const text = 'get-profile --name "' + member.name + '"';
  clearTimeout(cmdTimer);
  clearTimeout(runTimer);
  profileModal.classList.add('typing');
  run.hidden = true;
  run.classList.remove('on', 'done');
  cmdEl.textContent = '';
  if(reduceMotion){
    cmdEl.textContent = text;
    setRunLine('[ ok ] profile loaded', true);
    profileModal.classList.remove('typing');
    return;
  }
  let i = 0;
  (function step(){
    cmdEl.textContent += text.charAt(i++);
    if(i < text.length){
      const pause = Math.random() < .07 ? 150 + Math.random() * 160 : 0;
      cmdTimer = setTimeout(step, 58 + Math.random() * 44 + pause);
    }else{
      cmdTimer = setTimeout(() => {
        setRunLine('executing ' + text, false);
        runTimer = setTimeout(() => {
          setRunLine('[ ok ] profile loaded', true);
          runTimer = setTimeout(() => profileModal.classList.remove('typing'), 300);
        }, 720);
      }, 240);
    }
  })();
}

function openProfile(member){
  if(!member) return;
  hideHover();
  const slug = slugify(member.name);
  const handle = '666@' + String(member.name).toLowerCase();
  openMember = member;
  fillProfile(member);

  profileModal.querySelectorAll('.pm-user').forEach(el => { el.textContent = handle; });
  document.getElementById('profileModalPath').textContent = handle + ': ~/profiles/' + slug;
  profileModal.classList.add('typing');
  document.getElementById('profileModalCmd').textContent = '';

  const bg = backgroundValue(profileBanner(member));
  profileModal.style.setProperty('--pm-bg', bg.image || 'none');

  profileModal.classList.add('visible');
  profileModal.setAttribute('aria-hidden', 'false');
  profileBody.scrollTop = 0;
  typeProfileCommand(member);

  try{ history.pushState({ profile: slug }, '', '/' + slug); }catch(err){}

  const pm = document.getElementById('profileMusicEl');
  const musicVal = member.music || '';
  if(musicVal){
    duckSiteAudio();
    pm.src = musicVal;
    pm.volume = .5;
    pm.play().catch(() => {});
  }else{
    pm.pause();
    pm.removeAttribute('src');
  }

  viewsCountEl.textContent = '\u00b7\u00b7\u00b7';
  bumpProfileViewCount(slug).then(count => {
    if(openMember !== member) return;
    viewsCountEl.textContent = typeof count === 'number' ? count.toLocaleString() : '\u2014';
  });
}

function closeProfile(){
  if(!profileModal.classList.contains('visible')) return;
  clearTimeout(cmdTimer);
  clearTimeout(runTimer);
  const run = document.getElementById('profileModalRun');
  run.hidden = true;
  run.classList.remove('on', 'done');
  profileModal.classList.remove('typing');
  profileModal.classList.remove('visible');
  profileModal.setAttribute('aria-hidden', 'true');

  const pm = document.getElementById('profileMusicEl');
  if(!pm.paused) pm.pause();
  if(audioStarted) unduckSiteAudio();
  else startAmbientAudio();

  if(location.pathname !== '/'){
    try{ history.pushState(null, '', '/'); }catch(err){}
  }
  openMember = null;
}

document.getElementById('profileModalClose').addEventListener('click', closeProfile);
profileModal.addEventListener('click', e => { if(e.target === profileModal) closeProfile(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeProfile(); });
addEventListener('popstate', closeProfile);

const matrixCanvas = document.getElementById('matrix');
const mctx = matrixCanvas.getContext('2d');
const smokeCanvas = document.getElementById('smoke');
const sctx = smokeCanvas.getContext('2d');
const RAIN_GLYPHS = '01<>/\\|+=*:.#%';
const RAIN_COL = 22, RAIN_ROW = 14;
let mCols = [], matrixOn = false, mLast = 0;
let sParts = [], sRaf = 0, sLast = 0, sSprite = null;
let fxStarted = false;

const rainGlyph = () => RAIN_GLYPHS[(Math.random() * RAIN_GLYPHS.length) | 0];

function sizeFxCanvas(cv, ctx){
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  cv.width = Math.max(1, Math.round(innerWidth * dpr));
  cv.height = Math.max(1, Math.round(innerHeight * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function initMatrix(){
  const count = Math.ceil(innerWidth / RAIN_COL) + 1;
  mCols = Array.from({ length: count }, () => ({
    y: Math.random() * innerHeight,
    speed: 1 + Math.random() * 2.4,
    chars: Array.from({ length: 6 + ((Math.random() * 9) | 0) }, rainGlyph),
  }));
}
function drawMatrix(now){
  if(!matrixOn) return;
  requestAnimationFrame(drawMatrix);
  if(now - mLast < 33) return;
  mLast = now;
  const w = innerWidth, h = innerHeight;
  mctx.clearRect(0, 0, w, h);
  mctx.font = '12px "Cascadia Code",Consolas,"Lucida Console",monospace';
  mctx.textBaseline = 'top';
  mctx.fillStyle = '#ff4d5c';
  for(let i = 0; i < mCols.length; i++){
    const col = mCols[i], x = RAIN_COL * i + 4, trail = col.chars.length;
    const headRow = Math.floor(col.y / RAIN_ROW);
    for(let t = 0; t < trail; t++){
      mctx.globalAlpha = t ? .1 * (1 - t / trail) : .24;
      const idx = Math.abs(131 * i + 37 * (headRow - t)) % RAIN_GLYPHS.length;
      mctx.fillText(RAIN_GLYPHS.charAt(idx), x, col.y - RAIN_ROW * t);
    }
    col.y += col.speed;
    if(col.y - RAIN_ROW * trail > h){
      col.y = -200 * Math.random();
      col.speed = 1 + Math.random() * 2.4;
    }
  }
  mctx.globalAlpha = 1;
}
function startMatrix(){
  sizeFxCanvas(matrixCanvas, mctx);
  initMatrix();
  if(reduceMotion) return;
  matrixOn = true;
  mLast = 0;
  requestAnimationFrame(drawMatrix);
}
function makeSmokeSprite(){
  const s = document.createElement('canvas');
  s.width = s.height = 96;
  const c = s.getContext('2d');
  const g = c.createRadialGradient(48, 48, 0, 48, 48, 48);
  g.addColorStop(0, 'rgba(255,130,145,1)');
  g.addColorStop(.35, 'rgba(205,60,78,.55)');
  g.addColorStop(1, 'rgba(120,20,30,0)');
  c.fillStyle = g;
  c.fillRect(0, 0, 96, 96);
  return s;
}
function spawnSmoke(x, y, n){
  for(let i = 0; i < n; i++){
    sParts.push({
      x: x + (Math.random() - .5) * 18,
      y: y + (Math.random() - .5) * 18,
      vx: (Math.random() - .5) * 16,
      vy: -10 - Math.random() * 24,
      r: 9 + Math.random() * 18,
      grow: 16 + Math.random() * 28,
      a: .12 + Math.random() * .13,
      life: 0,
      ttl: .8 + Math.random() * .8,
    });
  }
  if(sParts.length > 90) sParts.splice(0, sParts.length - 90);
  if(!sRaf){ sLast = performance.now(); sRaf = requestAnimationFrame(smokeFrame); }
}
function smokeFrame(now){
  const dt = Math.min(.05, (now - sLast) / 1000 || .016);
  sLast = now;
  sctx.clearRect(0, 0, innerWidth, innerHeight);
  sctx.globalCompositeOperation = 'lighter';
  for(let i = sParts.length - 1; i >= 0; i--){
    const p = sParts[i];
    p.life += dt;
    if(p.life >= p.ttl){ sParts.splice(i, 1); continue; }
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vx *= .985;
    p.vy -= 4 * dt;
    const k = p.life / p.ttl;
    const r = p.r + p.grow * k;
    sctx.globalAlpha = Math.max(0, p.a * (1 - k));
    sctx.drawImage(sSprite, p.x - r, p.y - r, r * 2, r * 2);
  }
  sctx.globalAlpha = 1;
  if(sParts.length){
    sRaf = requestAnimationFrame(smokeFrame);
  }else{
    sRaf = 0;
    sctx.clearRect(0, 0, innerWidth, innerHeight);
  }
}
function startFx(){
  if(fxStarted) return;
  fxStarted = true;
  sizeFxCanvas(smokeCanvas, sctx);
  sSprite = makeSmokeSprite();
  startMatrix();

  addEventListener('resize', () => {
    sizeFxCanvas(smokeCanvas, sctx);
    if(matrixOn){
      sizeFxCanvas(matrixCanvas, mctx);
      initMatrix();
    }
  });
  addEventListener('pointerdown', e => {
    if(reduceMotion || e.pointerType === 'touch' || !document.body.classList.contains('in')) return;
    spawnSmoke(e.clientX, e.clientY, 7);
  }, { passive: true });
}

let entered = false;
const enterEl = document.getElementById('enter');

function revealSite(){
  document.body.classList.add('in');
  initScrollReveal();
  startFx();
  startArtEngine(bannerEl);
  startBackgroundArt();
  enterEl.classList.add('gone');
  setTimeout(() => { enterEl.style.display = 'none'; }, 700);
  if(deepLinkedProfile) setTimeout(() => openProfile(deepLinkedProfile), 1100);
}

function enterSite(){
  if(entered) return;
  entered = true;
  startAmbientAudio();
  revealSite();
}

enterEl.addEventListener('click', enterSite);
document.addEventListener('keydown', e => {
  if(!entered && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); enterSite(); }
});
rosterEl.addEventListener('click', e => {
  const btn = e.target.closest('.m');
  if(btn && document.body.classList.contains('in')) openProfile(BYID[btn.dataset.id]);
});

setTimeout(() => startArtEngine(enterArt), 140);
startPresence();
})();
