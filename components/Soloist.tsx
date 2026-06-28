"use client";

import { useState } from "react";
import ImageFrame from "./ImageFrame";
import { SOLOIST_PHOTO } from "@/lib/site";

const restOfBio = [
  `She sings on stage roles like Elektra (Elektra) by Richard Strauss under the musical direction of Elda Laro; LaVoix Humaine by Francis Poulenc at the RSI Lugano; Santuzza in Mascagni's Cavalleria Rusticana in Palermo (Teatro di Verdura, Palermo) under the musical direction of Francesco Di Mauro, Die Frau in Erwartung by Arnold Schoenberg (New York- Times Square, Performa Festival), Berta in Il Barbiere di Siviglia by Rossini (Viterbo Opera) under the musical direction by Stefano Romani, Tosca by Puccini (Théatre Enghien-Les -Bains)... and prepares her roles like Lady Macbeth, Macbeth (Verdi); Turandot by Puccini; Kundry, Parsifal  (Wagner); Isolde, Tristan und Isolde (Wagner) …for her next engagements with coaches like: Klaus Salmann (Staatsoper Berlin), Kevin Mc Kutcheon/Elda Laro/Douglas Brown (Deustche Oper  Berlin), Denis Dubois (Opera de Paris)…`,
  `She made her debut at the Opera de Metz in the role of Adriana, the lead role in the worldwide premiere of Charles Chaynes's opera Mi Amor under the musical direction of Arturo Tamayo. She was immediately reengaged to sing Mimi in La Bohème by Puccini under the musical direction by Alain Gingal. She was invited to sing in different festivals and theateramong others, roles like Fiordiligi in Mozart's Cosi Fan Tutte conducted by Yannis Pouspourikas; Donna Elvira in Mozart's Don Giovanni de Mozart (Festival de Poitiers), Micaëla, Carmen Bizet under the musical conducting of Claire Levacher,(Théâtre d'Herblay); Frau/Sie/ Grossfürstin in Das Wachsfigurenkabinett by K.Hartmann (Opera national du Rhin);Iphigénie in Iphigénie en Aulide by Gluck... Finalist at the competition of the "Chambre Professionnelle des Directeurs d'Opéra" in Paris, she joined the Strasbourg National Opera's "Jeunes Voix du Rhin". Her carrer began with Zerlina, Don Giovanni (Mozart) (Opus Festival) and Prima Ancella at the Montpellier Opera in Cherubini's Medea (Ursel and Karl Ernst Hermann's Production) .`,
  `She performs regularly in concert with international orchestras such as the Orchestra Comunale del Teatro di Bologna (Isoldes Liebestod, Wagner, Erwartung by Schoenberg); the Tenerife Symphony Orchestra , the Malaga Philharmonic Orchestra (Erwartung by Schoenberg);  the Hessicher Rundfunk Symphony Orchestra (Bruno Maderna's Ausstrahlung);  the Lecce Symphonic Orchestra (Les nuits d´été by Hector Berlioz); the Prague Symphony Orchestra (Poèmes pour Mi by Messiaen) the Luxembourg Philharmonic Orchestra; the RAI National Orchestra of Torino (Offrandes by Edgard Varèse); the Granada Symphony Orchestra (Second string quartet, version for String orchestra by Arnold Schoenberg); the Portugese Symphony Orchestra (Elisabeth, Die Legende von der Heiligen Elisabeth by F.Liszt); the Bavarian Radio Symphony Orchestra; The Plural Ensemble (El Cántico by Gonzalo de Olavide) at the Reina Sofia's Auditorium in Madrid; the Ensemble Novecento e Presente (Elisabeth, Elegy for Young Lovers by Hans Werner Henze, Erwartung by Schönberg, Fredons by Betsy Jolas ), the National Philharmonic Symphony Orchestra of Moldavia (Verdi's arias); the Moravian Philharmonic Orchestra Olomouc (Les Nuits dété d'Hector Berlioz, 2026); the Sinfonietta Berlin (Vier letzte Lieder, Richard Strauss, 2026).`,
  `Carole Sidney Louis has recorded several CDs: Bruno Maderna's Ausstrahlung for Voice, Flute, Oboe and Orchestra with the Hessischer Rundfunk Symphony Orchestra for the label Neos; Estigma and Concertante-Divides by Gonzalo de Olavide, the Scherzo for Voice and Orchestra by Gerardo Gombau and Zu zer dezu by Felix Ibarrondo (released 2021) with the Madrid RTVE Symphony Orchestra for the label Orpheus.`,
];

export default function Soloist() {
  const [bioOpen, setBioOpen] = useState(false);

  return (
    <section id="soloist" className="bg-card">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-8 py-[84px] md:grid-cols-[340px_1fr] md:gap-14">
        <ImageFrame
          src={SOLOIST_PHOTO.src}
          alt={SOLOIST_PHOTO.alt}
          aspect="4 / 5"
          placeholder="Portrait of Carole Sidney Louis"
          sizes="(max-width: 768px) 100vw, 340px"
          className="max-w-[340px]"
        />
        <div>
          <div className="mb-[14px] text-xs font-bold uppercase tracking-[0.18em] text-accent">
            The Soloist
          </div>
          <h2 className="m-0 mb-[6px] text-[clamp(34px,6vw,46px)] font-extrabold leading-none tracking-[-0.02em] text-accent">
            Carole Sidney Louis
          </h2>
          <div className="mb-[22px] font-serif text-[21px] italic text-muted-serif">
            Soprano
          </div>
          <p className="m-0 mb-4 max-w-[640px] text-base leading-[1.6] text-body">
            Carole Sidney Louis is a french dramatic soprano who lives in Berlin.
          </p>

          <button
            type="button"
            onClick={() => setBioOpen((o) => !o)}
            aria-expanded={bioOpen}
            aria-controls="soloist-bio"
            className="cursor-pointer rounded-[3px] border border-accent/40 bg-transparent px-5 py-[11px] text-sm font-bold tracking-[0.02em] text-accent transition-colors hover:bg-accent/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            {bioOpen ? "Read less ▲" : "Read full bio ▼"}
          </button>

          {bioOpen && (
            <div
              id="soloist-bio"
              className="mt-6 max-w-[760px] border-t border-ink/[0.18] pt-6 text-[14.5px] leading-[1.7] text-body"
            >
              {restOfBio.map((para, i) => (
                <p
                  key={i}
                  className={i < restOfBio.length - 1 ? "m-0 mb-[15px]" : "m-0"}
                >
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
