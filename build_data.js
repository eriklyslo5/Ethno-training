// Build the complete phenotype dataset with coordinates
// Uses scraped descriptions to assign geographic coordinates

const fs = require('fs');

// Read scraped data
const lines = fs.readFileSync('scraped_data.txt', 'utf8').trim().split('\n');

// Known coordinates from map.js + manual research
// These are approximate geographic centers of highest concentration (circa 1500 CE)
const COORDS = {
  // ── EUROPE ──────────────────────────────
  'Nordid':            { lat: 60.0, lng: 10.0 },
  'Hallstatt':         { lat: 59.0, lng: 14.0 },  // Sweden/South Norway
  'Tronder':           { lat: 63.5, lng: 10.5 },  // Trøndelag, Norway
  'FennoNordid':       { lat: 62.0, lng: 25.0 },  // Finland
  'AistoNordid':       { lat: 59.0, lng: 24.0 },  // Estonia/Finland coast
  'ProtoNordid':       { lat: 54.0, lng: 28.0 },  // Belarus/Baltic
  'Borreby':           { lat: 55.5, lng: 12.0 },  // Denmark
  'Dalofaelid':        { lat: 62.0, lng: 15.0 },  // Dalarna, Sweden
  'AngloSaxon':        { lat: 52.5, lng: -1.0 },  // England
  'PaleoAtlantid':     { lat: 53.0, lng: -8.0 },  // Ireland/W. Europe
  'NorthAtlantid':     { lat: 57.0, lng: -5.0 },  // Scotland/N. Atlantic
  'Mediterranid':      { lat: 40.0, lng: 8.0 },   // Mediterranean
  'GracileMediterranid': { lat: 38.0, lng: 23.0 }, // Greece/Aegean
  'TransMediterranid': { lat: 35.0, lng: 10.0 },  // Tunisia/Libya coast
  'Eurafricanid':      { lat: 36.0, lng: -5.0 },  // Iberia/NW Africa
  'PaleoSardinian':    { lat: 40.0, lng: 9.0 },   // Sardinia
  'Litorid':           { lat: 44.0, lng: 14.0 },  // Adriatic coast
  'Pontid':            { lat: 42.0, lng: 35.0 },  // Black Sea coast
  'NorthPontid':       { lat: 51.0, lng: 30.0 },  // Poland to Russia
  'Alpinid':           { lat: 47.0, lng: 8.0 },   // Alps
  'WestAlpinid':       { lat: 46.0, lng: 3.0 },   // France mountains
  'EastAlpinid':       { lat: 39.5, lng: 35.0 },  // Anatolia
  'Baskid':            { lat: 43.0, lng: -1.5 },  // Basque Country
  'Alfoeld':           { lat: 47.0, lng: 20.0 },  // Hungarian Plain
  'Dinarid':           { lat: 44.0, lng: 17.5 },  // Balkans
  'Norid':             { lat: 47.5, lng: 13.0 },  // Austrian Alps
  'EastEuropid':       { lat: 55.0, lng: 40.0 },  // Russia
  'Carpathid':         { lat: 48.0, lng: 24.0 },  // Carpathians
  'NeoDanubian':       { lat: 48.5, lng: 18.0 },  // Slovakia/Pannonia
  'PreSlavic':         { lat: 52.0, lng: 20.0 },  // Poland
  'Ladogan':           { lat: 61.0, lng: 30.0 },  // Lake Ladoga
  'Savolaxid':         { lat: 62.5, lng: 28.0 },  // Eastern Finland
  'Tavastid':          { lat: 61.0, lng: 24.5 },  // Häme, Finland
  'Volgid':            { lat: 56.0, lng: 49.0 },  // Volga region
  'ScandoLappid':      { lat: 68.0, lng: 20.0 },  // Sami territory
  'NorthLappid':       { lat: 69.0, lng: 27.0 },  // Northern Lapland

  // ── CAUCASUS / NEAR EAST ────────────────
  'Armenid':           { lat: 40.0, lng: 44.0 },  // Armenia
  'Mtebid':            { lat: 42.5, lng: 44.0 },  // Caucasus mountains
  'Assyroid':          { lat: 37.0, lng: 43.0 },  // Assyria/N. Iraq
  'Anatolid':          { lat: 39.0, lng: 32.0 },  // Central Anatolia
  'Orientalid':        { lat: 33.0, lng: 44.0 },  // Fertile Crescent
  'Arabid':            { lat: 23.5, lng: 45.0 },  // Arabian Peninsula
  'Iranid':            { lat: 33.0, lng: 53.0 },  // Iran
  'ProtoIranid':       { lat: 35.0, lng: 48.0 },  // W. Iran
  'IndoIranid':        { lat: 34.0, lng: 69.0 },  // Afghanistan
  'Libyid':            { lat: 32.0, lng: 13.0 },  // Libya
  'Egyptid':           { lat: 27.0, lng: 31.0 },  // Egypt
  'Moorish':           { lat: 34.0, lng: -5.0 },  // Morocco

  // ── NORTH AFRICA / SAHARA ──────────────
  'Berberid':          { lat: 34.0, lng: 2.0 },   // Algeria/Morocco
  'AfricanAlpinoid':   { lat: 36.0, lng: 4.0 },   // Atlas Mountains
  'Canarid':           { lat: 28.0, lng: -16.0 },  // Canary Islands
  'Fezzanid':          { lat: 27.0, lng: 14.0 },  // Fezzan, Libya
  'PaleoSaharid':      { lat: 22.0, lng: 10.0 },  // Sahara
  'Siwa':              { lat: 29.2, lng: 25.5 },  // Siwa Oasis, Egypt

  // ── WEST AFRICA ─────────────────────────
  'Sudanid':           { lat: 12.0, lng: 2.0 },   // Sudan belt
  'EastSudanid':       { lat: 12.0, lng: 30.0 },  // Kordofan, Sudan
  'EquatorialSudanid': { lat: 5.0, lng: 20.0 },   // Central African Republic
  'GuineoCamerunian':  { lat: 5.5, lng: -3.0 },   // Côte d'Ivoire/Ghana
  'Bobo':              { lat: 11.0, lng: -4.0 },   // Burkina Faso
  'Casamance':         { lat: 12.5, lng: -15.5 },  // Casamance, Senegal
  'Senegalid':         { lat: 14.5, lng: -14.0 },  // Senegal
  'SudanoGuinesid':    { lat: 8.0, lng: 2.0 },    // Togo/Benin/Nigeria
  'Guinesid':          { lat: 7.0, lng: -10.0 },  // Guinea

  // ── EAST AFRICA / HORN ──────────────────
  'Ethiopid':          { lat: 9.0, lng: 40.0 },   // Ethiopia
  'CentralEthiopid':   { lat: 8.5, lng: 39.0 },   // Central Ethiopian highlands
  'EastEthiopid':      { lat: 8.0, lng: 45.0 },   // Somalia/E. Ethiopia
  'NorthEthiopid':     { lat: 17.0, lng: 38.0 },  // Eritrea/Red Sea coast
  'SouthEthiopid':     { lat: -2.0, lng: 30.0 },  // Rwanda/Burundi
  'SaharanEthiopid':   { lat: 14.0, lng: 10.0 },  // Chad/Niger
  'ProtoEthiopid':     { lat: 16.0, lng: 38.0 },  // Eritrea lowlands
  'Omotic':            { lat: 6.0, lng: 37.0 },   // SW Ethiopia
  'Danakil':           { lat: 12.0, lng: 42.0 },  // Danakil depression
  'Nilotid':           { lat: 7.0, lng: 31.0 },   // South Sudan
  'Dinkaid':           { lat: 8.0, lng: 28.0 },   // Dinka, S. Sudan
  'SouthNilotid':      { lat: 1.0, lng: 32.0 },   // Uganda/W. Kenya
  'NiloHamitic':       { lat: 3.0, lng: 35.0 },   // N. Kenya
  'PreNilotid':        { lat: 6.0, lng: 33.0 },   // Nuer territory
  'Shillukid':         { lat: 10.0, lng: 32.0 },  // Shilluk, S. Sudan
  'Shari':             { lat: 11.0, lng: 17.0 },  // Chad (Chari river)
  'MiddleNile':        { lat: 18.0, lng: 33.0 },  // Middle Nile, Sudan
  'MunduMangbeto':     { lat: 3.5, lng: 28.0 },   // NE DR Congo
  'Maasai':            { lat: 1.5, lng: 36.0 },   // Kenya/Tanzania
  'Sandawe':           { lat: -5.0, lng: 35.5 },  // Dodoma, Tanzania

  // ── CENTRAL / SOUTHERN AFRICA ───────────
  'Bantuid':           { lat: -5.0, lng: 25.0 },  // Central Africa
  'NorthBantuid':      { lat: -1.0, lng: 37.0 },  // Kenya/Tanzania
  'SouthBantuid':      { lat: -30.0, lng: 30.0 }, // KwaZulu-Natal
  'CentralBantuid':    { lat: -10.0, lng: 28.0 }, // Zambia
  'ChopiTswana':       { lat: -24.0, lng: 31.0 }, // Mozambique border
  'FenguPondo':        { lat: -31.5, lng: 29.0 }, // Eastern Cape
  'Xhosaid':           { lat: -32.0, lng: 27.0 }, // Xhosa territory
  'Congolid':          { lat: 0.0, lng: 22.0 },   // Congo Basin
  'Congolesid':        { lat: -4.0, lng: 15.5 },  // Congo-Brazzaville
  'Bukaid':            { lat: -3.0, lng: 29.5 },  // Great Lakes
  'Katangid':          { lat: -11.0, lng: 27.0 }, // Katanga
  'Katanga':           { lat: -11.5, lng: 28.0 }, // Katanga province
  'Bambutid':          { lat: 1.5, lng: 28.0 },   // Ituri Forest
  'EastBambutid':      { lat: 1.0, lng: 29.5 },   // E. Congo pygmies
  'TwaCwa':            { lat: -2.0, lng: 29.0 },  // Rwanda/Burundi Twa

  // ── KHOISAN ─────────────────────────────
  'Khoid':             { lat: -28.0, lng: 20.0 },  // Cape/Namibia
  'Sanid':             { lat: -22.0, lng: 21.0 },  // Kalahari
  'Kalaharid':         { lat: -21.0, lng: 23.5 },  // Kalahari
  'Karroid':           { lat: -32.0, lng: 20.0 },  // Karoo, S. Africa
  'Strandlooper':      { lat: -33.0, lng: 18.5 },  // Cape Coast
  'MountainDama':      { lat: -22.0, lng: 16.0 },  // Namibia mountains
  'Hadza':             { lat: -3.5, lng: 35.0 },   // Lake Eyasi, Tanzania

  // ── SOUTH ASIA ──────────────────────────
  'Indid':             { lat: 23.0, lng: 77.0 },  // India
  'GracileIndid':      { lat: 25.0, lng: 82.0 },  // Ganges plain
  'NorthIndid':        { lat: 30.0, lng: 76.0 },  // Punjab/N. India
  'MountainIndid':     { lat: 34.0, lng: 74.0 },  // Kashmir
  'IndoNordic':        { lat: 31.0, lng: 74.0 },  // NW India/Pakistan
  'IndoBrachid':       { lat: 27.0, lng: 84.0 },  // Nepal/Bihar
  'IndoMelanid':       { lat: 18.0, lng: 79.0 },  // Central India
  'Kolid':             { lat: 23.5, lng: 85.0 },  // Jharkhand
  'NorthGondid':       { lat: 23.0, lng: 81.0 },  // Madhya Pradesh
  'SouthGondid':       { lat: 19.0, lng: 79.0 },  // Maharashtra
  'Karnatid':          { lat: 14.0, lng: 76.0 },  // Karnataka
  'Keralid':           { lat: 10.0, lng: 76.5 },  // Kerala
  'Malabarese':        { lat: 11.5, lng: 75.5 },  // Malabar coast
  'Sinhalesid':        { lat: 7.5, lng: 80.5 },   // Sri Lanka
  'Vedda':             { lat: 7.0, lng: 81.0 },   // Sri Lanka Vedda
  'Toda':              { lat: 11.5, lng: 76.5 },  // Nilgiri Hills
  'ArabianVeddoid':    { lat: 17.0, lng: 54.0 },  // Oman/Yemen

  // ── CENTRAL ASIA ────────────────────────
  'Turanid':           { lat: 45.0, lng: 63.0 },  // Kazakh steppe
  'AndronovoTuranid':  { lat: 50.0, lng: 68.0 },  // N. Kazakhstan
  'Aralid':            { lat: 42.0, lng: 60.0 },  // Aral Sea region
  'MountainAralid':    { lat: 39.0, lng: 68.0 },  // Tajikistan
  'Transcaspian':      { lat: 40.0, lng: 58.0 },  // Turkmenistan
  'CentralPamirid':    { lat: 38.5, lng: 72.0 },  // Pamir Mountains
  'EastPamirid':       { lat: 38.0, lng: 75.0 },  // E. Pamir
  'PlainsPamirid':     { lat: 39.0, lng: 66.0 },  // Uzbekistan
  'CentralBrachid':    { lat: 35.0, lng: 66.0 },  // Afghanistan
  'EastBrachid':       { lat: 34.0, lng: 72.0 },  // Pakistan/Afghanistan
  'Uralid':            { lat: 57.0, lng: 60.0 },  // Ural region

  // ── NORTH / NORTHEAST ASIA ─────────────
  'Tungid':            { lat: 48.0, lng: 108.0 }, // Mongolia
  'Gobid':             { lat: 44.0, lng: 105.0 }, // Gobi Desert
  'Baykal':            { lat: 53.0, lng: 108.0 }, // Lake Baikal
  'ManchuKorean':      { lat: 40.0, lng: 126.0 }, // Manchuria/Korea
  'Choshiu':           { lat: 34.0, lng: 131.5 }, // SW Japan
  'Chikuzen':          { lat: 33.5, lng: 130.5 }, // N. Kyushu
  'Aoshima':           { lat: 31.8, lng: 131.5 }, // S. Kyushu
  'Ishikawa':          { lat: 36.5, lng: 136.5 }, // Ishikawa, Japan
  'Satsuma':           { lat: 31.5, lng: 130.5 }, // Kagoshima
  'Samoyedic':         { lat: 66.0, lng: 76.0 },  // W. Siberia (Nenets)
  'Chukchid':          { lat: 66.0, lng: 170.0 }, // Chukotka
  'Ainuid':            { lat: 43.0, lng: 142.0 }, // Hokkaido
  'AmurSakhalin':      { lat: 50.0, lng: 140.0 }, // Sakhalin/Amur

  // ── EAST ASIA ───────────────────────────
  'Sinid':             { lat: 34.0, lng: 108.0 }, // N. China
  'Huanghoid':         { lat: 36.0, lng: 114.0 }, // Yellow River
  'Changkiangid':      { lat: 30.0, lng: 114.0 }, // Yangtze River
  'Chukiangid':        { lat: 24.0, lng: 110.0 }, // South China
  'Kham':              { lat: 31.0, lng: 99.0 },  // E. Tibet
  'Tibetid':           { lat: 30.0, lng: 91.0 },  // Tibet
  'Kachinid':          { lat: 25.0, lng: 97.0 },  // Kachin, Myanmar

  // ── SOUTHEAST ASIA ──────────────────────
  'Palaungid':         { lat: 20.0, lng: 100.0 }, // N. SE Asia
  'EastPalaungid':     { lat: 18.0, lng: 103.0 }, // Laos
  'SouthPalaungid':    { lat: 5.0, lng: 102.0 },  // Malay Peninsula
  'Shanid':            { lat: 21.0, lng: 97.0 },  // Shan State, Myanmar
  'EastShanid':        { lat: 18.0, lng: 102.0 }, // Thailand/Laos
  'Annamid':           { lat: 16.0, lng: 108.0 }, // Vietnam
  'Tonkinesid':        { lat: 21.0, lng: 106.0 }, // Tonkin, N. Vietnam
  'Khmerid':           { lat: 13.0, lng: 105.0 }, // Cambodia
  'Dayakid':           { lat: 1.0, lng: 110.0 },  // Borneo
  'ProtoMalayid':      { lat: 2.0, lng: 103.0 },  // Malay Peninsula
  'DeuteroMalayid':    { lat: 0.0, lng: 108.0 },  // Indonesia/Malaysia
  'Senoid':            { lat: 4.5, lng: 101.5 },  // Orang Asli, Malaysia

  // ── OCEANIA ─────────────────────────────
  'Melanesid':         { lat: -6.0, lng: 147.0 }, // New Guinea
  'InsularMelanesid':  { lat: -8.0, lng: 157.0 }, // Solomon Islands
  'BrachioMelanesid':  { lat: -7.5, lng: 144.0 }, // Papua Gulf
  'MountainMelanesid': { lat: -5.5, lng: 139.0 }, // New Guinea Highlands
  'NeoMelanesid':      { lat: -7.5, lng: 146.0 }, // S. New Guinea
  'PaleoMelanesid':    { lat: -6.5, lng: 155.0 }, // Bougainville
  'Australid':         { lat: -24.0, lng: 133.0 }, // Australia
  'NorthAustralid':    { lat: -14.0, lng: 132.0 }, // Arnhem Land
  'SouthAustralid':    { lat: -35.0, lng: 140.0 }, // Murray Basin
  'DesertAustralid':   { lat: -24.0, lng: 130.0 }, // Central Desert
  'Barrinean':         { lat: -17.0, lng: 146.0 }, // N. Queensland
  'Tasmanid':          { lat: -42.0, lng: 146.0 }, // Tasmania
  'Fijid':             { lat: -18.0, lng: 178.0 }, // Fiji
  'Micronesid':        { lat: 7.0, lng: 150.0 },  // Micronesia
  'RobustPolynesid':   { lat: -14.0, lng: -170.0 }, // W. Polynesia/Samoa
  'SouthPolynesid':    { lat: -20.0, lng: -150.0 }, // Tahiti/E. Polynesia
  'Nesiotid':          { lat: -8.0, lng: 160.0 }, // Melanesia outer islands
  'Tapirid':           { lat: -5.0, lng: 150.0 }, // New Britain

  // ── ARCTIC ──────────────────────────────
  'Eskimid':           { lat: 68.0, lng: -50.0 }, // Greenland/Arctic
  'Inuid':             { lat: 64.0, lng: -70.0 }, // Baffin Island
  'BeringSea':         { lat: 63.0, lng: -168.0 }, // Bering Sea/Yupik

  // ── AMERICAS ────────────────────────────
  'Silvid':            { lat: 42.0, lng: -80.0 }, // E. North America
  'Athabaskid':        { lat: 60.0, lng: -130.0 }, // Subarctic Canada
  'Appalacid':         { lat: 36.0, lng: -82.0 },  // Appalachians
  'Planid':            { lat: 42.0, lng: -102.0 }, // Great Plains
  'Californid':        { lat: 37.0, lng: -120.0 }, // California
  'Arizonid':          { lat: 34.0, lng: -110.0 }, // Arizona
  'Sonorid':           { lat: 30.0, lng: -112.0 }, // Sonora Desert
  'Centralid':         { lat: 17.0, lng: -92.0 },  // Mesoamerica
  'Isthmid':           { lat: 9.0, lng: -79.0 },   // Panama
  'Maya':              { lat: 17.0, lng: -90.0 },   // Maya region
  'Mexicid':           { lat: 20.0, lng: -100.0 }, // Central Mexico
  'Pueblid':           { lat: 35.0, lng: -107.0 }, // Pueblo region
  'Pacifid':           { lat: -8.0, lng: -79.0 },  // Pacific S. America
  'CaliforniaPacifid': { lat: 34.0, lng: -118.0 }, // S. California coast
  'Andid':             { lat: -13.0, lng: -74.0 }, // Central Andes
  'NorthAndid':        { lat: 5.0, lng: -75.0 },   // Colombian Andes
  'SouthAndid':        { lat: -33.0, lng: -70.0 }, // S. Andes/Chile
  'NorthAmazonid':     { lat: 0.0, lng: -65.0 },   // N. Amazon
  'SouthAmazonid':     { lat: -10.0, lng: -55.0 }, // S. Amazon
  'Pampid':            { lat: -36.0, lng: -62.0 }, // Pampas
  'Patagonid':         { lat: -45.0, lng: -70.0 }, // Patagonia
  'SouthFuegid':       { lat: -54.0, lng: -69.0 }, // Tierra del Fuego
  'Huarpid':           { lat: -32.0, lng: -67.0 }, // W. Argentina
  'LagoaSanta':        { lat: -20.0, lng: -44.0 }, // Lagoa Santa, Brazil
  'Bororo':            { lat: -16.0, lng: -55.0 }, // Mato Grosso, Brazil
  'ChocoMotilon':      { lat: 7.0, lng: -77.0 },   // NW Colombia
  'Botocudo':          { lat: -18.0, lng: -42.0 }, // E. Brazil
  'Tapirid':           { lat: -5.0, lng: 150.0 },  // Actually Melanesia

  // ── NEGRITO / ANDAMAN ───────────────────
  'Negritid':          { lat: 13.0, lng: 121.0 },  // Philippines
  'Aetid':             { lat: 15.5, lng: 120.5 },  // Philippines (Luzon)
  'Semangid':          { lat: 5.0, lng: 101.0 },   // Malay Peninsula
  'JahaiSemangid':     { lat: 5.5, lng: 101.5 },   // N. Malay Peninsula
  'SouthAndamanid':    { lat: 11.5, lng: 92.7 },   // Little Andaman
  'NorthAndamanid':    { lat: 12.5, lng: 93.0 },   // Great Andaman
  'Toalid':            { lat: -3.0, lng: 120.0 },  // Sulawesi

  // ── MADAGASCAR ──────────────────────────
  'Malagasid':         { lat: -19.0, lng: 47.0 },  // Madagascar
  'Malid':             { lat: -14.0, lng: 48.0 },  // N. Madagascar

  // ── ADDITIONAL ENTRIES ──────────────────
  'Gorid':             { lat: 42.3, lng: 44.5 },   // Georgia (Gori)
  'Strandid':          { lat: -33.5, lng: 19.0 },  // S. African coast
  'Targid':            { lat: 25.0, lng: 0.0 },    // Tuareg, Sahara
  'WestAmazonid':      { lat: -5.0, lng: -72.0 },  // W. Amazon
  'WestBambutid':      { lat: 2.0, lng: 14.0 },    // W. Congo pygmies
  'WestCongolesid':    { lat: -5.0, lng: 13.0 },   // W. Congo coast
  'WestEthiopid':      { lat: 8.0, lng: 35.0 },    // W. Ethiopia
  'Yakonin':           { lat: 34.5, lng: 133.0 },  // Shikoku/Honshu, Japan
  'Yemenid':           { lat: 15.0, lng: 44.0 },   // Yemen
  'Yenisey':           { lat: 58.0, lng: 92.0 },   // Yenisey River, Siberia
};

// Parse scraped data
const phenotypes = [];
const processedIds = new Set();

lines.forEach(line => {
  const parts = line.split('|||');
  if (parts.length < 2) return;

  const id = parts[0].trim();
  const rawText = parts[1].trim();

  // Extract name (before "Group:")
  const nameMatch = rawText.match(/^\s*(.+?)\s+Group:/);
  const name = nameMatch ? nameMatch[1].trim() : id.replace(/([A-Z])/g, ' $1').trim();

  // Extract group
  const groupMatch = rawText.match(/Group:\s*(.+?)\s+Description:/);
  const group = groupMatch ? groupMatch[1].trim() : '';

  // Extract description
  const descMatch = rawText.match(/Description:\s*(.+?)(?:Physical Traits:|$)/s);
  let desc = descMatch ? descMatch[1].trim() : '';
  desc = desc.substring(0, 250).replace(/\s+/g, ' ');

  // Get coordinates
  const coords = COORDS[id];
  if (!coords) {
    console.error(`MISSING COORDS: ${id} (${name})`);
    return;
  }

  processedIds.add(id);

  phenotypes.push({
    id: id,
    name: name,
    group: group,
    lat: coords.lat,
    lng: coords.lng,
    desc: desc
  });
});

// Check for any missing
const allIds = fs.readFileSync('phenotype_ids.txt', 'utf8').trim().split('\n');
const missing = allIds.filter(id => !processedIds.has(id.trim()));
if (missing.length > 0) {
  console.error(`\nMissing phenotypes (${missing.length}): ${missing.join(', ')}`);
}

// Write final dataset
fs.writeFileSync('phenotypes.js',
  'const PHENOTYPES = ' + JSON.stringify(phenotypes, null, 2) + ';\n'
);

console.log(`\nGenerated ${phenotypes.length} phenotypes with coordinates`);
