export const CONTACT = {
  phone: '063 649087',
  tel: '+381649087',
  address: 'Kosovopoljska 4, Beograd',
  hours: 'Svaki dan od 11 do 19h',
  mapsUrl:
    'https://www.google.com/maps/place/Pepermint/@44.8783449,20.4592353,17z/data=!3m1!4b1!4m6!3m5!1s0x475a65346c6e545b:0xda8cb7a54ec17c17!8m2!3d44.8783449!4d20.4592353!16s%2Fg%2F11hhz6qyz6',
  mapsEmbed:
    'https://www.google.com/maps?q=Pepermint,+Kosovopoljska+4,+Beograd&ll=44.8783449,20.4592353&z=17&output=embed'
};

export const SERVICES = [
  {
    title: 'Pregled i plombe',
    desc: 'Kažemo ti tačno šta ti treba i koliko košta, bez naknadnih iznenađenja na naplati.',
    icon: '<circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path>',
    points: [
      'Prvi pregled i savet su besplatni',
      'Bele plombe koje se ne vide',
      'Anestezija tako da ništa ne osetiš',
      'Kažemo cenu pre nego što počnemo'
    ]
  },
  {
    title: 'Dečja stomatologija',
    desc: 'Prvi put pustimo dete da sedne, dodirne ogledalce i vidi da ništa ne boli.',
    icon: '<circle cx="12" cy="12" r="8"></circle><path d="M9 10h.01M15 10h.01M9 15c1 1 5 1 6 0"></path>',
    points: [
      'Prvi put je samo upoznavanje',
      'Bez naglih pokreta i bez pritiska',
      'Zalivanje fisura protiv karijesa',
      'Učimo dete kako da pere zube'
    ]
  },
  {
    title: 'Čišćenje kamenca',
    desc: 'Skinemo kamenac i naslage, ispoliramo zube i pokažemo ti gde ti ne stiže četkica.',
    icon: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"></path>',
    points: [
      'Ultrazvučno skidanje kamenca',
      'Poliranje i uklanjanje fleka',
      'Savet za pravilno pranje kod kuće',
      'Preporuka na 6 do 12 meseci'
    ]
  },
  {
    title: 'Beljenje i estetika',
    desc: 'Beljenje u ordinaciji ili fasete kad hoćeš da promeniš oblik i boju osmeha.',
    icon: '<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"></path>',
    points: [
      'Beljenje u ordinaciji za jednu posetu',
      'Fasete za oblik i boju osmeha',
      'Prvo pregled da vidimo šta ima smisla',
      'Rezultat vidiš pre nego što kreneš'
    ]
  },
  {
    title: 'Krunice i mostovi',
    desc: 'Cirkon krunice koje se ne razlikuju od tvojih zuba, radimo ih sa laboratorijom iz grada.',
    icon: '<path d="M3 9l4 3 5-6 5 6 4-3v9H3z"></path>',
    points: [
      'Cirkon krunice u boji tvojih zuba',
      'Radimo sa laboratorijom iz grada',
      'Most kad fali jedan ili više zuba',
      'Probaš izgled pre konačnog rada'
    ]
  },
  {
    title: 'Implanti',
    desc: 'Kad fali zub, ugradimo implant i ne diramo susedne zdrave zube.',
    icon: '<path d="M9 3h6M10 3v4h4V3M8 7h8l-1 5H9zM12 12v9M9 15h6M9.5 18h5"></path>',
    points: [
      'Ne brusimo susedne zdrave zube',
      '3D snimak i plan pre ugradnje',
      'Rešenje i kad fali više zuba',
      'Krunica na implant posle zarastanja'
    ]
  }
];

export const PRICES = [
  ['Prvi pregled i savet', 'besplatno'],
  ['Plomba', 'od 3.500 din'],
  ['Čišćenje kamenca', 'od 4.000 din'],
  ['Beljenje zuba', 'od 16.000 din'],
  ['Cirkon krunica', 'od 22.000 din'],
  ['Implant sa krunicom', 'od 55.000 din'],
  ['Vađenje zuba', 'od 3.000 din'],
  ['Kontrola posle terapije', 'besplatno']
];

export const FEATURES = [
  { t: '10 godina iskustva', icon: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>' },
  { t: 'Vrhunski tim stručnjaka', icon: '<circle cx="9" cy="9" r="3"></circle><path d="M2.5 19a6.5 6.5 0 0 1 13 0M17 7.5a3 3 0 0 1 0 5.4M17 19a6.5 6.5 0 0 0-2-4.7"></path>' },
  { t: 'Prijatna atmosfera', icon: '<circle cx="12" cy="12" r="9"></circle><path d="M8.5 10h.01M15.5 10h.01M8.5 14.5c1.2 1.3 5.8 1.3 7 0"></path>' },
  { t: 'Iskustvo rada sa decom', icon: '<circle cx="12" cy="6" r="2.4"></circle><path d="M12 8.4V15M7 11l5-1 5 1M9 21l3-6 3 6"></path>' },
  { t: 'Bez neprijatnog bola', icon: '<path d="M12 3s7 2 7 8c0 5-3 9-7 9s-7-4-7-9c0-6 7-8 7-8z"></path><path d="M9 12l2 2 4-4"></path>' },
  { t: 'Individualni pristup', icon: '<circle cx="12" cy="8" r="3.2"></circle><path d="M6 20a6 6 0 0 1 12 0"></path>' }
];

export const TEAM = [
  {
    img340: '/assets/tim-1-340.webp',
    img560: '/assets/tim-1-560.webp',
    name: 'dr Ana Jovanović',
    role: 'Stomatolog, protetika i cirkon krunice',
    note: 'Radi krunice i mostove osam godina. Voli da pacijent vidi kako će izgledati pre nego što se odluči.'
  },
  {
    img340: '/assets/tim-2-340.webp',
    img560: '/assets/tim-2-560.webp',
    name: 'dr Milica Ilić',
    role: 'Oralni hirurg, zubni implanti',
    note: 'Ugradila je preko 300 implanata. Objasni ti ceo plan pre nego što uzme instrument.'
  },
  {
    img340: '/assets/tim-3-340.webp',
    img560: '/assets/tim-3-560.webp',
    name: 'Jelena Petrović',
    role: 'Dentalni asistent, rad sa decom',
    note: 'Ona je prva koju vidiš kad uđeš. Sa decom se dogovori pre nego što bilo šta počne.'
  }
];

export const NAV = [
  ['#usluge', 'Usluge', 'usluge'],
  ['#cenovnik', 'Cenovnik', 'cenovnik'],
  ['#tim', 'Naš tim', 'tim'],
  ['#kako', 'Kako do nas', 'kako']
];
