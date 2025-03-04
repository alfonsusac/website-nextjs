export type People = {
  name: string,
  github: string,
}

export const people = {
  sstur: {
    name: "Simon Sturmer",
    github: "sstur"
  },
  rizafahmi: {
    name: "Riza Fahmi",
    github: "rizafahmi",
  },
  asendia: {
    name: "Asendia M",
    github: "asendia",
  },
  giosakti: {
    name: "Giovanni Sakti",
    github: "giosakti",
  },
  broerjuang: {
    name: "Bagus Juang Wiantoro",
    github: "broerjuang",
  },
  sonnylazuardi: {
    name: "Sonny Lazuardi",
    github: "sonnylazuardi",
  }
} satisfies Record<string, People>
