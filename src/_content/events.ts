// Database event paling keren sedunia.

import { people, type People } from "./people"

function date(
  date: `${ number }-${ number }-${ number }`,
  time: `${ number }:${ number }`,
  tz: `${ number }:${ number }` = '07:00'
) {
  return new Date(`${ date }T${ time }:00+${ tz }`)
}

export const events: {
  title: string,
  date: Date,
  end?: Date,
  description?: string,
  details?: string,
  image?: string,
  place?: {
    name?: string,
    address?: string,
    map?: string,
  }
  speakers?: {
    role: string,
    profile: People,
  }[],
  featured?: boolean,
  source: string,
  attendees?: number,
  pictures?: {
    url: string,
    uploaded?: Date,
  }[],
  links?: {
    text: string,
    url: string,
  }[]
}[] = [
    {
    source: "https://docs.google.com/forms/d/e/1FAIpQLSdsc0g5EZix0-_fhqDs_kWeX-nZR_YHwRRDXP5GTuu-DbxbvA/viewform",
      title: 'ReactID Bali Meetup',
    date: date('2025-01-18', '14:00', '08:00'),
    description: 'Bergabunglah di ReactID Bali Meetup, sebuah acara kolaborasi antara GDG Bali, BaliJS, dan ReactID. Kesempatan emas untuk belajar, berbagi, dan memperluas jaringan dengan sesama developer React di Bali.',
    image: '/events/bali-meetup.png',
    place: {
      name: "Primakara University",
      address: "Jl. Tukad Badung No.135, Renon, Denpasar Selatan, Kota Denpasar, Bali 80226, Indonesia",
      map: "https://maps.app.goo.gl/2kBavLygFLxs8EBW8",
    },
    speakers: [
      {
        role: "Host",
        profile: people.praburangki
      },
      {
        role: "Speaker",
        profile: people.kresnasatya,
      },
      {
        role: "Speaker",
        profile: people.wahyuivan,
      },
      {
        role: "Organizer",
        profile: people.wahyubudi
      },
      {
        role: "Organizer",
        profile: people.zainfathoni,
      },
    ],
    details: `Join Google Developer Group Bali, BaliJS, and ReactID, for the first-ever ReactID Bali Meetup!

This exciting tech talk event will be held on:

Day, Date: Saturday, January 18th, 2025
Time: 2:00 PM WITA
Location: Primakara University.

Our speakers:

Zain Fathoni: Exploring React Router v7 as a Bridge to React 19
Kresna Satya: React & Svelte Vibes
Wahyu Ivan: Mati Ketimpa state dan useEffect: How to Use It in a Better Way
Don't miss this chance to be a part of this inaugural event!

Space is limited, so register now!

We look forward to seeing you there!`,
    featured: true,
    },
    {
      source: "https://bandungdev.com/events/2024-07-27",
      title: 'Tech Meetup: Frontend Drama',
      date: date('2024-07-27', '13:00', '07:00'),
      description: 'Meetup dan ngobrol santai seputar drama di dunia Frontend Web. Membahas situasi frontend saat ini, spesifik library/framework (React, Vue, Angular, dsb), arsitektur, komunitas, dsb',
      image: 'https://ucarecdn.com/710046cd-a1ab-448a-858f-1c7310185856/-/crop/2000x1123/0,39/-/preview/',
      place: {
        name: "MARKAS Bandung / Alkademi",
        address: "Jl. Cisitu Indah VI No.6, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135",
        map: "https://maps.app.goo.gl/vNssDiCwaywtUrEF7",
      },
      details: `👋😁 Halo para software developer di Bandung dan manapun

🏯 BandungDev akan mengadakan Tech Meetup: Frontend Drama

🎤 Ayo ikutan meetup dan ngobrol santai seputar drama di dunia Frontend Web. Membahas situasi frontend saat ini, spesifik library/framework (React, Vue, Angular, dsb), arsitektur, komunitas, dsb

M Haidar Hanif, Lead BandungDev & Founder Bearmentor linkedin.com/in/mhaidarhanif

Alfan Hidayatullah, CTO Alkademi linkedin.com/in/alfanhidayatullah

Alif Anantomi Budiarta, Frontend Developer Alkademi linkedin.com/in/alifanantomi

Kemungkinan akan ada speaker lain, detail menyusul

Dengan MARKAS Bandung & Alkademi sebagai penyedia tempat

Kapan dan di mana?

🗓️ Sabtu 27 Juli 2024

🕐 13:00 – 16:00 WIB, harap datang lebih awal agar lebih santai

📍 MARKAS Bandung, Jl. Cisitu Indah, Dago maps.app.goo.gl/vNssDiCwaywtUrEF7

🎟 Tiket gratis, terbatas untuk 50 orang

📜 Detail ini terdapat juga di bandungdev.com/events/2024-07-27

📝 Tertarik ikutan? Daftar di bandungdev.com/register

Jika kehabisan tiket/kursi, silakan pantau grup Telegram BandungDev t.me/bandungdevcom

Sampai ketemu di sana!
Tim BandungDev`,
      featured: true,
    },
    {
      source: 'https://www.meetup.com/reactindonesia/events/228745645',
      title: 'Modern Programming in 2016',
      date: date('2016-02-27', '15:00'),
      place: {
        name: 'Skystar Ventures, University Multimedia Nusantara (UMN)',
        address: 'New Media Tower Lv. 12, Jl. Scientia Boulevard · Gading Serpong, Tangerang',
        map: 'https://www.google.com/maps/search/?api=1&query=-6.257001%2C%20106.61821'
      },
      attendees: 39,
      speakers: [
        {
          role: "Host, Speaker",
          profile: people.sstur,
        },
        {
          role: "Speaker",
          profile: people.rizafahmi,
        },
        {
          role: "Speaker",
          profile: people.giosakti,
        },
      ],
      pictures: [
        {
          url: "https://secure.meetupstatic.com/photos/event/4/7/d/e/highres_447258398.webp",
          uploaded: new Date("2016-02-27")
        }
      ],
      details: `This is our first meetup! We will have 3 short talks about modern software development. It will not be advanced topics. This will be friendly for beginners (and fun for experienced coders).

Short talks (about 20 min each):

Talk 1 - "Introducing Meteor" - Riza Fahmi - Mad computer scientist, the author of elixirdose.com and podcaster (podcast.appsco.id)

Talk 2 - "Getting started with Ruby on Rails 5" by Giovanni Sakti, organizer of Jakarta.rb (https://www.meetup.com/jakartarb/) (Jakarta Ruby Brigade).

Talk 3 - "Modern Coding Tools" by Simon Sturmer, JavaScript coder and co-founder at KodeFox.`,
    },
    {
      source: 'https://www.meetup.com/reactindonesia/events/234636840',
      title: "React Workshop",
      date: date('2016-10-15', '11:00'),
      end: date('2016-10-15', '15:00'),
      place: {
        name: 'Traveloka HQ',
        address: 'Wisma 77 Tower 2 Lantai 21 · Jakarta Barat',
        map: 'https://www.google.com/maps/search/?api=1&query=-6.189936%2C%20106.798737'
      },
      attendees: 70,
      speakers: [
        {
          role: "Organizer, Speaker",
          profile: people.sstur,
        },
        {
          role: "Speaker",
          profile: people.rizafahmi,
        },
        {
          role: "Speaker",
          profile: people.asendia,
        },
      ],
      pictures: [
        {
          url: "https://secure.meetupstatic.com/photos/event/7/c/e/4/highres_455071972.webp",
          uploaded: new Date("2016-10-15")
        },
        {
          url: "https://secure.meetupstatic.com/photos/event/7/c/e/d/highres_455071981.webp",
          uploaded: new Date("2016-10-15")
        },
        {
          url: "https://secure.meetupstatic.com/photos/event/7/c/f/9/highres_455071993.webp",
          uploaded: new Date("2016-10-15")
        },
        {
          url: "https://secure.meetupstatic.com/photos/event/7/d/0/3/highres_455072003.webp",
          uploaded: new Date("2016-10-15")
        },
      ],
      details: `Join us for our first React Workshop in Jakarta. We will meet on Saturday, 15th October at 11am at Traveloka HQ.

UPDATE: Please change your RSVP if you cannot attend. We have a lot of people on the waiting list.

We will start with two short talks about how to get started with React. Then we will eat lunch together and then form groups of 3-4 people to build something cool with React.

There will be Mentors and React experts available to help your group with React and help you with ideas of what to build.

Please bring your laptop so you can write some code as part of a group. You should have a basic understanding of JavaScript and be prepared to learn cool stuff.

This event is free and some food will be provided.

Special thanks to Traveloka for providing the space and some snacks.

I look forward to seeing you all soon!

Happy Reacting!

~~

Ikuti React Workshop di Jakarta. Bertemu Sabtu, 15th Oktober jam 11 pagi di Traveloka HQ.

Kita akan mulai dengan presentasi pendek mengenai bagaimana memulai dengan React. Lalu, kita makan siang bersama dan membentuk kelompok 3 - 4 orang untuk membuat sesuatu yang keren dengan React.

Akan ada mentor dan expert React yang bersedia membantu kelompokmu dan mungkin memberikan ide atau masukan terhadap ide kalian.

Tolong bawa laptop masing-masing supaya bisa langsung mulai menulis kode dalam kelompok. Kamu harus punya pemahaman dasar tentang JavaScript, tapi jika belum kamu tetap bisa belajar dari JS dev yang lain dan belajar membuat hal-hal keren.

Acara ini gratis dan ada makanan yang disediakan.

Terima kasih untuk Traveloka yang sudah menyiapkan tempat dan snack.

Sampai berjumpa nanti!

Happy Reacting`
    },
    {
      source: "https://www.meetup.com/reactindonesia/events/237901182",
      title: "React Meetup March 2017",
      date: date('2017-03-07', '18:30'),
      end: date('2017-03-07', '21:30'),
      place: {
        name: "Hactiv8",
        address: "Gedung Aquarius, Jalan Sultan Iskandar Muda No. 7, Arteri Pondok Indah · Jakarta",
        map: "https://www.google.com/maps/search/?api=1&query=-6.26064%2C%20106.781456"
      },
      image: "https://photos4.meetupstatic.com/photos/event/8/7/4/a/600_458554634.jpeg",
      speakers: [
        {
          role: "Host, Speaker",
          profile: people.sstur,
        },
        {
          role: "Speaker",
          profile: people.rizafahmi,
        },
        {
          role: "Speaker",
          profile: people.broerjuang,
        },
        {
          role: "Organizer",
          profile: people.sonnylazuardi,
        }
      ]
    },
    {
      source: "https://www.meetup.com/reactindonesia/events/238996101",
      title: "React April Meetup",
      date: date('2017-04-10', '18:30'),
      end: date('2017-04-10', '21:30'),
      place: {
        name: "Hactiv8",
        address: "Gedung Aquarius, Jalan Sultan Iskandar Muda No. 7, Arteri Pondok Indah · Jakarta",
        map: "https://www.google.com/maps/search/?api=1&query=-6.26064%2C%20106.781456"
      },
      image: "https://cdn.evbuc.com/images/30032752/185198540134/1/original.jpg",
      attendees: 30,
      speakers: [
        {
          role: "Organizer",
          profile: people.rizafahmi,
        },
        {
          role: "Organizer",
          profile: people.sstur
        },
        {
          role: "Organizer",
          profile: people.sonnylazuardi,
        },
        {
          role: "Speaker",
          profile: people.radiegtya,
        },
        {
          role: "Speaker",
          profile: people.achillesjorgie,
        },
        {
          role: "Speaker",
          profile: people.oshimayoan,
        },
        {
          role: "Speaker",
          profile: people.viankakrisna,
        },
      ],
      details: `Mari bertemu dalam React Meetup edisi April 2017. Kita akan melihat empat topik yang sangat menarik dari pembicara yang oke-oke.

Bagi kamu yang tidak bisa datang join secara langsung, kamu bisa menyaksikan livestream kami di http://live.hacktiv8.com (kamu tidak perlu melakukan registrasi untuk join di livestream).

Silakan ke halaman eventbrite berikut (https://www.eventbrite.com/e/reactid-april-2017-meetup-tickets-32249570333) bagi yang ingin bergabung.

Spekaers:

Ega Radiegtya

Topic: Offline First Mobile App dengan React Native dan Realm

Pekerjaan sekarang: CTO CyberMANTRA, salah satu software development dan perusahaan IT Security di Indonesia yang berlokasi di Jogjakarta. Sudah menggunakan React dan React Native di production sejak lama.

Jorgie Rizaldi

Topic: React Native Animated

Seorang fresh graduate dari Universitas Multimedia Nusantara yang antusias terhadap pengembangan mobile apps. Setelah mengenal React Native dan menyelesaikan bootcamp di KodeFox, ia semakin bersemangat dalam mempelajari dan menerapkan berbagai React helper library untuk menghasilkan apps yang berkualitas. Selain itu, ia juga mempunyai hobi dalam seni dan design yang mendorongnya untuk mempelajari pembuatan UI dan UX dalam pengembangan apps. Hal tersebut menjadikannya seorang developer sekaligus UI designer di KodeFox

Yoan Pratama Putra

Topic: Testing React Using Jest

Seorang developer yang merupakan fans dari Mark Zuckerberg yang menempuh pendidikan di Universitas Multimedia Nusantara ini sangat tertarik dengan Rich Internet Application. Ia juga sangat antusias dengan JavaScript setelah sempat bekerja sebagai Front-End Web Developer sebelumnya. Sekarang ia bergabung dengan KodeFox dan mendapatkan banyak ilmu baru dari bootcamp KodeFox.

Ade Viankakrisna Fadlil

Topic: Adopting React Incrementally in a Running App

Front End Engineer dengan pengalaman lebih dari 3 tahun dalam dunia web development. Aktif berkontribusi di dunia open source seperti Create React App dan Eslint Loader. Saat ini sedang mendalami dan menyukai React.js.

Almamater Universitas Indonesia dan memulai karir di salah satu Web Agency sebagai WordPress Engineer, menangani banyak project dari berbagai Industri.

Sekarang menjadi Lead Front End Engineer di IDAFF, dan sedang melakukan optimisasi dengan menggunakan React. Percaya dengan incremental changes to do things right.

Event ini GRATIS. Buat yang ingin bergabung, silakan ke halaman eventbrite berikut ini (https://www.eventbrite.com/e/reactid-april-2017-meetup-tickets-32249570333).

Sampai bertemu!`,
    },
    {
      source: "https://www.meetup.com/reactindonesia/events/263022521",
      title: "ReactJS Indonesia Meetup #1 July 2019",
      date: date('2019-07-16', '19:00'),
      end: date('2019-07-16', '22:00'),
      image: "https://secure.meetupstatic.com/photos/event/b/1/2/2/600_483045346.webp",
      place: {
        name: "PT. Qlue Performa Indonesia",
        address: "Jl. Pejaten Barat Raya No.13, RT.1/RW.8 · Kota Jakarta Selatan, Da",
        map: "https://www.google.com/maps/search/?api=1&query=-6.276023%2C%20106.82222",
      },
      attendees: 81,
      speakers: [
        {
          role: "Organizer",
          profile: people.adibfirman
        },
        {
          role: "Organizer",
          profile: people.praditautama,
        },
        {
          role: "Organizer",
          profile: people.resir
        },
        {
          role: "Organizer, Speaker",
          profile: people.r17x
        },
        {
          role: "Organizer, Speaker",
          profile: people.zainfathoni
        },
        {
          role: "Speaker",
          profile: people.dgana
        },
        {
          role: "Speaker",
          profile: people.mirzagarin
        }
      ],
      details: `After a few dormant years, let's resurrect React Indonesia community! 😄

Our upcoming meetup will be held on Tuesday, 16 July 2019 at 7:00 PM at Qlue office.

All topics will be both friendly for beginners and fun for experienced coders.

Rundown:

• Welcome Notes - Qlue

• Talk 1 - "React Hooks in 20 Minutes" by Ida Bagus Chahya Dhegana, Lead Frontend Engineer at Qlue

• Talk 2 - "Gaining Confidence in React App through Testing" by Zain Fathoni, Senior Software Engineer at Ninja Van (Ninja Xpress)

• Talk 3 - "React Offline First" by R Adysurya A, Frontend Engineer at Valutac

• Talk 4 - "Smart Dumb Component vs Logic Container Components" by Mirza Garin, Software Engineer at AccelByte Inc.

• Networking and discussion

This event is FREE, snacks and drinks will be provided. 😋

We look forward to seeing you all soon!

Happy Reacting!

---

Setelah tidur panjang selama beberapa saat, mari kita hidupkan kembali komunitas React Indonesia! 😄

Meetup mendatang akan diselenggarakan pada hari Selasa, tanggal 16 Juli 2019 pukul 19:00 WIB di kantor Qlue.

Seluruh topik di pertemuan ini ramah bagi pemula, namun tetap menarik bagi yang sudah berpengalaman sekalipun.

• Sambutan Pembuka - Qlue

• Sesi 1 - "React Hooks in 20 Minutes" oleh Ida Bagus Chahya Dhegana, Lead Frontend Engineer di Qlue

• Sesi 2 - "Gaining Confidence in React App through Testing" oleh Zain Fathoni, Senior Software Engineer di Ninja Van (Ninja Xpress)

• Sesi 3 - "React Offline First" by R Adysurya A, Frontend Engineer di Valutac

• Sesi 4 - "Smart Dumb Component vs Logic Container Components" oleh Mirza Garin, Software Engineer di AccelByte Inc.

• Berjejaring dan diskusi

Acara ini GRATIS, makanan ringan dan minuman akan disediakan. 😋

Sampai jumpa nanti!

Happy Reacting!`
    },
    {
      source: "https://www.meetup.com/reactindonesia/events/264687602",
      title: "ReactJS Indonesia x Shopee Meetup #3 September 2019",
      date: date('2019-09-25', '18:30'),
      end: date('2019-09-25', '21:00'),
      place: {
        name: "Shopee Indonesia",
        address: "Jl. Jenderal Sudirman No.52-53 · Kota Jakarta Selatan, Da",
        map: "https://www.google.com/maps/search/?api=1&query=-6.227689%2C%20106.808334"
      },
      image: "https://secure.meetupstatic.com/photos/event/d/9/f/f/600_484975807.webp",
      attendees: 150,
      speakers: [
        {
          role: "Organizer",
          profile: people.r17x,
        },
        {
          role: "Organizer, Speaker",
          profile: people.adibfirman,
        },
        {
          role: "Organizer",
          profile: people.zainfathoni,
        },
        {
          role: "Speaker",
          profile: people.ahmadfajar
        }
      ],
      links: [
        {
          text: "Post form Shopee on LinkedIn",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6584739002270736385/"
        },
        {
          text: "Documentation Link",
          url: "https://drive.google.com/drive/u/0/mobile/folders/1JWCEpT5-DGruEvPyu38fQ4_JtKMGIbcn"
        },
      ],
      details: `Our upcoming meetup will be held on Wednesday, 25 September 2019 with Shopee Indonesia, at Pacific Century Place (PCP) Tower, 27th Floor SCBD Lot 10, Jl. Jendral Sudirman No 52-53

All topics will be both friendly for beginners and fun for experienced coders.

Rundown:

• Opening Speech by Shopee

• Talk 1 - "Micro-FE with React" by Ahmad Fajar Frontend Engineer at Shopee

• Talk 2 - "Avoid these when using Hooks" by Adib Firman Frontend Engineer at Qlue

• Networking and discussion

This event is FREE, snacks and drinks will be provided. 😋

Seats are limited, only 150 people can be attend.

We look forward to seeing you all soon!

Happy Reacting!

---

Meetup mendatang akan diselenggarakan pada hari Rabu, tanggal 25 September 2019 pukul 19:00 WIB bersama Shopee Indonesia, di Pacific Century Place (PCP) Tower, 27th Floor SCBD Lot 10, Jl. Jendral Sudirman No 52-53

Seluruh topik di pertemuan ini ramah bagi pemula, namun tetap menarik bagi yang sudah berpengalaman sekalipun.

• Sambutan Pembuka dari Shopee

• Sesi 1 - "Micro-FE with React" by Ahmad Fajar Frontend Engineer at Shopee

• Sesi 2 - "Avoid these when using Hooks" by Adib Firman Frontend Engineer at Qlue

• Berjejaring dan diskusi

Acara ini GRATIS, makanan ringan dan minuman akan disediakan. 😋

Seat terbatas, hanya 150 orang yang dapat menghadiri.

Sampai jumpa nanti!

Happy Reacting!`
    },
    {
      source: "https://www.meetup.com/reactindonesia/events/268139930/?eventOrigin=group_events_list",
      title: "ReactJS Indonesia x Hacktiv8 Meetup #4 October 2019",
      date: date('2019-10-29', '18:30'),
      end: date('2019-10-29', '21:30'),
      place: {
        name: "Hacktiv8 Indonesia",
        address: "Jl. Arteri Pd. Indah No.7, RT.5/RW.9 · Kota Jakarta Selatan, Da",
        map: "https://www.google.com/maps/search/?api=1&query=-6.260719%2C%20106.78162"
      },
      image: "https://secure.meetupstatic.com/photos/event/c/0/3/e/600_486049214.webp",
      speakers: [
        {
          role: "Organizer",
          profile: people.r17x,
        },
        {
          role: "Organizer",
          profile: people.adibfirman,
        },
        {
          role: "Organizer",
          profile: people.resir,
        },
        {
          role: "Organizer",
          profile: people.zainfathoni,
        },
        {
          role: "Speaker",
          profile: people.pveyes,
        },
        {
          role: "Speaker",
          profile: people.dotdidik,
        },
      ],
      attendees: 60,
      details: `Reactjs.id x Hacktiv8

Our upcoming meetup will be held on Tuesday, 29 October 2019 with Hacktiv8 Indonesia.

All topics will be both friendly for beginners and fun for experienced coders.

Rundown:

• Opening Speech by Hacktiv8 Indonesia.

• Talk 1 - "You should make your own Framework" by Fatih Kalifa, Software Engineer - Web Infrastructure at Traveloka.

• Talk 2 - "SPA VS SSR in React" by Didik Irawan, Academy Quality Researcher at Binar Academy.

• Networking and discussion.

This event is FREE, snacks and drinks will be provided. 😋

Seats are limited, only 60 people can be attend.

We look forward to seeing you all soon!

Happy Reacting!

---

Meetup mendatang akan diselenggarakan pada hari Selasa, 29 October 2019 pukul 18:30 WIB bersama Hacktiv8 Indonesia.

Seluruh topik di pertemuan ini ramah bagi pemula, namun tetap menarik bagi yang sudah berpengalaman sekalipun.

• Sambutan Pembuka dari Hacktiv8 Indonesia.

• Talk 1 - "You should make your own Framework" by Fatih Kalifa, Software Engineer - Web Infrastructure at Traveloka.

• Talk 2 - "SPA VS SSR in React" by Didik Irawan, Academy Quality Researcher at Binar Academy.

• Berjejaring dan diskusi.

Acara ini GRATIS, makanan ringan dan minuman akan disediakan. 😋

Seat terbatas, hanya 60 orang yang dapat menghadiri.

Sampai jumpa nanti!

Happy Reacting!

NOTE: Jika sudah konfirmasi kehadiran dan batal untuk hadir, Silahkan dikonfirmasi kembali yah!`
    },
    {
      source: "https://www.meetup.com/reactindonesia/events/268139930",
      title: "ReactJS Indonesia Meetup #6 January 2020",
      date: date('2020-01-31', '19:00'),
      end: date('2020-01-31', '21:00'),
      place: {
        name: "Facebook Lab Innovation Indonesia",
        address: "RT.5/RW.3 · Kota Jakarta Selatan, Da",
        map: "https://www.google.com/maps/search/?api=1&query=-6.225841%2C%20106.80539"
      },
      attendees: 90,
      image: "https://secure.meetupstatic.com/photos/event/1/2/1/3/600_488404627.webp?w=750",
      speakers: [
        {
          role: "Organizer",
          profile: people.r17x,
        },
        {
          role: "Organizer, Speaker",
          profile: people.adibfirman,
        },
        {
          role: "Organizer",
          profile: people.resir,
        },
        {
          role: "Organizer",
          profile: people.zainfathoni,
        },
        {
          role: "Speaker",
          profile: people.iamyuu
        }
      ],
      details: `Reactjs.id Meetup #6

Our upcoming meetup will be held on Friday, 31 January 2020.

All topics will be both friendly for beginners and fun for experienced coders.

Rundown:

• Talk 1 - "Approach With React Apollo" by Muhammad Yusuf, PHP Developer at Achiko.

• Talk 2 - "Deep Dive with useCallback and useMemo" by Adib Firman, Frontend Engineer at Qlue.

• Networking and discussion.

This event is FREE, snacks and drinks will be provided. 😋

Seats are limited...!!

We look forward to seeing you all soon!

Happy Reacting!

---

Meetup mendatang akan diselenggarakan pada hari Jum'at, 31 Januari 2020 pukul 19:00 WIB.

Seluruh topik di pertemuan ini ramah bagi pemula, namun tetap menarik bagi yang sudah berpengalaman sekalipun.

• Talk 1 - "Approach With React Apollo" by Muhammad Yusuf, PHP Developer at Achiko.

• Talk 2 - "Deep Dive with useCallback and useMemo" by Adib Firman, Frontend Engineer at Qlue.

• Berjejaring dan diskusi.

Acara ini GRATIS, makanan ringan dan minuman akan disediakan. 😋

Seat terbatas...!!

Sampai jumpa nanti!

Happy Reacting!

NOTE: Jika sudah konfirmasi kehadiran dan batal untuk hadir, Silahkan dikonfirmasi kembali yah!`

    }
  ]
