const rawVenues = [
  {
    "id": 5270,
    "name": "IV. Städtische Irrenanstalt (Genesungsheim)",
    "coordinates": { "lng": 13.4904715, "lat": 52.6385434 },
    "image": "/images/venues/5270.jpg",
    "description": {
      "es": "El IV. Städtische Irrenanstalt, también conocido como Genesungsheim, es un centro histórico de salud mental",
      "en": "The IV. Städtische Irrenanstalt, also known as the Genesungsheim, is a historic mental health facility",
      "de": "Die IV. Städtische Irrenanstalt, auch bekannt als Genesungsheim, ist eine historische psychiatrische Einrichtung"
    }
  },
  {
    "id": 5253,
    "name": "Städtische Zentrale Buch",
    "coordinates": { "lng": 13.508387804031374, "lat": 52.63562184170191 },
    "image": "/images/venues/5253.jpg",
    "description": {
      "es": "El Städtische Zentrale Buch, construido entre 1904 y 1903 por Ludwig Hoffmann, producía electricidad para los Bucher Heilstätten y ahora alberga estudios de artistas y espacios expositivos, con una compleja historia que incluye trabajos forzados durante la Segunda Guerra Mundial",
      "en": "Städtische Zentrale Buch is believed to be a central book archive or library in the city",
      "de": "Die 1904-13 von Ludwig Hoffmann erbaute Städtische Zentrale Buch, die einst Strom für die Bucher Heilstätten produzierte und heute Künstlerateliers und Ausstellungsräume beherbergt, hat eine komplexe Geschichte, zu der auch die Zwangsarbeit im Zweiten Weltkrieg gehört"
    }
  },
  {
    "id": 5468,
    "name": "Dorf Lübars mit LabSaal",
    "coordinates": { "lng": 13.3563911, "lat": 52.6201455 },
    "image": "/images/venues/5468.jpg",
    "description": {
      "es": " Un pueblo encantador con LabSaal, un lugar cultural, que ofrece una visión del patrimonio rural de Berlín",
      "en": "A charming village with LabSaal, a cultural venue, offering a glimpse of Berlin's rural heritage",
      "de": " Ein charmantes Dorf mit dem LabSaal, einem kulturellen Treffpunkt, der einen Einblick in das ländliche Erbe Berlins bietet"
    }
  },
  {
    "id": 5261,
    "name": "Stadtgut Blankenfelde",
    "coordinates": { "lng": 13.392548561096191, "lat": 52.61847466258471 },
    "image": "/images/venues/5261.jpg",
    "description": {
      "es": "El Stadtgut Blankenfelde es una finca histórica",
      "en": "The Stadtgut Blankenfelde is a historic estate",
      "de": "Das Stadtgut Blankenfelde ist ein historisches Anwesen"
    }
  },
  {
    "id": 5600,
    "name": "Lapidarium im Museum Reinickendorf",
    "coordinates": { "lng": 13.318682468581807, "lat": 52.615457250000006 },
    "image": "/images/venues/5600.jpg",
    "description": {
      "es": "El Lapidarium del Museo Reinickendorf alberga una colección de esculturas y relieves de piedra",
      "en": "The Lapidarium at Museum Reinickendorf houses a collection of stone sculptures and reliefs",
      "de": "Das Lapidarium im Museum Reinickendorf beherbergt eine Sammlung von Steinskulpturen und Reliefs"
    }
  },
  {
    "id": 5514,
    "name": "werkstatt denkmal: Hermsdorfer Wasserturm",
    "coordinates": { "lng": 13.318682468581807, "lat": 52.615457250000006 },
    "image": "/images/venues/5514.jpg",
    "description": {
      "es": "Hermsdorfer Wasserturm",
      "en": "The Hermsdorfer Water Tower, a historic landmark, showcases Berlin's architectural heritage.Hermsdorf",
      "de": "Hermsdorfer Wasserturm"
    }
  },
  {
    "id": 5458,
    "name": "Haus Hannah Höch und Hausgarten",
    "coordinates": { "lng": 13.236082482058102, "lat": 52.609881099999996 },
    "image": "/images/venues/5458.jpg",
    "description": {
      "es": "Haus Hannah Höch y su jardín son probablemente una casa residencial y un jardín asociado",
      "en": "Haus Hannah Höch and its garden are probably a residential house and an associated garden",
      "de": "Haus Hannah Höch und sein Garten sind wahrscheinlich ein Wohnhaus und ein dazugehöriger Garten"
    }
  },
  {
    "id": 5327,
    "name": "Dorfkirche Heiligensee",
    "coordinates": { "lng": 13.21260452270508, "lat": 52.60799940045795 },
    "image": "/images/venues/5327.jpg",
    "description": {
      "es": "La iglesia del pueblo de Heiligensee es una iglesia histórica",
      "en": "The village church in Heiligensee is a historic church",
      "de": "Die Dorfkirche in Heiligensee ist eine historische Kirche"
    }
  },
  {
    "id": 5555,
    "name": "Dorfkirche Französisch Buchholz",
    "coordinates": { "lng": 13.433918952941896, "lat": 52.60796030896581 },
    "image": "/images/venues/5555.jpg",
    "description": {
      "es": "La iglesia del pueblo de Französisch Buchholz es una iglesia histórica",
      "en": "The village church in Französisch Buchholz is a historic church",
      "de": "Die Dorfkirche in Französisch Buchholz ist eine historische Kirche"
    }
  },
  {
    "id": 5596,
    "name": "Ev. Königin-Luise-Kirche",
    "coordinates": { "lng": 13.3135878, "lat": 52.6036966 },
    "image": "/images/venues/5596.jpg",
    "description": {
      "es": "La Iglesia Evangélica Reina Luisa es una iglesia con una conexión real",
      "en": "The Evangelical Queen Luise Church is a church with a royal connection",
      "de": "Die Evangelische Königin-Luise-Kirche ist eine Kirche mit königlichem Bezug"
    }
  },
  {
    "id": 5556,
    "name": "Kirche St.-Johannes Evangelist",
    "coordinates": { "lng": 13.4364968, "lat": 52.6011456 },
    "image": "/images/venues/5556.jpg",
    "description": {
      "es": "Iglesia de San Juan Evangelista, un lugar de culto y reflexión en el corazón de Berlín",
      "en": "St. John the Evangelist Church, a place of worship and reflection in the heart of Berlin",
      "de": "Die Kirche St. Johannes der Evangelist, ein Ort der Anbetung und Besinnung im Herzen Berlins"
    }
  },
  {
    "id": 5529,
    "name": "Ev. Gemeindezentrum Apostel Johannes – FÄLLT AUS",
    "coordinates": { "lng": 13.3601863, "lat": 52.5958297 },
    "image": "/images/venues/5529.jpg",
    "description": {
      "es": "El Ev. Gemeindezentrum Apostel Johannes puede estar cerrado o cancelado debido a las circunstancias",
      "en": "The Ev. Gemeindezentrum Apostel Johannes may be closed or canceled due to circumstances",
      "de": "Das Ev. Gemeindezentrum Apostel Johannes kann aufgrund von Umständen geschlossen oder abgesagt werden"
    }
  },
  {
    "id": 5386,
    "name": "Ev. Dorfkirche Alt-Wittenau",
    "coordinates": { "lng": 13.32544267502994, "lat": 52.5922701 },
    "image": "/images/venues/5386.jpg",
    "description": {
      "es": "La iglesia evangélica del pueblo de Alt-Wittenau es una iglesia histórica",
      "en": "The Evangelical Village Church in Alt-Wittenau is a historic church",
      "de": "Die Evangelische Dorfkirche in Alt-Wittenau ist eine historische Kirche"
    }
  },
  {
    "id": 5537,
    "name": "Humboldt-Bibliothek",
    "coordinates": { "lng": 13.280664721943513, "lat": 52.59194935 },
    "image": "/images/venues/5537.jpg",
    "description": {
      "es": "La Biblioteca Humboldt es una biblioteca que lleva el nombre de Alexander von Humboldt",
      "en": "The Humboldt Library is a library named after Alexander von Humboldt",
      "de": "Die Humboldt-Bibliothek ist eine nach Alexander von Humboldt benannte Bibliothek"
    }
  },
  {
    "id": 5273,
    "name": "Spaziergang durch das Gelände der Karl-Bonhoeffer-Nervenklinik",
    "coordinates": { "lng": 13.324613571166994, "lat": 52.58884038852387 },
    "image": "/images/venues/5273.jpg",
    "description": {
      "es": "Un paseo por el recinto de la Karl-Bonhoeffer-Nervenklinik ofrece probablemente una visión de la historia de la institución",
      "en": "A walk through the grounds of the Karl-Bonhoeffer-Nervenklinik probably offers insights into the history of the institution",
      "de": "Ein Spaziergang über das Gelände der Karl-Bonhoeffer-Nervenklinik bietet vermutlich Einblicke in die Geschichte der Einrichtung"
    }
  },
  {
    "id": 5308,
    "name": "Russisch-Orthodoxer Friedhof mit Kapelle",
    "coordinates": { "lng": 13.3015639, "lat": 52.5779859 },
    "image": "/images/venues/5308.jpg",
    "description": {
      "es": "El Cementerio Ortodoxo Ruso con Capilla es un cementerio religioso",
      "en": "The Russian Orthodox Cemetery with Chapel is a religious cemetery",
      "de": "Der russisch-orthodoxe Friedhof mit Kapelle ist ein religiöser Friedhof"
    }
  },
  {
    "id": 5372,
    "name": "Ev. Dorfkirche Alt-Reinickendorf",
    "coordinates": { "lng": 13.35213303565979, "lat": 52.57499295120519 },
    "image": "/images/venues/5372.jpg",
    "description": {
      "es": "La iglesia evangélica del pueblo de Alt-Reinickendorf es una iglesia histórica",
      "en": "The Evangelical Village Church in Alt-Reinickendorf is a historic church",
      "de": "Die Evangelische Dorfkirche in Alt-Reinickendorf ist eine historische Kirche"
    }
  },
  {
    "id": 5248,
    "name": "Schulfarm Insel Scharfenberg",
    "coordinates": { "lng": 13.246787621941355, "lat": 52.57495464527687 },
    "image": "/images/venues/5248.jpg",
    "description": {
      "es": "El Schulfarm Insel Scharfenberg es una institución educativa en una isla",
      "en": "The Schulfarm Insel Scharfenberg is an educational institution on an island",
      "de": "Die Schulfarm Insel Scharfenberg ist eine Bildungseinrichtung auf einer Insel"
    }
  },
  {
    "id": 5599,
    "name": "Gedenkstätte Historischer Ort Krumpuhler Weg",
    "coordinates": { "lng": 13.288669, "lat": 52.5748023 },
    "image": "/images/venues/5599.jpg",
    "description": {
      "es": "El monumento Historischer Ort Krumpuhler Weg probablemente conmemora acontecimientos o lugares históricos",
      "en": "The memorial Historischer Ort Krumpuhler Weg probably commemorates historical events or places",
      "de": "Die Gedenkstätte Historischer Ort Krumpuhler Weg erinnert wahrscheinlich an historische Ereignisse oder Orte"
    }
  },
  {
    "id": 5512,
    "name": "Kath. St.-Marien-Kirche",
    "coordinates": { "lng": 13.360549, "lat": 52.5744638 },
    "image": "/images/venues/5512.jpg",
    "description": {
      "es": "La iglesia católica de Santa María, un santuario espiritual con una rica historia en Berlín",
      "en": "St. Mary's Catholic Church, a spiritual sanctuary with a rich history in Berlin",
      "de": "Die katholische Kirche St. Marien, ein spirituelles Heiligtum mit einer reichen Geschichte in Berlin"
    }
  },
  {
    "id": 5435,
    "name": "Ateliermuseum der Bildhauerin Ruthild Hahne",
    "coordinates": { "lng": 13.391271800000027, "lat": 52.5739955 },
    "image": "/images/venues/5435.jpg",
    "description": {
      "es": "El Ateliermuseum der Bildhauerin Ruthild Hahne es un museo dedicado a las obras de una escultora",
      "en": "The Ateliermuseum der Bildhauerin Ruthild Hahne is a museum dedicated to the works of a sculptress",
      "de": "Das Ateliermuseum der Bildhauerin Ruthild Hahne ist ein Museum, das den Werken einer Bildhauerin gewidmet ist"
    }
  },
  {
    "id": 5310,
    "name": "Weiße Stadt",
    "coordinates": { "lng": 13.3516128, "lat": 52.5702042 },
    "image": "/images/venues/5310.jpg",
    "description": {
      "es": "La Ciudad Blanca, una urbanización modernista declarada Patrimonio de la Humanidad por la UNESCO, ejemplo de la arquitectura funcionalista de Berlín",
      "en": "The White City, a UNESCO-listed modernist housing estate, exemplifying functionalist architecture in Berlin",
      "de": "Die Weiße Stadt, eine von der UNESCO geschützte Wohnsiedlung der Moderne, ist ein Beispiel für funktionalistische Architektur in Berlin"
    }
  },
  {
    "id": 5471,
    "name": "Ev. Johannesstift Spandau",
    "coordinates": { "lng": 13.1988184, "lat": 52.5696034 },
    "image": "/images/venues/5471.jpg",
    "description": {
      "es": "Un complejo hospitalario histórico en Spandau, que ofrece atención médica y servicios sociales con una rica historia que se remonta al siglo XIX",
      "en": "A historic hospital complex in Spandau, providing medical care and social services with a rich history dating back to the 19th century",
      "de": "Ein historischer Krankenhauskomplex in Spandau, der medizinische Versorgung und soziale Dienste anbietet und dessen Geschichte bis ins 19. Jahrhundert zurückreicht"
    }
  },
  {
    "id": 5427,
    "name": "Dorfkirche Heinersdorf",
    "coordinates": { "lng": 13.4405274, "lat": 52.567149 },
    "image": "/images/venues/5427.jpg",
    "description": {
      "es": "Una encantadora iglesia de pueblo situada en Heinersdorf, un barrio de Berlín, conocido por su importancia histórica y arquitectónica",
      "en": "A charming village church located in Heinersdorf, a district of Berlin, known for its historical and architectural significance",
      "de": "Eine charmante Dorfkirche im Berliner Stadtteil Heinersdorf, die für ihre historische und architektonische Bedeutung bekannt ist"
    }
  },
  {
    "id": 5367,
    "name": "Villenkolonie Valentinswerder",
    "coordinates": { "lng": 13.229298591613771, "lat": 52.564860274509265 },
    "image": "/images/venues/5367.jpg",
    "description": {
      "es": "Una idílica colonia de villas situada en la isla Valentinswerder, que ofrece pintorescas vistas frente al mar y una visión de la arquitectura y el estilo de vida de principios del siglo XX",
      "en": "An idyllic villa colony situated on Valentinswerder Island, offering picturesque waterfront views and a glimpse into early 20th-century architecture and lifestyle",
      "de": "Eine idyllische Villenkolonie auf der Insel Valentinswerder, die einen malerischen Blick auf das Wasser bietet und einen Einblick in die Architektur und den Lebensstil des frühen 20"
    }
  },
  {
    "id": 5543,
    "name": "Kolonistenhaus von 1782 und die Kolonie an der Panke",
    "coordinates": { "lng": 13.3839458, "lat": 52.5643061 },
    "image": "/images/venues/5543.jpg",
    "description": {
      "es": "La Kolonistenhaus de 1782 y la Kolonie an der Panke son edificios históricos y un asentamiento junto al río Panke",
      "en": "The Kolonistenhaus from 1782 and the Kolonie an der Panke are historic buildings and a settlement along the river Panke",
      "de": "Das Kolonistenhaus von 1782 und die Kolonie an der Panke sind historische Gebäude und eine Siedlung an der Panke"
    }
  },
  {
    "id": 5377,
    "name": "Siedlung am Schillerpark",
    "coordinates": { "lng": 13.347304, "lat": 52.5606776 },
    "image": "/images/venues/5377.jpg",
    "description": {
      "es": "Una zona residencial cerca de Schillerpark, que muestra el urbanismo y la arquitectura de principios del siglo XX y permite echar un vistazo a las urbanizaciones históricas de Berlín",
      "en": "A residential area near Schillerpark, showcasing early 20th-century urban planning and architecture, providing a glimpse into Berlin's historic housing developments",
      "de": "Ein Wohngebiet in der Nähe des Schillerparks, das Stadtplanung und Architektur des frühen 20. Jahrhunderts zeigt und einen Einblick in die historische Wohnbebauung Berlins gibt"
    }
  },
  {
    "id": 5271,
    "name": "Ev. Stephanuskirche",
    "coordinates": { "lng": 13.386991705494504, "lat": 52.558746549999995 },
    "image": "/images/venues/5271.jpg",
    "description": {
      "es": "Una histórica iglesia protestante de Berlín, conocida por su importancia arquitectónica y su patrimonio cultural",
      "en": "A historic Protestant church in Berlin, known for its architectural significance and cultural heritage",
      "de": "Eine historische evangelische Kirche in Berlin, bekannt für ihre architektonische Bedeutung und ihr kulturelles Erbe"
    }
  },
  {
    "id": 5379,
    "name": "Hutfabrik Gattel",
    "coordinates": { "lng": 13.3853061, "lat": 52.5578993 },
    "image": "/images/venues/5379.jpg",
    "description": {
      "es": "Una antigua fábrica de sombreros en Berlín, históricamente significativa por su papel en el patrimonio industrial de la ciudad",
      "en": "A former hat manufacturing facility in Berlin, historically significant for its role in the city's industrial heritage",
      "de": "Eine ehemalige Hutmanufaktur in Berlin, die aufgrund ihrer Rolle in der Industriegeschichte der Stadt von historischer Bedeutung ist"
    }
  },
  {
    "id": 5321,
    "name": "Umspannwerk Christiania",
    "coordinates": { "lng": 13.3839152, "lat": 52.556229 },
    "image": "/images/venues/5321.jpg",
    "description": {
      "es": "Subestación eléctrica de Berlín, conocida por su papel en la distribución y gestión de la energía eléctrica en la ciudad",
      "en": "An electrical substation in Berlin, known for its role in distributing and managing electrical power in the city",
      "de": "Ein elektrisches Umspannwerk in Berlin, bekannt für seine Rolle bei der Verteilung und Verwaltung der elektrischen Energie in der Stadt"
    }
  },
  {
    "id": 5283,
    "name": "Überreste des Kurbades Luisenbad",
    "coordinates": { "lng": 13.379496221905537, "lat": 52.55361395 },
    "image": "/images/venues/5283.jpg",
    "description": {
      "es": "Estos son los restos del histórico balneario Luisenbad, un establecimiento de baño y bienestar antaño prominente en Berlín",
      "en": "These are the remnants of the historic Luisenbad spa, a once-prominent bathing and wellness establishment in Berlin",
      "de": "Das sind die Überreste des historischen Luisenbades, einer einst bedeutenden Bade- und Wellnesseinrichtung in Berlin"
    }
  },
  {
    "id": 5415,
    "name": "Straßenbahnbetriebshof Gesundbrunnen – Uferstudios",
    "coordinates": { "lng": 13.3773698, "lat": 52.5533894 },
    "image": "/images/venues/5415.jpg",
    "description": {
      "es": "Esta ubicación incluye las cocheras de tranvía de Gesundbrunnen, que albergan los Uferstudios. Los Uferstudios son conocidos por su papel en las artes, proporcionando un espacio para diversas actividades creativas y actuaciones",
      "en": "This location includes the Gesundbrunnen tram depot, which houses the Uferstudios. The Uferstudios are known for their role in the arts, providing a space for various creative activities and performances",
      "de": "Zu diesem Standort gehört das Straßenbahndepot Gesundbrunnen, in dem die Uferstudios untergebracht sind. Die Uferstudios sind bekannt für ihre Rolle in der Kunst und bieten Raum für verschiedene kreative Aktivitäten und Aufführungen"
    }
  },
  {
    "id": 5278,
    "name": "Straßenbahnbetriebshof Gesundbrunnen – Uferhallen",
    "coordinates": { "lng": 13.37416747167497, "lat": 52.55262105 },
    "image": "/images/venues/5278.jpg",
    "description": {
      "es": "En este sitio se encuentran las cocheras de tranvía de Gesundbrunnen, que albergan las Uferhallen. El Uferhallen sirve como lugar cultural y artístico, ofreciendo un espacio para exposiciones, actuaciones y eventos creativos",
      "en": "This site features the Gesundbrunnen tram depot, which is home to the Uferhallen. The Uferhallen serve as a cultural and artistic venue, offering a space for exhibitions, performances, and creative events",
      "de": "Auf dieser Seite befindet sich das Straßenbahndepot Gesundbrunnen, in dem die Uferhallen untergebracht sind. Die Uferhallen dienen als kultureller und künstlerischer Treffpunkt und bieten Raum für Ausstellungen, Aufführungen und kreative Veranstaltungen"
    }
  },
  {
    "id": 5461,
    "name": "Wohnanlage Afrikanische Straße von Ludwig Mies van der Rohe",
    "coordinates": { "lng": 13.3380141, "lat": 52.5517747 },
    "image": "/images/venues/5461.jpg",
    "description": {
      "es": "Icónica vivienda modernista diseñada por Mies van der Rohe",
      "en": "Iconic modernist housing designed by Mies van der Rohe",
      "de": "Ikonisches modernistisches Wohnhaus, entworfen von Mies van der Rohe"
    }
  },
  {
    "id": 5398,
    "name": ".GUT Am Flughafen 1",
    "coordinates": { "lng": 13.286247253417969, "lat": 52.55172368081563 },
    "image": "/images/venues/5398.jpg",
    "description": {
      "es": "Sitio histórico con patrimonio aeronáutico",
      "en": "Historic site with aviation heritage",
      "de": "Historischer Ort mit Luftfahrtgeschichte"
    }
  },
  {
    "id": 5523,
    "name": "werkstatt denkmal: Filmvorführung zu Oscar Blumenthal",
    "coordinates": { "lng": 13.44146668066886, "lat": 52.5508886 },
    "image": "/images/venues/5523.jpg",
    "description": {
      "es": "Proyección de una película sobre Oscar Blumenthal",
      "en": "The werkstatt denkmal could screen a film about Oscar Blumenthal, possibly a historic building or workshop specializing in historic preservation.spezialisiert ist",
      "de": "Filmvorführung über Oscar Blumenthal"
    }
  },
  {
    "id": 5506,
    "name": "Flughafen Tegel",
    "coordinates": { "lng": 13.29798460006714, "lat": 52.55002750815312 },
    "image": "/images/venues/5506.jpg",
    "description": {
      "es": " Antiguo aeropuerto conocido por el diseño hexagonal de su terminal",
      "en": "Former airport known for its hexagonal terminal design",
      "de": " Ehemaliger Flughafen, bekannt für sein sechseckiges Terminaldesign"
    }
  },
  {
    "id": 5351,
    "name": "Haus Lemke",
    "coordinates": { "lng": 13.490528696694309, "lat": 52.54916165 },
    "image": "/images/venues/5351.jpg",
    "description": {
      "es": "Villa modernista diseñada por Mies van der Rohe",
      "en": "Modernist villa designed by Mies van der Rohe",
      "de": "Modernistische Villa von Mies van der Rohe"
    }
  },
  {
    "id": 5318,
    "name": "Gutshaus Hohenschönhausen",
    "coordinates": { "lng": 13.5056415, "lat": 52.5490056 },
    "image": "/images/venues/5318.jpg",
    "description": {
      "es": "Una casa solariega histórica en Hohenschönhausen",
      "en": "A historic manor house in Hohenschönhausen",
      "de": "Ein historisches Herrenhaus in Hohenschönhausen"
    }
  },
  {
    "id": 5429,
    "name": "Atelierhaus Wiesenstraße 29",
    "coordinates": { "lng": 13.371528000000012, "lat": 52.548638 },
    "image": "/images/venues/5429.jpg",
    "description": {
      "es": "Un estudio de arte y residencia en la Wiesenstraße 29",
      "en": "An art studio and residence on Wiesenstraße 29",
      "de": "Ein Kunstatelier und Wohnhaus in der Wiesenstraße 29"
    }
  },
  {
    "id": 5392,
    "name": "Gethsemanekirche",
    "coordinates": { "lng": 13.416479999999979, "lat": 52.54777 },
    "image": "/images/venues/5392.jpg",
    "description": {
      "es": "Iglesia histórica conocida por su papel en la revolución pacífica",
      "en": "Historic church known for its role in the peaceful revolution",
      "de": "Historische Kirche, bekannt für ihre Rolle in der friedlichen Revolution"
    }
  },
  {
    "id": 5309,
    "name": "Wohnstadt Carl-Legien",
    "coordinates": { "lng": 13.4335178, "lat": 52.546475 },
    "image": "/images/venues/5309.jpg",
    "description": {
      "es": "Un complejo residencial diseñado para los trabajadores",
      "en": "A residential complex designed for workers",
      "de": "Ein Wohnkomplex für Arbeiter"
    }
  },
  {
    "id": 5436,
    "name": "Ulis Museumsladen",
    "coordinates": { "lng": 13.2081599, "lat": 52.5463577 },
    "image": "/images/venues/5436.jpg",
    "description": {
      "es": "Una tienda museo que ofrece recuerdos únicos de Berlín",
      "en": "A museum shop offering unique Berlin memorabilia",
      "de": "Ein Museumsshop mit einzigartigen Berliner Erinnerungsstücken"
    }
  },
  {
    "id": 5470,
    "name": "Krematorium Wedding",
    "coordinates": { "lng": 13.3665464, "lat": 52.5460293 },
    "image": "/images/venues/5470.jpg",
    "description": {
      "es": "Crematorio del distrito de bodas conocido por su arquitectura",
      "en": "Wedding district's crematorium known for its architecture",
      "de": "Das Krematorium des Bezirks Wedding ist für seine Architektur bekannt"
    }
  },
  {
    "id": 5492,
    "name": "Friedhof der Jüdischen Gemeinde",
    "coordinates": { "lng": 13.4579698, "lat": 52.5453542 },
    "image": "/images/venues/5492.jpg",
    "description": {
      "es": "Cementerio con importante patrimonio judío",
      "en": "Cemetery with significant Jewish heritage",
      "de": "Friedhof mit bedeutendem jüdischen Erbe"
    }
  },
  {
    "id": 5331,
    "name": "Bremer Höhe",
    "coordinates": { "lng": 13.4130222, "lat": 52.5448265 },
    "image": "/images/venues/5331.jpg",
    "description": {
      "es": "Una localidad con vistas panorámicas y espacios verdes",
      "en": "A locality with scenic views and green spaces",
      "de": "Ein Ort mit schönen Aussichten und Grünflächen"
    }
  },
  {
    "id": 5457,
    "name": "Kath. St.-Joseph-Kirche",
    "coordinates": { "lng": 13.363026499999933, "lat": 52.5440901 },
    "image": "/images/venues/5457.jpg",
    "description": {
      "es": "Iglesia católica conocida por su bella arquitectura",
      "en": "Catholic church known for its beautiful architecture",
      "de": "Katholische Kirche, bekannt für ihre schöne Architektur"
    }
  },
  {
    "id": 5511,
    "name": "Reichsforschungssiedlung Haselhorst",
    "coordinates": { "lng": 13.2361878, "lat": 52.5440575 },
    "image": "/images/venues/5511.jpg",
    "description": {
      "es": "El Reichsforschungssiedlung Haselhorst es probablemente un asentamiento histórico de la época del Imperio Alemán",
      "en": "The Reichsforschungssiedlung Haselhorst is probably a historical settlement from the time of the German Empire",
      "de": "Die Reichsforschungssiedlung Haselhorst ist wahrscheinlich eine historische Siedlung aus der Zeit des Deutschen Reiches"
    }
  },
  {
    "id": 5540,
    "name": "Zimmermeister Brunzel – Bauen und Wohnen in Prenzlauer Berg um 1900",
    "coordinates": { "lng": 13.4214133, "lat": 52.543528 },
    "image": "/images/venues/5540.jpg",
    "description": {
      "es": "Explorar la arquitectura y la vida en Prenzlauer Berg en torno a 1900",
      "en": "Exploring architecture and living in Prenzlauer Berg around 1900",
      "de": "Architektur und Wohnen im Prenzlauer Berg um 1900 erkunden"
    }
  },
  {
    "id": 5274,
    "name": "Maschinenfabrik Richard Heike – Villa Heike",
    "coordinates": { "lng": 13.49843170012404, "lat": 52.54256685 },
    "image": "/images/venues/5274.jpg",
    "description": {
      "es": "La fábrica de máquinas Heike y Villa Heike",
      "en": "The Heike Machine Factory and Villa Heike",
      "de": "Die Maschinenfabrik Heike und die Villa Heike"
    }
  },
  {
    "id": 5587,
    "name": "werkstatt denkmal: Erforschung der Architektur- und Wohngeschichte im Mühlenkiezviertel",
    "coordinates": { "lng": 13.440864, "lat": 52.5418164 },
    "image": "/images/venues/5587.jpg",
    "description": {
      "es": " Investigación de la historia arquitectónica y de la vivienda en el Mühlenkiezviertel",
      "en": " Investigating the architectural and housing history in the Mühlenkiezviertel",
      "de": " Erkundung der Bau- und Wohngeschichte im Mühlenkiez"
    }
  },
  {
    "id": 5320,
    "name": "Stasi-Gefängnis Hohenschönhausen",
    "coordinates": { "lng": 13.5001488, "lat": 52.5416286 },
    "image": "/images/venues/5320.jpg",
    "description": {
      "es": "La prisión de la Stasi de Hohenschönhausen es un monumento a las víctimas de la persecución política en la RDA",
      "en": "The Hohenschönhausen Stasi Prison is a memorial to the victims of political persecution in the GDR",
      "de": "Das Stasi-Gefängnis Hohenschönhausen ist eine Gedenkstätte für die Opfer der politischen Verfolgung in der DDR"
    }
  },
  {
    "id": 5336,
    "name": "Ev. Osterkirche",
    "coordinates": { "lng": 13.354631780983034, "lat": 52.5415451 },
    "image": "/images/venues/5336.jpg",
    "description": {
      "es": "Un cautivador lugar de culto con impresionantes características arquitectónicas y significado espiritual",
      "en": "A captivating place of worship with stunning architectural features and spiritual significance",
      "de": "Ein fesselndes Gotteshaus mit beeindruckenden architektonischen Merkmalen und spiritueller Bedeutung"
    }
  },
  {
    "id": 5526,
    "name": "Ev. Christophoruskirche",
    "coordinates": { "lng": 13.2668221, "lat": 52.5414006 },
    "image": "/images/venues/5526.jpg",
    "description": {
      "es": "Iglesia de gran riqueza histórica reconocida por su diseño único y su patrimonio cultural",
      "en": "Historically rich church renowned for its unique design and cultural heritage",
      "de": "Geschichtsträchtige Kirche, bekannt für ihre einzigartige Gestaltung und ihr kulturelles Erbe"
    }
  },
  {
    "id": 5364,
    "name": "St. Elisabeth-Stift",
    "coordinates": { "lng": 13.409149200000002, "lat": 52.5410802 },
    "image": "/images/venues/5364.jpg",
    "description": {
      "es": "Institución vital en Berlín, que ofrece servicios esenciales y fomenta el bienestar de la comunidad",
      "en": "Vital institution in Berlin, offering essential services and fostering community well-being",
      "de": "Wichtige Institution in Berlin, die wichtige Dienstleistungen anbietet und das Wohlbefinden der Gemeinschaft fördert"
    }
  },
  {
    "id": 5525,
    "name": "Zitadelle Spandau",
    "coordinates": { "lng": 13.211316235636957, "lat": 52.5410528 },
    "image": "/images/venues/5525.jpg",
    "description": {
      "es": "Notable fortaleza histórica convertida en centro cultural, que acoge exposiciones y actos culturales",
      "en": "Remarkable historical fortress turned cultural hub, hosting exhibitions and cultural events",
      "de": "Bemerkenswerte historische Festung, die zum kulturellen Zentrum geworden ist und Ausstellungen und kulturelle Veranstaltungen beherbergt"
    }
  },
  {
    "id": 5464,
    "name": "Kath. Gedenkkirche Maria-Regina Martyrum",
    "coordinates": { "lng": 13.298481014374644, "lat": 52.54035135 },
    "image": "/images/venues/5464.jpg",
    "description": {
      "es": "Tiene un gran significado religioso e histórico en Berlín",
      "en": "Holds great religious and historical significance in Berlin",
      "de": "Hat in Berlin eine große religiöse und historische Bedeutung"
    }
  },
  {
    "id": 5465,
    "name": "Ev. Gedenkkirche im Gemeindezentrum Plötzensee",
    "coordinates": { "lng": 13.300074247060937, "lat": 52.53982345 },
    "image": "/images/venues/5465.jpg",
    "description": {
      "es": "Un lugar para la contemplación y el homenaje al pasado",
      "en": "A place for contemplation and honoring the past",
      "de": "Ein Ort der Besinnung und des Gedenkens an die Vergangenheit"
    }
  },
  {
    "id": 5317,
    "name": "Großsiedlung Siemensstadt (Ringsiedlung)",
    "coordinates": { "lng": 13.276548385620119, "lat": 52.53956197771845 },
    "image": "/images/venues/5317.jpg",
    "description": {
      "es": "Distinguido complejo arquitectónico célebre por su diseño innovador y su relevancia histórica",
      "en": "Distinguished architectural complex celebrated for its innovative design and historical relevance",
      "de": "Herausragender architektonischer Komplex, der für sein innovatives Design und seine historische Bedeutung gefeiert wird"
    }
  },
  {
    "id": 5263,
    "name": "Fahrradtour zu Bauten Hermann Blankensteins",
    "coordinates": { "lng": 13.419203390164899, "lat": 52.5391082 },
    "image": "/images/venues/5263.jpg",
    "description": {
      "es": "Explora el legado arquitectónico de Hermann Blankenstein en esta excursión en bicicleta",
      "en": "Explore the architectural legacy of Hermann Blankenstein on this cycling tour",
      "de": "Entdecken Sie das architektonische Erbe von Hermann Blankenstein auf dieser Radtour"
    }
  },
  {
    "id": 5433,
    "name": "Spandovia Sacra – Museum von St. Nikolai Spandau",
    "coordinates": { "lng": 13.2054986, "lat": 52.5387075 },
    "image": "/images/venues/5433.jpg",
    "description": {
      "es": "Un museo dentro de la iglesia de San Nikolai, que ahonda en la historia sagrada de Spandau",
      "en": "A museum within St. Nikolai Church, delving into the sacred history of Spandau",
      "de": "Ein Museum in der St. Nikolai-Kirche, das in die sakrale Geschichte von Spandau eintaucht"
    }
  },
  {
    "id": 5266,
    "name": "Schultheiss Brauerei",
    "coordinates": { "lng": 13.414199352264406, "lat": 52.53813288687508 },
    "image": "/images/venues/5266.jpg",
    "description": {
      "es": "El antiguo emplazamiento de una fábrica de cerveza se transforma en un vibrante centro cultural y de ocio",
      "en": "Former brewery site transformed into a vibrant cultural and entertainment center",
      "de": "Ehemaliges Brauereigelände wird zu einem lebendigen Kultur- und Unterhaltungszentrum"
    }
  },
  {
    "id": 5432,
    "name": "Ev. St. Nikolai-Kirche",
    "coordinates": { "lng": 13.2053512, "lat": 52.5379547 },
    "image": "/images/venues/5432.jpg",
    "description": {
      "es": "Una iglesia histórica conocida por su importancia religiosa y su belleza arquitectónica",
      "en": "A historic church known for its religious significance and architectural beauty",
      "de": "Eine historische Kirche, bekannt für ihre religiöse Bedeutung und architektonische Schönheit"
    }
  },
  {
    "id": 5322,
    "name": "Stadtbad Oderberger Straße",
    "coordinates": { "lng": 13.41052953267133, "lat": 52.537814749999995 },
    "image": "/images/venues/5322.jpg",
    "description": {
      "es": "Una impresionante casa de baños convertida en un cautivador espacio cultural",
      "en": "A stunning bathhouse turned into a captivating cultural venue",
      "de": "Ein beeindruckendes Badehaus, das sich in einen faszinierenden kulturellen Ort verwandelt hat"
    }
  },
  {
    "id": 5519,
    "name": "Wohnung Hans Scharoun",
    "coordinates": { "lng": 13.2728369, "lat": 52.5374906 },
    "image": "/images/venues/5519.jpg",
    "description": {
      "es": "Descubra el diseño residencial único del arquitecto Hans Scharoun",
      "en": "Discover the unique residential design of architect Hans Scharoun",
      "de": "Entdecken Sie das einzigartige Wohndesign des Architekten Hans Scharoun"
    }
  },
  {
    "id": 5565,
    "name": "Magazin Westhafen (ehem. Getreidespeicher)",
    "coordinates": { "lng": 13.3417491, "lat": 52.5369734 },
    "image": "/images/venues/5565.jpg",
    "description": {
      "es": "Antiguo silo de grano reconvertido en moderna revista y espacio para eventos",
      "en": "Former grain silo converted into a modern magazine and event space",
      "de": "Ehemaliges Getreidesilo, umgebaut zu einem modernen Magazin und Veranstaltungsraum"
    }
  },
  {
    "id": 5330,
    "name": "Elektropolis Siemensstadt",
    "coordinates": { "lng": 13.272600173950197, "lat": 52.536690697815764 },
    "image": "/images/venues/5330.jpg",
    "description": {
      "es": "Explore la electrizante historia de Siemensstadt y sus innovaciones industriales",
      "en": "Explore Siemensstadt's electrifying history and industrial innovations",
      "de": "Entdecken Sie die elektrisierende Geschichte und die industriellen Innovationen von Siemensstadt"
    }
  },
  {
    "id": 5593,
    "name": "Litfaßsäulen am Kollwitzplatz",
    "coordinates": { "lng": 13.418190479278566, "lat": 52.536573232367104 },
    "image": "/images/venues/5593.jpg",
    "description": {
      "es": "Icónicas columnas publicitarias en la encantadora zona de Kollwitzplatz",
      "en": "Iconic advertising columns in the charming Kollwitzplatz area",
      "de": "Ikonische Litfaßsäulen in der charmanten Gegend um den Kollwitzplatz"
    }
  },
  {
    "id": 5361,
    "name": "Atelierwohnung Hans Scharoun",
    "coordinates": { "lng": 13.2818876, "lat": 52.536131 },
    "image": "/images/venues/5361.jpg",
    "description": {
      "es": "Visite el apartamento-estudio diseñado por el renombrado arquitecto Hans Scharoun",
      "en": "Visit the apartment-studio designed by renowned architect Hans Scharoun",
      "de": "Besuchen Sie das von dem bekannten Architekten Hans Scharoun entworfene Appartement-Atelier"
    }
  },
  {
    "id": 5324,
    "name": "Ev. Segenskirche mit Stadtkloster",
    "coordinates": { "lng": 13.4119927, "lat": 52.5360635 },
    "image": "/images/venues/5324.jpg",
    "description": {
      "es": "La Segenskirche, con su monasterio urbano, ofrece un tranquilo retiro espiritual",
      "en": "The Segenskirche with its urban monastery offers a tranquil spiritual retreat",
      "de": "Die Segenskirche mit ihrem Stadtkloster bietet einen ruhigen spirituellen Rückzugsort"
    }
  },
  {
    "id": 5326,
    "name": "Gedenkort Güterbahnhof Moabit",
    "coordinates": { "lng": 13.353474140167238, "lat": 52.53548992508325 },
    "image": "/images/venues/5326.jpg",
    "description": {
      "es": "Un lugar conmemorativo en Moabit Freight Yard en honor a las víctimas del Holocausto",
      "en": "A memorial site at Moabit Freight Yard honoring Holocaust victims",
      "de": "Gedenkstätte im Güterbahnhof Moabit zu Ehren der Opfer des Holocaust"
    }
  },
  {
    "id": 5437,
    "name": "Zionskirche",
    "coordinates": { "lng": 13.403985500335695, "lat": 52.53413249027725 },
    "image": "/images/venues/5437.jpg",
    "description": {
      "es": "Una iglesia emblemática conocida por su llamativa arquitectura y sus vibrantes actos culturales",
      "en": "An iconic church known for its striking architecture and vibrant cultural events",
      "de": "Eine ikonische Kirche, die für ihre beeindruckende Architektur und ihre lebendigen kulturellen Veranstaltungen bekannt ist"
    }
  },
  {
    "id": 5466,
    "name": "Nordbahnhof",
    "coordinates": { "lng": 13.387445935261194, "lat": 52.5337903 },
    "image": "/images/venues/5466.jpg",
    "description": {
      "es": "Una estación de tren histórica con un rico pasado, ahora transformada en monumento conmemorativo y museo",
      "en": "A historic train station with a rich past, now transformed into a memorial and museum",
      "de": "Ein historischer Bahnhof mit einer reichen Vergangenheit, der jetzt in eine Gedenkstätte und ein Museum umgewandelt wurde"
    }
  },
  {
    "id": 5438,
    "name": "Gedenkstätte Günter Litfin",
    "coordinates": { "lng": 13.369535207748415, "lat": 52.5335190203953 },
    "image": "/images/venues/5438.jpg",
    "description": {
      "es": "Conmemoración de Günter Litfin, primera víctima del Muro de Berlín",
      "en": "Commemorating Günter Litfin, the first victim of the Berlin Wall",
      "de": "Zum Gedenken an Günter Litfin, das erste Opfer der Berliner Mauer"
    }
  },
  {
    "id": 5391,
    "name": "Ev. Immanuelkirche",
    "coordinates": { "lng": 13.42156, "lat": 52.53311 },
    "image": "/images/venues/5391.jpg",
    "description": {
      "es": "Una hermosa iglesia conocida por sus servicios espirituales y su compromiso con la comunidad",
      "en": "A beautiful church known for its spiritual services and community engagement",
      "de": "Eine schöne Kirche, bekannt für ihre Gottesdienste und ihr Engagement in der Gemeinde"
    }
  },
  {
    "id": 5469,
    "name": "Schneiders Brauerei im Schweizer Garten",
    "coordinates": { "lng": 13.4281278, "lat": 52.531759 },
    "image": "/images/venues/5469.jpg",
    "description": {
      "es": "Una antigua fábrica de cerveza en Schweizer Garten que ofrece un sabor a historia",
      "en": "A former brewery in Schweizer Garten offering a taste of history",
      "de": "Eine ehemalige Brauerei im Schweizer Garten bietet einen Hauch von Geschichte"
    }
  },
  {
    "id": 5334,
    "name": "Brauerei Pfefferberg",
    "coordinates": { "lng": 13.4118347, "lat": 52.5314861 },
    "image": "/images/venues/5334.jpg",
    "description": {
      "es": "Explore la fábrica de cerveza Pfefferberg, ahora un centro cultural con arte, restaurantes y mucho más",
      "en": "Explore the Pfefferberg Brewery, now a cultural hub with art, dining, and more",
      "de": "Erkunden Sie die Pfefferberg-Brauerei, die heute ein kulturelles Zentrum mit Kunst, Gastronomie und mehr ist"
    }
  },
  {
    "id": 5300,
    "name": "Jüdisches Kinderheim",
    "coordinates": { "lng": 13.4080798, "lat": 52.5313873 },
    "image": "/images/venues/5300.jpg",
    "description": {
      "es": "Visite el orfanato judío para conocer su conmovedora historia",
      "en": "Visit the Jewish orphanage to learn about its poignant history",
      "de": "Besuchen Sie das jüdische Waisenhaus und erfahren Sie mehr über seine bewegende Geschichte"
    }
  },
  {
    "id": 5517,
    "name": "Kath. Herz-Jesu-Kirche",
    "coordinates": { "lng": 13.409563061163366, "lat": 52.5306577 },
    "image": "/images/venues/5517.jpg",
    "description": {
      "es": "Una iglesia católica conocida por su importancia religiosa y su belleza arquitectónica",
      "en": "A Catholic church known for its religious significance and architectural beauty",
      "de": "Eine katholische Kirche, die für ihre religiöse Bedeutung und architektonische Schönheit bekannt ist"
    }
  },
  {
    "id": 5449,
    "name": "Ev. Heilige-Geist-Kirche",
    "coordinates": { "lng": 13.346543312072754, "lat": 52.53061797491791 },
    "image": "/images/venues/5449.jpg",
    "description": {
      "es": "Descubra el significado espiritual y las actividades comunitarias de esta iglesia",
      "en": "Discover the spiritual significance and community activities of this church",
      "de": "Entdecken Sie die spirituelle Bedeutung und die gemeinschaftlichen Aktivitäten dieser Kirche"
    }
  },
  {
    "id": 5612,
    "name": "Museum für Naturkunde Berlin",
    "coordinates": { "lng": 13.379432878573652, "lat": 52.53013898332125 },
    "image": "/images/venues/5612.jpg",
    "description": {
      "es": "Explora la historia natural de Berlín en este museo de renombre",
      "en": "Explore Berlin's natural history in this renowned museum",
      "de": "Entdecken Sie die Naturgeschichte Berlins in diesem renommierten Museum"
    }
  },
  {
    "id": 5414,
    "name": "Friedhof I der Ev. Georgen-Parochialgemeinde",
    "coordinates": { "lng": 13.424499034881594, "lat": 52.52898952008052 },
    "image": "/images/venues/5414.jpg",
    "description": {
      "es": "Un cementerio histórico con lápidas fascinantes",
      "en": "A historic cemetery with fascinating tombstones",
      "de": "Ein historischer Friedhof mit faszinierenden Grabsteinen"
    }
  },
  {
    "id": 5459,
    "name": "Vom Marienheim zum Sprachenkonvikt",
    "coordinates": { "lng": 13.390939235687256, "lat": 52.52897646609038 },
    "image": "/images/venues/5459.jpg",
    "description": {
      "es": "Conozca la transformación de Marienheim en un seminario de idiomas",
      "en": "Learn about the transformation of Marienheim into a language seminary",
      "de": "Erfahren Sie mehr über die Umwandlung des Marienheims in ein Sprachseminar"
    }
  },
  {
    "id": 5406,
    "name": "Alter Friedhof der St. Nikolai- und St. Mariengemeinde",
    "coordinates": { "lng": 13.4179988, "lat": 52.5286962 },
    "image": "/images/venues/5406.jpg",
    "description": {
      "es": "Descubre la historia de este antiguo cementerio",
      "en": "Discover the history of this old cemetery",
      "de": "Entdecken Sie die Geschichte dieses alten Friedhofs"
    }
  },
  {
    "id": 5515,
    "name": "Kath. St.-Adalbert-Kirche",
    "coordinates": { "lng": 13.395734816259875, "lat": 52.528485450000005 },
    "image": "/images/venues/5515.jpg",
    "description": {
      "es": "Visite esta iglesia católica conocida por su importancia religiosa",
      "en": "Visit this Catholic church known for its religious significance",
      "de": "Besuchen Sie diese katholische Kirche, die für ihre religiöse Bedeutung bekannt ist"
    }
  },
  {
    "id": 5272,
    "name": "Dorotheenstädtischer Friedhof I",
    "coordinates": { "lng": 13.383944034576418, "lat": 52.5284281950004 },
    "image": "/images/venues/5272.jpg",
    "description": {
      "es": "Explore el lugar de descanso de figuras prominentes de la historia de Berlín",
      "en": "Explore the resting place of prominent figures in Berlin's history",
      "de": "Erkunden Sie die Ruhestätten prominenter Persönlichkeiten der Berliner Geschichte"
    }
  },
  {
    "id": 5307,
    "name": "Ev. Gustav-Adolf-Kirche",
    "coordinates": { "lng": 13.298942233389262, "lat": 52.52833465 },
    "image": "/images/venues/5307.jpg",
    "description": {
      "es": "Una hermosa iglesia con una rica historia de fe y comunidad",
      "en": "A beautiful church with a rich history of faith and community",
      "de": "Eine schöne Kirche mit einer reichen Geschichte des Glaubens und der Gemeinschaft"
    }
  },
  {
    "id": 5319,
    "name": "Alter Garnisonfriedhof",
    "coordinates": { "lng": 13.4032601, "lat": 52.5282304 },
    "image": "/images/venues/5319.jpg",
    "description": {
      "es": "Conozca la historia de este antiguo cementerio de guarnición",
      "en": "Learn about the history of this former garrison cemetery",
      "de": "Erfahren Sie mehr über die Geschichte dieses ehemaligen Garnisonsfriedhofs"
    }
  },
  {
    "id": 5613,
    "name": "Denkmaltour: Märchenbrunnen im Volkspark Friedrichshain",
    "coordinates": { "lng": 13.425679206848146, "lat": 52.528101839911606 },
    "image": "/images/venues/5613.jpg",
    "description": {
      "es": "Fuente de cuento de hadas en Volkspark Friedrichshain",
      "en": "Take a tour of the charming Fairy Tale Fountain in the park",
      "de": "Märchenbrunnen im Volkspark Friedrichshain"
    }
  },
  {
    "id": 5269,
    "name": "Museum Kesselhaus Herzberge",
    "coordinates": { "lng": 13.512033412808368, "lat": 52.5279507 },
    "image": "/images/venues/5269.jpg",
    "description": {
      "es": "Descubre la historia industrial conservada en este museo",
      "en": "Discover the industrial history preserved in this museum",
      "de": "Entdecken Sie die Industriegeschichte, die in diesem Museum bewahrt wird"
    }
  },
  {
    "id": 5575,
    "name": "Ehem. Zentralvieh- und Schlachthof Berlin",
    "coordinates": { "lng": 13.4548751, "lat": 52.5272669 },
    "image": "/images/venues/5575.jpg",
    "description": {
      "es": "Explore la historia de la antigua central ganadera y matadero de Berlín",
      "en": "Explore the history of Berlin's former central livestock and slaughterhouse",
      "de": "Erkunden Sie die Geschichte des ehemaligen zentralen Vieh- und Schlachthofs von Berlin"
    }
  },
  {
    "id": 5315,
    "name": "Weltfriedensglocke Berlin im Volkspark Friedrichshain",
    "coordinates": { "lng": 13.434172530935712, "lat": 52.52693220017775 },
    "image": "/images/venues/5315.jpg",
    "description": {
      "es": "Visita la Campana de la Paz Mundial en el parque de Friedrichshain",
      "en": "Visit the World Peace Bell in Friedrichshain Park",
      "de": "Besuchen Sie die Weltfriedensglocke im Friedrichshainer Park"
    }
  },
  {
    "id": 5580,
    "name": "Auf einem Spaziergang durch Mitte",
    "coordinates": { "lng": 13.411495685577394, "lat": 52.52677681334118 },
    "image": "/images/venues/5580.jpg",
    "description": {
      "es": "Dé un paseo por el distrito central de Berlín para vivir una experiencia única",
      "en": "Take a stroll through Berlin's central district for a unique experience",
      "de": "Ein Spaziergang durch Berlins Mitte ist ein einzigartiges Erlebnis"
    }
  },
  {
    "id": 5545,
    "name": "U144 Untergrundmuseum",
    "coordinates": { "lng": 13.390787617432439, "lat": 52.52674575 },
    "image": "/images/venues/5545.jpg",
    "description": {
      "es": "Descubre la fascinante historia subterránea en el Museo Subterráneo U144",
      "en": "Discover fascinating underground history at U144 Underground Museum",
      "de": "Entdecken Sie die faszinierende unterirdische Geschichte im U144 Underground Museum"
    }
  },
  {
    "id": 5509,
    "name": "Sophienkirche",
    "coordinates": { "lng": 13.3990178, "lat": 52.5255879 },
    "image": "/images/venues/5509.jpg",
    "description": {
      "es": "Visite esta iglesia histórica conocida por su importancia arquitectónica y cultural",
      "en": "Visit this historic church known for its architectural and cultural significance",
      "de": "Besuchen Sie diese historische Kirche, die für ihre architektonische und kulturelle Bedeutung bekannt ist"
    }
  },
  {
    "id": 5581,
    "name": "SPANDAU: Traditionsfahrt auf den historischen Buslinien 31 und 80",
    "coordinates": { "lng": 13.24127197265625, "lat": 52.52551702194672 },
    "image": "/images/venues/5581.jpg",
    "description": {
      "es": "Paseo tradicional en las históricas líneas de autobús 31 y 80",
      "en": "Experience the charm of Spandau on historic bus routes",
      "de": "Traditionelle Fahrt mit den historischen Buslinien 31 und 80"
    }
  },
  {
    "id": 5365,
    "name": "Haus Dittmar",
    "coordinates": { "lng": 13.600256617732803, "lat": 52.52507115 },
    "image": "/images/venues/5365.jpg",
    "description": {
      "es": "Explore la importancia histórica de la Casa Dittmar",
      "en": "Explore the historical significance of Dittmar House",
      "de": "Erkunden Sie die historische Bedeutung des Dittmar-Hauses"
    }
  },
  {
    "id": 5494,
    "name": "Neue Synagoge Berlin – Centrum Judaicum",
    "coordinates": { "lng": 13.394168615341187, "lat": 52.52485773847275 },
    "image": "/images/venues/5494.jpg",
    "description": {
      "es": "Conozca la historia y la cultura judías en la Nueva Sinagoga",
      "en": "Learn about Jewish history and culture at the New Synagogue",
      "de": "Lernen Sie die jüdische Geschichte und Kultur in der Neuen Synagoge kennen"
    }
  },
  {
    "id": 5299,
    "name": "Ökumenische Gedenkstätte für Genozidopfer im Osmanischen Reich",
    "coordinates": { "lng": 13.279166221618654, "lat": 52.52485121086412 },
    "image": "/images/venues/5299.jpg",
    "description": {
      "es": "Homenaje a las víctimas de los genocidios del Imperio Otomano",
      "en": "Pay tribute to the victims of the Ottoman Empire's genocides",
      "de": "Den Opfern der Völkermorde des Osmanischen Reiches Tribut zollen"
    }
  },
  {
    "id": 5572,
    "name": "Das Kasernenviertel in Berlin-Moabit",
    "coordinates": { "lng": 13.36015820503235, "lat": 52.524289832893764 },
    "image": "/images/venues/5572.jpg",
    "description": {
      "es": "Descubre la historia militar del barrio Moabit de Berlín",
      "en": "Discover the military history of Berlin's Moabit district",
      "de": "Entdecken Sie die Militärgeschichte des Berliner Stadtteils Moabit"
    }
  },
  {
    "id": 5247,
    "name": "Lernort Keibelstraße",
    "coordinates": { "lng": 13.4162252, "lat": 52.5241658 },
    "image": "/images/venues/5247.jpg",
    "description": {
      "es": "Un lugar de aprendizaje y recuerdo dedicado a las víctimas de la persecución nazi",
      "en": "A place of learning and remembrance dedicated to the victims of Nazi persecution",
      "de": "Ein Ort des Lernens und des Gedenkens, der den Opfern der nationalsozialistischen Verfolgung gewidmet ist"
    }
  },
  {
    "id": 5591,
    "name": "Friedhof der Märzgefallenen",
    "coordinates": { "lng": 13.436515331268312, "lat": 52.524120112560084 },
    "image": "/images/venues/5591.jpg",
    "description": {
      "es": "Visita el cementerio en honor a los que perdieron la vida en la Revolución de Marzo",
      "en": "Visit the cemetery honoring those who lost their lives in the March Revolution",
      "de": "Besuchen Sie den Friedhof zu Ehren derer, die während der Märzrevolution ihr Leben verloren haben"
    }
  },
  {
    "id": 5448,
    "name": "Parlament der Bäume gegen Krieg und Gewalt",
    "coordinates": { "lng": 13.376669883728027, "lat": 52.522187865608885 },
    "image": "/images/venues/5448.jpg",
    "description": {
      "es": "Un lugar de protesta pacífica contra la guerra y la violencia",
      "en": "A place of peaceful protest against war and violence",
      "de": "Ein Ort des friedlichen Protests gegen Krieg und Gewalt"
    }
  },
  {
    "id": 5323,
    "name": "Fort Hahneberg",
    "coordinates": { "lng": 13.137729308340758, "lat": 52.521930600000005 },
    "image": "/images/venues/5323.jpg",
    "description": {
      "es": "Explora el histórico Fuerte Hahneberg con su rica historia militar",
      "en": "Explore the historical Fort Hahneberg with its rich military history",
      "de": "Erkunden Sie das historische Fort Hahneberg mit seiner reichen Militärgeschichte"
    }
  },
  {
    "id": 5548,
    "name": "Wasserstraßen um die Spreeinsel",
    "coordinates": { "lng": 13.393642902374268, "lat": 52.5219136885478 },
    "image": "/images/venues/5548.jpg",
    "description": {
      "es": "Descubra las vías fluviales que rodean la isla del Spree",
      "en": "Discover the waterways surrounding the Spree Island",
      "de": "Entdecken Sie die Wasserwege rund um die Spreeinsel"
    }
  },
  {
    "id": 5251,
    "name": "Karl-Marx-Allee – II. Bauabschnitt",
    "coordinates": { "lng": 13.42310428619385, "lat": 52.52099975265203 },
    "image": "/images/venues/5251.jpg",
    "description": {
      "es": "Sea testigo de la belleza arquitectónica de la segunda fase de construcción de Karl-Marx-Allee",
      "en": "Witness the architectural beauty of Karl-Marx-Allee's second construction phase",
      "de": "Erleben Sie die architektonische Schönheit des zweiten Bauabschnitts der Karl-Marx-Allee"
    }
  },
  {
    "id": 5578,
    "name": "Kongresshalle (heute bcc)",
    "coordinates": { "lng": 13.415905237197876, "lat": 52.52090835801668 },
    "image": "/images/venues/5578.jpg",
    "description": {
      "es": "Explore el Kongresshalle, ahora conocido como bcc (Centro de Congresos de Berlín)",
      "en": "Explore the Kongresshalle, now known as the bcc (Berlin Congress Center)",
      "de": "Erkunden Sie die Kongresshalle, jetzt bekannt als bcc (Berlin Congress Center)"
    }
  },
  {
    "id": 5325,
    "name": "Kino International",
    "coordinates": { "lng": 13.423015700546696, "lat": 52.520644250000004 },
    "image": "/images/venues/5325.jpg",
    "description": {
      "es": "Visite Kino International, un cine histórico que proyecta películas clásicas",
      "en": "Visit Kino International, a historic cinema showcasing classic films",
      "de": "Besuchen Sie das Kino International, ein historisches Kino, das klassische Filme zeigt"
    }
  },
  {
    "id": 5383,
    "name": "Ev. St. Marienkirche",
    "coordinates": { "lng": 13.406496047973633, "lat": 52.520585211174314 },
    "image": "/images/venues/5383.jpg",
    "description": {
      "es": "Explore la iglesia evangélica St. Marienkirche, un importante lugar religioso",
      "en": "Explore the Evangelical St. Marienkirche, a significant religious site",
      "de": "Erkunden Sie die evangelische St. Marienkirche, eine bedeutende religiöse Stätte"
    }
  },
  {
    "id": 5495,
    "name": "Olympiapark Berlin",
    "coordinates": { "lng": 13.242516517639162, "lat": 52.52013802424959 },
    "image": "/images/venues/5495.jpg",
    "description": {
      "es": "Disfrute del emblemático Olympiapark de Berlín",
      "en": "Experience the iconic Olympiapark in Berlin",
      "de": "Erleben Sie den kultigen Olympiapark in Berlin"
    }
  },
  {
    "id": 5262,
    "name": "Kasernengelände Spandau und Geowissenschaftliche Sammlungen der BGR",
    "coordinates": { "lng": 13.185015099689437, "lat": 52.51983395 },
    "image": "/images/venues/5262.jpg",
    "description": {
      "es": "Explore los antiguos terrenos del cuartel de Spandau y las Colecciones Geológicas de la BGR",
      "en": "Explore the former barracks grounds in Spandau and the Geological Collections of the BGR",
      "de": "Erkunden Sie das ehemalige Kasernengelände in Spandau und die Geologischen Sammlungen der BGR"
    }
  },
  {
    "id": 5260,
    "name": "Karl-Marx-Allee zwischen Strausberger Platz und Alexanderplatz – II. Bauabschnitt",
    "coordinates": { "lng": 13.4225772, "lat": 52.519698 },
    "image": "/images/venues/5260.jpg",
    "description": {
      "es": "Descubra las maravillas arquitectónicas de este tramo de la Karl-Marx-Allee",
      "en": "Discover the architectural wonders of this section of Karl-Marx-Allee",
      "de": "Entdecken Sie die architektonischen Wunder dieses Teils der Karl-Marx-Allee"
    }
  },
  {
    "id": 5395,
    "name": "Train-Kaserne – Smuts Barracks",
    "coordinates": { "lng": 13.17937677149284, "lat": 52.5193866 },
    "image": "/images/venues/5395.jpg",
    "description": {
      "es": "Conozca la historia del Cuartel Smuts, antaño conocido como Train-Kaserne",
      "en": "Learn about the history of the Smuts Barracks, once known as Train-Kaserne",
      "de": "Erfahren Sie mehr über die Geschichte der Smuts Barracks, die früher als Train-Kaserne bekannt war"
    }
  },
  {
    "id": 5499,
    "name": "FRIEDRICHSHAIN: Freidenkerhaus und Armenfriedhof",
    "coordinates": { "lng": 13.4388683, "lat": 52.5193679 },
    "image": "/images/venues/5499.jpg",
    "description": {
      "es": "Freidenkerhaus y Armenfriedhof",
      "en": "Explore Freidenkerhaus and the historic Armenfriedhof in Friedrichshain",
      "de": "Freidenkerhaus und Armenfriedhof"
    }
  },
  {
    "id": 5498,
    "name": "Märchenbrunnen im Volkspark Friedrichshain",
    "coordinates": { "lng": 13.4388683, "lat": 52.5193679 },
    "image": "/images/venues/5498.jpg",
    "description": {
      "es": "Visite la Fuente de los Cuentos de Hadas en Volkspark Friedrichshain",
      "en": "Visit the Fairy Tale Fountain in Volkspark Friedrichshain",
      "de": "Besuchen Sie den Märchenbrunnen im Volkspark Friedrichshain"
    }
  },
  {
    "id": 5342,
    "name": "Panoramabar im Haus Berlin",
    "coordinates": { "lng": 13.426940000000059, "lat": 52.51926 },
    "image": "/images/venues/5342.jpg",
    "description": {
      "es": "Disfrute de las vistas panorámicas desde el Panoramabar de la Haus Berlin",
      "en": "Enjoy panoramic views from the Panoramabar in the Haus Berlin",
      "de": "Panoramablick von der Panoramabar im Haus Berlin genießen"
    }
  },
  {
    "id": 5393,
    "name": "Marx-Engels-Denkmal",
    "coordinates": { "lng": 13.404693603515627, "lat": 52.518492859453154 },
    "image": "/images/venues/5393.jpg",
    "description": {
      "es": "Rindan homenaje a Marx y Engels en su emblemático monumento",
      "en": "Pay homage to Marx and Engels at their iconic memorial",
      "de": "Huldigen Sie Marx und Engels an ihrer ikonischen Gedenkstätte"
    }
  },
  {
    "id": 5482,
    "name": "Palais am Festungsgraben",
    "coordinates": { "lng": 13.395718932151794, "lat": 52.51846266488067 },
    "image": "/images/venues/5482.jpg",
    "description": {
      "es": "Explore el histórico Palais am Festungsgraben, una joya cultural",
      "en": "Explore the historic Palais am Festungsgraben, a cultural gem",
      "de": "Erkunden Sie das historische Palais am Festungsgraben, ein kulturelles Kleinod"
    }
  },
  {
    "id": 5567,
    "name": "Haus des Kindes",
    "coordinates": { "lng": 13.4262685, "lat": 52.5184301 },
    "image": "/images/venues/5567.jpg",
    "description": {
      "es": "Visita la \\Haus des Kindes,\\ un lugar dedicado al desarrollo de la infancia",
      "en": "Visit the \"Haus des Kindes,\" a place dedicated to childhood development",
      "de": "Besuchen Sie das Haus des Kindes, einen Ort, der der Entwicklung von Kindern gewidmet ist"
    }
  },
  {
    "id": 5349,
    "name": "Klosterruine",
    "coordinates": { "lng": 13.412235975265505, "lat": 52.518319852432455 },
    "image": "/images/venues/5349.jpg",
    "description": {
      "es": "Descubra la intrigante Klosterruine, un lugar de importancia histórica",
      "en": "Discover the intriguing Klosterruine, a site of historical significance",
      "de": "Entdecken Sie die faszinierende Klosterruine, einen Ort von historischer Bedeutung"
    }
  },
  {
    "id": 5368,
    "name": "Akademie der Künste am Hanseatenweg",
    "coordinates": { "lng": 13.346668673646674, "lat": 52.518293549999996 },
    "image": "/images/venues/5368.jpg",
    "description": {
      "es": "Sumérjase en el arte en la Akademie der Künste de Hanseatenweg",
      "en": "Immerse yourself in the arts at the Akademie der Künste on Hanseatenweg",
      "de": "Tauchen Sie ein in die Kunst in der Akademie der Künste am Hanseatenweg"
    }
  },
  {
    "id": 5503,
    "name": "Das Hansaviertel der Interbau",
    "coordinates": { "lng": 13.342058681891784, "lat": 52.51781388459441 },
    "image": "/images/venues/5503.jpg",
    "description": {
      "es": "Sea testigo de la arquitectura modernista del barrio de Hansaviertel, parte del proyecto Interbau",
      "en": "Witness the modernist architecture of the Hansaviertel district, part of the Interbau project",
      "de": "Erleben Sie die modernistische Architektur des Hansaviertels im Rahmen des Interbau-Projekts"
    }
  },
  {
    "id": 5453,
    "name": "Ev. Neu-Westend-Kirche",
    "coordinates": { "lng": 13.26303005218506, "lat": 52.5177747126478 },
    "image": "/images/venues/5453.jpg",
    "description": {
      "es": "Explora la iglesia evangélica de Neu-Westend, un lugar de culto",
      "en": "Explore the Evangelical Neu-Westend Church, a place of worship",
      "de": "Erkunden Sie die Evangelische Kirche Neu-Westend, einen Ort des Gottesdienstes"
    }
  },
  {
    "id": 5402,
    "name": "Magistratsbibliothek im Rathaus Charlottenburg",
    "coordinates": { "lng": 13.308801351332491, "lat": 52.51758155 },
    "image": "/images/venues/5402.jpg",
    "description": {
      "es": "Sumérjase en la literatura en la Magistratsbibliothek del ayuntamiento de Charlottenburg",
      "en": "Dive into literature at the Magistratsbibliothek in Charlottenburg's town hall",
      "de": "Eintauchen in die Literatur in der Magistratsbibliothek im Rathaus Charlottenburg"
    }
  },
  {
    "id": 5504,
    "name": "Bustour zu Projekten handwerklicher Restaurierung",
    "coordinates": { "lng": 13.302497344751927, "lat": 52.517129749999995 },
    "image": "/images/venues/5504.jpg",
    "description": {
      "es": "Realice una visita guiada en autobús para presenciar la artesanía en proyectos de restauración",
      "en": "Take a guided bus tour to witness craftsmanship in restoration projects",
      "de": "Auf einer geführten Bustour können Sie die Handwerkskunst bei Restaurierungsprojekten erleben"
    }
  },
  {
    "id": 5588,
    "name": "Denkmal für die im Nationalsozialismus ermordeten Sinti und Roma Europas",
    "coordinates": { "lng": 13.3756806, "lat": 52.5171193 },
    "image": "/images/venues/5588.jpg",
    "description": {
      "es": "Rinde homenaje a las víctimas sinti y gitanas del Holocausto en este monumento",
      "en": "Pay tribute to the Sinti and Roma victims of the Holocaust at this memorial",
      "de": "Gedenken Sie in dieser Gedenkstätte an die Sinti und Roma, die Opfer des Holocausts wurden"
    }
  },
  {
    "id": 5460,
    "name": "Hansabücherei",
    "coordinates": { "lng": 13.3427522, "lat": 52.5170943 },
    "image": "/images/venues/5460.jpg",
    "description": {
      "es": "Explore los recursos de Hansabücherei, una biblioteca pública",
      "en": "Explore the resources at Hansabücherei, a public library",
      "de": "Erkunden Sie die Ressourcen der Hansabücherei, einer öffentlichen Bibliothek"
    }
  },
  {
    "id": 5382,
    "name": "Ev. Parochialkirche",
    "coordinates": { "lng": 13.41257929801941, "lat": 52.5169651512655 },
    "image": "/images/venues/5382.jpg",
    "description": {
      "es": "Visite la Iglesia Evangélica Parroquial, un lugar de culto e historia",
      "en": "Visit the Evangelical Parochial Church, a place of worship and history",
      "de": "Besuchen Sie die Evangelische Parochialkirche, einen Ort des Gottesdienstes und der Geschichte"
    }
  },
  {
    "id": 5590,
    "name": "Fördergebiet Lebendiges Zentrum und Quartier Nikolaiviertel",
    "coordinates": { "lng": 13.407539436824699, "lat": 52.5168734 },
    "image": "/images/venues/5590.jpg",
    "description": {
      "es": "Descubra el vibrante centro y el barrio de Nikolaiviertel, una zona muy animada",
      "en": "Discover the vibrant center and Nikolaiviertel district, a lively area",
      "de": "Entdecken Sie das pulsierende Zentrum und das Nikolaiviertel, ein lebendiges Viertel"
    }
  },
  {
    "id": 5258,
    "name": "Karl-Marx- und Frankfurter Allee – I. Bauabschnitt",
    "coordinates": { "lng": 13.444722890853882, "lat": 52.51673664333727 },
    "image": "/images/venues/5258.jpg",
    "description": {
      "es": "Explore la belleza arquitectónica de la primera fase de construcción de Karl-Marx y Frankfurter Allee",
      "en": "Explore the architectural beauty of the Karl-Marx and Frankfurter Allee's first construction phase",
      "de": "Entdecken Sie die architektonische Schönheit des ersten Bauabschnitts der Karl-Marx- und Frankfurter Allee"
    }
  },
  {
    "id": 5602,
    "name": "Rund um die Schinkelsche Bauakademie",
    "coordinates": { "lng": 13.39858430364548, "lat": 52.5167053 },
    "image": "/images/venues/5602.jpg",
    "description": {
      "es": "Explore los alrededores de la Schinkelsche Bauakademie, un centro de importancia arquitectónica",
      "en": "Explore the area surrounding the Schinkelsche Bauakademie, a hub of architectural significance",
      "de": "Erkunden Sie die Umgebung der Schinkelschen Bauakademie, ein Zentrum von architektonischer Bedeutung"
    }
  },
  {
    "id": 5442,
    "name": "Karl-Marx-Allee: Arbeiterpaläste im „Zuckerbäckerstil“",
    "coordinates": { "lng": 13.444733619689943, "lat": 52.516703999250495 },
    "image": "/images/venues/5442.jpg",
    "description": {
      "es": "Sea testigo de la grandeza de Karl-Marx-Allee, un prominente bulevar de Berlín",
      "en": "Witness the grandeur of Karl-Marx-Allee, a prominent boulevard in Berlin",
      "de": "Erleben Sie die Pracht der Karl-Marx-Allee, einem prominenten Boulevard in Berlin"
    }
  },
  {
    "id": 5290,
    "name": "Berliner U-Bahn-Museum am Olympiastadion",
    "coordinates": { "lng": 13.249425888061523, "lat": 52.516703999250495 },
    "image": "/images/venues/5290.jpg",
    "description": {
      "es": "Adéntrate en la historia del metro de Berlín en este museo cercano al Olympiastadion",
      "en": "Delve into the history of Berlin's subway system at this museum near the Olympiastadion",
      "de": "In diesem Museum in der Nähe des Olympiastadions können Sie in die Geschichte der Berliner U-Bahn eintauchen"
    }
  },
  {
    "id": 5607,
    "name": "Modellwohnung Frankfurter Tor 1",
    "coordinates": { "lng": 13.4528734, "lat": 52.5165807 },
    "image": "/images/venues/5607.jpg",
    "description": {
      "es": "Explore un apartamento modelo en Frankfurter Tor 1, que muestra el diseño arquitectónico",
      "en": "Explore a model apartment at Frankfurter Tor 1, showcasing architectural design",
      "de": "Entdecken Sie eine Musterwohnung am Frankfurter Tor 1, die architektonisches Design zeigt"
    }
  },
  {
    "id": 5282,
    "name": "Fahrradtour: U-Bahngeschichte",
    "coordinates": { "lng": 13.412353992462158, "lat": 52.5164428456833 },
    "image": "/images/venues/5282.jpg",
    "description": {
      "es": "Historia de la U",
      "en": "Embark on a bicycle tour tracing the history of Berlin's subway system",
      "de": "U-Bahn-Geschichte"
    }
  },
  {
    "id": 5485,
    "name": "werkstatt denkmal: Erkundungsreise durch das Internationale Congress Centrum ICC",
    "coordinates": { "lng": 13.298075808956911, "lat": 52.5161776 },
    "image": "/images/venues/5485.jpg",
    "description": {
      "es": "Recorrido de exploración del Centro Internacional de Congresos ICC, desvelando su importancia arquitectónica",
      "en": "International Congress Centrum ICC exploration tour, unveiling its architectural significance",
      "de": "Erkundungstour durch das Internationale Congress Centrum ICC, die seine architektonische Bedeutung enthüllt"
    }
  },
  {
    "id": 5350,
    "name": "Das Brandenburger Tor",
    "coordinates": { "lng": 13.378300666809084, "lat": 52.51599888105672 },
    "image": "/images/venues/5350.jpg",
    "description": {
      "es": "La icónica Puerta de Brandemburgo, símbolo de la unidad y la historia de Alemania",
      "en": "Iconic Brandenburg Gate, symbolizing Germany's unity and history",
      "de": "Ikonisches Brandenburger Tor, Symbol für die Einheit und Geschichte Deutschlands"
    }
  },
  {
    "id": 5328,
    "name": "Kath. Sankt Hedwigs-Kathedrale",
    "coordinates": { "lng": 13.39460849761963, "lat": 52.51594664962925 },
    "image": "/images/venues/5328.jpg",
    "description": {
      "es": "Visite la Catedral de Santa Eduvigis, un impresionante lugar de culto católico",
      "en": "Visit St. Hedwig's Cathedral, a stunning Catholic place of worship",
      "de": "Besuchen Sie die St. Hedwigs-Kathedrale, ein beeindruckendes katholisches Gotteshaus"
    }
  },
  {
    "id": 5430,
    "name": "Staatsratsgebäude",
    "coordinates": { "lng": 13.401908655703892, "lat": 52.5152614 },
    "image": "/images/venues/5430.jpg",
    "description": {
      "es": "Observe el Staatsratsgebäude, un importante edificio gubernamental",
      "en": "Observe the Staatsratsgebäude, a significant governmental building",
      "de": "Besichtigen Sie das Staatsratsgebäude, ein bedeutendes Regierungsgebäude"
    }
  },
  {
    "id": 5598,
    "name": "Stadtlandschafts-Safari der Schaustelle Nachkriegsmoderne",
    "coordinates": { "lng": 13.4437904, "lat": 52.5151271 },
    "image": "/images/venues/5598.jpg",
    "description": {
      "es": "Explore la arquitectura modernista de posguerra en el recorrido Stadtlandschafts-Safari",
      "en": "Explore post-war modernist architecture on the Stadtlandschafts-Safari tour",
      "de": "Entdecken Sie die Architektur der Nachkriegsmoderne auf der Stadtlandschafts-Safari"
    }
  },
  {
    "id": 5579,
    "name": "Von der Weberwiese zum Platz der Vereinten Nationen",
    "coordinates": { "lng": 13.443861794148766, "lat": 52.515063999999995 },
    "image": "/images/venues/5579.jpg",
    "description": {
      "es": "Viaje de Weberwiese a la Plaza de las Naciones Unidas, descubriendo las transformaciones urbanas",
      "en": "Journey from Weberwiese to United Nations Square, discovering urban transformations",
      "de": "Reise von der Weberwiese zum Platz der Vereinten Nationen, Entdeckung der urbanen Transformationen"
    }
  },
  {
    "id": 5550,
    "name": "Glaubenskirche",
    "coordinates": { "lng": 13.4895763, "lat": 52.5147393 },
    "image": "/images/venues/5550.jpg",
    "description": {
      "es": "Visite Glaubenskirche, un lugar de culto y reflexión",
      "en": "Visit Glaubenskirche, a place of worship and reflection",
      "de": "Besuchen Sie die Glaubenskirche, einen Ort der Verehrung und der Besinnung"
    }
  },
  {
    "id": 5553,
    "name": "Kath. St.-Martin-Kirche",
    "coordinates": { "lng": 13.6038808, "lat": 52.5146074 },
    "image": "/images/venues/5553.jpg",
    "description": {
      "es": "Explore la iglesia católica de San Martín, un lugar religioso histórico",
      "en": "Explore St. Martin's Catholic Church, a historic religious site",
      "de": "Erkunden Sie die katholische Kirche St. Martin, eine historische religiöse Stätte"
    }
  },
  {
    "id": 5528,
    "name": "Stasi-Zentrale. Campus für Demokratie",
    "coordinates": { "lng": 13.487322, "lat": 52.5145186 },
    "image": "/images/venues/5528.jpg",
    "description": {
      "es": "Descubra la Central de la Stasi, ahora Campus para la Democracia",
      "en": "Discover the Stasi Central, now a Campus for Democracy",
      "de": "Entdecken Sie die Stasi-Zentrale, jetzt ein Campus für Demokratie"
    }
  },
  {
    "id": 5259,
    "name": "Krankenhauskirche im Wuhlgarten",
    "coordinates": { "lng": 13.567573451606759, "lat": 52.514262099999996 },
    "image": "/images/venues/5259.jpg",
    "description": {
      "es": "Visite la Iglesia del Hospital de Wuhlgarten, un sereno santuario",
      "en": "Visit the Hospital Church in Wuhlgarten, a serene sanctuary",
      "de": "Besuchen Sie die Spitalkirche in Wuhlgarten, ein Ort der Ruhe"
    }
  },
  {
    "id": 5483,
    "name": "Nicolaihaus",
    "coordinates": { "lng": 13.402959399999986, "lat": 52.5141546 },
    "image": "/images/venues/5483.jpg",
    "description": {
      "es": "Explore la histórica Casa Nicolai, muestra del patrimonio arquitectónico",
      "en": "Explore the historic Nicolai House, showcasing architectural heritage",
      "de": "Erkunden Sie das historische Nicolai-Haus, das ein architektonisches Erbe darstellt"
    }
  },
  {
    "id": 5375,
    "name": "Archäologische Ausgrabungen am Petriplatz",
    "coordinates": { "lng": 13.403985500335695, "lat": 52.51355699542472 },
    "image": "/images/venues/5375.jpg",
    "description": {
      "es": "Desentierra el pasado en las excavaciones arqueológicas de Petriplatz",
      "en": "Unearth the past at archaeological excavations in Petriplatz",
      "de": "Die Vergangenheit bei archäologischen Ausgrabungen auf dem Petriplatz erforschen"
    }
  },
  {
    "id": 5530,
    "name": "Stadtbad Lichtenberg",
    "coordinates": { "lng": 13.493421239224475, "lat": 52.513139100000004 },
    "image": "/images/venues/5530.jpg",
    "description": {
      "es": "Dese un chapuzón en los baños de la ciudad de Lichtenberg, una instalación de natación histórica",
      "en": "Take a dip in the Lichtenberg City Baths, a historic swimming facility",
      "de": "Baden Sie im Stadtbad Lichtenberg, einer historischen Badeanstalt"
    }
  },
  {
    "id": 5404,
    "name": "Wohnblock und Garagen Knobelsdorffstraße",
    "coordinates": { "lng": 13.288414478302004, "lat": 52.5130868842183 },
    "image": "/images/venues/5404.jpg",
    "description": {
      "es": "Admire las estructuras residenciales y de garajes en la Knobelsdorffstraße",
      "en": "Admire residential and garage structures on Knobelsdorffstraße",
      "de": "Wohn- und Garagenbauten in der Knobelsdorffstraße bewundern"
    }
  },
  {
    "id": 5576,
    "name": "Ev. Epiphanienkirche",
    "coordinates": { "lng": 13.2848565, "lat": 52.5130337 },
    "image": "/images/venues/5576.jpg",
    "description": {
      "es": "Visite la Iglesia Evangélica de la Epifanía, un lugar de importancia espiritual",
      "en": "Visit the Evangelical Epiphany Church, a place of spiritual significance",
      "de": "Besuchen Sie die evangelische Epiphanias-Kirche, einen Ort von spiritueller Bedeutung"
    }
  },
  {
    "id": 5516,
    "name": "Bärenzwinger im Köllnischen Park",
    "coordinates": { "lng": 13.414472937583925, "lat": 52.51269838574543 },
    "image": "/images/venues/5516.jpg",
    "description": {
      "es": "Descubra las Fosas de los Osos en el Parque Köllnischen, un lugar interesante",
      "en": "Discover the Bear Pits in Köllnischen Park, an interesting site",
      "de": "Entdecken Sie die Bärengruben im Köllnischen Park, ein interessanter Ort"
    }
  },
  {
    "id": 5388,
    "name": "Städtischer Zentralfriedhof Friedrichsfelde",
    "coordinates": { "lng": 13.50077, "lat": 52.5126554 },
    "image": "/images/venues/5388.jpg",
    "description": {
      "es": "Explore el Cementerio Central de Friedrichsfelde, un sereno lugar de descanso",
      "en": "Explore the Friedrichsfelde Central Cemetery, a serene resting place",
      "de": "Erkunden Sie den Zentralfriedhof Friedrichsfelde, eine stille Ruhestätte"
    }
  },
  {
    "id": 5450,
    "name": "Villa Skupin",
    "coordinates": { "lng": 13.4790500395194, "lat": 52.511487900000006 },
    "image": "/images/venues/5450.jpg",
    "description": {
      "es": "Visite Villa Skupin, muestra de belleza arquitectónica e historia",
      "en": "Visit Villa Skupin, showcasing architectural beauty and history",
      "de": "Besuchen Sie die Villa Skupin, die architektonische Schönheit und Geschichte präsentiert"
    }
  },
  {
    "id": 5412,
    "name": "Fahrradtour: Berliner Gas-Straßenlaternen",
    "coordinates": { "lng": 13.29674005508423, "lat": 52.51107579617247 },
    "image": "/images/venues/5412.jpg",
    "description": {
      "es": "Farolas de gas de Berlín",
      "en": "Take a bicycle tour to explore Berlin's historic gas streetlamps",
      "de": "Berliner Gas-Straßenlaternen"
    }
  },
  {
    "id": 5337,
    "name": "Renaissance-Theater Berlin",
    "coordinates": { "lng": 13.323503, "lat": 52.5103384 },
    "image": "/images/venues/5337.jpg",
    "description": {
      "es": "Disfrute de las representaciones en el Teatro Renacentista de Berlín",
      "en": "Enjoy performances at the Renaissance Theater in Berlin",
      "de": "Genießen Sie Aufführungen im Renaissance-Theater in Berlin"
    }
  },
  {
    "id": 5357,
    "name": "Lietzenseepark",
    "coordinates": { "lng": 13.291933536529543, "lat": 52.51023999225049 },
    "image": "/images/venues/5357.jpg",
    "description": {
      "es": "Pasee por Lietzenseepark, un tranquilo parque urbano",
      "en": "Stroll through Lietzenseepark, a tranquil urban park",
      "de": "Spaziergang durch den Lietzenseepark, einen ruhigen Stadtpark"
    }
  },
  {
    "id": 5549,
    "name": "Corbusierhaus",
    "coordinates": { "lng": 13.243911266326904, "lat": 52.51017469439965 },
    "image": "/images/venues/5549.jpg",
    "description": {
      "es": "Admire la Casa Corbusier, una joya arquitectónica diseñada por Le Corbusier",
      "en": "Admire the Corbusier House, an architectural gem designed by Le Corbusier",
      "de": "Bewundern Sie das Corbusier-Haus, ein architektonisches Juwel, das von Le Corbusier entworfen wurde"
    }
  },
  {
    "id": 5341,
    "name": "Gebäudeensemble Wohn- und Atelierhaus Georg Kolbes",
    "coordinates": { "lng": 13.25478146860692, "lat": 52.5099381 },
    "image": "/images/venues/5341.jpg",
    "description": {
      "es": "Explore los edificios residenciales y estudios de Georg Kolbe, refugio de artistas",
      "en": "Explore the residential and studio buildings of Georg Kolbe, an artist's haven",
      "de": "Erkunden Sie die Wohn- und Atelierhäuser von Georg Kolbe, einem Künstlerparadies"
    }
  },
  {
    "id": 5574,
    "name": "Ehem. Reichspostmuseum",
    "coordinates": { "lng": 13.387312889099121, "lat": 52.50992656168169 },
    "image": "/images/venues/5574.jpg",
    "description": {
      "es": "Una institución histórica que muestra la historia postal",
      "en": "A historic institution showcasing postal history",
      "de": "Eine historische Institution, die die Postgeschichte präsentiert"
    }
  },
  {
    "id": 5547,
    "name": "Schloss und Schlosspark Biesdorf",
    "coordinates": { "lng": 13.557631578569577, "lat": 52.50984065 },
    "image": "/images/venues/5547.jpg",
    "description": {
      "es": "El palacio y el parque de Biesdorf ofrecen una escapada serena",
      "en": "Biesdorf Palace and Park offer a serene escape",
      "de": "Schloss und Park Biesdorf bieten einen ruhigen Rückzugsort"
    }
  },
  {
    "id": 5340,
    "name": "Italienische Botschaft",
    "coordinates": { "lng": 13.359090000000037, "lat": 52.50974 },
    "image": "/images/venues/5340.jpg",
    "description": {
      "es": "La Embajada de Italia es una joya arquitectónica",
      "en": "The Italian Embassy is an architectural gem",
      "de": "Die italienische Botschaft ist ein architektonisches Juwel"
    }
  },
  {
    "id": 5390,
    "name": "Philharmonie",
    "coordinates": { "lng": 13.369932174682619, "lat": 52.509691487288165 },
    "image": "/images/venues/5390.jpg",
    "description": {
      "es": "La principal sala de conciertos de Berlín, famosa por su acústica",
      "en": "Berlin's premier concert hall, renowned for its acoustics",
      "de": "Berlins wichtigster Konzertsaal, berühmt für seine Akustik"
    }
  },
  {
    "id": 5480,
    "name": "Logenhaus der Großen National-Mutterloge",
    "coordinates": { "lng": 13.262300491333008, "lat": 52.5091429754802 },
    "image": "/images/venues/5480.jpg",
    "description": {
      "es": "Una logia masónica con un rico patrimonio cultural",
      "en": "A Masonic lodge with a rich cultural heritage",
      "de": "Eine Freimaurerloge mit einem reichen kulturellen Erbe"
    }
  },
  {
    "id": 5394,
    "name": "Ev. Gnadenkirche Biesdorf",
    "coordinates": { "lng": 13.555288910865784, "lat": 52.50910869326487 },
    "image": "/images/venues/5394.jpg",
    "description": {
      "es": "Un centro comunitario que acoge actos culturales",
      "en": "A community hub, hosting cultural events",
      "de": "Ein Gemeinschaftszentrum, das kulturelle Veranstaltungen anbietet"
    }
  },
  {
    "id": 5354,
    "name": "Parkwächterhaus im Lietzenseepark",
    "coordinates": { "lng": 13.2889777, "lat": 52.50887555 },
    "image": "/images/venues/5354.jpg",
    "description": {
      "es": "Una encantadora casita de guardabosques",
      "en": "A charming park keeper's cottage",
      "de": "Ein charmantes Parkwächterhäuschen"
    }
  },
  {
    "id": 5560,
    "name": "Norddeutsche Eiswerke",
    "coordinates": { "lng": 13.425142765045168, "lat": 52.50867281705331 },
    "image": "/images/venues/5560.jpg",
    "description": {
      "es": "Una fascinante mirada a la historia de la industria del hielo de Berlín",
      "en": "A fascinating glimpse into Berlin's ice industry history",
      "de": "Ein faszinierender Einblick in die Geschichte der Berliner Eisindustrie"
    }
  },
  {
    "id": 5559,
    "name": "Detlev-Rohwedder-Haus – Bundesministerium der Finanzen",
    "coordinates": { "lng": 13.38355589973327, "lat": 52.50863295 },
    "image": "/images/venues/5559.jpg",
    "description": {
      "es": "Un importante edificio gubernamental con un pasado histórico",
      "en": "A significant government building with a storied past",
      "de": "Ein bedeutendes Regierungsgebäude mit einer bewegten Vergangenheit"
    }
  },
  {
    "id": 5384,
    "name": "Jesuskirche Kaulsdorf mit Turmmuseum",
    "coordinates": { "lng": 13.5807058, "lat": 52.5081515 },
    "image": "/images/venues/5384.jpg",
    "description": {
      "es": "La Iglesia de Jesús en Kaulsdorf con una intrigante torre museo",
      "en": "The Jesus Church in Kaulsdorf with an intriguing tower museum",
      "de": "Die Jesuskirche in Kaulsdorf mit einem interessanten Turmmuseum"
    }
  },
  {
    "id": 5611,
    "name": "St. Matthäus-Kirche",
    "coordinates": { "lng": 13.3670333, "lat": 52.5077233 },
    "image": "/images/venues/5611.jpg",
    "description": {
      "es": "Una iglesia tranquila con importancia arquitectónica e histórica",
      "en": "A tranquil church with architectural and historical significance",
      "de": "Eine ruhige Kirche mit architektonischer und historischer Bedeutung"
    }
  },
  {
    "id": 5527,
    "name": "Checkpoint Charlie",
    "coordinates": { "lng": 13.390316963195803, "lat": 52.507680243857635 },
    "image": "/images/venues/5527.jpg",
    "description": {
      "es": "Una reliquia de la Guerra Fría, antaño paso fronterizo",
      "en": "A Cold War relic, once a border crossing point",
      "de": "Ein Relikt aus dem Kalten Krieg, einst ein Grenzübergang"
    }
  },
  {
    "id": 5479,
    "name": "Reichsbahnausbesserungswerk Franz Stenzer",
    "coordinates": { "lng": 13.4547707, "lat": 52.5075865 },
    "image": "/images/venues/5479.jpg",
    "description": {
      "es": "Antiguas instalaciones de reparación ferroviaria con patrimonio industrial",
      "en": "Former railway repair facilities with industrial heritage",
      "de": "Ehemalige Eisenbahnausbesserungswerke mit industriellem Erbe"
    }
  },
  {
    "id": 5592,
    "name": "Ehem. Preußischer Landtag",
    "coordinates": { "lng": 13.38160514831543, "lat": 52.50734067419732 },
    "image": "/images/venues/5592.jpg",
    "description": {
      "es": "Antaño sede del parlamento prusiano",
      "en": "Once the seat of Prussia's state parliament",
      "de": "Einst Sitz des preußischen Landtags"
    }
  },
  {
    "id": 5348,
    "name": "Die Berliner Mauer",
    "coordinates": { "lng": 13.39061737060547, "lat": 52.507275372038826 },
    "image": "/images/venues/5348.jpg",
    "description": {
      "es": "El infame Muro de Berlín, símbolo de división y reunificación",
      "en": "The infamous Berlin Wall, symbolizing division and reunification",
      "de": "Die berüchtigte Berliner Mauer, Symbol für Teilung und Wiedervereinigung"
    }
  },
  {
    "id": 5431,
    "name": "Kath. St. Michael-Kirche",
    "coordinates": { "lng": 13.4195241, "lat": 52.5072497 },
    "image": "/images/venues/5431.jpg",
    "description": {
      "es": "La iglesia católica de San Miguel, una joya arquitectónica",
      "en": "St. Michael's Catholic Church, an architectural gem",
      "de": "Die katholische Kirche St. Michael, ein architektonisches Juwel"
    }
  },
  {
    "id": 5380,
    "name": "Ev.-Lutherische Kirche",
    "coordinates": { "lng": 13.415637016296388, "lat": 52.50715782790899 },
    "image": "/images/venues/5380.jpg",
    "description": {
      "es": "Una Iglesia Evangélica Luterana con una rica tradición espiritual",
      "en": "An Evangelical Lutheran Church with a rich spiritual tradition",
      "de": "Eine evangelisch-lutherische Kirche mit einer reichen geistlichen Tradition"
    }
  },
  {
    "id": 5298,
    "name": "Denkmal zum 17. Juni 1953",
    "coordinates": { "lng": 13.39071913657742, "lat": 52.5071493 },
    "image": "/images/venues/5298.jpg",
    "description": {
      "es": "Conmemoración del levantamiento de Alemania Oriental de 1953",
      "en": "Commemorating the 1953 East German uprising",
      "de": "Zum Gedenken an den Volksaufstand in der DDR 1953"
    }
  },
  {
    "id": 5358,
    "name": "Dokumentationszentrum Topographie des Terrors",
    "coordinates": { "lng": 13.383986949920654, "lat": 52.506798663342416 },
    "image": "/images/venues/5358.jpg",
    "description": {
      "es": "Un centro de exposiciones que documenta la oscura historia del Tercer Reich",
      "en": "An exhibition center documenting the dark history of the Third Reich",
      "de": "Ein Ausstellungszentrum, das die dunkle Geschichte des Dritten Reiches dokumentiert"
    }
  },
  {
    "id": 5265,
    "name": "Haus des Rundfunks und Fernsehzentrum",
    "coordinates": { "lng": 13.2805304, "lat": 52.5065027 },
    "image": "/images/venues/5265.jpg",
    "description": {
      "es": "Un centro de radiodifusión integral para el paisaje mediático de Berlín",
      "en": "A broadcasting hub integral to Berlin's media landscape",
      "de": "Ein Sendezentrum, das aus der Berliner Medienlandschaft nicht wegzudenken ist"
    }
  },
  {
    "id": 5385,
    "name": "Dorfkirche Mahlsdorf",
    "coordinates": { "lng": 13.6125652, "lat": 52.5061427 },
    "image": "/images/venues/5385.jpg",
    "description": {
      "es": "Una pintoresca iglesia de pueblo cargada de historia",
      "en": "A picturesque village church steeped in history",
      "de": "Eine malerische, geschichtsträchtige Dorfkirche"
    }
  },
  {
    "id": 5297,
    "name": "Theater des Westens",
    "coordinates": { "lng": 13.329005891948338, "lat": 52.5059047 },
    "image": "/images/venues/5297.jpg",
    "description": {
      "es": "El renombrado teatro de Berlín para espectáculos de talla mundial",
      "en": "Berlin's renowned theater for world-class performances",
      "de": "Berlins renommiertes Theater für Aufführungen von Weltrang"
    }
  },
  {
    "id": 5577,
    "name": "48h ICC",
    "coordinates": { "lng": 13.28096866607666, "lat": 52.50585176087142 },
    "image": "/images/venues/5577.jpg",
    "description": {
      "es": "Un acontecimiento dinámico que celebra la diversidad cultural de Berlín",
      "en": "A dynamic event celebrating Berlin's cultural diversity",
      "de": "Eine dynamische Veranstaltung, die die kulturelle Vielfalt Berlins feiert"
    }
  },
  {
    "id": 5475,
    "name": "Ev. St.-Thomas-Kirche –  FÄLLT AUS",
    "coordinates": { "lng": 13.426580429077148, "lat": 52.505211773855784 },
    "image": "/images/venues/5475.jpg",
    "description": {
      "es": "Una iglesia histórica, lamentablemente inaccesible en la actualidad",
      "en": "A historic church, unfortunately currently inaccessible",
      "de": "Eine historische Kirche, leider derzeit unzugänglich"
    }
  },
  {
    "id": 5570,
    "name": "Rotes Haus der Nürtingen Grundschule",
    "coordinates": { "lng": 13.429992198944094, "lat": 52.50502238815632 },
    "image": "/images/venues/5570.jpg",
    "description": {
      "es": "Un espacio educativo vibrante en la Escuela Primaria de Nürtingen",
      "en": "A vibrant educational space at Nürtingen Primary School",
      "de": "Ein lebendiger Bildungsraum an der Grundschule Nürtingen"
    }
  },
  {
    "id": 5399,
    "name": "Ev. Kaiser-Wilhelm-Gedächtniskirche",
    "coordinates": { "lng": 13.335294018768128, "lat": 52.50496755 },
    "image": "/images/venues/5399.jpg",
    "description": {
      "es": "Una impresionante iglesia conmemorativa en Berlín",
      "en": "A striking memorial church in Berlin",
      "de": "Eine markante Gedächtniskirche in Berlin"
    }
  },
  {
    "id": 5302,
    "name": "Oberbaum-City",
    "coordinates": { "lng": 13.448917865753176, "lat": 52.50487218512484 },
    "image": "/images/venues/5302.jpg",
    "description": {
      "es": "Un moderno distrito urbano a lo largo del emblemático puente Oberbaum",
      "en": "A modern urban district along the iconic Oberbaum Bridge",
      "de": "Ein modernes Stadtviertel entlang der kultigen Oberbaumbrücke"
    }
  },
  {
    "id": 5561,
    "name": "Künstlerhaus St. Lukas",
    "coordinates": { "lng": 13.3275157, "lat": 52.5048703 },
    "image": "/images/venues/5561.jpg",
    "description": {
      "es": "Un centro de creatividad artística y esfuerzos culturales",
      "en": "A hub for artistic creativity and cultural endeavors",
      "de": "Ein Zentrum für künstlerisches Schaffen und kulturelle Aktivitäten"
    }
  },
  {
    "id": 5538,
    "name": "Denkmale im Boxhagener Kiez",
    "coordinates": { "lng": 13.468186855316162, "lat": 52.504401981012386 },
    "image": "/images/venues/5538.jpg",
    "description": {
      "es": "Monumentos en el vibrante barrio de Boxhagener",
      "en": "Monuments in the vibrant Boxhagener neighborhood",
      "de": "Denkmäler im lebendigen Boxhagener Viertel"
    }
  },
  {
    "id": 5535,
    "name": "Filmabend vom Rostkreuz zum neuen Bahnhof Ostkreuz",
    "coordinates": { "lng": 13.47135334305591, "lat": 52.504052599999994 },
    "image": "/images/venues/5535.jpg",
    "description": {
      "es": "Un viaje cinematográfico por el ferrocarril Ostkreuz",
      "en": "A cinematic journey along the Ostkreuz railway",
      "de": "Eine filmische Reise entlang der Ostkreuzbahn"
    }
  },
  {
    "id": 5295,
    "name": "Fontane-Apotheke im ehem. Diakonissenkrankenhaus Bethanien",
    "coordinates": { "lng": 13.4241227, "lat": 52.5039317 },
    "image": "/images/venues/5295.jpg",
    "description": {
      "es": "Una farmacia histórica dentro del antiguo Hospital Bethanien Deaconess",
      "en": "A historic pharmacy within the former Bethanien Deaconess Hospital",
      "de": "Eine historische Apotheke im ehemaligen Diakonissenkrankenhaus Bethanien"
    }
  },
  {
    "id": 5306,
    "name": "Pumpstation Radialsystem XII",
    "coordinates": { "lng": 13.454756152114896, "lat": 52.50379652571522 },
    "image": "/images/venues/5306.jpg",
    "description": {
      "es": "Una instalación industrial convertida en un centro artístico y cultural único",
      "en": "An industrial facility turned into a unique arts and cultural center",
      "de": "Eine Industrieanlage wird zu einem einzigartigen Kunst- und Kulturzentrum"
    }
  },
  {
    "id": 5285,
    "name": "Erinnerungs- und Begegnungsstätte Bonhoeffer-Haus",
    "coordinates": { "lng": 13.262436352738598, "lat": 52.50362990000001 },
    "image": "/images/venues/5285.jpg",
    "description": {
      "es": "Conmemoración de la vida y el legado de Dietrich Bonhoeffer",
      "en": "Commemorating Dietrich Bonhoeffer's life and legacy",
      "de": "Zum Gedenken an Dietrich Bonhoeffers Leben und Vermächtnis"
    }
  },
  {
    "id": 5532,
    "name": "Linienverzweiger auf dem Tuchollaplatz",
    "coordinates": { "lng": 13.481082916259767, "lat": 52.503461557698294 },
    "image": "/images/venues/5532.jpg",
    "description": {
      "es": "Un hito urbano significativo en Tuchollaplatz",
      "en": "A significant urban landmark at Tuchollaplatz",
      "de": "Ein bedeutendes städtebauliches Wahrzeichen am Tuchollaplatz"
    }
  },
  {
    "id": 5344,
    "name": "Ev. Zwingli-Kirche",
    "coordinates": { "lng": 13.454711437225342, "lat": 52.50337012658077 },
    "image": "/images/venues/5344.jpg",
    "description": {
      "es": "Un lugar de culto con una rica tradición espiritual",
      "en": "A place of worship with a rich spiritual tradition",
      "de": "Ein Ort der Anbetung mit einer reichen spirituellen Tradition"
    }
  },
  {
    "id": 5397,
    "name": "Museum Lichtenberg im Stadthaus",
    "coordinates": { "lng": 13.4805128, "lat": 52.5031008 },
    "image": "/images/venues/5397.jpg",
    "description": {
      "es": "Un museo local ubicado en un edificio histórico de la ciudad",
      "en": "A local museum housed in a historic city building",
      "de": "Ein Heimatmuseum in einem historischen Gebäude der Stadt"
    }
  },
  {
    "id": 5286,
    "name": "Mosaikhandwerk",
    "coordinates": { "lng": 13.4092838, "lat": 52.5030903 },
    "image": "/images/venues/5286.jpg",
    "description": {
      "es": "El arte del mosaico en exposición",
      "en": "The artistry of mosaic craft on display",
      "de": "Die Kunst des Mosaikhandwerks wird gezeigt"
    }
  },
  {
    "id": 5609,
    "name": "Ausstellung: Architektur macht Bewegung",
    "coordinates": { "lng": 13.3176041, "lat": 52.5028833 },
    "image": "/images/venues/5609.jpg",
    "description": {
      "es": "La arquitectura hace el movimiento",
      "en": "An exhibition exploring the role of architecture in shaping movement and space",
      "de": "Architektur schafft Bewegung"
    }
  },
  {
    "id": 5463,
    "name": "Stadthaus in der Oranienstraße",
    "coordinates": { "lng": 13.413901, "lat": 52.5028653 },
    "image": "/images/venues/5463.jpg",
    "description": {
      "es": "Una joya arquitectónica en la Oranienstraße",
      "en": "An architectural gem on Oranienstraße",
      "de": "Ein architektonisches Kleinod in der Oranienstraße"
    }
  },
  {
    "id": 5424,
    "name": "WestkreuzPark!",
    "coordinates": { "lng": 13.290447592735292, "lat": 52.50274316522345 },
    "image": "/images/venues/5424.jpg",
    "description": {
      "es": "Un oasis verde urbano en Westkreuz",
      "en": "A green urban oasis at Westkreuz",
      "de": "Eine grüne Stadtoase am Westkreuz"
    }
  },
  {
    "id": 5335,
    "name": "Gründerzeitmuseum im Gutshaus Mahlsdorf",
    "coordinates": { "lng": 13.613929245108904, "lat": 52.5024922 },
    "image": "/images/venues/5335.jpg",
    "description": {
      "es": "Un museo en la histórica mansión de Mahlsdorf que muestra la época del Gründerzeit",
      "en": "A museum in the historic Mahlsdorf Manor showcasing Gründerzeit era",
      "de": "Ein Museum im historischen Mahlsdorfer Gutshof zeigt die Gründerzeit"
    }
  },
  {
    "id": 5477,
    "name": "Literaturhaus Berlin",
    "coordinates": { "lng": 13.3268653, "lat": 52.5021388 },
    "image": "/images/venues/5477.jpg",
    "description": {
      "es": "Un centro para entusiastas de la literatura y eventos culturales",
      "en": "A hub for literary enthusiasts and cultural events",
      "de": "Ein Zentrum für Literaturliebhaber und kulturelle Veranstaltungen"
    }
  },
  {
    "id": 5353,
    "name": "Maison de France",
    "coordinates": { "lng": 13.3247598, "lat": 52.5020688 },
    "image": "/images/venues/5353.jpg",
    "description": {
      "es": "Un centro cultural que celebra la cultura y los intercambios franceses",
      "en": "A cultural center celebrating French culture and exchange",
      "de": "Ein Kulturzentrum, das die französische Kultur und den Austausch feiert"
    }
  },
  {
    "id": 5303,
    "name": "Ev. Erlöserkirche",
    "coordinates": { "lng": 13.481239854878048, "lat": 52.501417450000005 },
    "image": "/images/venues/5303.jpg",
    "description": {
      "es": "Un lugar de culto con una presencia espiritual única",
      "en": "A place of worship with a unique spiritual presence",
      "de": "Ein Ort der Anbetung mit einer einzigartigen spirituellen Präsenz"
    }
  },
  {
    "id": 5301,
    "name": "20. und 42. Gemeindeschule und Blindenanstalt",
    "coordinates": { "lng": 13.4204778, "lat": 52.5010678 },
    "image": "/images/venues/5301.jpg",
    "description": {
      "es": "Instituciones educativas y sociales históricas",
      "en": "Historic educational and social institutions",
      "de": "Historische Bildungs- und Sozialeinrichtungen"
    }
  },
  {
    "id": 5472,
    "name": "werkstatt denkmal: Oberbaumbrücke",
    "coordinates": { "lng": 13.4182215, "lat": 52.5006018 },
    "image": "/images/venues/5472.jpg",
    "description": {
      "es": "Oberbaumbrücke",
      "en": "Researching the history of the iconic Oberbaum Bridge",
      "de": "Oberbaumbrücke"
    }
  },
  {
    "id": 5462,
    "name": "Kumi*13 – Gründerzeithaus von 1875",
    "coordinates": { "lng": 13.3579721, "lat": 52.4997577 },
    "image": "/images/venues/5462.jpg",
    "description": {
      "es": "Una joya arquitectónica del siglo XIX",
      "en": "An architectural gem from the 19th century",
      "de": "Ein architektonisches Juwel aus dem 19. Jahrhundert"
    }
  },
  {
    "id": 5568,
    "name": "AVUS Tribüne",
    "coordinates": { "lng": 13.273272374197937, "lat": 52.49946185 },
    "image": "/images/venues/5568.jpg",
    "description": {
      "es": "Una tribuna histórica en el circuito de carreras AVUS",
      "en": "A historic grandstand on the AVUS racing circuit",
      "de": "Eine historische Tribüne auf der AVUS-Rennstrecke"
    }
  },
  {
    "id": 5267,
    "name": "Fahrradtour: Mit AEG am Humboldthain, Brauerei Pfefferberg und Historischem Hafen Berlin",
    "coordinates": { "lng": 13.379309177398683, "lat": 52.498693824431086 },
    "image": "/images/venues/5267.jpg",
    "description": {
      "es": "Con AEG en Humboldthain, la cervecería Pfefferberg y el puerto histórico de Berlín",
      "en": "With AEG at Humboldthain, the Pfefferberg Brewery and the Historic Port of A cycling tour exploring industrial heritage",
      "de": "Mit AEG am Humboldthain, der Pfefferberg-Brauerei und dem Historischen Hafen von Berlin"
    }
  },
  {
    "id": 5268,
    "name": "Fahrradtour: Mit Kraftwerk Charlottenburg, Westhafen, Humboldthafen und Gendarmenmarkt",
    "coordinates": { "lng": 13.379298448562624, "lat": 52.49868402718657 },
    "image": "/images/venues/5268.jpg",
    "description": {
      "es": "Con la central eléctrica de Charlottenburg, Westhafen, Humboldthafen y Gendarmenmarkt",
      "en": "A bike ride through Berlin's historic and industrial landmarks",
      "de": "Mit Kraftwerk Charlottenburg, Westhafen, Humboldthafen und Gendarmenmarkt"
    }
  },
  {
    "id": 5408,
    "name": "Stolpersteine in Eichkamp",
    "coordinates": { "lng": 13.2681121, "lat": 52.498129 },
    "image": "/images/venues/5408.jpg",
    "description": {
      "es": "Piedras conmemorativas en Eichkamp como testimonio de la historia",
      "en": "Commemorative stones in Eichkamp bearing witness to history",
      "de": "Gedenksteine im Eichkamp als Zeugnis der Geschichte"
    }
  },
  {
    "id": 5419,
    "name": "WOGA-Komplex am Lehniner PLatz",
    "coordinates": { "lng": 13.302000000000021, "lat": 52.49792000000001 },
    "image": "/images/venues/5419.jpg",
    "description": {
      "es": "Una joya arquitectónica, el complejo WOGA es un testimonio de la historia de Berlín",
      "en": "An architectural gem, the WOGA complex is a testament to Berlin's history",
      "de": "Der WOGA-Komplex ist ein architektonisches Juwel und ein Zeugnis der Berliner Geschichte"
    }
  },
  {
    "id": 5569,
    "name": "Ehem. Alliierte Abhörstation auf dem Teufelsberg",
    "coordinates": { "lng": 13.240478038787842, "lat": 52.49781859530769 },
    "image": "/images/venues/5569.jpg",
    "description": {
      "es": "Explora los restos de un puesto de escucha de la Guerra Fría",
      "en": "Explore the remnants of a Cold War listening post",
      "de": "Erkunden Sie die Überreste einer Abhörstation aus dem Kalten Krieg"
    }
  },
  {
    "id": 5447,
    "name": "Ev. Kirche Zum Heiligen Kreuz",
    "coordinates": { "lng": 13.39601882906977, "lat": 52.496388100000004 },
    "image": "/images/venues/5447.jpg",
    "description": {
      "es": "Una iglesia neogótica conocida por sus impresionantes vidrieras",
      "en": "A neo-Gothic church known for its stunning stained glass",
      "de": "Eine neugotische Kirche, bekannt für ihre beeindruckenden Glasmalereien"
    }
  },
  {
    "id": 5496,
    "name": "Zentralbüro der Glaswerke Stralau",
    "coordinates": { "lng": 13.46754312515259, "lat": 52.49606808479277 },
    "image": "/images/venues/5496.jpg",
    "description": {
      "es": "Centro neurálgico de la empresa Stralau Glassworks",
      "en": "Central hub of the Stralau Glassworks company",
      "de": "Zentraler Knotenpunkt des Unternehmens Stralau Glassworks"
    }
  },
  {
    "id": 5452,
    "name": "Kinder-, Kultur- und Nachbarschaftszentrum Regenbogenfabrik",
    "coordinates": { "lng": 13.4266313, "lat": 52.4957728 },
    "image": "/images/venues/5452.jpg",
    "description": {
      "es": "Un vibrante centro para la infancia, la cultura y la comunidad",
      "en": "A vibrant hub for children, culture, and community",
      "de": "Ein lebendiges Zentrum für Kinder, Kultur und Gemeinschaft"
    }
  },
  {
    "id": 5352,
    "name": "Langhans-Gedenkstätte im Mausoleum Massute",
    "coordinates": { "lng": 13.389673233032227, "lat": 52.495297315527864 },
    "image": "/images/venues/5352.jpg",
    "description": {
      "es": "Visite el Memorial Langhans en el Mausoleo de Massute",
      "en": "Visit the Langhans Memorial in the Massute Mausoleum",
      "de": "Besuchen Sie das Langhans-Denkmal im Mausoleum von Massute"
    }
  },
  {
    "id": 5542,
    "name": "Mietshaus mit Tiefgarage, Werkstatt, Autosalon und Tankstelle",
    "coordinates": { "lng": 13.323800751342787, "lat": 52.49522542134448 },
    "image": "/images/venues/5542.jpg",
    "description": {
      "es": "Edificio histórico con un pasado intrigante",
      "en": "Historic building with an intriguing past",
      "de": "Historisches Gebäude mit einer faszinierenden Vergangenheit"
    }
  },
  {
    "id": 5420,
    "name": "Friedhöfe vor dem Halleschen Tor – Friedhof III der Jerusalems- und Neuen Kirche",
    "coordinates": { "lng": 13.3896154, "lat": 52.4949286 },
    "image": "/images/venues/5420.jpg",
    "description": {
      "es": "Cementerios ricos en historia",
      "en": "Cemeteries rich in history",
      "de": "Geschichtsträchtige Friedhöfe"
    }
  },
  {
    "id": 5486,
    "name": "Alte Desinfektionsanstalt I",
    "coordinates": { "lng": 13.4294514, "lat": 52.4943959 },
    "image": "/images/venues/5486.jpg",
    "description": {
      "es": "Retroceda en el tiempo en la antigua instalación de desinfección",
      "en": "Step back in time at the former disinfection facility",
      "de": "Eine Reise in die Vergangenheit in der ehemaligen Desinfektionsanlage"
    }
  },
  {
    "id": 5521,
    "name": "Ehem. Städtisches Arbeitshaus und Strafvollzugseinrichtung I Rummelsburg",
    "coordinates": { "lng": 13.484966754913332, "lat": 52.4943305688755 },
    "image": "/images/venues/5521.jpg",
    "description": {
      "es": "Un vistazo a la historia penal de Rummelsburg",
      "en": "A glimpse into Rummelsburg's penal history",
      "de": "Ein Blick in die Rummelsburger Strafrechtsgeschichte"
    }
  },
  {
    "id": 5451,
    "name": "Ev. Kirche Am Hohenzollernplatz",
    "coordinates": { "lng": 13.3269168, "lat": 52.494032 },
    "image": "/images/venues/5451.jpg",
    "description": {
      "es": "Un lugar de culto con encanto arquitectónico",
      "en": "A place of worship with architectural charm",
      "de": "Ein Gotteshaus mit architektonischem Charme"
    }
  },
  {
    "id": 5474,
    "name": "Kaserne des 1. Garde-Dragoner-Regiments –  Dragonerareal im Rathausblock",
    "coordinates": { "lng": 13.388085365295412, "lat": 52.494000694377334 },
    "image": "/images/venues/5474.jpg",
    "description": {
      "es": "Cuarteles históricos con patrimonio militar",
      "en": "Historic barracks with military heritage",
      "de": "Historische Kaserne mit militärischem Erbe"
    }
  },
  {
    "id": 5256,
    "name": "Offizierskasino des Kaiser-Franz-Garde-Grenadier-Regiments Nr. 2",
    "coordinates": { "lng": 13.4075946, "lat": 52.4929721 },
    "image": "/images/venues/5256.jpg",
    "description": {
      "es": "Explora el antiguo comedor de oficiales del Regimiento nº 2",
      "en": "Explore the former officer's mess of Regiment No. 2",
      "de": "Erkunden Sie die ehemalige Offiziersmesse des Regiments Nr. 2"
    }
  },
  {
    "id": 5558,
    "name": "Kath. St.-Bonifatius-Kirche",
    "coordinates": { "lng": 13.386009335517883, "lat": 52.492945732588844 },
    "image": "/images/venues/5558.jpg",
    "description": {
      "es": "Una impresionante iglesia católica conocida por su arquitectura neogótica y sus intrincadas vidrieras",
      "en": "A stunning Catholic church known for its Neo-Gothic architecture and intricate stained glass windows",
      "de": "Eine atemberaubende katholische Kirche, bekannt für ihre neugotische Architektur und die komplizierten Glasfenster"
    }
  },
  {
    "id": 5507,
    "name": "Kammergericht",
    "coordinates": { "lng": 13.357915878295898, "lat": 52.49251459540903 },
    "image": "/images/venues/5507.jpg",
    "description": {
      "es": "El Kammergericht, o Tribunal de Apelación, es el más alto tribunal de Berlín, ubicado en un edificio histórico que data de 1913",
      "en": "The Kammergericht, or Court of Appeals, is Berlin's highest court, housed in a historic building dating back to 1913",
      "de": "Das Kammergericht ist das höchste Gericht Berlins und befindet sich in einem historischen Gebäude aus dem Jahr 1913"
    }
  },
  {
    "id": 5524,
    "name": "Naturschutzzentrum Ökowerk Berlin im Wasserwerk Teufelssee",
    "coordinates": { "lng": 13.236575819491526, "lat": 52.4917614 },
    "image": "/images/venues/5524.jpg",
    "description": {
      "es": "Un centro medioambiental situado en la fábrica de agua de Teufelssee, que promueve la conservación y la conciencia ecológica",
      "en": "An environmental center located at the Teufelssee waterworks, promoting conservation and ecological awareness",
      "de": "Ein Umweltzentrum am Wasserwerk Teufelssee, das den Naturschutz und das ökologische Bewusstsein fördert"
    }
  },
  {
    "id": 5360,
    "name": "Wandgemälde auf Brandmauer im Hinterhof – FÄLLT AUS",
    "coordinates": { "lng": 13.4128111, "lat": 52.4910329 },
    "image": "/images/venues/5360.jpg",
    "description": {
      "es": "Lamentablemente, el mural del patio no se puede ver actualmente",
      "en": "Unfortunately, the courtyard mural is currently unavailable for viewing",
      "de": "Leider kann das Wandgemälde im Innenhof derzeit nicht besichtigt werden"
    }
  },
  {
    "id": 5425,
    "name": "Gasometer-Bunker Fichtestraße",
    "coordinates": { "lng": 13.412465371580883, "lat": 52.49025485 },
    "image": "/images/venues/5425.jpg",
    "description": {
      "es": "Un búnker gasómetro conservado, antaño parte de la historia industrial de Berlín",
      "en": "A preserved gasometer bunker, once part of Berlin's industrial history",
      "de": "Ein erhaltener Gasometer-Bunker, einst Teil der Berliner Industriegeschichte"
    }
  },
  {
    "id": 5456,
    "name": "Leibniz-Gymnasium mit Beobachtungsturm",
    "coordinates": { "lng": 13.396849300154178, "lat": 52.4899444 },
    "image": "/images/venues/5456.jpg",
    "description": {
      "es": "El Gimnasio Leibniz cuenta con una torre observatorio para la observación educativa de las estrellas",
      "en": "Leibniz-Gymnasium features an observatory tower for educational stargazing",
      "de": "Leibniz-Gymnasium verfügt über einen Beobachtungsturm für lehrreiche Sternbeobachtungen"
    }
  },
  {
    "id": 5440,
    "name": "Sowjetisches Ehrenmal im Treptower Park",
    "coordinates": { "lng": 13.468358516693117, "lat": 52.489875421152746 },
    "image": "/images/venues/5440.jpg",
    "description": {
      "es": "El Monumento a la Guerra Soviética en el Parque Treptower conmemora a los soldados caídos del Ejército Rojo en la Segunda Guerra Mundial",
      "en": "The Soviet War Memorial in Treptower Park commemorates fallen Red Army soldiers from World War II",
      "de": "Das sowjetische Kriegerdenkmal im Treptower Park erinnert an die gefallenen Soldaten der Roten Armee aus dem Zweiten Weltkrieg"
    }
  },
  {
    "id": 5417,
    "name": "Ev. Apostel-Paulus-Kirche",
    "coordinates": { "lng": 13.351843357086183, "lat": 52.48948345107256 },
    "image": "/images/venues/5417.jpg",
    "description": {
      "es": "Esta iglesia evangélica tiene importancia cultural en Berlín, ya que acoge diversos actos y servicios",
      "en": "This Evangelical church holds cultural significance in Berlin, hosting various events and services",
      "de": "Die evangelische Kirche hat eine kulturelle Bedeutung in Berlin und ist Schauplatz verschiedener Veranstaltungen und Gottesdienste"
    }
  },
  {
    "id": 5407,
    "name": "Ev. Passionskirche",
    "coordinates": { "lng": 13.397182238768197, "lat": 52.48948105 },
    "image": "/images/venues/5407.jpg",
    "description": {
      "es": "Una iglesia histórica con raíces que se remontan al siglo XIX, a menudo utilizada para conciertos y eventos culturales",
      "en": "A historical church with roots dating back to the 19th century, often used for concerts and cultural events",
      "de": "Eine historische Kirche, deren Wurzeln bis ins 19. Jahrhundert zurückreichen und die häufig für Konzerte und kulturelle Veranstaltungen genutzt wird"
    }
  },
  {
    "id": 5614,
    "name": "Viktoriapark",
    "coordinates": { "lng": 13.38020935, "lat": 52.4894583 },
    "image": "/images/venues/5614.jpg",
    "description": {
      "es": "Un parque urbano que ofrece paisajes pintorescos y la impresionante Cascada Victoria",
      "en": "An urban park offering picturesque landscapes and the stunning Victoria Waterfall",
      "de": "Ein Stadtpark mit malerischen Landschaften und dem beeindruckenden Victoria-Wasserfall"
    }
  },
  {
    "id": 5422,
    "name": "Friedhof Dreifaltigkeit II",
    "coordinates": { "lng": 13.3980572, "lat": 52.4887358 },
    "image": "/images/venues/5422.jpg",
    "description": {
      "es": "Un cementerio con una rica historia, lugar de descanso de notables berlineses",
      "en": "A cemetery with a rich history, resting place of notable Berliners",
      "de": "Ein Friedhof mit reicher Geschichte, Ruhestätte bedeutender Berliner"
    }
  },
  {
    "id": 5277,
    "name": "St.-Antonius-Hospital",
    "coordinates": { "lng": 13.5348687, "lat": 52.4887134 },
    "image": "/images/venues/5277.jpg",
    "description": {
      "es": "Un hospital local conocido por sus servicios sanitarios y su impacto en la comunidad",
      "en": "A local hospital known for its healthcare services and community impact",
      "de": "Ein lokales Krankenhaus, das für seine Gesundheitsdienste und seinen Einfluss auf die Gemeinschaft bekannt ist"
    }
  },
  {
    "id": 5426,
    "name": "Friedhof IV der Jerusalems- und Neuen Kirche",
    "coordinates": { "lng": 13.404082059860231, "lat": 52.48864723655929 },
    "image": "/images/venues/5426.jpg",
    "description": {
      "es": "Un cementerio cargado de historia que muestra el diverso patrimonio de Berlín",
      "en": "A cemetery steeped in history, showcasing Berlin's diverse heritage",
      "de": "Ein geschichtsträchtiger Friedhof, der das vielfältige Erbe Berlins zeigt"
    }
  },
  {
    "id": 5421,
    "name": "Luisenstädtischer Friedhof",
    "coordinates": { "lng": 13.4056844, "lat": 52.4886166 },
    "image": "/images/venues/5421.jpg",
    "description": {
      "es": "Un cementerio histórico con bellos monumentos funerarios, reflejo del patrimonio cultural de Berlín",
      "en": "A historic cemetery with beautiful grave monuments, reflecting Berlin's cultural heritage",
      "de": "Ein historischer Friedhof mit schönen Grabdenkmälern, die das kulturelle Erbe Berlins widerspiegeln"
    }
  },
  {
    "id": 5502,
    "name": "Chamissoplatz",
    "coordinates": { "lng": 13.3905756, "lat": 52.4883702 },
    "image": "/images/venues/5502.jpg",
    "description": {
      "es": "Una plaza encantadora rodeada de edificios históricos y una fuente central",
      "en": "A charming square surrounded by historic buildings and a central fountain",
      "de": "Ein bezaubernder Platz, umgeben von historischen Gebäuden und einem zentralen Springbrunnen"
    }
  },
  {
    "id": 5332,
    "name": "Die Villenkolonie Grunewald und ihre Bewohner",
    "coordinates": { "lng": 13.261377811431885, "lat": 52.48813766054424 },
    "image": "/images/venues/5332.jpg",
    "description": {
      "es": "Una zona residencial conocida por sus elegantes villas y sus notables residentes del pasado",
      "en": "A residential area known for its elegant villas and notable past residents",
      "de": "Ein Wohngebiet, das für seine eleganten Villen und seine berühmten früheren Bewohner bekannt ist"
    }
  },
  {
    "id": 5292,
    "name": "Berliner Moschee",
    "coordinates": { "lng": 13.311867713928224, "lat": 52.4873798186287 },
    "image": "/images/venues/5292.jpg",
    "description": {
      "es": "Una llamativa mezquita en Berlín, que combina elementos arquitectónicos islámicos modernos y tradicionales",
      "en": "A striking mosque in Berlin, combining modern and traditional Islamic architectural elements",
      "de": "Eine markante Moschee in Berlin, die moderne und traditionelle islamische Architekturelemente verbindet"
    }
  },
  {
    "id": 5284,
    "name": "Goethe-Gymnasium",
    "coordinates": { "lng": 13.32165433492985, "lat": 52.487344750000005 },
    "image": "/images/venues/5284.jpg",
    "description": {
      "es": "Un centro de secundaria de renombre centrado en la excelencia académica",
      "en": "A renowned secondary school with a strong focus on academic excellence",
      "de": "Eine renommierte Sekundarschule mit einem starken Fokus auf akademische Exzellenz"
    }
  },
  {
    "id": 5520,
    "name": "Turmhaus am Zenner",
    "coordinates": { "lng": 13.4773778, "lat": 52.4873182 },
    "image": "/images/venues/5520.jpg",
    "description": {
      "es": "La Casa de la Torre Zenner, que ofrece vistas panorámicas de los alrededores",
      "en": "The Zenner Tower House, offering scenic views of the surrounding area",
      "de": "Das Zenner-Turm-Haus, das einen herrlichen Blick auf die Umgebung bietet"
    }
  },
  {
    "id": 5346,
    "name": "Waldmuseum",
    "coordinates": { "lng": 13.251099586486818, "lat": 52.48709235793461 },
    "image": "/images/venues/5346.jpg",
    "description": {
      "es": "Un museo dedicado a los bosques locales y su importancia ecológica",
      "en": "A museum dedicated to the local forests and their ecological significance",
      "de": "Ein Museum, das den lokalen Wäldern und ihrer ökologischen Bedeutung gewidmet ist"
    }
  },
  {
    "id": 5413,
    "name": "Hermannplatz – zwischen Weltstadtambition und Moderne",
    "coordinates": { "lng": 13.424177169799805, "lat": 52.48633449800855 },
    "image": "/images/venues/5413.jpg",
    "description": {
      "es": "Hermannplatz, una vibrante intersección que refleja el carácter cosmopolita y la modernidad de Berlín",
      "en": "Hermannplatz, a vibrant intersection reflecting Berlin's cosmopolitan character and modernity",
      "de": "Der Hermannplatz, eine lebendige Kreuzung, die die Weltoffenheit und Modernität Berlins widerspiegelt"
    }
  },
  {
    "id": 5275,
    "name": "Museum Berlin-Karlshorst",
    "coordinates": { "lng": 13.5393339, "lat": 52.4862272 },
    "image": "/images/venues/5275.jpg",
    "description": {
      "es": "Este museo de Karlshorst muestra la historia y el patrimonio cultural de Berlín",
      "en": "This museum in Karlshorst showcases Berlin's history and cultural heritage",
      "de": "Das Museum in Karlshorst zeigt die Geschichte und das kulturelle Erbe Berlins"
    }
  },
  {
    "id": 5409,
    "name": "Archenhold-Sternwarte",
    "coordinates": { "lng": 13.476328233656188, "lat": 52.48586205 },
    "image": "/images/venues/5409.jpg",
    "description": {
      "es": "Un observatorio histórico con fascinantes exposiciones astronómicas y un gran telescopio",
      "en": "A historic observatory with fascinating astronomical exhibits and a large telescope",
      "de": "Eine historische Sternwarte mit faszinierenden astronomischen Exponaten und einem großen Teleskop"
    }
  },
  {
    "id": 5304,
    "name": "Amalien-Orgel",
    "coordinates": { "lng": 13.5282598, "lat": 52.4854461 },
    "image": "/images/venues/5304.jpg",
    "description": {
      "es": "Un notable órgano de tubos con una rica historia musical",
      "en": "A notable pipe organ with a rich musical history",
      "de": "Eine bemerkenswerte Pfeifenorgel mit einer reichen Musikgeschichte"
    }
  },
  {
    "id": 5546,
    "name": "Verbandshaus der Deutschen Buchdrucker",
    "coordinates": { "lng": 13.3838886, "lat": 52.4854344 },
    "image": "/images/venues/5546.jpg",
    "description": {
      "es": "La Casa de la Asociación de Impresores Alemanes, históricamente importante en la industria de la impresión",
      "en": "The Association House of German Printers, historically significant in the printing industry",
      "de": "Das Verbandshaus der deutschen Drucker, historisch bedeutsam für die Druckindustrie"
    }
  },
  {
    "id": 5418,
    "name": "Kirche der Christlichen Wissenschaft in Wilmersdorf",
    "coordinates": { "lng": 13.321411, "lat": 52.4851356 },
    "image": "/images/venues/5418.jpg",
    "description": {
      "es": "La Iglesia de la Ciencia Cristiana en Wilmersdorf",
      "en": "The Church of Christian Science in Wilmersdorf",
      "de": "Die Kirche der Christlichen Wissenschaft in Wilmersdorf"
    }
  },
  {
    "id": 5434,
    "name": "Alter Zwölf-Apostel-Kirchhof",
    "coordinates": { "lng": 13.3657225, "lat": 52.4846906 },
    "image": "/images/venues/5434.jpg",
    "description": {
      "es": "Un viejo cementerio llamado Viejo Cementerio de los Doce Apóstoles",
      "en": "An old cemetery called Old Twelve Apostles Cemetery",
      "de": "Ein alter Friedhof namens Old Twelve Apostles Cemetery"
    }
  },
  {
    "id": 5584,
    "name": "Informationsort Schwerbelastungskörper",
    "coordinates": { "lng": 13.372120857238771, "lat": 52.48451819435089 },
    "image": "/images/venues/5584.jpg",
    "description": {
      "es": "Un lugar de información sobre la carrocería pesada, posiblemente un edificio histórico",
      "en": "An information location about the heavy-duty body, possibly a historical building",
      "de": "Eine Informationsstelle über den Schwerlastträger, möglicherweise ein historisches Gebäude"
    }
  },
  {
    "id": 5582,
    "name": "Spuren zum KZ Columbia",
    "coordinates": { "lng": 13.400337696075441, "lat": 52.483773357498954 },
    "image": "/images/venues/5582.jpg",
    "description": {
      "es": "Información sobre rastros relacionados con el campo de concentración de Columbia",
      "en": "Information about traces relating to the Columbia concentration camp",
      "de": "Informationen über Spuren im Zusammenhang mit dem Konzentrationslager Columbia"
    }
  },
  {
    "id": 5513,
    "name": "Flughafen Tempelhof",
    "coordinates": { "lng": 13.389008045196535, "lat": 52.48281942521723 },
    "image": "/images/venues/5513.jpg",
    "description": {
      "es": "Un hito histórico, que en su día sirvió de aeropuerto comercial central y hoy ofrece una amplia gama de oportunidades de ocio y zonas recreativas en plena ciudad",
      "en": "A historical landmark, once served as a central commercial airport and today offers a wide range of leisure opportunities and recreational areas in the middle of the city",
      "de": "Ein historisches Wahrzeichen, das einst als zentraler Verkehrsflughafen diente und heute ein breites Spektrum an Freizeitmöglichkeiten und Erholungsgebieten mitten in der Stadt bietet"
    }
  },
  {
    "id": 5589,
    "name": "Ev. Paul-Gerhardt-Kirche",
    "coordinates": { "lng": 13.34888219833374, "lat": 52.48273448503852 },
    "image": "/images/venues/5589.jpg",
    "description": {
      "es": "La Iglesia Evangélica Paul Gerhardt",
      "en": "The Evangelical Paul Gerhardt Church",
      "de": "Die evangelische Paul-Gerhardt-Kirche"
    }
  },
  {
    "id": 5401,
    "name": "KAHO. Raum für Kultur / Theater Karlshorst",
    "coordinates": { "lng": 13.526668909104787, "lat": 52.48203735 },
    "image": "/images/venues/5401.jpg",
    "description": {
      "es": "KAHO es un espacio para la cultura y el teatro en Karlshorst",
      "en": "KAHO is a space for culture and theater in Karlshorst",
      "de": "KAHO ist ein Raum für Kultur und Theater in Karlshorst"
    }
  },
  {
    "id": 5586,
    "name": "Deutschlandradio - Funkhaus Berlin",
    "coordinates": { "lng": 13.337091207504272, "lat": 52.480231943104066 },
    "image": "/images/venues/5586.jpg",
    "description": {
      "es": "La casa de la radio Deutschlandradio en Berlín",
      "en": "The Deutschlandradio radio house in Berlin",
      "de": "Das Deutschlandradio-Radiohaus in Berlin"
    }
  },
  {
    "id": 5585,
    "name": "SCHÖNEBERG: Lern- und Gedenkort Kohlenhandlung Bruno Meyer Nachfahren",
    "coordinates": { "lng": 13.3608734, "lat": 52.4795396 },
    "image": "/images/venues/5585.jpg",
    "description": {
      "es": "Lugar de aprendizaje y conmemoración en el almacén de carbón de los descendientes de Bruno Meyer",
      "en": "A learning and memorial site in Schöneberg that is connected to the Bruno Meyer descendants coal store",
      "de": "Lern- und Gedenkort am Kohlenlager der Nachkommen Bruno Meyers"
    }
  },
  {
    "id": 5423,
    "name": "Sudhaus des KINDL – Zentrum für zeitgenössische Kunst",
    "coordinates": { "lng": 13.431275, "lat": 52.4794637 },
    "image": "/images/venues/5423.jpg",
    "description": {
      "es": "La cervecería del Centro KINDL de Arte Contemporáneo",
      "en": "The brewhouse in the KINDL Center for Contemporary Art",
      "de": "Das Sudhaus im KINDL Zentrum für zeitgenössische Kunst"
    }
  },
  {
    "id": 5333,
    "name": "Friedenau – eine idyllische Landgemeinde",
    "coordinates": { "lng": 13.328411579132082, "lat": 52.477448269705036 },
    "image": "/images/venues/5333.jpg",
    "description": {
      "es": "Información sobre Friedenau como idílica comunidad rural",
      "en": "Information about Friedenau as an idyllic rural community",
      "de": "Informationen über Friedenau als idyllische Landgemeinde"
    }
  },
  {
    "id": 5481,
    "name": "werkstatt denkmal: Wohnhaus und Bewag-Schalthaus (Umspannwerk)",
    "coordinates": { "lng": 13.4412411, "lat": 52.4768463 },
    "image": "/images/venues/5481.jpg",
    "description": {
      "es": "edificio de viviendas y casa de conmutación Bewag (subestación)",
      "en": "A monument workshop that explores a residential building and a Bewag switching house (substation)",
      "de": "Wohnhaus und Bewag-Schalthaus (Umspannwerk)"
    }
  },
  {
    "id": 5490,
    "name": "Relikte des Spiel- und Sportparks Neukölln auf dem Flugfeld Tempelhof",
    "coordinates": { "lng": 13.418490886688234, "lat": 52.4766902436237 },
    "image": "/images/venues/5490.jpg",
    "description": {
      "es": "Restos del parque lúdico y deportivo de Neukölln en el antiguo aeródromo de Tempelhof",
      "en": "Remains of the Neukölln play and sports park on the former Tempelhof airfield",
      "de": "Reste des Neuköllner Spiel- und Sportparks auf dem ehemaligen Tempelhofer Flugfeld"
    }
  },
  {
    "id": 5400,
    "name": "Gymnasium Friedenau",
    "coordinates": { "lng": 13.333133464095852, "lat": 52.47628495 },
    "image": "/images/venues/5400.jpg",
    "description": {
      "es": "El instituto de Friedenau",
      "en": "The high school in Friedenau",
      "de": "Das Gymnasium in Friedenau"
    }
  },
  {
    "id": 5338,
    "name": "Waldsiedlung Lichtenberg in Karlshorst",
    "coordinates": { "lng": 13.510007858276369, "lat": 52.47615438972225 },
    "image": "/images/venues/5338.jpg",
    "description": {
      "es": "El asentamiento forestal de Lichtenberg en Karlshorst",
      "en": "The Lichtenberg forest settlement in Karlshorst",
      "de": "Die Waldsiedlung Lichtenberg in Karlshorst"
    }
  },
  {
    "id": 5583,
    "name": "Gedenkort SA-Gefängnis Papestraße",
    "coordinates": { "lng": 13.370004573616061, "lat": 52.4755781 },
    "image": "/images/venues/5583.jpg",
    "description": {
      "es": "Un monumento a la prisión de las SA en Papestrasse",
      "en": "A memorial for the SA Prison on Papestrasse",
      "de": "Eine Gedenkstätte für das SA-Gefängnis in der Papestraße"
    }
  },
  {
    "id": 5531,
    "name": "Zwangsarbeiterlager Kaulsdorf – FÄLLT AUS",
    "coordinates": { "lng": 13.5679134, "lat": 52.4752425 },
    "image": "/images/venues/5531.jpg",
    "description": {
      "es": "Información sobre un campo de trabajos forzados en Kaulsdorf que podría no estar abierto al público (CANCELADO)",
      "en": "Information about a forced labor camp in Kaulsdorf that may not be open to the public (CANCELLED)",
      "de": "Informationen über ein Zwangsarbeitslager in Kaulsdorf, das nicht öffentlich zugänglich sein darf (ABGESAGT)"
    }
  },
  {
    "id": 5508,
    "name": "Ev. Bethlehemskirche im Böhmischen Dorf",
    "coordinates": { "lng": 13.447458744049072, "lat": 52.47420369571061 },
    "image": "/images/venues/5508.jpg",
    "description": {
      "es": "La Iglesia Evangélica de Belén en el Pueblo de Bohemia",
      "en": "The Evangelical Bethlehem Church in the Bohemian Village",
      "de": "Die evangelische Bethlehemkirche im böhmischen Dorf"
    }
  },
  {
    "id": 5389,
    "name": "Flugplatz Gatow",
    "coordinates": { "lng": 13.141735, "lat": 52.474199 },
    "image": "/images/venues/5389.jpg",
    "description": {
      "es": "El aeródromo de Gatow",
      "en": "The Gatow airfield",
      "de": "Der Flugplatz Gatow"
    }
  },
  {
    "id": 5311,
    "name": "Alte Dorfschmiede auf dem Richardplatz im Böhmischen Dorf",
    "coordinates": { "lng": 13.446312302858413, "lat": 52.47418825 },
    "image": "/images/venues/5311.jpg",
    "description": {
      "es": "Un viejo herrero de pueblo en Richardplatz, en el Pueblo de Bohemia",
      "en": "An old village blacksmith on Richardplatz in the Bohemian Village",
      "de": "Eine alte Dorfschmiede am Richardplatz im Böhmischen Dorf"
    }
  },
  {
    "id": 5305,
    "name": "Roxy-Palast",
    "coordinates": { "lng": 13.336718355344761, "lat": 52.47316505 },
    "image": "/images/venues/5305.jpg",
    "description": {
      "es": "El Roxy Palace",
      "en": "The Roxy Palace",
      "de": "Der Roxy-Palast"
    }
  },
  {
    "id": 5296,
    "name": "Autobahnüberbauung Schlangenbader Straße",
    "coordinates": { "lng": 13.3069706, "lat": 52.4727689 },
    "image": "/images/venues/5296.jpg",
    "description": {
      "es": "Un desarrollo de autopista en Schnurbader Straße",
      "en": "A motorway development on Schnurbader Straße",
      "de": "Ein Autobahnausbau an der Schnurbader Straße"
    }
  },
  {
    "id": 5444,
    "name": "Gedenkstätte für NS-Zwangsarbeiter des kirchlichen Friedhoflagers Neukölln",
    "coordinates": { "lng": 13.428897857666017, "lat": 52.47257314977933 },
    "image": "/images/venues/5444.jpg",
    "description": {
      "es": "Un monumento en memoria de los trabajadores forzados nazis en el campo del cementerio de la iglesia de Neukölln",
      "en": "A memorial for the Nazi forced laborers at the church cemetery camp in Neukölln",
      "de": "Ein Mahnmal für die NS-Zwangsarbeiter auf dem kirchlichen Friedhofslager in Neukölln"
    }
  },
  {
    "id": 5476,
    "name": "Ev. Magdalenenkirche",
    "coordinates": { "lng": 13.441706090603741, "lat": 52.4721226 },
    "image": "/images/venues/5476.jpg",
    "description": {
      "es": "La Magdalenenkirche evangélica",
      "en": "The Evangelical Magdalenenkirche",
      "de": "Die evangelische Magdalenenkirche"
    }
  },
  {
    "id": 5329,
    "name": "Internationales Begegnungszentrum der Wissenschaft (IBZ)",
    "coordinates": { "lng": 13.31691026687622, "lat": 52.47186732358612 },
    "image": "/images/venues/5329.jpg",
    "description": {
      "es": "El Centro Internacional de Encuentros para la Ciencia (IBZ)",
      "en": "The International Meeting Center for Science (IBZ)",
      "de": "Das Internationale Begegnungszentrum der Wissenschaft (IBZ)"
    }
  },
  {
    "id": 5573,
    "name": "Haus Dahlem",
    "coordinates": { "lng": 13.293629765659272, "lat": 52.4703282 },
    "image": "/images/venues/5573.jpg",
    "description": {
      "es": "La Casa Dahlem",
      "en": "The House Dahlem",
      "de": "Das Haus Dahlem"
    }
  },
  {
    "id": 5387,
    "name": "Museum zur Geschichte der Berliner Straßenreinigung und Müllabfuhr",
    "coordinates": { "lng": 13.3818032, "lat": 52.4686077 },
    "image": "/images/venues/5387.jpg",
    "description": {
      "es": "Un museo sobre la historia de la limpieza viaria y la recogida de basuras de Berlín",
      "en": "A museum on the history of Berlin street cleaning and garbage collection",
      "de": "Ein Museum zur Geschichte der Berliner Straßenreinigung und Müllabfuhr"
    }
  },
  {
    "id": 5291,
    "name": "Garten Allinger",
    "coordinates": { "lng": 13.260927200317383, "lat": 52.4685602463966 },
    "image": "/images/venues/5291.jpg",
    "description": {
      "es": "El jardín Allinger",
      "en": "The Garden Allinger",
      "de": "Der Garten Allinger"
    }
  },
  {
    "id": 5359,
    "name": "Künstlerkolonie",
    "coordinates": { "lng": 13.3104428, "lat": 52.4676139 },
    "image": "/images/venues/5359.jpg",
    "description": {
      "es": "Una colonia de artistas",
      "en": "An artists' colony",
      "de": "Eine Künstlerkolonie"
    }
  },
  {
    "id": 5608,
    "name": "Jagdschloss Grunewald",
    "coordinates": { "lng": 13.26161947486878, "lat": 52.467199940831726 },
    "image": "/images/venues/5608.jpg",
    "description": {
      "es": "El pabellón de caza de Grunewald",
      "en": "The Grunewald hunting lodge",
      "de": "Das Jagdhaus Grunewald"
    }
  },
  {
    "id": 5416,
    "name": "Schilfdachkapelle zum Guten Hirten",
    "coordinates": { "lng": 13.127959999050837, "lat": 52.46493125 },
    "image": "/images/venues/5416.jpg",
    "description": {
      "es": "Una capilla con techo de cañizo al Buen Pastor",
      "en": "A reed roof chapel to the Good Shepherd",
      "de": "Eine Kapelle mit Schilfdach für den Guten Hirten"
    }
  },
  {
    "id": 5518,
    "name": "Kirchhof und Dorfkirche Alt-Tempelhof",
    "coordinates": { "lng": 13.383180346651379, "lat": 52.463584850000004 },
    "image": "/images/venues/5518.jpg",
    "description": {
      "es": "Un cementerio y una iglesia de pueblo en Alt-Tempelhof",
      "en": "A churchyard and a village church in Alt-Tempelhof",
      "de": "Ein Friedhof und eine Dorfkirche in Alt-Tempelhof"
    }
  },
  {
    "id": 5411,
    "name": "Ordenshaus der Großen Landesloge – Haus Heydenreich",
    "coordinates": { "lng": 13.295216608868536, "lat": 52.46333335 },
    "image": "/images/venues/5411.jpg",
    "description": {
      "es": "La Casa de la Orden de la Gran Logia Estatal, también conocida como Casa Heydenreich",
      "en": "The Order House of the Great State Lodge, also known as House Heydenreich",
      "de": "Das Ordenshaus der Großen Landesloge, auch bekannt als Haus Heydenreich"
    }
  },
  {
    "id": 5405,
    "name": "Elektropolis Schöneweide",
    "coordinates": { "lng": 13.5187842, "lat": 52.4604992 },
    "image": "/images/venues/5405.jpg",
    "description": {
      "es": "Elektropolis Schöneweide, un lugar histórico en Schöneweide",
      "en": "Elektropolis Schöneweide, a historical place in Schöneweide",
      "de": "Elektropolis Schöneweide, ein historischer Ort in Schöneweide"
    }
  },
  {
    "id": 5566,
    "name": "Haus Wiegand",
    "coordinates": { "lng": 13.299872875213623, "lat": 52.46043528436628 },
    "image": "/images/venues/5566.jpg",
    "description": {
      "es": "Información sobre Haus Wiegand",
      "en": "Information about Haus Wiegand",
      "de": "Informationen über Haus Wiegand"
    }
  },
  {
    "id": 5497,
    "name": "STEGLITZ: Badehaus von Erwin Barth – FÄLLT AUS",
    "coordinates": { "lng": 13.3080736, "lat": 52.4604201 },
    "image": "/images/venues/5497.jpg",
    "description": {
      "es": "Casa de baños de Erwin Barth - CANCELADA",
      "en": "A visit may not be possible - CANCELED)",
      "de": "Erwin Barths Badehaus - ABGESAGT"
    }
  },
  {
    "id": 5363,
    "name": "Gartenstadtsiedlung Elsengrund",
    "coordinates": { "lng": 13.5906497, "lat": 52.4603129 },
    "image": "/images/venues/5363.jpg",
    "description": {
      "es": "El asentamiento de la ciudad jardín de Elsengrund",
      "en": "The Elsengrund Garden City Settlement",
      "de": "Die Gartenstadtsiedlung Elsengrund"
    }
  },
  {
    "id": 5544,
    "name": "Siedlung Lindenhof",
    "coordinates": { "lng": 13.3644397, "lat": 52.4599232 },
    "image": "/images/venues/5544.jpg",
    "description": {
      "es": "El asentamiento Lindenhof",
      "en": "The Lindenhof settlement",
      "de": "Die Lindenhofsiedlung"
    }
  },
  {
    "id": 5443,
    "name": "AEG-Transformatorenfabrik Oberschöneweide",
    "coordinates": { "lng": 13.515758514404299, "lat": 52.45989269527577 },
    "image": "/images/venues/5443.jpg",
    "description": {
      "es": "La fábrica de transformadores AEG de Oberschöneweide",
      "en": "The AEG transformer factory in Oberschöneweide",
      "de": "Das AEG-Transformatorenwerk in Oberschöneweide"
    }
  },
  {
    "id": 5293,
    "name": "Martin-Niemöller-Haus in Dahlem",
    "coordinates": { "lng": 13.2867028603361, "lat": 52.4594417 },
    "image": "/images/venues/5293.jpg",
    "description": {
      "es": "La casa Martin Niemöller en Dahlem",
      "en": "The Martin Niemöller House in Dahlem",
      "de": "Das Martin-Niemöller-Haus in Dahlem"
    }
  },
  {
    "id": 5396,
    "name": "St.-Annen-Kirche Dahlem",
    "coordinates": { "lng": 13.286591745572299, "lat": 52.4586792 },
    "image": "/images/venues/5396.jpg",
    "description": {
      "es": "La iglesia de Santa Ana en Dahlem",
      "en": "The St. Anne's Church in Dahlem",
      "de": "Die St. Annenkirche in Dahlem"
    }
  },
  {
    "id": 5552,
    "name": "Verwaltungsbau der Nationalen Automobil-Gesellschaft (NAG)",
    "coordinates": { "lng": 13.529040813446045, "lat": 52.45670239767748 },
    "image": "/images/venues/5552.jpg",
    "description": {
      "es": "El edificio administrativo de la Sociedad Nacional del Automóvil (NAG)",
      "en": "The administration building of the National Automobile Society (NAG)",
      "de": "Das Verwaltungsgebäude der Nationalen Automobilgesellschaft (NAG)"
    }
  },
  {
    "id": 5610,
    "name": "Kinderheim A. S. Makarenko in der Königsheide",
    "coordinates": { "lng": 13.4997471, "lat": 52.4551766 },
    "image": "/images/venues/5610.jpg",
    "description": {
      "es": "El hogar infantil A. S. Makarenko en la Königsheide",
      "en": "The A. S. Makarenko children's home in the Königsheide",
      "de": "Das A. S. Makarenko Kinderheim in der Königsheide"
    }
  },
  {
    "id": 5489,
    "name": "Wasserturm auf dem Friedhof Bergstraße",
    "coordinates": { "lng": 13.341833353042603, "lat": 52.45474103442115 },
    "image": "/images/venues/5489.jpg",
    "description": {
      "es": "La torre de agua en el cementerio Bergstrasse",
      "en": "The water tower at the Bergstrasse cemetery",
      "de": "Der Wasserturm auf dem Friedhof Bergstraße"
    }
  },
  {
    "id": 5287,
    "name": "Rathaus Friedrichshagen",
    "coordinates": { "lng": 13.624746750716497, "lat": 52.454391400000006 },
    "image": "/images/venues/5287.jpg",
    "description": {
      "es": "El ayuntamiento de Friedrichshagen",
      "en": "The town hall in Friedrichshagen",
      "de": "Das Rathaus in Friedrichshagen"
    }
  },
  {
    "id": 5276,
    "name": "Altes Kladower Bauernwohnhaus",
    "coordinates": { "lng": 13.143677790794019, "lat": 52.4537169 },
    "image": "/images/venues/5276.jpg",
    "description": {
      "es": "Una antigua granja en Kladower",
      "en": "An old farmhouse in Kladower",
      "de": "Ein altes Bauernhaus in Kladower"
    }
  },
  {
    "id": 5446,
    "name": "Zwangsarbeitslager 75/76",
    "coordinates": { "lng": 13.518797918499157, "lat": 52.45260935 },
    "image": "/images/venues/5446.jpg",
    "description": {
      "es": "Información sobre el campo de trabajos forzados 75/76",
      "en": "Information about the forced labor camp 75/76",
      "de": "Informationen über das Zwangsarbeitslager 75/76"
    }
  },
  {
    "id": 5280,
    "name": "Textilverarbeitungsfabrik Otto Schneider",
    "coordinates": { "lng": 13.5340944, "lat": 52.4524693 },
    "image": "/images/venues/5280.jpg",
    "description": {
      "es": "La fábrica de procesamiento textil Otto Schneider",
      "en": "The Otto Schneider textile processing factory",
      "de": "Die Textilverarbeitungsfabrik Otto Schneider"
    }
  },
  {
    "id": 5339,
    "name": "Key piece of modernism – Großsiedlung Britz (Hufeisensiedlung)",
    "coordinates": { "lng": 13.449282646179201, "lat": 52.45216497796711 },
    "image": "/images/venues/5339.jpg",
    "description": {
      "es": "Una pieza clave del modernismo: el asentamiento Britz, también conocido como Hufeisensiedlung",
      "en": "A key piece of modernism - the Britz settlement, also known as Hufeisensiedlung",
      "de": "Ein Schlüsselwerk der Moderne - die Britzer Siedlung, auch Hufeisensiedlung genannt"
    }
  },
  {
    "id": 5355,
    "name": "Realgymnasium – BEST-Sabel Oberschule",
    "coordinates": { "lng": 13.5715328, "lat": 52.4516532 },
    "image": "/images/venues/5355.jpg",
    "description": {
      "es": "El Realgymnasium - BEST-Sabel Oberschule",
      "en": "The Realgymnasium - BEST-Sabel Oberschule",
      "de": "Das Realgymnasium - BEST-Sabel Oberschule"
    }
  },
  {
    "id": 5454,
    "name": "Christophoruskirche",
    "coordinates": { "lng": 13.625169955526886, "lat": 52.4509759 },
    "image": "/images/venues/5454.jpg",
    "description": {
      "es": "La Christophoruskirche",
      "en": "The Christophoruskirche",
      "de": "Die Christophoruskirche"
    }
  },
  {
    "id": 5539,
    "name": "Jesus-Christus-Kirche Dahlem",
    "coordinates": { "lng": 13.2823041, "lat": 52.4499129 },
    "image": "/images/venues/5539.jpg",
    "description": {
      "es": "La Iglesia de Jesucristo en Dahlem",
      "en": "The Jesus Christ Church in Dahlem",
      "de": "Die Jesus-Christus-Kirche in Dahlem"
    }
  },
  {
    "id": 5345,
    "name": "Waldsiedlung Zehlendorf – Onkel Toms Hütte",
    "coordinates": { "lng": 13.25303077697754, "lat": 52.44978493402821 },
    "image": "/images/venues/5345.jpg",
    "description": {
      "es": "Información sobre el asentamiento forestal de Zehlendorf, también conocido como Choza del Tío Tom",
      "en": "Information about the Zehlendorf Forest Settlement, also known as Uncle Tom's Hut",
      "de": "Informationen über die Zehlendorfer Waldsiedlung, auch bekannt als Onkel Toms Hütte"
    }
  },
  {
    "id": 5289,
    "name": "Großsiedlung Britz (Hufeisensiedlung): Wohnen im Welterbe",
    "coordinates": { "lng": 13.44954013824463, "lat": 52.448228681911594 },
    "image": "/images/venues/5289.jpg",
    "description": {
      "es": "Vivir en el Patrimonio Mundial",
      "en": "Further information about the Britz settlement, especially living in the World Heritage Site",
      "de": "Leben im Welterbe"
    }
  },
  {
    "id": 5314,
    "name": "Großsiedlung Britz (Hufeisensiedlung)",
    "coordinates": { "lng": 13.4495784, "lat": 52.4480874 },
    "image": "/images/venues/5314.jpg",
    "description": {
      "es": "El asentamiento Britz, también conocido como el asentamiento de la herradura",
      "en": "The Britz settlement, also known as the horseshoe settlement",
      "de": "Die Siedlung Britz, auch bekannt als Hufeisensiedlung"
    }
  },
  {
    "id": 5343,
    "name": "Bahnbetriebswerk Schöneweide",
    "coordinates": { "lng": 13.520028591156008, "lat": 52.447012412987426 },
    "image": "/images/venues/5343.jpg",
    "description": {
      "es": "El depósito ferroviario de Schöneweide",
      "en": "The railway depot in Schöneweide",
      "de": "Das Bahnbetriebswerk in Schöneweide"
    }
  },
  {
    "id": 5356,
    "name": "Mies van der Rohe Villen und Garten",
    "coordinates": { "lng": 13.234061419715133, "lat": 52.446478299999995 },
    "image": "/images/venues/5356.jpg",
    "description": {
      "es": "Las villas de Mies van der Rohe y el jardín asociado",
      "en": "Mies van der Rohe's villas and the associated garden",
      "de": "Die Villen von Mies van der Rohe und der dazugehörige Garten"
    }
  },
  {
    "id": 5373,
    "name": "Ruderhaus Hahns Mühle",
    "coordinates": { "lng": 13.614556490476188, "lat": 52.4464459 },
    "image": "/images/venues/5373.jpg",
    "description": {
      "es": "El puente de mando de Hahns Mühle",
      "en": "The Hahns Mühle wheelhouse",
      "de": "Das Steuerhaus der Hahns Mühle"
    }
  },
  {
    "id": 5441,
    "name": "Internationale Jugendbauhütte am Bahnbetriebswerk Schöneweide",
    "coordinates": { "lng": 13.5206126, "lat": 52.4463728 },
    "image": "/images/venues/5441.jpg",
    "description": {
      "es": "Información sobre la Caseta Internacional de la Juventud en el depósito ferroviario de Schöneweide",
      "en": "Information about the International Youth Construction Hut at the Schöneweide railway depot",
      "de": "Informationen über die Internationale Jugendbauhütte im Bahnbetriebswerk Schöneweide"
    }
  },
  {
    "id": 5445,
    "name": "Gutshof Britz",
    "coordinates": { "lng": 13.437778396959247, "lat": 52.44596575 },
    "image": "/images/venues/5445.jpg",
    "description": {
      "es": "El Gutshof Britz",
      "en": "The Gutshof Britz",
      "de": "Der Gutshof Britz"
    }
  },
  {
    "id": 5473,
    "name": "Projektraum Kunst im TautHaus",
    "coordinates": { "lng": 13.447048299999999, "lat": 52.44527615 },
    "image": "/images/venues/5473.jpg",
    "description": {
      "es": "Un espacio de exposición para el arte contemporáneo en la TautHaus",
      "en": "An exhibition space for contemporary art in the TautHaus",
      "de": "Ein Ausstellungsraum für zeitgenössische Kunst im TautHaus"
    }
  },
  {
    "id": 5374,
    "name": "Martin-Luther-Gedächtniskirche",
    "coordinates": { "lng": 13.378772735595703, "lat": 52.44487405232672 },
    "image": "/images/venues/5374.jpg",
    "description": {
      "es": "Una impresionante iglesia en Berlín con importancia histórica",
      "en": "An impressive church in Berlin with historical significance",
      "de": "Eine beeindruckende Kirche in Berlin mit historischer Bedeutung"
    }
  },
  {
    "id": 5369,
    "name": "KÖPENICK: Fachwerkhaus auf dem Tonnenhof des Wasser- und Schifffahrtsamtes Köpenick",
    "coordinates": { "lng": 13.570325374603273, "lat": 52.44417432155793 },
    "image": "/images/venues/5369.jpg",
    "description": {
      "es": "Casa con entramado de madera en el patio de barricas de la Oficina de Vías Navegables y Navegación de Köpenick",
      "en": "Half-timbered house on the barrel yard of the Waterways and Shipping Office A charming half-timbered house on the barrel yard of the Waterways and Shipping Office in Köpenick",
      "de": "Fachwerkhaus auf dem Tonnenhof des Wasserstraßen- und Schifffahrtsamtes Köpenick"
    }
  },
  {
    "id": 5281,
    "name": "Fahrradtour: Stammbahn und Stadtentwicklung",
    "coordinates": { "lng": 13.294932246208193, "lat": 52.443163943033426 },
    "image": "/images/venues/5281.jpg",
    "description": {
      "es": "Stammbahn y desarrollo urbano",
      "en": "A bicycle tour that explores the Stammbahn and the urban development of Berlin",
      "de": "Stammbahn und Stadtentwicklung"
    }
  },
  {
    "id": 5370,
    "name": "Ehem. Kraftwerk Steglitz",
    "coordinates": { "lng": 13.3298047, "lat": 52.443117 },
    "image": "/images/venues/5370.jpg",
    "description": {
      "es": "La antigua central eléctrica de Steglitz, testimonio de la historia industrial",
      "en": "The former power plant in Steglitz, a testimony to industrial history",
      "de": "Das ehemalige Kraftwerk in Steglitz, ein Zeugnis der Industriegeschichte"
    }
  },
  {
    "id": 5252,
    "name": "Landhaus Fiedler – Haus der Jugend Zehlendorf",
    "coordinates": { "lng": 13.23808380864341, "lat": 52.4416716 },
    "image": "/images/venues/5252.jpg",
    "description": {
      "es": "La Landhaus Fiedler, ahora utilizada como casa de la juventud, en Zehlendorf",
      "en": "The Landhaus Fiedler, now used as a house of youth, in Zehlendorf",
      "de": "Das Landhaus Fiedler, heute als Haus der Jugend genutzt, in Zehlendorf"
    }
  },
  {
    "id": 5376,
    "name": "Ev. Dorfkirche Mariendorf",
    "coordinates": { "lng": 13.386915922164917, "lat": 52.43964215130622 },
    "image": "/images/venues/5376.jpg",
    "description": {
      "es": "La iglesia protestante del pueblo de Mariendorf, un lugar de culto histórico",
      "en": "The Protestant village church in Mariendorf, a historic place of worship",
      "de": "Die evangelische Dorfkirche in Mariendorf, ein historisches Gotteshaus"
    }
  },
  {
    "id": 5562,
    "name": "Straßenbahnbetriebshof Köpenick",
    "coordinates": { "lng": 13.581630000000018, "lat": 52.43939 },
    "image": "/images/venues/5562.jpg",
    "description": {
      "es": "Las cocheras de tranvías de Köpenick, un nudo de transportes",
      "en": "The tram depot in Köpenick, a transport hub",
      "de": "Das Straßenbahndepot in Köpenick, ein Verkehrsknotenpunkt"
    }
  },
  {
    "id": 5254,
    "name": "Frauengefängnis Lichterfelde",
    "coordinates": { "lng": 13.308628404877297, "lat": 52.4377791 },
    "image": "/images/venues/5254.jpg",
    "description": {
      "es": "La antigua cárcel de mujeres de Lichterfelde con una interesante historia",
      "en": "The former women's prison in Lichterfelde with an interesting history",
      "de": "Das ehemalige Frauengefängnis in Lichterfelde mit einer interessanten Geschichte"
    }
  },
  {
    "id": 5551,
    "name": "Alte Dorfkirche Zehlendorf",
    "coordinates": { "lng": 13.25998306274414, "lat": 52.43547580578899 },
    "image": "/images/venues/5551.jpg",
    "description": {
      "es": "La antigua iglesia del pueblo de Zehlendorf, un hito religioso",
      "en": "The old village church in Zehlendorf, a religious landmark",
      "de": "Die alte Dorfkirche in Zehlendorf, ein religiöses Wahrzeichen"
    }
  },
  {
    "id": 5371,
    "name": "Heimatmuseum Zehlendorf",
    "coordinates": { "lng": 13.2603049, "lat": 52.4354496 },
    "image": "/images/venues/5371.jpg",
    "description": {
      "es": "Un museo de historia local en Zehlendorf que presenta la historia local",
      "en": "A local history museum in Zehlendorf that presents local history",
      "de": "Ein Heimatmuseum in Zehlendorf, das Heimatgeschichte präsentiert"
    }
  },
  {
    "id": 5362,
    "name": "Dorfkirche im alten Fischerdorf Rahnsdorf",
    "coordinates": { "lng": 13.6929006, "lat": 52.4337552 },
    "image": "/images/venues/5362.jpg",
    "description": {
      "es": "La iglesia del histórico pueblo pesquero de Rahnsdorf",
      "en": "The village church in the historic fishing village of Rahnsdorf",
      "de": "Die Dorfkirche im historischen Fischerdorf Rahnsdorf"
    }
  },
  {
    "id": 5428,
    "name": "Britzer Mühle",
    "coordinates": { "lng": 13.43355417251587, "lat": 52.4319305045854 },
    "image": "/images/venues/5428.jpg",
    "description": {
      "es": "El Britzer Mühle, un edificio histórico y emblemático",
      "en": "The Britzer Mühle, a historical building and landmark",
      "de": "Die Britzer Mühle, ein historisches Gebäude und Wahrzeichen"
    }
  },
  {
    "id": 5554,
    "name": "Luftfahrttechnische Denkmale Adlershof und Flugfeld Johannisthal",
    "coordinates": { "lng": 13.531025648117067, "lat": 52.43183892476087 },
    "image": "/images/venues/5554.jpg",
    "description": {
      "es": "Tecnología aeronáutica histórica en Adlershof y en el aeródromo de Johannisthal",
      "en": "Historical aviation technology in Adlershof and at the Johannisthal airfield",
      "de": "Historische Luftfahrttechnik in Adlershof und auf dem Flugplatz Johannisthal"
    }
  },
  {
    "id": 5294,
    "name": "Studentendorf Schlachtensee",
    "coordinates": { "lng": 13.21560859680176, "lat": 52.42907835787384 },
    "image": "/images/venues/5294.jpg",
    "description": {
      "es": "Un pueblo de estudiantes en Schlachtensee, un concepto de vida animado",
      "en": "A student village on Schlachtensee, a lively living concept",
      "de": "Ein Studentendorf am Schlachtensee, ein lebendiges Wohnkonzept"
    }
  },
  {
    "id": 5403,
    "name": "K19 Studios Berlin im Studentendorf Schlachtensee",
    "coordinates": { "lng": 13.216041694672292, "lat": 52.4283312 },
    "image": "/images/venues/5403.jpg",
    "description": {
      "es": "Los estudios K19 en el pueblo estudiantil de Schlachtensee, un lugar creativo",
      "en": "The K19 Studios in the Schlachtensee student village, a creative place",
      "de": "Die K19 Studios im Studentendorf Schlachtensee, ein kreativer Ort"
    }
  },
  {
    "id": 5410,
    "name": "Landhaus und Landhausgarten Mittelhof",
    "coordinates": { "lng": 13.20232999999996, "lat": 52.42822 },
    "image": "/images/venues/5410.jpg",
    "description": {
      "es": "Una casa de campo y el jardín asociado en Mittelhof",
      "en": "A country house and the associated garden in Mittelhof",
      "de": "Ein Landhaus und der dazugehörige Garten in Mittelhof"
    }
  },
  {
    "id": 5536,
    "name": "Waldkapelle Zum anklopfenden Christus in Hessenwinkel",
    "coordinates": { "lng": 13.7227178, "lat": 52.4261502 },
    "image": "/images/venues/5536.jpg",
    "description": {
      "es": "Una capilla en el bosque con el nombre Al Cristo que golpea en Hessenwinkel",
      "en": "A forest chapel with the name \"To the knocking Christ\" in Hessenwinkel",
      "de": "Eine Waldkapelle mit dem Namen Zum klopfenden Christ in Hessenwinkel"
    }
  },
  {
    "id": 5595,
    "name": "Garten Muthesius",
    "coordinates": { "lng": 13.2015443, "lat": 52.42399495 },
    "image": "/images/venues/5595.jpg",
    "description": {
      "es": "El Jardín Muthesius, un lugar verde en Berlín",
      "en": "The Muthesius Garden, a green place in Berlin",
      "de": "Der Muthesiusgarten, ein grüner Ort in Berlin"
    }
  },
  {
    "id": 5564,
    "name": "Spaziergang durch die Colonie Alsen",
    "coordinates": { "lng": 13.17938804626465, "lat": 52.42135177650845 },
    "image": "/images/venues/5564.jpg",
    "description": {
      "es": "Un paseo relajado por la pintoresca Colonia Alsen",
      "en": "A relaxed walk through the picturesque Alsen Colony",
      "de": "Ein entspannter Spaziergang durch die malerische Alsen-Kolonie"
    }
  },
  {
    "id": 5505,
    "name": "Erinnerungsstätte Notaufnahmelager Marienfelde",
    "coordinates": { "lng": 13.368752002716064, "lat": 52.42057315510224 },
    "image": "/images/venues/5505.jpg",
    "description": {
      "es": "Un lugar para el recuerdo de la sala de urgencias de Marienfelde",
      "en": "A place of remembrance of the emergency room in Marienfelde",
      "de": "Ein Ort der Erinnerung an die Notaufnahme in Marienfelde"
    }
  },
  {
    "id": 5381,
    "name": "Ev. Friedenskirche Grünau",
    "coordinates": { "lng": 13.5781746, "lat": 52.4179649 },
    "image": "/images/venues/5381.jpg",
    "description": {
      "es": "La Iglesia Protestante de la Paz de Grünau, un retiro espiritual",
      "en": "The Protestant Peace Church in Grünau, a spiritual retreat",
      "de": "Die evangelische Friedenskirche in Grünau, ein spiritueller Rückzugsort"
    }
  },
  {
    "id": 5347,
    "name": "Ausstellung in der alten Dorfschule Rudow",
    "coordinates": { "lng": 13.495476916280523, "lat": 52.4175854 },
    "image": "/images/venues/5347.jpg",
    "description": {
      "es": "Una exposición en la histórica escuela del pueblo de Rudow",
      "en": "An exhibition in the historic village school of Rudow",
      "de": "Eine Ausstellung in der historischen Dorfschule von Rudow"
    }
  },
  {
    "id": 5288,
    "name": "Ensemble Bankiersvilla Jörger",
    "coordinates": { "lng": 13.151996825153272, "lat": 52.412630449999995 },
    "image": "/images/venues/5288.jpg",
    "description": {
      "es": "Un impresionante conjunto de históricas villas de banqueros en Jörger",
      "en": "An impressive ensemble of historic bankers' villas in Jörger",
      "de": "Ein beeindruckendes Ensemble historischer Bankiersvillen in Jörger"
    }
  },
  {
    "id": 5257,
    "name": "Dorfkirche Marienfelde",
    "coordinates": { "lng": 13.3678936958313, "lat": 52.41206631134829 },
    "image": "/images/venues/5257.jpg",
    "description": {
      "es": "La iglesia del pueblo de Marienfelde, una joya religiosa",
      "en": "The village church of Marienfelde, a religious gem",
      "de": "Die Dorfkirche von Marienfelde, ein religiöses Kleinod"
    }
  },
  {
    "id": 5467,
    "name": "Regattatribüne, Wassersportanlage Regattagelände Grünau",
    "coordinates": { "lng": 13.58747, "lat": 52.411772 },
    "image": "/images/venues/5467.jpg",
    "description": {
      "es": "La tribuna de regatas y las instalaciones para deportes acuáticos en el recinto de regatas de Grünau",
      "en": "The regatta grandstand and water sports facility at the regatta grounds in Grünau",
      "de": "Die Regattatribüne und Wassersportanlage auf dem Regattagelände in Grünau"
    }
  },
  {
    "id": 5378,
    "name": "Gartenstadt Falkenberg (Tuschkastensiedlung)",
    "coordinates": { "lng": 13.568340539932251, "lat": 52.411470770827385 },
    "image": "/images/venues/5378.jpg",
    "description": {
      "es": "La Ciudad Jardín de Falkenberg, también conocida como Tuschkastensiedlung, es una joya arquitectónica",
      "en": "The Falkenberg Garden City, also known as the Tuschkastensiedlung, is an architectural gem",
      "de": "Die Gartenstadt Falkenberg, auch Tuschkastensiedlung genannt, ist ein architektonisches Kleinod"
    }
  },
  {
    "id": 5478,
    "name": "Bootshaus des Akademischen Rudervereins zu Berlin",
    "coordinates": { "lng": 13.592155999999932, "lat": 52.41103936850826 },
    "image": "/images/venues/5478.jpg",
    "description": {
      "es": "El cobertizo para botes del Club Académico de Remo de Berlín, un lugar para los entusiastas de los deportes acuáticos",
      "en": "The boathouse of the Academic Rowing Club in Berlin, a place for water sports enthusiasts",
      "de": "Das Bootshaus des Akademischen Rudervereins in Berlin, ein Ort für Wassersportler"
    }
  },
  {
    "id": 5571,
    "name": "Jagdschloss Glienicke",
    "coordinates": { "lng": 13.097333908081056, "lat": 52.41080977687762 },
    "image": "/images/venues/5571.jpg",
    "description": {
      "es": "El imponente Pabellón de Caza Glienicke, un castillo histórico",
      "en": "The imposing Glienicke Hunting Lodge, a historic castle",
      "de": "Das imposante Jagdschloss Glienicke, ein historisches Schloss"
    }
  },
  {
    "id": 5255,
    "name": "Gutshaus Falkenberg",
    "coordinates": { "lng": 13.571527004241943, "lat": 52.41002442465483 },
    "image": "/images/venues/5255.jpg",
    "description": {
      "es": "La Gutshaus Falkenberg, una casa solariega cargada de historia",
      "en": "The Gutshaus Falkenberg, a manor house steeped in history",
      "de": "Das Gutshaus Falkenberg, ein geschichtsträchtiger Herrensitz"
    }
  },
  {
    "id": 5541,
    "name": "Kath. Kirche St. Josef",
    "coordinates": { "lng": 13.573808, "lat": 52.3918309 },
    "image": "/images/venues/5541.jpg",
    "description": {
      "es": "La iglesia católica de San José, un centro espiritual",
      "en": "The Catholic Church of St. Josef, a spiritual center",
      "de": "Die katholische Kirche St. Josef, ein spirituelles Zentrum"
    }
  },
  {
    "id": 5534,
    "name": "STAHNSDORF: Künstlerhaus Carl Metzner",
    "coordinates": { "lng": 13.188814461914184, "lat": 52.39018555 },
    "image": "/images/venues/5534.jpg",
    "description": {
      "es": "Künstlerhaus Carl Metzner",
      "en": "The Künstlerhaus Carl Metzner in Stahnsdorf, a creative meeting place",
      "de": "Künstlerhaus Carl Metzner"
    }
  },
  {
    "id": 5439,
    "name": "POTSDAM: Villa Ingenheim und Ensemble",
    "coordinates": { "lng": 13.0295233, "lat": 52.3893339 },
    "image": "/images/venues/5439.jpg",
    "description": {
      "es": "Villa Ingenheim y conjunto",
      "en": "The Villa Ingenheim and the associated ensemble in Potsdam, an architectural highlight",
      "de": "Villa Ingenheim und Ensemble"
    }
  },
  {
    "id": 5510,
    "name": "Alte Mälzerei Lichtenrade",
    "coordinates": { "lng": 13.397156995832272, "lat": 52.38789985 },
    "image": "/images/venues/5510.jpg",
    "description": {
      "es": "La antigua maltería de Lichtenrade, un edificio industrial histórico",
      "en": "The old malt house in Lichtenrade, a historic industrial building",
      "de": "Die alte Mälzerei in Lichtenrade, ein historisches Industriegebäude"
    }
  },
  {
    "id": 5279,
    "name": "RANGSDORF: Flugplatz Rangsdorf und Bücker-Werke",
    "coordinates": { "lng": 13.430855870246889, "lat": 52.28533645534926 },
    "image": "/images/venues/5279.jpg",
    "description": {
      "es": "Aeródromo de Rangsdorf y Bücker-Werke.",
      "en": "The Rangsdorf airfield and the Bücker-Werke in Rangsdorf, a testimony to aviation history.",
      "de": "Flugplatz Rangsdorf und Bücker-Werke"
    }
  }
]

export default rawVenues;