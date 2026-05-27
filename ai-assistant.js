/**
 * GoGetAway AI Travel Assistant
 * Answers booking, pricing, availability, and travel questions using live package data.
 */
(function () {
  const POLICY = {
    hours: 'Monday–Sunday, 8:00 AM – 10:00 PM (Philippine Time). AI chat is available 24/7.',
    supportEmail: 'hello@gogetaway.travel',
    supportPhone: '+63 2 8123 4567',
    holdHours: 48,
    cancelFreeDays: 30,
    refundDays: '7–14 business days',
    payments: ['Credit / debit card (Visa, Mastercard)', 'GCash', 'Maya', 'Bank transfer (BDO, BPI)', 'Installment plans (3–6 months on select packages)'],
    office: 'GoGetAway Travel Hub, BGC, Taguig City, Metro Manila'
  };

  const QUICK_TOPICS = [
    { label: 'Available tomorrow?', q: 'Is there an available slot tomorrow?' },
    { label: 'Package prices', q: 'How much does it cost?' },
    { label: 'What to book with', q: 'What information do I need to book?' },
    { label: 'Operating hours', q: 'What are your operating hours?' },
    { label: 'Cancel & refund', q: 'What is your cancellation policy?' },
    { label: 'Best value trip', q: 'Which package is most affordable?' }
  ];

  const INTENTS = [
    { id: 'greeting', patterns: [/^(hi|hello|hey|good\s*(morning|afternoon|evening)|kumusta|help)\b/i, /^what can you do/i] },
    { id: 'availability', patterns: [/availab|slot|room|appointment|open\s*date|fully\s*book|tomorrow|next\s*week|3\s*pm|departure\s*date/i] },
    { id: 'pricing', patterns: [/price|cost|how\s*much|fee|charge|discount|promo|cheap|afford|budget|payment\s*plan/i] },
    { id: 'booking_info', patterns: [/what\s*(do\s*i\s*)?need\s*to\s*book|book\s*for\s*multiple|group\s*book|reservation\s*valid|how\s*long.*valid|documents|passport/i] },
    { id: 'schedule', patterns: [/operating\s*hour|business\s*hour|open\s*time|reschedule|change\s*date|fully\s*booked|calendar/i] },
    { id: 'cancellation', patterns: [/cancel|refund|cancellation\s*policy/i] },
    { id: 'status', patterns: [/confirm|booking\s*ref|reference|reservation\s*status|my\s*booking|track|status/i] },
    { id: 'payment', patterns: [/payment\s*method|pay\s*online|did\s*my\s*payment|installment|gcash|maya|card/i] },
    { id: 'location', patterns: [/where\s*(is|are)|location|venue|get\s*there|direction|included|what\s*services|what's\s*included/i] },
    { id: 'account', patterns: [/account|password|sign\s*up|register|log\s*in|contact\s*support|support/i] },
    { id: 'recommend', patterns: [/recommend|best\s*(available\s*)?option|most\s*afford|less\s*crowd|popular|suggest|which\s*package|top\s*pick/i] },
    { id: 'insurance', patterns: [/insurance|visa|travel\s*doc/i] },
    { id: 'compare', patterns: [/compare|difference\s*between|vs\b|beach\s*or|adventure\s*or/i] }
  ];

  let chatOpen = false;
  let typing = false;

  function getPackages() {
    return typeof packages !== 'undefined' ? packages : [];
  }

  function getLastBooking() {
    try {
      const raw = sessionStorage.getItem('gga_last_booking');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function formatPrice(n) {
    return '₱' + Number(n).toLocaleString();
  }

  function tomorrowStr() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }

  function hashDay(dateStr) {
    let h = 0;
    for (let i = 0; i < dateStr.length; i++) h = (h * 31 + dateStr.charCodeAt(i)) | 0;
    return Math.abs(h);
  }

  function slotsForDate(dateStr) {
    const h = hashDay(dateStr);
    const count = 2 + (h % 5);
    const pkgs = getPackages();
    const shuffled = [...pkgs].sort((a, b) => hashDay(dateStr + a.id) - hashDay(dateStr + b.id));
    return shuffled.slice(0, count);
  }

  function cheapestPackage() {
    return getPackages().reduce((a, b) => (a.basePrice < b.basePrice ? a : b));
  }

  function findPackageInText(text) {
    const lower = text.toLowerCase();
    return getPackages().find((p) => lower.includes(p.name.toLowerCase()) || lower.includes(p.region.toLowerCase()));
  }

  function matchIntent(text) {
    const t = text.trim();
    for (const intent of INTENTS) {
      if (intent.patterns.some((re) => re.test(t))) return intent.id;
    }
    return 'fallback';
  }

  function respondGreeting() {
    const n = getPackages().length;
    return (
      `Hello! I'm **GoGetAway AI**, your travel assistant. I can help with:\n\n` +
      `• **Availability** — dates & packages open for booking\n` +
      `• **Pricing** — costs, fees & discounts\n` +
      `• **Booking** — what you need & group trips\n` +
      `• **Policies** — hours, cancellation & refunds\n` +
      `• **Payments** — methods & online pay\n` +
      `• **Recommendations** — best value & less-busy seasons\n\n` +
      `We have **${n} curated packages** ready. Tap a suggestion below or ask anything!`
    );
  }

  function respondAvailability(text) {
    const pkgs = getPackages();
    const tomorrow = tomorrowStr();
    const tomorrowSlots = slotsForDate(tomorrow);
    const mentioned = findPackageInText(text);

    if (/room/i.test(text)) {
      return (
        `For GoGetAway, "rooms" means **accommodation tiers** within each package (e.g. villa, ryokan, overwater bungalow)—not hotel rooms you book separately.\n\n` +
        `**Currently bookable packages:**\n` +
        pkgs.map((p) => `• **${p.name}** (${p.region}) — ${p.nights}`).join('\n') +
        `\n\nAll include curated lodging. Want details on a specific trip? Name the destination.`
      );
    }

    if (/3\s*pm|appointment|time/i.test(text)) {
      return (
        `Consultation slots today: **10:00 AM, 2:00 PM, 3:00 PM, and 6:00 PM** (PHT).\n\n` +
        `The **3:00 PM** slot is ${hashDay(new Date().toDateString()) % 3 === 0 ? '**available** — I can note your interest, or call ' + POLICY.supportPhone : '**fully booked** — next opening is 6:00 PM'}.\n\n` +
        `Package departures aren't tied to clock times; choose any **departure date** at least 14 days ahead when booking online.`
      );
    }

    if (/tomorrow/i.test(text)) {
      const checkPkg = mentioned || pkgs[0];
      if (window.GGABooking && checkPkg) {
        const conflict = window.GGABooking.findScheduleConflict(checkPkg.id, tomorrow, tomorrow);
        if (conflict) {
          const next = window.GGABooking.suggestNextAvailableDate(checkPkg.id, tomorrow);
          return (
            `**Tomorrow (${tomorrow})** for **${checkPkg.name}**: **Already taken.**\n\n` +
            (next ? `Next available departure: **${next}**.` : 'Please try another date.') +
            `\n\nStart a booking on the site to see live availability as you pick dates.`
          );
        }
      }
      const names = tomorrowSlots.map((p) => `**${p.name}** (${p.price}/person)`).join(', ');
      return (
        `**Tomorrow (${tomorrow}):** Available for several packages, e.g. ${names.split(',').slice(0, 2).join(',')}.\n\n` +
        `Open **Book Now** and pick your dates — the form checks if a schedule is already taken.`
      );
    }

    if (mentioned && /taken|already booked|available|slot/i.test(text) && window.GGABooking) {
      const dep = tomorrowStr();
      const conflict = window.GGABooking.findScheduleConflict(mentioned.id, dep, dep);
      if (conflict) {
        const next = window.GGABooking.suggestNextAvailableDate(mentioned.id, dep);
        return `**${mentioned.name}** on **${dep}**: schedule is **already taken**.` + (next ? ` Try **${next}** instead.` : '');
      }
      return `**${mentioned.name}** looks **available** for upcoming dates. Book on the site — dates turn red if already taken.`;
    }

    if (/fully\s*book|sold\s*out/i.test(text)) {
      const busy = pkgs.filter((p) => hashDay('busy' + p.id) % 4 === 0).map((p) => p.name);
      return (
        `**High-demand dates (limited seats):**\n• Peak: Dec 20 – Jan 5, Holy Week, summer (Apr–May)\n• Packages often filling fast: ${busy.join(', ')}\n\n` +
        `**Good availability** right now on most packages 3+ weeks out. Ask *"available tomorrow"* or name a package for a specific check.`
      );
    }

    const pkgList = (mentioned ? [mentioned] : pkgs.slice(0, 5))
      .map((p) => `• **${p.name}** — from ${p.price}/person · ${p.nights}`)
      .join('\n');

    return (
      `**Availability overview**\n\n${pkgList}\n\n` +
      `**${pkgs.length} packages** across beach, adventure, culture & romance. ` +
      `Tomorrow (${tomorrow}): **${slotsForDate(tomorrow).length} packages** have open departure windows.\n\n` +
      `Need a specific date? Tell me e.g. *"Bali in June"* or start a booking from any package card.`
    );
  }

  function respondPricing(text) {
    const pkgs = getPackages();
    const mentioned = findPackageInText(text);

    if (/discount|promo/i.test(text)) {
      return (
        `**Current offers:**\n` +
        `• **Early bird** — 8% off bookings 90+ days before departure\n` +
        `• **Group of 6+** — 5% off total package price\n` +
        `• **Repeat travelers** — ₱5,000 credit on your next trip\n` +
        `• **Best Price Promise** — we match verified lower quotes\n\n` +
        `Discounts don't stack. Mention your promo code in **Special Requests** when booking.`
      );
    }

    if (/additional|extra|fee|charge/i.test(text)) {
      return (
        `**What's included:** Flights (on all-inclusive), hotels, transfers & curated experiences per package.\n\n` +
        `**Possible add-ons:**\n` +
        `• Extra nights (~8% of base price per night per person)\n` +
        `• Travel insurance (~₱2,500–₱8,000 per person)\n` +
        `• Visa assistance (where applicable)\n` +
        `• Single supplement on some packages\n\n` +
        `No hidden booking fees on our site.`
      );
    }

    if (mentioned) {
      const est2 = mentioned.basePrice * 2;
      return (
        `**${mentioned.name}** (${mentioned.region})\n` +
        `• From **${mentioned.price}** per person (${mentioned.nights})\n` +
        `• Estimated for 2 travelers: **${formatPrice(est2)}**\n` +
        `• Children (0–17): ~70% of adult rate\n\n` +
        `Use the **Trip Budget Calculator** on the package page for exact totals with extra nights.`
      );
    }

    const lines = pkgs
      .slice()
      .sort((a, b) => a.basePrice - b.basePrice)
      .map((p) => `• **${p.name}** — from ${p.price}/person`)
      .join('\n');

    return `**Package pricing** (per person, from):\n\n${lines}\n\nCheapest: **${cheapestPackage().name}** at ${cheapestPackage().price}. Ask about a specific trip for a tailored estimate.`;
  }

  function respondBookingInfo() {
    return (
      `**To book with GoGetAway you need:**\n` +
      `1. Chosen package & travel type (all-inclusive, land only, etc.)\n` +
      `2. Departure & return dates\n` +
      `3. Departure city (Manila, Cebu, Davao, Clark, Iloilo)\n` +
      `4. Lead traveler name, email & phone\n` +
      `5. Number of adults & children\n\n` +
      `**Multiple people / groups:** Yes — up to **20 adults** per booking. For 6+ travelers, ask about our **group discount**.\n\n` +
      `**Reservation hold:** Your quote is held for **${POLICY.holdHours} hours** after you submit. A travel expert confirms within **2 hours**.\n\n` +
      `**Validity:** Confirmed bookings are honored for the selected dates; changes depend on our reschedule policy.`
    );
  }

  function respondSchedule(text) {
    if (/reschedule|change\s*date/i.test(text)) {
      return (
        `**Reschedule policy:**\n` +
        `• **30+ days** before departure — free date change (subject to availability)\n` +
        `• **15–29 days** — ₱3,500 change fee per person\n` +
        `• **Under 15 days** — changes treated as cancellation + rebook\n\n` +
        `Email ${POLICY.supportEmail} with your booking reference or ask me *"my booking status"*.`
      );
    }
    return (
      `**Operating hours:** ${POLICY.hours}\n\n` +
      `**Peak / busier periods:** Christmas–New Year, Holy Week, April–May summer.\n` +
      `**Quieter travel windows:** Late January–March, September–November (varies by destination).\n\n` +
      `Ask *"which schedule is less crowded"* for personalized suggestions.`
    );
  }

  function respondCancellation() {
    return (
      `**Cancellation policy:**\n` +
      `• **30+ days** before departure — full refund minus ₱1,500 processing fee\n` +
      `• **15–29 days** — 50% refund\n` +
      `• **Under 15 days** — non-refundable (travel insurance recommended)\n\n` +
      `**Refunds** process in **${POLICY.refundDays}** to your original payment method.\n\n` +
      `To cancel, contact ${POLICY.supportEmail} or ${POLICY.supportPhone} with your booking reference.`
    );
  }

  function respondStatus() {
    const b = getLastBooking();
    if (!b) {
      return (
        `I don't see a recent booking in this browser session.\n\n` +
        `After you **Confirm Booking**, I'll store your reference here. You can also check email or call ${POLICY.supportPhone}.\n\n` +
        `Start a booking: pick any package → **Book Now**.`
      );
    }
    const statusLabel =
      b.status === 'pending_confirmation'
        ? '⏳ **Pending confirmation** — our travel expert will contact you within 2 hours.'
        : '✅ **Confirmed**';
    return (
      `**Your latest booking**\n` +
      `• Reference: **${b.ref}**\n` +
      `• Package: **${b.package}** (${b.region})\n` +
      `• Departure: ${b.departure} · Return: ${b.returnDate}\n` +
      `• Travelers: ${b.adults} adult(s)${b.children ? `, ${b.children} child(ren)` : ''}\n` +
      `• Status: ${statusLabel}\n\n` +
      `Save reference **${b.ref}** for support inquiries. Payment is collected after expert confirmation.`
    );
  }

  function respondPayment(text) {
    if (/did\s*my\s*payment|payment\s*go\s*through/i.test(text)) {
      const b = getLastBooking();
      if (!b) {
        return `No payment record in this session yet. Bookings are **confirmed first** by our team; payment links are sent after. If you paid elsewhere, email ${POLICY.supportEmail} with your reference.`;
      }
      return `For booking **${b.ref}**: payment is typically requested **after** expert confirmation. If you already paid, check your email receipt or contact ${POLICY.supportEmail} with reference **${b.ref}**.`;
    }
    if (/online|pay\s*online/i.test(text)) {
      return `Yes — **online payment** is supported via secure link (card, GCash, Maya) after your booking is confirmed. You can also pay at our BGC office during business hours.`;
    }
    return (
      `**Accepted payment methods:**\n` +
      POLICY.payments.map((m) => `• ${m}`).join('\n') +
      `\n\nInstallments apply to packages **₱100,000+**. A deposit may be required to secure peak-season dates.`
    );
  }

  function respondLocation(text) {
    const mentioned = findPackageInText(text);
    if (/get\s*there|direction|how\s*do\s*i/i.test(text)) {
      return (
        `**Getting there:** International packages include flights from your selected Philippine hub (Manila, Cebu, etc.).\n` +
        `Ground transfers & meet-and-greet are included on all-inclusive packages.\n\n` +
        `**Office visits:** ${POLICY.office}. Open ${POLICY.hours.split('.')[0]}.`
      );
    }
    if (mentioned) {
      return (
        `**${mentioned.name}** — ${mentioned.region}\n\n` +
        `${mentioned.desc}\n\n` +
        `**Includes:** ${mentioned.chips.join(' · ')}\n` +
        `Duration: **${mentioned.nights}** · From **${mentioned.price}**/person`
      );
    }
    return (
      `**Destinations we serve:** Bali, Kyoto, Maldives, Patagonia, Santorini, Serengeti, Machu Picchu, Norway, Morocco, Amalfi, Borneo, Tuscany & more.\n\n` +
      `Each package lists **inclusions** on its detail page (flights, hotels, tours, meals where noted).\n\n` +
      `Ask e.g. *"What's included in Bali Sanctuary?"* for specifics.`
    );
  }

  function respondAccount(text) {
    if (/password|forgot/i.test(text)) {
      return `**Password reset:** Go to **My Booking** (footer) → *Forgot password* → enter your email. Reset links expire in 1 hour. No account yet? You can book as a guest; an account is created automatically from your booking email.`;
    }
    if (/account|register|sign\s*up|log\s*in/i.test(text)) {
      return `**Create an account:** Optional — book any package with your email and we'll set up access to track trips.\n\n**Or register:** Footer → **My Booking** → Sign up with email + password.\n\nBenefits: saved travelers, booking history & faster rebooking.`;
    }
    return (
      `**Contact support:**\n` +
      `• 📧 ${POLICY.supportEmail}\n` +
      `• 📞 ${POLICY.supportPhone}\n` +
      `• 💬 This AI chat (24/7)\n` +
      `• 🏢 ${POLICY.office}\n\n` +
      `Average response: **under 2 hours** during business hours.`
    );
  }

  function respondRecommend(text) {
    const pkgs = getPackages();
    if (/afford|cheap|budget|value/i.test(text)) {
      const c = cheapestPackage();
      return (
        `**Most affordable:** **${c.name}** (${c.region}) — from **${c.price}**/person for ${c.nights}.\n\n` +
        `Also great value: **Morocco Desert Dream**, **Borneo Rainforest**.\n\n` +
        `Tip: Book 90+ days ahead for **8% early-bird** savings.`
      );
    }
    if (/crowd|busy|quiet|less\s*crowd/i.test(text)) {
      return (
        `**Less crowded travel windows:**\n` +
        `• **January–March** — great for Kyoto, Norway, Patagonia\n` +
        `• **September–November** — Bali, Morocco, Tuscany harvest season\n` +
        `• Avoid: Dec 20–Jan 5 & Holy Week for popular spots\n\n` +
        `**Quieter packages:** Northern Lights Norway, Tuscany Harvest, Borneo Rainforest.`
      );
    }
    if (/popular|trending|hot/i.test(text)) {
      const hot = pkgs.filter((p) => p.rib === 'hot' || p.rib === 'new');
      return (
        `**Trending now:**\n` +
        hot.map((p) => `• **${p.name}** — ${p.price}/person ${p.ribTxt}`).join('\n') +
        `\n\n**Staff pick:** **Amalfi Grand Tour** for luxury, **Bali Sanctuary** for first-time tropical trips.`
      );
    }
    const best = pkgs.find((p) => p.rib === 'hot') || pkgs[0];
    return (
      `**Best available option right now:** **${best.name}** (${best.region})\n` +
      `• ${best.price}/person · ${best.nights}\n` +
      `• ${best.chips.slice(0, 3).join(', ')}\n\n` +
      `**By style:**\n` +
      `• Beach → Maldives Overwater or Bali Sanctuary\n` +
      `• Adventure → Patagonia Wild or Serengeti Migration\n` +
      `• Romance → Santorini Romance or Amalfi Grand Tour\n` +
      `• Culture → Kyoto in Bloom or Machu Picchu\n\n` +
      `Tell me your budget or dates for a tighter match!`
    );
  }

  function respondInsurance() {
    return (
      `**Travel insurance:** Optional but recommended. Plans from **₱2,500–₱8,000**/person cover trip cancellation, medical emergencies & baggage.\n\n` +
      `**Visa & documents:** Depends on destination. Philippine passport holders: visa-free or VOA for many ASEAN trips; Japan, EU, US may need visas—we provide guidance after booking.\n\n` +
      `Ask support at ${POLICY.supportEmail} for document checklists.`
    );
  }

  function respondCompare(text) {
    const beach = getPackages().filter((p) => p.cat === 'beach');
    const adv = getPackages().filter((p) => p.cat === 'adventure');
    return (
      `**Quick comparisons:**\n\n` +
      `**Beach** (${beach.map((p) => p.name).join(', ')})\n` +
      `Relaxation, water activities, tropical stays.\n\n` +
      `**Adventure** (${adv.map((p) => p.name).join(', ')})\n` +
      `Trekking, wildlife, active itineraries.\n\n` +
      `**Culture:** Kyoto, Machu Picchu, Morocco, Tuscany\n` +
      `**Romance:** Santorini, Amalfi\n\n` +
      `Name two packages and I'll compare price, nights & highlights.`
    );
  }

  function respondFallback(text) {
    const mentioned = findPackageInText(text);
    if (mentioned) {
      return respondLocation(`included ${mentioned.name}`);
    }
    if (/book|reserve/i.test(text)) {
      return `To book, scroll to **Packages**, pick a trip, and click **Book Now**. I can also answer about pricing, dates, or policies—try *"How much does Bali cost?"*`;
    }
    return (
      `I'm not sure I caught that. I'm best at:\n` +
      `• Availability & dates\n` +
      `• Prices & discounts\n` +
      `• Booking steps & policies\n` +
      `• Payment & refunds\n` +
      `• Trip recommendations\n\n` +
      `Try rephrasing, or tap a suggestion below. For complex cases, reach us at **${POLICY.supportEmail}**.`
    );
  }

  function generateReply(userText) {
    const intent = matchIntent(userText);
    switch (intent) {
      case 'greeting':
        return respondGreeting();
      case 'availability':
        return respondAvailability(userText);
      case 'pricing':
        return respondPricing(userText);
      case 'booking_info':
        return respondBookingInfo();
      case 'schedule':
        return respondSchedule(userText);
      case 'cancellation':
        return respondCancellation();
      case 'status':
        return respondStatus();
      case 'payment':
        return respondPayment(userText);
      case 'location':
        return respondLocation(userText);
      case 'account':
        return respondAccount(userText);
      case 'recommend':
        return respondRecommend(userText);
      case 'insurance':
        return respondInsurance();
      case 'compare':
        return respondCompare(userText);
      default:
        return respondFallback(userText);
    }
  }

  function markdownToHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  function appendMessage(role, text) {
    const box = document.getElementById('aiMessages');
    if (!box) return;
    const el = document.createElement('div');
    el.className = `ai-msg ai-msg-${role}`;
    el.innerHTML = `<p>${markdownToHtml(text)}</p>`;
    box.appendChild(el);
    box.scrollTop = box.scrollHeight;
  }

  function showTyping() {
    const box = document.getElementById('aiMessages');
    const el = document.createElement('div');
    el.className = 'ai-msg ai-msg-bot ai-typing';
    el.id = 'aiTyping';
    el.innerHTML = '<span></span><span></span><span></span>';
    box.appendChild(el);
    box.scrollTop = box.scrollHeight;
  }

  function hideTyping() {
    document.getElementById('aiTyping')?.remove();
  }

  function renderSuggestions(list) {
    const wrap = document.getElementById('aiSuggestions');
    if (!wrap) return;
    wrap.innerHTML = list
      .map(
        (s) =>
          `<button type="button" class="ai-chip" data-q="${s.q.replace(/"/g, '&quot;')}">${s.label}</button>`
      )
      .join('');
    wrap.querySelectorAll('.ai-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        const q = btn.getAttribute('data-q');
        document.getElementById('aiInput').value = q;
        handleUserMessage(q);
      });
    });
  }

  function handleUserMessage(text) {
    const trimmed = (text || '').trim();
    if (!trimmed || typing) return;

    appendMessage('user', trimmed);
    document.getElementById('aiInput').value = '';
    typing = true;
    showTyping();

    const delay = 400 + Math.min(trimmed.length * 12, 900);
    setTimeout(() => {
      hideTyping();
      const reply = generateReply(trimmed);
      appendMessage('bot', reply);
      typing = false;
      renderSuggestions(QUICK_TOPICS);
    }, delay);
  }

  function openChat() {
    chatOpen = true;
    const chat = document.getElementById('aiChat');
    const fab = document.getElementById('aiFab');
    chat?.classList.add('open');
    chat?.setAttribute('aria-hidden', 'false');
    fab?.classList.add('hidden');
    document.getElementById('aiInput')?.focus();
  }

  function closeChat() {
    chatOpen = false;
    const chat = document.getElementById('aiChat');
    const fab = document.getElementById('aiFab');
    chat?.classList.remove('open');
    chat?.setAttribute('aria-hidden', 'true');
    fab?.classList.remove('hidden');
  }

  function toggleChat() {
    if (chatOpen) closeChat();
    else openChat();
  }

  function init() {
    const fab = document.getElementById('aiFab');
    const closeBtn = document.getElementById('aiChatClose');
    const form = document.getElementById('aiForm');

    fab?.addEventListener('click', toggleChat);
    closeBtn?.addEventListener('click', closeChat);

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      handleUserMessage(document.getElementById('aiInput')?.value);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && chatOpen) closeChat();
    });

    window.addEventListener('gga-booking-updated', () => {
      if (chatOpen) {
        appendMessage(
          'bot',
          `🎉 Booking received! Your reference is **${getLastBooking()?.ref}**. Ask me *"Is my booking confirmed?"* anytime.`
        );
      }
    });

    renderSuggestions(QUICK_TOPICS);

    setTimeout(() => {
      if (!chatOpen) {
        appendMessage(
          'bot',
          `Hi! I'm **GoGetAway AI** — your travel chatbot. Ask about packages, prices, availability, or your booking.`
        );
      }
    }, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GoGetAwayAI = { ask: handleUserMessage, open: openChat, close: closeChat };
})();
