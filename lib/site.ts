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
  src: null,
  alt: "Portrait of Maestro Arturo Tamayo",
};

export const ORCHESTRA_PHOTO: { src: string | null; alt: string } = {
  src: null,
  alt: "The Berliner Symphoniker in the Berlin Philharmonie",
};

// Watch section — set `url` to a YouTube/Vimeo embed URL once supplied.
export const WATCH_VIDEOS: { url: string | null; label: string }[] = [
  { url: null, label: "Video placeholder — add link" },
  { url: null, label: "Video placeholder — add link" },
  { url: null, label: "Video placeholder — add link" },
];

// Testimonials — quotes/attribution are placeholder until real ones arrive.
export const TESTIMONIALS: {
  videoUrl: string | null;
  quote: string;
  name: string;
  meta: string;
}[] = [
  {
    videoUrl: null,
    quote:
      "The podium time with a professional orchestra was transformative — I walked away with a recording I'm genuinely proud to send to competitions.",
    name: "Participant placeholder",
    meta: "Conductor · Berlin 2024",
  },
  {
    videoUrl: null,
    quote:
      "Maestro Tamayo's feedback was precise, generous and deeply musical. Four days that genuinely changed how I work in front of an orchestra.",
    name: "Participant placeholder",
    meta: "Conductor · Berlin 2024",
  },
  {
    videoUrl: null,
    quote:
      "A rare chance to rehearse real repertoire with a real orchestra. The individual attention and the final video made it worth every moment.",
    name: "Participant placeholder",
    meta: "Conductor · Berlin 2023",
  },
];
