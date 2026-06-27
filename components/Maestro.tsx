"use client";

import { useState } from "react";
import ImageFrame from "./ImageFrame";
import { MAESTRO_PHOTO } from "@/lib/site";

export default function Maestro() {
  const [bioOpen, setBioOpen] = useState(false);

  return (
    <section id="maestro" className="bg-card">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-8 py-[84px] md:grid-cols-[340px_1fr] md:gap-14">
        <ImageFrame
          src={MAESTRO_PHOTO.src}
          alt={MAESTRO_PHOTO.alt}
          aspect="4 / 5"
          placeholder="Portrait of Maestro Tamayo"
          sizes="(max-width: 768px) 100vw, 340px"
          className="max-w-[340px]"
        />
        <div>
          <div className="mb-[14px] text-xs font-bold uppercase tracking-[0.18em] text-accent">
            The Maestro
          </div>
          <h2 className="m-0 mb-[6px] text-[clamp(34px,6vw,46px)] font-extrabold leading-none tracking-[-0.02em]">
            Arturo Tamayo
          </h2>
          <div className="mb-[22px] font-serif text-[21px] italic text-muted-serif">
            Conductor
          </div>
          <p className="m-0 mb-4 max-w-[640px] text-base leading-[1.6] text-body">
            Arturo Tamayo is a Spanish conductor with an international career of
            over 40+ years. He&apos;s currently holding the conducting class in
            the Italian Swiss Conservatory (Conservatorio della Svizzera
            Italiana). Through his career, he has worked with the most important
            international orchestras and ensembles, including the Ensemble
            Intercontemporain, Ensemble Modern, London Sinfonietta, Klangforum
            Wien, BBC Symphony Orchestra, Bavarian Radio Symphony Orchestra,
            Orchestre National de France, Orchestra dell&apos;Accademia Nazionale
            di Santa Cecilia, Orchestra del Teatro La Fenice, and the Gustav
            Mahler Chamber Orchestra.
          </p>
          <p className="m-0 mb-[22px] max-w-[640px] text-base leading-[1.6] text-body">
            A leading interpreter of twentieth- and twenty-first-century music,
            Tamayo has appeared at festivals including the Donaueschinger
            Musiktage, Salzburg Festival, Venice Biennale, Lucerne Festival, Wien
            Modern and Holland Festival, and has conducted numerous world
            premieres. His operatic engagements have included productions at the
            Deutsche Oper Berlin, Vienna State Opera, Royal Opera House Covent
            Garden, Opéra Comique Paris, Teatro Real Madrid and Teatro La Fenice.
          </p>

          <button
            type="button"
            onClick={() => setBioOpen((o) => !o)}
            aria-expanded={bioOpen}
            aria-controls="maestro-bio"
            className="cursor-pointer rounded-[3px] border border-accent/40 bg-transparent px-5 py-[11px] text-sm font-bold tracking-[0.02em] text-accent transition-colors hover:bg-accent/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            {bioOpen ? "Read less ▲" : "Read more ▼"}
          </button>

          {bioOpen && (
            <div
              id="maestro-bio"
              className="mt-6 max-w-[760px] border-t border-ink/[0.18] pt-6 text-[14.5px] leading-[1.7] text-body"
            >
              <p className="m-0 mb-[15px]">
                Born in Madrid (Spain). Studied at the law faculty and at the
                same time studied music at the Real Conservatorio de Música in
                Madrid (piano, percussion, music theory, composition), which he
                completed with an honorary prize for composition. Conducting
                course with Pierre Boulez in Basel, followed by studies at the
                Freiburg State University of Music (composition with Wolfgang
                Fortner and Klaus Huber, conducting with Francis Travis). After
                completing his conducting studies, he took a conducting course
                with Witold Rowicki in Vienna.
              </p>
              <p className="m-0 mb-[15px]">
                Until 1998, assistant to Klaus Huber at the Institute for New
                Music at the Freiburg University. Founding of the ensemble for
                new music. 1979-1997 Professor for interpretation of XXth century
                music. Century in Freiburg.
              </p>
              <p className="m-0 mb-[15px]">
                From 1977 onwards, active concert activity and numerous radio
                productions, especially around ​​new music. Collaboration with
                important European orchestras (Ensemble Intercontemporain,
                Ensemble Modern, London Sinfonietta, Klangforum Wien, BBC
                Symphony Orchestra, Philharmonia Orchestra London, RSO-Vienna,
                Bavarian Radio Symphony Orchestra, Berlin Symphony Orchestra,
                Berlin Radio Symphony Orchestra, WDR Symphony Orchestra, RSO
                Stuttgart, Südwestfunk Symphony Orchestra , German Symphony
                Orchestra Berlin, Orchestra of the German Opera Berlin, Orchester
                Nationale de France, Orchester Philarmonique de Radio France,
                Residentie-Orchester den Haag, Orchester de la Suisse Romande,
                Symphony Orchestra of the Hessischer Rundfunk, Prague Symphony
                Orchestra, Orchestra Nationale della RAI Torino, Orchestra del
                Teatro La Fenice, Orchestra del Maggio Musicale Fiorentino,
                Orchestra dell&apos;Accademia Santa Cecilia Roma, Oslo Philarmonic
                Orchestra, Orchester Philharmonique du Luxembourg, Philarmonic
                Orchestra Antwerp, Orchester de la BTR Bruxelles, Orquesta
                Nacional de España, Orquesta de la RTVE Madrid, Orquesta
                Sinfónica de Madrid, Orchester Nationale de Lille, Danish Radio
                Symphony Orchestra, Orchester Nationale de l&apos;Île de France,
                Holland Radio Chamber Orchestra, Gustav Mahler Chamber
                Orchestra...).
              </p>
              <p className="m-0 mb-[15px]">
                Appearances at international music festivals, also as a
                sought-after premiere conductor (Donaueschinger Musiktage,
                Berliner Festwochen, Venice Biennale, Salzburg Festival, Lucerne
                Music Weeks, Steirischer Herbst, Wien Modern, Cologne Triennale,
                three CornerMaggio Musicale Fiorentino, Berlin Music Biennale,
                Holland Festival). World premiere of works by Iannis.
              </p>
              <p className="m-0 mb-[15px]">
                He also worked as an opera and ballet conductor at the Deutsche
                Oper Berlin (Wolfgang Rihm&apos;s &quot;Tutuguri&quot; and
                &quot;Jakob Lenz&quot;; Mozart&apos;s &quot;Magic Flute&quot; and
                &quot;The Marriage of Figaro&quot;, at the Schwetzingen Festival
                (&quot;Ophelia&quot; by Rudolf Kelterborn), at the Theater des
                Champs Elysées (Bellini&apos;s &quot;Capuletti ed Montecchi&quot;),
                Opera Comique Paris (&quot;Donizetti&apos;s &quot;La
                Favorite&quot;), at the Grand Opera de Paris the premiere of
                Mauricio Ohana&apos;s &quot;la Celestina&quot;, at the Royal Opera
                House Covent Garden (new production of Britten&apos;s &quot; Peter
                Grimes&quot;), at the Teatro Massimo Bellini Catania
                (Weber&apos;s &quot;Der Freischütz&quot;), at the Teatro Lírico
                Nacional Madrid (Alban Berg&apos;s &quot;Lulu&quot;, Ravel&apos;s
                &quot;L&apos; heure espagnole&quot;, Tchaikovsky&apos;s
                &quot;Eugene Onegin&quot; and a new production of Verdi&apos;s
                &quot;Stiffelio &quot; with Plácido Domingo in the title role),
                at the Vienna State Opera (Mauricio Kagel&apos;s
                &quot;Tanzt-Schul&quot;, De Falla&apos;s &quot;Der Three cornered
                hut”!&quot; and Stravinsky&apos;s &quot;Le Sacre du
                printemps&quot;). Busoni&apos;s &quot;Doktor Faust&quot;,
                Schoenberg&apos;s &quot;Moses und Aron&quot; and Puccini&apos;s
                &quot;La Bohème&quot; at the Graz Opera. Hans Werner Henze
                &quot;The Bassarids&quot; at the Teatro Real in Madrid. At the
                Antike Musikspiele in Trier &quot;Antigone&quot; by Arthur
                Honegger and Strawinky&apos;s &quot;Oedipus Rex&quot;
                &quot;Prometeo&quot; by Luigi Nono. (Gibellina, Madrid, Berlin) In
                the Bunka Kaikun Theater Tokyo &quot;Erwartung&quot; by Arnold
                Schöenberg and &quot;La voix humaine&quot; by Francis Poulenc with
                Jessie Norman as soloist…
              </p>
              <p className="m-0 mb-[15px]">
                His discography is very wide and diverse. Of his important
                recordings, the 4 CDs dedicated to Mauricio Ohana&apos;s
                orchestral works, which received 16 international prizes, should
                be mentioned here. As well as 5 CDs with Iannis Xenakis&apos; most
                important orchestral works, which received several international
                awards. The 2 CD in this series is qualified as “one of the three
                best recordings of new music of 2002”. Two further CDs, each
                containing the orchestral music of Franco Donatoni and “The Rara
                Requiem by Sylvano Bussotti; the “Concerti per Orchestra” by
                Goffredo Petrassi with the Radio Symphony Orchestra Hilversum and
                the Orchestrawer. He then recorded a CD with the last works of
                Alberto Ginastera with the Deutsches Symphonie Orchester Berlin
                as well as 5 CDs with the RSO Frankfurt performing the orchestral
                works of Bruno Maderna.
              </p>
              <p className="m-0">
                Arturo Tamayo has given conducting lessons at the Freiburg
                University of Music, Graz University of the Arts, in Musikene
                (Basque Country) at the Conservatorio della Svizzera Italiana
                Lugano, as well as in countless master classes in various
                European countries.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
