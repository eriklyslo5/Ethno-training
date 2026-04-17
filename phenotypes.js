const PHENOTYPES = [
  {
    "id": "Aetid",
    "name": "Aetid",
    "group": "Negritid",
    "lat": 15.5,
    "lng": 120.5,
    "desc": "Ancient type found in the mountains of the Philippine islands of Luzon, Mindandao and Palawan. Probably developed during the Paleolithic. Similar to Semangid. Rare today, usually mixed. Only a few thousand typical individuals remain. Dominant in the "
  },
  {
    "id": "AfricanAlpinoid",
    "name": "African Alpinoid",
    "group": "Alpinid",
    "lat": 36,
    "lng": 4,
    "desc": "The most brachycephalic Maghrebi type, shows close morphological similarities to Alpines and in a lower degree to Armenids and Berberids. Probably not directly related to other Alpines, but the result of a similar adaption. Common in the Atlas Mounta"
  },
  {
    "id": "AistoNordid",
    "name": "Aisto Nordid",
    "group": "Nordid",
    "lat": 59,
    "lng": 24,
    "desc": "East Nordid subvariety, common in coastal regions of Baltic countries. One of the last strongholds of East Nordids that are only a minority type in most of their distribution today. Played a role in the formation of Tavastid and Trønder. Purest in We"
  },
  {
    "id": "Alfoeld",
    "name": "Alföld",
    "group": "Turanid",
    "lat": 47,
    "lng": 20,
    "desc": "Western Turanid subtype, named after the Alföld (Great Hungarian Plain). It developed when Huns and Magyars entered the area during the early Middle Ages and caused a blending of several regional types. Most common in Hungary, especially the Alföld p"
  },
  {
    "id": "AmurSakhalin",
    "name": "Amur-Sakhalin",
    "group": "Tungid",
    "lat": 50,
    "lng": 140,
    "desc": "Distinctive Tungid variety, probably split from neighbouring types at the end of the Paleolithic. Native to parts of the Sakhalin-Amur region. Typified by Nivkhs (Gilyaks), mixed in Ulchs, and rare in Orochs and Aleuts. Nivkh culture suffered heavily"
  },
  {
    "id": "Anatolid",
    "name": "Anatolid",
    "group": "Armenoid",
    "lat": 39,
    "lng": 32,
    "desc": "Armenid subtype of Anatolia with Dinaroid features. The core population lives in West Anatolia. Probably the result of Armenid influx into a Mediterranid population. Anatolids are the dominant element in Turkey today, but may also be found among Alaw"
  },
  {
    "id": "AndronovoTuranid",
    "name": "Andronovo-Turanid",
    "group": "Turanid",
    "lat": 50,
    "lng": 68,
    "desc": "Northern Turanid variant, has probably been more widespread prior to the Tungid expansion of Hunnic, Avar, and Chasar tribes. Influenced by the old Andronovo type, possibly even early Nordids and Pontids. May be regarded as North Pamirid. Probably co"
  },
  {
    "id": "AngloSaxon",
    "name": "Anglo-Saxon",
    "group": "Nordid",
    "lat": 52.5,
    "lng": -1,
    "desc": "North-West European type, similar to Trønder, but with a stronger Hallstatt component. Was typified by the ancient Germanic tribes of Angles, Saxons, and Jutes who conquered Britain from the 5th century on. Most common today in East England, but also"
  },
  {
    "id": "Annamid",
    "name": "Annamid",
    "group": "Sinid, South Mongolid",
    "lat": 16,
    "lng": 108,
    "desc": "South Sinid subvariety with less pronounced Sinid features that often tend to be very gracile. Typical for the old province of Annam in Vietnam. Developed through continuous Sinid expansions to the South and assimilation of indigenous South Mongolid "
  },
  {
    "id": "Aoshima",
    "name": "Aoshima",
    "group": "Ainuid",
    "lat": 31.8,
    "lng": 131.5,
    "desc": "Ainuid proper, the most ancient type of Japan. Resembles Paleolithic Japanese populations like the Jomon people. Probably a relict of an old group once widespread in Asia. Survived in the Ainu of Hokkaido until the 20th century. Today almost extinct "
  },
  {
    "id": "Appalacid",
    "name": "Appalacid",
    "group": "Silvid",
    "lat": 36,
    "lng": -82,
    "desc": "Silvid subtype, native to the North American Atlantic forests, from the Great Lakes to the Appalachians. Shows some Europid traits, not only phenotypically, but also genetically. This could be due to early colonial admixture, or Proto Europid migrati"
  },
  {
    "id": "ArabianVeddoid",
    "name": "Arabian Veddoid",
    "group": "Veddid",
    "lat": 17,
    "lng": 54,
    "desc": "Ancient Vedda-like type of the Arabian Peninsula and South Iran, often heavily mixed. Found in the Mehri of South Oman, around Hadramaut in Yemen, Iranians of Susa, Makran, and Socotrans. Sometimes in Mesopotamia and even Nubia. This type could be li"
  },
  {
    "id": "Arabid",
    "name": "Arabid",
    "group": "Orientalid",
    "lat": 23.5,
    "lng": 45,
    "desc": "Orientalid proper, the most common type of the Arabian Peninsula, often found with Semitic languages. Originally restricted to Arabia, ancient migrations and the Islamic expansion brought it to North Africa, where it is heavily mixed (e.g. Berber Ara"
  },
  {
    "id": "Aralid",
    "name": "Aralid",
    "group": "Tungid, Turanid",
    "lat": 42,
    "lng": 60,
    "desc": "West Tungid variety of the vast Central Asian steppes, influenced by Turanid. Developed in ancient times when Hunnic, Avar, and Chasar expansions replaced older Turanid, Mediterranid, and Nordid populations. Today most common in Kazakhs, but also in "
  },
  {
    "id": "Arizonid",
    "name": "Arizonid",
    "group": "Centralid, Pacifid, Silvid",
    "lat": 34,
    "lng": -110,
    "desc": "Relatively recent North American contact type. Started to develop as Athabaskan speakers of Canada migrated South during late Pre-Columbian periods, and became more numerous when Europeans reintroduced the horse to America, which facilitated bison hu"
  },
  {
    "id": "Armenid",
    "name": "Armenid",
    "group": "Armenoid",
    "lat": 40,
    "lng": 44,
    "desc": "Widespread type, found in its most specialised form in the mountains of Asia Minor. Associated with the ancient Cypriots and the Hittite Kingdom. Common in Armenians, Turks of mountain regions (e.g. Taurus), Lebanese, and Mazanderani. Significant in "
  },
  {
    "id": "Assyroid",
    "name": "Assyroid",
    "group": "Orientalid, Armenoid",
    "lat": 37,
    "lng": 43,
    "desc": "Semitic type that unites Armenoid with Arabid features. Historically important in the ancient Hittite Kingdom and the Assyrian civilisation. Diluted today, purest in Isfahan Jews, but also Ashkenazi Jews and some Syrians and Iranians. Medieval migrat"
  },
  {
    "id": "Athabaskid",
    "name": "Athabaskid",
    "group": "Eskimid, Pacifid, Sibirid",
    "lat": 60,
    "lng": -130,
    "desc": "Northern Pacifid variety, heavily influenced by Sibirid and Eskimid admixture. Developed by relatively late migrations from Asia some millennia ago that swept into Proto Pacifid populations. Typical from Alaska to the Canadian states of Yukon, the No"
  },
  {
    "id": "Barrinean",
    "name": "Barrinean",
    "group": "Australid",
    "lat": -17,
    "lng": 146,
    "desc": "Australid subtype of the forest belt associated with the Australian pygmies. Could be the remnant of an ancient Negrito strain that once occupied large parts of Australia, or alternatively the result of a process of reduction. Shows similarities to T"
  },
  {
    "id": "Baskid",
    "name": "Baskid",
    "group": "Alpinid, Dinarid , Mediterranid",
    "lat": 43,
    "lng": -1.5,
    "desc": "Ancient European type associated with the Basques. Found in its purest form in the Pyrénées-Atlantiques region of Southwestern France, although many modern French Basques are West Alpinid. Also present in Northern Spain, where it is rather mixed with"
  },
  {
    "id": "Baykal",
    "name": "Baykal",
    "group": "Tungid",
    "lat": 53,
    "lng": 108,
    "desc": "Northern Tungid variety, native to the vast, sparsely populated Taiga and Tundra regions of East Siberia, adapted to survive in the coldest habitable places on Earth. Named after the Baykal Lake. Typical for Evens, Eastern Evenks, Yukagirs, more mixe"
  },
  {
    "id": "Berberid",
    "name": "Berberid",
    "group": "Mediterranid",
    "lat": 34,
    "lng": 2,
    "desc": "A Proto Atlanto Mediterranean type, originally named after Berbers and the North African Barbary. Associated with Paleolithic types that once migrated from West Asia. Present in modern Berbers like Riffians, Kabyles, Shilha, Chaoui, also other North "
  },
  {
    "id": "BeringSea",
    "name": "Bering Sea",
    "group": "Eskimid",
    "lat": 63,
    "lng": -168,
    "desc": "Western Eskimid variety common in Alaska and along the Bering Strait, esp. St. Lawrence Island. The result of a relatively late migration to America. Eskimids show the most extreme adaptions to Arctic climate in the world. Typified by Alaskan and Sib"
  },
  {
    "id": "Bobo",
    "name": "Bobo",
    "group": "Sudanid",
    "lat": 11,
    "lng": -4,
    "desc": "Sudanid variety with shorter skulls than Sudanids proper, and several other unique features that set it apart from other neighbouring groups. Similar to the Casamance type, but taller and wider-faced. Found in its purest form in Bobo-Fing and Bobo-Dy"
  },
  {
    "id": "Bororo",
    "name": "Bororo",
    "group": "Patagonid",
    "lat": -16,
    "lng": -55,
    "desc": "The northernmost Patagonid variety, often mixed with local Lagid elements, but with a variety of unique features. Native to the savannah and forest landscapes of West Bolivia and the Brazilian state of Mato Grosso. Typified by the Bororo that include"
  },
  {
    "id": "Borreby",
    "name": "Borreby",
    "group": "Alpinid, East Europid , Nordid",
    "lat": 55.5,
    "lng": 12,
    "desc": "Ancient Northern European variety. Named after some of the Neolithic Borreby skulls of Denmark (not all!). Some emphasised resemblance with Cro-Magnons. Similar to Faelid, but shorter-skulled with East Baltid and Alpinid tendencies. Most common in De"
  },
  {
    "id": "Botocudo",
    "name": "Botocudo",
    "group": "Lagid",
    "lat": -18,
    "lng": -42,
    "desc": "Lagid subtype of the Mata Atlântica forests of Brazil, partially mixed with the Fuegid substratum (South Fuegids, Huarpids). Was the dominant type of the Botocudo (Aimoré) people that experienced a dramatic population decline after European colonisat"
  },
  {
    "id": "BrachioMelanesid",
    "name": "Brachio Melanesid",
    "group": "Melanesid",
    "lat": -7.5,
    "lng": 144,
    "desc": "Atypical brachycephalic Melanesid variety native to Melanesia and New Guinea. In its most pronounced form in the Kerewo of Goaribari Island in the Papua Gulf - and the related Kiwai. Another centre lies in the Bismarck Archipelago. Occasionally in Ea"
  },
  {
    "id": "Bukaid",
    "name": "Bukaid",
    "group": "Melanesid",
    "lat": -3,
    "lng": 29.5,
    "desc": "Melanesid variety, associated with the ancient \"Walzenbeil\" culture. Has sometimes been described as bantuiform, although no close genetic relationship to Africans exists. Dominant in the Western Solomons (e.g. Buka, New Georgia) and Bougainville as "
  },
  {
    "id": "CaliforniaPacifid",
    "name": "California Pacifid",
    "group": "Pacifid",
    "lat": 34,
    "lng": -118,
    "desc": "Pacifid variety of California and South Washington. In its purest form in Northern California. Typified by the Yurok as well as Chinook groups. Also in Hupa, Modoc, Klamath, the extinct Chumash, and related people. Mixed with Margid in Maidu, Miwok, "
  },
  {
    "id": "Californid",
    "name": "Californid",
    "group": "Margid",
    "lat": 37,
    "lng": -120,
    "desc": "Ancient Margid subtype, probably arrived with one of the oldest migrations to America. Shares some features with Ainuids. During the last centuries still present along the Californian coast. Has continuously been pushed back by other Native Americans"
  },
  {
    "id": "Canarid",
    "name": "Canarid",
    "group": "Mediterranid , Nordid",
    "lat": 28,
    "lng": -16,
    "desc": "Maghrebi type with similarities to Cromagnids and North Europeans - probably in part a result of convergent evolution of pre-Neolithic North Africans adapting to cloudy mountain regions, and partially of prehistoric migrations from Europe. Historical"
  },
  {
    "id": "Carpathid",
    "name": "Carpathid",
    "group": "Armenoid, Dinarid, East Europid",
    "lat": 48,
    "lng": 24,
    "desc": "European type with Gorid and Dinaro-Armenid elements. Common around the Carpathian Mountains of Central Eastern Europe, e.g. in Huzulis and other Ruthenians, but also right-bank Ukraine. In the high Carpathians outnumbered by Dinarid. Also in Romania"
  },
  {
    "id": "Casamance",
    "name": "Casamance",
    "group": "Congolid, Sudanid",
    "lat": 12.5,
    "lng": -15.5,
    "desc": "Type of the Sudanid-Guinesid contact belt with a variety of unique features that set it apart from other groups. Most common in the lower Casamance region of West Africa in South Senegal, Gambia, and Guinea-Bissau, where it is found in Jola, Jola-Fel"
  },
  {
    "id": "CentralBantuid",
    "name": "Central Bantuid",
    "group": "Bantuid",
    "lat": -10,
    "lng": 28,
    "desc": "Bantuid variety, characterised by elongated features and strong dolichocephaly. Found especially in Mozambique and Zimbabwe, also Malawi, Namibia, Botswana, Zambia, Angola, South Africa, Madagascar, and adjacent countries. Entered the area as a resul"
  },
  {
    "id": "CentralBrachid",
    "name": "Central Brachid",
    "group": "Alpinid, Indid, Turanid",
    "lat": 35,
    "lng": 66,
    "desc": "Indo Brachid variety, with a morphological and geographical position between West and East (Indo) Brachids, but possibly resulting from different, more Alpinoid migrations. Overall taller. Most common in Uttar Pradesh, South Nepal, the Gangetic Plain"
  },
  {
    "id": "CentralEthiopid",
    "name": "Central Ethiopid",
    "group": "Ethiopid",
    "lat": 8.5,
    "lng": 39,
    "desc": "Ethiopid subtype of the central Ethiopian highlands and their surroundings. Found in its purest form among Oromos. Also in other Cushitic speakers like Somalis, Borana, Konso, and Sidama, here often more mixed. Some individuals of Shinasha or Borana "
  },
  {
    "id": "CentralPamirid",
    "name": "Central Pamirid",
    "group": "Turanid",
    "lat": 38.5,
    "lng": 72,
    "desc": "The most typical Pamirid variety, also called Mountain Pamirid. Often considered the most typical Turanid. Most common in highland Tajiks, who not only live in Tajikistan, but also Northern Afghanistan and Eastern Uzbekistan. Shows intermediate featu"
  },
  {
    "id": "Changkiangid",
    "name": "Changkiangid",
    "group": "Sinid",
    "lat": 30,
    "lng": 114,
    "desc": "Sinid subtype, named after the Chang Kiang (Yangtze) river in Central China. Today the most populous human variety in the world. Developed from the river and rice farmers in Central China. Typical in Kiangsu, Chekiang, Anhuei, Kiangsi, Hupei, Hunan, "
  },
  {
    "id": "Chikuzen",
    "name": "Chikuzen",
    "group": "Sinid, South Mongolid, Ainuid",
    "lat": 33.5,
    "lng": 130.5,
    "desc": "Special Japanese type, influenced by ancient regional elements. Named after the old Chikuzen province that is today part of Fukuoka Prefecture. Probably represents a Mongolised variant of the Ainuid robust Tsukumo type of the Neolithic. Most common i"
  },
  {
    "id": "ChocoMotilon",
    "name": "Chocó-Motilon",
    "group": "Amazonid, Lagid",
    "lat": 7,
    "lng": -77,
    "desc": "Special type found in Colombia, Venezuela, as well as Panama. Contains Brasilid elements as well as relicts of one of the first migrations to South America that show similarities to Fuegids. Typical groups include Chocó (Embera, Wounaan), Motilon (Ba"
  },
  {
    "id": "ChopiTswana",
    "name": "Chopi-Tswana",
    "group": "Bantuid",
    "lat": -24,
    "lng": 31,
    "desc": "Bantuid variety, overall similar to Central Bantuid, but with weak Khoisan influence, placing it closer to Xhosaid. Developed as a result of the Bantu expansion when Bantu assimilated some older Khoisanid elements. Found especially in Botswana and So"
  },
  {
    "id": "Choshiu",
    "name": "Choshiu",
    "group": "Sinid",
    "lat": 34,
    "lng": 131.5,
    "desc": "Gracilised variant of the Manchu-Korean type, named after the old Japanese Choshu Domain. Once common in Chinese-Korean aristocracy. Today mainly found in Japan. Can be placed in North Sinid. Probably developed through selection of gracile female fea"
  },
  {
    "id": "Chukchid",
    "name": "Chukchid",
    "group": "Eskimid, Sibirid",
    "lat": 66,
    "lng": 170,
    "desc": "Far Eastern Sibirid variety, influenced by Eskimid, adapted to one of the coldest inhabitable places on Earth: the Arctic tundra of Chukotka and Kamchatka. In its purest form in Koryak and Reindeer Chukchis. Has an Itelmen subvariety that is heavily "
  },
  {
    "id": "Chukiangid",
    "name": "Chukiangid",
    "group": "Sinid",
    "lat": 24,
    "lng": 110,
    "desc": "South Sinid proper subvariety, named after the Chu Khang (Xi) river in South China. Developed in the fishing and gatherer populations of southern subtropical forests of China. Today typical for Cantonese, Guangdong, Fukien, Southern Yunna, mixed in V"
  },
  {
    "id": "Congolesid",
    "name": "Congolesid",
    "group": "Congolid",
    "lat": -4,
    "lng": 15.5,
    "desc": "Widespread type of the Congo forest basin, common from Gabon to DR Congo, Central African Republic, Angola, and Zambia. Typical for Western and Northern Bantu speakers, e.g. Lingala, Tshiluba, Bapoto, Boa, Ngumba, Ba Soko, Mpongwe, Barotse, and relat"
  },
  {
    "id": "Dalofaelid",
    "name": "Dalofaelid",
    "group": "Nordid",
    "lat": 62,
    "lng": 15,
    "desc": "Coarse, Cromagniform Nordid variety of Central and Northern Europe. Named after the Swedish province of Dalarna and the German region of Westphalia. Typical areas include Central Germany, Netherlands, and Southern Sweden / Norway, partially even Sout"
  },
  {
    "id": "Danakil",
    "name": "Danakil",
    "group": "Ethiopid",
    "lat": 12,
    "lng": 42,
    "desc": "Specialised Ethiopid type living in the hottest region of the world: the Danakil depression of Eritrea and Northern Ethiopia, with an annual average temperature of more than 34°C. Most common in the Afar people and southern tribes of the Saho (e.g. H"
  },
  {
    "id": "Dayakid",
    "name": "Dayakid",
    "group": "South Mongolid",
    "lat": 1,
    "lng": 110,
    "desc": "Proto Malayid subtype, the insular counterpart of Palaungids, predates the arrival of Deutero Malayids. Has thus developed a stronger tropical adaption, showing Brasiliform features. Usually found in the interior of larger Sunda and Philippine island"
  },
  {
    "id": "DesertAustralid",
    "name": "Desert Australid",
    "group": "Australid",
    "lat": -24,
    "lng": 130,
    "desc": "Australid desert variety adapted to the arid interior of Australia. Has furnished the general public idea of the typical Australian Aborigine. Basically a North-South Australid blend with a variety of exaggerated features. Typical tribes include Ngaa"
  },
  {
    "id": "DeuteroMalayid",
    "name": "Deutero Malayid",
    "group": "South Mongolid",
    "lat": 0,
    "lng": 108,
    "desc": "The insular counterpart of Shanids. Several components gave rise to this type in mainland Asia: Proto Malayid and Proto Sinid consumed other elements (e.g. Indid) when they migrated South. Over the past millennia the type dispersed across a vast area"
  },
  {
    "id": "Dinarid",
    "name": "Dinarid (proper)",
    "group": "Dinarid",
    "lat": 44,
    "lng": 17.5,
    "desc": "Central European type typical for mountain and forest regions. Presents the counterpart of Alpinids. The name derives from the Dinaric Alps in former Yugoslavia, where the type is commonly found among Serbs, Croats, Montenegrins, Bosniaks, and their "
  },
  {
    "id": "Dinkaid",
    "name": "Dinkaid",
    "group": "Nilotid",
    "lat": 8,
    "lng": 28,
    "desc": "Nilotid proper that shows the most pronounced Nilotic features: the tallest, most long-legged and one of the darkest phenotypes in the world. Typically found in the swamp areas of the Upper Nile in South Sudan. Most common in Dinka and Nuer, but also"
  },
  {
    "id": "EastAlpinid",
    "name": "East Alpinid",
    "group": "Alpinid",
    "lat": 39.5,
    "lng": 35,
    "desc": "West Asian type that is anthropometrically and morphologically very similar to European Alpinids. Most common in the mountain zones of Anatolia, to Northern Syria and Iraq. Also found in West Iran, Caucasus, Palestine, and Lebanon. Extends in lower f"
  },
  {
    "id": "EastBambutid",
    "name": "East Bambutid",
    "group": "Bambutid",
    "lat": 1,
    "lng": 29.5,
    "desc": "Bambutid proper: shortest pygmy type in the world with an extreme rainforest adaption that has evolved since the Middle Paleolithic. Historically more widespread, still found in the Ituri forest of DR Congo, among Mbuti, Asua, Kango, and Efe. Loss of"
  },
  {
    "id": "EastBrachid",
    "name": "East Brachid",
    "group": "Indid, South Mongolid",
    "lat": 34,
    "lng": 72,
    "desc": "Relatively recent contact type intermediate between Indids and South Mongolids. Widespread, reaching from Western Himalaya / Nepal to Bhutan to the Bengals and Burma. Not stabilised yet: individuals of East Brachid families may tend towards Indid as "
  },
  {
    "id": "EastEthiopid",
    "name": "East Ethiopid",
    "group": "Ethiopid",
    "lat": 8,
    "lng": 45,
    "desc": "Ethiopid proper, showing the most pronounced Ethiopid characters of all. Common around the Horn of Africa, in its purest form in the inland areas of Somalia and Eastern Ethiopia. Typical groups include Hawiye, Darod, Dir, but also common in Tigray-Ti"
  },
  {
    "id": "EastPalaungid",
    "name": "East Palaungid",
    "group": "South Mongolid",
    "lat": 18,
    "lng": 103,
    "desc": "Eastern Palaungid variety, found in the hills of South China. Shows stronger Sinoid tendencies. Common along the China-Myanmar /-Vietnam border region and from South Yunnan far into Guangdong, Guizhou, and Sichuan. More frequent on hills and mountain"
  },
  {
    "id": "EastPamirid",
    "name": "East Pamirid",
    "group": "Turanid",
    "lat": 38,
    "lng": 75,
    "desc": "The most Europoid Pamirid subtype. Most common in Pamiri speakers of the Pamir Mountains in Eastern Tajikistan and Northern Afghanistan, especially in the areas of Rushan, Shugan, and Vakhan. Closer to Armenoid than other Turanids. Represents a relic"
  },
  {
    "id": "EastShanid",
    "name": "East Shanid",
    "group": "South Mongolid",
    "lat": 18,
    "lng": 102,
    "desc": "Eastern variety of Shanid, weakly influenced by Veddid. Typical for the plains and river valleys of Indochina, especially from North Thailand to Laos. Probably migrated South from China in historic times, soon outnumbering older types. In recent cent"
  },
  {
    "id": "EastSudanid",
    "name": "East Sudanid",
    "group": "Sudanid",
    "lat": 12,
    "lng": 30,
    "desc": "Isolated Sudanid variety of the Nuba mountains in Kurdufan / Sudan, native to the region at least since the Neolithic. Has resisted historic invasions of neighbouring types over a long time. However, even in isolated villages, Nilotid, Congolid, and "
  },
  {
    "id": "Egyptid",
    "name": "Egyptid",
    "group": "Mediterranid , Orientalid",
    "lat": 27,
    "lng": 31,
    "desc": "Libyid variety, typical for the Nile Valley of Egypt. May result from ancient South/West Asian migrations that mixed with native Berberids. In its purest form found in Egyptian Copts. In lower frequencies in Muslims of Egypt, North Sudanese, and Liby"
  },
  {
    "id": "EquatorialSudanid",
    "name": "Equatorial Sudanid",
    "group": "Congolid, Sudanid",
    "lat": 5,
    "lng": 20,
    "desc": "Central African variety with Sudanid and Congolid elements, living in the Savanna regions of East Cameroon, Central African Republic, South Sudan, and even Gabon and Uganda. May be found in Azande, Baya, Mundu, Banda, Nzkara, Logo, Keliko, Kresh, Bon"
  },
  {
    "id": "Eurafricanid",
    "name": "Eurafricanid",
    "group": "Mediterranid",
    "lat": 36,
    "lng": -5,
    "desc": "Atlanto Mediterranid proper type. Relatively old, present in early Natufians and European as well as North African megalith builders. Spread across the Mediterranean since the Mesolithic until Antiquity. Today common in Portugal, Eastern Spain (e.g. "
  },
  {
    "id": "FenguPondo",
    "name": "Fengu-Pondo",
    "group": "Bantuid",
    "lat": -31.5,
    "lng": 29,
    "desc": "Bantuid variety, similar to South Bantuid, but with weak Khoisan influence, placing it closer to Xhosaid. Developed as a result of the Bantu expansion when Bantu assimilated some older Khoisanid elements. Found especially in the eastern provinces of "
  },
  {
    "id": "FennoNordid",
    "name": "Fenno Nordid",
    "group": "East Europid , Nordid",
    "lat": 62,
    "lng": 25,
    "desc": "Ancient type of Northeastern Europe, sometimes placed in Nordid, sometimes East Baltid. Associated with Finno-Ugric people, once widespread in Russia. Today a minority element in Eastern Finns, e.g. Mordvins, Komi (esp around Vashka), Mari, Udmurts, "
  },
  {
    "id": "Fezzanid",
    "name": "Fezzanid",
    "group": "Mediterranid , Sudanid",
    "lat": 27,
    "lng": 14,
    "desc": "Saharan type combining ancient elements including Berberid with sub-Saharan elements that often entered the region during the Middle Ages. Common in Fezzanesi of South Libya, the Iravellan caste of Tuaregs, and even Haratins. Today also found in some"
  },
  {
    "id": "Fijid",
    "name": "Fijid",
    "group": "Melanesid, Polynesid",
    "lat": -18,
    "lng": 178,
    "desc": "Polynesid-Melanesid contact type. The dominant type in the population of the Fiji Islands. Both elements have probably mixed in the zone for several millennia. Also found in the Solomons, Vanuatu, East New Guinea, and some other regions of Melanesia "
  },
  {
    "id": "Gobid",
    "name": "Gobid",
    "group": "Tungid",
    "lat": 44,
    "lng": 105,
    "desc": "Tungid variety of the vast Central Asian deserts and steppes, e.g. the Gobi and Southern Siberia. Developed in ancient stock-farming nomads and was found in Huns, Avars, and Mongols, who migrated West and produced Aralids, etc. Today most typical in "
  },
  {
    "id": "Gorid",
    "name": "Gorid",
    "group": "Alpinid",
    "lat": 42.3,
    "lng": 44.5,
    "desc": "East Alpinid variety, named after the Polish word for mountain (Gora). Metrically intermediate between West Alpinid and East Europid. The nucleus of the type lies in Southern Poland, Gorids are also important in Czechs, Slovaks, Serbs, Albanians, Nor"
  },
  {
    "id": "GracileIndid",
    "name": "Gracile Indid",
    "group": "Indid",
    "lat": 25,
    "lng": 82,
    "desc": "The most widespread and frequent Indid subtype, one of the most populous phenotypes in the world. Common along the Ganges river and Deccan, but practically found all over India. Various ancient migrations brought it to Thailand, Arabia, Madagascar, I"
  },
  {
    "id": "GracileMediterranid",
    "name": "Gracile Mediterranid",
    "group": "Mediterranid",
    "lat": 38,
    "lng": 23,
    "desc": "Mediterranid proper, smaller than other Mediterranids: the most gracile type of Europe. Appears first in Mesolithic groups of Palestine (Natufians). Common in Iberia, Southern Italy, Mediterranean islands, Western France, Southern Greece, Northern Tu"
  },
  {
    "id": "GuineoCamerunian",
    "name": "Guineo Camerunian",
    "group": "Congolid",
    "lat": 5.5,
    "lng": -3,
    "desc": "West African type, the shorter-skulled counterpart of Guinesids. May constitute the transition to Congolesids. Common in forest regions of Côte d'Ivoire, Benin, Liberia, Ghana, Togo, Nigeria, and Western Cameroon. Sporadically in Senegal, the Upper V"
  },
  {
    "id": "Guinesid",
    "name": "Guinesid",
    "group": "Congolid",
    "lat": 7,
    "lng": -10,
    "desc": "West African forest type native to the littoral of the Gulf of Guinea. Extends from Guinea all the way to Cameroon and sporadically even to Northwestern Angola. Typically found in Susu, Konyanke, Krou, Kuranko, Kissi, Guerzé, Kpelle, Yakoba, Temne, B"
  },
  {
    "id": "Hadza",
    "name": "Hadza",
    "group": "Bambutid, Bantuid, Khoid",
    "lat": -3.5,
    "lng": 35,
    "desc": "Ancient type of the Tanzanian Bushmen, living close to Lake Eyasi. Very distinct from any other type in the world and has probably long been isolated. Distant relationships exist to Khoisanids. Basically restricted to the Hadza people, who number no "
  },
  {
    "id": "Hallstatt",
    "name": "Hallstatt",
    "group": "Nordid",
    "lat": 59,
    "lng": 14,
    "desc": "Nordid proper, resembles the Iron Age remains of the Austrian village of Hallstatt. Most common among Swedes and South Norwegians. Frequent in England, Northern Germany, Netherlands, Northern France, Iceland, Northern Poland, along Daugava, Vistula, "
  },
  {
    "id": "Huanghoid",
    "name": "Huanghoid",
    "group": "Sinid",
    "lat": 36,
    "lng": 114,
    "desc": "North Sinid type, named after the Huang Ho (Yellow) river in Northern China. Developed from loess and millet farmers. Usually regarded as the Sinid proper, associated with the Xia dynasty and the beginning of the Chinese empire. Typical in Liaoning, "
  },
  {
    "id": "Huarpid",
    "name": "Huarpid",
    "group": "Lagid",
    "lat": -32,
    "lng": -67,
    "desc": "Northern Fuegid variety that is often considered part of the Lagoid group. Shows Melanesiform features and probably arrived with one of the earliest migrations to America. Native to the Argentinian Cuyo and the Bolivian savannahs. Typified by Huarpe,"
  },
  {
    "id": "IndoBrachid",
    "name": "Indo Brachid",
    "group": "Armenoid, Indid, Turanid",
    "lat": 27,
    "lng": 84,
    "desc": "Indo Brachid proper, relatively recent Indid-Turano-Armenid contact type, probably the result of old Pashto, Saka, and Scythian migrations. Common from Southwestern India to Afghanistan, especially Gujarati, Maharashtra, and Eastern Pakistan. Typical"
  },
  {
    "id": "IndoIranid",
    "name": "Indo Iranid",
    "group": "Indid, Orientalid, Turanid",
    "lat": 34,
    "lng": 69,
    "desc": "Relatively recent contact type with a position intermediate between Indo Brachid and Iranid. Widespread in Pakistan, Iran, and Afghanistan, reaching to Northern India in the East and Turkey in the West. Highest concentrations are found among the Balu"
  },
  {
    "id": "IndoNordic",
    "name": "Indo Nordic",
    "group": "Indid , Nordid",
    "lat": 31,
    "lng": 74,
    "desc": "Type of the Northwestern Himalaya and the Hindu Kush. Connected to Indid, but altered by old unique elements, possibly Proto Nordic that might stem from ancient Aryans. Common in Pathan, Nuristani, occasionally Dards, Brokpa of Ladak, Kashmiri, Pamir"
  },
  {
    "id": "InsularMelanesid",
    "name": "Insular Melanesid",
    "group": "Melanesid",
    "lat": -8,
    "lng": 157,
    "desc": "Melanesid proper, associated with many Austronesian speakers of Melanesia. Similar to Paleo Melanesid, but with softer features. Common in East Papua, New Britain, New Ireland, Admiralty Islands, Eastern Solomon Islands, Nendo, Banks Islands, and Van"
  },
  {
    "id": "Inuid",
    "name": "Inuid",
    "group": "Eskimid",
    "lat": 64,
    "lng": -70,
    "desc": "Eskimid proper type, ranging over the vast, sparsely populated tundra along the icy coasts of Alaska, Nunavut, and Labrador (Canada) to Greenland. Mainly found in Inuit people. The northernmost phenotype in the world, including the North Greenlandic "
  },
  {
    "id": "Iranid",
    "name": "Iranid",
    "group": "Orientalid",
    "lat": 33,
    "lng": 53,
    "desc": "Distinctive type of the Iranian Plateau. One of the main elements in Persians, especially in Southwestern Iran. An important element in Kurds, Talysh, Gilakis, Luris. Extends to Afghanistan and India where it can be found in West Tajik, Darts, Nurist"
  },
  {
    "id": "Ishikawa",
    "name": "Ishikawa",
    "group": "South Mongolid, Ainuid",
    "lat": 36.5,
    "lng": 136.5,
    "desc": "Special Japanese type, influenced by ancient regional elements. Named after the Ishikawa region of Honshu. Probably represents admixed variant of the Ainuid Miyato Island dwarf type of the Neolithic. Most common in the northern middle and northeaster"
  },
  {
    "id": "Isthmid",
    "name": "Isthmid",
    "group": "Centralid",
    "lat": 9,
    "lng": -79,
    "desc": "Centralid subtype, that has partially adapted to the tropical forests of the Isthmus of Panama and the surrounding regions from Colombia to Mexico. Played a role in the ancient Maya civilisation. However, the most typical groups live farther South an"
  },
  {
    "id": "JahaiSemangid",
    "name": "Jahai Semangid",
    "group": "Negritid",
    "lat": 5.5,
    "lng": 101.5,
    "desc": "Semangid variety, a Paleolithic relict of the original Malaysian forest population. Shows more Veddoid/Australoid features and is similar to Tapirid. Very rare with a few hundred individuals remaining. Typified by the Jahai tribe of the Semang, but a"
  },
  {
    "id": "Kachinid",
    "name": "Kachinid",
    "group": "South Mongolid",
    "lat": 25,
    "lng": 97,
    "desc": "Robust Proto Malayid subtype that probably originated in the Tibet/China border region and spread southwards some millennia ago. Named after the northernmost Burmese state Kachin and its inhabitants, where it is common. Also in Karen, across Myanmar,"
  },
  {
    "id": "Kalaharid",
    "name": "Kalaharid",
    "group": "Sanid",
    "lat": -21,
    "lng": 23.5,
    "desc": "Sanid variety, native to the Kalahari. Very ancient and distinct, specialised desert type with many unique features. Typical for the Northern and Central Bushmen, e.g. the !Kung (e.g. Ju/'hoansi), Naro, Khwe, Amkoe, and related people. Has lived in t"
  },
  {
    "id": "Karnatid",
    "name": "Karnatid",
    "group": "Indo Melanid",
    "lat": 14,
    "lng": 76,
    "desc": "South Indian type, found in its purest form in Tamil Nadu and Northern Sri Lanka, called Melanid according to its dark skin tone (melanin). Typical for Tamils, mixed in Periya, sometimes other Indian people. The medieval Chola invasion even brought i"
  },
  {
    "id": "Karroid",
    "name": "Karroid",
    "group": "Sanid",
    "lat": -32,
    "lng": 20,
    "desc": "Sanid variety, named after the Karoo desert. Very ancient and distinct with many unique features. Was dominant in Southern Africa some centuries ago until Bantu and European colonisation almost wiped it out. A few thousand remain among Taa speakers, "
  },
  {
    "id": "Katanga",
    "name": "Katanga",
    "group": "Tungid, Sibirid",
    "lat": -11.5,
    "lng": 28,
    "desc": "Western Tungid variety, influenced by Sibirid, but with several distinctive features differentiating it from both. Named after the Khatanga river. Native to the vast Central Siberian forests East of the Yenisei and along the Tunguska rivers. Frequent"
  },
  {
    "id": "Katangid",
    "name": "Katangid",
    "group": "Bantuid, Khoid",
    "lat": -11,
    "lng": 27,
    "desc": "Very ancient Australiform African type. Probably more widespread during the Paleolithic, only survives as a rare minority element. May still be found in a few individuals in Zambia, Mozambique, DR Congo, Zimbabwe, South Africa, and Botswana. Korana h"
  },
  {
    "id": "Keralid",
    "name": "Keralid",
    "group": "Indid",
    "lat": 10,
    "lng": 76.5,
    "desc": "Indid subtype, with a position intermediate between North Indid and Gracile Indid, mainly found in the plains of Malabar. Typical for Tiyer / Ezhava, Mukkaver, Kammalan, Nairs, and similar medium ranked castes of Kerala. The special features of this "
  },
  {
    "id": "Kham",
    "name": "Kham",
    "group": "Sinid",
    "lat": 31,
    "lng": 99,
    "desc": "Robust Sinid variety, found in its highest concentration in Eastern Tibet, especially in the Kham region in nomads and warrior castes. Could be an older Sinid type, or alternatively just an adaption to the high altitude. Also in South Tibetans, Qingh"
  },
  {
    "id": "Khmerid",
    "name": "Khmerid",
    "group": "Veddid, South Mongolid",
    "lat": 13,
    "lng": 105,
    "desc": "Intermediate type between South Mongolid and Senoid native to Southern Indochina. The type is the result of intermixture followed by cultural brachycephalisation. Typified by the Khmer people of Cambodia. Also in Southern Thailand and the mountains o"
  },
  {
    "id": "Khoid",
    "name": "Khoid",
    "group": "Khoid",
    "lat": -28,
    "lng": 20,
    "desc": "Khoisanid type, similar to Sanid, but with a slightly different morphology. Was more common in farmers and less common in hunter-gatherers compared to Sanids. Native to Namibia and South Africa, especially in Khoikhoi (Hottentots). Most groups like C"
  },
  {
    "id": "Kolid",
    "name": "Kolid",
    "group": "Indo Melanid",
    "lat": 23.5,
    "lng": 85,
    "desc": "North Dravidian type, related to Melanids but with stronger Gondid influence. An important population element in India. Purest in Jharkhand and West Bengal, particularly in Kolarians. Typical in Santhal and Ho, extends west to Rajputana. Transitional"
  },
  {
    "id": "Ladogan",
    "name": "Ladogan",
    "group": "East Europid , Sibirid",
    "lat": 61,
    "lng": 30,
    "desc": "Ancient, mostly Europid type of Northeastern Europe and Western Siberia associated with the ancient Kammkeramik culture. Probably played a role in the formation of modern Uralids and Baltids. Survives in people of the Ural region, especially Khanty, "
  },
  {
    "id": "LagoaSanta",
    "name": "Lagoa Santa",
    "group": "Lagid",
    "lat": -20,
    "lng": -44,
    "desc": "Lagid proper, named after fossil remains of Brazil. Associated with one of the first migration waves to South America. Skulls sometimes Melanesiform. More widespread in prehistoric times. Still common in Jê speakers like Xavante, Xerente, Krahô, Kaya"
  },
  {
    "id": "Libyid",
    "name": "Libyid",
    "group": "Orientalid",
    "lat": 32,
    "lng": 13,
    "desc": "North African steppe type that is usually regarded as part of Orientalid. Although Arab invasions enhanced the Orientalid element in Africa during the 7th and 11th century, this type results from much earlier migrations and was already present in the"
  },
  {
    "id": "Litorid",
    "name": "Litorid",
    "group": "Armenoid, Dinarid, Mediterranid",
    "lat": 44,
    "lng": 14,
    "desc": "Type of coastal European regions that contains Mediterranid and Dinaro-Armenid elements. Probably the result of ancient migrations from Asia Minor across the sea. Found from Lebanon and Southern Turkey to Cyprus, Greece, Italy, Spain, France (Brittan"
  },
  {
    "id": "Maasai",
    "name": "Maasai",
    "group": "Ethiopid",
    "lat": 1.5,
    "lng": 36,
    "desc": "Ancient South Ethiopid subtype, influenced by Nilo Hamitic and possibly Sandawe. Has probably been isolated in a remote region west of Lake Turkana some centuries ago. Only from the 15th century on they started to migrate south deep into Kenya and Ta"
  },
  {
    "id": "Malabarese",
    "name": "Malabarese",
    "group": "Indid, Veddid",
    "lat": 11.5,
    "lng": 75.5,
    "desc": "Indid-Veddid influenced type of Southwestern India, found in its most typical form in Kerala, e.g. in Malabarese and related people. Common with a large population. It is similar to the Indo Melanids further East, often mixed with Keralids and someti"
  },
  {
    "id": "Malagasid",
    "name": "Malagasid",
    "group": "Bantuid, South Mongolid",
    "lat": -19,
    "lng": 47,
    "desc": "Relatively recent Bantuid-South Mongolid contact type native to the island of Madagascar. Formed when Malay immigrants from the Sunda Islands met Bantu from East Africa some millennia ago. Arabid and Indid elements entered as well. The type shares th"
  },
  {
    "id": "Malid",
    "name": "Malid",
    "group": "Veddid",
    "lat": -14,
    "lng": 48,
    "desc": "Very ancient phenotype native to the mountains of South India, common in isolated groups of Kanikkaran, Kadar, and Paniya. Mixed with Melanids in the Irula, Yanadi, Chenchu, and sometimes even Tamils. The purest Veddoid type of all, and probably one "
  },
  {
    "id": "ManchuKorean",
    "name": "Manchu-Korean",
    "group": "Sinid, Tungid",
    "lat": 40,
    "lng": 126,
    "desc": "North Sinid subtype, significantly influenced by Tungid. Typified by Manchu and Koreans. Most common in Manchuria / North China, and Central as well as North Korea, occasionally across China and in the Amur Valley. Has a Japanese Okayama subvariety t"
  },
  {
    "id": "Maya",
    "name": "Maya",
    "group": "Centralid",
    "lat": 17,
    "lng": -90,
    "desc": "Centralid subtype with a position between Pueblid and Isthmid and a variety of unique features. Was the dominant element in the ancient Maya civilisation of Southern Mexico and Guatemala, where it is still common even today. Also in many groups from "
  },
  {
    "id": "Mexicid",
    "name": "Mexicid",
    "group": "Margid",
    "lat": 20,
    "lng": -100,
    "desc": "Margid proper. Probably arrived with one of the earlier migrations to America. Typified by Otomi, Purépecha, Pame, Pima of Mexico, as well West Mono and Pomo of California. More mixed in Maidu, Aztecs, Maya, Yuma, Shoshone, and many others over a lar"
  },
  {
    "id": "Micronesid",
    "name": "Micronesid",
    "group": "Polynesid",
    "lat": 7,
    "lng": 150,
    "desc": "Northwestern Polynesid subtype. Combines Nesiotid elements with Proto Malayid and some Melanesid influence. Typically found on the islands of Micronesia, Guam, and more mixed in Palau, Mariana, and other islands. Associated with Chuukese, Pohnpeian, "
  },
  {
    "id": "MiddleNile",
    "name": "Middle Nile",
    "group": "Sudanid , Orientalid",
    "lat": 18,
    "lng": 33,
    "desc": "The Middle Nile type is a contact type of the Nile Valley located in Northern Sudan. Features are variable, although North African, West Asian, and Sub-Saharan elements have a long history of contact in the region. In difference to the North Ethiopid"
  },
  {
    "id": "Moorish",
    "name": "Moorish",
    "group": "Mediterranid , Ethiopid",
    "lat": 34,
    "lng": -5,
    "desc": "Relatively recent contact type of the Western Sahara. Probably formed during Antiquity when aboriginal Berber populations mixed with older West Ethiopid elements. Today most common in Mauritania. Also found in Morocco, especially in coastal cities, S"
  },
  {
    "id": "MountainAralid",
    "name": "Mountain Aralid",
    "group": "Tungid, Turanid",
    "lat": 39,
    "lng": 68,
    "desc": "Tungid variety, weakly influenced by Turanid. Usually united with Aralid, but more Mongoloid. Native to the Tian Shan mountains of Kyrgyzstan and Western China. Particularly common among Kyrgyz. Sporadically in Kazakhs, Yakuts, Uyghurs, Mongols, and "
  },
  {
    "id": "MountainDama",
    "name": "Mountain Dama",
    "group": "Congolid",
    "lat": -22,
    "lng": 16,
    "desc": "Ancient type of the Namibian highlands, especially the Brandberg and Otavi mountains. Probably a relict of groups that were widespread in Southern Africa prior to the Bantu expansion. During the 19th century it was still found in some Mountain Damara"
  },
  {
    "id": "MountainIndid",
    "name": "Mountain Indid",
    "group": "Indid",
    "lat": 34,
    "lng": 74,
    "desc": "(Gracile) Indid variety native to the valleys south of the Western Himalaya and in the Hindu Kush. Once the principal element of the Khas and widespread in the North Indian Plains. Today common in Garhwali of Uttarakhand and Pahari, but also in Purig"
  },
  {
    "id": "MountainMelanesid",
    "name": "Mountain Melanesid",
    "group": "Melanesid",
    "lat": -5.5,
    "lng": 139,
    "desc": "Melanesian mountain variety, relatively ancient with similarities to Paleo Melanesid. Found mainly among New Guinean highlanders like Dani, Moni, Ekagi, Mbowamb, Enga, Paniani, Yali, and many others. Occasionally across the New Guinean lowlands and t"
  },
  {
    "id": "Mtebid",
    "name": "Mtebid",
    "group": "Alpinid, Armenoid, Dinarid",
    "lat": 42.5,
    "lng": 44,
    "desc": "Regional type of the Caucasus Mountains. Probably an Alpinised Dinaro-Armenid adapted to life in mountainous regions. Mtebids are typical of the Georgian population and common among Chechens, Ingushes, and Ossetians."
  },
  {
    "id": "MunduMangbeto",
    "name": "Mundu Mangbeto",
    "group": "Congolid",
    "lat": 3.5,
    "lng": 28,
    "desc": "Intermediate type of the Northeastern Congo forest. Unique in connecting elements of the tallest (Nilo-Hamitic) and shortest (Bambutid) phenotypes in the world with Congolesid. Especially found in the North-East of DR Congo and South Sudan, also in t"
  },
  {
    "id": "NeoDanubian",
    "name": "Neo Danubian",
    "group": "East Europid",
    "lat": 48.5,
    "lng": 18,
    "desc": "East Europid variety with Nordic and Ladogan elements, associated with Slavs. Became more populous during the last centuries, increasing brachycephaly in Russia. Frequent in Belarus, Greater Russia, and Poland. Widespread, from Siberia to Greece and "
  },
  {
    "id": "NeoMelanesid",
    "name": "Neo Melanesid",
    "group": "Melanesid",
    "lat": -7.5,
    "lng": 146,
    "desc": "Melanesid subtype of New Guinea. Found especially in lowlands and river plains, with its highest concentration in the south of the island. More common in Papuan speakers. Also in the Torres Strait, Ceram, Halmahera, East Flores, Aru, and North Austra"
  },
  {
    "id": "Nesiotid",
    "name": "Nesiotid",
    "group": "Polynesid",
    "lat": -8,
    "lng": 160,
    "desc": "Mediterraniform Polynesid variety. Has been noted for its Europoid features, although no close genetic relationship exists. Typical in Samoa, also Marquesas, Tahiti, Easter Island, Fiji, Hawaii, all of Polynesia, but also Solomons, Vanuatu, New Zeala"
  },
  {
    "id": "NiloHamitic",
    "name": "Nilo Hamitic",
    "group": "Ethiopid, Nilotid",
    "lat": 3,
    "lng": 35,
    "desc": "Intermediate type between Nilotid and Ethiopid that is associated with the Nilo Hamites or Half Hamites. Similar to Maasai. Should not be confused with the outdated language family of the same name. The type is dominant West of Lake Rudolf and North-"
  },
  {
    "id": "Norid",
    "name": "Norid",
    "group": "Dinarid",
    "lat": 47.5,
    "lng": 13,
    "desc": "Central European type that closely resembles Dinarids except for lighter pigmentation. Authors interpret this to be the result of Nordid and other (e.g. East Europid) admixture. The name derives from the Roman province of \"Noricum\" in today's Austria"
  },
  {
    "id": "NorthAmazonid",
    "name": "North Amazonid",
    "group": "Amazonid",
    "lat": 0,
    "lng": -65,
    "desc": "Amazonid proper, the dominant type of the rainforests North of the Amazon River to the Caribbean. Common among Cariban speakers, e.g. Caribs, Makushi, Pemón, Taurepang, Wayana, Yabarana, among others. The fearsome Caribs made the Spanish create the w"
  },
  {
    "id": "NorthAndamanid",
    "name": "North Andamanid",
    "group": "Negritid",
    "lat": 12.5,
    "lng": 93,
    "desc": "Almost extinct, isolated type endemic to the Andaman Islands. Particularly in Great Andamanese groups, rarer in other Andamanese. After contact with Europeans in the 19th century the population collapsed, mostly due to disease. Only about a dozen Gre"
  },
  {
    "id": "NorthAndid",
    "name": "North Andid",
    "group": "Andid",
    "lat": 5,
    "lng": -75,
    "desc": "The most important and numerous Andid subvariety, adapted to the high altitudes of the Peruvian and Ecuadorian Andes. Typified by Quechua. The dominant element in the ancient Inca Empire — the largest in pre-Columbian America. Still the most numerous"
  },
  {
    "id": "NorthAtlantid",
    "name": "North Atlantid",
    "group": "Mediterranid , Nordid",
    "lat": 57,
    "lng": -5,
    "desc": "Western European type that combines features of Nordid and Mediterranid in a unique way. Resembles British Iron Age Celts. The principal element in Ireland and parts of Britain, especially Western Scotland and Wales. Common in Northwestern France, so"
  },
  {
    "id": "NorthAustralid",
    "name": "North Australid",
    "group": "Australid",
    "lat": -14,
    "lng": 132,
    "desc": "Australid type of Northern and Central Australia typical for the Gulf of Carpentaria. Shows some similarities to Paleo Melanesids. By some associated with prehistoric immigrants from India (Veddoids). In its purest form in the Gulf of Carpentaria and"
  },
  {
    "id": "NorthBantuid",
    "name": "North Bantuid",
    "group": "Bantuid",
    "lat": -1,
    "lng": 37,
    "desc": "Widespread Bantuid variety of East Africa with relatively narrow noses, possibly due to Ethiopid influence. Found from South Somalia to Kenya, Tanzania, Uganda, Zambia, Zimbabwe, especially in Ganda, Hutu, Nyoro, Hehe, Gogo, Chaga, Sukuma, Nyamwezi, "
  },
  {
    "id": "NorthEthiopid",
    "name": "North Ethiopid",
    "group": "Ethiopid",
    "lat": 17,
    "lng": 38,
    "desc": "Ethiopid subtype that is often regarded as a northern branch of East Ethiopid. Common along the Red Sea coast and the Nile Valley from Egypt to Eritrea and deep into the Ethiopian Highlands. Shows some morphological affinities with Mediterraneans, an"
  },
  {
    "id": "NorthGondid",
    "name": "North Gondid",
    "group": "Veddid",
    "lat": 23,
    "lng": 81,
    "desc": "Ancient phenotype native to North Central India, found up to the Himalaya. Gondid proper type, the robust counterpart of South Gondids. Common in Gond, Kurukh, Bhil, Juang, Baiga. More mixed in Chota Nagpur and in Munda (with Kolids) and Mardia (with"
  },
  {
    "id": "NorthIndid",
    "name": "North Indid",
    "group": "Indid",
    "lat": 30,
    "lng": 76,
    "desc": "Indid subtype of Pakistan and Northwestern India, often associated with ancient Indo-Aryan migrations from the North. Common in Punjab, where it is typified by the Sikh and Punjabi and upper/warrior castes of the Doab. Also in Rajputs, Patharns, in K"
  },
  {
    "id": "NorthLappid",
    "name": "North Lappid",
    "group": "Lappid",
    "lat": 69,
    "lng": 27,
    "desc": "Northern Lappid variety, somewhat closer to Sibirid, possibly due to Samoyedic influence. Associated with Eastern Saami (formerly \"Lapps\"), e.g. Skolt and Inari speakers. Extends from Finnmark in Norway across Northern Finland to the Kola Peninsula. "
  },
  {
    "id": "NorthPontid",
    "name": "North Pontid",
    "group": "East Europid , Mediterranid , Nordid",
    "lat": 51,
    "lng": 30,
    "desc": "Altered Mediterranoid of Eastern Europe that connects Pontids with more northern types. Most common in a large area from Poland to the Russian city of Penza. Extends north to Finland and south to Macedonia, Bulgaria, Greece (Thracia, North Thessalia)"
  },
  {
    "id": "Omotic",
    "name": "Omotic",
    "group": "Ethiopid",
    "lat": 6,
    "lng": 37,
    "desc": "Isolated type of Southwestern Ethiopia and Northern Kenya, probably belonging to a group of ancient Ethiopids. Probably a relict of Pre-Neolithic periods. Most common in speakers of the Omotic languages, e.g. Ari/Aari, Banna, Hamer, Karo, Turmi, and "
  },
  {
    "id": "Pacifid",
    "name": "Pacifid (proper)",
    "group": "Pacifid",
    "lat": -8,
    "lng": -79,
    "desc": "American type, native to the moist forests of the North Pacific coast, from Aleuts across South Alaska, British Columbia to Oregon. Purest in Wakashan and many Salishan speakers, especially Kwakiutl and Nez Perce, also Flatheads, Tlinkit, Haida, Coeu"
  },
  {
    "id": "Palaungid",
    "name": "Palaungid",
    "group": "South Mongolid",
    "lat": 20,
    "lng": 100,
    "desc": "The proper Palaungid variety, typical for the Central Burmese hill tribes, also in Yunnan, Himalaya, South Tibet, Thailand, and parts of India. The name derives from the Palaung tribe (Burmese: \"mountain people\"). Older than Shanid, younger than Vedd"
  },
  {
    "id": "PaleoAtlantid",
    "name": "Paleo Atlantid",
    "group": "Mediterranid , Nordid",
    "lat": 53,
    "lng": -8,
    "desc": "Ancient type that is sporadically found in Northern and Western Europe, usually only in relict populations. A resemblance with Cro-Magnons has been stressed by some authors. Strongest concentrations in Southern Norwegian mountain valleys (e.g. Tydal)"
  },
  {
    "id": "PaleoMelanesid",
    "name": "Paleo Melanesid",
    "group": "Australid, Melanesid",
    "lat": -6.5,
    "lng": 155,
    "desc": "Melanesid variety with very ancient features, closer to Australids. Typified by the Kanak of New Caledonia, in its purest form in the north of the island. Also important on the Loyalty Islands, Vanuatu, Solomons, East New Guinea and Eastern Australia"
  },
  {
    "id": "PaleoSardinian",
    "name": "Paleo Sardinian",
    "group": "Mediterranid",
    "lat": 40,
    "lng": 9,
    "desc": "Ancient type, was widespread in Central Europe during the Neolithic, has survived as a minority element in the mountains of the Italian island of Sardinia. Morphologically similar to Berberid, although significantly gracilised and genetically differe"
  },
  {
    "id": "Pampid",
    "name": "Pampid",
    "group": "Patagonid",
    "lat": -36,
    "lng": -62,
    "desc": "Slightly gracilised Patagonid variety, native to the vast plains of the Argentinian Chaco and Pampa. Sometimes mixed with Amazonid elements. Typical groups include the Chorote, Chané, Mataco, Kadiweu, Pilagá, Toba, Wichí, Mocoví, Abipón, and the exti"
  },
  {
    "id": "Patagonid",
    "name": "Patagonid (proper)",
    "group": "Patagonid",
    "lat": -45,
    "lng": -70,
    "desc": "The most characteristic variety of the Patagonid group. Once dominated the cool grasslands of Patagonia. Was pushed back by Mapuche as well as Europeans. Probably had some very tall and massive subvarieties (the extinct Tiremenen). Today only found i"
  },
  {
    "id": "PlainsPamirid",
    "name": "Plains Pamirid",
    "group": "Turanid",
    "lat": 39,
    "lng": 66,
    "desc": "The most widespread Pamirid variety, typical for the steppes and lowlands from Uzbekistan to Xinjiang and the Ferghana Valley. Somewhat influenced by Aralid. Formed by contact of Turanids with Tungid-influenced groups and became widely dispersed by n"
  },
  {
    "id": "Planid",
    "name": "Planid",
    "group": "Silvid",
    "lat": 42,
    "lng": -102,
    "desc": "Native American type, named after the Great Plains of North America. In pre-Colombian times concentrated in the Central Canadian forests from where it extended to the Mississippi. When Europeans reintroduced the horse to the continent, bison hunts en"
  },
  {
    "id": "Pontid",
    "name": "Pontid",
    "group": "Mediterranid",
    "lat": 42,
    "lng": 35,
    "desc": "East Mediterranid type, sometimes associated with ancient Scythians, Kurgans, and other steppe peoples. Common in the Balkans, especially Bulgaria, Macedonia, Greece (Thracian subvariety), Western Turkey, Ukraine, Southern Russia, Azerbaijan, Northwe"
  },
  {
    "id": "PreNilotid",
    "name": "Pre Nilotid",
    "group": "Nilotid",
    "lat": 6,
    "lng": 33,
    "desc": "Ancient type with Proto Nilotid traits, today still found in the border region of Sudan and Ethiopia. Common in Kwama, Uduk, Gumuz, Mao, and related people. More mixed in Berta and other Nilotics. A link to early Ethiopids is possible. Many of these "
  },
  {
    "id": "PreSlavic",
    "name": "Pre Slavic",
    "group": "East Europid",
    "lat": 52,
    "lng": 20,
    "desc": "Ancient Central European element, associated with Pre-Slavic people. Common in Poles and West Ukrainians, especially in Volhynia, Galicia, Podolia, and east of Warsaw. May be found in the Balkans, in Czechs, Slovaks, Austrians, Germans, West Ukrainia"
  },
  {
    "id": "ProtoEthiopid",
    "name": "Proto Ethiopid",
    "group": "Ethiopid",
    "lat": 16,
    "lng": 38,
    "desc": "Ancient type that inhabited the Southwestern Eritrean lowlands prior to the arrival of Ethiopids, and possibly resembles early \"Out of Africa\" types. Was still common from Kenya to Sudan during historic times. Some individuals may give a pseudo-Austr"
  },
  {
    "id": "ProtoIranid",
    "name": "Proto Iranid",
    "group": "Mediterranid , Orientalid",
    "lat": 35,
    "lng": 48,
    "desc": "Coarse type of Iran and Asia Minor, that can be considered an eastern Eurafricanid variety. More ancient than the more gracile Iranids and Pontids of the region with several Cromagniform features. Transitional to Berberid in the West (e.g. Southern T"
  },
  {
    "id": "ProtoMalayid",
    "name": "Proto Malayid",
    "group": "South Mongolid",
    "lat": 2,
    "lng": 103,
    "desc": "Proto Malayid proper type. Relatively old element that probably arrived in the Sunda Archipelago during the period of land bridges in the late Pleistocene. Today in its highest concentrations in the Lesser Sunda Islands like Sumba, Flores, Timor up t"
  },
  {
    "id": "ProtoNordid",
    "name": "Proto Nordid",
    "group": "Nordid",
    "lat": 54,
    "lng": 28,
    "desc": "Ancient East Nordid variety, the eastern counterpart of the Aisto Nordids. Together with early Mediterranids it was widespread in prehistoric Proto-Indo-European populations of the Eurasian steppes (Fatyanovo). Diluted today. Still found sporadically"
  },
  {
    "id": "Pueblid",
    "name": "Pueblid",
    "group": "Centralid",
    "lat": 35,
    "lng": -107,
    "desc": "Native American type, named after the Pueblo communities in Southwestern North America. Extends over a large area of Southern US states as well as Mexico. Most common in Hopi, Zuni, Choctaw, Caddo, Ute, Mohave, Nahua, Huichol, and many of their neigh"
  },
  {
    "id": "RobustPolynesid",
    "name": "Robust Polynesid",
    "group": "Polynesid",
    "lat": -14,
    "lng": -170,
    "desc": "Relatively recent Polynesid variety that developed after the Southeast Asian migration waves had reached Oceania. Most likely a brachycephalised Nesiotid - Proto Malayid blend, possibly with Indianid influence. Typical in Hawaii, Tonga, Samoa, Cook I"
  },
  {
    "id": "SaharanEthiopid",
    "name": "Saharan Ethiopid",
    "group": "Ethiopid",
    "lat": 14,
    "lng": 10,
    "desc": "Ethiopid type that was more common during the Neolithic when the Sahara was still green. Today it extends from Chad to Niger, Northern Nigeria and even Cameroon. Found in its purest form in the Toubou of the Tibesti mountains in Northern Chad. More m"
  },
  {
    "id": "Samoyedic",
    "name": "Samoyedic",
    "group": "Lappid, Sibirid, Tungid",
    "lat": 66,
    "lng": 76,
    "desc": "Northwestern Sibirid contact type, influenced by strong Tungid and possibly Lappid elements. Has migrated to the Yamal peninsula and surrounding regions during the Middle Ages from a more southern place, possibly the Minusinsk Basin or Altai-Sajan re"
  },
  {
    "id": "Sandawe",
    "name": "Sandawe",
    "group": "Bantuid, Khoid, Ethiopid",
    "lat": -5,
    "lng": 35.5,
    "desc": "Distinctive East African type of the Tanzanian savannahs, especially the Dodoma region. A relict of Khoisanid populations that were more widespread prior to the Bantu expansion. Also linked to Maasai. Most common in the Sandawe, who still speak a cli"
  },
  {
    "id": "Satsuma",
    "name": "Satsuma",
    "group": "South Mongolid, Tungid",
    "lat": 31.5,
    "lng": 130.5,
    "desc": "South Mongolid type of Japan and Korea, somewhat influenced by Tungid. Named after the Satsuma region of Kagoshima. Today the most populous element in Japan as it is found along the densely populated southern coasts of Kagoshima, Shikoku, and Honshu."
  },
  {
    "id": "Savolaxid",
    "name": "Savolaxid",
    "group": "East Europid",
    "lat": 62.5,
    "lng": 28,
    "desc": "East Baltid variety, named after the Savolaxia province of Finland, similar to Neo Danubian. Core population in Eastern Finland, Karelia, and Northern Russia, also Lappland. Occasionally found all over Scandinavia and in Eastern Europe south to the C"
  },
  {
    "id": "ScandoLappid",
    "name": "Scando Lappid",
    "group": "Lappid",
    "lat": 68,
    "lng": 20,
    "desc": "Lappid proper - an ancient European type associated with Southern Saami people (formerly \"Lapps\"). Rare today, often mixed, typical in Northern Sweden and North-Central Norway. More widespread in historic times: around 1700 still common in the proxim"
  },
  {
    "id": "Semangid",
    "name": "Semangid",
    "group": "Negritid",
    "lat": 5,
    "lng": 101,
    "desc": "Paleolithic, Negriform phenotype found in the forests of the Malay Peninsula, similar to Aetid. Even older and rarer than the cohabitant Senoids with ~1000 unmixed individuals remaining in relict populations. Typified by the Semang, especially Kensiu"
  },
  {
    "id": "Senegalid",
    "name": "Senegalid",
    "group": "Sudanid",
    "lat": 14.5,
    "lng": -14,
    "desc": "Gracile Sudanid variety, named after the country of Senegal, where it is found in its purest form among Wolof, more mixed in Serer. Occasionally in Fulani, Mande speakers, and across the Sahel zone. Connections to Fulani are much stronger than for ot"
  },
  {
    "id": "Senoid",
    "name": "Senoid",
    "group": "Veddid",
    "lat": 4.5,
    "lng": 101.5,
    "desc": "East Veddid type, native to the forests of South-East Asia. Was more widespread in historic times and has probably pushed back the even older Negritids. Today a few relict populations remain. Typified by the Senoi (Semai, Temiar, Mahmeri, Chewong...)"
  },
  {
    "id": "Shanid",
    "name": "Shanid",
    "group": "South Mongolid",
    "lat": 21,
    "lng": 97,
    "desc": "Sinoid South Mongolid type, typical in the (Irrawaddy) plains and the Shan Plateau of Myanmar. The name derives from the Shan people, who migrated south from Yunnan in historic times and formed a powerful empire, soon outnumbering Palaungids and Vedd"
  },
  {
    "id": "Shari",
    "name": "Shari",
    "group": "Nilotid, Sudanid",
    "lat": 11,
    "lng": 17,
    "desc": "Special type named after the Chari river of Chad. Intermediate between Sudanid and Nilotid, but with several unique features that have long been stabilised. Most common in Southern Chad and Northern Cameroon. Typified by the Sara. Also in Bua, Mbum, "
  },
  {
    "id": "Shillukid",
    "name": "Shillukid",
    "group": "Nilotid",
    "lat": 10,
    "lng": 32,
    "desc": "Nilotid variety similar to Dinkaid, but with slightly modified features. Typically found in the savannahs of the Upper Nile of South Sudan. Extends to Western Ethiopia (e.g. Gambela). Most common in Shilluk, but also in Anuak. More mixed in other Nil"
  },
  {
    "id": "Sinhalesid",
    "name": "Sinhalesid",
    "group": "Indid",
    "lat": 7.5,
    "lng": 80.5,
    "desc": "Indid subtype, similar to Gracile Indid, mainly found in South-West and Central Sri Lanka. Typical for Sinhalese and related people. This type's main component is the Indid, who migrated to Sri Lanka early and was later modified by admixture of Arabs"
  },
  {
    "id": "Siwa",
    "name": "Siwa",
    "group": "Ethiopid, Mediterranid",
    "lat": 29.2,
    "lng": 25.5,
    "desc": "Distinctive Berber type typical for the Eastern Sahara Desert. Typified by the population of the Siwa and Awjila oases of Northwestern Egypt. In lower frequencies extends to Jalu (Libya) and other Egyptian oases (Kharga). In the latter, it is transit"
  },
  {
    "id": "Sonorid",
    "name": "Sonorid",
    "group": "Margid",
    "lat": 30,
    "lng": -112,
    "desc": "Margid subtype, native to the hot Sonora desert of South Arizona and California, as well as Northwestern Mexico. Probably arrived with one of the earlier migrations to America. Today typified by the Pima (O'odham) and the Seri. More mixed in Yuma, Pa"
  },
  {
    "id": "SouthAmazonid",
    "name": "South Amazonid",
    "group": "Amazonid",
    "lat": -10,
    "lng": -55,
    "desc": "The most dynamic Amazonid variety, emerged in northern savannahs and spread south across Brazil to Paraguay and Argentina, pushing back older Lagids. Common among Tupian speakers, e.g. Apika, Awá-Guajá, Guarani, Kawahib, Chiriguano, Piripkura, etc., "
  },
  {
    "id": "SouthAndamanid",
    "name": "South Andamanid",
    "group": "Negritid",
    "lat": 11.5,
    "lng": 92.7,
    "desc": "Isolated type typical for the Little Andamanese people (Onge, Jarawa, Sentilese). After contact with Europeans in the 19th century populations collapsed, mostly due to disease. A few hundred remain today with Jarawa being the most populous, and Senti"
  },
  {
    "id": "SouthAndid",
    "name": "South Andid",
    "group": "Andid, Patagonid",
    "lat": -33,
    "lng": -70,
    "desc": "The southernmost Andid variety, somewhat influenced by Patagonid. The dominant type in Mapuche, native to Chile. More mixed in the extinct Chonos of South Chile. Although disease reduced numbers drastically after contact with the Spanish, the type sp"
  },
  {
    "id": "SouthAustralid",
    "name": "South Australid",
    "group": "Australid",
    "lat": -35,
    "lng": 140,
    "desc": "Australid subtype with proto-Caucasiform features associated with the people of the Murray basin of Southeastern Australia. Originally the most numerous Australid type, European settlers colonised the fertile lands of the South-East first and pushed "
  },
  {
    "id": "SouthBantuid",
    "name": "South Bantuid",
    "group": "Bantuid",
    "lat": -30,
    "lng": 30,
    "desc": "Bantuid variety, characterised by relatively wide skulls and robust faces. Especially found in the Kwazulu Natal / Transkei regions of South Africa and Swaziland, extends through many regions of Southern Africa and Madagascar. Originated from Bantu e"
  },
  {
    "id": "SouthEthiopid",
    "name": "South Ethiopid",
    "group": "Ethiopid",
    "lat": -2,
    "lng": 30,
    "desc": "The southernmost Ethiopid, common between Lake Victoria and Lake Tanganyika, especially in Rwanda, Burundi, but also Uganda, Tanzania, and Eastern DR Congo. In its purest form in Tutsi. Also common in Hema. Sometimes in various Bantu populations, esp"
  },
  {
    "id": "SouthFuegid",
    "name": "South Fuegid",
    "group": "Lagid",
    "lat": -54,
    "lng": -69,
    "desc": "The most characteristic Fuegid variety, adapted to the cool climate of Southern Chile. Named after Tierra del Fuego. Often considered part of the Lagoid group. Very ancient, probably arrived with one of the earliest migrations to America. The last su"
  },
  {
    "id": "SouthGondid",
    "name": "South Gondid",
    "group": "Veddid",
    "lat": 19,
    "lng": 79,
    "desc": "Gracile Gondid variety of Central India that shares many similarities with Gondids proper, except for a variety of features that puts them morphologically closer to Gracile Indids, possibly a result of convergent evolution. Found in its purest form a"
  },
  {
    "id": "SouthNilotid",
    "name": "South Nilotid",
    "group": "Nilotid",
    "lat": 1,
    "lng": 32,
    "desc": "Type common to the southern branch of Nilotic people of Lake Albert south to Lake Victoria, in South Sudan, Uganda, and Western Kenya. In some features, less typical than Dinkaids and Shillukids, stature and head shorter, possibly due to a higher deg"
  },
  {
    "id": "SouthPalaungid",
    "name": "South Palaungid",
    "group": "South Mongolid",
    "lat": 5,
    "lng": 102,
    "desc": "Southern Palaungid variety, weakly influenced by Veddid. Typical for the hill tribes of Thailand, Laos, and parts of Vietnam. Occasionally in Southern Thailand, Southern China, and south to Borneo and the Philippines. Older than Shanids, but younger "
  },
  {
    "id": "SouthPolynesid",
    "name": "South Polynesid",
    "group": "Polynesid",
    "lat": -20,
    "lng": -150,
    "desc": "Southern Polynesid variety. Some assume similarities with the first Polynesid variety that migrated from South-East Asia into Oceania. Found in its purest from in the Maori of New Zealand, but also Moriori and Rapa Nui, and occasionally across Polyne"
  },
  {
    "id": "Strandid",
    "name": "Strandid",
    "group": "Alpinid",
    "lat": -33.5,
    "lng": 19,
    "desc": "Alpinoid North European type most common in Southwestern Norway. The name derives from the Norwegian word for beach (\"Strand\"). Probably a reduced Paleo Atlantid. Associated with the ancient Norwegian Fosna culture. Strandids are not very numerous an"
  },
  {
    "id": "Strandlooper",
    "name": "Strandlooper",
    "group": "Khoid, Sanid",
    "lat": -33,
    "lng": 18.5,
    "desc": "Almost extinct Khoisanid type, once common along the South African coasts from Cape Colony to the Skeleton Coast. The name derives from the \"beach-combers\" who lived mainly on shellfish. Probably a Proto-Khoisanid type, very ancient and less speciali"
  },
  {
    "id": "Sudanid",
    "name": "Sudanid (proper)",
    "group": "Sudanid",
    "lat": 12,
    "lng": 2,
    "desc": "Sudanid proper. Widespread savannah type named after the Sudan region of West Africa. Found in its purest form among Mossi, Lobi, Dagaaba, Senufo, Northern Malinke, Gurunsi, Songhai, and Bambara. More mixed across many regions of Western Africa, e.g."
  },
  {
    "id": "SudanoGuinesid",
    "name": "Sudano Guinesid",
    "group": "Congolid, Sudanid",
    "lat": 8,
    "lng": 2,
    "desc": "Transitional type between Sudanid and Guinesid, common in West Africa. Although it is just a contact type, it is sometimes separated from the two main varieties, because it is very numerous and the dominant element in many ethnic groups. Found from S"
  },
  {
    "id": "Tapirid",
    "name": "Tapirid",
    "group": "Melanesid",
    "lat": -5,
    "lng": 150,
    "desc": "Pygmy Melanesian type. In difference to many other Pygmies, it shares a common history with its taller neighbours and probably represents a secondary adaption driven by iodine deficiency. Typified by the now-gone Tapiro. Also in Pesechem, Goliath, Ai"
  },
  {
    "id": "Targid",
    "name": "Targid",
    "group": "Mediterranid , Orientalid",
    "lat": 25,
    "lng": 0,
    "desc": "Specialised type of the Sahara, linked to Mediterranid and Orientalid - the southern counterpart of Libyid and Eurafricanid, but more strongly adapted to the desert. The result of isolation and selection under extreme environmental stimuli. Typified "
  },
  {
    "id": "Tasmanid",
    "name": "Tasmanid",
    "group": "Australid",
    "lat": -42,
    "lng": 146,
    "desc": "Insular, slightly gracilised Australid subtype of Tasmania. Similar to Barrinean, sometimes also associated with Melanesid or Negritid. Most likely developed due to isolation after Tasmania split off Australia. Extinct today, the last full-blooded ma"
  },
  {
    "id": "Tavastid",
    "name": "Tavastid",
    "group": "East Europid",
    "lat": 61,
    "lng": 24.5,
    "desc": "East Baltid variety, typical for the eastern shores of the Baltic sea, similar to Neo Danubian and Borreby. Named after the Tavastia province of Finland. Core population in Baltic countries, from Sweden to Finland and from Estonia to Germany and Roma"
  },
  {
    "id": "Tibetid",
    "name": "Tibetid",
    "group": "Indid, Sinid",
    "lat": 30,
    "lng": 91,
    "desc": "Contact type of Indid and Sinid. Possibly also Paleo Sibirid groups that have adapted to the high altitude of the Tibetan Plateau, sometimes features appear Indianiform. Most typical in Ladhak of Northern India and West Tibetans. Also in Eastern and "
  },
  {
    "id": "Toalid",
    "name": "Toalid",
    "group": "Veddid",
    "lat": -3,
    "lng": 120,
    "desc": "The easternmost Veddid type, usually shorter-skulled. The oldest living type of the Sunda Islands. More widespread in historic times and probably pushed back by South Mongolids. Diluted today. In its purest form in the Toala of Celebes, where it occu"
  },
  {
    "id": "Toda",
    "name": "Toda",
    "group": "Indid",
    "lat": 11.5,
    "lng": 76.5,
    "desc": "Indid subtype, native to the Nilgiri Hills of Southern India. Shows morphological affinities with North Indids and has sometimes been included. Differs from most neighbouring populations and could present an isolate caused by ancient Indo-European mi"
  },
  {
    "id": "Tonkinesid",
    "name": "Tonkinesid",
    "group": "Sinid",
    "lat": 21,
    "lng": 106,
    "desc": "South Sinid subvariety, typical for the plains of the Red River in Northern Vietnam. Named after the old Tonkin protectorate / Đông Kinh region. Developed through continuous Sinid expansions to the South and assimilation of indigenous Shanid elements"
  },
  {
    "id": "TransMediterranid",
    "name": "Trans Mediterranid",
    "group": "Mediterranid",
    "lat": 35,
    "lng": 10,
    "desc": "Widespread Mediterranid subtype with many morphological features intermediate between Eurafricanid and Gracile Mediterranid. Possibly a gracilised Eurafricanid that spread west through ancient migrations that lasted up to Antiquity (e.g. Phoenicians)"
  },
  {
    "id": "Transcaspian",
    "name": "Transcaspian",
    "group": "Orientalid, Turanid",
    "lat": 40,
    "lng": 58,
    "desc": "West-Central Asian Orientalid with Aralid admixture, particularly common in Turkmens. Significantly differs from other Central Asians by longer heads and taller stature. Relatively recent contact type that probably developed in the ancient Joresmi, A"
  },
  {
    "id": "Tronder",
    "name": "Trønder",
    "group": "Nordid",
    "lat": 63.5,
    "lng": 10.5,
    "desc": "North European type, combines features of Paleo Atlantid, Hallstatt, and East Nordid. One of the main elements in the ancient Vikings. Their nucleus lies in the Norwegian Trøndelag region. It also dominates in other parts of Norway as well as Iceland"
  },
  {
    "id": "TwaCwa",
    "name": "Twa-Cwa",
    "group": "Bambutid, Congolid",
    "lat": -2,
    "lng": 29,
    "desc": "Pygmoid type of the Congo forests intermediate between Bambutid and Congolesid. Important groups in DR Congo are Mongo Cwa close to the Mai-Ndombe and Tumba Lakes, as well as Kasai Cwa of the Lomani River. Also typical in Ba Twa around Lake Kivu in R"
  },
  {
    "id": "Uralid",
    "name": "Uralid",
    "group": "Sibirid",
    "lat": 57,
    "lng": 60,
    "desc": "West Sibirid subtype, especially common in the basin of the Ob River among Khanty and Mansi people. Sometimes in Altai and Khakassia. Due to the harsh Siberian climate, this type was never very numerous. Today, the indigenous groups are largely outnu"
  },
  {
    "id": "Vedda",
    "name": "Vedda",
    "group": "Veddid",
    "lat": 7,
    "lng": 81,
    "desc": "Veddid proper type, typified by aboriginals of Sri Lanka - the Vedda people. Relatively ancient with a long history in the region. Relict groups today mostly live in the eastern parts of the island, a few hundred unmixed remain. The Vedda culture and"
  },
  {
    "id": "Volgid",
    "name": "Volgid",
    "group": "East Europid , Sibirid",
    "lat": 56,
    "lng": 49,
    "desc": "Eurasian type, especially common west of the Ural in the basins of Sura and Moksha Rivers of Russia. Found in Mari, Chuvash, Volga-Finns. More mixed in Udmurts, Finns, and Ryazan population (where the taller, narrower-nosed Mordva subvariety is found"
  },
  {
    "id": "WestAlpinid",
    "name": "West Alpinid",
    "group": "Alpinid",
    "lat": 46,
    "lng": 3,
    "desc": "Alpinid proper, historically found in the mountain regions of Western Europe. Often a cohabitant of a second mountain type, the Dinarid. The nucleus of Alpinids lies in the Western Alps and Central France (e.g. the Swiss Disentis, the French Savoy, A"
  },
  {
    "id": "WestAmazonid",
    "name": "West Amazonid",
    "group": "Amazonid",
    "lat": -5,
    "lng": -72,
    "desc": "Amazonid subtype, the most frequent type in the Western Amazon rainforest. Common among Arawakan speakers, typical groups are Yawalapiti, Asháninka, Mashco-Piro, Piapoco, Wayuu, among others. Possibly originated in Colombian savannahs and expanded to"
  },
  {
    "id": "WestBambutid",
    "name": "West Bambutid",
    "group": "Bambutid",
    "lat": 2,
    "lng": 14,
    "desc": "Type of the West African Pygmies, that split from East Bambutid during the late Paleolithic. Shows a strong rainforest adaption. Historically more widespread, still found in the forests of Cameroon, Gabon, Congo, and Central African Republic. Typifie"
  },
  {
    "id": "WestCongolesid",
    "name": "West Congolesid",
    "group": "Congolid",
    "lat": -5,
    "lng": 13,
    "desc": "African forest type, intermediate between Congolesid, Guinesid, and Sudanid, but with a variety of unique features. Common in Southern Cameroon, Congo, Western Central African Republic, and Gabon. Typified by Makaa-Njem speakers, also in Bamileke, Ba"
  },
  {
    "id": "WestEthiopid",
    "name": "West Ethiopid",
    "group": "Ethiopid",
    "lat": 8,
    "lng": 35,
    "desc": "Ethiopid subtype that was more widespread across the Western Saharan regions during the Neolithic when the area was still a green savannah. Found from Mauritania to Senegal and from Guinea to Northern Cameroon. Common in Western Fulani, especially Pu"
  },
  {
    "id": "Xhosaid",
    "name": "Xhosaid",
    "group": "Bantuid, Sanid",
    "lat": -32,
    "lng": 27,
    "desc": "Bantuid-Khoisan contact type that developed as a result of the Bantu expansion some millennia ago when Bantu assimilated older Khoisan groups. Found especially in the eastern parts of South Africa. Common in Xhosa, Southern Sotho, and Shangana, occas"
  },
  {
    "id": "Yakonin",
    "name": "Yakonin",
    "group": "Sinid",
    "lat": 34.5,
    "lng": 133,
    "desc": "East Asian type that has been associated with the ancient Japanese government and nobility circles. The name derives from yakunin (Jap.: bureaucrat). Shows pseudo-Semitic features and may in blend produce Indianoid individuals. Occasionally found acr"
  },
  {
    "id": "Yemenid",
    "name": "Yemenid",
    "group": "Armenoid, Orientalid, Veddid",
    "lat": 15,
    "lng": 44,
    "desc": "Orientalid subtype that deviates in an Armenoid direction. Most common in South and Central Yemeni. Also in Oman, UAE, Socotra, and parts of Saudi Arabia. Ancient migrations and tradesmen brought it to Northern and Eastern Africa, e.g. it has a long "
  },
  {
    "id": "Yenisey",
    "name": "Yenisey",
    "group": "Sibirid",
    "lat": 58,
    "lng": 92,
    "desc": "Sibirid subtype of the Yenisei River basin in Siberia. Shows some Americanoid features. Also seems to be culturally and linguistically linked to Pacifids, although no close genetic relationship is clear. May show a Proto Mongoloid state. Most common "
  }
];
