const rawVenues = [
  {
    "id": 5270,
    "name": "IV. Städtische Irrenanstalt (Genesungsheim)",
    "coordinates": { "lng": 13.4904715, "lat": 52.6385434 },
    "image": "/images/venues/5270.jpg",
    "description": "The IV. Städtische Irrenanstalt, also known as the Genesungsheim, is a historic mental health facility"
  },
  {
    "id": 5253,
    "name": "Städtische Zentrale Buch",
    "coordinates": { "lng": 13.508387804031374, "lat": 52.63562184170191 },
    "image": "/images/venues/5253.jpg",
    "description": "The Städtische Zentrale Buch, built in 1904-13 by Ludwig Hoffmann, once produced electricity for the Bucher Heilstätten and now houses artist studios and exhibition spaces, with a complex history including forced labor during WWII."
  },
  {
    "id": 5468,
    "name": "Dorf Lübars mit LabSaal",
    "coordinates": { "lng": 13.3563911, "lat": 52.6201455 },
    "image": "/images/venues/5468.jpg",
    "description": " A charming village with LabSaal, a cultural venue, offering a glimpse of Berlin's rural heritage"
  },
  {
    "id": 5261,
    "name": "Stadtgut Blankenfelde",
    "coordinates": { "lng": 13.392548561096191, "lat": 52.61847466258471 },
    "image": "/images/venues/5261.jpg",
    "description": "The Stadtgut Blankenfelde is a historic estate"
  },
  {
    "id": 5600,
    "name": "Lapidarium im Museum Reinickendorf",
    "coordinates": { "lng": 13.318682468581807, "lat": 52.615457250000006 },
    "image": "/images/venues/5600.jpg",
    "description": "The Lapidarium at Museum Reinickendorf houses a collection of stone sculptures and reliefs"
  },
  {
    "id": 5514,
    "name": "werkstatt denkmal: Hermsdorfer Wasserturm",
    "coordinates": { "lng": 13.318682468581807, "lat": 52.615457250000006 },
    "image": "/images/venues/5514.jpg",
    "description": "Hermsdorfer Wasserturm"
  },
  {
    "id": 5458,
    "name": "Haus Hannah Höch und Hausgarten",
    "coordinates": { "lng": 13.236082482058102, "lat": 52.609881099999996 },
    "image": "/images/venues/5458.jpg",
    "description": "Haus Hannah Höch and its garden are probably a residential house and an associated garden"
  },
  {
    "id": 5327,
    "name": "Dorfkirche Heiligensee",
    "coordinates": { "lng": 13.21260452270508, "lat": 52.60799940045795 },
    "image": "/images/venues/5327.jpg",
    "description": "The village church in Heiligensee is a historic church"
  },
  {
    "id": 5555,
    "name": "Dorfkirche Französisch Buchholz",
    "coordinates": { "lng": 13.433918952941896, "lat": 52.60796030896581 },
    "image": "/images/venues/5555.jpg",
    "description": "The village church in Französisch Buchholz is a historic church"
  },
  {
    "id": 5596,
    "name": "Ev. Königin-Luise-Kirche",
    "coordinates": { "lng": 13.3135878, "lat": 52.6036966 },
    "image": "/images/venues/5596.jpg",
    "description": "The Evangelical Queen Luise Church is a church with a royal connection"
  },
  {
    "id": 5556,
    "name": "Kirche St.-Johannes Evangelist",
    "coordinates": { "lng": 13.4364968, "lat": 52.6011456 },
    "image": "/images/venues/5556.jpg",
    "description": "St. John the Evangelist Church, a place of worship and reflection in the heart of Berlin"
  },
  {
    "id": 5529,
    "name": "Ev. Gemeindezentrum Apostel Johannes – FÄLLT AUS",
    "coordinates": { "lng": 13.3601863, "lat": 52.5958297 },
    "image": "/images/venues/5529.jpg",
    "description": "The Ev. Gemeindezentrum Apostel Johannes may be closed or canceled due to circumstances"
  },
  {
    "id": 5386,
    "name": "Ev. Dorfkirche Alt-Wittenau",
    "coordinates": { "lng": 13.32544267502994, "lat": 52.5922701 },
    "image": "/images/venues/5386.jpg",
    "description": "The Evangelical Village Church in Alt-Wittenau is a historic church"
  },
  {
    "id": 5537,
    "name": "Humboldt-Bibliothek",
    "coordinates": { "lng": 13.280664721943513, "lat": 52.59194935 },
    "image": "/images/venues/5537.jpg",
    "description": "The Humboldt Library is a library named after Alexander von Humboldt"
  },
  {
    "id": 5273,
    "name": "Spaziergang durch das Gelände der Karl-Bonhoeffer-Nervenklinik",
    "coordinates": { "lng": 13.324613571166994, "lat": 52.58884038852387 },
    "image": "/images/venues/5273.jpg",
    "description": "A walk through the grounds of the Karl-Bonhoeffer-Nervenklinik probably offers insights into the history of the institution"
  },
  {
    "id": 5308,
    "name": "Russisch-Orthodoxer Friedhof mit Kapelle",
    "coordinates": { "lng": 13.3015639, "lat": 52.5779859 },
    "image": "/images/venues/5308.jpg",
    "description": "The Russian Orthodox Cemetery with Chapel is a religious cemetery"
  },
  {
    "id": 5372,
    "name": "Ev. Dorfkirche Alt-Reinickendorf",
    "coordinates": { "lng": 13.35213303565979, "lat": 52.57499295120519 },
    "image": "/images/venues/5372.jpg",
    "description": "The Evangelical Village Church in Alt-Reinickendorf is a historic church"
  },
  {
    "id": 5248,
    "name": "Schulfarm Insel Scharfenberg",
    "coordinates": { "lng": 13.246787621941355, "lat": 52.57495464527687 },
    "image": "/images/venues/5248.jpg",
    "description": "The Schulfarm Insel Scharfenberg is an educational institution on an island"
  },
  {
    "id": 5599,
    "name": "Gedenkstätte Historischer Ort Krumpuhler Weg",
    "coordinates": { "lng": 13.288669, "lat": 52.5748023 },
    "image": "/images/venues/5599.jpg",
    "description": "The memorial Historischer Ort Krumpuhler Weg probably commemorates historical events or places"
  },
  {
    "id": 5512,
    "name": "Kath. St.-Marien-Kirche",
    "coordinates": { "lng": 13.360549, "lat": 52.5744638 },
    "image": "/images/venues/5512.jpg",
    "description": "St. Mary's Catholic Church, a spiritual sanctuary with a rich history in Berlin"
  },
  {
    "id": 5435,
    "name": "Ateliermuseum der Bildhauerin Ruthild Hahne",
    "coordinates": { "lng": 13.391271800000027, "lat": 52.5739955 },
    "image": "/images/venues/5435.jpg",
    "description": "The Ateliermuseum der Bildhauerin Ruthild Hahne is a museum dedicated to the works of a sculptress"
  },
  {
    "id": 5310,
    "name": "Weiße Stadt",
    "coordinates": { "lng": 13.3516128, "lat": 52.5702042 },
    "image": "/images/venues/5310.jpg",
    "description": "The White City, a UNESCO-listed modernist housing estate, exemplifying functionalist architecture in Berlin"
  },
  {
    "id": 5471,
    "name": "Ev. Johannesstift Spandau",
    "coordinates": { "lng": 13.1988184, "lat": 52.5696034 },
    "image": "/images/venues/5471.jpg",
    "description": "A historic hospital complex in Spandau, providing medical care and social services with a rich history dating back to the 19th century"
  },
  {
    "id": 5427,
    "name": "Dorfkirche Heinersdorf",
    "coordinates": { "lng": 13.4405274, "lat": 52.567149 },
    "image": "/images/venues/5427.jpg",
    "description": "A charming village church located in Heinersdorf, a district of Berlin, known for its historical and architectural significance"
  },
  {
    "id": 5367,
    "name": "Villenkolonie Valentinswerder",
    "coordinates": { "lng": 13.229298591613771, "lat": 52.564860274509265 },
    "image": "/images/venues/5367.jpg",
    "description": "An idyllic villa colony situated on Valentinswerder Island, offering picturesque waterfront views and a glimpse into early 20th-century architecture and lifestyle"
  },
  {
    "id": 5543,
    "name": "Kolonistenhaus von 1782 und die Kolonie an der Panke",
    "coordinates": { "lng": 13.3839458, "lat": 52.5643061 },
    "image": "/images/venues/5543.jpg",
    "description": "The Kolonistenhaus from 1782 and the Kolonie an der Panke are historic buildings and a settlement along the river Panke"
  },
  {
    "id": 5377,
    "name": "Siedlung am Schillerpark",
    "coordinates": { "lng": 13.347304, "lat": 52.5606776 },
    "image": "/images/venues/5377.jpg",
    "description": "A residential area near Schillerpark, showcasing early 20th-century urban planning and architecture, providing a glimpse into Berlin's historic housing developments"
  },
  {
    "id": 5271,
    "name": "Ev. Stephanuskirche",
    "coordinates": { "lng": 13.386991705494504, "lat": 52.558746549999995 },
    "image": "/images/venues/5271.jpg",
    "description": "A historic Protestant church in Berlin, known for its architectural significance and cultural heritage"
  },
  {
    "id": 5379,
    "name": "Hutfabrik Gattel",
    "coordinates": { "lng": 13.3853061, "lat": 52.5578993 },
    "image": "/images/venues/5379.jpg",
    "description": "A former hat manufacturing facility in Berlin, historically significant for its role in the city's industrial heritage"
  },
  {
    "id": 5321,
    "name": "Umspannwerk Christiania",
    "coordinates": { "lng": 13.3839152, "lat": 52.556229 },
    "image": "/images/venues/5321.jpg",
    "description": "An electrical substation in Berlin, known for its role in distributing and managing electrical power in the city"
  },
  {
    "id": 5283,
    "name": "Überreste des Kurbades Luisenbad",
    "coordinates": { "lng": 13.379496221905537, "lat": 52.55361395 },
    "image": "/images/venues/5283.jpg",
    "description": "These are the remnants of the historic Luisenbad spa, a once-prominent bathing and wellness establishment in Berlin"
  },
  {
    "id": 5415,
    "name": "Straßenbahnbetriebshof Gesundbrunnen – Uferstudios",
    "coordinates": { "lng": 13.3773698, "lat": 52.5533894 },
    "image": "/images/venues/5415.jpg",
    "description": "This location includes the Gesundbrunnen tram depot, which houses the Uferstudios. The Uferstudios are known for their role in the arts, providing a space for various creative activities and performances"
  },
  {
    "id": 5278,
    "name": "Straßenbahnbetriebshof Gesundbrunnen – Uferhallen",
    "coordinates": { "lng": 13.37416747167497, "lat": 52.55262105 },
    "image": "/images/venues/5278.jpg",
    "description": "This site features the Gesundbrunnen tram depot, which is home to the Uferhallen. The Uferhallen serve as a cultural and artistic venue, offering a space for exhibitions, performances, and creative events"
  },
  {
    "id": 5461,
    "name": "Wohnanlage Afrikanische Straße von Ludwig Mies van der Rohe",
    "coordinates": { "lng": 13.3380141, "lat": 52.5517747 },
    "image": "/images/venues/5461.jpg",
    "description": "Iconic modernist housing designed by Mies van der Rohe"
  },
  {
    "id": 5398,
    "name": ".GUT Am Flughafen 1",
    "coordinates": { "lng": 13.286247253417969, "lat": 52.55172368081563 },
    "image": "/images/venues/5398.jpg",
    "description": "Historic site with aviation heritage"
  },
  {
    "id": 5523,
    "name": "werkstatt denkmal: Filmvorführung zu Oscar Blumenthal",
    "coordinates": { "lng": 13.44146668066886, "lat": 52.5508886 },
    "image": "/images/venues/5523.jpg",
    "description": "Film screening about Oscar Blumenthal"
  },
  {
    "id": 5506,
    "name": "Flughafen Tegel",
    "coordinates": { "lng": 13.29798460006714, "lat": 52.55002750815312 },
    "image": "/images/venues/5506.jpg",
    "description": " Former airport known for its hexagonal terminal design"
  },
  {
    "id": 5351,
    "name": "Haus Lemke",
    "coordinates": { "lng": 13.490528696694309, "lat": 52.54916165 },
    "image": "/images/venues/5351.jpg",
    "description": "Modernist villa designed by Mies van der Rohe"
  },
  {
    "id": 5318,
    "name": "Gutshaus Hohenschönhausen",
    "coordinates": { "lng": 13.5056415, "lat": 52.5490056 },
    "image": "/images/venues/5318.jpg",
    "description": "A historic manor house in Hohenschönhausen"
  },
  {
    "id": 5429,
    "name": "Atelierhaus Wiesenstraße 29",
    "coordinates": { "lng": 13.371528000000012, "lat": 52.548638 },
    "image": "/images/venues/5429.jpg",
    "description": "An art studio and residence on Wiesenstraße 29"
  },
  {
    "id": 5392,
    "name": "Gethsemanekirche",
    "coordinates": { "lng": 13.416479999999979, "lat": 52.54777 },
    "image": "/images/venues/5392.jpg",
    "description": "Historic church known for its role in the peaceful revolution"
  },
  {
    "id": 5309,
    "name": "Wohnstadt Carl-Legien",
    "coordinates": { "lng": 13.4335178, "lat": 52.546475 },
    "image": "/images/venues/5309.jpg",
    "description": "A residential complex designed for workers"
  },
  {
    "id": 5436,
    "name": "Ulis Museumsladen",
    "coordinates": { "lng": 13.2081599, "lat": 52.5463577 },
    "image": "/images/venues/5436.jpg",
    "description": "A museum shop offering unique Berlin memorabilia"
  },
  {
    "id": 5470,
    "name": "Krematorium Wedding",
    "coordinates": { "lng": 13.3665464, "lat": 52.5460293 },
    "image": "/images/venues/5470.jpg",
    "description": "Wedding district's crematorium known for its architecture"
  },
  {
    "id": 5492,
    "name": "Friedhof der Jüdischen Gemeinde",
    "coordinates": { "lng": 13.4579698, "lat": 52.5453542 },
    "image": "/images/venues/5492.jpg",
    "description": "Cemetery with significant Jewish heritage"
  },
  {
    "id": 5331,
    "name": "Bremer Höhe",
    "coordinates": { "lng": 13.4130222, "lat": 52.5448265 },
    "image": "/images/venues/5331.jpg",
    "description": "A locality with scenic views and green spaces"
  },
  {
    "id": 5457,
    "name": "Kath. St.-Joseph-Kirche",
    "coordinates": { "lng": 13.363026499999933, "lat": 52.5440901 },
    "image": "/images/venues/5457.jpg",
    "description": "Catholic church known for its beautiful architecture"
  },
  {
    "id": 5511,
    "name": "Reichsforschungssiedlung Haselhorst",
    "coordinates": { "lng": 13.2361878, "lat": 52.5440575 },
    "image": "/images/venues/5511.jpg",
    "description": "The Reichsforschungssiedlung Haselhorst is probably a historical settlement from the time of the German Empire"
  },
  {
    "id": 5540,
    "name": "Zimmermeister Brunzel – Bauen und Wohnen in Prenzlauer Berg um 1900",
    "coordinates": { "lng": 13.4214133, "lat": 52.543528 },
    "image": "/images/venues/5540.jpg",
    "description": "Exploring architecture and living in Prenzlauer Berg around 1900"
  },
  {
    "id": 5274,
    "name": "Maschinenfabrik Richard Heike – Villa Heike",
    "coordinates": { "lng": 13.49843170012404, "lat": 52.54256685 },
    "image": "/images/venues/5274.jpg",
    "description": "The Heike Machine Factory and Villa Heike"
  },
  {
    "id": 5587,
    "name": "werkstatt denkmal: Erforschung der Architektur- und Wohngeschichte im Mühlenkiezviertel",
    "coordinates": { "lng": 13.440864, "lat": 52.5418164 },
    "image": "/images/venues/5587.jpg",
    "description": " Investigating the architectural and housing history in the Mühlenkiezviertel"
  },
  {
    "id": 5320,
    "name": "Stasi-Gefängnis Hohenschönhausen",
    "coordinates": { "lng": 13.5001488, "lat": 52.5416286 },
    "image": "/images/venues/5320.jpg",
    "description": "The Hohenschönhausen Stasi Prison is a memorial to the victims of political persecution in the GDR"
  },
  {
    "id": 5336,
    "name": "Ev. Osterkirche",
    "coordinates": { "lng": 13.354631780983034, "lat": 52.5415451 },
    "image": "/images/venues/5336.jpg",
    "description": "A captivating place of worship with stunning architectural features and spiritual significance"
  },
  {
    "id": 5526,
    "name": "Ev. Christophoruskirche",
    "coordinates": { "lng": 13.2668221, "lat": 52.5414006 },
    "image": "/images/venues/5526.jpg",
    "description": "Historically rich church renowned for its unique design and cultural heritage"
  },
  {
    "id": 5364,
    "name": "St. Elisabeth-Stift",
    "coordinates": { "lng": 13.409149200000002, "lat": 52.5410802 },
    "image": "/images/venues/5364.jpg",
    "description": "Vital institution in Berlin, offering essential services and fostering community well-being"
  },
  {
    "id": 5525,
    "name": "Zitadelle Spandau",
    "coordinates": { "lng": 13.211316235636957, "lat": 52.5410528 },
    "image": "/images/venues/5525.jpg",
    "description": "Remarkable historical fortress turned cultural hub, hosting exhibitions and cultural events"
  },
  {
    "id": 5464,
    "name": "Kath. Gedenkkirche Maria-Regina Martyrum",
    "coordinates": { "lng": 13.298481014374644, "lat": 52.54035135 },
    "image": "/images/venues/5464.jpg",
    "description": "Holds great religious and historical significance in Berlin"
  },
  {
    "id": 5465,
    "name": "Ev. Gedenkkirche im Gemeindezentrum Plötzensee",
    "coordinates": { "lng": 13.300074247060937, "lat": 52.53982345 },
    "image": "/images/venues/5465.jpg",
    "description": "A place for contemplation and honoring the past"
  },
  {
    "id": 5317,
    "name": "Großsiedlung Siemensstadt (Ringsiedlung)",
    "coordinates": { "lng": 13.276548385620119, "lat": 52.53956197771845 },
    "image": "/images/venues/5317.jpg",
    "description": "Distinguished architectural complex celebrated for its innovative design and historical relevance"
  },
  {
    "id": 5263,
    "name": "Fahrradtour zu Bauten Hermann Blankensteins",
    "coordinates": { "lng": 13.419203390164899, "lat": 52.5391082 },
    "image": "/images/venues/5263.jpg",
    "description": "Explore the architectural legacy of Hermann Blankenstein on this cycling tour"
  },
  {
    "id": 5433,
    "name": "Spandovia Sacra – Museum von St. Nikolai Spandau",
    "coordinates": { "lng": 13.2054986, "lat": 52.5387075 },
    "image": "/images/venues/5433.jpg",
    "description": "A museum within St. Nikolai Church, delving into the sacred history of Spandau"
  },
  {
    "id": 5266,
    "name": "Schultheiss Brauerei",
    "coordinates": { "lng": 13.414199352264406, "lat": 52.53813288687508 },
    "image": "/images/venues/5266.jpg",
    "description": "Former brewery site transformed into a vibrant cultural and entertainment center"
  },
  {
    "id": 5432,
    "name": "Ev. St. Nikolai-Kirche",
    "coordinates": { "lng": 13.2053512, "lat": 52.5379547 },
    "image": "/images/venues/5432.jpg",
    "description": "A historic church known for its religious significance and architectural beauty"
  },
  {
    "id": 5322,
    "name": "Stadtbad Oderberger Straße",
    "coordinates": { "lng": 13.41052953267133, "lat": 52.537814749999995 },
    "image": "/images/venues/5322.jpg",
    "description": "A stunning bathhouse turned into a captivating cultural venue"
  },
  {
    "id": 5519,
    "name": "Wohnung Hans Scharoun",
    "coordinates": { "lng": 13.2728369, "lat": 52.5374906 },
    "image": "/images/venues/5519.jpg",
    "description": "Discover the unique residential design of architect Hans Scharoun"
  },
  {
    "id": 5565,
    "name": "Magazin Westhafen (ehem. Getreidespeicher)",
    "coordinates": { "lng": 13.3417491, "lat": 52.5369734 },
    "image": "/images/venues/5565.jpg",
    "description": "Former grain silo converted into a modern magazine and event space"
  },
  {
    "id": 5330,
    "name": "Elektropolis Siemensstadt",
    "coordinates": { "lng": 13.272600173950197, "lat": 52.536690697815764 },
    "image": "/images/venues/5330.jpg",
    "description": "Explore Siemensstadt's electrifying history and industrial innovations"
  },
  {
    "id": 5593,
    "name": "Litfaßsäulen am Kollwitzplatz",
    "coordinates": { "lng": 13.418190479278566, "lat": 52.536573232367104 },
    "image": "/images/venues/5593.jpg",
    "description": "Iconic advertising columns in the charming Kollwitzplatz area"
  },
  {
    "id": 5361,
    "name": "Atelierwohnung Hans Scharoun",
    "coordinates": { "lng": 13.2818876, "lat": 52.536131 },
    "image": "/images/venues/5361.jpg",
    "description": "Visit the apartment-studio designed by renowned architect Hans Scharoun"
  },
  {
    "id": 5324,
    "name": "Ev. Segenskirche mit Stadtkloster",
    "coordinates": { "lng": 13.4119927, "lat": 52.5360635 },
    "image": "/images/venues/5324.jpg",
    "description": "The Segenskirche with its urban monastery offers a tranquil spiritual retreat"
  },
  {
    "id": 5326,
    "name": "Gedenkort Güterbahnhof Moabit",
    "coordinates": { "lng": 13.353474140167238, "lat": 52.53548992508325 },
    "image": "/images/venues/5326.jpg",
    "description": "A memorial site at Moabit Freight Yard honoring Holocaust victims"
  },
  {
    "id": 5437,
    "name": "Zionskirche",
    "coordinates": { "lng": 13.403985500335695, "lat": 52.53413249027725 },
    "image": "/images/venues/5437.jpg",
    "description": "An iconic church known for its striking architecture and vibrant cultural events"
  },
  {
    "id": 5466,
    "name": "Nordbahnhof",
    "coordinates": { "lng": 13.387445935261194, "lat": 52.5337903 },
    "image": "/images/venues/5466.jpg",
    "description": "A historic train station with a rich past, now transformed into a memorial and museum"
  },
  {
    "id": 5438,
    "name": "Gedenkstätte Günter Litfin",
    "coordinates": { "lng": 13.369535207748415, "lat": 52.5335190203953 },
    "image": "/images/venues/5438.jpg",
    "description": "Commemorating Günter Litfin, the first victim of the Berlin Wall"
  },
  {
    "id": 5391,
    "name": "Ev. Immanuelkirche",
    "coordinates": { "lng": 13.42156, "lat": 52.53311 },
    "image": "/images/venues/5391.jpg",
    "description": "A beautiful church known for its spiritual services and community engagement"
  },
  {
    "id": 5469,
    "name": "Schneiders Brauerei im Schweizer Garten",
    "coordinates": { "lng": 13.4281278, "lat": 52.531759 },
    "image": "/images/venues/5469.jpg",
    "description": "A former brewery in Schweizer Garten offering a taste of history"
  },
  {
    "id": 5334,
    "name": "Brauerei Pfefferberg",
    "coordinates": { "lng": 13.4118347, "lat": 52.5314861 },
    "image": "/images/venues/5334.jpg",
    "description": "Explore the Pfefferberg Brewery, now a cultural hub with art, dining, and more"
  },
  {
    "id": 5300,
    "name": "Jüdisches Kinderheim",
    "coordinates": { "lng": 13.4080798, "lat": 52.5313873 },
    "image": "/images/venues/5300.jpg",
    "description": "Visit the Jewish orphanage to learn about its poignant history"
  },
  {
    "id": 5517,
    "name": "Kath. Herz-Jesu-Kirche",
    "coordinates": { "lng": 13.409563061163366, "lat": 52.5306577 },
    "image": "/images/venues/5517.jpg",
    "description": "A Catholic church known for its religious significance and architectural beauty"
  },
  {
    "id": 5449,
    "name": "Ev. Heilige-Geist-Kirche",
    "coordinates": { "lng": 13.346543312072754, "lat": 52.53061797491791 },
    "image": "/images/venues/5449.jpg",
    "description": "Discover the spiritual significance and community activities of this church"
  },
  {
    "id": 5612,
    "name": "Museum für Naturkunde Berlin",
    "coordinates": { "lng": 13.379432878573652, "lat": 52.53013898332125 },
    "image": "/images/venues/5612.jpg",
    "description": "Explore Berlin's natural history in this renowned museum"
  },
  {
    "id": 5414,
    "name": "Friedhof I der Ev. Georgen-Parochialgemeinde",
    "coordinates": { "lng": 13.424499034881594, "lat": 52.52898952008052 },
    "image": "/images/venues/5414.jpg",
    "description": "A historic cemetery with fascinating tombstones"
  },
  {
    "id": 5459,
    "name": "Vom Marienheim zum Sprachenkonvikt",
    "coordinates": { "lng": 13.390939235687256, "lat": 52.52897646609038 },
    "image": "/images/venues/5459.jpg",
    "description": "Learn about the transformation of Marienheim into a language seminary"
  },
  {
    "id": 5406,
    "name": "Alter Friedhof der St. Nikolai- und St. Mariengemeinde",
    "coordinates": { "lng": 13.4179988, "lat": 52.5286962 },
    "image": "/images/venues/5406.jpg",
    "description": "Discover the history of this old cemetery"
  },
  {
    "id": 5515,
    "name": "Kath. St.-Adalbert-Kirche",
    "coordinates": { "lng": 13.395734816259875, "lat": 52.528485450000005 },
    "image": "/images/venues/5515.jpg",
    "description": "Visit this Catholic church known for its religious significance"
  },
  {
    "id": 5272,
    "name": "Dorotheenstädtischer Friedhof I",
    "coordinates": { "lng": 13.383944034576418, "lat": 52.5284281950004 },
    "image": "/images/venues/5272.jpg",
    "description": "Explore the resting place of prominent figures in Berlin's history"
  },
  {
    "id": 5307,
    "name": "Ev. Gustav-Adolf-Kirche",
    "coordinates": { "lng": 13.298942233389262, "lat": 52.52833465 },
    "image": "/images/venues/5307.jpg",
    "description": "A beautiful church with a rich history of faith and community"
  },
  {
    "id": 5319,
    "name": "Alter Garnisonfriedhof",
    "coordinates": { "lng": 13.4032601, "lat": 52.5282304 },
    "image": "/images/venues/5319.jpg",
    "description": "Learn about the history of this former garrison cemetery"
  },
  {
    "id": 5613,
    "name": "Denkmaltour: Märchenbrunnen im Volkspark Friedrichshain",
    "coordinates": { "lng": 13.425679206848146, "lat": 52.528101839911606 },
    "image": "/images/venues/5613.jpg",
    "description": "Fairy Tale Fountain in Volkspark Friedrichshain"
  },
  {
    "id": 5269,
    "name": "Museum Kesselhaus Herzberge",
    "coordinates": { "lng": 13.512033412808368, "lat": 52.5279507 },
    "image": "/images/venues/5269.jpg",
    "description": "Discover the industrial history preserved in this museum"
  },
  {
    "id": 5575,
    "name": "Ehem. Zentralvieh- und Schlachthof Berlin",
    "coordinates": { "lng": 13.4548751, "lat": 52.5272669 },
    "image": "/images/venues/5575.jpg",
    "description": "Explore the history of Berlin's former central livestock and slaughterhouse"
  },
  {
    "id": 5315,
    "name": "Weltfriedensglocke Berlin im Volkspark Friedrichshain",
    "coordinates": { "lng": 13.434172530935712, "lat": 52.52693220017775 },
    "image": "/images/venues/5315.jpg",
    "description": "Visit the World Peace Bell in Friedrichshain Park"
  },
  {
    "id": 5580,
    "name": "Auf einem Spaziergang durch Mitte",
    "coordinates": { "lng": 13.411495685577394, "lat": 52.52677681334118 },
    "image": "/images/venues/5580.jpg",
    "description": "Take a stroll through Berlin's central district for a unique experience"
  },
  {
    "id": 5545,
    "name": "U144 Untergrundmuseum",
    "coordinates": { "lng": 13.390787617432439, "lat": 52.52674575 },
    "image": "/images/venues/5545.jpg",
    "description": "Discover fascinating underground history at U144 Underground Museum"
  },
  {
    "id": 5509,
    "name": "Sophienkirche",
    "coordinates": { "lng": 13.3990178, "lat": 52.5255879 },
    "image": "/images/venues/5509.jpg",
    "description": "Visit this historic church known for its architectural and cultural significance"
  },
  {
    "id": 5581,
    "name": "SPANDAU: Traditionsfahrt auf den historischen Buslinien 31 und 80",
    "coordinates": { "lng": 13.24127197265625, "lat": 52.52551702194672 },
    "image": "/images/venues/5581.jpg",
    "description": "Traditional ride on the historic bus lines 31 and 80"
  },
  {
    "id": 5365,
    "name": "Haus Dittmar",
    "coordinates": { "lng": 13.600256617732803, "lat": 52.52507115 },
    "image": "/images/venues/5365.jpg",
    "description": "Explore the historical significance of Dittmar House"
  },
  {
    "id": 5494,
    "name": "Neue Synagoge Berlin – Centrum Judaicum",
    "coordinates": { "lng": 13.394168615341187, "lat": 52.52485773847275 },
    "image": "/images/venues/5494.jpg",
    "description": "Learn about Jewish history and culture at the New Synagogue"
  },
  {
    "id": 5299,
    "name": "Ökumenische Gedenkstätte für Genozidopfer im Osmanischen Reich",
    "coordinates": { "lng": 13.279166221618654, "lat": 52.52485121086412 },
    "image": "/images/venues/5299.jpg",
    "description": "Pay tribute to the victims of the Ottoman Empire's genocides"
  },
  {
    "id": 5572,
    "name": "Das Kasernenviertel in Berlin-Moabit",
    "coordinates": { "lng": 13.36015820503235, "lat": 52.524289832893764 },
    "image": "/images/venues/5572.jpg",
    "description": "Discover the military history of Berlin's Moabit district"
  },
  {
    "id": 5247,
    "name": "Lernort Keibelstraße",
    "coordinates": { "lng": 13.4162252, "lat": 52.5241658 },
    "image": "/images/venues/5247.jpg",
    "description": "A place of learning and remembrance dedicated to the victims of Nazi persecution"
  },
  {
    "id": 5591,
    "name": "Friedhof der Märzgefallenen",
    "coordinates": { "lng": 13.436515331268312, "lat": 52.524120112560084 },
    "image": "/images/venues/5591.jpg",
    "description": "Visit the cemetery honoring those who lost their lives in the March Revolution"
  },
  {
    "id": 5448,
    "name": "Parlament der Bäume gegen Krieg und Gewalt",
    "coordinates": { "lng": 13.376669883728027, "lat": 52.522187865608885 },
    "image": "/images/venues/5448.jpg",
    "description": "A place of peaceful protest against war and violence"
  },
  {
    "id": 5323,
    "name": "Fort Hahneberg",
    "coordinates": { "lng": 13.137729308340758, "lat": 52.521930600000005 },
    "image": "/images/venues/5323.jpg",
    "description": "Explore the historical Fort Hahneberg with its rich military history"
  },
  {
    "id": 5548,
    "name": "Wasserstraßen um die Spreeinsel",
    "coordinates": { "lng": 13.393642902374268, "lat": 52.5219136885478 },
    "image": "/images/venues/5548.jpg",
    "description": "Discover the waterways surrounding the Spree Island"
  },
  {
    "id": 5251,
    "name": "Karl-Marx-Allee – II. Bauabschnitt",
    "coordinates": { "lng": 13.42310428619385, "lat": 52.52099975265203 },
    "image": "/images/venues/5251.jpg",
    "description": "Witness the architectural beauty of Karl-Marx-Allee's second construction phase"
  },
  {
    "id": 5578,
    "name": "Kongresshalle (heute bcc)",
    "coordinates": { "lng": 13.415905237197876, "lat": 52.52090835801668 },
    "image": "/images/venues/5578.jpg",
    "description": "Explore the Kongresshalle, now known as the bcc (Berlin Congress Center)"
  },
  {
    "id": 5325,
    "name": "Kino International",
    "coordinates": { "lng": 13.423015700546696, "lat": 52.520644250000004 },
    "image": "/images/venues/5325.jpg",
    "description": "Visit Kino International, a historic cinema showcasing classic films"
  },
  {
    "id": 5383,
    "name": "Ev. St. Marienkirche",
    "coordinates": { "lng": 13.406496047973633, "lat": 52.520585211174314 },
    "image": "/images/venues/5383.jpg",
    "description": "Explore the Evangelical St. Marienkirche, a significant religious site"
  },
  {
    "id": 5495,
    "name": "Olympiapark Berlin",
    "coordinates": { "lng": 13.242516517639162, "lat": 52.52013802424959 },
    "image": "/images/venues/5495.jpg",
    "description": "Experience the iconic Olympiapark in Berlin"
  },
  {
    "id": 5262,
    "name": "Kasernengelände Spandau und Geowissenschaftliche Sammlungen der BGR",
    "coordinates": { "lng": 13.185015099689437, "lat": 52.51983395 },
    "image": "/images/venues/5262.jpg",
    "description": "Explore the former barracks grounds in Spandau and the Geological Collections of the BGR"
  },
  {
    "id": 5260,
    "name": "Karl-Marx-Allee zwischen Strausberger Platz und Alexanderplatz – II. Bauabschnitt",
    "coordinates": { "lng": 13.4225772, "lat": 52.519698 },
    "image": "/images/venues/5260.jpg",
    "description": "Discover the architectural wonders of this section of Karl-Marx-Allee"
  },
  {
    "id": 5395,
    "name": "Train-Kaserne – Smuts Barracks",
    "coordinates": { "lng": 13.17937677149284, "lat": 52.5193866 },
    "image": "/images/venues/5395.jpg",
    "description": "Learn about the history of the Smuts Barracks, once known as Train-Kaserne"
  },
  {
    "id": 5499,
    "name": "FRIEDRICHSHAIN: Freidenkerhaus und Armenfriedhof",
    "coordinates": { "lng": 13.4388683, "lat": 52.5193679 },
    "image": "/images/venues/5499.jpg",
    "description": "Freidenkerhaus and Armenfriedhof"
  },
  {
    "id": 5498,
    "name": "Märchenbrunnen im Volkspark Friedrichshain",
    "coordinates": { "lng": 13.4388683, "lat": 52.5193679 },
    "image": "/images/venues/5498.jpg",
    "description": "Visit the Fairy Tale Fountain in Volkspark Friedrichshain"
  },
  {
    "id": 5342,
    "name": "Panoramabar im Haus Berlin",
    "coordinates": { "lng": 13.426940000000059, "lat": 52.51926 },
    "image": "/images/venues/5342.jpg",
    "description": "Enjoy panoramic views from the Panoramabar in the Haus Berlin"
  },
  {
    "id": 5393,
    "name": "Marx-Engels-Denkmal",
    "coordinates": { "lng": 13.404693603515627, "lat": 52.518492859453154 },
    "image": "/images/venues/5393.jpg",
    "description": "Pay homage to Marx and Engels at their iconic memorial"
  },
  {
    "id": 5482,
    "name": "Palais am Festungsgraben",
    "coordinates": { "lng": 13.395718932151794, "lat": 52.51846266488067 },
    "image": "/images/venues/5482.jpg",
    "description": "Explore the historic Palais am Festungsgraben, a cultural gem"
  },
  {
    "id": 5567,
    "name": "Haus des Kindes",
    "coordinates": { "lng": 13.4262685, "lat": 52.5184301 },
    "image": "/images/venues/5567.jpg",
    "description": "Visit the \"Haus des Kindes,\" a place dedicated to childhood development"
  },
  {
    "id": 5349,
    "name": "Klosterruine",
    "coordinates": { "lng": 13.412235975265505, "lat": 52.518319852432455 },
    "image": "/images/venues/5349.jpg",
    "description": "Discover the intriguing Klosterruine, a site of historical significance"
  },
  {
    "id": 5368,
    "name": "Akademie der Künste am Hanseatenweg",
    "coordinates": { "lng": 13.346668673646674, "lat": 52.518293549999996 },
    "image": "/images/venues/5368.jpg",
    "description": "Immerse yourself in the arts at the Akademie der Künste on Hanseatenweg"
  },
  {
    "id": 5503,
    "name": "Das Hansaviertel der Interbau",
    "coordinates": { "lng": 13.342058681891784, "lat": 52.51781388459441 },
    "image": "/images/venues/5503.jpg",
    "description": "Witness the modernist architecture of the Hansaviertel district, part of the Interbau project"
  },
  {
    "id": 5453,
    "name": "Ev. Neu-Westend-Kirche",
    "coordinates": { "lng": 13.26303005218506, "lat": 52.5177747126478 },
    "image": "/images/venues/5453.jpg",
    "description": "Explore the Evangelical Neu-Westend Church, a place of worship"
  },
  {
    "id": 5402,
    "name": "Magistratsbibliothek im Rathaus Charlottenburg",
    "coordinates": { "lng": 13.308801351332491, "lat": 52.51758155 },
    "image": "/images/venues/5402.jpg",
    "description": "Dive into literature at the Magistratsbibliothek in Charlottenburg's town hall"
  },
  {
    "id": 5504,
    "name": "Bustour zu Projekten handwerklicher Restaurierung",
    "coordinates": { "lng": 13.302497344751927, "lat": 52.517129749999995 },
    "image": "/images/venues/5504.jpg",
    "description": "Take a guided bus tour to witness craftsmanship in restoration projects"
  },
  {
    "id": 5588,
    "name": "Denkmal für die im Nationalsozialismus ermordeten Sinti und Roma Europas",
    "coordinates": { "lng": 13.3756806, "lat": 52.5171193 },
    "image": "/images/venues/5588.jpg",
    "description": "Pay tribute to the Sinti and Roma victims of the Holocaust at this memorial"
  },
  {
    "id": 5460,
    "name": "Hansabücherei",
    "coordinates": { "lng": 13.3427522, "lat": 52.5170943 },
    "image": "/images/venues/5460.jpg",
    "description": "Explore the resources at Hansabücherei, a public library"
  },
  {
    "id": 5382,
    "name": "Ev. Parochialkirche",
    "coordinates": { "lng": 13.41257929801941, "lat": 52.5169651512655 },
    "image": "/images/venues/5382.jpg",
    "description": "Visit the Evangelical Parochial Church, a place of worship and history"
  },
  {
    "id": 5590,
    "name": "Fördergebiet Lebendiges Zentrum und Quartier Nikolaiviertel",
    "coordinates": { "lng": 13.407539436824699, "lat": 52.5168734 },
    "image": "/images/venues/5590.jpg",
    "description": "Discover the vibrant center and Nikolaiviertel district, a lively area"
  },
  {
    "id": 5258,
    "name": "Karl-Marx- und Frankfurter Allee – I. Bauabschnitt",
    "coordinates": { "lng": 13.444722890853882, "lat": 52.51673664333727 },
    "image": "/images/venues/5258.jpg",
    "description": "Explore the architectural beauty of the Karl-Marx and Frankfurter Allee's first construction phase"
  },
  {
    "id": 5602,
    "name": "Rund um die Schinkelsche Bauakademie",
    "coordinates": { "lng": 13.39858430364548, "lat": 52.5167053 },
    "image": "/images/venues/5602.jpg",
    "description": "Explore the area surrounding the Schinkelsche Bauakademie, a hub of architectural significance"
  },
  {
    "id": 5442,
    "name": "Karl-Marx-Allee: Arbeiterpaläste im „Zuckerbäckerstil“",
    "coordinates": { "lng": 13.444733619689943, "lat": 52.516703999250495 },
    "image": "/images/venues/5442.jpg",
    "description": "Witness the grandeur of Karl-Marx-Allee, a prominent boulevard in Berlin"
  },
  {
    "id": 5290,
    "name": "Berliner U-Bahn-Museum am Olympiastadion",
    "coordinates": { "lng": 13.249425888061523, "lat": 52.516703999250495 },
    "image": "/images/venues/5290.jpg",
    "description": "Delve into the history of Berlin's subway system at this museum near the Olympiastadion"
  },
  {
    "id": 5607,
    "name": "Modellwohnung Frankfurter Tor 1",
    "coordinates": { "lng": 13.4528734, "lat": 52.5165807 },
    "image": "/images/venues/5607.jpg",
    "description": "Explore a model apartment at Frankfurter Tor 1, showcasing architectural design"
  },
  {
    "id": 5282,
    "name": "Fahrradtour: U-Bahngeschichte",
    "coordinates": { "lng": 13.412353992462158, "lat": 52.5164428456833 },
    "image": "/images/venues/5282.jpg",
    "description": "U-Bahngeschichte"
  },
  {
    "id": 5485,
    "name": "werkstatt denkmal: Erkundungsreise durch das Internationale Congress Centrum ICC",
    "coordinates": { "lng": 13.298075808956911, "lat": 52.5161776 },
    "image": "/images/venues/5485.jpg",
    "description": "International Congress Centrum ICC exploration tour, unveiling its architectural significance"
  },
  {
    "id": 5350,
    "name": "Das Brandenburger Tor",
    "coordinates": { "lng": 13.378300666809084, "lat": 52.51599888105672 },
    "image": "/images/venues/5350.jpg",
    "description": "Iconic Brandenburg Gate, symbolizing Germany's unity and history"
  },
  {
    "id": 5328,
    "name": "Kath. Sankt Hedwigs-Kathedrale",
    "coordinates": { "lng": 13.39460849761963, "lat": 52.51594664962925 },
    "image": "/images/venues/5328.jpg",
    "description": "Visit St. Hedwig's Cathedral, a stunning Catholic place of worship"
  },
  {
    "id": 5430,
    "name": "Staatsratsgebäude",
    "coordinates": { "lng": 13.401908655703892, "lat": 52.5152614 },
    "image": "/images/venues/5430.jpg",
    "description": "Observe the Staatsratsgebäude, a significant governmental building"
  },
  {
    "id": 5598,
    "name": "Stadtlandschafts-Safari der Schaustelle Nachkriegsmoderne",
    "coordinates": { "lng": 13.4437904, "lat": 52.5151271 },
    "image": "/images/venues/5598.jpg",
    "description": "Explore post-war modernist architecture on the Stadtlandschafts-Safari tour"
  },
  {
    "id": 5579,
    "name": "Von der Weberwiese zum Platz der Vereinten Nationen",
    "coordinates": { "lng": 13.443861794148766, "lat": 52.515063999999995 },
    "image": "/images/venues/5579.jpg",
    "description": "Journey from Weberwiese to United Nations Square, discovering urban transformations"
  },
  {
    "id": 5550,
    "name": "Glaubenskirche",
    "coordinates": { "lng": 13.4895763, "lat": 52.5147393 },
    "image": "/images/venues/5550.jpg",
    "description": "Visit Glaubenskirche, a place of worship and reflection"
  },
  {
    "id": 5553,
    "name": "Kath. St.-Martin-Kirche",
    "coordinates": { "lng": 13.6038808, "lat": 52.5146074 },
    "image": "/images/venues/5553.jpg",
    "description": "Explore St. Martin's Catholic Church, a historic religious site"
  },
  {
    "id": 5528,
    "name": "Stasi-Zentrale. Campus für Demokratie",
    "coordinates": { "lng": 13.487322, "lat": 52.5145186 },
    "image": "/images/venues/5528.jpg",
    "description": "Discover the Stasi Central, now a Campus for Democracy"
  },
  {
    "id": 5259,
    "name": "Krankenhauskirche im Wuhlgarten",
    "coordinates": { "lng": 13.567573451606759, "lat": 52.514262099999996 },
    "image": "/images/venues/5259.jpg",
    "description": "Visit the Hospital Church in Wuhlgarten, a serene sanctuary"
  },
  {
    "id": 5483,
    "name": "Nicolaihaus",
    "coordinates": { "lng": 13.402959399999986, "lat": 52.5141546 },
    "image": "/images/venues/5483.jpg",
    "description": "Explore the historic Nicolai House, showcasing architectural heritage"
  },
  {
    "id": 5375,
    "name": "Archäologische Ausgrabungen am Petriplatz",
    "coordinates": { "lng": 13.403985500335695, "lat": 52.51355699542472 },
    "image": "/images/venues/5375.jpg",
    "description": "Unearth the past at archaeological excavations in Petriplatz"
  },
  {
    "id": 5530,
    "name": "Stadtbad Lichtenberg",
    "coordinates": { "lng": 13.493421239224475, "lat": 52.513139100000004 },
    "image": "/images/venues/5530.jpg",
    "description": "Take a dip in the Lichtenberg City Baths, a historic swimming facility"
  },
  {
    "id": 5404,
    "name": "Wohnblock und Garagen Knobelsdorffstraße",
    "coordinates": { "lng": 13.288414478302004, "lat": 52.5130868842183 },
    "image": "/images/venues/5404.jpg",
    "description": "Admire residential and garage structures on Knobelsdorffstraße"
  },
  {
    "id": 5576,
    "name": "Ev. Epiphanienkirche",
    "coordinates": { "lng": 13.2848565, "lat": 52.5130337 },
    "image": "/images/venues/5576.jpg",
    "description": "Visit the Evangelical Epiphany Church, a place of spiritual significance"
  },
  {
    "id": 5516,
    "name": "Bärenzwinger im Köllnischen Park",
    "coordinates": { "lng": 13.414472937583925, "lat": 52.51269838574543 },
    "image": "/images/venues/5516.jpg",
    "description": "Discover the Bear Pits in Köllnischen Park, an interesting site"
  },
  {
    "id": 5388,
    "name": "Städtischer Zentralfriedhof Friedrichsfelde",
    "coordinates": { "lng": 13.50077, "lat": 52.5126554 },
    "image": "/images/venues/5388.jpg",
    "description": "Explore the Friedrichsfelde Central Cemetery, a serene resting place"
  },
  {
    "id": 5450,
    "name": "Villa Skupin",
    "coordinates": { "lng": 13.4790500395194, "lat": 52.511487900000006 },
    "image": "/images/venues/5450.jpg",
    "description": "Visit Villa Skupin, showcasing architectural beauty and history"
  },
  {
    "id": 5412,
    "name": "Fahrradtour: Berliner Gas-Straßenlaternen",
    "coordinates": { "lng": 13.29674005508423, "lat": 52.51107579617247 },
    "image": "/images/venues/5412.jpg",
    "description": "Berlin Gas Streetlamps"
  },
  {
    "id": 5337,
    "name": "Renaissance-Theater Berlin",
    "coordinates": { "lng": 13.323503, "lat": 52.5103384 },
    "image": "/images/venues/5337.jpg",
    "description": "Enjoy performances at the Renaissance Theater in Berlin"
  },
  {
    "id": 5357,
    "name": "Lietzenseepark",
    "coordinates": { "lng": 13.291933536529543, "lat": 52.51023999225049 },
    "image": "/images/venues/5357.jpg",
    "description": "Stroll through Lietzenseepark, a tranquil urban park"
  },
  {
    "id": 5549,
    "name": "Corbusierhaus",
    "coordinates": { "lng": 13.243911266326904, "lat": 52.51017469439965 },
    "image": "/images/venues/5549.jpg",
    "description": "Admire the Corbusier House, an architectural gem designed by Le Corbusier"
  },
  {
    "id": 5341,
    "name": "Gebäudeensemble Wohn- und Atelierhaus Georg Kolbes",
    "coordinates": { "lng": 13.25478146860692, "lat": 52.5099381 },
    "image": "/images/venues/5341.jpg",
    "description": "Explore the residential and studio buildings of Georg Kolbe, an artist's haven"
  },
  {
    "id": 5574,
    "name": "Ehem. Reichspostmuseum",
    "coordinates": { "lng": 13.387312889099121, "lat": 52.50992656168169 },
    "image": "/images/venues/5574.jpg",
    "description": "A historic institution showcasing postal history"
  },
  {
    "id": 5547,
    "name": "Schloss und Schlosspark Biesdorf",
    "coordinates": { "lng": 13.557631578569577, "lat": 52.50984065 },
    "image": "/images/venues/5547.jpg",
    "description": "Biesdorf Palace and Park offer a serene escape"
  },
  {
    "id": 5340,
    "name": "Italienische Botschaft",
    "coordinates": { "lng": 13.359090000000037, "lat": 52.50974 },
    "image": "/images/venues/5340.jpg",
    "description": "The Italian Embassy is an architectural gem"
  },
  {
    "id": 5390,
    "name": "Philharmonie",
    "coordinates": { "lng": 13.369932174682619, "lat": 52.509691487288165 },
    "image": "/images/venues/5390.jpg",
    "description": "Berlin's premier concert hall, renowned for its acoustics"
  },
  {
    "id": 5480,
    "name": "Logenhaus der Großen National-Mutterloge",
    "coordinates": { "lng": 13.262300491333008, "lat": 52.5091429754802 },
    "image": "/images/venues/5480.jpg",
    "description": "A Masonic lodge with a rich cultural heritage"
  },
  {
    "id": 5394,
    "name": "Ev. Gnadenkirche Biesdorf",
    "coordinates": { "lng": 13.555288910865784, "lat": 52.50910869326487 },
    "image": "/images/venues/5394.jpg",
    "description": "A community hub, hosting cultural events"
  },
  {
    "id": 5354,
    "name": "Parkwächterhaus im Lietzenseepark",
    "coordinates": { "lng": 13.2889777, "lat": 52.50887555 },
    "image": "/images/venues/5354.jpg",
    "description": "A charming park keeper's cottage"
  },
  {
    "id": 5560,
    "name": "Norddeutsche Eiswerke",
    "coordinates": { "lng": 13.425142765045168, "lat": 52.50867281705331 },
    "image": "/images/venues/5560.jpg",
    "description": "A fascinating glimpse into Berlin's ice industry history"
  },
  {
    "id": 5559,
    "name": "Detlev-Rohwedder-Haus – Bundesministerium der Finanzen",
    "coordinates": { "lng": 13.38355589973327, "lat": 52.50863295 },
    "image": "/images/venues/5559.jpg",
    "description": "A significant government building with a storied past"
  },
  {
    "id": 5384,
    "name": "Jesuskirche Kaulsdorf mit Turmmuseum",
    "coordinates": { "lng": 13.5807058, "lat": 52.5081515 },
    "image": "/images/venues/5384.jpg",
    "description": "The Jesus Church in Kaulsdorf with an intriguing tower museum"
  },
  {
    "id": 5611,
    "name": "St. Matthäus-Kirche",
    "coordinates": { "lng": 13.3670333, "lat": 52.5077233 },
    "image": "/images/venues/5611.jpg",
    "description": "A tranquil church with architectural and historical significance"
  },
  {
    "id": 5527,
    "name": "Checkpoint Charlie",
    "coordinates": { "lng": 13.390316963195803, "lat": 52.507680243857635 },
    "image": "/images/venues/5527.jpg",
    "description": "A Cold War relic, once a border crossing point"
  },
  {
    "id": 5479,
    "name": "Reichsbahnausbesserungswerk Franz Stenzer",
    "coordinates": { "lng": 13.4547707, "lat": 52.5075865 },
    "image": "/images/venues/5479.jpg",
    "description": "Former railway repair facilities with industrial heritage"
  },
  {
    "id": 5592,
    "name": "Ehem. Preußischer Landtag",
    "coordinates": { "lng": 13.38160514831543, "lat": 52.50734067419732 },
    "image": "/images/venues/5592.jpg",
    "description": "Once the seat of Prussia's state parliament"
  },
  {
    "id": 5348,
    "name": "Die Berliner Mauer",
    "coordinates": { "lng": 13.39061737060547, "lat": 52.507275372038826 },
    "image": "/images/venues/5348.jpg",
    "description": "The infamous Berlin Wall, symbolizing division and reunification"
  },
  {
    "id": 5431,
    "name": "Kath. St. Michael-Kirche",
    "coordinates": { "lng": 13.4195241, "lat": 52.5072497 },
    "image": "/images/venues/5431.jpg",
    "description": "St. Michael's Catholic Church, an architectural gem"
  },
  {
    "id": 5380,
    "name": "Ev.-Lutherische Kirche",
    "coordinates": { "lng": 13.415637016296388, "lat": 52.50715782790899 },
    "image": "/images/venues/5380.jpg",
    "description": "An Evangelical Lutheran Church with a rich spiritual tradition"
  },
  {
    "id": 5298,
    "name": "Denkmal zum 17. Juni 1953",
    "coordinates": { "lng": 13.39071913657742, "lat": 52.5071493 },
    "image": "/images/venues/5298.jpg",
    "description": "Commemorating the 1953 East German uprising"
  },
  {
    "id": 5358,
    "name": "Dokumentationszentrum Topographie des Terrors",
    "coordinates": { "lng": 13.383986949920654, "lat": 52.506798663342416 },
    "image": "/images/venues/5358.jpg",
    "description": "An exhibition center documenting the dark history of the Third Reich"
  },
  {
    "id": 5265,
    "name": "Haus des Rundfunks und Fernsehzentrum",
    "coordinates": { "lng": 13.2805304, "lat": 52.5065027 },
    "image": "/images/venues/5265.jpg",
    "description": "A broadcasting hub integral to Berlin's media landscape"
  },
  {
    "id": 5385,
    "name": "Dorfkirche Mahlsdorf",
    "coordinates": { "lng": 13.6125652, "lat": 52.5061427 },
    "image": "/images/venues/5385.jpg",
    "description": "A picturesque village church steeped in history"
  },
  {
    "id": 5297,
    "name": "Theater des Westens",
    "coordinates": { "lng": 13.329005891948338, "lat": 52.5059047 },
    "image": "/images/venues/5297.jpg",
    "description": "Berlin's renowned theater for world-class performances"
  },
  {
    "id": 5577,
    "name": "48h ICC",
    "coordinates": { "lng": 13.28096866607666, "lat": 52.50585176087142 },
    "image": "/images/venues/5577.jpg",
    "description": "A dynamic event celebrating Berlin's cultural diversity"
  },
  {
    "id": 5475,
    "name": "Ev. St.-Thomas-Kirche –  FÄLLT AUS",
    "coordinates": { "lng": 13.426580429077148, "lat": 52.505211773855784 },
    "image": "/images/venues/5475.jpg",
    "description": "A historic church, unfortunately currently inaccessible"
  },
  {
    "id": 5570,
    "name": "Rotes Haus der Nürtingen Grundschule",
    "coordinates": { "lng": 13.429992198944094, "lat": 52.50502238815632 },
    "image": "/images/venues/5570.jpg",
    "description": "A vibrant educational space at Nürtingen Primary School"
  },
  {
    "id": 5399,
    "name": "Ev. Kaiser-Wilhelm-Gedächtniskirche",
    "coordinates": { "lng": 13.335294018768128, "lat": 52.50496755 },
    "image": "/images/venues/5399.jpg",
    "description": "A striking memorial church in Berlin"
  },
  {
    "id": 5302,
    "name": "Oberbaum-City",
    "coordinates": { "lng": 13.448917865753176, "lat": 52.50487218512484 },
    "image": "/images/venues/5302.jpg",
    "description": "A modern urban district along the iconic Oberbaum Bridge"
  },
  {
    "id": 5561,
    "name": "Künstlerhaus St. Lukas",
    "coordinates": { "lng": 13.3275157, "lat": 52.5048703 },
    "image": "/images/venues/5561.jpg",
    "description": "A hub for artistic creativity and cultural endeavors"
  },
  {
    "id": 5538,
    "name": "Denkmale im Boxhagener Kiez",
    "coordinates": { "lng": 13.468186855316162, "lat": 52.504401981012386 },
    "image": "/images/venues/5538.jpg",
    "description": "Monuments in the vibrant Boxhagener neighborhood"
  },
  {
    "id": 5535,
    "name": "Filmabend vom Rostkreuz zum neuen Bahnhof Ostkreuz",
    "coordinates": { "lng": 13.47135334305591, "lat": 52.504052599999994 },
    "image": "/images/venues/5535.jpg",
    "description": "A cinematic journey along the Ostkreuz railway"
  },
  {
    "id": 5295,
    "name": "Fontane-Apotheke im ehem. Diakonissenkrankenhaus Bethanien",
    "coordinates": { "lng": 13.4241227, "lat": 52.5039317 },
    "image": "/images/venues/5295.jpg",
    "description": "A historic pharmacy within the former Bethanien Deaconess Hospital"
  },
  {
    "id": 5306,
    "name": "Pumpstation Radialsystem XII",
    "coordinates": { "lng": 13.454756152114896, "lat": 52.50379652571522 },
    "image": "/images/venues/5306.jpg",
    "description": "An industrial facility turned into a unique arts and cultural center"
  },
  {
    "id": 5285,
    "name": "Erinnerungs- und Begegnungsstätte Bonhoeffer-Haus",
    "coordinates": { "lng": 13.262436352738598, "lat": 52.50362990000001 },
    "image": "/images/venues/5285.jpg",
    "description": "Commemorating Dietrich Bonhoeffer's life and legacy"
  },
  {
    "id": 5532,
    "name": "Linienverzweiger auf dem Tuchollaplatz",
    "coordinates": { "lng": 13.481082916259767, "lat": 52.503461557698294 },
    "image": "/images/venues/5532.jpg",
    "description": "A significant urban landmark at Tuchollaplatz"
  },
  {
    "id": 5344,
    "name": "Ev. Zwingli-Kirche",
    "coordinates": { "lng": 13.454711437225342, "lat": 52.50337012658077 },
    "image": "/images/venues/5344.jpg",
    "description": "A place of worship with a rich spiritual tradition"
  },
  {
    "id": 5397,
    "name": "Museum Lichtenberg im Stadthaus",
    "coordinates": { "lng": 13.4805128, "lat": 52.5031008 },
    "image": "/images/venues/5397.jpg",
    "description": "A local museum housed in a historic city building"
  },
  {
    "id": 5286,
    "name": "Mosaikhandwerk",
    "coordinates": { "lng": 13.4092838, "lat": 52.5030903 },
    "image": "/images/venues/5286.jpg",
    "description": "The artistry of mosaic craft on display"
  },
  {
    "id": 5609,
    "name": "Ausstellung: Architektur macht Bewegung",
    "coordinates": { "lng": 13.3176041, "lat": 52.5028833 },
    "image": "/images/venues/5609.jpg",
    "description": "Architecture makes movement"
  },
  {
    "id": 5463,
    "name": "Stadthaus in der Oranienstraße",
    "coordinates": { "lng": 13.413901, "lat": 52.5028653 },
    "image": "/images/venues/5463.jpg",
    "description": "An architectural gem on Oranienstraße"
  },
  {
    "id": 5424,
    "name": "WestkreuzPark!",
    "coordinates": { "lng": 13.290447592735292, "lat": 52.50274316522345 },
    "image": "/images/venues/5424.jpg",
    "description": "A green urban oasis at Westkreuz"
  },
  {
    "id": 5335,
    "name": "Gründerzeitmuseum im Gutshaus Mahlsdorf",
    "coordinates": { "lng": 13.613929245108904, "lat": 52.5024922 },
    "image": "/images/venues/5335.jpg",
    "description": "A museum in the historic Mahlsdorf Manor showcasing Gründerzeit era"
  },
  {
    "id": 5477,
    "name": "Literaturhaus Berlin",
    "coordinates": { "lng": 13.3268653, "lat": 52.5021388 },
    "image": "/images/venues/5477.jpg",
    "description": "A hub for literary enthusiasts and cultural events"
  },
  {
    "id": 5353,
    "name": "Maison de France",
    "coordinates": { "lng": 13.3247598, "lat": 52.5020688 },
    "image": "/images/venues/5353.jpg",
    "description": "A cultural center celebrating French culture and exchange"
  },
  {
    "id": 5303,
    "name": "Ev. Erlöserkirche",
    "coordinates": { "lng": 13.481239854878048, "lat": 52.501417450000005 },
    "image": "/images/venues/5303.jpg",
    "description": "A place of worship with a unique spiritual presence"
  },
  {
    "id": 5301,
    "name": "20. und 42. Gemeindeschule und Blindenanstalt",
    "coordinates": { "lng": 13.4204778, "lat": 52.5010678 },
    "image": "/images/venues/5301.jpg",
    "description": "Historic educational and social institutions"
  },
  {
    "id": 5472,
    "name": "werkstatt denkmal: Oberbaumbrücke",
    "coordinates": { "lng": 13.4182215, "lat": 52.5006018 },
    "image": "/images/venues/5472.jpg",
    "description": "Oberbaumbrücke"
  },
  {
    "id": 5462,
    "name": "Kumi*13 – Gründerzeithaus von 1875",
    "coordinates": { "lng": 13.3579721, "lat": 52.4997577 },
    "image": "/images/venues/5462.jpg",
    "description": "An architectural gem from the 19th century"
  },
  {
    "id": 5568,
    "name": "AVUS Tribüne",
    "coordinates": { "lng": 13.273272374197937, "lat": 52.49946185 },
    "image": "/images/venues/5568.jpg",
    "description": "A historic grandstand on the AVUS racing circuit"
  },
  {
    "id": 5267,
    "name": "Fahrradtour: Mit AEG am Humboldthain, Brauerei Pfefferberg und Historischem Hafen Berlin",
    "coordinates": { "lng": 13.379309177398683, "lat": 52.498693824431086 },
    "image": "/images/venues/5267.jpg",
    "description": "With AEG at Humboldthain, the Pfefferberg Brewery and the Historic Port of Berlin"
  },
  {
    "id": 5268,
    "name": "Fahrradtour: Mit Kraftwerk Charlottenburg, Westhafen, Humboldthafen und Gendarmenmarkt",
    "coordinates": { "lng": 13.379298448562624, "lat": 52.49868402718657 },
    "image": "/images/venues/5268.jpg",
    "description": "With Charlottenburg power plant, Westhafen, Humboldthafen and Gendarmenmarkt"
  },
  {
    "id": 5408,
    "name": "Stolpersteine in Eichkamp",
    "coordinates": { "lng": 13.2681121, "lat": 52.498129 },
    "image": "/images/venues/5408.jpg",
    "description": "Commemorative stones in Eichkamp bearing witness to history"
  },
  {
    "id": 5419,
    "name": "WOGA-Komplex am Lehniner PLatz",
    "coordinates": { "lng": 13.302000000000021, "lat": 52.49792000000001 },
    "image": "/images/venues/5419.jpg",
    "description": "An architectural gem, the WOGA complex is a testament to Berlin's history"
  },
  {
    "id": 5569,
    "name": "Ehem. Alliierte Abhörstation auf dem Teufelsberg",
    "coordinates": { "lng": 13.240478038787842, "lat": 52.49781859530769 },
    "image": "/images/venues/5569.jpg",
    "description": "Explore the remnants of a Cold War listening post"
  },
  {
    "id": 5447,
    "name": "Ev. Kirche Zum Heiligen Kreuz",
    "coordinates": { "lng": 13.39601882906977, "lat": 52.496388100000004 },
    "image": "/images/venues/5447.jpg",
    "description": "A neo-Gothic church known for its stunning stained glass"
  },
  {
    "id": 5496,
    "name": "Zentralbüro der Glaswerke Stralau",
    "coordinates": { "lng": 13.46754312515259, "lat": 52.49606808479277 },
    "image": "/images/venues/5496.jpg",
    "description": "Central hub of the Stralau Glassworks company"
  },
  {
    "id": 5452,
    "name": "Kinder-, Kultur- und Nachbarschaftszentrum Regenbogenfabrik",
    "coordinates": { "lng": 13.4266313, "lat": 52.4957728 },
    "image": "/images/venues/5452.jpg",
    "description": "A vibrant hub for children, culture, and community"
  },
  {
    "id": 5352,
    "name": "Langhans-Gedenkstätte im Mausoleum Massute",
    "coordinates": { "lng": 13.389673233032227, "lat": 52.495297315527864 },
    "image": "/images/venues/5352.jpg",
    "description": "Visit the Langhans Memorial in the Massute Mausoleum"
  },
  {
    "id": 5542,
    "name": "Mietshaus mit Tiefgarage, Werkstatt, Autosalon und Tankstelle",
    "coordinates": { "lng": 13.323800751342787, "lat": 52.49522542134448 },
    "image": "/images/venues/5542.jpg",
    "description": "Historic building with an intriguing past"
  },
  {
    "id": 5420,
    "name": "Friedhöfe vor dem Halleschen Tor – Friedhof III der Jerusalems- und Neuen Kirche",
    "coordinates": { "lng": 13.3896154, "lat": 52.4949286 },
    "image": "/images/venues/5420.jpg",
    "description": "Cemeteries rich in history"
  },
  {
    "id": 5486,
    "name": "Alte Desinfektionsanstalt I",
    "coordinates": { "lng": 13.4294514, "lat": 52.4943959 },
    "image": "/images/venues/5486.jpg",
    "description": "Step back in time at the former disinfection facility"
  },
  {
    "id": 5521,
    "name": "Ehem. Städtisches Arbeitshaus und Strafvollzugseinrichtung I Rummelsburg",
    "coordinates": { "lng": 13.484966754913332, "lat": 52.4943305688755 },
    "image": "/images/venues/5521.jpg",
    "description": "A glimpse into Rummelsburg's penal history"
  },
  {
    "id": 5451,
    "name": "Ev. Kirche Am Hohenzollernplatz",
    "coordinates": { "lng": 13.3269168, "lat": 52.494032 },
    "image": "/images/venues/5451.jpg",
    "description": "A place of worship with architectural charm"
  },
  {
    "id": 5474,
    "name": "Kaserne des 1. Garde-Dragoner-Regiments –  Dragonerareal im Rathausblock",
    "coordinates": { "lng": 13.388085365295412, "lat": 52.494000694377334 },
    "image": "/images/venues/5474.jpg",
    "description": "Historic barracks with military heritage"
  },
  {
    "id": 5256,
    "name": "Offizierskasino des Kaiser-Franz-Garde-Grenadier-Regiments Nr. 2",
    "coordinates": { "lng": 13.4075946, "lat": 52.4929721 },
    "image": "/images/venues/5256.jpg",
    "description": "Explore the former officer's mess of Regiment No. 2"
  },
  {
    "id": 5558,
    "name": "Kath. St.-Bonifatius-Kirche",
    "coordinates": { "lng": 13.386009335517883, "lat": 52.492945732588844 },
    "image": "/images/venues/5558.jpg",
    "description": "A stunning Catholic church known for its Neo-Gothic architecture and intricate stained glass windows"
  },
  {
    "id": 5507,
    "name": "Kammergericht",
    "coordinates": { "lng": 13.357915878295898, "lat": 52.49251459540903 },
    "image": "/images/venues/5507.jpg",
    "description": "The Kammergericht, or Court of Appeals, is Berlin's highest court, housed in a historic building dating back to 1913"
  },
  {
    "id": 5524,
    "name": "Naturschutzzentrum Ökowerk Berlin im Wasserwerk Teufelssee",
    "coordinates": { "lng": 13.236575819491526, "lat": 52.4917614 },
    "image": "/images/venues/5524.jpg",
    "description": "An environmental center located at the Teufelssee waterworks, promoting conservation and ecological awareness"
  },
  {
    "id": 5360,
    "name": "Wandgemälde auf Brandmauer im Hinterhof – FÄLLT AUS",
    "coordinates": { "lng": 13.4128111, "lat": 52.4910329 },
    "image": "/images/venues/5360.jpg",
    "description": "Unfortunately, the courtyard mural is currently unavailable for viewing"
  },
  {
    "id": 5425,
    "name": "Gasometer-Bunker Fichtestraße",
    "coordinates": { "lng": 13.412465371580883, "lat": 52.49025485 },
    "image": "/images/venues/5425.jpg",
    "description": "A preserved gasometer bunker, once part of Berlin's industrial history"
  },
  {
    "id": 5456,
    "name": "Leibniz-Gymnasium mit Beobachtungsturm",
    "coordinates": { "lng": 13.396849300154178, "lat": 52.4899444 },
    "image": "/images/venues/5456.jpg",
    "description": "Leibniz-Gymnasium features an observatory tower for educational stargazing"
  },
  {
    "id": 5440,
    "name": "Sowjetisches Ehrenmal im Treptower Park",
    "coordinates": { "lng": 13.468358516693117, "lat": 52.489875421152746 },
    "image": "/images/venues/5440.jpg",
    "description": "The Soviet War Memorial in Treptower Park commemorates fallen Red Army soldiers from World War II"
  },
  {
    "id": 5417,
    "name": "Ev. Apostel-Paulus-Kirche",
    "coordinates": { "lng": 13.351843357086183, "lat": 52.48948345107256 },
    "image": "/images/venues/5417.jpg",
    "description": "This Evangelical church holds cultural significance in Berlin, hosting various events and services"
  },
  {
    "id": 5407,
    "name": "Ev. Passionskirche",
    "coordinates": { "lng": 13.397182238768197, "lat": 52.48948105 },
    "image": "/images/venues/5407.jpg",
    "description": "A historical church with roots dating back to the 19th century, often used for concerts and cultural events"
  },
  {
    "id": 5614,
    "name": "Viktoriapark",
    "coordinates": { "lng": 13.38020935, "lat": 52.4894583 },
    "image": "/images/venues/5614.jpg",
    "description": "An urban park offering picturesque landscapes and the stunning Victoria Waterfall"
  },
  {
    "id": 5422,
    "name": "Friedhof Dreifaltigkeit II",
    "coordinates": { "lng": 13.3980572, "lat": 52.4887358 },
    "image": "/images/venues/5422.jpg",
    "description": "A cemetery with a rich history, resting place of notable Berliners"
  },
  {
    "id": 5277,
    "name": "St.-Antonius-Hospital",
    "coordinates": { "lng": 13.5348687, "lat": 52.4887134 },
    "image": "/images/venues/5277.jpg",
    "description": "A local hospital known for its healthcare services and community impact"
  },
  {
    "id": 5426,
    "name": "Friedhof IV der Jerusalems- und Neuen Kirche",
    "coordinates": { "lng": 13.404082059860231, "lat": 52.48864723655929 },
    "image": "/images/venues/5426.jpg",
    "description": "A cemetery steeped in history, showcasing Berlin's diverse heritage"
  },
  {
    "id": 5421,
    "name": "Luisenstädtischer Friedhof",
    "coordinates": { "lng": 13.4056844, "lat": 52.4886166 },
    "image": "/images/venues/5421.jpg",
    "description": "A historic cemetery with beautiful grave monuments, reflecting Berlin's cultural heritage"
  },
  {
    "id": 5502,
    "name": "Chamissoplatz",
    "coordinates": { "lng": 13.3905756, "lat": 52.4883702 },
    "image": "/images/venues/5502.jpg",
    "description": "A charming square surrounded by historic buildings and a central fountain"
  },
  {
    "id": 5332,
    "name": "Die Villenkolonie Grunewald und ihre Bewohner",
    "coordinates": { "lng": 13.261377811431885, "lat": 52.48813766054424 },
    "image": "/images/venues/5332.jpg",
    "description": "A residential area known for its elegant villas and notable past residents"
  },
  {
    "id": 5292,
    "name": "Berliner Moschee",
    "coordinates": { "lng": 13.311867713928224, "lat": 52.4873798186287 },
    "image": "/images/venues/5292.jpg",
    "description": "A striking mosque in Berlin, combining modern and traditional Islamic architectural elements"
  },
  {
    "id": 5284,
    "name": "Goethe-Gymnasium",
    "coordinates": { "lng": 13.32165433492985, "lat": 52.487344750000005 },
    "image": "/images/venues/5284.jpg",
    "description": "A renowned secondary school with a strong focus on academic excellence"
  },
  {
    "id": 5520,
    "name": "Turmhaus am Zenner",
    "coordinates": { "lng": 13.4773778, "lat": 52.4873182 },
    "image": "/images/venues/5520.jpg",
    "description": "The Zenner Tower House, offering scenic views of the surrounding area"
  },
  {
    "id": 5346,
    "name": "Waldmuseum",
    "coordinates": { "lng": 13.251099586486818, "lat": 52.48709235793461 },
    "image": "/images/venues/5346.jpg",
    "description": "A museum dedicated to the local forests and their ecological significance"
  },
  {
    "id": 5413,
    "name": "Hermannplatz – zwischen Weltstadtambition und Moderne",
    "coordinates": { "lng": 13.424177169799805, "lat": 52.48633449800855 },
    "image": "/images/venues/5413.jpg",
    "description": "Hermannplatz, a vibrant intersection reflecting Berlin's cosmopolitan character and modernity"
  },
  {
    "id": 5275,
    "name": "Museum Berlin-Karlshorst",
    "coordinates": { "lng": 13.5393339, "lat": 52.4862272 },
    "image": "/images/venues/5275.jpg",
    "description": "This museum in Karlshorst showcases Berlin's history and cultural heritage"
  },
  {
    "id": 5409,
    "name": "Archenhold-Sternwarte",
    "coordinates": { "lng": 13.476328233656188, "lat": 52.48586205 },
    "image": "/images/venues/5409.jpg",
    "description": "A historic observatory with fascinating astronomical exhibits and a large telescope"
  },
  {
    "id": 5304,
    "name": "Amalien-Orgel",
    "coordinates": { "lng": 13.5282598, "lat": 52.4854461 },
    "image": "/images/venues/5304.jpg",
    "description": "A notable pipe organ with a rich musical history"
  },
  {
    "id": 5546,
    "name": "Verbandshaus der Deutschen Buchdrucker",
    "coordinates": { "lng": 13.3838886, "lat": 52.4854344 },
    "image": "/images/venues/5546.jpg",
    "description": "The Association House of German Printers, historically significant in the printing industry"
  },
  {
    "id": 5418,
    "name": "Kirche der Christlichen Wissenschaft in Wilmersdorf",
    "coordinates": { "lng": 13.321411, "lat": 52.4851356 },
    "image": "/images/venues/5418.jpg",
    "description": "The Church of Christian Science in Wilmersdorf"
  },
  {
    "id": 5434,
    "name": "Alter Zwölf-Apostel-Kirchhof",
    "coordinates": { "lng": 13.3657225, "lat": 52.4846906 },
    "image": "/images/venues/5434.jpg",
    "description": "An old cemetery called Old Twelve Apostles Cemetery"
  },
  {
    "id": 5584,
    "name": "Informationsort Schwerbelastungskörper",
    "coordinates": { "lng": 13.372120857238771, "lat": 52.48451819435089 },
    "image": "/images/venues/5584.jpg",
    "description": "An information location about the heavy-duty body, possibly a historical building"
  },
  {
    "id": 5582,
    "name": "Spuren zum KZ Columbia",
    "coordinates": { "lng": 13.400337696075441, "lat": 52.483773357498954 },
    "image": "/images/venues/5582.jpg",
    "description": "Information about traces relating to the Columbia concentration camp"
  },
  {
    "id": 5513,
    "name": "Flughafen Tempelhof",
    "coordinates": { "lng": 13.389008045196535, "lat": 52.48281942521723 },
    "image": "/images/venues/5513.jpg",
    "description": "A historical landmark, once served as a central commercial airport and today offers a wide range of leisure opportunities and recreational areas in the middle of the city"
  },
  {
    "id": 5589,
    "name": "Ev. Paul-Gerhardt-Kirche",
    "coordinates": { "lng": 13.34888219833374, "lat": 52.48273448503852 },
    "image": "/images/venues/5589.jpg",
    "description": "The Evangelical Paul Gerhardt Church"
  },
  {
    "id": 5401,
    "name": "KAHO. Raum für Kultur / Theater Karlshorst",
    "coordinates": { "lng": 13.526668909104787, "lat": 52.48203735 },
    "image": "/images/venues/5401.jpg",
    "description": "KAHO is a space for culture and theater in Karlshorst"
  },
  {
    "id": 5586,
    "name": "Deutschlandradio - Funkhaus Berlin",
    "coordinates": { "lng": 13.337091207504272, "lat": 52.480231943104066 },
    "image": "/images/venues/5586.jpg",
    "description": "The Deutschlandradio radio house in Berlin"
  },
  {
    "id": 5585,
    "name": "SCHÖNEBERG: Lern- und Gedenkort Kohlenhandlung Bruno Meyer Nachfahren",
    "coordinates": { "lng": 13.3608734, "lat": 52.4795396 },
    "image": "/images/venues/5585.jpg",
    "description": "Learning and memorial site at the Bruno Meyer descendants coal store"
  },
  {
    "id": 5423,
    "name": "Sudhaus des KINDL – Zentrum für zeitgenössische Kunst",
    "coordinates": { "lng": 13.431275, "lat": 52.4794637 },
    "image": "/images/venues/5423.jpg",
    "description": "The brewhouse in the KINDL Center for Contemporary Art"
  },
  {
    "id": 5333,
    "name": "Friedenau – eine idyllische Landgemeinde",
    "coordinates": { "lng": 13.328411579132082, "lat": 52.477448269705036 },
    "image": "/images/venues/5333.jpg",
    "description": "Information about Friedenau as an idyllic rural community"
  },
  {
    "id": 5481,
    "name": "werkstatt denkmal: Wohnhaus und Bewag-Schalthaus (Umspannwerk)",
    "coordinates": { "lng": 13.4412411, "lat": 52.4768463 },
    "image": "/images/venues/5481.jpg",
    "description": "residential building and Bewag switching house (substation)"
  },
  {
    "id": 5490,
    "name": "Relikte des Spiel- und Sportparks Neukölln auf dem Flugfeld Tempelhof",
    "coordinates": { "lng": 13.418490886688234, "lat": 52.4766902436237 },
    "image": "/images/venues/5490.jpg",
    "description": "Remains of the Neukölln play and sports park on the former Tempelhof airfield"
  },
  {
    "id": 5400,
    "name": "Gymnasium Friedenau",
    "coordinates": { "lng": 13.333133464095852, "lat": 52.47628495 },
    "image": "/images/venues/5400.jpg",
    "description": "The high school in Friedenau"
  },
  {
    "id": 5338,
    "name": "Waldsiedlung Lichtenberg in Karlshorst",
    "coordinates": { "lng": 13.510007858276369, "lat": 52.47615438972225 },
    "image": "/images/venues/5338.jpg",
    "description": "The Lichtenberg forest settlement in Karlshorst"
  },
  {
    "id": 5583,
    "name": "Gedenkort SA-Gefängnis Papestraße",
    "coordinates": { "lng": 13.370004573616061, "lat": 52.4755781 },
    "image": "/images/venues/5583.jpg",
    "description": "A memorial for the SA Prison on Papestrasse"
  },
  {
    "id": 5531,
    "name": "Zwangsarbeiterlager Kaulsdorf – FÄLLT AUS",
    "coordinates": { "lng": 13.5679134, "lat": 52.4752425 },
    "image": "/images/venues/5531.jpg",
    "description": "Information about a forced labor camp in Kaulsdorf that may not be open to the public (CANCELLED)"
  },
  {
    "id": 5508,
    "name": "Ev. Bethlehemskirche im Böhmischen Dorf",
    "coordinates": { "lng": 13.447458744049072, "lat": 52.47420369571061 },
    "image": "/images/venues/5508.jpg",
    "description": "The Evangelical Bethlehem Church in the Bohemian Village"
  },
  {
    "id": 5389,
    "name": "Flugplatz Gatow",
    "coordinates": { "lng": 13.141735, "lat": 52.474199 },
    "image": "/images/venues/5389.jpg",
    "description": "The Gatow airfield"
  },
  {
    "id": 5311,
    "name": "Alte Dorfschmiede auf dem Richardplatz im Böhmischen Dorf",
    "coordinates": { "lng": 13.446312302858413, "lat": 52.47418825 },
    "image": "/images/venues/5311.jpg",
    "description": "An old village blacksmith on Richardplatz in the Bohemian Village"
  },
  {
    "id": 5305,
    "name": "Roxy-Palast",
    "coordinates": { "lng": 13.336718355344761, "lat": 52.47316505 },
    "image": "/images/venues/5305.jpg",
    "description": "The Roxy Palace"
  },
  {
    "id": 5296,
    "name": "Autobahnüberbauung Schlangenbader Straße",
    "coordinates": { "lng": 13.3069706, "lat": 52.4727689 },
    "image": "/images/venues/5296.jpg",
    "description": "A motorway development on Schnurbader Straße"
  },
  {
    "id": 5444,
    "name": "Gedenkstätte für NS-Zwangsarbeiter des kirchlichen Friedhoflagers Neukölln",
    "coordinates": { "lng": 13.428897857666017, "lat": 52.47257314977933 },
    "image": "/images/venues/5444.jpg",
    "description": "A memorial for the Nazi forced laborers at the church cemetery camp in Neukölln"
  },
  {
    "id": 5476,
    "name": "Ev. Magdalenenkirche",
    "coordinates": { "lng": 13.441706090603741, "lat": 52.4721226 },
    "image": "/images/venues/5476.jpg",
    "description": "The Evangelical Magdalenenkirche"
  },
  {
    "id": 5329,
    "name": "Internationales Begegnungszentrum der Wissenschaft (IBZ)",
    "coordinates": { "lng": 13.31691026687622, "lat": 52.47186732358612 },
    "image": "/images/venues/5329.jpg",
    "description": "The International Meeting Center for Science (IBZ)"
  },
  {
    "id": 5573,
    "name": "Haus Dahlem",
    "coordinates": { "lng": 13.293629765659272, "lat": 52.4703282 },
    "image": "/images/venues/5573.jpg",
    "description": "The House Dahlem"
  },
  {
    "id": 5387,
    "name": "Museum zur Geschichte der Berliner Straßenreinigung und Müllabfuhr",
    "coordinates": { "lng": 13.3818032, "lat": 52.4686077 },
    "image": "/images/venues/5387.jpg",
    "description": "A museum on the history of Berlin street cleaning and garbage collection"
  },
  {
    "id": 5291,
    "name": "Garten Allinger",
    "coordinates": { "lng": 13.260927200317383, "lat": 52.4685602463966 },
    "image": "/images/venues/5291.jpg",
    "description": "The Garden Allinger"
  },
  {
    "id": 5359,
    "name": "Künstlerkolonie",
    "coordinates": { "lng": 13.3104428, "lat": 52.4676139 },
    "image": "/images/venues/5359.jpg",
    "description": "An artists' colony"
  },
  {
    "id": 5608,
    "name": "Jagdschloss Grunewald",
    "coordinates": { "lng": 13.26161947486878, "lat": 52.467199940831726 },
    "image": "/images/venues/5608.jpg",
    "description": "The Grunewald hunting lodge"
  },
  {
    "id": 5416,
    "name": "Schilfdachkapelle zum Guten Hirten",
    "coordinates": { "lng": 13.127959999050837, "lat": 52.46493125 },
    "image": "/images/venues/5416.jpg",
    "description": "A reed roof chapel to the Good Shepherd"
  },
  {
    "id": 5518,
    "name": "Kirchhof und Dorfkirche Alt-Tempelhof",
    "coordinates": { "lng": 13.383180346651379, "lat": 52.463584850000004 },
    "image": "/images/venues/5518.jpg",
    "description": "A churchyard and a village church in Alt-Tempelhof"
  },
  {
    "id": 5411,
    "name": "Ordenshaus der Großen Landesloge – Haus Heydenreich",
    "coordinates": { "lng": 13.295216608868536, "lat": 52.46333335 },
    "image": "/images/venues/5411.jpg",
    "description": "The Order House of the Great State Lodge, also known as House Heydenreich"
  },
  {
    "id": 5405,
    "name": "Elektropolis Schöneweide",
    "coordinates": { "lng": 13.5187842, "lat": 52.4604992 },
    "image": "/images/venues/5405.jpg",
    "description": "Elektropolis Schöneweide, a historical place in Schöneweide"
  },
  {
    "id": 5566,
    "name": "Haus Wiegand",
    "coordinates": { "lng": 13.299872875213623, "lat": 52.46043528436628 },
    "image": "/images/venues/5566.jpg",
    "description": "Information about Haus Wiegand"
  },
  {
    "id": 5497,
    "name": "STEGLITZ: Badehaus von Erwin Barth – FÄLLT AUS",
    "coordinates": { "lng": 13.3080736, "lat": 52.4604201 },
    "image": "/images/venues/5497.jpg",
    "description": "Erwin Barth's bathhouse - CANCELED"
  },
  {
    "id": 5363,
    "name": "Gartenstadtsiedlung Elsengrund",
    "coordinates": { "lng": 13.5906497, "lat": 52.4603129 },
    "image": "/images/venues/5363.jpg",
    "description": "The Elsengrund Garden City Settlement"
  },
  {
    "id": 5544,
    "name": "Siedlung Lindenhof",
    "coordinates": { "lng": 13.3644397, "lat": 52.4599232 },
    "image": "/images/venues/5544.jpg",
    "description": "The Lindenhof settlement"
  },
  {
    "id": 5443,
    "name": "AEG-Transformatorenfabrik Oberschöneweide",
    "coordinates": { "lng": 13.515758514404299, "lat": 52.45989269527577 },
    "image": "/images/venues/5443.jpg",
    "description": "The AEG transformer factory in Oberschöneweide"
  },
  {
    "id": 5293,
    "name": "Martin-Niemöller-Haus in Dahlem",
    "coordinates": { "lng": 13.2867028603361, "lat": 52.4594417 },
    "image": "/images/venues/5293.jpg",
    "description": "The Martin Niemöller House in Dahlem"
  },
  {
    "id": 5396,
    "name": "St.-Annen-Kirche Dahlem",
    "coordinates": { "lng": 13.286591745572299, "lat": 52.4586792 },
    "image": "/images/venues/5396.jpg",
    "description": "The St. Anne's Church in Dahlem"
  },
  {
    "id": 5552,
    "name": "Verwaltungsbau der Nationalen Automobil-Gesellschaft (NAG)",
    "coordinates": { "lng": 13.529040813446045, "lat": 52.45670239767748 },
    "image": "/images/venues/5552.jpg",
    "description": "The administration building of the National Automobile Society (NAG)"
  },
  {
    "id": 5610,
    "name": "Kinderheim A. S. Makarenko in der Königsheide",
    "coordinates": { "lng": 13.4997471, "lat": 52.4551766 },
    "image": "/images/venues/5610.jpg",
    "description": "The A. S. Makarenko children's home in the Königsheide"
  },
  {
    "id": 5489,
    "name": "Wasserturm auf dem Friedhof Bergstraße",
    "coordinates": { "lng": 13.341833353042603, "lat": 52.45474103442115 },
    "image": "/images/venues/5489.jpg",
    "description": "The water tower at the Bergstrasse cemetery"
  },
  {
    "id": 5287,
    "name": "Rathaus Friedrichshagen",
    "coordinates": { "lng": 13.624746750716497, "lat": 52.454391400000006 },
    "image": "/images/venues/5287.jpg",
    "description": "The town hall in Friedrichshagen"
  },
  {
    "id": 5276,
    "name": "Altes Kladower Bauernwohnhaus",
    "coordinates": { "lng": 13.143677790794019, "lat": 52.4537169 },
    "image": "/images/venues/5276.jpg",
    "description": "An old farmhouse in Kladower"
  },
  {
    "id": 5446,
    "name": "Zwangsarbeitslager 75/76",
    "coordinates": { "lng": 13.518797918499157, "lat": 52.45260935 },
    "image": "/images/venues/5446.jpg",
    "description": "Information about the forced labor camp 75/76"
  },
  {
    "id": 5280,
    "name": "Textilverarbeitungsfabrik Otto Schneider",
    "coordinates": { "lng": 13.5340944, "lat": 52.4524693 },
    "image": "/images/venues/5280.jpg",
    "description": "The Otto Schneider textile processing factory"
  },
  {
    "id": 5339,
    "name": "Key piece of modernism – Großsiedlung Britz (Hufeisensiedlung)",
    "coordinates": { "lng": 13.449282646179201, "lat": 52.45216497796711 },
    "image": "/images/venues/5339.jpg",
    "description": "A key piece of modernism - the Britz settlement, also known as Hufeisensiedlung"
  },
  {
    "id": 5355,
    "name": "Realgymnasium – BEST-Sabel Oberschule",
    "coordinates": { "lng": 13.5715328, "lat": 52.4516532 },
    "image": "/images/venues/5355.jpg",
    "description": "The Realgymnasium - BEST-Sabel Oberschule"
  },
  {
    "id": 5454,
    "name": "Christophoruskirche",
    "coordinates": { "lng": 13.625169955526886, "lat": 52.4509759 },
    "image": "/images/venues/5454.jpg",
    "description": "The Christophoruskirche"
  },
  {
    "id": 5539,
    "name": "Jesus-Christus-Kirche Dahlem",
    "coordinates": { "lng": 13.2823041, "lat": 52.4499129 },
    "image": "/images/venues/5539.jpg",
    "description": "The Jesus Christ Church in Dahlem"
  },
  {
    "id": 5345,
    "name": "Waldsiedlung Zehlendorf – Onkel Toms Hütte",
    "coordinates": { "lng": 13.25303077697754, "lat": 52.44978493402821 },
    "image": "/images/venues/5345.jpg",
    "description": "Information about the Zehlendorf Forest Settlement, also known as Uncle Tom's Hut"
  },
  {
    "id": 5289,
    "name": "Großsiedlung Britz (Hufeisensiedlung): Wohnen im Welterbe",
    "coordinates": { "lng": 13.44954013824463, "lat": 52.448228681911594 },
    "image": "/images/venues/5289.jpg",
    "description": "Living in the World Heritage Site"
  },
  {
    "id": 5314,
    "name": "Großsiedlung Britz (Hufeisensiedlung)",
    "coordinates": { "lng": 13.4495784, "lat": 52.4480874 },
    "image": "/images/venues/5314.jpg",
    "description": "The Britz settlement, also known as the horseshoe settlement"
  },
  {
    "id": 5343,
    "name": "Bahnbetriebswerk Schöneweide",
    "coordinates": { "lng": 13.520028591156008, "lat": 52.447012412987426 },
    "image": "/images/venues/5343.jpg",
    "description": "The railway depot in Schöneweide"
  },
  {
    "id": 5356,
    "name": "Mies van der Rohe Villen und Garten",
    "coordinates": { "lng": 13.234061419715133, "lat": 52.446478299999995 },
    "image": "/images/venues/5356.jpg",
    "description": "Mies van der Rohe's villas and the associated garden"
  },
  {
    "id": 5373,
    "name": "Ruderhaus Hahns Mühle",
    "coordinates": { "lng": 13.614556490476188, "lat": 52.4464459 },
    "image": "/images/venues/5373.jpg",
    "description": "The Hahns Mühle wheelhouse"
  },
  {
    "id": 5441,
    "name": "Internationale Jugendbauhütte am Bahnbetriebswerk Schöneweide",
    "coordinates": { "lng": 13.5206126, "lat": 52.4463728 },
    "image": "/images/venues/5441.jpg",
    "description": "Information about the International Youth Construction Hut at the Schöneweide railway depot"
  },
  {
    "id": 5445,
    "name": "Gutshof Britz",
    "coordinates": { "lng": 13.437778396959247, "lat": 52.44596575 },
    "image": "/images/venues/5445.jpg",
    "description": "The Gutshof Britz"
  },
  {
    "id": 5473,
    "name": "Projektraum Kunst im TautHaus",
    "coordinates": { "lng": 13.447048299999999, "lat": 52.44527615 },
    "image": "/images/venues/5473.jpg",
    "description": "An exhibition space for contemporary art in the TautHaus"
  },
  {
    "id": 5374,
    "name": "Martin-Luther-Gedächtniskirche",
    "coordinates": { "lng": 13.378772735595703, "lat": 52.44487405232672 },
    "image": "/images/venues/5374.jpg",
    "description": "An impressive church in Berlin with historical significance"
  },
  {
    "id": 5369,
    "name": "KÖPENICK: Fachwerkhaus auf dem Tonnenhof des Wasser- und Schifffahrtsamtes Köpenick",
    "coordinates": { "lng": 13.570325374603273, "lat": 52.44417432155793 },
    "image": "/images/venues/5369.jpg",
    "description": "Half-timbered house on the barrel yard of the Waterways and Shipping Office Köpenick"
  },
  {
    "id": 5281,
    "name": "Fahrradtour: Stammbahn und Stadtentwicklung",
    "coordinates": { "lng": 13.294932246208193, "lat": 52.443163943033426 },
    "image": "/images/venues/5281.jpg",
    "description": "Stammbahn and urban development"
  },
  {
    "id": 5370,
    "name": "Ehem. Kraftwerk Steglitz",
    "coordinates": { "lng": 13.3298047, "lat": 52.443117 },
    "image": "/images/venues/5370.jpg",
    "description": "The former power plant in Steglitz, a testimony to industrial history"
  },
  {
    "id": 5252,
    "name": "Landhaus Fiedler – Haus der Jugend Zehlendorf",
    "coordinates": { "lng": 13.23808380864341, "lat": 52.4416716 },
    "image": "/images/venues/5252.jpg",
    "description": "The Landhaus Fiedler, now used as a house of youth, in Zehlendorf"
  },
  {
    "id": 5376,
    "name": "Ev. Dorfkirche Mariendorf",
    "coordinates": { "lng": 13.386915922164917, "lat": 52.43964215130622 },
    "image": "/images/venues/5376.jpg",
    "description": "The Protestant village church in Mariendorf, a historic place of worship"
  },
  {
    "id": 5562,
    "name": "Straßenbahnbetriebshof Köpenick",
    "coordinates": { "lng": 13.581630000000018, "lat": 52.43939 },
    "image": "/images/venues/5562.jpg",
    "description": "The tram depot in Köpenick, a transport hub"
  },
  {
    "id": 5254,
    "name": "Frauengefängnis Lichterfelde",
    "coordinates": { "lng": 13.308628404877297, "lat": 52.4377791 },
    "image": "/images/venues/5254.jpg",
    "description": "The former women's prison in Lichterfelde with an interesting history"
  },
  {
    "id": 5551,
    "name": "Alte Dorfkirche Zehlendorf",
    "coordinates": { "lng": 13.25998306274414, "lat": 52.43547580578899 },
    "image": "/images/venues/5551.jpg",
    "description": "The old village church in Zehlendorf, a religious landmark"
  },
  {
    "id": 5371,
    "name": "Heimatmuseum Zehlendorf",
    "coordinates": { "lng": 13.2603049, "lat": 52.4354496 },
    "image": "/images/venues/5371.jpg",
    "description": "A local history museum in Zehlendorf that presents local history"
  },
  {
    "id": 5362,
    "name": "Dorfkirche im alten Fischerdorf Rahnsdorf",
    "coordinates": { "lng": 13.6929006, "lat": 52.4337552 },
    "image": "/images/venues/5362.jpg",
    "description": "The village church in the historic fishing village of Rahnsdorf"
  },
  {
    "id": 5428,
    "name": "Britzer Mühle",
    "coordinates": { "lng": 13.43355417251587, "lat": 52.4319305045854 },
    "image": "/images/venues/5428.jpg",
    "description": "The Britzer Mühle, a historical building and landmark"
  },
  {
    "id": 5554,
    "name": "Luftfahrttechnische Denkmale Adlershof und Flugfeld Johannisthal",
    "coordinates": { "lng": 13.531025648117067, "lat": 52.43183892476087 },
    "image": "/images/venues/5554.jpg",
    "description": "Historical aviation technology in Adlershof and at the Johannisthal airfield"
  },
  {
    "id": 5294,
    "name": "Studentendorf Schlachtensee",
    "coordinates": { "lng": 13.21560859680176, "lat": 52.42907835787384 },
    "image": "/images/venues/5294.jpg",
    "description": "A student village on Schlachtensee, a lively living concept"
  },
  {
    "id": 5403,
    "name": "K19 Studios Berlin im Studentendorf Schlachtensee",
    "coordinates": { "lng": 13.216041694672292, "lat": 52.4283312 },
    "image": "/images/venues/5403.jpg",
    "description": "The K19 Studios in the Schlachtensee student village, a creative place"
  },
  {
    "id": 5410,
    "name": "Landhaus und Landhausgarten Mittelhof",
    "coordinates": { "lng": 13.20232999999996, "lat": 52.42822 },
    "image": "/images/venues/5410.jpg",
    "description": "A country house and the associated garden in Mittelhof"
  },
  {
    "id": 5536,
    "name": "Waldkapelle Zum anklopfenden Christus in Hessenwinkel",
    "coordinates": { "lng": 13.7227178, "lat": 52.4261502 },
    "image": "/images/venues/5536.jpg",
    "description": "A forest chapel with the name \"To the knocking Christ\" in Hessenwinkel"
  },
  {
    "id": 5595,
    "name": "Garten Muthesius",
    "coordinates": { "lng": 13.2015443, "lat": 52.42399495 },
    "image": "/images/venues/5595.jpg",
    "description": "The Muthesius Garden, a green place in Berlin"
  },
  {
    "id": 5564,
    "name": "Spaziergang durch die Colonie Alsen",
    "coordinates": { "lng": 13.17938804626465, "lat": 52.42135177650845 },
    "image": "/images/venues/5564.jpg",
    "description": "A relaxed walk through the picturesque Alsen Colony"
  },
  {
    "id": 5505,
    "name": "Erinnerungsstätte Notaufnahmelager Marienfelde",
    "coordinates": { "lng": 13.368752002716064, "lat": 52.42057315510224 },
    "image": "/images/venues/5505.jpg",
    "description": "A place of remembrance of the emergency room in Marienfelde"
  },
  {
    "id": 5381,
    "name": "Ev. Friedenskirche Grünau",
    "coordinates": { "lng": 13.5781746, "lat": 52.4179649 },
    "image": "/images/venues/5381.jpg",
    "description": "The Protestant Peace Church in Grünau, a spiritual retreat"
  },
  {
    "id": 5347,
    "name": "Ausstellung in der alten Dorfschule Rudow",
    "coordinates": { "lng": 13.495476916280523, "lat": 52.4175854 },
    "image": "/images/venues/5347.jpg",
    "description": "An exhibition in the historic village school of Rudow"
  },
  {
    "id": 5288,
    "name": "Ensemble Bankiersvilla Jörger",
    "coordinates": { "lng": 13.151996825153272, "lat": 52.412630449999995 },
    "image": "/images/venues/5288.jpg",
    "description": "An impressive ensemble of historic bankers' villas in Jörger"
  },
  {
    "id": 5257,
    "name": "Dorfkirche Marienfelde",
    "coordinates": { "lng": 13.3678936958313, "lat": 52.41206631134829 },
    "image": "/images/venues/5257.jpg",
    "description": "The village church of Marienfelde, a religious gem"
  },
  {
    "id": 5467,
    "name": "Regattatribüne, Wassersportanlage Regattagelände Grünau",
    "coordinates": { "lng": 13.58747, "lat": 52.411772 },
    "image": "/images/venues/5467.jpg",
    "description": "The regatta grandstand and water sports facility at the regatta grounds in Grünau"
  },
  {
    "id": 5378,
    "name": "Gartenstadt Falkenberg (Tuschkastensiedlung)",
    "coordinates": { "lng": 13.568340539932251, "lat": 52.411470770827385 },
    "image": "/images/venues/5378.jpg",
    "description": "The Falkenberg Garden City, also known as the Tuschkastensiedlung, is an architectural gem"
  },
  {
    "id": 5478,
    "name": "Bootshaus des Akademischen Rudervereins zu Berlin",
    "coordinates": { "lng": 13.592155999999932, "lat": 52.41103936850826 },
    "image": "/images/venues/5478.jpg",
    "description": "The boathouse of the Academic Rowing Club in Berlin, a place for water sports enthusiasts"
  },
  {
    "id": 5571,
    "name": "Jagdschloss Glienicke",
    "coordinates": { "lng": 13.097333908081056, "lat": 52.41080977687762 },
    "image": "/images/venues/5571.jpg",
    "description": "The imposing Glienicke Hunting Lodge, a historic castle"
  },
  {
    "id": 5255,
    "name": "Gutshaus Falkenberg",
    "coordinates": { "lng": 13.571527004241943, "lat": 52.41002442465483 },
    "image": "/images/venues/5255.jpg",
    "description": "The Gutshaus Falkenberg, a manor house steeped in history"
  },
  {
    "id": 5541,
    "name": "Kath. Kirche St. Josef",
    "coordinates": { "lng": 13.573808, "lat": 52.3918309 },
    "image": "/images/venues/5541.jpg",
    "description": "The Catholic Church of St. Josef, a spiritual center"
  },
  {
    "id": 5534,
    "name": "STAHNSDORF: Künstlerhaus Carl Metzner",
    "coordinates": { "lng": 13.188814461914184, "lat": 52.39018555 },
    "image": "/images/venues/5534.jpg",
    "description": "Künstlerhaus Carl Metzner"
  },
  {
    "id": 5439,
    "name": "POTSDAM: Villa Ingenheim und Ensemble",
    "coordinates": { "lng": 13.0295233, "lat": 52.3893339 },
    "image": "/images/venues/5439.jpg",
    "description": "Villa Ingenheim and ensemble"
  },
  {
    "id": 5510,
    "name": "Alte Mälzerei Lichtenrade",
    "coordinates": { "lng": 13.397156995832272, "lat": 52.38789985 },
    "image": "/images/venues/5510.jpg",
    "description": "The old malt house in Lichtenrade, a historic industrial building"
  },
  {
    "id": 5279,
    "name": "RANGSDORF: Flugplatz Rangsdorf und Bücker-Werke",
    "coordinates": { "lng": 13.430855870246889, "lat": 52.28533645534926 },
    "image": "/images/venues/5279.jpg",
    "description": "Rangsdorf airfield and Bücker-Werke"
  }
]



export default rawVenues;