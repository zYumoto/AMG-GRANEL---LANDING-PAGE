import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { CircleMarker, MapContainer, Polyline, TileLayer, Tooltip, useMap } from "react-leaflet";
import { agencies } from "../lib/content.js";
import { fadeUp } from "../lib/motion.js";
import { Eyebrow, SectionHeading, SectionShell, SectionText } from "./SectionShell.jsx";

const directionsUrl = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

const hub = agencies[0];

export function AgenciesMapSection() {
  const [activeAgency, setActiveAgency] = useState(hub);

  return (
    <SectionShell id="agencias" className="bg-[linear-gradient(180deg,#07131f_0%,#0a1b2b_55%,#07131f_100%)]">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(280px,.54fr)_minmax(0,1.46fr)] lg:gap-14 xl:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          className="max-w-xl"
        >
          <Eyebrow>Rede AMG</Eyebrow>
          <SectionHeading className="max-w-xl">
            Presença estratégica em praças portuárias do Brasil.
          </SectionHeading>
          <SectionText>
            Um mapa interativo das agências da AMG para orientar contato, presença operacional
            e relacionamento com clientes marítimos e logísticos.
          </SectionText>

          <div className="mt-8 flex flex-wrap gap-2">
            {agencies.map((agency) => (
              <button
                key={agency.name}
                type="button"
                onClick={() => setActiveAgency(agency)}
                className={`rounded-lg border px-3 py-2 text-xs font-black transition duration-300 ${
                  activeAgency.name === agency.name
                    ? "border-brass/70 bg-brass/15 text-brass shadow-[0_0_28px_rgba(199,167,106,.14)]"
                    : "border-white/15 bg-white/[0.06] text-mist/65 hover:border-ocean/45 hover:text-white"
                }`}
              >
                {agency.name.replace("AMG ", "")}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="relative overflow-hidden rounded-lg border border-white/15 bg-white/[0.07] p-3 shadow-premium backdrop-blur-2xl sm:p-5"
        >
          <BrazilOperationsMap activeAgency={activeAgency} setActiveAgency={setActiveAgency} />
        </motion.div>
      </div>
    </SectionShell>
  );
}

function BrazilOperationsMap({ activeAgency, setActiveAgency }) {
  const routes = useMemo(
    () => agencies.filter((agency) => agency.name !== hub.name).map((agency) => [hub.coordinates, agency.coordinates]),
    []
  );

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#06111d]">
      <div className="pointer-events-none absolute inset-0 z-[410] bg-[radial-gradient(circle_at_58%_42%,rgba(40,182,200,.16),transparent_18rem),linear-gradient(140deg,rgba(255,255,255,.055),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-10 z-[410] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <MapContainer
        center={[-18.8, -45.5]}
        zoom={4}
        minZoom={3}
        maxZoom={7}
        scrollWheelZoom={false}
        zoomControl={false}
        className="z-0 h-[430px] w-full rounded-lg bg-night sm:h-[540px] lg:h-[620px]"
        attributionControl
      >
        <MapFocus agency={activeAgency} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {routes.map((route) => (
          <Polyline
            key={`${route[1][0]}-${route[1][1]}`}
            positions={route}
            pathOptions={{ color: "#28b6c8", weight: 2, opacity: 0.38, dashArray: "6 10" }}
            className="amg-route"
          />
        ))}

        {agencies.map((agency) => (
          <PortMarker
            key={agency.name}
            agency={agency}
            active={activeAgency.name === agency.name}
            onActivate={() => setActiveAgency(agency)}
          />
        ))}
      </MapContainer>

      <FloatingAgencyCard agency={activeAgency} />
    </div>
  );
}

function MapFocus({ agency }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(agency.coordinates, 5, { duration: 0.8 });
  }, [agency, map]);

  return null;
}

function PortMarker({ agency, active, onActivate }) {
  const isMain = agency.tag === "Principal";

  return (
    <>
      <CircleMarker
        center={agency.coordinates}
        radius={active ? 20 : isMain ? 18 : 14}
        pathOptions={{
          color: isMain ? "#c7a76a" : "#28b6c8",
          fillColor: isMain ? "#c7a76a" : "#28b6c8",
          fillOpacity: 0.08,
          opacity: 0.35,
          weight: 1
        }}
        className="amg-marker-halo"
        eventHandlers={{ mouseover: onActivate, click: onActivate, focus: onActivate }}
      />
      <CircleMarker
        center={agency.coordinates}
        radius={active ? 8 : isMain ? 7 : 6}
        pathOptions={{
          color: "rgba(255,255,255,.86)",
          fillColor: active ? "#28b6c8" : "#c7a76a",
          fillOpacity: 1,
          opacity: 1,
          weight: 1.5
        }}
        eventHandlers={{ mouseover: onActivate, click: onActivate, focus: onActivate }}
      >
        <Tooltip direction="top" offset={[0, -8]} opacity={1} className="amg-map-tooltip">
          {agency.name.replace("AMG ", "")}
        </Tooltip>
      </CircleMarker>
    </>
  );
}

function FloatingAgencyCard({ agency }) {
  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={agency.name}
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative z-[420] m-3 rounded-lg border border-white/15 bg-night/85 p-5 shadow-premium backdrop-blur-2xl sm:m-5 md:absolute md:bottom-6 md:right-6 md:m-0 md:w-[21rem]"
      >
        <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_20%_0%,rgba(40,182,200,.14),transparent_13rem)]" />
        <div className="relative">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-black text-white">{agency.name}</h3>
              {agency.tag && (
                <span className="mt-2 inline-flex rounded-md border border-brass/45 bg-brass/10 px-2 py-1 text-[11px] font-black uppercase tracking-normal text-brass">
                  {agency.tag}
                </span>
              )}
            </div>
            <MapPin className="shrink-0 text-ocean" size={20} />
          </div>
          <p className="m-0 text-sm leading-6 text-mist/65">{agency.address}</p>
          <a
            href={directionsUrl(agency.address)}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ocean transition duration-300 hover:text-cyan-200"
            aria-label={`Como chegar em ${agency.address}`}
          >
            Como chegar
            <Navigation size={15} />
          </a>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}
