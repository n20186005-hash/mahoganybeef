// Ridge Market Ledger: 36 long-tail subpage skeletons for Mahogany Beef Market & Bulalohan.
// Each entry is a structural skeleton: fill `sections` + `faq` with real, verified,
// independent content. Slugs are English keywords; page copy stays Filipino.
// Compliance: no fabricated price/hours ratings; external links limited to
// official gov/tourism; photos credited to real user photographers.

export type TopicLayer = "experience" | "practical" | "nearby" | "itinerary";

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFaq {
  question: string;
  answer: string;
}

export interface TopicContent {
  code: string;
  slug: string;
  layer: TopicLayer;
  title: string;
  description: string;
  h1: string;
  lead: string;
  updated: string;
  keywords: string[];
  related: string[];
  sections: TopicSection[];
  faq: TopicFaq[];
}

export const TOPIC_LAYERS: Record<TopicLayer, { label: string; eyebrow: string }> = {
  experience: { label: "Karanasan sa Merkado", eyebrow: "01 / MERKADO" },
  practical: { label: "Impormasyong Praktikal", eyebrow: "02 / PRAKTICAL" },
  nearby: { label: "Paligid at Libangan", eyebrow: "03 / PALIGID" },
  itinerary: { label: "Ruta at Planong Biyahe", eyebrow: "04 / RUTA" },
};

// ---------------------------------------------------------------------------
// Layer 1 — Experience & core market (8)
// ---------------------------------------------------------------------------
export const TOPICS: Record<string, TopicContent> = {
  "beef-buying-guide": {
    code: "BEEF",
    slug: "beef-buying-guide",
    layer: "experience",
    title: "Bilihan ng Baka sa Mahogany Market: Gabay sa Sariwa at Presyo",
    description:
      "Paano pumili ng sariwang baka sa ground floor ng Mahogany Market: pagtingin sa kulay, amoy at pagkataga, at pagtanong ng timbang at presyo bago bumili.",
    h1: "Bilihan ng Baka sa Mahogany Market",
    lead: "Ang ground floor ng Mahogany Market ay pamilihang baka—ito ang dahilan kung bakit sikat ang lugar para sa bulalo.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market beef", "where to buy beef tagaytay", "fresh beef tagaytay", "bilihan ng baka tagaytay"],
    related: ["bulalohan-ordering-guide", "market-layout", "what-to-eat"],
    sections: [
      {
        heading: "Saan banda ang baka",
        paragraphs: [
          "Ang ground floor ng Mahogany Market ay pamilihang baka—ito ang dahilan kung bakit sikat ang lugar para sa bulalo.",
          "Bago umakyat sa mga bulalohan sa taas, magawi muna sa baba para makita ang itsura ng karne at makapili nang mahinahon.",
        ],
      },
      {
        heading: "Paano tumingin ng sariwa",
        bullets: [
          "Kulay: matingkad na pula, hindi kayumanggi o lumangat",
          "Amoy: walang maasim o mabahong amoy",
          "Textura: firm at moist, hindi malagkit o makinis nang labis",
          "Pagkataga: bagong hiwa, may label ng cut kung meron",
        ],
        callout: "Hindi namin tinutukoy ang partikular na puwesto—mag-ikot at ikumpara ang itsura bago bumili.",
      },
      {
        heading: "Mga tanong bago bumili",
        bullets: [
          "Anong cut (bulalo, kenchi, o short ribs)",
          "Timbang at presyo bawat kilo",
          "Kung pwedeng hiwaing maliit o para sa sabaw",
          "Kung may nakahandang lamig o frozen",
        ],
      },
      {
        heading: "Paggamit sa bulalo",
        paragraphs: [
          "Ang bulalo cut ay buto + litid; ang sabaw ang hinahangad ng karamihan.",
          "Kung gusto ng malambot na karne, itanong sa tindera kung anong part ang pinaka-angkop sa gusto mong lutuin.",
        ],
      },
    ],
    faq: [
      {
        question: "Saan bumili ng baka sa Mahogany Market?",
        answer: "Sa ground floor ng market—hiwalay ito sa mga bulalohan sa taas. Mag-ikot muna bago pumili ng puwesto.",
      },
      {
        question: "Anong cut ang ginagamit sa bulalo?",
        answer: "Karaniwan ay bulalo (buto + litid). Pwede ring kenchi o short ribs depende sa stall; itanong ang cut bago bumili.",
      },
      {
        question: "Pwede bang pabali-bali ang laki?",
        answer: "Oo, karamihan ay pumapayag na hiwaing ayon sa gusto—itanong lang ang timbang at presyo bago bayaran.",
      },
      {
        question: "Mahal ba ang baka sa market?",
        answer: "Nag-iiba ang presyo bawat puwesto at cut; ikumpara at itanong ang presyo bawat kilo. Hindi kami naglalathala ng fixed na numero.",
      },
    ],
  },
  "bulalohan-ordering-guide": {
    code: "BULALO",
    slug: "bulalohan-ordering-guide",
    layer: "experience",
    title: "Paano umorder ng Bulalo sa Mahogany Market (Gabay sa Itaas na Palapag)",
    description:
      "Gabay sa pag-order sa mga bulalohan sa itaas na palapag: pagpili ng serving, pagtanong ng dami ng karne at kasamang kanin, at pag-aayos ng grupo.",
    h1: "Bulalohan sa Mahogany Market: Paano umorder",
    lead: "Nasa itaas na palapag ang mga bulalohan—magkakalapit ang puwesto at maaaring magkakaiba ang set, bahagi at presyo.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market bulalohan", "how to order bulalo", "top floor eateries tagaytay", "bulalo tagaytay order"],
    related: ["beef-buying-guide", "bulalo-price-guide", "what-to-eat"],
    sections: [
      {
        heading: "Nasaan ang mga bulalohan",
        paragraphs: [
          "Nasa itaas na palapag (top floor) ang mga bulalohan—pag-akyat, makikita ang hilera ng mga eatery na magkakalapit.",
          "Magkakalapit ang puwesto, kaya madaling mag-ikot at ikumpara ang serving bago umorder.",
        ],
      },
      {
        heading: "Paano umorder",
        bullets: [
          "Pumili ng puwesto na pasok sa grupo",
          "Sabihin ang serving (solo o shareable)",
          "Itanong ang dami ng karne at kasamang kanin",
          "Kumpirmahin ang kabuuang presyo bago umorder",
        ],
        callout: "Magtanong ng kabuuang presyo bago umorder—iba-iba ang set, bahagi at presyo ng bawat puwesto.",
      },
      {
        heading: "Laki ng serving",
        paragraphs: [
          "May solo at shareable na option; ang shareable ay para sa grupo.",
          "Itanong kung ilang tao ang kasya sa isang serving para hindi kulang o sobra.",
        ],
      },
      {
        heading: "Payo para sa grupo",
        bullets: [
          "Maghati-hati sa shareable para tipid",
          "Umorder ng extra rice kung kailangan",
          "Sabihin ang allergy o ayaw sa pagkain",
          "Mag-reserve ng mesa kung marami ang grupo (kung inaalok)",
        ],
      },
    ],
    faq: [
      {
        question: "Saan umorder ng bulalo?",
        answer: "Sa itaas na palapag (top floor) ng market—magkakalapit ang mga bulalohan.",
      },
      {
        question: "Solo o share ang order?",
        answer: "May parehong option; ang shareable ay para sa grupo. Itanong kung ilang tao ang kasya sa serving.",
      },
      {
        question: "Kasama ba ang kanin?",
        answer: "Dependi sa puwesto—itanong kung ang kanin o inumin ay kasama sa serving.",
      },
      {
        question: "Pwede bang umorder nang hindi nakaupo agad?",
        answer: "Karaniwan ay umorder muna bago maupo, o may pa-assign na mesa; sundin ang setup ng puwesto.",
      },
    ],
  },
  "bulalo-price-guide": {
    code: "PRICE",
    slug: "bulalo-price-guide",
    layer: "experience",
    title: "Presyo ng Bulalo sa Mahogany Market 2026: Paano magtanong nang tama",
    description:
      "Walang iisang presyo ang bawat stall. Itanong ang serving, dami ng karne at kasamang kanin bago umorder sa Mahogany Market bulalohan.",
    h1: "Presyo ng Bulalo: Paano magtanong",
    lead: "Hindi beripikado sa gabay na ito ang iisang presyo para sa lahat ng stall—ang tamang paraan ay magtanong bago umorder.",
    updated: "Oktubre 2026",
    keywords: ["bulalo price mahogany market", "how much bulalo tagaytay", "mahogany market cost", "presyo ng bulalo tagaytay"],
    related: ["bulalohan-ordering-guide", "budget-guide", "first-time-guide"],
    sections: [
      {
        heading: "Bakit walang iisang presyo",
        paragraphs: [
          "Ang bawat puwesto sa itaas na palapag ay may sariling takda ng serving, dami ng karne, at kasamang kanin o inumin. Dahil dito, hindi maaaring magbigay ang gabay na ito ng iisang presyo para sa lahat.",
          "Ang tamang paraan ay magtanong bago umorder. Ito rin ang payo ng maraming bisita upang hindi magulat sa resibo.",
        ],
      },
      {
        heading: "Ano ang itanong bago umorder",
        bullets: [
          "Laki ng serving at dami ng karne",
          "Kasamang kanin o inumin",
          "Kabuuang presyo (hindi lang bawat bahagi)",
          "Parking at ibang singil kung sakaling may kasamang space",
        ],
        callout: "Laging itanong ang TOTAL bago umorder. Mas mainam na malinaw ang halaga kaysa hula.",
      },
      {
        heading: "Budget bilang range, hindi fixed price",
        paragraphs: [
          "Sa halip na isang eksaktong numero, isipin ang gastos bilang range bawat grupo. Ang paghahati sa pagkain ay nagpapababa ng cost bawat tao.",
          "Para sa mas detalyadong hati-hati, tingnan ang gabay sa budget.",
        ],
      },
      {
        heading: "Paano maiwasan ang pagkabigla sa presyo",
        bullets: [
          "Magtanong muna, huwag agad umorder",
          "Tingnan ang menu o ipakita ang serving",
          "Kumpirmahin ang parking at ibang serbisyo",
          "Pumili ayon sa laki ng grupo",
        ],
      },
    ],
    faq: [
      {
        question: "Magkano ang bulalo sa Mahogany Market?",
        answer: "Nag-iiba ito bawat stall. Itanong ang kabuuang presyo bago umorder—hindi naglalathala ang gabay na ito ng iisang fixed na numero.",
      },
      {
        question: "Kasama ba ang kanin sa bulalo?",
        answer: "Dependi sa puwesto. Magtanong kung ang kanin o inumin ay kasama sa serving.",
      },
      {
        question: "Mas mura ba sa umaga?",
        answer: "Hindi garantisado. Ang pinakamainam ay magtanong at ikumpara bago umorder.",
      },
      {
        question: "Pwede bang tawaran ang presyo?",
        answer: "Ang ibang puwesto ay pwedeng makipag-ayos, pero hindi ito garantisado. Ang magalang na pagtanong ay laging maayos.",
      },
    ],
  },
  "market-hours": {
    code: "HOURS",
    slug: "market-hours",
    layer: "experience",
    title: "Oras ng Mahogany Market at mga Bulalohan (Gabay 2026)",
    description:
      "Kailan bukas ang market at kailan mas maaliwalas ang early market: tips sa pag-iwas sa siksik na tao at pag-check sa live listing.",
    h1: "Oras ng Mahogany Market",
    lead: "Noong 19 Oktubre 2026, Google Maps ay naglista ng 06:00–17:00 araw-araw para sa market—hindi ito iisang iskedyul ng bawat bulalohan.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market hours", "what time open mahogany market", "best early market tagaytay", "mahogany market open"],
    related: ["best-time-to-visit", "weekday-vs-weekend", "evening-night-visit"],
    sections: [
      {
        heading: "Oras ng market",
        paragraphs: [
          "Ayon sa live listing noong 19 Oktubre 2026, ang market ay nagpapakita ng 06:00–17:00 araw-araw.",
          "Hindi ito iisang iskedyul ng bawat bulalohan—ang bawat kainan ay maaaring magkaibang oras ng pagbukas at pagsara.",
        ],
      },
      {
        heading: "Pinakamahinahong oras",
        bullets: [
          "06:00–09:00: tahimik at presko",
          "10:00–13:00: pinakamaraming tao at pila",
          "Hapon: bumabalik sa tahimik pero baka may saradong stall",
        ],
        callout: "Kumpirmahin sa live listing ang oras ng mismong bulalohan bago bumiyahe.",
      },
      {
        heading: "Tandaan sa gabi",
        paragraphs: [
          "Hindi night market ang Mahogany—karamihan ay sarado na sa gabi.",
          "Para sa dinner option, tingnan ang evening-night-visit page para sa mga alternatibo sa labas ng market.",
        ],
      },
    ],
    faq: [
      {
        question: "Anong oras bukas ang market?",
        answer: "Ayon sa listing noong 19 Oktubre 2026, 06:00–17:00 araw-araw para sa market; bawat kainan ay maaaring magkaiba.",
      },
      {
        question: "Anong oras pinakakonti ang tao?",
        answer: "Maaga (06:00–09:00) at hapon; ang tanghalian ay pinakamaigsi at pinakamaingay.",
      },
      {
        question: "Bukas ba sa gabi?",
        answer: "Hindi ito night market—karaniwang sarado na sa gabi. Tingnan ang evening-night-visit page para sa dinner alternatibo.",
      },
      {
        question: "Bukas ba tuwing holiday?",
        answer: "Dependi sa puwesto; kumpirmahin sa live listing bago pumunta sa araw ng holiday.",
      },
    ],
  },
  "market-layout": {
    code: "LAYOUT",
    slug: "market-layout",
    layer: "experience",
    title: "Layout ng Mahogany Market: Nasaan ang Bulalohan at Baka",
    description:
      "Hatiin ang ground floor (baka at ani) at top floor (bulalohan). Gabay sa paglalakad mula entrance hanggang sa mga stall.",
    h1: "Layout ng Mahogany Market",
    lead: "Ang market ay may logical na hati: baba ang baka at ani, taas ang mga kainan.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market layout", "where is bulalohan", "ground floor meat market tagaytay", "mahogany market map"],
    related: ["beef-buying-guide", "bulalohan-ordering-guide", "market-cleanliness"],
    sections: [
      {
        heading: "Dalawang palapag",
        paragraphs: [
          "Ang market ay may logical na hati: baba (ground floor) ang baka at ani, taas (top floor) ang mga bulalohan.",
          "Kung gusto mong kumain ng bulalo, aakyat ka sa taas; kung bibili ng karne, sa baba ka.",
        ],
      },
      {
        heading: "Paano maglakad",
        bullets: [
          "Pasok sa entrance papuntang ground floor",
          "Mag-ikot sa baka at ani bago umakyat",
          "Akyat sa top floor para sa bulalohan",
          "May hagdan o rampa depende sa setup ng market",
        ],
        callout: "Mag-ikot muna sa baba bago umakyat—mas mabilis mamili ng baka kung alam ang itsura.",
      },
      {
        heading: "Mga palatandaan",
        paragraphs: [
          "Minimal ang signage; sundin ang amoy ng sabaw pataas kapag naghahanap ng kainan.",
          "Kung nalilito, tanong sa guard o staff para sa pinakamainam na daanan.",
        ],
      },
      {
        heading: "Madaling daanan",
        paragraphs: [
          "May hagdan sa pag-akyat; para sa wheelchair o stroller, tingnan ang with-seniors at with-kids pages.",
          "Ang top floor ay may upuan kung sakaling kailangan ng pahinga sa pag-akyat.",
        ],
      },
    ],
    faq: [
      {
        question: "Nasaan ang bulalohan?",
        answer: "Sa itaas na palapag (top floor) ng market.",
      },
      {
        question: "Nasaan ang baka?",
        answer: "Sa ground floor—magkahiwalay sa mga kainan.",
      },
      {
        question: "May elevator ba?",
        answer: "Dependi sa setup ng market; kung may kasamang matatanda o bata, tanong sa guard para sa pinakamainam na daanan.",
      },
      {
        question: "Gaano kalaki ang market?",
        answer: "Kompakto at madaling lakarin; sapat ang 45–90 minuto para sa buong ikot.",
      },
    ],
  },
  "market-cleanliness": {
    code: "CLEAN",
    slug: "market-cleanliness",
    layer: "experience",
    title: "Kalinisan at Kapaligiran sa Mahogany Market (Tapat na Gabay)",
    description:
      "Ano ang aasahan sa public market environment: payo sa pagsuot, paghuhugas, at wastong inaasahan sa hindi restaurant-grade na setup.",
    h1: "Kalinisan at Kapaligiran",
    lead: "Public market ang Mahogany—hindi ito air-conditioned na restaurant, kaya iba ang inaasahan sa kapaligiran.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market clean", "hygiene tagaytay market", "dining environment mahogany", "mahogany market review"],
    related: ["market-layout", "what-to-bring", "with-kids"],
    sections: [
      {
        heading: "Ano ang inaasahan",
        paragraphs: [
          "Public market ang Mahogany—hindi ito air-conditioned na restaurant, kaya iba ang inaasahan sa kapaligiran.",
          "May ingay, amoy ng palengke, at basa na sahig sa bahagi ng baka. Normal ito sa pamilihan.",
        ],
      },
      {
        heading: "Payo sa pagsuot",
        bullets: [
          "Saradong sapatos (iwas sa basa at marumi)",
          "Iwas maong na mahaba kung maulan",
          "Magdala ng jacket dahil presko sa Tagaytay",
        ],
        callout: "Hindi ito air-conditioned—maghanda sa init, presko, at amoy ng palengke.",
      },
      {
        heading: "Ugali sa kalinisan",
        paragraphs: [
          "Maghugas ng kamay bago kumain; may water station sa ibang puwesto.",
          "Kung sensitive ang tiyan, iwasan ang hilaw at tiyaking mainit ang sabaw.",
        ],
      },
      {
        heading: "Kapag may bata",
        paragraphs: [
          "Bantayan ang sahig at ang ingay; tingnan ang with-kids page para sa mas detalyadong payo.",
        ],
      },
    ],
    faq: [
      {
        question: "Malinis ba ang Mahogany Market?",
        answer: "Public market ito—may ingay at amoy gaya ng karaniwang palengke. Hindi ito restaurant-grade setup.",
      },
      {
        question: "Safe bang kumain doon?",
        answer: "Oo para sa karaniwang bisita; maghugas ng kamay bago kumain at iwasan ang hilaw kung sensitive ang tiyan.",
      },
      {
        question: "Anong dapat suotin?",
        answer: "Saradong sapatos at komportableng damit; magdala ng jacket dahil presko sa Tagaytay.",
      },
      {
        question: "May banyo ba?",
        answer: "May ibang facility sa loob ng market; tanong sa guard o staff para sa pinakamalapit.",
      },
    ],
  },
  "what-to-eat": {
    code: "EAT",
    slug: "what-to-eat",
    layer: "experience",
    title: "Ano ang Kakainin sa Mahogany Market bukod sa Bulalo",
    description:
      "Bukod sa bulalo, may sabaw, gulay, lamang-loob at inumin. Mga combo ayon sa grupo, nang walang pagbanggit ng partikular na vendor.",
    h1: "Ano ang Kakainin",
    lead: "Ang bulalo ang bituin, pero may iba pang putahe na pamilya ng sabaw at Tagaytay produce.",
    updated: "Oktubre 2026",
    keywords: ["what to eat mahogany market", "besides bulalo tagaytay", "side dishes mahogany", "mahogany market food"],
    related: ["bulalohan-ordering-guide", "beef-buying-guide", "market-produce"],
    sections: [
      {
        heading: "Ang bituin: bulalo",
        paragraphs: [
          "Ang bulalo ang sentro ng market—sabaw na may buto at litid, ito ang dahilan ng sikat na lugar.",
          "Ito rin ang pinakakaraniwang in-order ng bisita bago umakyat sa kainan.",
        ],
      },
      {
        heading: "Iba pang putahe",
        bullets: [
          "Sabaw (iba't ibang uri, depende sa puwesto)",
          "Gulay (repolyo, kangkong, at iba pang ani ng Tagaytay)",
          "Lamang-loob para sa gusto ng ibang part",
          "Inumin (sago, kape, at iba pa)",
        ],
      },
      {
        heading: "Combo ayon sa grupo",
        paragraphs: [
          "Solo = isang serving; grupo = shareable + side dish.",
          "Hindi kami nagrerekomenda ng partikular na vendor—mag-ikot at ikumpara ang serving at presyo.",
        ],
        callout: "Hindi kami nagrerekomenda ng partikular na stall—ikumpara ang serving at presyo bago umorder.",
      },
      {
        heading: "Para sa non-beef",
        paragraphs: [
          "May gulay at inumin para sa hindi kumakain ng baka; tanong sa puwesto kung may non-beef na sabaw.",
        ],
      },
    ],
    faq: [
      {
        question: "Ano ang kakainin bukod sa bulalo?",
        answer: "May sabaw, gulay, lamang-loob at inumin. Mag-ikot para makita ang mga pagpipilian.",
      },
      {
        question: "May vegetarian option ba?",
        answer: "Limitado; may gulay at inumin pero ang market ay beef-focused. Itanong sa puwesto kung may non-beef na sabaw.",
      },
      {
        question: "Kasama ba ang kanin?",
        answer: "Dependi sa stall—itanong bago umorder.",
      },
      {
        question: "Masarap ba ang bulalo?",
        answer: "Sikat ito sa bisita dahil sa sabaw; ang lasa ay depende sa puwesto, kaya ikumpara ang servings.",
      },
    ],
  },
  "market-produce": {
    code: "PRODUCE",
    slug: "market-produce",
    layer: "experience",
    title: "Prutas at Ani sa Mahogany Market (Market Walk)",
    description:
      "Ang produce section bilang bahagi ng market walk: mga prutas at gulay ng Tagaytay, at kailan pinakasariwa.",
    h1: "Prutas at Ani sa Merkado",
    lead: "Hindi lang karne ang meron—may section ng sariwang ani na pwedeng gawing maikling market walk.",
    updated: "Oktubre 2026",
    keywords: ["tagaytay vegetables", "fresh produce mahogany", "fruits tagaytay market", "mahogany market produce"],
    related: ["what-to-eat", "pasalubong", "beef-buying-guide"],
    sections: [
      {
        heading: "Section ng ani",
        paragraphs: [
          "Sa tabi ng baka may sariwang prutas at gulay ng Tagaytay—bahagi ito ng market walk.",
          "Ang produce ay pwedeng gawing maikling lakaran bago o pagkatapos ng bulalo.",
        ],
      },
      {
        heading: "Kailan pinakasariwa",
        bullets: [
          "Umaga: fresh from farm, marami ang pagpipilian",
          "Weekday: mas maraming stock kaysa weekend",
          "Iwas late afternoon: baka ubos na ang pinakasariwa",
        ],
        callout: "Ang presyo ng ani ay nag-iiba; magtanong bago bumili, lalo na kung maramihan.",
      },
      {
        heading: "Bilang market walk",
        paragraphs: [
          "Pwede itong maikling lakaran na nakakadagdag sa experience ng market.",
          "Para sa pagdadala pauwi, tingnan ang pasalubong page para sa tips.",
        ],
      },
    ],
    faq: [
      {
        question: "May prutas at gulay ba sa market?",
        answer: "Oo, may section ng sariwang ani ng Tagaytay sa tabi ng baka.",
      },
      {
        question: "Kailan pinakasariwa ang ani?",
        answer: "Sa umaga at weekday; baka ubos na sa late afternoon.",
      },
      {
        question: "Pwede bang bilhin para pasalubong?",
        answer: "Oo—tingnan ang pasalubong page para sa tips sa pagdala.",
      },
      {
        question: "Mahal ba ang gulay sa Tagaytay?",
        answer: "Nag-iiba ang presyo; ikumpara at magtanong bago bumili.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Layer 2 — Visit decision & practical info (10)
  // -------------------------------------------------------------------------
  "how-to-get-there": {
    code: "FROMMNL",
    slug: "how-to-get-there",
    layer: "practical",
    title: "Paano pumunta sa Mahogany Market mula Maynila (Bus, PITX, Ride-hail)",
    description:
      "Step-by-step commute mula Maynila patungong Mahogany Beef Market: bus sa PITX, jeep papuntang Mahogany Avenue, at ride-hail tips.",
    h1: "Paano pumunta mula Maynila",
    lead: "Mula Maynila, hanapin ang Tagaytay-bound bus, saka lumipat sa lokal na sakay o ride-hail patungong Mahogany Avenue.",
    updated: "Oktubre 2026",
    keywords: ["how to get to mahogany market from manila", "pitx to tagaytay", "bus to tagaytay", "tagaytay from manila"],
    related: ["commute-guide", "parking", "manila-day-trip"],
    sections: [
      {
        heading: "Mula Maynila: bus papuntang Tagaytay",
        paragraphs: [
          "Ang pinakakaraniwang daan mula Maynila ay sumakay ng bus na papuntang Tagaytay. Maraming biyahero ang nagsisimula sa PITX (Parañaque Integrated Terminal Exchange), kung saan may mga bus na daraan o hihinto sa Tagaytay (karaniwang Olivarez o rotunda).",
          "Mula sa babaan sa Tagaytay, lumipat sa lokal na jeepney o tricycle papuntang Mahogany Avenue. Sabihin sa driver ang “Mahogany Market” upang malapit kang ibaba.",
        ],
        bullets: [
          "PITX → bus na Tagaytay-bound (kumpirmahin ang destinasyon sa dispatcher)",
          "Olivarez/rotunda → jeep papuntang Mahogany; sabihin “Mahogany Market”",
          "App ride o taxi mula NAIA kung may bagahe (direkta, mas mahal)",
        ],
        callout: "Ang traffic sa Tagaytay ay nagbabago araw-araw; laging gamitin ang live na mapa o magtanong sa driver para sa pinakabagong ruta at oras.",
      },
      {
        heading: "Mula NAIA (airport)",
        paragraphs: [
          "Kung galing ka sa airport, may dalawang simpleng opsyon: taxi o app ride papuntang Tagaytay nang direkta (mainam kung marami kang bagahe), o bus muna papuntang PITX saka sumakay ng Tagaytay-bound bus.",
          "Ang direktang sasakyan ay naiiwasan ang paglipat-lipat, pero mas mahaba ang byahe kung maipit sa traffic. Ang bus + jeep ay mas tipid ngunit may isa hanggang dalawang transfer.",
        ],
      },
      {
        heading: "Lokal na sakay mula Olivarez/rotunda",
        paragraphs: [
          "Sa sentro ng Tagaytay (Olivarez o rotunda), maraming jeepney ang dadaan sa Mahogany Avenue. Sabihin lang sa driver na ibaba ka sa “Mahogany Market.”",
          "Maikli lang ang layo mula rotunda papuntang market, kaya mabilis ang transfer pagkatapos ng bus.",
        ],
      },
      {
        heading: "Sariling sasakyan o ride-hail",
        paragraphs: [
          "Kung nagdadrive, gamitin ang Aguinaldo Highway o Tagaytay–Nasugbu Road papuntang Mahogany Avenue. Iwasan ang rush hour kung maaari.",
          "Para sa ride-hail, itakda ang drop-off sa Mahogany Market at tingnan ang parking page para sa mga pagpipilian malapit sa market.",
        ],
        bullets: [
          "Aguinaldo Highway → Mahogany Avenue",
          "Maglaan ng allowance para sa parking (tingnan ang parking page)",
          "I-check ang live traffic bago umalis",
        ],
      },
    ],
    faq: [
      {
        question: "Anong bus ang papuntang Tagaytay mula Maynila?",
        answer: "Walang iisang operator na garantisado; hanapin ang mga Tagaytay-bound bus sa PITX at ibang pangunahing terminal. Kumpirmahin ang iskedyul at destinasyon bago sumakay, dahil nagbabago ito.",
      },
      {
        question: "Gaano katagal ang biyahe mula Maynila?",
        answer: "Karaniwan ay humigit-kumulang 2 oras, ngunit depende sa traffic. Maglaan ng extra na oras kung weekend o holiday.",
      },
      {
        question: "Saan exact na bababa para sa Mahogany Market?",
        answer: "Humiling na ibaba malapit sa Mahogany Avenue, saka maikling lakad o jeep papuntang market. Gamitin ang live na mapa para sa tiyak na drop-off.",
      },
      {
        question: "Pwede bang bumiyahe pabalik sa gabi?",
        answer: "Oo, pero nag-iiba ang huling biyahe ng bus at jeep. Kumpirmahin ang oras ng balik bago maglakbay pauwi.",
      },
    ],
  },
  "commute-guide": {
    code: "COMMUTE",
    slug: "commute-guide",
    layer: "practical",
    title: "Commute papuntang Mahogany Market (Jeepney at Lokal na Sakay)",
    description:
      "Jeepney at lokal na sakay mula Olivarez/rotunda: sabihin ang 'Mahogany Market' at gamitin ang live directions.",
    h1: "Commute papuntang Mahogany Market",
    lead: "Mula sentro ng Tagaytay, may jeep na dadaan sa Mahogany Avenue—sabihin lang ang 'Mahogany Market.'",
    updated: "Oktubre 2026",
    keywords: ["mahogany market commute", "jeepney tagaytay", "public transport tagaytay", "how to commute to mahogany"],
    related: ["how-to-get-there", "parking", "first-time-guide"],
    sections: [
      {
        heading: "Mula Olivarez / rotunda",
        paragraphs: [
          "Sa sentro ng Tagaytay (Olivarez o rotunda), maraming jeepney ang dadaan sa Mahogany Avenue.",
          "Sabihin lang sa driver na ibaba ka sa “Mahogany Market” at maikli lang ang layo mula roon.",
        ],
      },
      {
        heading: "Sa loob ng Tagaytay",
        bullets: [
          "Jeep ang pangkalahatang sakay papuntang Mahogany",
          "Tricycle para sa maikling layo o kung maraming bagahe",
          "Tanong sa driver ang fare bago sumakay",
        ],
        callout: "Gamitin ang live directions app para sa tiyak na route—nagbabago ang traffic sa Tagaytay araw-araw.",
      },
      {
        heading: "Mula Maynila",
        paragraphs: [
          "Walang direktang jeep mula Maynila; bus muna papuntang Tagaytay, saka jeep.",
          "Para sa buong detalye ng bus at PITX, tingnan ang how-to-get-there page.",
        ],
      },
      {
        heading: "Uwi",
        paragraphs: [
          "Same jeep pabalik sa rotunda, saka bus pauwi ng Maynila.",
          "Kumpirmahin ang huling biyahe ng bus at jeep bago maglakbay pauwi.",
        ],
      },
    ],
    faq: [
      {
        question: "Paano sumakay papuntang Mahogany?",
        answer: "Sa Olivarez/rotunda, sakay ng jeep papuntang Mahogany; sabihin 'Mahogany Market' sa driver.",
      },
      {
        question: "May direktang jeep mula Maynila?",
        answer: "Hindi karaniwan; bus muna papuntang Tagaytay (tingnan ang how-to-get-there), saka jeep.",
      },
      {
        question: "Pwede bang tricycle?",
        answer: "Oo, para sa maikling layo sa loob ng Tagaytay—itanong ang fare bago sumakay.",
      },
      {
        question: "Hanggang anong oras ang jeep pabalik?",
        answer: "Nag-iiba; kumpirmahin ang huling biyahe bago maglakbay.",
      },
    ],
  },
  "parking": {
    code: "PARK",
    slug: "parking",
    layer: "practical",
    title: "Parking sa Mahogany Market: Saan at Magkano (2026)",
    description:
      "Mga parking space malapit sa market: availability sa peak na oras at payo na itanong ang attendant bago pumarada.",
    h1: "Parking sa Mahogany Market",
    lead: "May mga parking space na binabanggit sa mga lokal na gabay malapit sa market, pero maaaring masikip sa peak na oras.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market parking", "where to park tagaytay", "parking fee mahogany", "parking near mahogany market"],
    related: ["how-to-get-there", "commute-guide", "best-time-to-visit"],
    sections: [
      {
        heading: "Saan pumarada",
        paragraphs: [
          "May mga parking space na binabanggit sa mga lokal na gabay malapit sa market, pero maaaring masikip sa peak na oras.",
          "Ang availability ay nagbabago araw-araw, kaya maglaan ng allowance para sa paghahanap ng puwesto.",
        ],
      },
      {
        heading: "Peak na oras",
        bullets: [
          "Weekend at holiday = siksik",
          "Maagang umalis = mas maluwag",
          "I-check ang live traffic bago pumunta",
        ],
        callout: "Itanong sa attendant ang rate at oras bago pumarada—hindi kami naglalathala ng fixed na presyo.",
      },
      {
        heading: "Opsyon sa ride-hail",
        paragraphs: [
          "Kung ayaw mag-park, gamitin ang drop-off sa Mahogany Market.",
          "Para sa detalye ng drop-off at ruta, tingnan ang how-to-get-there page.",
        ],
      },
      {
        heading: "Para sa matatanda at bata",
        paragraphs: [
          "Mas mainam ang malapit na drop-off kaysa maglakad mula malayong parking.",
          "Tingnan ang with-seniors at with-kids pages para sa karagdagang payo.",
        ],
      },
    ],
    faq: [
      {
        question: "Saan pwede mag-park malapit sa market?",
        answer: "May mga parking space na binabanggit sa lokal na gabay malapit sa market; magtanong sa attendant para sa exact spot.",
      },
      {
        question: "Magkano ang parking?",
        answer: "Nag-iiba ang rate; itanong sa attendant bago pumarada. Hindi kami naglalathala ng fixed na presyo.",
      },
      {
        question: "Masikip ba sa weekend?",
        answer: "Oo, lalo na tanghali ng weekend at holiday—umiwas sa peak kung pwede.",
      },
      {
        question: "Pwede bang mag-drop-off lang?",
        answer: "Oo, may drop-off sa Mahogany Market kung mas gusto ang ride-hail kaysa mag-park.",
      },
    ],
  },
  "best-time-to-visit": {
    code: "BESTTIME",
    slug: "best-time-to-visit",
    layer: "practical",
    title: "Pinakamainam na Oras sa Mahogany Market: Iwas sa Siksik",
    description:
      "Weekday o maagang umaga ang payo para hindi makipagsiksikan. Alamin ang peak na oras at market timing sa Tagaytay.",
    h1: "Pinakamainam na Oras",
    lead: "Para sa mas mahinahong takbo, subukan ang weekday o hindi peak na oras ng umaga.",
    updated: "Oktubre 2026",
    keywords: ["best time to visit mahogany market", "avoid crowd tagaytay", "weekday vs weekend mahogany", "mahogany market crowd"],
    related: ["weekday-vs-weekend", "market-hours", "with-kids"],
    sections: [
      {
        heading: "Weekday vs weekend",
        paragraphs: [
          "Mas kaunti ang tao tuwing weekday, kaya mas mahinahon ang lakad at mas mabilis ang pagpili ng stall. Ang weekend naman ay mas maraming bukas na oras, pero mas siksik ang market at parking.",
          "Pumili ayon sa priority: kung gusto mo ng kalmadong biyahe, piliin ang weekday; kung kasama ang pamilya sa araw ng pahinga, tanggapin ang siksik at maglaan ng extra na oras.",
        ],
      },
      {
        heading: "Oras ng araw",
        paragraphs: [
          "Ang maagang umaga ay mas tahimik. Ayon sa live listing noong 19 Oktubre 2026, ang market ay nagpapakita ng 06:00–17:00 araw-araw, pero maaaring magkaiba ang oras ng bawat bulalohan.",
          "Ang late morning hanggang tanghalian ang pinakamaigsi at pinakamaingay. Kung gusto mo ng maikling pila, punta nang maaga.",
        ],
        bullets: [
          "06:00–09:00: kalmadong takbo, presko ang hangin",
          "10:00–13:00: pinakamaraming tao at pila",
          "Hapon: bumabalik sa tahimik pero baka may saradong stall",
        ],
      },
      {
        heading: "Pananahon sa Tagaytay",
        paragraphs: [
          "Mas presko sa umaga at maaaring may ulap o hamog lalo na sa malamig na buwan. Magdala ng jacket o layer.",
          "Para sa detalye kung ano ang dadalhin, tingnan ang what-to-bring page.",
        ],
      },
      {
        heading: "Mga araw na iwasan kung pwede",
        paragraphs: [
          "Ang mga holiday at long weekend ay sadyang siksik. Kung flexible ang schedule, ilipat sa karaniwang araw para iwas sa pagkaipit.",
          "Maglaan ng mas mahabang buffer para sa traffic at parking kung weekend o holiday ang biyahe.",
        ],
      },
    ],
    faq: [
      {
        question: "Anong oras bukas ang Mahogany Market?",
        answer: "Ayon sa listing noong 19 Oktubre 2026, 06:00–17:00 araw-araw para sa market. Hindi ito iisang iskedyul ng bawat kainan—kumpirmahin ang mismong stall bago bumiyahe.",
      },
      {
        question: "Mas ok ba ang weekday?",
        answer: "Karaniwan ay mas kaunti ang tao tuwing weekday, kaya mas komportable ang pagbisita.",
      },
      {
        question: "Kailan may hamog sa Tagaytay?",
        answer: "Madalas sa maagang umaga, lalo na sa mas malamig na buwan. Hindi ito garantisado araw-araw.",
      },
      {
        question: "Pwede bang umaga lang ang punta?",
        answer: "Oo. Ang umaga ay karaniwang mas tahimik at presko, mainam para sa maikling market walk.",
      },
    ],
  },
  "with-kids": {
    code: "KIDS",
    slug: "with-kids",
    layer: "practical",
    title: "Mahogany Market para sa mga Bata: Tips sa Pamilya",
    description:
      "Pamamahala sa lakaran at ingay, pagkaing angkop sa bata, at mga pahingahan malapit sa market.",
    h1: "Mahogany Market para sa mga Bata",
    lead: "Pwedeng magustuhan ng mga bata ang market walk, basta handa sa lakaran at ingay.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market with kids", "family tips tagaytay", "kids bulalo tagaytay", "family market visit"],
    related: ["family-itinerary", "parking", "market-cleanliness"],
    sections: [
      {
        heading: "Ritmo ng lakad",
        paragraphs: [
          "May ingay at lakaran sa market; bawat bata ay may sariling limit kaya magpahinga pagsapit ng puno.",
          "Ang top floor (bulalohan) ay may upuan—mainam na pahingahan doon.",
        ],
      },
      {
        heading: "Pagkain para sa bata",
        bullets: [
          "May sabaw at gulay na pwedeng bagay sa bata",
          "Iwasan ang maanghang kung sensitive ang tiyan",
          "Itanong sa stall kung may non-beef option",
        ],
      },
      {
        heading: "Pahingahan at gamit",
        paragraphs: [
          "Magdala ng sariling tubig at extra clothes para sa bata.",
          "Para sa buong plano kasama ang nearby spot, tingnan ang family-itinerary page.",
        ],
        callout: "Magdala ng sariling tubig at extra clothes para sa bata—presko sa Tagaytay pero pwedeng uminit sa tanghali.",
      },
    ],
    faq: [
      {
        question: "Pwede bang pumunta ng bata?",
        answer: "Oo, family-friendly ang market walk; bantayan lang ang ingay at lakaran.",
      },
      {
        question: "May pagkain ba para sa bata?",
        answer: "May sabaw at gulay; iwasan ang maanghang kung sensitive. Itanong sa puwesto.",
      },
      {
        question: "Saang part ang pinakakomportable?",
        answer: "Ang top floor (bulalohan) ay may upuan; magpahinga doon bago umakyat o bumaba.",
      },
      {
        question: "Ilang oras ang sapat?",
        answer: "45–90 minuto para sa market + kain; dagdagan kung kasama ang nearby spot.",
      },
    ],
  },
  "with-seniors": {
    code: "SENIOR",
    slug: "with-seniors",
    layer: "practical",
    title: "Mahogany Market para sa mga Nakatatanda: Daanan at Pahinga",
    description:
      "Ritmo ng lakad para sa matatanda, upuan at pahinga, at mga bagay na dapat iwasan sa siksik na market.",
    h1: "Mahogany Market para sa mga Nakatatanda",
    lead: "Ang market ay may lakaran at siksik na bahagi—may mga paraan para maging komportable ang matatanda.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market elderly", "accessible tagaytay market", "senior visit mahogany", "market for seniors"],
    related: ["best-time-to-visit", "parking", "first-time-guide"],
    sections: [
      {
        heading: "Daanan at pahinga",
        paragraphs: [
          "May hagdan sa pag-akyat sa top floor; magpahinga sa bawat palapagpara hindi mapagod.",
          "Ang weekday o maagang umaga ay mas komportable para sa matatanda.",
        ],
      },
      {
        heading: "Upuan at ginhawa",
        bullets: [
          "Ang top floor (bulalohan) ay may upuan",
          "Iwasan ang tanghaling siksik",
          "Magdala ng sariling fan o paypay",
        ],
        callout: "Ang weekday o maagang umaga ay mas komportable para sa matatanda.",
      },
      {
        heading: "Mga dapat iwas",
        paragraphs: [
          "Iwasan ang maagang init at ang siksik na oras ng tanghalian.",
          "Para sa detalye ng oras, tingnan ang best-time-to-visit page.",
        ],
      },
      {
        heading: "Sakay at drop-off",
        paragraphs: [
          "Ang drop-off malapit sa entrance ay mas madali kaysa maglakad mula malayong parking.",
          "Tingnan ang parking at how-to-get-there pages para sa opsyon.",
        ],
      },
    ],
    faq: [
      {
        question: "Pwede bang pumunta ng matatanda?",
        answer: "Oo, pero may lakaran at hagdan; piliin ang weekday o maagang umaga.",
      },
      {
        question: "May upuan ba sa market?",
        answer: "Ang top floor (bulalohan) ay may upuan; magpahinga doon.",
      },
      {
        question: "Paano maiwasan ang pagod?",
        answer: "Magpahinga sa bawat palapag at iwasan ang peak na oras.",
      },
      {
        question: "Mas mainam bang mag-drive?",
        answer: "Oo, para sa drop-off malapit sa entrance; tingnan ang parking page.",
      },
    ],
  },
  "weekday-vs-weekend": {
    code: "WKDY",
    slug: "weekday-vs-weekend",
    layer: "practical",
    title: "Weekday vs Weekend sa Mahogany Market: Alin ang Mas Maigi?",
    description:
      "Pagkumpara ng tao, parking at atmospera ng lugar; pumili base sa kung ano ang priority ng biyahe.",
    h1: "Weekday vs Weekend",
    lead: "Mas konti ang tao sa weekday, mas maraming bukas na oras sa weekend—pumili ayon sa priority.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market weekday weekend", "less crowd tagaytay", "weekend market tagaytay", "when to visit mahogany"],
    related: ["best-time-to-visit", "market-hours", "parking"],
    sections: [
      {
        heading: "Tao",
        paragraphs: [
          "Mas kaunti ang tao tuwing weekday, mas marami tuwing weekend.",
          "Pumili ayon sa priority: tahimik (weekday) o masigla (weekend).",
        ],
      },
      {
        heading: "Parking",
        bullets: [
          "Weekday = luwag",
          "Weekend = siksik",
          "Holiday = pinakamasikip",
        ],
      },
      {
        heading: "Atmospera ng lugar",
        paragraphs: [
          "Ang weekday ay kalmado, ang weekend ay masigla.",
          "Para sa mas detalyadong oras, tingnan ang market-hours page.",
        ],
        callout: "Kung gusto ng tahimik, piliin ang weekday; kung kasama ang pamilya sa araw ng pahinga, tanggapin ang siksik.",
      },
    ],
    faq: [
      {
        question: "Mas ok ba ang weekday?",
        answer: "Karaniwan ay mas kaunti ang tao—mas komportable.",
      },
      {
        question: "Bakit masikip ang weekend?",
        answer: "Dahil sa day-off ng marami; maglaan ng extra oras para sa parking at pila.",
      },
      {
        question: "Pareho bang bukas?",
        answer: "Parehong bukas ang market, pero bawat stall ay may sariling oras—kumpirmahin sa live listing.",
      },
      {
        question: "Anong mas tipid?",
        answer: "Hindi direktang naiimpluwensyahan ng araw ang presyo; depende sa stall. Ikumpara pa rin bago umorder.",
      },
    ],
  },
  "what-to-bring": {
    code: "BRING",
    slug: "what-to-bring",
    layer: "practical",
    title: "Ano ang Dalhin sa Mahogany Market",
    description:
      "Komfortableng sapatos, cash, eco-bag, at payong; plus height-temperature note sa Tagaytay.",
    h1: "Ano ang Dalhin",
    lead: "May lakaran at pagbabago ng panahon sa Tagaytay, kaya may mga bagay na dapat nakahanda.",
    updated: "Oktubre 2026",
    keywords: ["what to bring mahogany market", "what to wear tagaytay", "things to bring tagaytay", "mahogany market tips"],
    related: ["first-time-guide", "market-cleanliness", "best-time-to-visit"],
    sections: [
      {
        heading: "Komportableng gamit",
        bullets: [
          "Saradong sapatos (iwas sa basa at marumi)",
          "Jacket (presko sa Tagaytay)",
          "Eco-bag para sa binili",
          "Payong (ulan o init)",
        ],
      },
      {
        heading: "Perang tuyo",
        paragraphs: [
          "Maraming puwesto ang cash-prefer; magdala ng barya at bills.",
          "Maglaan ng extra para sa parking kung nag-drive.",
        ],
      },
      {
        heading: "Para sa panahon",
        paragraphs: [
          "Umaga = presko, tanghali = init, maulan = basa.",
          "Magdala ng extra layer—nagbabago ang panahon sa Tagaytay.",
        ],
        callout: "Magdala ng extra layer—nagbabago ang panahon sa Tagaytay.",
      },
      {
        heading: "Para sa bata at matatanda",
        paragraphs: [
          "Tingnan ang with-kids at with-seniors pages para sa karagdagang gamit.",
        ],
      },
    ],
    faq: [
      {
        question: "Ano angdapat dalhin?",
        answer: "Saradong sapatos, jacket, eco-bag, payong at cash.",
      },
      {
        question: "Kailangan ba ng cash?",
        answer: "Oo, maraming puwesto ang mas gusto ang cash; magdala ng barya at bills.",
      },
      {
        question: "Maganda bang magdala ng jacket?",
        answer: "Oo, presko sa Tagaytay lalo na sa umaga.",
      },
      {
        question: "Pwede bang magpayong?",
        answer: "Oo, lalo na kung maulan o mainit—mainam na laging may dalang payong.",
      },
    ],
  },
  "budget-guide": {
    code: "BUDGET",
    slug: "budget-guide",
    layer: "practical",
    title: "Budget sa Mahogany Market: Gaano Kadaming Pera ang Dalhin",
    description:
      "Hatiin ang gastos (pagkain, parking, transport) bilang range, hindi fixed price. Kumpirmahin bago gumastos.",
    h1: "Budget sa Mahogany Market",
    lead: "Hindi fixed ang presyo, kaya budget ay range lang—itakda ang food, parking at transport nang hiwalay.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market budget", "how much to spend tagaytay", "budget bulalo tagaytay", "cost of visit mahogany"],
    related: ["bulalo-price-guide", "parking", "manila-day-trip"],
    sections: [
      {
        heading: "Hatiin ang gastos",
        bullets: [
          "Food (bulalo + side dish)",
          "Parking (kung drive)",
          "Transport (bus / jeep / ride-hail)",
        ],
      },
      {
        heading: "Bilang range",
        paragraphs: [
          "Walang fixed price; isipin ang gastos bilang range bawat grupo.",
          "Para sa detalye ng presyo ng bulalo, tingnan ang gabay sa presyo ng bulalo.",
        ],
        callout: "Itakda ang budget bilang range, hindi fixed number—kumpirmahin ang presyo bago gumastos.",
      },
      {
        heading: "Payo para makatipid",
        bullets: [
          "Maghati-hati sa shareable na serving",
          "Iwas umorder agad; mag-ikot muna",
          "Mag-commute kaysa mag-drive kung isa lang",
        ],
      },
      {
        heading: "Para sa day trip",
        paragraphs: [
          "Kung galing Maynila, isama ang transport sa budget.",
          "Tingnan ang manila-day-trip page para sa transport planning.",
        ],
      },
    ],
    faq: [
      {
        question: "Magkano ang budget sa Mahogany?",
        answer: "Range lang ito, depende sa grupo; hatiin ang food, parking at transport. Hindi kami naglalathala ng fixed na numero.",
      },
      {
        question: "Paano makatipid?",
        answer: "Maghati-hati sa shareable na serving at mag-commute kaysa mag-park kung kaya.",
      },
      {
        question: "Kasama ba ang parking sa budget?",
        answer: "Oo, kung drive—itanong ang rate sa attendant (tingnan ang parking page).",
      },
      {
        question: "Sapat ba ang isang fixed amount?",
        answer: "Hindi kami nagbibigay ng fixed amount; depende sa laki ng grupo at order. Ikumpara ang serving bago umorder.",
      },
    ],
  },
  "first-time-guide": {
    code: "FIRST",
    slug: "first-time-guide",
    layer: "practical",
    title: "Unang Punta sa Mahogany Market: Gabay sa 45–90 Minuto",
    description:
      "Gabay para sa unang bisita: maikling daan, maghanap muna bago umorder, at mga madalas itanong.",
    h1: "Unang Punta sa Mahogany Market",
    lead: "Sa unang punta, sapat na ang 45–90 minuto para pumili, kumain at maglakad nang hindi minamadali.",
    updated: "Oktubre 2026",
    keywords: ["first time mahogany market", "mahogany market guide", "what to expect mahogany", "mahogany market for beginners"],
    related: ["how-to-get-there", "what-to-bring", "market-hours"],
    sections: [
      {
        heading: "45–90 minuto",
        paragraphs: [
          "Sapat na ang 45–90 minuto para pumili, kumain at maglakad nang hindi minamadali.",
          "Dagdagan kung kasama ang nearby spot tulad ng Picnic Grove o café.",
        ],
      },
      {
        heading: "Unang hakbang",
        bullets: [
          "Punta sa ground floor (baka)",
          "Akyat sa top floor (bulalo)",
          "Mag-ikot bago umorder",
        ],
        callout: "Mag-ikot muna bago umorder—iba-iba ang serving at presyo ng bawat puwesto.",
      },
      {
        heading: "Mga madalas itanong",
        paragraphs: [
          "Para sa pag-order, tingnan ang gabay sa pag-order ng bulalohan.",
          "Para sa presyo, tingnan ang gabay sa presyo ng bulalo.",
        ],
      },
      {
        heading: "Paano pumunta",
        paragraphs: [
          "Para sa ruta mula Maynila, tingnan ang how-to-get-there page.",
          "Para sa dadalhin, tingnan ang what-to-bring page.",
        ],
      },
    ],
    faq: [
      {
        question: "First time sa Mahogany, saan magsisimula?",
        answer: "Sa ground floor para sa baka, saka akyat sa top floor para sa bulalo.",
      },
      {
        question: "Gaano katagal ang bisita?",
        answer: "45–90 minuto para sa market + kain; dagdagan kung kasama ang nearby spot.",
      },
      {
        question: "Kailangan bang mag-reserve?",
        answer: "Hindi karaniwan; walk-in ang setup. Mag-ikot at pumili ng puwesto.",
      },
      {
        question: "Anong dapat alamin bago umorder?",
        answer: "Ang serving, dami ng karne at total presyo—tingnan ang gabay sa pag-order ng bulalohan.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Layer 3 — Nearby eats, sights & attractions (11)
  // -------------------------------------------------------------------------
  "viewpoint-cafes": {
    code: "CAFE",
    slug: "viewpoint-cafes",
    layer: "nearby",
    title: "Café malapit sa Mahogany Market na may Tanaw ng Taal",
    description:
      "Mga café na may tanawin ng Taal malapit sa market: paano isingit sa biyahe matapos kumain ng bulalo.",
    h1: "Café na may Tanaw ng Taal malapit sa Market",
    lead: "Pagkatapos ng bulalo, may café malapit sa market na pwedeng pagpahingahan habang nakatanaw ng Taal.",
    updated: "Oktubre 2026",
    keywords: ["cafes near mahogany market", "tagaytay coffee with view", "cafe with taal view", "coffee after bulalo"],
    related: ["coffee-near-mahogany", "taal-lake-view", "couple-itinerary"],
    sections: [
      {
        heading: "Café na may tanaw",
        paragraphs: [
          "Pagkatapos ng bulalo, may café malapit sa market na may tanaw ng Taal Volcano Lake.",
          "Ito ang karaniwang follow-up—mainit na inumin habang nakatanaw ng bulkan.",
        ],
      },
      {
        heading: "Paano isingit",
        bullets: [
          "Kain sa market (umaga)",
          "Café para sa kape at pahinga",
          "Tanaw ng Taal mula sa bintana",
        ],
        callout: "Kumpirmahin ang oras at availability ng café sa live listing—nagbabago ang schedule.",
      },
      {
        heading: "Para sa date",
        paragraphs: [
          "Ang café na may tanaw ay mainam para sa couple.",
          "Tingnan ang couple-itinerary page para sa buong plano.",
        ],
      },
      {
        heading: "Iba pang café",
        paragraphs: [
          "Para sa mas maraming opsyon, tingnan ang coffee-near-mahogany page.",
        ],
      },
    ],
    faq: [
      {
        question: "May café ba na may tanaw ng Taal malapit sa market?",
        answer: "Oo, may mga café malapit sa market na may tanaw ng Taal—itingin sa live listing ang exact spot.",
      },
      {
        question: "Pwede bang pumunta agad pagkatapos kumain?",
        answer: "Oo, natural na follow-up ito ng bulalo.",
      },
      {
        question: "Bukas ba sila sa umaga?",
        answer: "Dependi sa café; kumpirmahin sa live listing.",
      },
      {
        question: "Mahal ba ang café?",
        answer: "Nag-iiba; hindi kami naglalathala ng presyo—itanong o tingnan ang menu.",
      },
    ],
  },
  "picnic-grove": {
    code: "PICNIC",
    slug: "picnic-grove",
    layer: "nearby",
    title: "Tagaytay Picnic Grove: Gabay mula sa Market",
    description:
      "Open-air na pahinga para sa tanawin pagkatapos ng market; kumpirmahin oras at access sa operator.",
    h1: "Tagaytay Picnic Grove",
    updated: "Oktubre 2026",
    keywords: ["tagaytay picnic grove", "picnic grove guide", "picnic grove tagaytay entrance", "things near mahogany market"],
    related: ["picnic-grove-activities", "sky-ranch", "weekend-itinerary"],
    sections: [
      {
        heading: "Open-air na pahinga",
        paragraphs: [
          "Pagkatapos ng market, pwede dito magpahinga at tumanaw ng ridge.",
          "Mainam ito para sa grupo na gusto ng hangin at luntiang tanawin.",
        ],
      },
      {
        heading: "Oras at access",
        paragraphs: [
          "Kumpirmahin sa operator ang oras at entrance bago pumunta.",
        ],
        callout: "Ang mga operator ay may sariling schedule—i-check ang live bago pumunta.",
      },
      {
        heading: "Para sa pamilya",
        paragraphs: [
          "May space para sa bata at matatanda; tingnan ang family-itinerary page.",
        ],
      },
      {
        heading: "Mga activity",
        paragraphs: [
          "Bukod sa tanawin, may mga activity sa loob.",
          "Tingnan ang picnic-grove-activities page para sa detalye.",
        ],
      },
    ],
    faq: [
      {
        question: "Ano ang Picnic Grove?",
        answer: "Open-air park malapit sa market para sa pahinga at tanawin.",
      },
      {
        question: "Malayo ba mula Mahogany?",
        answer: "Hindi masyadong malayo; karaniwang short drive o jeep. Gamitin ang live directions.",
      },
      {
        question: "Bukas ba ito araw-araw?",
        answer: "Dependi sa operator; kumpirmahin sa live listing.",
      },
      {
        question: "May bayad ba?",
        answer: "Maaaring may entrance; itanong sa operator. Hindi kami naglalathala ng fixed na presyo.",
      },
    ],
  },
  "peoples-park-in-the-sky": {
    code: "SKY",
    slug: "peoples-park-in-the-sky",
    layer: "nearby",
    title: "People's Park in the Sky: Gabay mula sa Mahogany Market",
    description:
      "Highland na tanaw at historical spot; bahagi ng mas mahabang Tagaytay loop kasama ang market.",
    h1: "People's Park in the Sky",
    lead: "Isama ang park na ito para sa Highland na tanaw at mas mahabang Tagaytay loop kasama ang market.",
    updated: "Oktubre 2026",
    keywords: ["peoples park in the sky tagaytay", "what to see peoples park", "tagaytay highland view", "near mahogany market"],
    related: ["picnic-grove", "tagaytay-ridge", "weekend-itinerary"],
    sections: [
      {
        heading: "Highland na tanaw",
        paragraphs: [
          "Ang People's Park in the Sky ay historical na lugar sa bundok sa taas ng Tagaytay.",
          "Ito ay bahagi ng mas mahabang loop kasama ang market at ibang viewpoint.",
        ],
      },
      {
        heading: "Sa loob ng loop",
        bullets: [
          "Market (bulalo)",
          "Picnic Grove (pahinga)",
          "People's Park (Highland na tanaw)",
          "Taal view (kanluran)",
        ],
        callout: "Kumpirmahin ang oras at access sa operator—maaaring may saradong araw.",
      },
      {
        heading: "Para sa buong araw",
        paragraphs: [
          "Mainam itong isama sa weekend loop.",
          "Tingnan ang weekend-itinerary page para sa halimbawang plano.",
        ],
      },
      {
        heading: "Lakaran sa ridge",
        paragraphs: [
          "Ang park ay nasa ridge; pwede itong iugnay sa ridge walk.",
          "Tingnan ang tagaytay-ridge page para sa detalye.",
        ],
      },
    ],
    faq: [
      {
        question: "Ano ang People's Park in the Sky?",
        answer: "Historical highland spot sa Tagaytay na may view; bahagi ng longer loop kasama ang market.",
      },
      {
        question: "Pwede bang isama sa day trip?",
        answer: "Oo, isama ito matapos ang market at Picnic Grove.",
      },
      {
        question: "Bukas ba ito?",
        answer: "Kumpirmahin sa operator ang schedule—may mga araw na sarado.",
      },
      {
        question: "Mahirap ba ang daan?",
        answer: "Nasa taas ng ridge; gamitin ang live directions at maglaan ng oras.",
      },
    ],
  },
  "sky-ranch": {
    code: "RANCH",
    slug: "sky-ranch",
    layer: "nearby",
    title: "Sky Ranch Tagaytay: Libangan para sa Pamilya",
    description:
      "Mas masiglang opsyon para sa pamilya; pagsama sa full-day plan kasama ang bulalo.",
    h1: "Sky Ranch Tagaytay",
    lead: "Kung may kasamang pamilya o gusto ng mga ride, isang mas masiglang opsyon ito malapit sa market.",
    updated: "Oktubre 2026",
    keywords: ["sky ranch tagaytay", "rides family tagaytay", "sky ranch near mahogany", "tagaytay amusement"],
    related: ["picnic-grove", "family-itinerary", "weekend-itinerary"],
    sections: [
      {
        heading: "Mga ride para sa pamilya",
        paragraphs: [
          "Ang Sky Ranch ay amusement area na may mga ride para sa pamilya.",
          "Mas masigla ito kaysa sa market—mainam para sa bata.",
        ],
      },
      {
        heading: "Sa full-day plan",
        bullets: [
          "Market (umaga, kain)",
          "Sky Ranch (tanghali, rides)",
        ],
        callout: "Ang oras at availability ng rides ay depende sa operator—i-check ang live.",
      },
      {
        heading: "Para sa bata",
        paragraphs: [
          "Tingnan ang with-kids at family-itinerary pages para sa tips.",
        ],
      },
      {
        heading: "Katabi",
        paragraphs: [
          "Malapit ito sa Picnic Grove, kaya pwedeng pagsamahin ang dalawa.",
        ],
      },
    ],
    faq: [
      {
        question: "Ano ang Sky Ranch?",
        answer: "Amusement area sa Tagaytay na may rides para sa pamilya.",
      },
      {
        question: "Pwede bang pagsamahin sa market?",
        answer: "Oo, karaniwan ay market sa umaga saka Sky Ranch sa tanghali.",
      },
      {
        question: "May bayad ba ang rides?",
        answer: "Oo, depende sa ride; itanong sa operator. Hindi kami naglalathala ng presyo.",
      },
      {
        question: "Bukas ba tuwing araw?",
        answer: "Dependi sa operator; kumpirmahin sa live listing.",
      },
    ],
  },
  "walking-route": {
    code: "WALK",
    slug: "walking-route",
    layer: "nearby",
    title: "Ruta ng Lakaran mula Mahogany Market (Tagaytay)",
    description:
      "Sunod-sunod na lakaran at distansya mula market patungong kalapit na spot; graded by energy.",
    h1: "Ruta ng Lakaran mula sa Market",
    lead: "Maaaring gawing lakaran ang market at ang kalapit na tanawin—ito ang order at distansya.",
    updated: "Oktubre 2026",
    keywords: ["walking route mahogany market", "tagaytay ridge walk from market", "walkable tagaytay", "market to viewpoint walk"],
    related: ["tagaytay-ridge", "viewpoint-cafes", "half-day-trip"],
    sections: [
      {
        heading: "Order ng lakaran",
        bullets: [
          "Market (Mahogany Avenue)",
          "Café o viewpoint malapit",
          "Picnic Grove o Taal view",
        ],
      },
      {
        heading: "Distansya at enerhiya",
        paragraphs: [
          "Lahat ay nasa ridge; grabe by energy level ng grupo.",
          "Ang short loop ay 1–2 oras depende sa bilis.",
        ],
        callout: "Gamitin ang live map para sa exact distance—nagbabago ang daan.",
      },
      {
        heading: "Para sa hike",
        paragraphs: [
          "Tingnan ang tagaytay-ridge page para sa ridge walk.",
        ],
      },
      {
        heading: "Kalahating araw",
        paragraphs: [
          "Ang walking route ay pwede sa half-day plan.",
          "Tingnan ang half-day-trip page para sa sample.",
        ],
      },
    ],
    faq: [
      {
        question: "Pwede bang lakarin mula market?",
        answer: "Oo, ang ridge ay walkable; simulan sa Mahogany Avenue.",
      },
      {
        question: "Gaano kalayo ang mga spot?",
        answer: "Nasa ridge lang lahat; depende sa spot—gamitin ang live map.",
      },
      {
        question: "Pagod ba ang lakaran?",
        answer: "Moderate; magpahinga sa café o bench. Iwasan kung may bata o matatanda.",
      },
      {
        question: "Ilang oras ang buong route?",
        answer: "Dependi sa bilis; 1–2 oras para sa short loop.",
      },
    ],
  },
  "tagaytay-ridge": {
    code: "RIDGE",
    slug: "tagaytay-ridge",
    layer: "nearby",
    title: "Tagaytay Ridge Walk: Simulan sa Mahogany Market",
    description:
      "Ang ridge na may tanaw ng Tagaytay; pagpili ng silangan/kanluran na direksyon na nagsisimula sa market.",
    h1: "Tagaytay Ridge Walk",
    lead: "Ang Mahogany Avenue ay nasa ridge—pwede itong simula ng maikling ridge walk.",
    updated: "Oktubre 2026",
    keywords: ["tagaytay ridge", "ridge walk tagaytay", "tagaytay ridge viewing", "mahogany ridge walk"],
    related: ["walking-route", "taal-lake-view", "peoples-park-in-the-sky"],
    sections: [
      {
        heading: "Ridge na may tanaw",
        paragraphs: [
          "Ang Mahogany Avenue ay nasa ridge—pwede itong simula ng maikling ridge walk.",
          "Mula rito, pwedeng lakarin ang mga viewpoint patungong kanluran.",
        ],
      },
      {
        heading: "Silangan o kanluran",
        bullets: [
          "Silangan: para sa pagsikat ng araw",
          "Kanluran: Tanaw ng Taal sa hapon",
        ],
        callout: "Piliin ang direksyon base sa oras—kanluran para sa Taal view sa hapon.",
      },
      {
        heading: "Konektado sa market",
        paragraphs: [
          "Ang ridge walk ay nagsisimula sa market.",
          "Tingnan ang walking-route page para sa order.",
        ],
      },
      {
        heading: "Mga tanawin",
        paragraphs: [
          "Tingnan ang taal-lake-view at viewpoint-cafes pages para sa mga punto.",
        ],
      },
    ],
    faq: [
      {
        question: "Saang ridge nagsisimula ang walk?",
        answer: "Sa Mahogany Avenue—nasa ridge mismo ang market.",
      },
      {
        question: "Kanluran o silangan?",
        answer: "Kanluran para sa Taal view sa hapon; silangan para sa sunrise.",
      },
      {
        question: "Pwede bang lakarin nang buo?",
        answer: "Oo, ang ridge ay walkable; gamitin ang live map para sa daan.",
      },
      {
        question: "May tanaw ba ng Taal?",
        answer: "Oo sa kanluran side; tingnan ang taal-lake-view page.",
      },
    ],
  },
  "other-bulalo-spots": {
    code: "OTHERB",
    slug: "other-bulalo-spots",
    layer: "nearby",
    title: "Iba pang Bulalo sa Tagaytay malapit sa Mahogany",
    description:
      "Neutral na paghahambing (distansya, uri) ng ibang bulalo spots; hindi pagrarank o promo. I-check ang official/live.",
    h1: "Iba pang Bulalo sa Tagaytay",
    lead: "Maraming bulalo spots sa Tagaytay—ito ang neutral na paghahambing ng layo at uri, hindi pagrarank.",
    updated: "Oktubre 2026",
    keywords: ["other bulalo tagaytay", "bulalo near mahogany", "best bulalo tagaytay", "mahogany vs other bulalo"],
    related: ["bulalohan-ordering-guide", "what-to-eat", "best-time-to-visit"],
    sections: [
      {
        heading: "Iba pang bulalo sa Tagaytay",
        paragraphs: [
          "Maraming bulalo spot sa Tagaytay bukod sa Mahogany.",
          "Ito ay neutral na paghahambing ng layo at uri—hindi pagrarank.",
        ],
      },
      {
        heading: "Huwag mag-rank",
        bullets: [
          "Hindi kami nagre-rank ng spot",
          "Magkumpara lang ng distansya at uri",
          "Piliin base sa priority ng biyahe",
        ],
        callout: "Ang presyo at lasa ay depende sa stall—i-check ang live bago pumunta.",
      },
      {
        heading: "Bakit Mahogany",
        paragraphs: [
          "Dahil sa baka + bulalo sa iisang market.",
          "Para sa pag-order, tingnan ang gabay sa pag-order ng bulalohan.",
        ],
      },
      {
        heading: "Oras",
        paragraphs: [
          "Ang oras ng ibang spot ay maaaring magkaiba.",
          "Tingnan ang best-time-to-visit page para sa tips.",
        ],
      },
    ],
    faq: [
      {
        question: "May ibang bulalo spot sa Tagaytay?",
        answer: "Oo, marami; hindi kami nagra-rank, naghahambing lang ng layo at uri.",
      },
      {
        question: "Mas okay ba sa Mahogany?",
        answer: "Dependi sa priority mo—Mahogany ay baka + bulalo sa iisang lugar. Ikumpara ang layo at setup.",
      },
      {
        question: "Mas mura ba sa ibang spot?",
        answer: "Nag-iiba ang presyo bawat lugar; hindi kami naglalathala ng comparison sa presyo.",
      },
      {
        question: "Saan pa pwede?",
        answer: "I-check ang live listings ng ibang Tagaytay bulalo spots para sa oras at accessibility.",
      },
    ],
  },
  "coffee-near-mahogany": {
    code: "COFFEE",
    slug: "coffee-near-mahogany",
    layer: "nearby",
    title: "Coffee Culture malapit sa Mahogany Market",
    description:
      "Ang café scene ng Tagaytay bilang post-bulalo stop; hindi pagbanggit ng partikular na tindahan.",
    h1: "Coffee malapit sa Market",
    lead: "Sikat ang Tagaytay sa kultura ng café—natural na follow-up ito pagkatapos ng bulalo.",
    updated: "Oktubre 2026",
    keywords: ["tagaytay coffee culture", "bulalo and coffee", "cafes tagaytay", "coffee near mahogany market"],
    related: ["viewpoint-cafes", "couple-itinerary", "rainy-day"],
    sections: [
      {
        heading: "Kultura ng café",
        paragraphs: [
          "Sikat ang Tagaytay sa kultura ng café—natural na post-bulalo stop ito.",
          "May iba't ibang vibe depende sa café.",
        ],
      },
      {
        heading: "Iba't ibang vibe",
        bullets: [
          "Quiet para sa pahinga",
          "May view para sa tanaw",
          "Lively para sa grupo",
        ],
        callout: "Hindi kami nagrerekomenda ng partikular na tindahan—explore base sa live listings.",
      },
      {
        heading: "Rainy day",
        paragraphs: [
          "Ang café ay mainam na fallback kapag umuulan.",
          "Tingnan ang rainy-day page para sa plano.",
        ],
      },
      {
        heading: "Para sa date",
        paragraphs: [
          "Tingnan ang couple-itinerary page para sa café stops.",
        ],
      },
    ],
    faq: [
      {
        question: "Maraming café ba malapit sa market?",
        answer: "Oo, sikat ang kultura ng café sa Tagaytay; marami malapit sa market.",
      },
      {
        question: "Anong café ang pinakamaganda?",
        answer: "Dependi sa vibe mo; hindi kami nagrerekomenda ng partikular—explore base sa live listing.",
      },
      {
        question: "Pwede bang pumunta pagkatapos ng bulalo?",
        answer: "Oo, natural na follow-up ito.",
      },
      {
        question: "Bukas ba sa gabi?",
        answer: "Dependi sa café; kumpirmahin sa live listing.",
      },
    ],
  },
  "picnic-grove-activities": {
    code: "ZIP",
    slug: "picnic-grove-activities",
    layer: "nearby",
    title: "Gawain sa Picnic Grove (Zipline at iba pa)",
    description:
      "Mga activity sa loob ng Picnic Grove (objective, base sa announcement ng operator).",
    h1: "Gawain sa Picnic Grove",
    lead: "Bukod sa tanawin, may mga activity sa loob ng Picnic Grove—kumpirmahin sa operator ang oras at availability.",
    updated: "Oktubre 2026",
    keywords: ["picnic grove zipline", "activities tagaytay", "picnic grove things to do", "tagaytay adventure"],
    related: ["picnic-grove", "sky-ranch", "family-itinerary"],
    sections: [
      {
        heading: "Mga activity",
        paragraphs: [
          "May zipline at iba pang activity sa loob ng Picnic Grove.",
          "Base ito sa announcement ng operator—kumpirmahin bago pumunta.",
        ],
      },
      {
        heading: "Kumpirmahin sa operator",
        bullets: [
          "Oras ng activity",
          "Availability sa araw ng biyahe",
          "Edad o height limit",
        ],
        callout: "Ang activity ay may sariling schedule at limit—i-check sa operator bago pumunta.",
      },
      {
        heading: "Para sa bata",
        paragraphs: [
          "Tingnan ang with-kids at family-itinerary pages para sa tips.",
        ],
      },
      {
        heading: "Bilang side trip",
        paragraphs: [
          "Ito ay bahagi ng Picnic Grove visit.",
          "Tingnan ang picnic-grove page para sa context.",
        ],
      },
    ],
    faq: [
      {
        question: "Ano ang activity sa Picnic Grove?",
        answer: "May zipline at iba pang activity; base sa announcement ng operator.",
      },
      {
        question: "Bukas ba ang zipline ngayon?",
        answer: "Dependi sa operator; kumpirmahin ang oras at availability sa live listing.",
      },
      {
        question: "May limit ba ang edad?",
        answer: "Maaaring may height/age limit; itanong sa operator.",
      },
      {
        question: "Magkano ang activity?",
        answer: "Dependi sa activity; hindi kami naglalathala ng presyo—itanong sa operator.",
      },
    ],
  },
  "taal-lake-view": {
    code: "TAAL",
    slug: "taal-lake-view",
    layer: "nearby",
    title: "Mga Tanawin ng Taal malapit sa Mahogany Market",
    description:
      "Saan makakakita ng Taal Volcano Lake; pagsama sa half-day na may bulalo.",
    h1: "Mga Tanawin ng Taal",
    lead: "Ang Taal Volcano Lake ay pangunahing tanawin ng Tagaytay—ito ang mga punto malapit sa market.",
    updated: "Oktubre 2026",
    keywords: ["taal lake view tagaytay", "where to see taal", "taal viewpoint near mahogany", "tagaytay volcano view"],
    related: ["viewpoint-cafes", "tagaytay-ridge", "half-day-trip"],
    sections: [
      {
        heading: "Saan makakakita ng Taal",
        paragraphs: [
          "Ang Taal Volcano Lake ay pangunahing tanawin ng Tagaytay.",
          "May mga punto malapit sa market kung saan makikita ito.",
        ],
      },
      {
        heading: "Pinakamagandang lugar",
        bullets: [
          "Kanluran ridge (Tanaw ng Taal sa hapon)",
          "Viewpoint café",
          "Open area na nakatapat sa bulkan",
        ],
        callout: "Ang view ay depende sa panahon—minsan maulap; wag mag-expect ng clear view palagi.",
      },
      {
        heading: "Sa half-day",
        paragraphs: [
          "Pwede itong isama sa half-day plan.",
          "Tingnan ang half-day-trip page para sa sample.",
        ],
      },
      {
        heading: "Café",
        paragraphs: [
          "Maraming viewpoint café ang may tanaw ng Taal.",
          "Tingnan ang viewpoint-cafes page.",
        ],
      },
    ],
    faq: [
      {
        question: "Saan makakakita ng Taal malapit sa market?",
        answer: "Sa kanluran ridge at viewpoint café malapit sa market.",
      },
      {
        question: "Laging clear ba ang view?",
        answer: "Hindi garantisado—minsan maulap. Wag mag-expect ng perfect view palagi.",
      },
      {
        question: "Pwede bang pumunta sa umaga?",
        answer: "Oo, maaga ay madalas malinaw; depende sa panahon.",
      },
      {
        question: "May bayad ba ang viewpoint?",
        answer: "Dependi sa spot; ang public ridge ay free, ang ibang venue ay may charge—i-check sa live.",
      },
    ],
  },
  "pasalubong": {
    code: "PASALUBONG",
    slug: "pasalubong",
    layer: "nearby",
    title: "Pasalubong sa Mahogany Market (Food Souvenir)",
    description:
      "Mga produktong pagkain bilang pasalubong; tips sa pag-iingat at pagdala pauwi.",
    h1: "Pasalubong sa Market",
    lead: "Ang ani at produkto ng market ay pwedeng maging pasalubong—may mga bagay na dapat tandaan sa pagdala.",
    updated: "Oktubre 2026",
    keywords: ["pasalubong tagaytay", "food souvenir mahogany", "tagaytay pasalubong market", "souvenir mahogany market"],
    related: ["market-produce", "what-to-eat", "manila-day-trip"],
    sections: [
      {
        heading: "Ani bilang pasalubong",
        paragraphs: [
          "Ang prutas at gulay ng Tagaytay ay pwedeng maging pasalubong.",
          "Mainam ito para sa pamilya at kaibigan pauwi.",
        ],
      },
      {
        heading: "Pag-iingat",
        bullets: [
          "Ikoleton o ilagay sa container",
          "Iwas basag (bitbit nang maingat)",
          "Ilagay sa carry-on kung flight",
        ],
        callout: "Para sa flight, ilagay ayon sa airline rules—i-check bago mag-flight.",
      },
      {
        heading: "Iba pang item",
        paragraphs: [
          "Tingnan ang market-produce at what-to-eat pages para sa options.",
        ],
      },
      {
        heading: "Day trip",
        paragraphs: [
          "Kung galing Maynila, bumili sa uwian para fresh pa rin.",
          "Tingnan ang manila-day-trip page para sa plano.",
        ],
      },
    ],
    faq: [
      {
        question: "Ano ang pwede maging pasalubong?",
        answer: "Ang sariwang ani at ilang produkto ng market; iwasan ang madaling basag.",
      },
      {
        question: "Pwede bang dalhin sa eroplano?",
        answer: "Dependi sa airline rules; i-check bago mag-flight.",
      },
      {
        question: "Ilang araw tatagal?",
        answer: "Ang sariwang prutas ay limitado ang tagal; kainin o ipadala agad.",
      },
      {
        question: "Saan bumili ng maramihan?",
        answer: "Sa produce section ng market; magtanong ng presyo bago bumili.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Layer 4 — Itinerary & contingency (8)
  // -------------------------------------------------------------------------
  "half-day-trip": {
    code: "HALFDAY",
    slug: "half-day-trip",
    layer: "itinerary",
    title: "Kalahating Araw na Food Trip: Mahogany Market + 1 Lugar",
    description:
      "Template ng kalahating araw: bulalo sa market + isang kalapit na attraction; oras at pacing.",
    h1: "Kalahating Araw na Food Trip",
    lead: "Kung kulang ang oras, sapat na ang kalahating araw: market + isang kalapit na spot.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market half day", "tagaytay food trip", "half day tagaytay itinerary", "market + picnic grove"],
    related: ["walking-route", "taal-lake-view", "weekend-itinerary"],
    sections: [
      {
        heading: "Halimbawa ng kalahating araw",
        paragraphs: [
          "Kung kulang ang oras, sapat na ang market + 1 kalapit na spot.",
          "Ito ang pinakasimpleng way para ma-experience ang Tagaytay nang hindi buong araw.",
        ],
      },
      {
        heading: "Halimbawang plano",
        bullets: [
          "45–90 minuto sa market (pili at kain)",
          "1 nearby spot (Picnic Grove / café / Taal view)",
        ],
        callout: "Umalis nang maaga para iwas traffic—lalo na kung galing Maynila.",
      },
      {
        heading: "Pacing",
        paragraphs: [
          "Huwag minamadali; 3–4 oras lahat kasama ang biyahe.",
          "Para sa mas mahabang loop, tingnan ang weekend-itinerary page.",
        ],
      },
      {
        heading: "Kaugnay",
        paragraphs: [
          "Tingnan ang walking-route at taal-lake-view pages para sa spot ideas.",
        ],
      },
    ],
    faq: [
      {
        question: "Sapat ba ang kalahating araw?",
        answer: "Oo, market + 1 spot ay sapat para sa maikling biyahe.",
      },
      {
        question: "Anong spot ang idagdag?",
        answer: "Picnic Grove, café na may tanaw, o Taal view—depende sa priority.",
      },
      {
        question: "Gaano katagal ang market?",
        answer: "45–90 minuto para sa pili at kain.",
      },
      {
        question: "Pwede bang galing Maynila sa umaga lang?",
        answer: "Oo, basta maagang alis; tingnan ang manila-day-trip page.",
      },
    ],
  },
  "weekend-itinerary": {
    code: "WKND",
    slug: "weekend-itinerary",
    layer: "itinerary",
    title: "Mahogany Market + Tagaytay: Plano ng Isang Araw tuwing Weekend",
    description:
      "Buong araw: bulalo sa umaga, Picnic Grove o Sky Ranch, at Tanaw ng Taal. Halimbawang weekend loop.",
    h1: "Plano ng Isang Araw tuwing Weekend",
    lead: "Isang buong araw na loop: simula sa bulalo, tapos sa park o mga ride, at nagtatapos sa Tanaw ng Taal.",
    updated: "Oktubre 2026",
    keywords: ["tagaytay weekend itinerary", "mahogany + picnic grove", "one day tagaytay plan", "weekend tagaytay schedule"],
    related: ["picnic-grove", "sky-ranch", "half-day-trip"],
    sections: [
      {
        heading: "Halimbawang loop (buong araw)",
        paragraphs: [
          "Simulan sa bulalo sa market nang maaga, saka magtungo sa isang kalapit na attraction tulad ng Picnic Grove o Sky Ranch, at tapusin sa tanaw ng Taal.",
          "Ito ang pinakasikat na rhythm ng isang Tagaytay day trip—food muna, libang pagkatapos.",
        ],
        bullets: [
          "Umaga: bulalo sa Mahogany Market (45–90 minuto)",
          "Tanghali: Picnic Grove o Sky Ranch",
          "Hapon: tanaw ng Taal o café na may view",
          "Gabi: dinner fallback kung maaga namang umalis",
        ],
      },
      {
        heading: "Pacing at oras",
        paragraphs: [
          "Maglaan ng 45–90 minuto sa market para pumili at kumain nang hindi minamadali. Ang buong loop ay kailangan ng buong araw, lalo na kung may kasamang pamilya.",
          "Ang traffic tuwing weekend ay kailangang may buffer—umiwas sa alis nang tanghali.",
        ],
        callout: "Umalis nang maaga. Ang maagang simula ay nagbibigay ng oras para sa parking at pila.",
      },
      {
        heading: "Payo para hindi maipit",
        bullets: [
          "Iwan ang bahay bago mag-9 AM",
          "Mag-park nang maaga o gamitin ang ride-hail",
          "Kumpirmahin ang oras at access ng attraction sa operator",
          "Magbahagi ng grupo para hindi sabay-sabay ang lakad",
        ],
      },
    ],
    faq: [
      {
        question: "Anong oras magsimula ang weekend loop?",
        answer: "Maaga sa umaga, mainam bago mag-9 AM, upang iwas sa siksik at traffic.",
      },
      {
        question: "Kasama ba ang Sky Ranch sa plano?",
        answer: "Opsyonal ito—mainam para sa pamilya dahil sa mga ride, pero pwede ring palitan ng Picnic Grove kung mas gusto ang open-air na pahinga.",
      },
      {
        question: "Saan makakakita ng Taal?",
        answer: "May mga viewpoint malapit sa market; tingnan ang Taal Lake View page para sa mga punto.",
      },
      {
        question: "Pwede bang isang araw lang ang lahat?",
        answer: "Oo. Ang isang buong araw ay sapat para sa market + isang attraction + tanaw ng Taal.",
      },
    ],
  },
  "rainy-day": {
    code: "RAIN",
    slug: "rainy-day",
    layer: "itinerary",
    title: "Maulan? Alternatibo sa Mahogany Market at Tagaytay",
    description:
      "Indoor/half-indoor na opsyon kapag umuulan; ang market ay half-open, café hopping ang fallback.",
    h1: "Mga Alternatibo sa Maulan na Araw",
    lead: "Kung umuulan, may indoor o half-indoor na opsyon malapit sa market—ito ang plano.",
    updated: "Oktubre 2026",
    keywords: ["rainy day tagaytay", "mahogany market when raining", "indoor tagaytay", "things to do tagaytay rain"],
    related: ["coffee-near-mahogany", "viewpoint-cafes", "weekend-itinerary"],
    sections: [
      {
        heading: "Hindi ito ganap na panloob",
        paragraphs: [
          "Ang market ay half-open—may bubong pero bukas ang gilid. Kung umuulan, maaapektuhan ang lakaran at ilang stall.",
          "Mainam na magplano ng panloob o half-indoor na opsyon bilang backup.",
        ],
      },
      {
        heading: "Café hopping bilang kapalit",
        paragraphs: [
          "Sikat ang Tagaytay sa kultura ng café, kaya natural na follow-up ito pagkatapos ng bulalo—mainit na kapalit ng ulan.",
          "Para sa mga spot, tingnan ang coffee near Mahogany at viewpoint cafés pages.",
        ],
      },
      {
        heading: "Mga panloob na pwedeng puntahan",
        bullets: [
          "Café malapit sa market (mainit na inumin, tanaw kung humupa ang ulan)",
          "Mga venue sa ridge na may bahaging covered",
          "Tindahan at pasalubong center sa loob ng market",
        ],
        callout: "Kumpirmahin ang oras at availability sa operator—ang ibang atraksyon ay sarado sa ilang araw.",
      },
      {
        heading: "Gamit kapag umuulan",
        paragraphs: [
          "Magdala ng payong at waterproof layer. Para sa buong listahan, tingnan ang what-to-bring page.",
          "Magdrive nang maingat; ang mga kalsada sa ridge ay pwedeng maging madulas kapag basa.",
        ],
      },
    ],
    faq: [
      {
        question: "Bukas ba ang market kapag maulan?",
        answer: "Half-open ang market, kaya may mga stall na nag-o-operate, pero kumpirmahin sa live listing bago pumunta.",
      },
      {
        question: "Saan pwede tumambay kapag umuulan?",
        answer: "Ang mga café malapit sa market ay mainam na pahinga habang humuhupa ang ulan.",
      },
      {
        question: "Safe ba magdrive kapag maulan?",
        answer: "Mag-ingat lamang; ang ridge roads ay pwedeng maging madulas. Kumpirmahin ang kondisyon bago umalis.",
      },
      {
        question: "May indoor attraction ba sa Tagaytay?",
        answer: "Limitado—karaniwan ay café at ilang venue. I-check ang live na impormasyon bago pumunta.",
      },
    ],
  },
  "manila-day-trip": {
    code: "MNLDT",
    slug: "manila-day-trip",
    layer: "itinerary",
    title: "Day Trip sa Tagaytay mula Maynila (Mahogany Market)",
    description:
      "Round trip sa loob ng isang araw: window ng transport, market + 1–2 lugar, at balik-Maynila.",
    h1: "Day Trip mula Maynila",
    lead: "Pwedeng day trip lang mula Maynila: market + isa o dalawang spot, tapos balik sa gabi.",
    updated: "Oktubre 2026",
    keywords: ["day trip tagaytay from manila", "mahogany market day tour", "manila to tagaytay day trip", "tagaytay one day from manila"],
    related: ["how-to-get-there", "half-day-trip", "budget-guide"],
    sections: [
      {
        heading: "Round trip sa isang araw",
        paragraphs: [
          "Pwedeng day trip lang mula Maynila: market + isa o dalawang spot, tapos balik sa gabi.",
          "Mainam ito kung limitado ang oras pero gusto ng buong experience.",
        ],
      },
      {
        heading: "Window ng transport",
        bullets: [
          "Maagang bus papunta (iwas traffic)",
          "Kumpirmahin ang huling bus pabalik",
          "Maglaan ng buffer para sa uwian",
        ],
        callout: "Maglaan ng buffer para sa traffic—ang weekend ay mas matagal.",
      },
      {
        heading: "Budget",
        paragraphs: [
          "Hatiin ang transport, food at (kung drive) parking.",
          "Tingnan ang gabay sa budget para sa detalye.",
        ],
      },
      {
        heading: "Halimbawa",
        paragraphs: [
          "Market → Picnic Grove → balik Maynila.",
          "Tingnan ang half-day-trip page para sa mas maikling variant.",
        ],
      },
    ],
    faq: [
      {
        question: "Pwede bang day trip mula Maynila?",
        answer: "Oo, market + isang spot ay kayang-kaya sa isang araw.",
      },
      {
        question: "Gaano katagal ang byahe?",
        answer: "Humigit-kumulang 2 oras bawat way, depende sa traffic.",
      },
      {
        question: "Anong oras umuwi?",
        answer: "Kumpirmahin ang huling bus pabalik bago maglakbay.",
      },
      {
        question: "Magkano ang budget?",
        answer: "Range depende sa grupo; tingnan ang gabay sa budget.",
      },
    ],
  },
  "couple-itinerary": {
    code: "COUPLE",
    slug: "couple-itinerary",
    layer: "itinerary",
    title: "Couple na Plano: Bulalo + Tanaw + Sunset",
    description:
      "Para sa date: bulalo + café na may tanaw + sunset; kalmadong pacing.",
    h1: "Couple na Plano",
    lead: "Para sa date, gawing kalmado: bulalo, café na may tanaw, at sunset.",
    updated: "Oktubre 2026",
    keywords: ["tagaytay date", "couples mahogany market", "romantic tagaytay itinerary", "bulalo date idea"],
    related: ["viewpoint-cafes", "taal-lake-view", "coffee-near-mahogany"],
    sections: [
      {
        heading: "Para sa date",
        paragraphs: [
          "Ang bulalo + café na may tanaw + sunset ay kalmadong combination.",
          "Ito ang payo para sa relaxed na araw nang dalawa.",
        ],
      },
      {
        heading: "Halimbawa",
        bullets: [
          "Umaga: market (bulalo)",
          "Tanghali: café na may tanaw",
          "Hapon: Taal view",
          "Gabi: sunset",
        ],
        callout: "Piliin ang kanluran side para sa sunset view.",
      },
      {
        heading: "Café",
        paragraphs: [
          "Tingnan ang coffee-near-mahogany at viewpoint-cafes pages para sa spots.",
        ],
      },
      {
        heading: "Kung umuulan",
        paragraphs: [
          "Kung umuulan, may café fallback.",
          "Tingnan ang rainy-day page para sa plano.",
        ],
      },
    ],
    faq: [
      {
        question: "Anong plano para sa date?",
        answer: "Bulalo + café na may tanaw + sunset; kalmadong pacing.",
      },
      {
        question: "Saan ang best sunset?",
        answer: "Sa kanluran ridge / café; tingnan ang taal-lake-view.",
      },
      {
        question: "Pwede bang maulan?",
        answer: "Oo, may café backup—tingnan ang rainy-day.",
      },
      {
        question: "Ilang oras ang kailangan?",
        answer: "Buong araw o kalahati, depende sa pacing.",
      },
    ],
  },
  "family-itinerary": {
    code: "FAMILY",
    slug: "family-itinerary",
    layer: "itinerary",
    title: "Pamilyang Gala: Mahogany Market + Sky Ranch",
    description:
      "Pamilya: market + Sky Ranch/Picnic Grove; pahingahan at snack nodes.",
    h1: "Family na Plano",
    lead: "Para sa pamilya, pagsamahin ang market at isang family-friendly na spot gaya ng Sky Ranch.",
    updated: "Oktubre 2026",
    keywords: ["tagaytay with family", "kids day out mahogany", "family itinerary tagaytay", "market + sky ranch"],
    related: ["sky-ranch", "picnic-grove", "with-kids"],
    sections: [
      {
        heading: "Para sa pamilya",
        paragraphs: [
          "Market + Sky Ranch o Picnic Grove ay family-friendly combo.",
          "Magpahinga sa bawat stop lalo na kung may bata.",
        ],
      },
      {
        heading: "Halimbawa",
        bullets: [
          "Market (kain)",
          "Sky Ranch (rides) o Picnic Grove (pahinga)",
        ],
        callout: "Magpahinga sa bawat stop—lalo na kung may bata.",
      },
      {
        heading: "Payo",
        paragraphs: [
          "Tingnan ang with-kids page para sa karagdagang payo.",
        ],
      },
      {
        heading: "Budget",
        paragraphs: [
          "Tingnan ang gabay sa budget para sa hati-hati ng gastos.",
        ],
      },
    ],
    faq: [
      {
        question: "Anong plano para sa pamilya?",
        answer: "Market + Sky Ranch o Picnic Grove; magpahinga sa bawat stop.",
      },
      {
        question: "Safe ba para sa bata?",
        answer: "Oo, family-friendly ang spots; bantayan lang ang lakaran.",
      },
      {
        question: "Gaano katagal?",
        answer: "Buong araw kung kasama ang ride; kalahati kung market lang.",
      },
      {
        question: "Anong dapat dalhin?",
        answer: "Tingnan ang what-to-bring at with-kids pages.",
      },
    ],
  },
  "evening-night-visit": {
    code: "NIGHT",
    slug: "evening-night-visit",
    layer: "itinerary",
    title: "Mahogany Market sa Gabi? Oras at Alternatibo",
    description:
      "Linawin na hindi night market ang lugar; hangganan ng gabi, at dinner alternatibo (live listing).",
    h1: "Mahogany Market sa Gabi",
    lead: "Hindi ito night market—ito ang boundary ng oras nito at kung saan kumain sa gabi.",
    updated: "Oktubre 2026",
    keywords: ["mahogany market at night", "open evening tagaytay", "night market tagaytay mahogany", "dinner near mahogany"],
    related: ["market-hours", "best-time-to-visit", "rainy-day"],
    sections: [
      {
        heading: "Hindi night market",
        paragraphs: [
          "Ang market ay hindi night market; karaniwang sarado na sa gabi.",
          "Ang listing noong 19 Oktubre 2026 ay 06:00–17:00 para sa market.",
        ],
      },
      {
        heading: "Hangganan ng gabi",
        bullets: [
          "06:00–17:00 ang market (listing 19 Okt)",
          "Ang bulalohan ay maaaring mas maikling oras",
        ],
        callout: "Kung gusto ng gabi, hanapin ang dinner spot sa labas ng market—i-check ang live.",
      },
      {
        heading: "Dinner alternatibo",
        paragraphs: [
          "May café at restaurant sa Tagaytay na bukas sa gabi.",
          "Tingnan ang coffee-near-mahogany page para sa options.",
        ],
      },
      {
        heading: "Kung maulan",
        paragraphs: [
          "Ang gabi + ulan ay mas limitado; tingnan ang rainy-day page.",
        ],
      },
    ],
    faq: [
      {
        question: "Bukas ba ang market sa gabi?",
        answer: "Hindi ito night market—karaniwang sarado na sa gabi (listing: 06:00–17:00).",
      },
      {
        question: "Saan kumain sa gabi?",
        answer: "Sa café o restaurant sa Tagaytay; i-check ang live listing para sa oras.",
      },
      {
        question: "Pwede bang mag-bulalo sa gabi?",
        answer: "Ang market bulalohan ay maaaring sarado na; hanapin ang bukas na spot sa labas.",
      },
      {
        question: "May night view ba?",
        answer: "Ang Taal view ay pwede sa gabi kung bukas ang venue; tingnan ang taal-lake-view.",
      },
    ],
  },
};

export const TOPIC_SLUGS: string[] = Object.keys(TOPICS);
