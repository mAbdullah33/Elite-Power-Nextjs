// Elite Power (Pvt.) Ltd. — Static catalog data
// All content sourced from the public reference website https://www.elitepower.com.pk/
// Statistical figures shown as "1" on the reference are intentionally left as
// placeholder values and clearly marked as unverified in the UI disclaimer.

export interface HeroSlide {
  id: string;
  badge?: string;
  title: string;
  description: string;
  primaryCta: { label: string; view: string };
  secondaryCta?: { label: string; view: string };
  bg: string; // CSS background (gradient + pattern) used as a safe placeholder
  accent: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "aramco-epc",
    badge: "EPC PROJECT",
    title: "EPC Electricals & Forecourt Automation System for Saudi ARAMCO",
    description:
      "Complete electrical works including auto tank gauge (ATG) and pump automation systems with Central Heart Office software.",
    primaryCta: { label: "More Details", view: "sectors/oil-storage-terminal" },
    secondaryCta: { label: "Get ATG Quote", view: "contact" },
    bg: "linear-gradient(120deg, #0a2342 0%, #0f3a6b 55%, #0a2342 100%)",
    accent: "#f59e0b",
  },
  {
    id: "hv-grid",
    badge: "POWER INFRASTRUCTURE",
    title: "High Voltage 11kV, 132kV, 220kV and 500kV AIS / GIS Grid Stations",
    description:
      "Complete Civil Works, Electro-mechanical Erection Works, Testing & Commissioning of AIS and GIS grid stations nationwide.",
    primaryCta: { label: "View Capabilities", view: "sectors/high-voltage-grids-power-plants" },
    bg: "linear-gradient(120deg, #0a2342 0%, #1f2d5a 60%, #0a2342 100%)",
    accent: "#f59e0b",
  },
  {
    id: "affiliates",
    badge: "PARTNERSHIPS",
    title: "Affiliates — Powering a Stronger, Smarter Future",
    description:
      "At Elite Power, our strength lies in collaboration. Through our trusted affiliates, we extend our reach, enhance innovation, and deliver unmatched value to our clients.",
    primaryCta: { label: "Meet Our Affiliates", view: "sectors/affiliates" },
    bg: "linear-gradient(120deg, #0a2342 0%, #0d3050 60%, #0a2342 100%)",
    accent: "#f59e0b",
  },
  {
    id: "lv-panels",
    badge: "MANUFACTURING",
    title: "Manufacturing, Installation & Commissioning of LT Power & Automation Panels",
    description:
      "Elite Power has manufactured and deployed various LT panels for Oil & Gas, Infrastructure MEP, Food & Beverages, Pharmaceuticals, Cement Plants & Healthcare facilities.",
    primaryCta: { label: "Explore Products", view: "products/lv-switchgear" },
    bg: "linear-gradient(120deg, #0a2342 0%, #143a5e 60%, #0a2342 100%)",
    accent: "#f59e0b",
  },
  {
    id: "oil-metering",
    badge: "OIL & GAS",
    title: "Complete Oil Depot Metering System Solution",
    description:
      "Elite Power has deployed more than 15 Oil Terminal Metering Systems all over Pakistan for multiple end-users, including major OMC companies like Gas & Oil Pakistan (GO).",
    primaryCta: { label: "Solution Details", view: "solutions/oil-metering-system" },
    bg: "linear-gradient(120deg, #0a2342 0%, #163861 60%, #0a2342 100%)",
    accent: "#f59e0b",
  },
  {
    id: "scada",
    badge: "AUTOMATION",
    title: "SCADA Development & Implementation",
    description:
      "We have designed, developed and implemented more than 25 SCADA systems running across Pakistan, integrated in major industrial sectors like Oil & Gas, Food & Beverages, etc.",
    primaryCta: { label: "PLC, DCS & SCADA", view: "solutions/plc-dcs-scada" },
    bg: "linear-gradient(120deg, #0a2342 0%, #123458 60%, #0a2342 100%)",
    accent: "#f59e0b",
  },
  {
    id: "atg-system",
    badge: "ATG SYSTEM",
    title: "Complete Oil Depot ATG System Solution",
    description:
      "Elite Power has deployed more than 15 Oil Terminal ATG Systems all over Pakistan for multiple end-users, including major OMC companies like Gas & Oil Pakistan (GO), Shell and PSO.",
    primaryCta: { label: "ATG System", view: "solutions/atg-system" },
    bg: "linear-gradient(120deg, #0a2342 0%, #0e2c52 60%, #0a2342 100%)",
    accent: "#f59e0b",
  },
  {
    id: "zero-lti",
    badge: "SAFETY",
    title: "Overall ZERO LTI Projects Company",
    description:
      "We are a proud ZERO lost time injury (LTI) recorded company for all successfully completed projects, with major collaborative efforts by competent QHSE and safety-oriented execution teams.",
    primaryCta: { label: "Our Safety Culture", view: "about" },
    bg: "linear-gradient(120deg, #0a2342 0%, #144022 60%, #0a2342 100%)",
    accent: "#22c55e",
  },
  {
    id: "fire-fighting",
    badge: "FIRE & SAFETY",
    title: "Complete Oil Depot Fire Fighting Control Solution",
    description:
      "Elite Power has deployed more than 15 Oil Terminal Fire Fighting Systems all over Pakistan for multiple end-users, including major OMC companies like Gas & Oil Pakistan (GO).",
    primaryCta: { label: "View Solution", view: "solutions/atex-implementation" },
    bg: "linear-gradient(120deg, #0a2342 0%, #4a1818 60%, #0a2342 100%)",
    accent: "#ef4444",
  },
];

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  verified: boolean;
}

export const STATS: Stat[] = [
  { label: "Permanent Employees", value: 250, suffix: "+", verified: false },
  { label: "Projects Completed", value: 150, suffix: "+", verified: false },
  { label: "Projects In-hand", value: 25, suffix: "+", verified: false },
  { label: "Manufactured LV Switchgear", value: 5000, suffix: "+", verified: false },
  { label: "Corporate Offices", value: 3, verified: false },
  { label: "Workshop & Warehouse", value: 2, verified: false },
];

export const MISSION =
  "At Elite Power we are committed to providing solutions to our business partners with reliability in the fields of electrical, instrumentation & process automation through innovative design & lean manufacturing with system integration. We believe in clients' satisfaction with our cost-effective services, shaping excellence in future, and ensuring zero harm to people and the environment.";

export const VISION =
  "To be an EPC enterprise in the electrical energy sector at an international stage with an approach of integrity.";

export interface CoreValue {
  letter: string;
  word: string;
  text: string;
}

export const CORE_VALUES: CoreValue[] = [
  { letter: "L", word: "Longevity", text: "in progressive business ties" },
  { letter: "I", word: "Integrity", text: "of project proficiency" },
  { letter: "I", word: "Intellectual", text: "decision making" },
  { letter: "A", word: "Accountability", text: "of planning & perfection" },
  { letter: "Z", word: "Zenith", text: "with guarantee" },
  { letter: "R", word: "Reliability", text: "of products & services" },
  { letter: "S", word: "Skillfulness", text: "of expertise" },
  { letter: "C", word: "Consistency", text: "in QHSE with agility" },
  { letter: "H", word: "Honesty", text: "in CSR and attitude" },
];

export interface EpcStage {
  number: number;
  title: string;
  description: string;
}

export const EPC_WORKFLOW: EpcStage[] = [
  {
    number: 1,
    title: "Design & Engineering",
    description:
      "Our in-house design department in collaboration with customer's OEMs & Consultants fabricate detailed design and IFCs of the project.",
  },
  {
    number: 2,
    title: "Procurement & Selections",
    description:
      "Our in-house procurement & supply chain with the help of ERP, delivers the right product at the right time to the project site.",
  },
  {
    number: 3,
    title: "Execution & Installation",
    description:
      "Our seasoned execution teams are permanently employed and mobilised immediately in accordance with the project delivery plan.",
  },
];

export interface Sector {
  slug: string;
  name: string;
  short: string;
  overview: string;
  scopeOfWork: string[];
  services: string[];
  accent: string;
}

export const SECTORS: Sector[] = [
  {
    slug: "mid-stream-oil-storage-depot",
    name: "Mid Stream Oil Storage Depot",
    short: "Oil Storage Terminal",
    overview:
      "End-to-end E&I EPC delivery for mid-stream oil storage terminals including tank farms, pump rooms, metering skids, fire-fighting systems, and SCADA-controlled tank gauging.",
    scopeOfWork: [
      "Tank farm electrical & instrumentation design",
      "ATEX-certified installations in hazardous areas",
      "Automatic tank gauging (ATG) integration",
      "Oil metering system commissioning",
      "Fire fighting control & deluge systems",
      "SCADA development and Central Heart Office software",
    ],
    services: [
      "Design & Engineering",
      "Procurement",
      "Installation",
      "Testing & Commissioning",
      "Maintenance & Technical Support",
    ],
    accent: "#f59e0b",
  },
  {
    slug: "down-stream-oil-industry-signages",
    name: "Down Stream Oil Industry & Signages",
    short: "Retail Outlets",
    overview:
      "Forecourt automation for retail fuel outlets including price display units, pump controllers, tank gauges, and back-office integration with OMC central systems.",
    scopeOfWork: [
      "Petrol pump automation (OKet)",
      "Price display unit manufacturing",
      "Forecourt controller installation",
      "Tank level monitoring",
      "Back-office software integration",
      "Branding & signage solutions",
    ],
    services: ["Design & Engineering", "Procurement", "Installation", "Maintenance & Technical Support"],
    accent: "#f59e0b",
  },
  {
    slug: "infrastructure-mep",
    name: "Infrastructure & MEP",
    short: "MEP Construction",
    overview:
      "Mechanical, Electrical and Plumbing works for commercial buildings, hospitals, data centers, and industrial complexes with full LV switchgear, BMS and HVAC integration.",
    scopeOfWork: [
      "LV power distribution & switchgear",
      "BMS & HVAC automation",
      "Lighting & emergency power",
      "Cable trays, bus tie duct & risers",
      "Fire alarm & detection",
      "PLC/SCADA integration",
    ],
    services: ["Design & Engineering", "Procurement", "Installation", "Testing & Commissioning"],
    accent: "#f59e0b",
  },
  {
    slug: "food-beverages",
    name: "Food & Beverages",
    short: "Food & Beverages",
    overview:
      "Process automation for food & beverage plants including CIP systems, batch control, motor control centers, and food-grade stainless steel panel manufacturing.",
    scopeOfWork: [
      "Process automation & batch control",
      "Stainless steel MCCs & panels",
      "CIP/SIP system integration",
      "PLC & SCADA programming",
      "Hygienic design compliance",
      "Energy monitoring & reporting",
    ],
    services: ["Design & Engineering", "Procurement", "Installation", "Testing & Commissioning"],
    accent: "#f59e0b",
  },
  {
    slug: "industrial-process-plant",
    name: "Industrial / Process Plant",
    short: "Cement Plant",
    overview:
      "EPC services for cement plants, fertilizer units, and process industries including MV switchgear, motor control centers, and kiln automation systems.",
    scopeOfWork: [
      "MV switchgear & protection",
      "Kiln & mill drive control",
      "Process instrumentation",
      "Dust collection & environment monitoring",
      "Energy management systems",
    ],
    services: ["Design & Engineering", "Procurement", "Installation", "Testing & Commissioning"],
    accent: "#f59e0b",
  },
  {
    slug: "high-voltage-grids-power-plants",
    name: "High Voltage Grids & Power Plants",
    short: "Power Plants",
    overview:
      "Complete civil works, electro-mechanical erection, testing & commissioning of 11kV, 132kV, 220kV and 500kV AIS and GIS grid stations and power plant auxiliaries.",
    scopeOfWork: [
      "AIS & GIS grid station construction",
      "Transformer & reactor erection",
      "Control & protection panel manufacturing",
      "Battery & DC auxiliary systems",
      "SCADA & RTU integration",
      "Civil & structural works",
    ],
    services: ["Design & Engineering", "Procurement", "Execution & Installation", "Testing & Commissioning"],
    accent: "#f59e0b",
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    short: "Renewable Energy",
    overview:
      "Solar PV and wind power solutions including grid-tied and hybrid systems, energy storage, and remote monitoring for commercial and industrial clients.",
    scopeOfWork: [
      "Solar PV plant EPC",
      "Hybrid & storage integration",
      "Grid synchronisation & protection",
      "Remote monitoring & analytics",
      "Net-metering compliance",
    ],
    services: ["Design & Engineering", "Procurement", "Installation", "Testing & Commissioning", "O&M Support"],
    accent: "#22c55e",
  },
  {
    slug: "pharmaceutical-healthcare",
    name: "Pharmaceutical & Healthcare",
    short: "Healthcare",
    overview:
      "Clean-room compatible electrical & automation for pharmaceutical and healthcare facilities including UPS, BMS, HVAC automation, and regulatory-grade documentation.",
    scopeOfWork: [
      "Clean-room compatible panels",
      "UPS & emergency power",
      "BMS & HVAC automation",
      "GMP-compliant documentation",
      "Validation support",
    ],
    services: ["Design & Engineering", "Procurement", "Installation", "Testing & Commissioning"],
    accent: "#f59e0b",
  },
  {
    slug: "affiliates",
    name: "Affiliates",
    short: "Affiliates",
    overview:
      "Through our trusted affiliates, we extend our reach, enhance innovation, and deliver unmatched value to our clients. Together, we power a stronger, smarter future.",
    scopeOfWork: [
      "Strategic OEM partnerships",
      "Technology licensing",
      "Joint project delivery",
      "Regional representation",
      "Engineering collaboration",
    ],
    services: ["Partnership Management", "Joint Project Delivery"],
    accent: "#f59e0b",
  },
];

export interface ProductChild {
  slug: string;
  name: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  short: string;
  description: string;
  accent: string;
  icon: string;
  children: ProductChild[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "lv-switchgear",
    name: "LV Switchgear",
    short: "LV Switchgear — Protection Panels",
    description:
      "Type-tested low-voltage switchgear and control gear assemblies manufactured per IEC 61439, deployed across Oil & Gas, Infrastructure MEP, Food & Beverages, Pharmaceuticals, Cement Plants and Healthcare facilities.",
    accent: "#0a2342",
    icon: "Shield",
    children: [
      { slug: "lt-protection-panels", name: "LT Protection Panels", description: "LT distribution & protection panels with ACB/MCCB incomers, numerical relays and arc-flash detection.", features: ["IEC 61439 type-tested", "Numerical protection", "Arc-flash option"], specifications: [{ label: "Voltage", value: "415V AC, 3-phase" }, { label: "Current", value: "Up to 6300A" }, { label: "IP rating", value: "IP42 / IP55" }] },
      { slug: "mccs", name: "Motor Control Centers (MCCs)", description: "Intelligent motor control centers with DOL, star-delta, soft-starter and VFD feeders for industrial process loads.", features: ["DOL / Star-Delta / VFD", "Motor protection", "Plug-in compartments"], specifications: [{ label: "Voltage", value: "415V AC" }, { label: "Feeder size", value: "Up to 250kW" }, { label: "Busbar", value: "Up to 3200A" }] },
      { slug: "plc-dcs-control-panels", name: "PLC & DCS Control Panels", description: "Operator interface panels housing PLCs, DCS marshalling, HMI and Ethernet switches for process control.", features: ["PLC / DCS marshalling", "HMI mounting", "Redundant PSUs"], specifications: [{ label: "Enclosure", value: "Mild steel / SS 304" }, { label: "Protection", value: "IP54" }, { label: "Bus", value: "Profinet / Modbus TCP" }] },
      { slug: "pfi-panels-capacitor-bank", name: "PFI Panels & Capacitor Bank", description: "Power factor improvement panels with automatic capacitor banks, harmonic-filter reactors and power factor controllers.", features: ["Auto PFC", "Detuned reactors", "Thyristor switching option"], specifications: [{ label: "Voltage", value: "415V AC" }, { label: "Rating", value: "Up to 1000 kVAr" }, { label: "Step control", value: "6 / 12 stages" }] },
      { slug: "ats-amf-panels", name: "ATS & AMF Panels", description: "Automatic transfer & mains failure panels for standby diesel generator integration with utility-grade switching.", features: ["Motorised ATS", "AMF with engine control", "Priority load shedding"], specifications: [{ label: "Voltage", value: "415V AC" }, { label: "Current", value: "Up to 4000A" }, { label: "Standard", value: "IEC 60947-6-1" }] },
      { slug: "synchronization-panels", name: "Synchronization Panels", description: "Multi-generator synchronising panels with auto-sync controllers, load sharing and reverse power protection.", features: ["Auto sync", "Load sharing", "Reverse power relay"], specifications: [{ label: "Voltage", value: "415V AC" }, { label: "Generators", value: "Up to 8 sets" }, { label: "Controller", value: "Deep Sea / ComAp" }] },
      { slug: "engineering-operator-workstation", name: "Engineering & Operator Workstation", description: "Ergonomic operator desks housing SCADA HMI, alarm annunciators, and control switches for control room environments.", features: ["Ergonomic desk", "Mimic & alarm tiles", "Adjustable HMI mount"], specifications: [{ label: "Form", value: "Custom MDF + steel" }, { label: "Display", value: "19\"-27\" HMI" }, { label: "Cable entry", value: "Glanded bottom" }] },
      { slug: "distribution-boards", name: "Distribution Boards (DBs)", description: "Sub-distribution and final distribution boards, surface / flush mounted with MCB outgoing ways.", features: ["Type A RCD option", "Surge protection", "Lockable door"], specifications: [{ label: "Voltage", value: "230 / 415V" }, { label: "Ways", value: "4 to 72 way" }, { label: "IP rating", value: "IP42 / IP65" }] },
      { slug: "junction-boxes", name: "Junction Boxes", description: "Field junction boxes in mild-steel, stainless-steel or GRP with brass / stainless cable glands for hazardous & safe areas.", features: ["ATEX option", "SS 304 / 316", "Sunshield variant"], specifications: [{ label: "Material", value: "MS / SS / GRP" }, { label: "Protection", value: "IP66" }, { label: "Hazardous", value: "Ex d / Ex e" }] },
    ],
  },
  {
    slug: "dc-power-supply",
    name: "DC Power Supply",
    short: "DC Power Supply — EV Chargers, Stabilizers, Transformers & Rectifiers",
    description:
      "DC power solutions including EV chargers, voltage stabilizers, transformer-rectifier sets and DC UPS systems for utility, telecom, industrial and cathodic-protection applications.",
    accent: "#0a2342",
    icon: "Zap",
    children: [
      { slug: "ev-charger", name: "EV Chargers", description: "AC & DC electric vehicle charging stations with OCPP 1.6 / 2.0 and dynamic load management.", features: ["OCPP 1.6J / 2.0", "RFID & QR auth", "Dynamic load balancing"], specifications: [{ label: "Output", value: "7 / 22 / 60 / 120 kW" }, { label: "Connector", value: "Type 2 / CCS2" }, { label: "Enclosure", value: "IP54" }] },
      { slug: "stabilizers", name: "Stabilizers", description: "Servo-controlled voltage stabilizers for sensitive industrial loads in areas with unstable grid voltage.", features: ["Servo stabilisation", "Spike / surge protection", "Bypass switch"], specifications: [{ label: "Capacity", value: "10 - 2000 kVA" }, { label: "Input range", value: "± 30%" }, { label: "Output", value: "± 1%" }] },
      { slug: "transformer-rectifiers", name: "Transformer Rectifiers", description: "Air / oil-cooled transformer-rectifier sets for cathodic protection, electrochemical and DC process loads.", features: ["Thyristor / IGBT", "Filtering", "Remote monitoring"], specifications: [{ label: "DC output", value: "Up to 200A / 100V" }, { label: "Cooling", value: "Air / Oil" }, { label: "Control", value: "PLC + HMI" }] },
      { slug: "dc-chargers-ups", name: "DC Chargers & UPS", description: "Float / boost DC chargers and DC UPS systems for substation battery banks, telecom and process control rooms.", features: ["Float / boost", "Battery health monitor", "Redundant rectifier"], specifications: [{ label: "DC output", value: "24 / 48 / 110 / 220V" }, { label: "Capacity", value: "Up to 600A" }, { label: "Battery", value: "VRLA / Ni-Cd" }] },
    ],
  },
  {
    slug: "cathodic-protection-materials",
    name: "Cathodic Protection Materials",
    short: "Cathodic Protection Materials — CP Transformers, Anode & Cathode JBs",
    description:
      "Cathodic protection equipment including transformer-rectifiers, anode and cathode junction boxes, reference electrodes and test stations for buried pipeline and tank protection.",
    accent: "#0a2342",
    icon: "Anchor",
    children: [
      { slug: "cp-transformer-rectifier", name: "CP Transformer Rectifier", description: "Constant-current / constant-potential transformer rectifiers for impressed-current cathodic protection systems.", features: ["Auto-potential control", "Remote data logging", "Surge protection"], specifications: [{ label: "DC output", value: "Up to 200A / 100V" }, { label: "Control", value: "PLC + 4-20mA" }, { label: "Cooling", value: "Air / Oil" }] },
      { slug: "anode-junction-box", name: "Anode Junction Box", description: "Junction boxes for distributing DC current to impressed-current anodes in pipelines, tanks and marine structures.", features: ["IP66 enclosure", "Shunt per anode", "Surge arrestor"], specifications: [{ label: "Material", value: "SS 316L / GRP" }, { label: "Circuits", value: "1-24 way" }, { label: "IP rating", value: "IP66" }] },
      { slug: "cathode-junction-box", name: "Cathode Junction Box", description: "Negative return junction boxes that collect DC current from the protected structure back to the rectifier.", features: ["Solid or switched", "Isolating terminals", "Test facility"], specifications: [{ label: "Material", value: "SS 316L / MS painted" }, { label: "Circuits", value: "1-12 way" }, { label: "IP rating", value: "IP66" }] },
    ],
  },
  {
    slug: "bus-tie-duct",
    name: "Bus Tie Duct (BTD)",
    short: "Bus Tie Duct — LV Power Distribution Network, 100% Pure Copper",
    description:
      "Low-voltage bus tie ducts in 100% pure copper for high-current power distribution between switchgear, transformers and process loads, with customisable routing.",
    accent: "#0a2342",
    icon: "Minus",
    children: [
      { slug: "lv-power-distribution-network", name: "Low Voltage Power Distribution Network", description: "Bus tie duct networks for routing high-current LV power between transformer and switchgear rooms.", features: ["Up to 6300A", "Custom routing", "Maintenance covers"], specifications: [{ label: "Current", value: "Up to 6300A" }, { label: "Voltage", value: "Up to 1000V AC" }, { label: "IP", value: "IP54 / IP55" }] },
      { slug: "copper-bus-tie-duct", name: "100% Pure Copper Bus Tie Duct", description: "All-copper bus tie duct with tin-plated option for low-loss, corrosion-resistant high-current distribution.", features: ["Tin-plated option", "Low impedance", "Earthed enclosure"], specifications: [{ label: "Conductor", value: "ETP copper" }, { label: "Plating", value: "Tin optional" }, { label: "Enclosure", value: "Aluminium / MS" }] },
      { slug: "customizable-bus-duct-solutions", name: "Customizable Bus Duct Solutions", description: "Site-measured and engineered bus duct solutions with phase segregation, joints and expansion kits.", features: ["Site measurement", "Expansion joints", "Custom bends"], specifications: [{ label: "Configuration", value: "3-phase 4-wire / 5-wire" }, { label: "Length", value: "Per site" }, { label: "IP", value: "Up to IP68" }] },
    ],
  },
  {
    slug: "cable-trays-ladders",
    name: "Cable Trays & Ladders",
    short: "Cable Trays — Ladder & Perforated, All Sizes, Customization Available",
    description:
      "Ladder-type and perforated cable trays in mild-steel / GI / aluminium / SS, with covers, fittings and accessories for any installation environment.",
    accent: "#0a2342",
    icon: "Grid3x3",
    children: [
      { slug: "ladder-cable-trays", name: "Ladder Cable Trays", description: "Heavy-duty ladder-type cable trays for power and control cable runs in industrial environments.", features: ["Hot-dip galvanised", "Heavy-duty rungs", "Up to 6m length"], specifications: [{ label: "Width", value: "75-1000 mm" }, { label: "Height", value: "25-150 mm" }, { label: "Finish", value: "GI / Powder coated" }] },
      { slug: "perforated-cable-trays", name: "Perforated Cable Trays", description: "Perforated cable trays for control & instrumentation cable management with ventilation and easy cable exit.", features: ["Ventilated base", "Bend & tee fittings", "Cover available"], specifications: [{ label: "Width", value: "25-600 mm" }, { label: "Height", value: "25-100 mm" }, { label: "Material", value: "MS / GI / SS" }] },
    ],
  },
  {
    slug: "price-display-units",
    name: "Price Display Units",
    short: "Price Display Units — Automated Visuals for Electrical Designs",
    description:
      "LED price display units for retail fuel outlets with wireless, GPRS or RS-485 update options and bright outdoor visibility.",
    accent: "#0a2342",
    icon: "Monitor",
    children: [
      { slug: "led-price-display", name: "LED Price Display Unit", description: "Outdoor LED price display for fuel forecourts with auto brightness, remote update and weatherproof enclosure.", features: ["Auto-brightness", "Remote price update", "Weatherproof"], specifications: [{ label: "Display", value: "Red / Amber LED" }, { label: "Update", value: "GPRS / WiFi / RS-485" }, { label: "IP", value: "IP65" }] },
    ],
  },
  {
    slug: "mv-switchgear",
    name: "MV Switchgear",
    short: "MV Switchgear — 11 kV Voltage Level, High Voltage Insulation, IEC Standard",
    description:
      "Medium-voltage switchgear up to 11kV class with high-voltage insulation, vacuum / SF6 interruption, and full IEC compliance.",
    accent: "#0a2342",
    icon: "ShieldCheck",
    children: [
      { slug: "mv-vacuum-cb", name: "MV Vacuum Circuit Breaker Panel", description: "11kV vacuum circuit breaker panels with protection, metering and bus-tie configurations.", features: ["Vacuum interrupter", "Numerical relay", "Safe pressure release"], specifications: [{ label: "Voltage", value: "Up to 11kV" }, { label: "Current", value: "Up to 1250A" }, { label: "Standard", value: "IEC 62271" }] },
    ],
  },
  {
    slug: "distributions",
    name: "Distributions",
    short: "Distributions — Authorization, OEM Partnerships, Exclusive Presence",
    description:
      "Authorised distribution and OEM partnerships for select global brands — covering switchgear, automation, instrumentation and protection equipment.",
    accent: "#0a2342",
    icon: "Handshake",
    children: [
      { slug: "oket-petrol-pump-automation", name: "OKet — Petrol Pump Automation", description: "Authorised distribution, supply and integration of OKet forecourt automation solutions for retail fuel outlets.", features: ["Forecourt controller", "Pump & tank integration", "Back-office software"], specifications: [{ label: "Protocol", value: "IPLA / GS" }, { label: "Pumps supported", value: "Up to 32 / controller" }, { label: "Integration", value: "OMC HQ" }] },
    ],
  },
];

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "rekodiq-site-update",
    title: "Exciting update from our Rekodiq site!",
    excerpt:
      "We've successfully deployed temporary facilities and started civil construction, and Wartsila has awarded us additional packages for Complete Above Zero Building PEB work and Complete Electrical Installation & Erection Services. We're honoured to deliver this critical project!",
    content:
      "We've successfully deployed temporary facilities and started civil construction at our Rekodiq site. Wartsila has awarded us additional packages for Complete Above Zero Building PEB work and Complete Electrical Installation & Erection Services. We're honoured to deliver this critical project and continue our journey of engineering excellence in Pakistan's energy sector.",
    category: "Project Update",
    date: "2025-09-18",
  },
  {
    slug: "commitment-to-quality-collaboration",
    title: "Commitment to Quality & Collaboration",
    excerpt:
      "We remain committed to delivering excellence to our valued clients. It was an honor to host our esteemed vendor at the Elite Power Workshop, strengthening collaboration and reaffirming our shared commitment to quality, innovation, and long-term success.",
    content:
      "We remain committed to delivering excellence to our valued clients. It was an honor to host our esteemed vendor at the Elite Power Workshop, strengthening collaboration and reaffirming our shared commitment to quality, innovation, and long-term success. The visit included a full tour of our manufacturing floor, design office and QA labs, with detailed technical reviews across product lines.",
    category: "Vendor Relations",
    date: "2025-08-29",
  },
  {
    slug: "your-safety-our-responsibility",
    title: "Your Safety, Our Responsibility",
    excerpt:
      "At Elite Power, we believe your life is priceless, you are everything to your family. Our HSE Team reminds you to always wear mandatory PPEs and follow safety rules. Safety is not just a priority, it's our shared responsibility!",
    content:
      "At Elite Power, we believe your life is priceless, you are everything to your family. Our HSE Team reminds you to always wear mandatory PPEs and follow safety rules. Safety is not just a priority, it's our shared responsibility! This campaign reinforces the ZERO LTI culture that has defined every project we deliver.",
    category: "HSE",
    date: "2025-08-14",
  },
  {
    slug: "strengthening-ties-powering-progress",
    title: "Strengthening Ties, Powering Progress",
    excerpt:
      "We were honored to welcome a distinguished Chinese delegation to the Elite Power workshop as part of their official visit. The delegation was given an in-depth tour of our state-of-the-art facilities, showcasing our latest advancements in engineering, manufacturing, and power solutions.",
    content:
      "We were honored to welcome a distinguished Chinese delegation to the Elite Power workshop as part of their official visit. The delegation was given an in-depth tour of our state-of-the-art facilities, showcasing our latest advancements in engineering, manufacturing, and power solutions. The visit underscored growing international confidence in Pakistan's engineering capability and opened pathways for future technology partnerships.",
    category: "International",
    date: "2025-07-22",
  },
  {
    slug: "celebrating-78-years-independence",
    title: "Celebrating 78 Years of Independence",
    excerpt:
      "Elite Power Pvt. Ltd. proudly celebrated Pakistan's 78th Independence Day with unity, passion, and pride. We honor our heroes, value our freedom, and pledge to power a brighter future for our beloved homeland.",
    content:
      "Elite Power Pvt. Ltd. proudly celebrated Pakistan's 78th Independence Day with unity, passion, and pride. We honor our heroes, value our freedom, and pledge to power a brighter future for our beloved homeland. The flag-hoisting ceremony at our head office and manufacturing workshop was attended by the entire team and leadership, followed by a tree-plantation drive in the surrounding community.",
    category: "Corporate",
    date: "2025-08-14",
  },
  {
    slug: "honoring-dedication-with-recognition",
    title: "Honoring Dedication with Recognition",
    excerpt:
      "At Elite Power Pvt. Ltd., we believe our success is built on the dedication of our people. In recognition of their loyalty and outstanding contributions, Mr. Ramiz Siddiq (Manager Proposals Power & Renewables), Mr. Rafaqat Ali (Sr. Manager BMS & HVAC), and Mr. Asfand Yar (Lead Engineer Projects) were awarded brand-new cars in a special ceremony.",
    content:
      "At Elite Power Pvt. Ltd., we believe our success is built on the dedication of our people. In recognition of their loyalty and outstanding contributions, Mr. Ramiz Siddiq (Manager Proposals Power & Renewables), Mr. Rafaqat Ali (Sr. Manager BMS & HVAC), and Mr. Asfand Yar (Lead Engineer Projects) were awarded brand-new cars in a special ceremony. The recognition programme is part of Elite Power's wider commitment to long-term careers, technical excellence and a culture where loyalty and craftsmanship are rewarded tangibly.",
    category: "Recognition",
    date: "2025-06-30",
  },
];

export interface TeamMember {
  name: string;
  designation: string;
  bio: string;
}

export const TEAM: TeamMember[] = [
  { name: "Dur Muhammad Ayub", designation: "Chairman", bio: "Founder and Chairman of Elite Power (Pvt.) Ltd. with over four decades of leadership in Pakistan's electrical engineering sector." },
  { name: "Azhar Iqbal", designation: "Director", bio: "Director responsible for corporate strategy and long-term business development across regional markets." },
  { name: "Abid Hussain Arif", designation: "Director Operation E&I", bio: "Director of Operations for Electrical & Instrumentation, overseeing all EPC project execution nationwide." },
  { name: "Ramiz Siddiq", designation: "Manager Proposals — Power & Renewables", bio: "Leads proposal engineering for power and renewable energy projects, including grid stations and solar PV plants." },
  { name: "Zarif Ahmad", designation: "Senior Manager Design", bio: "Heads the in-house design department producing IFC drawings for EPC and switchgear manufacturing projects." },
  { name: "Col. Umair Bin Zaffar", designation: "Senior Manager HR / Admin", bio: "Veteran HR leader responsible for talent acquisition, discipline and corporate administration." },
  { name: "Shamsi Khan", designation: "Senior Manager Legal", bio: "Advises on contract law, claims and corporate compliance across project portfolios." },
  { name: "Shahid Bashir", designation: "Senior Manager BD", bio: "Drives business development and strategic partnerships with regional and international clients." },
  { name: "Abdul Mannan", designation: "Manager Supply Chain", bio: "Leads procurement and supply chain using the company's ERP backbone to ensure on-site delivery." },
  { name: "Saleem Khan", designation: "HSE Manager", bio: "Heads the Health, Safety and Environment function — custodian of the company's ZERO LTI record." },
];

export interface Client {
  name: string;
  sector: string;
}

export const CLIENTS: Client[] = [
  { name: "Gas & Oil Pakistan (GO)", sector: "Oil & Gas" },
  { name: "Pakistan State Oil (PSO)", sector: "Oil & Gas" },
  { name: "Shell Pakistan", sector: "Oil & Gas" },
  { name: "Saudi Aramco", sector: "Oil & Gas" },
  { name: "Wartsila", sector: "Power" },
  { name: "Atlas Honda", sector: "Manufacturing" },
  { name: "Engro Corporation", sector: "Industrial" },
  { name: "Lucky Cement", sector: "Cement" },
  { name: "DG Khan Cement", sector: "Cement" },
  { name: "Nestlé Pakistan", sector: "Food & Beverages" },
  { name: "GlaxoSmithKline", sector: "Pharmaceutical" },
  { name: "Shaukat Khanum Hospital", sector: "Healthcare" },
];

export interface Solution {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  technicalScope: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "atex-implementation",
    name: "ATEX Implementation",
    tagline: "Hazardous area compliance",
    overview:
      "Design, supply and installation of ATEX-certified equipment and wiring for Zone 1 / Zone 2 hazardous areas in oil depots, petrol pumps and process plants.",
    technicalScope: [
      "ATEX Ex d / Ex e equipment selection",
      "Hazardous area classification drawings",
      "Intrinsically-safe barrier panels",
      "Inspection & compliance certification",
    ],
  },
  {
    slug: "atg-system",
    name: "ATG System",
    tagline: "Automatic tank gauging",
    overview:
      "Automatic tank gauging systems for oil terminals and retail outlets, integrating probes, sensors and a back-office console for inventory and overfill prevention.",
    technicalScope: [
      "Probe & sensor installation",
      "ATG console & central heart office",
      "Overfill prevention interlocks",
      "Inventory reconciliation reports",
    ],
  },
  {
    slug: "overfill-prevention-system-ihhla",
    name: "Overfill Prevention System (IHHLA)",
    tagline: "API 2350 compliant",
    overview:
      "Independent overfill prevention systems for tank terminals meeting API 2350 4th / 5th edition with sensor redundancy and alarm management.",
    technicalScope: [
      "Independent sensor chains",
      "Hard-wired shutdown logic",
      "Alarm management per API 2350",
      "Functional safety assessment",
    ],
  },
  {
    slug: "oil-metering-system",
    name: "Oil Metering System",
    tagline: "Custody transfer metering",
    overview:
      "Skid-mounted custody-transfer metering systems for oil terminals, with flow computers, provers and SCADA integration for OMC billing.",
    technicalScope: [
      "Meter selection & sizing",
      "Flow computer configuration",
      "Prover loop integration",
      "SCADA / OMC HQ reporting",
    ],
  },
  {
    slug: "plc-dcs-scada",
    name: "PLC, DCS & SCADA",
    tagline: "Process automation",
    overview:
      "In-house SCADA development and PLC / DCS programming for industrial process automation, with HMI design, alarm management and reporting.",
    technicalScope: [
      "PLC & DCS programming",
      "SCADA development",
      "HMI design",
      "Industrial networking",
    ],
  },
  {
    slug: "vfd-integration",
    name: "VFD Integration",
    tagline: "Variable frequency drives",
    overview:
      "Supply, panel-build and commissioning of variable frequency drive panels with harmonic mitigation, EMC and motor protection.",
    technicalScope: [
      "Drive selection",
      "Harmonic mitigation",
      "Panel build per IEC",
      "Commissioning & tuning",
    ],
  },
];

export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  { category: "General", question: "What is Elite Power's core business?", answer: "Elite Power (Pvt.) Ltd. is an Electrical, Instrumentation and Control system-oriented company specialising in EPC turnkey E&I projects along with the production of LV switchgear and associated electrical products. From design through hand-over, every activity is carried out under one roof." },
  { category: "General", question: "Which quality and compliance standards are implemented?", answer: "Elite Power implements an Integrated Management System (IMS) covering ISO 9001, ISO 14001 and ISO 45001, is SAP-integrated for procurement and supply chain, and holds ATEX certification for hazardous-area equipment and installation." },
  { category: "General", question: "What is your safety record?", answer: "Elite Power is a proud ZERO Lost Time Injury (LTI) company across all successfully completed projects, supported by a competent QHSE function and safety-oriented execution teams." },
  { category: "Engineering & Design", question: "Do you provide in-house design and IFC drawings?", answer: "Yes. Our in-house design department collaborates with the customer's OEMs and consultants to fabricate detailed design and Issued-For-Construction (IFC) drawings for the project." },
  { category: "Engineering & Design", question: "What standards are followed for switchgear manufacturing?", answer: "All low-voltage switchgear and control-gear assemblies are type-tested and manufactured per IEC 61439, with options for arc-flash detection, IP42 / IP55 enclosures and internal form separation up to Form 4b." },
  { category: "Procurement", question: "How do you ensure on-time material delivery to site?", answer: "Our in-house procurement and supply chain, supported by the company's ERP backbone, delivers the right product to the right place at the right time per the project delivery plan." },
  { category: "Procurement", question: "Are you an authorised distributor for any brands?", answer: "Yes. Elite Power is an authorised distributor and OEM partner for several global brands covering switchgear, automation, instrumentation and protection equipment. The Distributions section of our Products page lists the current portfolio including OKet forecourt automation." },
  { category: "Construction & Commissioning", question: "Are your execution teams permanently employed?", answer: "Yes. Our seasoned execution teams are permanently employed and mobilised immediately in accordance with each project's delivery plan, ensuring continuity and accountability." },
  { category: "Construction & Commissioning", question: "Do you support SCADA development in-house?", answer: "Yes. Elite Power has designed, developed and implemented more than 25 SCADA systems running across Pakistan in major industrial sectors including Oil & Gas and Food & Beverages." },
  { category: "Inspections & Audits", question: "Do you perform factory acceptance testing?", answer: "Yes. Every panel and assembly undergoes routine and type tests in our workshop, including dielectric, insulation, torque, secondary injection and functional testing, before dispatch to site." },
  { category: "Inspections & Audits", question: "Are third-party inspections supported?", answer: "Yes. We support third-party inspections by client-appointed consultants and inspection agencies, and provide all required documentation and test certificates." },
  { category: "Contracts & Terms", question: "Where is Elite Power headquartered?", answer: "Our Head Office is located at 182 D Block, Valencia Town, Lahore, Pakistan. We operate corporate offices and a manufacturing workshop nationwide to support project delivery." },
  { category: "Contracts & Terms", question: "How can I request a quotation?", answer: "You can use the Get Quote link in the navigation, or the contact form on the Contact Us page. Provide product name, sector, project location and any technical specifications — our proposals team will respond within one business day." },
];

export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export const JOBS: JobOpening[] = [
  {
    slug: "electrical-design-engineer",
    title: "Electrical Design Engineer",
    department: "Design & Engineering",
    location: "Lahore, Pakistan",
    type: "Full-time",
    description:
      "Prepare single-line diagrams, panel general arrangements, control schematics and IFC drawings for EPC and switchgear manufacturing projects using AutoCAD Electrical and EPLAN.",
    requirements: ["BSc / BEng Electrical Engineering", "3+ years LV switchgear / EPC design", "AutoCAD Electrical, EPLAN", "Familiar with IEC 61439"],
  },
  {
    slug: "scada-engineer",
    title: "SCADA / PLC Engineer",
    department: "Automation",
    location: "Lahore, Pakistan",
    type: "Full-time",
    description:
      "Develop SCADA applications and PLC programs for industrial automation projects including oil terminals, F&B plants and process industries.",
    requirements: ["BSc / BEng Electrical / Electronics Engineering", "3+ years SCADA / PLC", "Siemens / Allen-Bradley / Schneider platforms", "Industrial networking"],
  },
  {
    slug: "site-engineer-epc",
    title: "Site Engineer — EPC Project",
    department: "Project Execution",
    location: "Project site (various)",
    type: "Full-time",
    description:
      "Supervise installation, testing and commissioning of electrical and instrumentation works on EPC project sites across Pakistan, reporting to the project manager.",
    requirements: ["DAE / BSc Electrical", "5+ years site experience", "Willingness to mobilise", "HSE certification an advantage"],
  },
];

export interface OfficeLocation {
  label: string;
  address: string;
  type: "head" | "manufacturing" | "regional";
}

export const OFFICES: OfficeLocation[] = [
  { label: "Head Office", address: "182 D Block, Valencia Town, Lahore, Pakistan", type: "head" },
  {
    label: "Manufacturing Facility",
    address: "Elite Power Workshop, Lahore, Pakistan",
    type: "manufacturing",
  },
  {
    label: "Regional Office — Karachi",
    address: "Corporate Office, Karachi, Pakistan",
    type: "regional",
  },
];

export const COMPANY_CONTACT = {
  phone: "+92 42 111 111 932",
  email: "info@elitepower.com.pk",
  hours: "Mon – Sat · 09:00 – 18:00 PKT",
};

export const COMPANY_INTRO =
  "Elite Power (Pvt.) Ltd. is an Electrical, Instrumentation and Control system-oriented company that specializes in carrying out EPC Turnkey E&I Projects along with production of related LV switchgear associated products. From Design till hand over, everything that we do is under one roof, which makes us stand out to deliver a pin-pointed solution for our customer. With SAP and IMS implemented, our all projects are 100% focused and spot-on with the customer timelines and quality measures.";
