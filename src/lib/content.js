import {
  Anchor,
  ClipboardCheck,
  Compass,
  FileText,
  Network,
  RadioTower
} from "lucide-react";

export const navItems = [
  { label: "Empresa", href: "#empresa" },
  { label: "Agências", href: "#agencias" },
  { label: "Serviços", href: "#servicos" },
  { label: "Confiança", href: "#confianca" },
  { label: "Contato", href: "#contato" }
];

export const services = [
  {
    icon: Anchor,
    title: "Agenciamento marítimo",
    description:
      "Representação e acompanhamento da escala da embarcação junto aos elos operacionais do porto."
  },
  {
    icon: Network,
    title: "Coordenação portuária",
    description:
      "Interface com terminais, prestadores e stakeholders envolvidos na operação de chegada, estadia e saída."
  },
  {
    icon: RadioTower,
    title: "Suporte a embarcações",
    description:
      "Apoio operacional durante a escala, com comunicação clara, acompanhamento e priorização de demandas."
  },
  {
    icon: FileText,
    title: "Acompanhamento documental",
    description:
      "Organização e monitoramento dos fluxos de informação relacionados aos procedimentos marítimos e portuários."
  },
  {
    icon: ClipboardCheck,
    title: "Interface com autoridades",
    description:
      "Coordenação com autoridades, terminais e partes intervenientes conforme a necessidade da operação."
  },
  {
    icon: Compass,
    title: "Suporte logístico da escala",
    description:
      "Coordenação de necessidades práticas ligadas à escala da embarcação e aos serviços relacionados."
  }
];

export const trustSignals = [
  "Comunicação direta com stakeholders operacionais",
  "Presença no ecossistema marítimo de Santos",
  "Postura profissional para decisores B2B",
  "Fluxo preparado para contato digital e CRM"
];

export const agencies = [
  {
    name: "AMG Santos",
    tag: "Principal",
    address: "Rua General Câmara 139, Cj 94, Santos, São Paulo 11010-906, BR",
    coordinates: [-23.9608, -46.3336]
  },
  {
    name: "AMG Salvador",
    address: "Avenida da França 164, Sala 509, Salvador, Bahia 40010-000, BR",
    coordinates: [-12.9714, -38.5014]
  },
  {
    name: "AMG Paranaguá",
    address: "Rua Manoel Correa 1565, Paranaguá, Paraná 83203-410, BR",
    coordinates: [-25.5163, -48.5222]
  },
  {
    name: "AMG Recife/Suape",
    address: "Avenida Antonio de Goes, 60, Cj 701, Recife, Pernambuco BR",
    coordinates: [-8.17, -34.93]
  },
  {
    name: "AMG Porto Alegre",
    address: "Avenida Cristóvão Colombo 2955, Sala 401, Porto Alegre, Rio Grande do Sul 90540-145, BR",
    coordinates: [-30.0346, -51.2177]
  },
  {
    name: "AMG Rio Grande",
    address: "Rua Barão do Cotegipe, 1302 - 13º, Rio Grande, Rio Grande do Sul 96200-290, BR",
    coordinates: [-32.035, -52.0986]
  }
];
