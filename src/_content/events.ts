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
  source?: string,
  attendees?: number,
}[] = [
    {
      title: 'ReactID Bali Meetup',
    date: date('2025-01-18', '14:00', '08:00'),
    description: 'Bergabunglah di ReactID Bali Meetup, sebuah acara kolaborasi antara GDG Bali, BaliJS, dan ReactID. Kesempatan emas untuk belajar, berbagi, dan memperluas jaringan dengan sesama developer React di Bali.',
      image: '/events/_1.png',
    featured: true,
    },
    {
      title: 'Tech Meetup: Frontend Drama',
      date: date('2024-07-27', '13:00', '07:00'),
      description: 'Meetup dan ngobrol santai seputar drama di dunia Frontend Web. Membahas situasi frontend saat ini, spesifik library/framework (React, Vue, Angular, dsb), arsitektur, komunitas, dsb',
      image: '/events/_2.png',
      featured: true,
    },
    {
      title: 'Meetup #6',
      date: date('2020-01-31', '19:00', '07:00'),
      description: 'Pelajari cara mengoptimalkan aplikasi React dengan Apollo serta meningkatkan performa menggunakan useCallback dan useMemo. Sesi ini cocok untuk pemula maupun developer berpengalaman yang ingin memperdalam keterampilan React!',
      image: '/events/_3.png',
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
          role: "Host, Speaker",
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
    }
  ]
