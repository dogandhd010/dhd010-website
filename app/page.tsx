"use client";

import { useState } from "react";

export default function DHDWebsite() {
  const [page, setPage] = useState("home");

  const vacatures = [
    {
      title: "Orderpicker",
      location: "Regio Rotterdam",
      hours: "Fulltime / parttime mogelijk",
      salary: "Goed salaris",
      description: "Als orderpicker verzamel je bestellingen, controleer je producten en zorg je dat orders netjes en op tijd klaarstaan.",
      requirements: ["Gemotiveerde werkhouding", "Fysiek fit", "Nauwkeurig kunnen werken", "Ervaring is mooi meegenomen"]
    },
    {
      title: "Reachtruckchauffeur",
      location: "Regio Zuid-Holland",
      hours: "Fulltime",
      salary: "Marktconform salaris",
      description: "Je verplaatst goederen veilig met de reachtruck en ondersteunt het magazijnteam bij dagelijkse logistieke werkzaamheden.",
      requirements: ["Reachtruckcertificaat", "Ervaring in magazijnwerk", "Veilig en verantwoordelijk werken", "Flexibele instelling"]
    },
    {
      title: "Lader / Losser",
      location: "Regio Rotterdam",
      hours: "Dag- en avonddiensten",
      salary: "Doorgroeimogelijkheden beschikbaar",
      description: "Je helpt bij het laden en lossen van vrachtwagens, containers en pallets. Ideaal voor echte aanpakkers.",
      requirements: ["Fysiek sterk", "Op tijd komen", "Teamspeler", "Geen 9-tot-5 mentaliteit"]
    },
    {
      title: "Teamleider Logistiek",
      location: "Zuid-Holland",
      hours: "Fulltime",
      salary: "Goed salaris + doorgroeimogelijkheden",
      description: "Je stuurt medewerkers aan, bewaakt de planning en zorgt dat het werkproces soepel verloopt op de vloer.",
      requirements: ["Leidinggevende ervaring", "Communicatief sterk", "Stressbestendig", "Verantwoordelijkheidsgevoel"]
    },
    {
      title: "Vrachtwagenchauffeur",
      location: "Regio Rotterdam",
      hours: "Fulltime",
      salary: "Volgens cao / ervaring",
      description: "Je vervoert goederen voor logistieke opdrachtgevers en zorgt voor een nette, veilige en betrouwbare levering.",
      requirements: ["Rijbewijs C/CE", "Code 95", "Bestuurderskaart", "Betrouwbare werkhouding"]
    }
  ];

  const services = [
    {
      icon: "▦",
      title: "Magazijnpersoneel",
      text: "Betrouwbare orderpickers, laders/lossers en logistieke medewerkers voor magazijnen en distributiecentra."
    },
    {
      icon: "▸",
      title: "Transport & logistiek",
      text: "Flexibele inzet voor logistieke bedrijven waar tempo, discipline en duidelijke communicatie belangrijk zijn."
    },
    {
      icon: "●",
      title: "Personeelsplanning",
      text: "Praktisch meedenken bij bezetting, piekdrukte, vervanging en continuïteit op de werkvloer."
    }
  ];

  const strengths = [
    "Snel schakelen bij personeelsbehoefte",
    "Persoonlijk contact met korte lijnen",
    "Ervaring in logistiek en magazijnwerk",
    "Duidelijke afspraken met opdrachtgever en medewerker",
    "Betrokken begeleiding op de werkvloer",
    "Focus op kwaliteit, inzet en betrouwbaarheid"
  ];

  const nav = [
    ["home", "Home"],
    ["diensten", "Diensten"],
    ["werkgevers", "Werkgevers"],
    ["werkzoekenden", "Werkzoekenden"],
    ["contact", "Contact"]
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/95 text-zinc-950 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => setPage("home")} className="flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 font-black text-white shadow-lg shadow-purple-600/20">010</div>
            <div>
              <p className="text-2xl font-black leading-none tracking-tight"><span className="text-black">DHD</span><span className="text-purple-600">010</span></p>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Samen bouwen aan jouw toekomst</p>
            </div>
          </button>

          <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-700 md:flex">
            {nav.map(([id, label]) => (
              <button key={id} onClick={() => setPage(id)} className={page === id ? "text-purple-600" : "hover:text-purple-600"}>
                {label}
              </button>
            ))}
          </nav>

          <button onClick={() => setPage("contact")} className="rounded-full bg-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-500">
            Neem contact op
          </button>
        </div>
      </header>

      <main>
        {page === "home" && <Home setPage={setPage} services={services} />}
        {page === "diensten" && <Diensten services={services} />}
        {page === "werkgevers" && <Werkgevers strengths={strengths} setPage={setPage} />}
        {page === "werkzoekenden" && <Werkzoekenden vacatures={vacatures} setPage={setPage} />}
        {page === "contact" && <Contact />}
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-400">
        © 2026 DHD010 B.V. • KvK: 96126450 • BTW: NL867479796B01
      </footer>
    </div>
  );
}

function Home({ setPage, services }) {
  return (
    <>
      <section className="relative overflow-hidden bg-white text-zinc-950">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full border-[42px] border-purple-600/15" />
        <div className="absolute right-10 top-20 h-24 w-24 rounded-full bg-purple-600/10" />
        <div className="absolute bottom-10 right-1/4 h-12 w-12 rounded-full bg-purple-600/20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
              ✓ Betrouwbare personeelsoplossingen
            </div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Samen bouwen aan jouw toekomst.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              DHD010 helpt bedrijven aan gemotiveerde uitzendkrachten en begeleidt werkzoekenden naar passend werk in verschillende sectoren. Van logistiek en transport tot productie, industrie en andere operationele functies.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => setPage("werkgevers")} className="inline-flex items-center justify-center rounded-full bg-purple-600 px-7 py-4 font-bold text-white shadow-xl shadow-purple-600/20 transition hover:bg-purple-500">
                Ik zoek personeel →
              </button>
              <button onClick={() => setPage("werkzoekenden")} className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-7 py-4 font-bold text-zinc-950 transition hover:bg-zinc-100">
                Ik zoek werk
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <Stat number="Snel" label="schakelen" />
                <Stat number="Sterk" label="op de werkvloer" />
                <Stat number="Duidelijk" label="in afspraken" />
                <Stat number="010" label="Rotterdamse mentaliteit" />
              </div>
              <div className="mt-6 rounded-2xl bg-purple-50 p-5">
                <p className="font-bold text-purple-700">Voor opdrachtgevers</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Geen onnodig lange procedures, maar korte lijnen, heldere communicatie en personeel dat past bij uw werkvloer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/15 text-2xl text-purple-300">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 text-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="font-bold text-purple-600">Waarom DHD010?</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Praktisch, betrokken en duidelijk.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Bij DHD010 geloven we in duidelijke communicatie, snel schakelen en langdurige samenwerkingen. Wij begrijpen hoe belangrijk betrouwbaar personeel is en denken flexibel mee met opdrachtgevers in verschillende sectoren.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-zinc-200">
              <p className="text-sm font-bold uppercase tracking-wide text-zinc-500"><span className="text-purple-600">✓</span> SNA / NEN gecertificeerd</p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-zinc-200">
              <p className="text-sm font-bold uppercase tracking-wide text-zinc-500"><span className="text-purple-600">✓</span> Aangesloten bij NBBU</p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-zinc-200">
              <p className="text-sm font-bold uppercase tracking-wide text-zinc-500"><span className="text-purple-600">✓</span> Werken volgens cao & regelgeving</p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 p-8">
              <div className="mb-5 text-4xl">⚡</div>
              <h3 className="text-2xl font-black">Snel schakelen</h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Wij reageren snel op personeelsvragen en denken direct mee in oplossingen.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-8">
              <div className="mb-5 text-4xl">🤝</div>
              <h3 className="text-2xl font-black">Persoonlijke aanpak</h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Korte lijnen, persoonlijk contact en duidelijke afspraken staan centraal.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-8">
              <div className="mb-5 text-4xl">📦</div>
              <h3 className="text-2xl font-black">Logistieke ervaring</h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Wij kennen de werkvloer en begrijpen wat opdrachtgevers én medewerkers nodig hebben.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-bold text-purple-400">Onze werkwijze</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Hoe wij te werk gaan.
            </h2>

            <div className="mt-10 space-y-6">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-purple-600 font-black text-white">1</div>
                <div>
                  <h3 className="text-xl font-black">Kennismaking</h3>
                  <p className="mt-2 leading-7 text-zinc-300">
                    Wij bespreken de wensen, werkzaamheden en verwachtingen.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-purple-600 font-black text-white">2</div>
                <div>
                  <h3 className="text-xl font-black">Selectie & planning</h3>
                  <p className="mt-2 leading-7 text-zinc-300">
                    Wij zoeken geschikte medewerkers die passen bij de werkvloer en planning.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-purple-600 font-black text-white">3</div>
                <div>
                  <h3 className="text-xl font-black">Begeleiding</h3>
                  <p className="mt-2 leading-7 text-zinc-300">
                    Tijdens het traject blijven wij betrokken en bereikbaar voor zowel opdrachtgever als medewerker.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-10 shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-400">
              Actief in
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Logistiek",
                "Transport",
                "Productie",
                "Industrie",
                "Distributie",
                "Operationele functies"
              ].map((sector) => (
                <div key={sector} className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-center font-bold">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Diensten({ services }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="font-bold text-purple-400">Onze diensten</p>
      <h2 className="mt-3 text-4xl font-black md:text-5xl">Personeel dat past bij de praktijk.</h2>
      <p className="mt-5 max-w-2xl leading-8 text-zinc-300">Wij ondersteunen opdrachtgevers in verschillende sectoren met flexibel personeel, operationele ondersteuning en praktische oplossingen.</p>
      <div className="mt-10 flex flex-wrap items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-zinc-950 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-sm font-black text-purple-700">
            SNA
          </div>
          <div>
            <p className="font-black">SNA / NEN gecertificeerd</p>
            <p className="text-sm text-zinc-500">Werken volgens wet- en regelgeving</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-zinc-950 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-sm font-black text-purple-700">
            NBBU
          </div>
          <div>
            <p className="font-black">Aangesloten bij NBBU</p>
            <p className="text-sm text-zinc-500">Professionele brancheorganisatie</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/15 text-2xl text-purple-300">{service.icon}</div>
            <h3 className="text-2xl font-black">{service.title}</h3>
            <p className="mt-4 leading-7 text-zinc-300">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Werkgevers({ strengths, setPage }) {
  return (
    <section className="bg-white py-20 text-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="font-bold text-purple-600">Voor werkgevers</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Heeft u betrouwbaar personeel nodig?</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Wij denken mee in planning, bezetting en continuïteit. Of het nu gaat om vaste flexkrachten, tijdelijke piekdrukte of vervanging: DHD010 regelt het praktisch en persoonlijk.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-2xl bg-purple-50 px-5 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 font-black text-purple-700">
                SNA
              </div>
              <div>
                <p className="font-black">SNA / NEN gecertificeerd</p>
                <p className="text-sm text-zinc-500">Betrouwbaar & conform regelgeving</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-purple-50 px-5 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-sm font-black text-purple-700">
                NBBU
              </div>
              <div>
                <p className="font-black">Aangesloten bij NBBU</p>
                <p className="text-sm text-zinc-500">Professionele brancheorganisatie</p>
              </div>
            </div>
          </div>

          <button onClick={() => setPage("contact")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-4 font-bold text-white transition hover:bg-zinc-800">
            Vraag personeel aan →
          </button>
        </div>
        <div className="grid gap-4">
          {strengths.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <span className="font-bold text-purple-600">✓</span>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Werkzoekenden({ vacatures, setPage }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 max-w-3xl">
        <p className="font-bold text-purple-400">Werkzoekenden</p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">Zoek je werk? Wij helpen je snel op weg.</h2>
        <p className="mt-5 leading-8 text-zinc-300">
          Bekijk onze functies in logistiek, transport en magazijnwerk. Staat jouw functie erbij? Solliciteer direct en wij nemen contact met je op.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {vacatures.map((job) => (
          <div key={job.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-black">{job.title}</h3>
                <p className="mt-2 text-zinc-400">{job.location}</p>
              </div>
              <div className="rounded-full bg-purple-600/20 px-4 py-2 text-sm font-bold text-purple-300">
                {job.hours}
              </div>
            </div>
            <p className="mt-6 leading-7 text-zinc-300">{job.description}</p>
            <div className="mt-6">
              <p className="font-bold">Benodigdheden:</p>
              <ul className="mt-3 space-y-2 text-zinc-300">
                {job.requirements.map((req) => <li key={req}>• {req}</li>)}
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-bold text-purple-300">{job.salary}</span>
              <button onClick={() => setPage("contact")} className="rounded-full bg-purple-600 px-6 py-3 font-bold hover:bg-purple-500">
                Solliciteer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="font-bold text-purple-400">Contact</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Vertel ons wat u nodig heeft.</h2>
          <p className="mt-4 leading-8 text-zinc-300">
            Laat uw gegevens achter of neem direct contact op. Wij reageren snel en denken praktisch met u mee.
          </p>
          <div className="mt-8 space-y-4 text-zinc-300">
            <ContactRow icon="☎" text="contact@dhd010.nl" />
            <ContactRow icon="⌖" text="Van Deventerstraat 15 B, 3029AW Rotterdam, Nederland" />
            <ContactRow icon="▣" text="DHD010 B.V." />
            <ContactRow icon="✓" text="SNA / NEN gecertificeerd" />
            <ContactRow icon="◆" text="Aangesloten bij brancheorganisatie NBBU" />
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-zinc-400">
              <p><span className="font-bold text-white">KvK:</span> 96126450</p>
              <p><span className="font-bold text-white">BTW:</span> NL867479796B01</p>
            </div>
          </div>
        </div>
        <form className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
          <div className="grid gap-4">
            <input className="rounded-2xl border border-white/10 bg-zinc-900 px-4 py-4 outline-none placeholder:text-zinc-500" placeholder="Naam" />
            <input className="rounded-2xl border border-white/10 bg-zinc-900 px-4 py-4 outline-none placeholder:text-zinc-500" placeholder="E-mailadres" />
            <input className="rounded-2xl border border-white/10 bg-zinc-900 px-4 py-4 outline-none placeholder:text-zinc-500" placeholder="Telefoonnummer" />
            <select className="rounded-2xl border border-white/10 bg-zinc-900 px-4 py-4 outline-none text-zinc-300">
              <option>Ik zoek personeel</option>
              <option>Ik zoek werk</option>
              <option>Algemene vraag</option>
            </select>
            <textarea className="min-h-32 rounded-2xl border border-white/10 bg-zinc-900 px-4 py-4 outline-none placeholder:text-zinc-500" placeholder="Bericht" />
            <button type="button" className="rounded-full bg-purple-600 px-7 py-4 font-bold transition hover:bg-purple-500">Versturen</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200">
      <p className="text-3xl font-black text-zinc-950">{number}</p>
      <p className="mt-1 text-sm font-medium text-zinc-500">{label}</p>
    </div>
  );
}

function ContactRow({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/15 text-purple-300">{icon}</div>
      <span>{text}</span>
    </div>
  );
}
