// Single source of truth for site-wide constants and the data that will be
// swapped out when the client supplies real assets (orchestra photo, Tamayo
// portrait, Watch videos, testimonial videos/quotes).

export const FORM_URL = "https://forms.gle/8YywEq82rTtJb82o8";
export const CONTACT_EMAIL = "lorenzopad4@gmail.com";
export const CONTACT_NAME = "Lorenzo Padrin";

export const EVENT = {
  title: "Conducting Masterclass",
  location: "Berlin",
  dates: "October 5–8, 2026",
  deadline: "September 1, 2026",
  spots: 8,
};

// Set `src` (a path under /public, e.g. "/images/maestro.jpg") once supplied.
// While null, the section renders an on-brand styled placeholder frame.
export const MAESTRO_PHOTO: { src: string | null; alt: string } = {
  src: "/images/tamayo-portrait.png",
  alt: "Portrait of Maestro Arturo Tamayo",
};

export const ORCHESTRA_PHOTO: { src: string | null; alt: string } = {
  src: "/images/orchestra-philharmonie.jpg",
  alt: "The Berliner Symphoniker in the Berlin Philharmonie",
};

// Watch section — set `url` to a YouTube/Vimeo embed URL once supplied.
// Watch section — `url` is a YouTube embed URL, `description` shows beneath it.
export const WATCH_VIDEOS: {
  url: string | null;
  label: string;
  description?: string;
}[] = [
  {
    url: "https://www.youtube.com/embed/ym-cOKR9ZRs",
    label: "Arturo Tamayo conducts Debussy — La Mer",
    description:
      'Arturo Tamayo conducts C. Debussy "Le Mer" with Orquestra de la Radio Televisión Española',
  },
  {
    url: "https://www.youtube.com/embed/3KNzStSAcY0?start=82",
    label: "Arturo Tamayo conducts Elgar — Cello Concerto",
    description:
      "Arturo Tamayo conducts E. Elgar, Cello Concerto. with Orquestra de la Radio Televisión Española and Arturo Muruzábal (cello)",
  },
  {
    url: "https://www.youtube.com/embed/HxfZzxMMCwE",
    label: "Arturo Tamayo conducts Hindemith — Gesänge op. 9",
    description:
      "Arturo Tamayo conducts Hindemith Gesänge op. 9, Karan Armstrong (soprano) with the Orchestre National de France",
  },
  {
    url: "https://www.youtube.com/embed/JNfFeQ9iqY0",
    label: "Arturo Tamayo conducts Boulez — 3ème Improvisation sur Mallarmé",
    description:
      "Arturo Tamayo Conducts Pierre Boulez | 3ème Improvisation sur Mallarmé",
  },
];

// Testimonials — `id` is a YouTube Shorts video id (vertical 9:16), shown via a
// privacy-enhanced facade player; `quote` and attribution render beneath it.
export const TESTIMONIALS: {
  id: string;
  quote: string;
  name: string;
  role: string;
}[] = [
  {
    id: "JT7S9E4X9n8",
    quote: `"It's been a wonderful couple of days. It's been really wonderful to work with Maestro Tamayo who's a formidable interpreter and incredibly experienced conductor"`,
    name: "Cristopher Knox Oakey",
    role: "Active Participant, Berlin 2026",
  },
  {
    id: "JzlvJFn1dk8",
    quote: `"It was absolutely fabulous, I learned so much." He would "100%" recommend the masterclass to other conductors.`,
    name: "Andrew Casey",
    role: "Active Participant, Berlin 2025",
  },
  {
    id: "sYqyiB5qcjM",
    quote: `"This was a very intense week, but also an amazing week. The Berliner Symphoniker is a very nurturing ensemble, flexible, open to new ideas and nurturing young talent and helping conductors grow"`,
    name: "Quinn Mason",
    role: "Active Participant, Berlin 2025",
  },
];
