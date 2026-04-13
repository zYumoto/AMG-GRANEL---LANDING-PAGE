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
    <SectionShell id="agencias" className="bg-[linear-gradient(180deg,#dfe8eb_0%,#fbfcfe_100%)] text-ink">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(280px,.5fr)_minmax(0,1.5fr)] lg:gap-14 xl:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.22 }}
          className="max-w-xl"
        >
          <Eyebrow>Agências</Eyebrow>
          <SectionHeading className="max-w-xl">Presença em praças portuárias do Brasil.</SectionHeading>
          <SectionText>
            Um mapa interativo das agências da AMG para orientar contato, presença operacional e relacionamento com clientes marítimos e logísticos.
          </SectionText>

          <div className="mt-8 flex flex-wrap gap-2">
            {agencies.map((agency) => (
              <button
                key={agency.name}
                type="button"
                onClick={() => setActiveAgency(agency)}
                className={`rounded-md border px-3 py-2 text-xs font-black uppercase transition duration-300 ${
                  activeAgency.name === agency.name
                    ? "border-cyan bg-cyan text-ink"
                    : "border-ink/12 bg-white text-ink/62 hover:border-cyan hover:text-ink"
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
          viewport={{ once: false, amount: 0.18 }}
          className="relative overflow-hidden rounded-md border border-ink/10 bg-white/86 p-3 shadow-premium backdrop-blur sm:p-5"
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
    <div className="relative overflow-hidden rounded-md border border-ink/10 bg-ink">
      <MapContainer
        center={[-18.8, -45.5]}
        zoom={4}
        minZoom={3}
        maxZoom={7}
        scrollWheelZoom={false}
        zoomControl={false}
        className="z-0 h-[430px] w-full rounded-md bg-ink sm:h-[540px] lg:h-[620px]"
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
            pathOptions={{ color: "#00c3d9", weight: 2, opacity: 0.46, dashArray: "6 10" }}
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
          color: isMain ? "#c7a76a" : "#00c3d9",
          fillColor: isMain ? "#c7a76a" : "#00c3d9",
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
          fillColor: active ? "#00c3d9" : "#c7a76a",
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
        className="relative z-[420] m-3 rounded-md border border-white/15 bg-ink/90 p-5 text-white shadow-premium backdrop-blur-xl sm:m-5 md:absolute md:bottom-6 md:right-6 md:m-0 md:w-[21rem]"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-black uppercase text-white">{agency.name}</h3>
            {agency.tag && (
              <span className="mt-2 inline-flex rounded-md border border-cyan/45 bg-cyan/10 px-2 py-1 text-[11px] font-black uppercase text-cyan">
                {agency.tag}
              </span>
            )}
          </div>
          <MapPin className="shrink-0 text-cyan" size={20} />
        </div>
        <p className="m-0 text-sm font-bold leading-6 text-white/65">{agency.address}</p>
        <a
          href={directionsUrl(agency.address)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase text-cyan transition duration-300 hover:text-cyanLight"
          aria-label={`Como chegar em ${agency.address}`}
        >
          Como chegar
          <Navigation size={15} />
        </a>
      </motion.article>
    </AnimatePresence>
  );
}



