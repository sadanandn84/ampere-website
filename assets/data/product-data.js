/* ═══════════════════════════════════════════════
   AMPERE ELECTRIC — PRODUCTS DATA
   assets/data/product-data.js
   ═══════════════════════════════════════════════ */

const AMPERE_PRODUCTS = {
  "ie4-motors": {
    name: "IE4 Motors",
    brand: "CG Power / Siemens / Bharat Bijlee",
    category: "HT & LT Motors",
    image: "assets/images/products/ie4-motor.webp",
    shortDescription:
      "Premium efficiency IE4 motors designed for high-performance industrial applications with reduced energy consumption.",
    overview:
      "IE4 motors are suitable for industries requiring continuous-duty operation, high energy savings and reliable performance. These motors are commonly used in pumps, fans, compressors, conveyors, process machinery and automation-driven applications.",
    specifications: {
      "Efficiency Class": "IE4 Premium Efficiency",
      "Power Range": "0.75 kW to 355 kW",
      "Voltage": "415V / 690V",
      "Frequency": "50 Hz",
      "Speed": "750 / 1000 / 1500 / 3000 RPM",
      "Mounting": "Foot / Flange / Face",
      "Protection": "IP55 / IP56",
      "Insulation Class": "Class F / Class H"
    },
    features: [
      "High energy efficiency",
      "Low operating temperature",
      "Reduced lifecycle cost",
      "Suitable for continuous-duty applications",
      "Robust industrial construction"
    ],
    applications: [
      "Pumps",
      "Fans and blowers",
      "Compressors",
      "Conveyors",
      "Industrial process machinery"
    ],
    catalogue: "#"
  },

  "ie3-motors": {
    name: "IE3 Motors",
    brand: "CG Power / Siemens / Bharat Bijlee",
    category: "HT & LT Motors",
    image: "assets/images/products/ie3-motor.webp",
    shortDescription:
      "Energy-efficient IE3 motors for reliable and continuous industrial operations.",
    overview:
      "IE3 motors are widely used across industrial plants for applications requiring dependable performance and improved energy efficiency. They are ideal for standard industrial machines and utility applications.",
    specifications: {
      "Efficiency Class": "IE3 High Efficiency",
      "Power Range": "0.37 kW to 315 kW",
      "Voltage": "415V",
      "Frequency": "50 Hz",
      "Speed": "750 / 1000 / 1500 / 3000 RPM",
      "Mounting": "Foot / Flange",
      "Protection": "IP55",
      "Insulation Class": "Class F"
    },
    features: [
      "Energy-saving design",
      "Reliable performance",
      "Low vibration",
      "Easy installation",
      "Suitable for heavy-duty operation"
    ],
    applications: [
      "Pumps",
      "Fans",
      "Machine tools",
      "Textile machinery",
      "Material handling equipment"
    ],
    catalogue: "#"
  },

  "ie2-motors": {
    name: "IE2 Motors",
    brand: "CG Power / Siemens / Bharat Bijlee",
    category: "HT & LT Motors",
    image: "assets/images/products/ie2-motor.webp",
    shortDescription:
      "Industrial IE2 motors suitable for pumps, fans, conveyors and general machinery.",
    overview:
      "IE2 motors are dependable motors used for general industrial applications. They offer stable operation, sturdy design and compatibility with a wide range of industrial equipment.",
    specifications: {
      "Efficiency Class": "IE2 Efficiency",
      "Power Range": "0.37 kW to 250 kW",
      "Voltage": "415V",
      "Frequency": "50 Hz",
      "Speed": "750 / 1000 / 1500 / 3000 RPM",
      "Mounting": "Foot / Flange",
      "Protection": "IP55",
      "Insulation Class": "Class F"
    },
    features: [
      "Durable construction",
      "Cost-effective performance",
      "Easy maintenance",
      "Suitable for general industrial use",
      "Available in multiple frame sizes"
    ],
    applications: [
      "Pumps",
      "Conveyors",
      "Fans",
      "Agitators",
      "General machinery"
    ],
    catalogue: "#"
  },

  "crane-duty-motors": {
    name: "Crane Duty Motors",
    brand: "CG Power / Bharat Bijlee",
    category: "HT & LT Motors",
    image: "assets/images/products/crane-duty-motor.webp",
    shortDescription:
      "Heavy-duty motors designed for crane, hoist and frequent start-stop applications.",
    overview:
      "Crane duty motors are designed for high starting torque and frequent operations. These motors are suitable for cranes, hoists, lifts and material handling systems.",
    specifications: {
      "Duty Type": "S3 / S4 / S5",
      "Power Range": "0.5 HP to 300 HP",
      "Voltage": "415V",
      "Frequency": "50 Hz",
      "Mounting": "Foot / Flange",
      "Protection": "IP55",
      "Insulation Class": "Class F / H",
      "Application": "Crane / Hoist / Lift"
    },
    features: [
      "High starting torque",
      "Suitable for frequent start-stop operation",
      "Rugged body construction",
      "Low maintenance",
      "Designed for material handling applications"
    ],
    applications: [
      "EOT cranes",
      "Hoists",
      "Lifts",
      "Winches",
      "Material handling systems"
    ],
    catalogue: "#"
  },

  "crane-duty-slipring-motors": {
    name: "Crane Duty Slipring Motors",
    brand: "CG Power / Bharat Bijlee",
    category: "HT & LT Motors",
    image: "assets/images/products/slipring-motor.webp",
    shortDescription:
      "Slipring motors for cranes, hoists and high-torque heavy-duty applications.",
    overview:
      "Crane duty slipring motors are used where smooth acceleration, high torque and controlled starting are required. These motors are ideal for heavy cranes and demanding industrial lifting systems.",
    specifications: {
      "Motor Type": "Slipring Induction Motor",
      "Duty Type": "S3 / S4 / S5",
      "Voltage": "415V / 690V",
      "Frequency": "50 Hz",
      "Speed": "As per application",
      "Protection": "IP55",
      "Insulation Class": "Class F / H",
      "Cooling": "IC411 / IC416"
    },
    features: [
      "High starting torque",
      "Smooth acceleration",
      "Suitable for heavy-duty crane operation",
      "Robust slipring assembly",
      "Designed for harsh industrial environments"
    ],
    applications: [
      "Heavy EOT cranes",
      "Steel plants",
      "Hoisting machinery",
      "Mining equipment",
      "Large winches"
    ],
    catalogue: "#"
  },

  "flameproof-mv-motors": {
  name: "TEFC Flameproof Motors",
  brand: "Marathon Electric / Leading Motor Brands",
  category: "HT & LT Motors",
  image: "assets/images/products/flameproof-mv-motor.webp",
  shortDescription:
    "Flameproof motors designed for dependable operation in hazardous industrial environments.",
  overview:
    "TEFC flameproof motors are intended for industrial applications where potentially hazardous gases, vapours or dust may be present. Product selection should be based on the required hazardous-area classification, operating duty, power rating and site conditions.",
  specifications: {
    "Motor Type": "TEFC Flameproof Induction Motor",
    "Voltage": "As per application",
    "Frequency": "50 Hz",
    "Mounting": "Foot / Flange, subject to model",
    "Protection": "As per selected motor",
    "Insulation Class": "As per selected motor",
    "Application": "Hazardous-area industrial applications"
  },
  features: [
    "Designed for hazardous industrial environments",
    "Robust totally enclosed construction",
    "Suitable for continuous industrial operation",
    "Application-based rating selection",
    "Installation and technical selection support"
  ],
  applications: [
    "Chemical plants",
    "Petrochemical facilities",
    "Paint and solvent processing",
    "Oil and gas installations",
    "Hazardous process areas"
  ],
  catalogue: "#"
  },

"caca-motors": {
  name: "CACA Motors",
  brand: "Marathon Electric / Leading Motor Brands",
  category: "HT & LT Motors",
  image: "assets/images/products/caca-motor.webp",
  shortDescription:
    "Closed-air-circuit air-cooled motors for demanding high-power industrial applications.",
  overview:
    "CACA motors use a closed internal air circuit with an external air-cooling arrangement. They are suitable for industrial applications requiring reliable cooling, controlled motor temperatures and dependable operation under demanding load conditions.",
  specifications: {
    "Motor Type": "CACA Induction Motor",
    "Cooling Method": "Closed Air Circuit Air Cooled",
    "Voltage": "As per application",
    "Frequency": "50 Hz",
    "Mounting": "As per requirement",
    "Protection": "As per selected motor",
    "Duty": "Continuous / Application based"
  },
  features: [
    "Closed internal cooling circuit",
    "Suitable for demanding operating conditions",
    "Reliable temperature management",
    "Robust industrial construction",
    "Application-based motor selection"
  ],
  applications: [
    "Large pumps",
    "Compressors",
    "Fans and blowers",
    "Process machinery",
    "Heavy industrial drives"
  ],
  catalogue: "#"
  },

"tetv-high-voltage-motors": {
  name: "TETV High Voltage Motors",
  brand: "Marathon Electric",
  category: "HT & LT Motors",
  image: "assets/images/products/tetv-high-voltage-motor.webp",
  shortDescription:
    "Tube-ventilated high-voltage motors for dependable continuous industrial operation.",
  overview:
    "TETV high-voltage motors are designed for demanding industrial applications requiring dependable operation, effective ventilation and application-specific high-voltage motor selection.",
  specifications: {
    "Motor Type": "TETV High Voltage Motor",
    "Voltage": "High voltage, subject to selected model",
    "Frequency": "50 Hz",
    "Cooling": "Tube ventilated",
    "Mounting": "As per application",
    "Duty": "Continuous / Application based",
    "Protection": "As per selected model"
  },
  features: [
    "Designed for high-voltage applications",
    "Effective tube-ventilated cooling",
    "Suitable for continuous industrial duty",
    "Robust mechanical construction",
    "Application-specific selection support"
  ],
  applications: [
    "Large pumps",
    "Industrial fans",
    "Compressors",
    "Process plants",
    "Heavy-duty machinery"
  ],
  catalogue: "#"
  },

"ptsc-fire-fighting-motors": {
  name: "PTSC Fire Fighting Motors",
  brand: "Marathon Electric",
  category: "HT & LT Motors",
  image: "assets/images/products/ptsc-fire-fighting-motor.webp",
  shortDescription:
    "Fire-fighting duty motors for emergency pumping and fire-protection installations.",
  overview:
    "PTSC fire-fighting motors are selected for fire-pump systems requiring dependable operation during emergency conditions. Selection should be based on pump duty, operating voltage, applicable standards and project requirements.",
  specifications: {
    "Motor Type": "PTSC Fire Fighting Motor",
    "Application": "Fire Pump Systems",
    "Voltage": "As per requirement",
    "Frequency": "50 Hz",
    "Mounting": "As per pump arrangement",
    "Duty": "Emergency fire-fighting duty",
    "Protection": "As per selected model"
  },
  features: [
    "Designed for fire-pump applications",
    "Dependable emergency operation",
    "Robust industrial construction",
    "Application-based rating selection",
    "Installation and commissioning support"
  ],
  applications: [
    "Fire-water pumping systems",
    "Industrial fire-protection systems",
    "Commercial buildings",
    "Warehouses",
    "Infrastructure facilities"
  ],
  catalogue: "#"
  },

"earthing-solutions": {
  name: "Industrial Earthing Solutions",
  brand: "Ampere Electric / Leading Earthing Brands",
  category: "Earthing Solutions",
  image: "assets/images/products/product-placeholder.webp",
  shortDescription:
    "Application-based earthing solutions for industrial, commercial and infrastructure projects.",
  overview:
    "Ampere Electric supports earthing-product selection and implementation according to installation type, soil conditions, fault-current requirements and applicable project specifications.",
  specifications: {
    "Solution Type": "Industrial Earthing",
    "Application": "Electrical safety and fault-current dissipation",
    "Configuration": "Project and site specific",
    "Material": "Subject to selected earthing system",
    "Installation": "Industrial / Commercial / Infrastructure",
    "Support": "Selection, supply and installation coordination"
  },
  features: [
    "Application-based earthing selection",
    "Supports safe fault-current dissipation",
    "Suitable for industrial installations",
    "Project-specific configuration",
    "Installation and technical support"
  ],
  applications: [
    "Industrial plants",
    "Commercial buildings",
    "Electrical substations",
    "Control panels",
    "Infrastructure projects"
  ],
  catalogue: "#"
  },

"cooling-tower-solutions": {
  name: "Industrial Cooling Tower Solutions",
  brand: "Ampere Electric / Leading Cooling Tower Brands",
  category: "Cooling Tower Solutions",
  image: "assets/images/products/product-placeholder.webp",
  shortDescription:
    "Cooling tower products and application support for industrial cooling requirements.",
  overview:
    "Cooling tower solutions are selected according to process heat load, water conditions, required cooling capacity, installation space and operating environment. Ampere Electric supports application assessment, product selection and project coordination.",
  specifications: {
    "Solution Type": "Industrial Cooling Tower",
    "Capacity": "As per process requirement",
    "Configuration": "Application dependent",
    "Installation": "Industrial / Commercial",
    "Selection Basis": "Heat load, water and site conditions",
    "Support": "Selection and project coordination"
  },
  features: [
    "Application-based cooling capacity selection",
    "Suitable for industrial cooling processes",
    "Configuration based on site conditions",
    "Scalable project options",
    "Technical and installation support"
  ],
  applications: [
    "Manufacturing plants",
    "Process industries",
    "HVAC systems",
    "Power and utility installations",
    "Industrial water-cooling systems"
  ],
  catalogue: "#"
  },

  "diesel-generators": {
    name: "Diesel Generators",
    brand: "Sterling",
    category: "Diesel Generators",
    image: "assets/images/products/sterling-diesel-generator.webp",
    shortDescription:
      "Reliable diesel generator sets for industrial and commercial backup power.",
    overview:
      "Diesel generators provide dependable standby power for factories, commercial buildings, hospitals, warehouses and infrastructure sites.",
    specifications: {
      "Capacity Range": "As per requirement",
      "Fuel Type": "Diesel",
      "Phase": "Single Phase / Three Phase",
      "Application": "Standby / Emergency Power",
      "Control Panel": "Manual / AMF",
      "Enclosure": "Open / Acoustic"
    },
    features: [
      "Reliable backup power",
      "Available with acoustic enclosure",
      "Suitable for industrial load",
      "AMF panel option",
      "Service and installation support"
    ],
    applications: [
      "Industrial plants",
      "Commercial buildings",
      "Hospitals",
      "Warehouses",
      "Infrastructure projects"
    ],
    catalogue: "#"
  },

  "silent-dg-sets": {
    name: "Silent DG Sets",
    brand: "Leading DG Brands",
    category: "Diesel Generators",
    image: "assets/images/products/silent-dg.webp",
    shortDescription:
      "Low-noise diesel generator sets with acoustic enclosures.",
    overview:
      "Silent DG sets are suitable for locations where backup power is required with reduced noise levels. They are used in commercial, industrial and institutional facilities.",
    specifications: {
      "Capacity Range": "As per requirement",
      "Fuel Type": "Diesel",
      "Enclosure": "Acoustic",
      "Control": "Manual / Auto",
      "Application": "Backup Power"
    },
    features: [
      "Low noise operation",
      "Compact acoustic design",
      "Reliable standby power",
      "Easy operation",
      "Suitable for commercial premises"
    ],
    applications: [
      "Offices",
      "Hospitals",
      "Hotels",
      "Commercial complexes",
      "Industrial facilities"
    ],
    catalogue: "#"
  },

  "distribution-transformers": {
    name: "Distribution Transformers",
    brand: "Leading Transformer Brands",
    category: "Transformers",
    image: "assets/images/products/transformer.webp",
    shortDescription:
      "Distribution transformers for reliable industrial and utility power distribution.",
    overview:
      "Distribution transformers are used to step down voltage for safe and efficient power distribution in industrial, commercial and infrastructure facilities.",
    specifications: {
      "Type": "Distribution Transformer",
      "Capacity": "As per requirement",
      "Cooling": "Oil Cooled / Dry Type",
      "Frequency": "50 Hz",
      "Phase": "Three Phase",
      "Application": "Power Distribution"
    },
    features: [
      "Reliable voltage transformation",
      "Robust construction",
      "Low losses",
      "Industrial-grade design",
      "Suitable for continuous operation"
    ],
    applications: [
      "Factories",
      "Commercial buildings",
      "Industrial substations",
      "Utilities",
      "Infrastructure projects"
    ],
    catalogue: "#"
  },

  "oil-cooled-transformers": {
    name: "Oil Cooled Transformers",
    brand: "Leading Transformer Brands",
    category: "Transformers",
    image: "assets/images/products/oil-transformer.webp",
    shortDescription:
      "Oil cooled transformers for efficient and stable power distribution.",
    overview:
      "Oil cooled transformers are used in industrial and commercial power systems where efficient cooling and reliable operation are required.",
    specifications: {
      "Type": "Oil Cooled Transformer",
      "Capacity": "As per requirement",
      "Cooling": "ONAN / ONAF",
      "Frequency": "50 Hz",
      "Phase": "Three Phase",
      "Application": "Industrial Power Distribution"
    },
    features: [
      "Efficient cooling",
      "Stable voltage output",
      "Reliable performance",
      "Suitable for heavy loads",
      "Long service life"
    ],
    applications: [
      "Industrial plants",
      "Electrical substations",
      "Commercial buildings",
      "Utilities",
      "Process industries"
    ],
    catalogue: "#"
  },

  "control-panels": {
    name: "Industrial Control Panels",
    brand: "Ampere Electric",
    category: "Control Panels",
    image: "assets/images/products/industrial-control-panel.webp",
    shortDescription:
      "Custom electrical control panels for industrial automation and power control.",
    overview:
      "Control panels are designed for reliable operation of electrical and automation systems. Ampere Electric supports requirement-based panel solutions for machines, process systems and industrial utilities.",
    specifications: {
      "Panel Type": "Custom-built",
      "Voltage": "415V / As per requirement",
      "Control": "Relay / PLC / VFD",
      "Application": "Automation / Power Control",
      "Enclosure": "MS / SS",
      "Protection": "As per requirement"
    },
    features: [
      "Custom engineered design",
      "Neat wiring and panel layout",
      "PLC / VFD integration support",
      "Industrial-grade components",
      "Testing and commissioning support"
    ],
    applications: [
      "Machine control",
      "Process automation",
      "Motor control",
      "Utility control systems",
      "Industrial plants"
    ],
    catalogue: "#"
  },

  "apfc-panels": {
    name: "APFC Panels",
    brand: "Ampere Electric",
    category: "Control Panels",
    image: "assets/images/products/distribution-panel(Control Panel Interior).webp",
    shortDescription:
      "Automatic power factor correction panels for energy efficiency and penalty reduction.",
    overview:
      "APFC panels help maintain power factor by automatically switching capacitor banks according to load conditions. They are widely used in industries to improve energy efficiency.",
    specifications: {
      "Panel Type": "APFC",
      "Voltage": "415V",
      "Controller": "Microprocessor Based",
      "Capacitor": "Heavy Duty / APP",
      "Switching": "Contactor / Thyristor",
      "Application": "Power Factor Correction"
    },
    features: [
      "Improves power factor",
      "Reduces electricity penalties",
      "Automatic capacitor switching",
      "Reliable controller operation",
      "Custom rating options"
    ],
    applications: [
      "Factories",
      "Commercial buildings",
      "Industrial utilities",
      "Manufacturing plants",
      "Process industries"
    ],
    catalogue: "#"
  },

  "mcc-panels": {
    name: "MCC & VFD Panels",
    brand: "Ampere Electric",
    category: "Control Panels",
    image: "assets/images/products/mcc-vfd-panel.webp",
    shortDescription:
      "Motor Control Centre panels for safe and reliable motor operation.",
    overview:
      "MCC panels are used for controlling and protecting multiple motors from a centralized panel. They are suitable for industrial plants, utilities and process equipment.",
    specifications: {
      "Panel Type": "MCC",
      "Voltage": "415V",
      "Starter Type": "DOL / Star Delta / VFD",
      "Protection": "MCCB / MPCB / Relay",
      "Application": "Motor Control",
      "Construction": "Fixed / Drawout"
    },
    features: [
      "Centralized motor control",
      "Reliable protection",
      "Custom feeder configuration",
      "VFD starter option",
      "Easy maintenance"
    ],
    applications: [
      "Pumps",
      "Fans",
      "Compressors",
      "Conveyors",
      "Industrial machinery"
    ],
    catalogue: "#"
  },

  "ev-charging-solutions": {
  name: "EV Charging Solutions",

  category: "EV Charging Infrastructure",

  brand: "Ampere Electric in association with Chargeway",

  shortDescription:
    "End-to-end AC and DC EV charging infrastructure for commercial, industrial, fleet and public charging applications.",

  image: "assets/images/products/ev-charging-solutions.webp",

  overview:
    "Ampere Electric provides application-based EV charging solutions covering AC chargers, DC fast chargers, charging management, electrical infrastructure, installation, commissioning and technical support. Solutions are selected according to charging demand, vehicle type, available electrical capacity, site conditions and future expansion requirements.",

  specifications: {
  "Charging Types": "AC charging and DC fast charging",
  "AC Charger Options": "Wall-mounted and pedestal configurations",
  "DC Charger Options": "Floor-mounted fast-charging configurations",
  "Connector Options": "Type 2 and CCS2, subject to selected charger",
  "Connectivity": "Ethernet, Wi-Fi or cellular connectivity, model dependent",
  "Management": "Remote monitoring and charging-management options",
  "Installation": "Indoor and outdoor configurations, subject to model",
  "Support": "Site assessment, installation, commissioning and maintenance"
  },

  features: [
    "AC and DC charging solutions",
    "Residential, commercial, industrial and fleet applications",
    "Smart user authentication options",
    "Remote charger monitoring",
    "Energy-consumption visibility",
    "Charging-management integration",
    "Scalable site design",
    "Installation and commissioning support"
  ],

  applications: [
    "Commercial buildings",
    "Corporate offices",
    "Industrial facilities",
    "Residential societies",
    "Hotels and hospitals",
    "Shopping centres",
    "Fleet and logistics depots",
    "Public charging locations"
  ],

  catalogue: "#",

  relatedProducts: [
    "control-panels",
    "switchgear",
    "industrial-cables"
    ]
  },

  "switchgear": {
    name: "Switchgear",
    brand: "Siemens / Havells / Schneider / ABB",
    category: "Switchgear & Cables",
    image: "assets/images/products/switchgear.webp",
    shortDescription:
      "Industrial switchgear products for electrical protection and control.",
    overview:
      "Switchgear products are used for safe switching, protection and isolation of electrical circuits. Ampere Electric supplies switchgear for panels, machines and power distribution systems.",
    specifications: {
      "Product Type": "Switchgear",
      "Voltage": "LV / MV as required",
      "Application": "Protection / Switching",
      "Components": "MCB / MCCB / ACB / Contactors",
      "Usage": "Panels / Distribution Systems"
    },
    features: [
      "Reliable electrical protection",
      "Safe switching operation",
      "Industrial-grade components",
      "Multiple brand options",
      "Suitable for panel integration"
    ],
    applications: [
      "Control panels",
      "Power distribution",
      "Machine protection",
      "Industrial plants",
      "Commercial buildings"
    ],
    catalogue: "#"
  },

  "industrial-cables": {
    name: "Industrial Cables",
    brand: "Leading Cable Brands",
    category: "Switchgear & Cables",
    image: "assets/images/products/cables.webp",
    shortDescription:
      "Power and control cables for industrial electrical installations.",
    overview:
      "Industrial cables are used for reliable power supply, control wiring and instrumentation across industrial plants and commercial facilities.",
    specifications: {
      "Cable Type": "Power / Control / Instrumentation",
      "Voltage Grade": "As per requirement",
      "Conductor": "Copper / Aluminium",
      "Insulation": "PVC / XLPE",
      "Application": "Industrial Wiring"
    },
    features: [
      "Reliable current carrying capacity",
      "Suitable for industrial environments",
      "Power and control cable options",
      "Multiple sizes available",
      "Application-based selection"
    ],
    applications: [
      "Industrial plants",
      "Control panels",
      "Power distribution",
      "Machine wiring",
      "Commercial installations"
    ],
    catalogue: "#"
  },

  "mccb-protection-devices": {
    name: "MCCB & Protection Devices",
    brand: "Siemens / Havells / Schneider / ABB",
    category: "Switchgear & Cables",
    image: "assets/images/products/mccb.webp",
    shortDescription:
      "MCCBs and electrical protection devices for safe power distribution.",
    overview:
      "MCCBs and protection devices are essential for overload, short-circuit and fault protection in electrical panels and power distribution systems.",
    specifications: {
      "Product Type": "MCCB / Protection Devices",
      "Current Rating": "As per requirement",
      "Voltage": "LV",
      "Protection": "Overload / Short Circuit",
      "Application": "Panels / Distribution"
    },
    features: [
      "Overload protection",
      "Short-circuit protection",
      "Reliable switching",
      "Panel-ready devices",
      "Multiple brand options"
    ],
    applications: [
      "MCC panels",
      "Distribution boards",
      "Industrial panels",
      "Commercial buildings",
      "Machine protection"
    ],
    catalogue: "#"
  }
};

const AMPERE_RELATED_PRODUCTS = [
  "ie4-motors",
  "ie3-motors",
  "ie2-motors",
  "crane-duty-slipring-motors",
  "control-panels",
  "apfc-panels",
  "switchgear",
  "ev-charging-solutions"
];