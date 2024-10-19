const countryCoordinates = {
  PSE: [31.9474, 35.2272], // State of Palestine
  YMD: [15.5527, 48.5164], // People's Democratic Republic of Yemen
  SAU: [23.8859, 45.0792], // Saudi Arabia
  CPV: [16.5388, -23.0418], // Cabo Verde
  BGD: [23.685, 90.3563], // Bangladesh
  CIV: [7.5399, -5.5471], // Côte d’Ivoire
  BWA: [-22.3285, 24.6849], // Botswana
  KIR: [3.3704, -168.734], // Kiribati
  BRA: [-14.235, -51.9253], // Brazil
  CSK: [49.8175, 15.473], // Czechoslovakia
  BRB: [13.1939, -59.5432], // Barbados
  SSD: [6.877, 31.307], // South Sudan
  SYR: [34.8021, 38.9968], // Syrian Arab Republic
  NOR: [60.472, 8.4689], // Norway
  CHN: [35.8617, 104.1954], // China
  CAF: [6.6111, 20.9394], // Central African Republic
  KNA: [17.3578, -62.782], // Saint Kitts and Nevis
  AZE: [40.1431, 47.5769], // Azerbaijan
  LKA: [7.8731, 80.7718], // Sri Lanka
  TZA: [-6.369, 34.8888], // Tanzania
  SPI: [28.2938, -16.6215], // Canary Islands
  MSR: [16.7425, -62.1874], // Montserrat
  BIH: [43.9159, 17.6791], // Bosnia and Herzegovina
  PRK: [40.3399, 127.5101], // North Korea
  ZMB: [-13.1339, 27.8493], // Zambia
  BGR: [42.7339, 25.4858], // Bulgaria
  ECU: [-1.8312, -78.1834], // Ecuador
  ISL: [64.9631, -19.0208], // Iceland
  DOM: [18.7357, -70.1627], // Dominican Republic
  MMR: [21.9162, 95.956], // Myanmar
  DZA: [28.0339, 1.6596], // Algeria
  WLF: [-13.7688, -177.1561], // Wallis and Futuna Islands
  SUN: [61.524, 105.3188], // Soviet Union
  CAN: [56.1304, -106.3468], // Canada
  EGY: [26.8206, 30.8025], // Egypt
  ASM: [-14.271, -170.1322], // American Samoa
  LSO: [-29.6099, 28.2336], // Lesotho
  MOZ: [-18.6657, 35.5296], // Mozambique
  QAT: [25.3548, 51.1839], // Qatar
  GUF: [3.9339, -53.1258], // French Guiana
  GEO: [42.3154, 43.3569], // Georgia
  DJI: [11.8251, 42.5903], // Djibouti
  PHL: [12.8797, 121.774], // Philippines
  HKG: [22.3193, 114.1694], // Hong Kong
  AUT: [47.5162, 14.5501], // Austria
  NZL: [-40.9006, 174.886], // New Zealand
  BLZ: [17.1899, -88.4976], // Belize
  SWZ: [-26.5225, 31.4659], // Eswatini
  KOR: [35.9078, 127.7669], // South Korea
  CYP: [35.1264, 33.4299], // Cyprus
  PYF: [-17.6797, -149.4068], // French Polynesia
  COL: [4.5709, -74.2973], // Colombia
  ITA: [41.8719, 12.5674], // Italy
  SDN: [12.8628, 30.2176], // Sudan
  GMB: [13.4432, -15.3101], // Gambia
  BEL: [50.8503, 4.3517], // Belgium
  URY: [-32.5228, -55.7658], // Uruguay
  ETH: [9.145, 40.4897], // Ethiopia
  NLD: [52.1326, 5.2913], // Netherlands
  FRA: [46.6034, 1.8883], // France
  CHL: [-35.6751, -71.543], // Chile
  CUB: [21.5218, -77.7812], // Cuba
  JOR: [30.5852, 36.2384], // Jordan
  MNP: [15.0979, 145.6739], // Northern Mariana Islands
  SEN: [14.4974, -14.4524], // Senegal
  ROU: [45.9432, 24.9668], // Romania
  TKM: [38.9697, 59.5563], // Turkmenistan
  TGO: [8.6195, 0.8248], // Togo
  BDI: [-3.3731, 29.9189], // Burundi
  ZAF: [-30.5595, 22.9375], // South Africa
  HRV: [45.1, 15.2], // Croatia
  SWE: [60.1282, 18.6435], // Sweden
  BTN: [27.5142, 90.4336], // Bhutan
  PNG: [-6.3149, 143.9555], // Papua New Guinea
  BFA: [12.2383, -1.5616], // Burkina Faso
  VCT: [13.2528, -61.1971], // Saint Vincent and the Grenadines
  FJI: [-17.7134, 178.065], // Fiji
  GHA: [7.9465, -1.0232], // Ghana
  PRY: [-23.4425, -58.4438], // Paraguay
  JPN: [36.2048, 138.2529], // Japan
  FSM: [7.4256, 150.5508], // Micronesia
  NAM: [-22.9576, 18.4904], // Namibia
  POL: [51.9194, 19.1451], // Poland
  MNE: [42.7087, 19.3744], // Montenegro
  DMA: [15.415, -61.371], // Dominica
  ARM: [40.0691, 45.0382], // Armenia
  MEX: [23.6345, -102.5528], // Mexico
  SUR: [3.9193, -56.0278], // Suriname
  DFR: [51.1657, 10.4515], // Germany Federal Republic
  DNK: [56.2639, 9.5018], // Denmark
  SLV: [13.7942, -88.8965], // El Salvador
  BRN: [4.5353, 114.7277], // Brunei
  SRB: [44.0165, 21.0059], // Serbia
  PLW: [7.5149, 134.5825], // Palau
  KGZ: [41.2044, 74.7661], // Kyrgyzstan
  MDA: [47.4116, 28.3699], // Moldova
  REU: [-21.1151, 55.5364], // Réunion
  YMN: [15.5527, 48.5164], // Yemen Arab Republic
  BLR: [53.7098, 27.9534], // Belarus
  SLE: [8.4606, -11.7799], // Sierra Leone
  ESP: [40.4637, -3.7492], // Spain
  UGA: [1.3733, 32.2903], // Uganda
  ARG: [-38.4161, -63.6167], // Argentina
  TWN: [23.6978, 120.9605], // Taiwan (Province of China)
  RWA: [-1.9403, 29.8739], // Rwanda
  ERI: [15.1794, 39.7823], // Eritrea
  COM: [-11.6455, 43.3333], // Comoros
  GIN: [9.9456, -9.6966], // Guinea
  AZO: [37.7412, -25.6756], // Azores Islands
  LBN: [33.8547, 35.8623], // Lebanon
  LAO: [19.8563, 102.4955], // Lao People's Democratic Republic
  MHL: [7.1315, 171.1845], // Marshall Islands
  TUV: [-7.1095, 179.1942], // Tuvalu
  NIC: [12.8654, -85.2072], // Nicaragua
  UKR: [48.3794, 31.1656], // Ukraine
  LBY: [26.3351, 17.2283], // Libya
  ARE: [23.4241, 53.8478], // United Arab Emirates
  AUS: [-25.2744, 133.7751], // Australia
  AIA: [18.2206, -63.0686], // Anguilla
  PAN: [8.5379, -80.7821], // Panama
  GLP: [16.265, -61.551], // Guadeloupe
  PER: [-9.19, -75.0152], // Peru
  ISR: [31.0461, 34.8516], // Israel
  RUS: [61.524, 105.3188], // Russian Federation
  GRC: [39.0742, 21.8243], // Greece
  LUX: [49.8153, 6.1296], // Luxembourg
  MDV: [3.2028, 73.2207], // Maldives
  FIN: [61.9241, 25.7482], // Finland
  HUN: [47.1625, 19.5033], // Hungary
  STP: [0.1864, 6.6131], // Sao Tome and Principe
  MYS: [4.2105, 101.9758], // Malaysia
  TJK: [38.861, 71.2761], // Tajikistan
  SLB: [-9.6457, 160.1562], // Solomon Islands
  MDG: [-18.7669, 46.8691], // Madagascar
  IRL: [53.1424, -7.6921], // Ireland
  CZE: [49.8175, 15.473], // Czechia
  GBR: [55.3781, -3.436], // United Kingdom
  DEU: [51.1657, 10.4515], // Germany
  MTQ: [14.6415, -61.0242], // Martinique
  TUN: [33.8869, 9.5375], // Tunisia
  MWI: [-13.2543, 34.3015], // Malawi
  MLI: [17.5707, -3.9962], // Mali
  IRQ: [33.2232, 43.6793], // Iraq
  PRT: [39.3999, -8.2245], // Portugal
  HTI: [18.9712, -72.2852], // Haiti
  VEN: [6.4238, -66.5897], // Venezuela
  NGA: [9.082, 8.6753], // Nigeria
  LBR: [6.4281, -9.4295], // Liberia
  KHM: [12.5657, 104.991], // Cambodia
  MNG: [46.8625, 103.8467], // Mongolia
  NPL: [28.3949, 84.124], // Nepal
  SYC: [-4.6796, 55.492], // Seychelles
  CRI: [9.7489, -83.7534], // Costa Rica
  WSM: [-13.759, -172.1046], // Samoa
  ATG: [17.0608, -61.7964], // Antigua and Barbuda
  MRT: [21.0079, -10.9408], // Mauritania
  TTO: [10.6918, -61.2225], // Trinidad and Tobago
  YEM: [15.5527, 48.5164], // Yemen
  YUG: [44.0165, 21.0059], // Yugoslavia
  GUM: [13.4443, 144.7937], // Guam
  COG: [-0.228, 15.8277], // Congo
  TLS: [-8.8742, 125.7275], // Timor-Leste
  KAZ: [48.0196, 66.9237], // Kazakhstan
  AFG: [33.9391, 67.71], // Afghanistan
  SVK: [48.669, 19.699], // Slovakia
  ZWE: [-19.0154, 29.1549], // Zimbabwe
  GNB: [11.8037, -15.1804], // Guinea-Bissau
  SVN: [46.1512, 14.9955], // Slovenia
  JAM: [18.1096, -77.2975], // Jamaica
  MAR: [31.7917, -7.0926], // Morocco
  BOL: [-16.2902, -63.5887], // Bolivia
  IDN: [-0.7893, 113.9213], // Indonesia
  TCD: [15.4542, 18.7322], // Chad
  SOM: [5.1521, 46.1996], // Somalia
  OMN: [21.5126, 55.9233], // Oman
  KWT: [29.3117, 47.4818], // Kuwait
  UZB: [41.3775, 64.5853], // Uzbekistan
  LVA: [56.8796, 24.6032], // Latvia
  GUY: [4.8604, -58.9302], // Guyana
  MUS: [-20.3484, 57.5522], // Mauritius
  AGO: [-11.2027, 17.8739], // Angola
  LTU: [55.1694, 23.8813], // Lithuania
  IND: [20.5937, 78.9629], // India
  VUT: [-15.3767, 166.9592], // Vanuatu
  USA: [37.0902, -95.7129], // United States of America
  GRD: [12.1165, -61.679], // Grenada
  COD: [-4.0383, 21.7587], // Democratic Republic of the Congo
  BHS: [25.0343, -77.3963], // Bahamas
  NER: [17.6078, 8.0817], // Niger
  LCA: [13.9094, -60.9789], // Saint Lucia
  PRI: [18.2208, -66.5901], // Puerto Rico
  TON: [-21.1789, -175.1982], // Tonga
  MKD: [41.6086, 21.7453], // North Macedonia
  KEN: [-0.0236, 37.9062], // Kenya
  VNM: [14.0583, 108.2772], // Vietnam
  GTM: [15.7835, -90.2308], // Guatemala
  IRN: [32.4279, 53.688], // Iran
  CHE: [46.8182, 8.2275], // Switzerland
  BEN: [9.3077, 2.3158], // Benin
  GAB: [-0.8037, 11.6094], // Gabon
  THA: [15.87, 100.9925], // Thailand
  ALB: [41.1533, 20.1683], // Albania
  TUR: [38.9637, 35.2433], // Turkey
  PAK: [30.3753, 69.3451], // Pakistan
  CMR: [7.3697, 12.3547], // Cameroon
  HND: [15.2, -86.2419], // Honduras
  SCG: [44.0165, 21.0059], // Serbia Montenegro
};

export default countryCoordinates;
