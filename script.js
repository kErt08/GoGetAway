const packages = [
  {id:1,name:"Bali Sanctuary",destination:"Bali",country:"Indonesia",region:"Indonesia",cat:"beach",rib:"hot",ribTxt:"🔥 Hot",nights:"10 Nights",pax:"2+",price:"₱97,050",basePrice:97050,img:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=82",desc:"Immerse yourself in Bali's spiritual heart — private rice terrace villas, sunrise temple ceremonies, holistic spa rituals and cooking classes that feed the soul.",chips:["🌿 Jungle Villa","🛕 Temple Tour","💆 Daily Spa","🍜 Cooking Class"]},
  {id:2,name:"Kyoto in Bloom",destination:"Kyoto",country:"Japan",region:"Japan",cat:"culture",rib:"",ribTxt:"",nights:"12 Nights",pax:"2+",price:"₱130,000",basePrice:130000,img:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=82",desc:"Walk stone paths under cherry blossoms, apprentice with a tea master, and sleep in a centuries-old ryokan. Kyoto distilled to its most magical essence.",chips:["🌸 Blossom Routes","🍵 Tea Ceremony","🏯 Ryokan Stay","🥢 Kaiseki Dining"]},
  {id:3,name:"Maldives Overwater",destination:"Maldives",country:"Maldives",region:"Maldives",cat:"beach",rib:"new",ribTxt:"✨ New",nights:"7 Nights",pax:"2",price:"₱119,000",basePrice:119000,img:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&q=82",desc:"Your private overwater bungalow floats above Earth's clearest water. Snorkel pristine reefs at dawn and dine under a dome of stars at night.",chips:["🌊 Overwater Villa","🤿 Reef Snorkel","🐬 Dolphin Cruise","🌅 Sunset Sail"]},
  {id:4,name:"Patagonia Wild",destination:"Patagonia",country:"Argentina",region:"Argentina & Chile",cat:"adventure",rib:"hot",ribTxt:"🔥 Hot",nights:"14 Nights",pax:"4+",price:"₱200,000",basePrice:200000,img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=82",desc:"Trek through UNESCO national parks, sleep under the Milky Way, and watch glaciers calve into jade-coloured lakes. Raw, magnificent Patagonia.",chips:["⛺ Luxury Glamping","🏔 Torres del Paine","🧊 Glacier Hike","🦙 Wildlife Walk"]},
  {id:5,name:"Santorini Romance",destination:"Santorini",country:"Greece",region:"Greece",cat:"romance",rib:"",ribTxt:"",nights:"8 Nights",pax:"2",price:"₱175,500",basePrice:175500,img:"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=82",desc:"Whitewashed walls, cobalt domes, and sunsets that turn the Aegean liquid gold. A private catamaran, clifftop vineyard, and candlelit dinners by the caldera.",chips:["🏛 Caldera Suite","⛵ Catamaran Day","🍇 Wine Tasting","💍 Sunset Dinner"]},
  {id:6,name:"Serengeti Migration",destination:"Serengeti",country:"Tanzania",region:"Tanzania",cat:"adventure",rib:"new",ribTxt:"✨ New",nights:"10 Nights",pax:"2+",price:"₱210,600",basePrice:210600,img:"https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=82",desc:"Witness two million wildebeest thunder across the plains. Luxury tented camps at the edge of the wild, hot-air balloon at dawn, Big Five safaris daily.",chips:["🦁 Big Five Safari","🎈 Balloon Dawn","⛺ Tented Camp","📸 Photo Safari"]},
  {id:7,name:"Machu Picchu & Beyond",destination:"Machu Picchu",country:"Peru",region:"Peru",cat:"culture",rib:"hot",ribTxt:"🔥 Hot",nights:"9 Nights",pax:"2+",price:"₱185,700",basePrice:185700,img:"https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=82",desc:"Ascend to the lost city through mist and legend. Reach the Sun Gate at sunrise before the world wakes, then explore the Sacred Valley at your own pace.",chips:["🏔 Machu Picchu","🚂 Luxury Train","🪶 Inca Trail","🏺 Sacred Valley"]},
  {id:8,name:"Northern Lights Norway",destination:"Norway",country:"Norway",region:"Norway",cat:"adventure",rib:"",ribTxt:"",nights:"7 Nights",pax:"2",price:"₱165,700",basePrice:165700,img:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&q=82",desc:"Drift off to sleep beneath dancing auroras through a glass ceiling. By day, mush a dogsled across frozen tundra and soak in remote Arctic hot springs.",chips:["🌌 Aurora Cabin","🐕 Dog Sledding","🌊 Fjord Cruise","♨️ Arctic Spa"]},
  {id:9,name:"Morocco Desert Dream",destination:"Morocco",country:"Morocco",region:"Morocco",cat:"culture",rib:"",ribTxt:"",nights:"8 Nights",pax:"2+",price:"₱127,400",basePrice:127400,img:"https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=900&q=82",desc:"Lose yourself in the ancient medinas of Fez, ride a camel into the Sahara at sunset, then fall asleep under a billion stars at a luxury desert camp.",chips:["🐪 Camel Trek","🏕 Desert Camp","🕌 Medina Tour","🫖 Hammam Ritual"]},
  {id:10,name:"Amalfi Grand Tour",destination:"Amalfi Coast",country:"Italy",region:"Italy",cat:"romance",rib:"lux",ribTxt:"👑 Luxury",nights:"14 Nights",pax:"2",price:"₱299,020",basePrice:299020,img:"https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=82",desc:"A private villa carved into the Amalfi cliff, a yacht at the dock, and a culinary journey through the finest kitchens of Southern Italy. Pure magic.",chips:["⛵ Private Yacht","🏛 Cliffside Villa","🍝 Culinary Tour","🚁 Helicopter"]},
  {id:11,name:"Borneo Rainforest",destination:"Borneo",country:"Malaysia",region:"Malaysia",cat:"adventure",rib:"new",ribTxt:"✨ New",nights:"10 Nights",pax:"4+",price:"₱121,400",basePrice:121400,img:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=900&q=82",desc:"Trek through one of Earth's oldest rainforests, encounter wild orangutans at dawn, and cruise jungle rivers to remote indigenous longhouses.",chips:["🦧 Orangutan Trek","🌿 Jungle Walk","🚣 River Cruise","🌺 Biodiversity"]},
  {id:12,name:"Tuscany Harvest",destination:"Tuscany",country:"Italy",region:"Italy",cat:"culture",rib:"",ribTxt:"",nights:"9 Nights",pax:"2+",price:"₱279,100",basePrice:279100,img:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&q=82",desc:"Arrive during harvest and help bring in the grapes at a family winery. Sleep in a farmhouse, paint the rolling hills at golden hour, truffle hunt at dawn.",chips:["🍷 Grape Harvest","🏡 Farmhouse","🎨 Art Workshop","🧀 Truffle Hunt"]}
];

const destinations = [
  {name:"Bali",searchDest:"Bali",country:"Indonesia",flag:"🇮🇩",img:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=75",pkgs:"4 packages",cat:"beach"},
  {name:"Kyoto",searchDest:"Kyoto",country:"Japan",flag:"🇯🇵",img:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=75",pkgs:"3 packages",cat:"culture"},
  {name:"Maldives",searchDest:"Maldives",country:"Maldives",flag:"🇲🇻",img:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&q=75",pkgs:"2 packages",cat:"beach"},
  {name:"Santorini",searchDest:"Santorini",country:"Greece",flag:"🇬🇷",img:"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&q=75",pkgs:"3 packages",cat:"romance"},
  {name:"Serengeti",searchDest:"Serengeti",country:"Tanzania",flag:"🇹🇿",img:"https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=75",pkgs:"2 packages",cat:"adventure"},
  {name:"Patagonia",searchDest:"Patagonia",country:"Argentina",flag:"🇦🇷",img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=75",pkgs:"2 packages",cat:"adventure"},
  {name:"Amalfi Coast",searchDest:"Amalfi Coast",country:"Italy",flag:"🇮🇹",img:"https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&q=75",pkgs:"3 packages",cat:"romance"},
  {name:"Morocco",searchDest:"Morocco",country:"Morocco",flag:"🇲🇦",img:"https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&q=75",pkgs:"2 packages",cat:"culture"},
  {name:"Norway",searchDest:"Norway",country:"Norway",flag:"🇳🇴",img:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&q=75",pkgs:"2 packages",cat:"adventure"},
  {name:"Peru",searchDest:"Machu Picchu",country:"Peru",flag:"🇵🇪",img:"https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&q=75",pkgs:"2 packages",cat:"culture"},
];

let activePackage = null;
let currentCatFilter = 'all';
let searchState = { query: '', destination: '', country: '', type: '' };

function getFilteredPackages() {
  let list = [...packages];
  if (currentCatFilter !== 'all') list = list.filter((p) => p.cat === currentCatFilter);
  if (searchState.type) list = list.filter((p) => p.cat === searchState.type);
  if (searchState.destination) list = list.filter((p) => p.destination === searchState.destination);
  if (searchState.country) list = list.filter((p) => p.country === searchState.country);
  if (searchState.query.trim()) {
    const q = searchState.query.trim().toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.region.toLowerCase().includes(q) ||
        p.destination.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q) ||
        p.cat.toLowerCase().includes(q)
    );
  }
  return list;
}

function populateSearchFilters() {
  const destSel = document.getElementById('searchDestination');
  const countrySel = document.getElementById('searchCountry');
  if (!destSel || !countrySel) return;
  const dests = [...new Set(packages.map((p) => p.destination))].sort();
  const countries = [...new Set(packages.map((p) => p.country))].sort();
  destSel.innerHTML =
    '<option value="">All destinations</option>' + dests.map((d) => `<option value="${d}">${d}</option>`).join('');
  countrySel.innerHTML =
    '<option value="">All countries</option>' + countries.map((c) => `<option value="${c}">${c}</option>`).join('');
}

function onSearchInput() {
  searchState.query = document.getElementById('searchQuery')?.value || '';
  searchState.destination = document.getElementById('searchDestination')?.value || '';
  searchState.country = document.getElementById('searchCountry')?.value || '';
  searchState.type = document.getElementById('searchType')?.value || '';
  applyPackageFilters();
}

function clearSearch() {
  searchState = { query: '', destination: '', country: '', type: '' };
  const q = document.getElementById('searchQuery');
  const d = document.getElementById('searchDestination');
  const c = document.getElementById('searchCountry');
  const t = document.getElementById('searchType');
  if (q) q.value = '';
  if (d) d.value = '';
  if (c) c.value = '';
  if (t) t.value = '';
  applyPackageFilters();
}

function applyPackageFilters() {
  renderPkgList(getFilteredPackages());
  const empty = document.getElementById('searchEmpty');
  const count = document.getElementById('searchResultCount');
  const list = getFilteredPackages();
  if (count) count.textContent = list.length ? `${list.length} package${list.length === 1 ? '' : 's'} found` : '';
  if (empty) empty.style.display = list.length ? 'none' : 'block';
}

function renderPkgs(filter='all'){
  currentCatFilter = filter;
  applyPackageFilters();
}

function renderPkgList(list){
  const grid = document.getElementById('pkgGrid');
  grid.innerHTML = list.map((p,i)=>`
    <div class="pkg-card" onclick="openModal(${p.id})" style="transition-delay:${i*0.05}s">
      <div class="tilt-shine"></div>
      <img class="pkg-img" src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="pkg-grad"></div>
      ${p.rib?`<div class="pkg-ribbon rib-${p.rib}">${p.ribTxt}</div>`:''}
      <div class="pkg-save" onclick="event.stopPropagation();this.textContent=this.textContent==='♡'?'♥':'♡';this.style.background=this.textContent==='♥'?'var(--coral)':'rgba(255,255,255,0.15)'">♡</div>
      <div class="pkg-body">
        <div class="pkg-region">${p.region}</div>
        <div class="pkg-name">${p.name}</div>
        <div class="pkg-chips">${p.chips.slice(0,3).map(c=>`<span class="chip">${c}</span>`).join('')}</div>
        <div class="pkg-bottom">
          <div class="pkg-price">from ${p.price}<small>/person</small></div>
          <button class="pkg-btn">View Trip</button>
        </div>
      </div>
    </div>
  `).join('');
  setTimeout(()=>{
    document.querySelectorAll('.pkg-card').forEach((c,i)=>{
      setTimeout(()=>c.classList.add('vis'), i*60);
    });
    initTilt();
  }, 50);
}

function renderDests(){
  document.getElementById('destScroll').innerHTML = destinations.map(d=>`
    <div class="dest-card" onclick="filterByDest('${d.cat}','${d.name}')">
      <img src="${d.img}" alt="${d.name}" loading="lazy">
      <div class="dest-grad"></div>
      <div class="dest-info">
        <span class="dest-flag">${d.flag}</span>
        <div class="dest-name">${d.name}</div>
        <div class="dest-country">${d.country}</div>
        <div class="dest-count">📦 ${d.pkgs} available</div>
      </div>
    </div>
  `).join('');
}

function filterByDest(cat, name){
  document.getElementById('packages').scrollIntoView({behavior:'smooth'});
  document.querySelectorAll('.ftab').forEach(b=>{
    if(b.textContent.toLowerCase().includes(cat)) b.click();
  });
  if (name) searchByDestination(name);
}

function filterCards(cat, btn){
  document.querySelectorAll('.ftab').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  currentCatFilter = cat;
  applyPackageFilters();
}

function searchByDestination(destName) {
  const d = document.getElementById('searchDestination');
  if (d) d.value = destName;
  onSearchInput();
  document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
}

function openModal(id){
  activePackage = packages.find(x=>x.id===id);
  const p = activePackage;
  document.getElementById('mImg').src = p.img;
  document.getElementById('mReg').textContent = p.region;
  document.getElementById('mName').textContent = p.name;
  document.getElementById('mMeta').textContent = `${p.nights} · ${p.pax} travelers`;
  document.getElementById('mDesc').textContent = p.desc;
  document.getElementById('mAmt').textContent = p.price;
  document.getElementById('mChips').innerHTML = p.chips.map(c=>`<span class="modal-chip">${c}</span>`).join('');
  document.getElementById('calcPax').value = 2;
  document.getElementById('calcNights').value = 0;
  updateCalc();
  document.getElementById('modalBack').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(e){
  if(e.target===document.getElementById('modalBack')){
    document.getElementById('modalBack').classList.remove('open');
    document.body.style.overflow='';
  }
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    document.getElementById('modalBack').classList.remove('open');
    document.getElementById('bookBack').classList.remove('open');
    document.body.style.overflow='';
  }
});

function updateCalc(){
  if(!activePackage) return;
  const pax = parseInt(document.getElementById('calcPax').value);
  const extraNights = parseInt(document.getElementById('calcNights').value);
  const nightlyRate = Math.round(activePackage.basePrice * 0.08);
  const total = (activePackage.basePrice * pax) + (extraNights * nightlyRate * pax);
  document.getElementById('calcPaxVal').textContent = pax;
  document.getElementById('calcNightsVal').textContent = `+${extraNights}`;
  document.getElementById('calcTotal').textContent = '₱' + total.toLocaleString();
  const paxSlider = document.getElementById('calcPax');
  const paxPct = ((pax - 1) / 9) * 100;
  paxSlider.style.background = `linear-gradient(to right, var(--teal) 0%, var(--teal) ${paxPct}%, var(--border) ${paxPct}%, var(--border) 100%)`;
  const nightSlider = document.getElementById('calcNights');
  const nightPct = (extraNights / 7) * 100;
  nightSlider.style.background = `linear-gradient(to right, var(--teal) 0%, var(--teal) ${nightPct}%, var(--border) ${nightPct}%, var(--border) 100%)`;
}

let bookStep_current = 1;

const SCHEDULES_KEY = 'gga_booked_schedules';

function getBookedSchedules() {
  try {
    const raw = localStorage.getItem(SCHEDULES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveBookedSchedule(entry) {
  const list = getBookedSchedules();
  list.push(entry);
  try {
    localStorage.setItem(SCHEDULES_KEY, JSON.stringify(list));
  } catch (_) {}
}

function seedDemoSchedules() {
  if (localStorage.getItem('gga_schedules_seeded')) return;
  const schedules = [];
  const today = new Date();
  packages.forEach((p) => {
    for (let i = 0; i < 2; i++) {
      const offset = 14 + ((p.id * 11 + i * 19) % 50);
      const start = new Date(today);
      start.setDate(start.getDate() + offset);
      const end = new Date(start);
      end.setDate(end.getDate() + 8);
      schedules.push({
        packageId: p.id,
        package: p.name,
        departure: start.toISOString().split('T')[0],
        returnDate: end.toISOString().split('T')[0],
        ref: 'GGA-SYSTEM',
        seeded: true
      });
    }
  });
  try {
    localStorage.setItem(SCHEDULES_KEY, JSON.stringify(schedules));
    localStorage.setItem('gga_schedules_seeded', '1');
  } catch (_) {}
}

function parseBookDate(str) {
  if (!str || str === 'TBD') return null;
  const d = new Date(str + 'T12:00:00');
  return Number.isNaN(d.getTime()) ? null : d;
}

function schedulesOverlap(depA, retA, depB, retB) {
  const a0 = parseBookDate(depA);
  const a1 = parseBookDate(retA) || a0;
  const b0 = parseBookDate(depB);
  const b1 = parseBookDate(retB) || b0;
  if (!a0 || !b0) return false;
  return a0 <= b1 && b0 <= a1;
}

function findScheduleConflict(packageId, departure, returnDate) {
  if (!packageId || !departure) return null;
  const ret = returnDate || departure;
  return (
    getBookedSchedules().find(
      (s) =>
        s.packageId === packageId &&
        schedulesOverlap(departure, ret, s.departure, s.returnDate)
    ) || null
  );
}

const bookCalState = {
  dep: { year: 0, month: 0 },
  ret: { year: 0, month: 0 }
};

function formatDateStr(year, monthIndex, day) {
  return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function isDayInTakenRange(packageId, dateStr) {
  const day = parseBookDate(dateStr);
  if (!day || !packageId) return false;
  return getBookedSchedules().some((s) => {
    if (s.packageId !== packageId) return false;
    const start = parseBookDate(s.departure);
    const end = parseBookDate(s.returnDate) || start;
    return day >= start && day <= end;
  });
}

function isPastDateStr(dateStr) {
  const day = parseBookDate(dateStr);
  if (!day) return true;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return day < today;
}

function initBookCalState() {
  const now = new Date();
  bookCalState.dep.year = now.getFullYear();
  bookCalState.dep.month = now.getMonth();
  bookCalState.ret.year = now.getFullYear();
  bookCalState.ret.month = now.getMonth();
}

function shiftBookCalMonth(type, delta) {
  const st = bookCalState[type];
  st.month += delta;
  if (st.month > 11) { st.month = 0; st.year++; }
  if (st.month < 0) { st.month = 11; st.year--; }
  renderBookCalendars();
}

function selectBookCalDay(type, dateStr) {
  if (!activePackage || isPastDateStr(dateStr)) return;
  if (isDayInTakenRange(activePackage.id, dateStr)) {
    showBookAlert('This date is already taken. Please choose a day not marked in red.');
    setBookFieldError('fieldBDate', true);
    return;
  }
  const depInput = document.getElementById('bDate');
  const retInput = document.getElementById('bReturn');
  if (type === 'dep') {
    depInput.value = dateStr;
    if (retInput.value && retInput.value < dateStr) retInput.value = '';
  } else {
    if (depInput.value && dateStr < depInput.value) {
      showBookAlert('Return date must be on or after departure.');
      setBookFieldError('fieldBReturn', true);
      return;
    }
    retInput.value = dateStr;
  }
  onBookDateChange();
  renderBookCalendars();
}

function renderBookCalendar(containerId, type) {
  const el = document.getElementById(containerId);
  if (!el || !activePackage) return;

  const st = bookCalState[type];
  const year = st.year;
  const month = st.month;
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startPad = first.getDay();
  const monthLabel = first.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  const selected = document.getElementById(type === 'dep' ? 'bDate' : 'bReturn').value;
  const depVal = document.getElementById('bDate').value;

  let cells = '';
  for (let i = 0; i < startPad; i++) cells += '<span class="book-cal-day empty"></span>';
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = formatDateStr(year, month, d);
    const taken = isDayInTakenRange(activePackage.id, dateStr);
    const past = isPastDateStr(dateStr);
    const beforeDep = type === 'ret' && depVal && dateStr < depVal;
    let cls = 'book-cal-day';
    if (taken) cls += ' taken';
    else if (past || beforeDep) cls += ' disabled';
    else cls += ' available';
    if (dateStr === selected) cls += ' selected';
    const disabled = taken || past || beforeDep;
    cells += `<button type="button" class="${cls}" ${disabled ? 'disabled' : ''} data-date="${dateStr}" onclick="selectBookCalDay('${type}','${dateStr}')">${d}</button>`;
  }

  el.innerHTML = `
    <div class="book-cal-head">
      <button type="button" class="book-cal-nav" onclick="shiftBookCalMonth('${type}',-1)" aria-label="Previous month">‹</button>
      <span class="book-cal-title">${monthLabel}</span>
      <button type="button" class="book-cal-nav" onclick="shiftBookCalMonth('${type}',1)" aria-label="Next month">›</button>
    </div>
    <div class="book-cal-weekdays"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div>
    <div class="book-cal-grid">${cells}</div>
  `;
}

function renderBookCalendars() {
  renderBookCalendar('bookCalDep', 'dep');
  renderBookCalendar('bookCalRet', 'ret');
  const dep = document.getElementById('bDate').value;
  const ret = document.getElementById('bReturn').value;
  const depDisp = document.getElementById('bDateDisplay');
  const retDisp = document.getElementById('bReturnDisplay');
  if (depDisp) {
    depDisp.textContent = dep
      ? new Date(dep + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
      : 'Tap an available day below';
  }
  if (retDisp) {
    retDisp.textContent = ret
      ? new Date(ret + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
      : 'Tap an available day below';
  }
}

function suggestNextAvailableDate(packageId, fromDateStr) {
  const start = parseBookDate(fromDateStr) || new Date();
  for (let i = 0; i < 120; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const dep = d.toISOString().split('T')[0];
    const end = new Date(d);
    end.setDate(end.getDate() + 7);
    const ret = end.toISOString().split('T')[0];
    if (!findScheduleConflict(packageId, dep, ret)) return dep;
  }
  return null;
}

function showBookAlert(message) {
  const el = document.getElementById('bookAlert');
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
}

function clearBookAlert() {
  const el = document.getElementById('bookAlert');
  if (el) {
    el.textContent = '';
    el.hidden = true;
  }
}

function setBookFieldError(fieldId, hasError) {
  document.getElementById(fieldId)?.classList.toggle('has-error', !!hasError);
}

function clearBookFieldErrors() {
  ['fieldBDate', 'fieldBReturn', 'fieldBCity', 'fieldBEmail', 'fieldBPhone'].forEach((id) =>
    setBookFieldError(id, false)
  );
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateScheduleAvailability() {
  if (!activePackage) return false;
  const departure = document.getElementById('bDate').value;
  const returnDate = document.getElementById('bReturn').value || departure;
  const conflict = findScheduleConflict(activePackage.id, departure, returnDate);

  if (!conflict) {
    setBookFieldError('fieldBDate', false);
    return true;
  }

  const next = suggestNextAvailableDate(activePackage.id, departure);
  const msg = next
    ? `This schedule is already taken for ${activePackage.name}. Next available departure: ${next}.`
    : `This schedule is already taken for ${activePackage.name}. Please choose different dates.`;

  showBookAlert(msg);
  setBookFieldError('fieldBDate', true);
  updateBookDateHint();
  return false;
}

function updateBookDateHint() {
  const hint = document.getElementById('bookDateHint');
  if (!hint || !activePackage) return;

  const departure = document.getElementById('bDate').value;
  if (!departure) {
    hint.textContent = '';
    hint.className = 'book-field-hint';
    return;
  }

  const returnDate = document.getElementById('bReturn').value || departure;
  const dep = parseBookDate(departure);
  const ret = parseBookDate(returnDate);

  if (ret && dep && ret < dep) {
    hint.textContent = 'Return date must be on or after departure.';
    hint.className = 'book-field-hint error';
    setBookFieldError('fieldBReturn', true);
    return;
  }
  setBookFieldError('fieldBReturn', false);

  const conflict = findScheduleConflict(activePackage.id, departure, returnDate);
  if (conflict) {
    const next = suggestNextAvailableDate(activePackage.id, departure);
    hint.textContent = next
      ? `Unavailable — already booked. Try ${next}.`
      : 'Unavailable — this schedule is already taken.';
    hint.className = 'book-field-hint error';
    setBookFieldError('fieldBDate', true);
    return;
  }

  hint.textContent = '✓ This schedule is available';
  hint.className = 'book-field-hint ok';
  setBookFieldError('fieldBDate', false);
}

function onBookDateChange() {
  clearBookAlert();
  updateBookDateHint();
  renderBookCalendars();
}

function validateStep1() {
  clearBookAlert();
  clearBookFieldErrors();
  let ok = true;

  const departure = document.getElementById('bDate').value;
  const returnDate = document.getElementById('bReturn').value;
  const city = document.getElementById('bCity').value;

  if (!departure) {
    showBookAlert('Please select a departure date.');
    setBookFieldError('fieldBDate', true);
    ok = false;
  }

  if (departure && returnDate) {
    const dep = parseBookDate(departure);
    const ret = parseBookDate(returnDate);
    if (ret && dep && ret < dep) {
      showBookAlert('Return date must be on or after the departure date.');
      setBookFieldError('fieldBReturn', true);
      ok = false;
    }
  }

  if (!city) {
    if (ok) showBookAlert('Please select a departure city.');
    setBookFieldError('fieldBCity', true);
    ok = false;
  }

  if (ok && departure && !validateScheduleAvailability()) ok = false;

  return ok;
}

function validateStep2() {
  clearBookAlert();
  clearBookFieldErrors();
  let ok = true;

  const name = (document.getElementById('bName').value || '').trim();
  const email = (document.getElementById('bEmail').value || '').trim();
  const phone = (document.getElementById('bPhone').value || '').trim();

  if (!name) {
    showBookAlert('Please enter the lead traveler’s full name.');
    ok = false;
  }

  if (!email) {
    if (ok) showBookAlert('Please enter a valid email address.');
    setBookFieldError('fieldBEmail', true);
    ok = false;
  } else if (!isValidEmail(email)) {
    showBookAlert('Please enter a valid email address.');
    setBookFieldError('fieldBEmail', true);
    ok = false;
  }

  if (phone && phone.replace(/\D/g, '').length < 10) {
    showBookAlert('Please enter a valid phone number (at least 10 digits).');
    setBookFieldError('fieldBPhone', true);
    ok = false;
  }

  return ok;
}

function tryBookStep(n) {
  if (n === 2 && !validateStep1()) return;
  if (n === 3 && !validateStep2()) return;
  bookStep(n);
}

window.GGABooking = {
  getBookedSchedules,
  findScheduleConflict,
  suggestNextAvailableDate
};

function openBooking(){
  if(!activePackage) return;
  seedDemoSchedules();
  document.getElementById('bookDest').textContent = activePackage.region;
  document.getElementById('bookTitle').textContent = activePackage.name;
  document.getElementById('bDate').value = '';
  document.getElementById('bReturn').value = '';
  initBookCalState();
  clearBookAlert();
  clearBookFieldErrors();
  const hint = document.getElementById('bookDateHint');
  if (hint) { hint.textContent = ''; hint.className = 'book-field-hint'; }
  renderBookCalendars();
  bookStep(1);
  document.getElementById('bookSuccess').style.display = 'none';
  document.querySelectorAll('.book-panel').forEach(p=>p.style.display='');
  document.querySelector('.book-steps').style.display='';
  document.getElementById('bookBack').classList.add('open');
}
function closeBooking(){
  document.getElementById('bookBack').classList.remove('open');
}
function bookStep(n){
  bookStep_current = n;
  document.querySelectorAll('.book-panel').forEach((p,i)=>{
    p.classList.toggle('active', i+1===n);
  });
  ['stab1','stab2','stab3'].forEach((id,i)=>{
    const tab = document.getElementById(id);
    tab.classList.remove('active','done');
    if(i+1 === n) tab.classList.add('active');
    else if(i+1 < n) tab.classList.add('done');
  });
  if(n===3) updateBookSummary();
}
function updateBookSummary(){
  if(!activePackage) return;
  const adults = parseInt(document.getElementById('bAdults').value)||1;
  const kids = parseInt(document.getElementById('bKids').value)||0;
  const date = document.getElementById('bDate').value || 'TBD';
  const ret = document.getElementById('bReturn').value || 'TBD';
  const type = document.getElementById('bType').value || 'All-Inclusive';
  const total = activePackage.basePrice * (adults + kids * 0.7);
  document.getElementById('bookSummary').innerHTML = `
    <div class="book-summary-row"><span>Package</span><span>${activePackage.name}</span></div>
    <div class="book-summary-row"><span>Travel Type</span><span>${type}</span></div>
    <div class="book-summary-row"><span>Departure</span><span>${date}</span></div>
    <div class="book-summary-row"><span>Return</span><span>${ret}</span></div>
    <div class="book-summary-row"><span>Adults × ${adults}</span><span>₱${(activePackage.basePrice*adults).toLocaleString()}</span></div>
    ${kids>0?`<div class="book-summary-row"><span>Children × ${kids}</span><span>₱${Math.round(activePackage.basePrice*kids*0.7).toLocaleString()}</span></div>`:''}
    <div class="book-summary-row"><span>Total Estimate</span><span>₱${Math.round(total).toLocaleString()}</span></div>
  `;
}
function generateBookingRef() {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 5).toUpperCase();
  return 'GGA-' + ts.slice(-4) + rand;
}

function submitBooking(){
  if (!validateStep1() || !validateStep2()) {
    if (!document.getElementById('bDate').value || !document.getElementById('bCity').value) bookStep(1);
    else bookStep(2);
    return;
  }

  const email = (document.getElementById('bEmail').value || '').trim();
  const name = (document.getElementById('bName').value || '').trim();
  const departure = document.getElementById('bDate').value;
  const returnDate = document.getElementById('bReturn').value || departure;

  const ref = generateBookingRef();
  const booking = {
    ref,
    packageId: activePackage?.id,
    package: activePackage?.name || 'Package',
    region: activePackage?.region || '',
    departure,
    returnDate,
    adults: parseInt(document.getElementById('bAdults').value, 10) || 1,
    children: parseInt(document.getElementById('bKids').value, 10) || 0,
    email,
    name,
    phone: document.getElementById('bPhone').value || '',
    travelType: document.getElementById('bType').value || '',
    notes: document.getElementById('bNotes').value || '',
    status: 'pending_confirmation',
    createdAt: new Date().toISOString()
  };

  saveBookedSchedule({
    packageId: activePackage.id,
    package: activePackage.name,
    departure,
    returnDate,
    ref
  });

  try { sessionStorage.setItem('gga_last_booking', JSON.stringify(booking)); } catch (_) {}
  window.dispatchEvent(new CustomEvent('gga-booking-updated', { detail: booking }));

  document.querySelectorAll('.book-panel').forEach(p=>p.style.display='none');
  document.querySelector('.book-steps').style.display='none';
  document.getElementById('bookSuccess').style.display='block';

  const refEl = document.getElementById('bookRefDisplay');
  const noteEl = document.getElementById('bookConfirmNote');
  if (refEl) refEl.textContent = ref;
  if (noteEl) {
    noteEl.innerHTML = `Save reference <strong>${ref}</strong>. Our team will reach you at <strong>${email}</strong> within 2 hours.`;
  }
}

function copyBookingRef() {
  const ref = document.getElementById('bookRefDisplay')?.textContent;
  if (!ref) return;
  navigator.clipboard?.writeText(ref).then(() => {
    const btn = document.getElementById('copyRefBtn');
    if (btn) { btn.textContent = 'Copied!'; setTimeout(() => { btn.textContent = 'Copy'; }, 2000); }
  });
}

function initTilt(){
  document.querySelectorAll('.pkg-card').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const cx = r.width / 2;
      const cy = r.height / 2;
      const rotX = ((y - cy) / cy) * -10;
      const rotY = ((x - cx) / cx) * 10;
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
      card.style.transition = 'transform 0.1s ease, box-shadow 0.4s';
      const shine = card.querySelector('.tilt-shine');
      if(shine){
        const px = (x/r.width)*100;
        const py = (y/r.height)*100;
        shine.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.18) 0%, transparent 55%)`;
      }
    });
    card.addEventListener('mouseleave', ()=>{
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      card.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s';
    });
  });
}

function initParticles(canvasId, parentEl){
  const canvas = document.getElementById(canvasId);
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize(){
    W = canvas.width = parentEl.offsetWidth;
    H = canvas.height = parentEl.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  const N = 55;
  for(let i=0;i<N;i++){
    particles.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-0.5)*0.4,vy:(Math.random()-0.5)*0.4,r:Math.random()*2+1,a:Math.random()*0.6+0.2});
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<120){ctx.beginPath();ctx.strokeStyle=`rgba(0,180,166,${0.18*(1-dist/120)})`;ctx.lineWidth=1;ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.stroke();}
      }
    }
    particles.forEach(p=>{
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,180,166,${p.a})`;ctx.fill();
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W) p.vx*=-1;
      if(p.y<0||p.y>H) p.vy*=-1;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

let tPos=0;
function slideTesti(dir){
  const track = document.getElementById('testTrack');
  const total = track.children.length;
  const vis = window.innerWidth < 640 ? 1 : window.innerWidth < 900 ? 1 : 3;
  const max = Math.max(0, total - vis);
  tPos = Math.max(0, Math.min(tPos + dir, max));
  const cardEl = track.children[0];
  const gap = 24;
  const w = cardEl.offsetWidth + gap;
  track.style.transform = `translateX(-${tPos * w}px)`;
}

window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('stuck', window.scrollY>60);
});

const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('in')});
},{threshold:0.08});
document.querySelectorAll('.rev').forEach(el=>obs.observe(el));

window.addEventListener('load',()=>{
  setTimeout(()=>document.getElementById('loader').classList.add('gone'), 2600);
});

const heroDestinations = [
  { name:'Bali, Indonesia',   sub:'Tropical Paradise',  img:0 },
  { name:'Swiss Alps',        sub:'Mountain Majesty',   img:1 },
  { name:'Maldives',          sub:'Crystal Waters',     img:2 },
  { name:'Kyoto, Japan',      sub:'Ancient Culture',    img:3 },
  { name:'Santorini, Greece', sub:'Mediterranean Dream',img:4 },
];
let currentDest = 0;
let destTimer = null;

const skyFrames = [
  [0,    '#0a0a2e','#1a1a4e', 'rgba(5,5,30,0.72)',    0.72],
  [300,  '#0d1b3e','#1c2d5e', 'rgba(10,20,50,0.65)',  0.65],
  [330,  '#1a1040','#3d1c5a', 'rgba(25,15,55,0.55)',  0.55],
  [360,  '#4a1942','#b05a30', 'rgba(60,20,50,0.40)',  0.40],
  [390,  '#e8612a','#ffa040', 'rgba(180,60,20,0.25)', 0.25],
  [420,  '#f4a94e','#ffd580', 'rgba(200,120,30,0.15)',0.15],
  [480,  '#5baef0','#a8d8f8', 'rgba(30,80,150,0.10)', 0.10],
  [720,  '#1a7edc','#6ec6ff', 'rgba(10,60,130,0.08)', 0.08],
  [900,  '#1568c8','#5ab8f8', 'rgba(10,50,120,0.10)', 0.10],
  [1020, '#f4a030','#ffcc60', 'rgba(180,90,10,0.18)', 0.18],
  [1050, '#e85020','#ff8040', 'rgba(160,50,10,0.30)', 0.30],
  [1080, '#9b2060','#e05030', 'rgba(100,20,50,0.45)', 0.45],
  [1110, '#3a1060','#6a2080', 'rgba(40,10,60,0.55)',  0.55],
  [1140, '#150a38','#2a1050', 'rgba(15,8,40,0.65)',   0.65],
  [1200, '#0a0820','#18103c', 'rgba(5,5,25,0.70)',    0.70],
  [1440, '#0a0a2e','#1a1a4e', 'rgba(5,5,30,0.72)',    0.72],
];

function hexToRgb(hex){
  const r=parseInt(hex.slice(1,3),16);
  const g=parseInt(hex.slice(3,5),16);
  const b=parseInt(hex.slice(5,7),16);
  return [r,g,b];
}
function lerpHex(h1,h2,t){
  const [r1,g1,b1]=hexToRgb(h1),[r2,g2,b2]=hexToRgb(h2);
  return `rgb(${Math.round(r1+(r2-r1)*t)},${Math.round(g1+(g2-g1)*t)},${Math.round(b1+(b2-b1)*t)})`;
}
function lerpRgba(c1,c2,t){
  const parse=c=>{const m=c.match(/[\d.]+/g).map(Number);return m;};
  const p1=parse(c1),p2=parse(c2);
  return `rgba(${Math.round(p1[0]+(p2[0]-p1[0])*t)},${Math.round(p1[1]+(p2[1]-p1[1])*t)},${Math.round(p1[2]+(p2[2]-p1[2])*t)},${(p1[3]+(p2[3]-p1[3])*t).toFixed(3)})`;
}

function getSkyAt(minutes){
  let i=0;
  for(let k=0;k<skyFrames.length-1;k++){
    if(minutes>=skyFrames[k][0] && minutes<skyFrames[k+1][0]){i=k;break;}
  }
  const f1=skyFrames[i],f2=skyFrames[i+1];
  const t=(minutes-f1[0])/(f2[0]-f1[0]);
  return {
    top:   lerpHex(f1[1],f2[1],t),
    bottom:lerpHex(f1[2],f2[2],t),
    overlay:lerpRgba(f1[3],f2[3],t),
    overlayOpacity: f1[4]+(f2[4]-f1[4])*t,
    nightness: minutes<300||minutes>1140 ? 1 :
               minutes<390 ? 1-(minutes-300)/90 :
               minutes>1050 ? (minutes-1050)/90 : 0,
    sunY: (()=>{const noon=720,span=480;const ang=((minutes-noon)/span)*Math.PI;return Math.sin(ang);})(),
    isDay: minutes>360 && minutes<1110,
  };
}

function drawSky(sky){
  const canvas=document.getElementById('skyCanvas');
  if(!canvas) return;
  const ctx=canvas.getContext('2d');
  canvas.width=canvas.offsetWidth;
  canvas.height=canvas.offsetHeight;
  const W=canvas.width,H=canvas.height;
  const grad=ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,sky.top);
  grad.addColorStop(1,sky.bottom);
  ctx.fillStyle=grad;
  ctx.fillRect(0,0,W,H);
  if(sky.isDay && sky.nightness<0.5){
    const alpha=(1-sky.nightness*2)*0.4;
    ctx.fillStyle=`rgba(255,255,255,${alpha})`;
    [[W*0.3,H*0.18,120,40],[W*0.6,H*0.12,180,55],[W*0.12,H*0.22,90,30],[W*0.75,H*0.25,140,45]].forEach(([cx,cy,w,h])=>{
      ctx.beginPath();ctx.ellipse(cx,cy,w,h,0,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(cx-w*0.3,cy+h*0.2,w*0.7,h*0.8,0,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(cx+w*0.3,cy+h*0.2,w*0.6,h*0.75,0,0,Math.PI*2);ctx.fill();
    });
  }
}

let stars=[];
function initStars(){
  const canvas=document.getElementById('starsCanvas');
  if(!canvas) return;
  stars=[];
  for(let i=0;i<180;i++){
    stars.push({x:Math.random(),y:Math.random()*0.7,r:Math.random()*1.5+0.3,twinkle:Math.random()*Math.PI*2,speed:Math.random()*0.04+0.01});
  }
}

function drawStars(nightness,time){
  const canvas=document.getElementById('starsCanvas');
  if(!canvas||nightness<0.01) return;
  const ctx=canvas.getContext('2d');
  canvas.width=canvas.offsetWidth;canvas.height=canvas.offsetHeight;
  const W=canvas.width,H=canvas.height;
  ctx.clearRect(0,0,W,H);
  stars.forEach(s=>{
    s.twinkle+=s.speed;
    const alpha=nightness*(0.5+Math.sin(s.twinkle)*0.4);
    ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,255,255,${alpha.toFixed(3)})`;ctx.fill();
  });
  if(nightness>0.7 && Math.random()<0.003){
    const sx=Math.random()*W,sy=Math.random()*(H*0.4);
    const len=80+Math.random()*120;
    const shootGrad=ctx.createLinearGradient(sx,sy,sx+len,sy+len*0.5);
    shootGrad.addColorStop(0,'rgba(255,255,255,0)');
    shootGrad.addColorStop(0.4,'rgba(255,255,255,0.8)');
    shootGrad.addColorStop(1,'rgba(255,255,255,0)');
    ctx.beginPath();ctx.strokeStyle=shootGrad;ctx.lineWidth=1.5;
    ctx.moveTo(sx,sy);ctx.lineTo(sx+len,sy+len*0.5);ctx.stroke();
  }
}

function positionOrbs(sky, minutes){
  const heroEl = document.getElementById('heroSection');
  const heroH = heroEl.offsetHeight;
  const heroW = heroEl.offsetWidth;

  
  
  const ORB_MAX_Y_FRAC = 0.72; 

  const sunEl = document.getElementById('sunOrb');
  const moonEl = document.getElementById('moonOrb');

  const noon=720, sunSpan=380;
  const sunAngle = ((minutes - noon) / sunSpan) * Math.PI;
  const sunX = heroW * (0.5 + Math.cos(sunAngle) * 0.38);
  const sunYfrac = Math.min(0.75 - Math.sin(sunAngle) * 0.55, ORB_MAX_Y_FRAC);
  const sunVisible = minutes > 350 && minutes < 1130;
  const sunAlpha = sunVisible ? Math.min(1, Math.min((minutes-350)/40, (1130-minutes)/40)) : 0;

  sunEl.style.left = sunX + 'px';
  sunEl.style.top = (sunYfrac * heroH) + 'px';
  sunEl.style.transform = 'translate(-50%,-50%)';
  sunEl.style.opacity = sunAlpha;

  const goldenHour = (minutes > 390 && minutes < 470) || (minutes > 1010 && minutes < 1090);
  sunEl.style.width = sunEl.style.height = goldenHour ? '110px' : '90px';

  const moonAngle = sunAngle + Math.PI;
  const moonX = heroW * (0.5 + Math.cos(moonAngle) * 0.38);
  const moonYfrac = Math.min(0.75 - Math.sin(moonAngle) * 0.55, ORB_MAX_Y_FRAC);
  const moonVisible = minutes < 390 || minutes > 1080;
  const moonAlpha = moonVisible ? Math.min(1, sky.nightness) : 0;

  moonEl.style.left = moonX + 'px';
  moonEl.style.top = (moonYfrac * heroH) + 'px';
  moonEl.style.transform = 'translate(-50%,-50%)';
  moonEl.style.opacity = moonAlpha;
}

function getTimeLabel(minutes){
  const h = Math.floor(minutes/60) % 24;
  const m = minutes % 60;
  const ampm = h < 12 ? 'AM' : 'PM';
  const hh = h % 12 || 12;
  return `${hh}:${m.toString().padStart(2,'0')} ${ampm}`;
}

function onTodChange(val){
  const minutes = parseInt(val);
  const sky = getSkyAt(minutes);
  drawSky(sky);
  const starsCanvas = document.getElementById('starsCanvas');
  starsCanvas.style.opacity = sky.nightness;
  if(sky.nightness > 0.01) drawStars(sky.nightness, minutes);
  document.getElementById('heroTimeOverlay').style.background = sky.overlay;
  document.getElementById('heroSideFade').style.background =
    `linear-gradient(to right, ${sky.bottom} 0%, ${sky.bottom} 30%, rgba(0,0,0,0) 100%)`;
  document.getElementById('heroDots').style.opacity = sky.nightness * 0.6;
  positionOrbs(sky, minutes);
  document.getElementById('todTimeDisplay').textContent = getTimeLabel(minutes);
  const thumb_color = sky.isDay ? 'rgba(255,200,50,0.9)' : 'rgba(150,170,255,0.9)';
  document.getElementById('todRange').style.setProperty('--thumb-color', thumb_color);
  const brightness = 0.3 + (1 - sky.nightness) * 0.5 + (sky.isDay ? 0.15 : 0);
  document.querySelectorAll('.hero-dest-layer').forEach(img => {
    img.style.filter = `brightness(${brightness}) saturate(${sky.isDay ? 1.1 : 0.6})`;
  });
}

function switchDest(idx){
  currentDest = (idx + heroDestinations.length) % heroDestinations.length;
  const dest = heroDestinations[currentDest];
  document.querySelectorAll('.hero-dest-layer').forEach((el,i)=>{
    el.style.opacity = i === currentDest ? '1' : '0';
  });
  document.getElementById('heroDestName').textContent = dest.name;
  document.getElementById('heroDestSub').textContent = dest.sub;
  document.querySelectorAll('.dest-dot').forEach((d,i)=>{
    d.classList.toggle('active', i===currentDest);
  });
  clearTimeout(destTimer);
  destTimer = setTimeout(()=>switchDest(currentDest+1), 6000);
}

function initDestDots(){
  const nav = document.getElementById('destDotNav');
  heroDestinations.forEach((_,i)=>{
    const d = document.createElement('div');
    d.className = 'dest-dot' + (i===0?' active':'');
    d.onclick = ()=>switchDest(i);
    nav.appendChild(d);
  });
}

function initSkySystem(){
  const hero = document.getElementById('heroSection');
  ['skyCanvas','starsCanvas'].forEach(id=>{
    const c=document.getElementById(id);
    c.width=hero.offsetWidth;c.height=hero.offsetHeight;
  });
  initStars();
  initDestDots();
  onTodChange(720);
  destTimer = setTimeout(()=>switchDest(1), 6000);
  window.addEventListener('resize',()=>{
    ['skyCanvas','starsCanvas'].forEach(id=>{
      const c=document.getElementById(id);
      c.width=hero.offsetWidth;c.height=hero.offsetHeight;
    });
    onTodChange(parseInt(document.getElementById('todRange').value));
  });
}

window.addEventListener('load',()=>{
  setTimeout(initSkySystem, 2700);
});

seedDemoSchedules();
populateSearchFilters();
renderPkgs();
renderDests();
setTimeout(()=>{
  initParticles('destParticles', document.querySelector('.dest-sec'));
  initParticles('ctaParticles', document.querySelector('.cta-sec'));
}, 500);

function toggleMobileNav(){
  const nav = document.getElementById('mobileNav');
  const btn = document.getElementById('navHamburger');
  if(nav.classList.contains('open')){ closeMobileNav(); }
  else {
    nav.classList.add('open');
    btn.classList.add('open');
    document.body.style.overflow='hidden';
  }
}
function closeMobileNav(){
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('navHamburger').classList.remove('open');
  document.body.style.overflow='';
}

function setVH(){
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh',''+vh+'px');
}
setVH();
window.addEventListener('resize', setVH);