const CITIES = [
    {
        "City":"New York",
        "State":"New York",
        "Population":8405837,
        "lat":40.7127837,
        "lon":-74.0059413,
        "eligible":1,
        "name":"New York, NY"
    },
    {
        "City":"Los Angeles",
        "State":"California",
        "Population":3884307,
        "lat":34.0522342,
        "lon":-118.2436849,
        "eligible":1,
        "name":"Los Angeles, CA"
    },
    {
        "City":"Chicago",
        "State":"Illinois",
        "Population":2718782,
        "lat":41.8781136,
        "lon":-87.6297982,
        "eligible":1,
        "name":"Chicago, IL"
    },
    {
        "City":"Houston",
        "State":"Texas",
        "Population":2195914,
        "lat":29.7604267,
        "lon":-95.3698028,
        "eligible":1,
        "name":"Houston, TX"
    },
    {
        "City":"Philadelphia",
        "State":"Pennsylvania",
        "Population":1553165,
        "lat":39.9525839,
        "lon":-75.1652215,
        "eligible":1,
        "name":"Philadelphia, PA"
    },
    {
        "City":"Phoenix",
        "State":"Arizona",
        "Population":1513367,
        "lat":33.4483771,
        "lon":-112.0740373,
        "eligible":1,
        "name":"Phoenix, AZ"
    },
    {
        "City":"San Antonio",
        "State":"Texas",
        "Population":1409019,
        "lat":29.4241219,
        "lon":-98.4936282,
        "eligible":1,
        "name":"San Antonio, TX"
    },
    {
        "City":"San Diego",
        "State":"California",
        "Population":1355896,
        "lat":32.715738,
        "lon":-117.1610838,
        "eligible":1,
        "name":"San Diego, CA"
    },
    {
        "City":"Dallas",
        "State":"Texas",
        "Population":1257676,
        "lat":32.7766642,
        "lon":-96.7969879,
        "eligible":1,
        "name":"Dallas, TX"
    },
    {
        "City":"San Jose",
        "State":"California",
        "Population":998537,
        "lat":37.3382082,
        "lon":-121.8863286,
        "eligible":1,
        "name":"San Jose, CA"
    },
    {
        "City":"Austin",
        "State":"Texas",
        "Population":885400,
        "lat":30.267153,
        "lon":-97.7430608,
        "eligible":1,
        "name":"Austin, TX"
    },
    {
        "City":"Indianapolis",
        "State":"Indiana",
        "Population":843393,
        "lat":39.768403,
        "lon":-86.158068,
        "eligible":1,
        "name":"Indianapolis, IN"
    },
    {
        "City":"Jacksonville",
        "State":"Florida",
        "Population":842583,
        "lat":30.3321838,
        "lon":-81.655651,
        "eligible":1,
        "name":"Jacksonville, FL"
    },
    {
        "City":"San Francisco",
        "State":"California",
        "Population":837442,
        "lat":37.7749295,
        "lon":-122.4194155,
        "eligible":1,
        "name":"San Francisco, CA"
    },
    {
        "City":"Columbus",
        "State":"Ohio",
        "Population":822553,
        "lat":39.9611755,
        "lon":-82.9987942,
        "eligible":1,
        "name":"Columbus, OH"
    },
    {
        "City":"Charlotte",
        "State":"North Carolina",
        "Population":792862,
        "lat":35.2270869,
        "lon":-80.8431267,
        "eligible":1,
        "name":"Charlotte, NC"
    },
    {
        "City":"Fort Worth",
        "State":"Texas",
        "Population":792727,
        "lat":32.7554883,
        "lon":-97.3307658,
        "eligible":1,
        "name":"Fort Worth, TX"
    },
    {
        "City":"Detroit",
        "State":"Michigan",
        "Population":688701,
        "lat":42.331427,
        "lon":-83.0457538,
        "eligible":1,
        "name":"Detroit, MI"
    },
    {
        "City":"El Paso",
        "State":"Texas",
        "Population":674433,
        "lat":31.7775757,
        "lon":-106.4424559,
        "eligible":1,
        "name":"El Paso, TX"
    },
    {
        "City":"Memphis",
        "State":"Tennessee",
        "Population":653450,
        "lat":35.1495343,
        "lon":-90.0489801,
        "eligible":1,
        "name":"Memphis, TN"
    },
    {
        "City":"Seattle",
        "State":"Washington",
        "Population":652405,
        "lat":47.6062095,
        "lon":-122.3320708,
        "eligible":1,
        "name":"Seattle, WA"
    },
    {
        "City":"Denver",
        "State":"Colorado",
        "Population":649495,
        "lat":39.7392358,
        "lon":-104.990251,
        "eligible":1,
        "name":"Denver, CO"
    },
    {
        "City":"Washington",
        "State":"District of Columbia",
        "Population":646449,
        "lat":38.9071923,
        "lon":-77.0368707,
        "eligible":1,
        "name":"Washington, DC"
    },
    {
        "City":"Boston",
        "State":"Massachusetts",
        "Population":645966,
        "lat":42.3600825,
        "lon":-71.0588801,
        "eligible":1,
        "name":"Boston, MA"
    },
    {
        "City":"Nashville",
        "State":"Tennessee",
        "Population":634464,
        "lat":36.1626638,
        "lon":-86.7816016,
        "eligible":1,
        "name":"Nashville, TN"
    },
    {
        "City":"Baltimore",
        "State":"Maryland",
        "Population":622104,
        "lat":39.2903848,
        "lon":-76.6121893,
        "eligible":1,
        "name":"Baltimore, MD"
    },
    {
        "City":"Oklahoma City",
        "State":"Oklahoma",
        "Population":610613,
        "lat":35.4675602,
        "lon":-97.5164276,
        "eligible":1,
        "name":"Oklahoma City, OK"
    },
    {
        "City":"Louisville",
        "State":"Kentucky",
        "Population":609893,
        "lat":38.2526647,
        "lon":-85.7584557,
        "eligible":1,
        "name":"Louisville, KY"
    },
    {
        "City":"Portland",
        "State":"Oregon",
        "Population":609456,
        "lat":45.5230622,
        "lon":-122.6764816,
        "eligible":1,
        "name":"Portland, OR"
    },
    {
        "City":"Las Vegas",
        "State":"Nevada",
        "Population":603488,
        "lat":36.1699412,
        "lon":-115.1398296,
        "eligible":1,
        "name":"Las Vegas, NV"
    },
    {
        "City":"Milwaukee",
        "State":"Wisconsin",
        "Population":599164,
        "lat":43.0389025,
        "lon":-87.9064736,
        "eligible":1,
        "name":"Milwaukee, WI"
    },
    {
        "City":"Albuquerque",
        "State":"New Mexico",
        "Population":556495,
        "lat":35.0853336,
        "lon":-106.6055534,
        "eligible":1,
        "name":"Albuquerque, NM"
    },
    {
        "City":"Tucson",
        "State":"Arizona",
        "Population":526116,
        "lat":32.2217429,
        "lon":-110.926479,
        "eligible":1,
        "name":"Tucson, AZ"
    },
    {
        "City":"Fresno",
        "State":"California",
        "Population":509924,
        "lat":36.7468422,
        "lon":-119.7725868,
        "eligible":1,
        "name":"Fresno, CA"
    },
    {
        "City":"Sacramento",
        "State":"California",
        "Population":479686,
        "lat":38.5815719,
        "lon":-121.4943996,
        "eligible":1,
        "name":"Sacramento, CA"
    },
    {
        "City":"Long Beach",
        "State":"California",
        "Population":469428,
        "lat":33.7700504,
        "lon":-118.1937395,
        "eligible":1,
        "name":"Long Beach, CA"
    },
    {
        "City":"Kansas City",
        "State":"Missouri",
        "Population":467007,
        "lat":39.0997265,
        "lon":-94.5785667,
        "eligible":1,
        "name":"Kansas City, MO"
    },
    {
        "City":"Mesa",
        "State":"Arizona",
        "Population":457587,
        "lat":33.4151843,
        "lon":-111.8314724,
        "eligible":1,
        "name":"Mesa, AZ"
    },
    {
        "City":"Virginia Beach",
        "State":"Virginia",
        "Population":448479,
        "lat":36.8529263,
        "lon":-75.977985,
        "eligible":1,
        "name":"Virginia Beach, VA"
    },
    {
        "City":"Atlanta",
        "State":"Georgia",
        "Population":447841,
        "lat":33.7489954,
        "lon":-84.3879824,
        "eligible":1,
        "name":"Atlanta, GA"
    },
    {
        "City":"Colorado Springs",
        "State":"Colorado",
        "Population":439886,
        "lat":38.8338816,
        "lon":-104.8213634,
        "eligible":1,
        "name":"Colorado Springs, CO"
    },
    {
        "City":"Omaha",
        "State":"Nebraska",
        "Population":434353,
        "lat":41.2523634,
        "lon":-95.9979883,
        "eligible":1,
        "name":"Omaha, NE"
    },
    {
        "City":"Raleigh",
        "State":"North Carolina",
        "Population":431746,
        "lat":35.7795897,
        "lon":-78.6381787,
        "eligible":1,
        "name":"Raleigh, NC"
    },
    {
        "City":"Miami",
        "State":"Florida",
        "Population":417650,
        "lat":25.7616798,
        "lon":-80.1917902,
        "eligible":1,
        "name":"Miami, FL"
    },
    {
        "City":"Oakland",
        "State":"California",
        "Population":406253,
        "lat":37.8043637,
        "lon":-122.2711137,
        "eligible":1,
        "name":"Oakland, CA"
    },
    {
        "City":"Minneapolis",
        "State":"Minnesota",
        "Population":400070,
        "lat":44.977753,
        "lon":-93.2650108,
        "eligible":1,
        "name":"Minneapolis, MN"
    },
    {
        "City":"Tulsa",
        "State":"Oklahoma",
        "Population":398121,
        "lat":36.1539816,
        "lon":-95.992775,
        "eligible":1,
        "name":"Tulsa, OK"
    },
    {
        "City":"Cleveland",
        "State":"Ohio",
        "Population":390113,
        "lat":41.49932,
        "lon":-81.6943605,
        "eligible":1,
        "name":"Cleveland, OH"
    },
    {
        "City":"Wichita",
        "State":"Kansas",
        "Population":386552,
        "lat":37.688889,
        "lon":-97.336111,
        "eligible":1,
        "name":"Wichita, KS"
    },
    {
        "City":"Arlington",
        "State":"Texas",
        "Population":379577,
        "lat":32.735687,
        "lon":-97.1080656,
        "eligible":1,
        "name":"Arlington, TX"
    },
    {
        "City":"New Orleans",
        "State":"Louisiana",
        "Population":378715,
        "lat":29.9510658,
        "lon":-90.0715323,
        "eligible":1,
        "name":"New Orleans, LA"
    },
    {
        "City":"Bakersfield",
        "State":"California",
        "Population":363630,
        "lat":35.3732921,
        "lon":-119.0187125,
        "eligible":1,
        "name":"Bakersfield, CA"
    },
    {
        "City":"Tampa",
        "State":"Florida",
        "Population":352957,
        "lat":27.950575,
        "lon":-82.4571776,
        "eligible":1,
        "name":"Tampa, FL"
    },
    {
        "City":"Honolulu",
        "State":"Hawaii",
        "Population":347884,
        "lat":21.3069444,
        "lon":-157.8583333,
        "eligible":1,
        "name":"Honolulu, HI"
    },
    {
        "City":"Aurora",
        "State":"Colorado",
        "Population":345803,
        "lat":39.7294319,
        "lon":-104.8319195,
        "eligible":1,
        "name":"Aurora, CO"
    },
    {
        "City":"Anaheim",
        "State":"California",
        "Population":345012,
        "lat":33.8352932,
        "lon":-117.9145036,
        "eligible":1,
        "name":"Anaheim, CA"
    },
    {
        "City":"Santa Ana",
        "State":"California",
        "Population":334227,
        "lat":33.7455731,
        "lon":-117.8678338,
        "eligible":1,
        "name":"Santa Ana, CA"
    },
    {
        "City":"St. Louis",
        "State":"Missouri",
        "Population":318416,
        "lat":38.6270025,
        "lon":-90.1994042,
        "eligible":1,
        "name":"St. Louis, MO"
    },
    {
        "City":"Riverside",
        "State":"California",
        "Population":316619,
        "lat":33.9533487,
        "lon":-117.3961564,
        "eligible":1,
        "name":"Riverside, CA"
    },
    {
        "City":"Corpus Christi",
        "State":"Texas",
        "Population":316381,
        "lat":27.8005828,
        "lon":-97.396381,
        "eligible":1,
        "name":"Corpus Christi, TX"
    },
    {
        "City":"Lexington-Fayette",
        "State":"Kentucky",
        "Population":308428,
        "lat":38.0405837,
        "lon":-84.5037164,
        "eligible":1,
        "name":"Lexington-Fayette, KY"
    },
    {
        "City":"Pittsburgh",
        "State":"Pennsylvania",
        "Population":305841,
        "lat":40.4406248,
        "lon":-79.9958864,
        "eligible":1,
        "name":"Pittsburgh, PA"
    },
    {
        "City":"Anchorage",
        "State":"Alaska",
        "Population":300950,
        "lat":61.2180556,
        "lon":-149.9002778,
        "eligible":1,
        "name":"Anchorage, AK"
    },
    {
        "City":"Stockton",
        "State":"California",
        "Population":298118,
        "lat":37.9577016,
        "lon":-121.2907796,
        "eligible":1,
        "name":"Stockton, CA"
    },
    {
        "City":"Cincinnati",
        "State":"Ohio",
        "Population":297517,
        "lat":39.1031182,
        "lon":-84.5120196,
        "eligible":1,
        "name":"Cincinnati, OH"
    },
    {
        "City":"St. Paul",
        "State":"Minnesota",
        "Population":294873,
        "lat":44.9537029,
        "lon":-93.0899578,
        "eligible":1,
        "name":"St. Paul, MN"
    },
    {
        "City":"Toledo",
        "State":"Ohio",
        "Population":282313,
        "lat":41.6639383,
        "lon":-83.555212,
        "eligible":1,
        "name":"Toledo, OH"
    },
    {
        "City":"Greensboro",
        "State":"North Carolina",
        "Population":279639,
        "lat":36.0726354,
        "lon":-79.7919754,
        "eligible":1,
        "name":"Greensboro, NC"
    },
    {
        "City":"Newark",
        "State":"New Jersey",
        "Population":278427,
        "lat":40.735657,
        "lon":-74.1723667,
        "eligible":1,
        "name":"Newark, NJ"
    },
    {
        "City":"Plano",
        "State":"Texas",
        "Population":274409,
        "lat":33.0198431,
        "lon":-96.6988856,
        "eligible":1,
        "name":"Plano, TX"
    },
    {
        "City":"Henderson",
        "State":"Nevada",
        "Population":270811,
        "lat":36.0395247,
        "lon":-114.9817213,
        "eligible":1,
        "name":"Henderson, NV"
    },
    {
        "City":"Lincoln",
        "State":"Nebraska",
        "Population":268738,
        "lat":40.8257625,
        "lon":-96.6851982,
        "eligible":1,
        "name":"Lincoln, NE"
    },
    {
        "City":"Buffalo",
        "State":"New York",
        "Population":258959,
        "lat":42.8864468,
        "lon":-78.8783689,
        "eligible":1,
        "name":"Buffalo, NY"
    },
    {
        "City":"Jersey City",
        "State":"New Jersey",
        "Population":257342,
        "lat":40.7281575,
        "lon":-74.0776417,
        "eligible":1,
        "name":"Jersey City, NJ"
    },
    {
        "City":"Chula Vista",
        "State":"California",
        "Population":256780,
        "lat":32.6400541,
        "lon":-117.0841955,
        "eligible":1,
        "name":"Chula Vista, CA"
    },
    {
        "City":"Fort Wayne",
        "State":"Indiana",
        "Population":256496,
        "lat":41.079273,
        "lon":-85.1393513,
        "eligible":1,
        "name":"Fort Wayne, IN"
    },
    {
        "City":"Orlando",
        "State":"Florida",
        "Population":255483,
        "lat":28.5383355,
        "lon":-81.3792365,
        "eligible":1,
        "name":"Orlando, FL"
    },
    {
        "City":"St. Petersburg",
        "State":"Florida",
        "Population":249688,
        "lat":27.773056,
        "lon":-82.64,
        "eligible":1,
        "name":"St. Petersburg, FL"
    },
    {
        "City":"Chandler",
        "State":"Arizona",
        "Population":249146,
        "lat":33.3061605,
        "lon":-111.8412502,
        "eligible":1,
        "name":"Chandler, AZ"
    },
    {
        "City":"Laredo",
        "State":"Texas",
        "Population":248142,
        "lat":27.5305671,
        "lon":-99.4803241,
        "eligible":1,
        "name":"Laredo, TX"
    },
    {
        "City":"Norfolk",
        "State":"Virginia",
        "Population":246139,
        "lat":36.8507689,
        "lon":-76.2858726,
        "eligible":1,
        "name":"Norfolk, VA"
    },
    {
        "City":"Durham",
        "State":"North Carolina",
        "Population":245475,
        "lat":35.9940329,
        "lon":-78.898619,
        "eligible":1,
        "name":"Durham, NC"
    },
    {
        "City":"Madison",
        "State":"Wisconsin",
        "Population":243344,
        "lat":43.0730517,
        "lon":-89.4012302,
        "eligible":1,
        "name":"Madison, WI"
    },
    {
        "City":"Lubbock",
        "State":"Texas",
        "Population":239538,
        "lat":33.5778631,
        "lon":-101.8551665,
        "eligible":1,
        "name":"Lubbock, TX"
    },
    {
        "City":"Irvine",
        "State":"California",
        "Population":236716,
        "lat":33.6839473,
        "lon":-117.7946942,
        "eligible":1,
        "name":"Irvine, CA"
    },
    {
        "City":"Winston-Salem",
        "State":"North Carolina",
        "Population":236441,
        "lat":36.0998596,
        "lon":-80.244216,
        "eligible":1,
        "name":"Winston-Salem, NC"
    },
    {
        "City":"Glendale",
        "State":"Arizona",
        "Population":234632,
        "lat":33.5386523,
        "lon":-112.1859866,
        "eligible":1,
        "name":"Glendale, AZ"
    },
    {
        "City":"Garland",
        "State":"Texas",
        "Population":234566,
        "lat":32.912624,
        "lon":-96.6388833,
        "eligible":1,
        "name":"Garland, TX"
    },
    {
        "City":"Hialeah",
        "State":"Florida",
        "Population":233394,
        "lat":25.8575963,
        "lon":-80.2781057,
        "eligible":1,
        "name":"Hialeah, FL"
    },
    {
        "City":"Reno",
        "State":"Nevada",
        "Population":233294,
        "lat":39.5296329,
        "lon":-119.8138027,
        "eligible":1,
        "name":"Reno, NV"
    },
    {
        "City":"Chesapeake",
        "State":"Virginia",
        "Population":230571,
        "lat":36.7682088,
        "lon":-76.2874927,
        "eligible":1,
        "name":"Chesapeake, VA"
    },
    {
        "City":"Gilbert",
        "State":"Arizona",
        "Population":229972,
        "lat":33.3528264,
        "lon":-111.789027,
        "eligible":1,
        "name":"Gilbert, AZ"
    },
    {
        "City":"Baton Rouge",
        "State":"Louisiana",
        "Population":229426,
        "lat":30.4582829,
        "lon":-91.1403196,
        "eligible":1,
        "name":"Baton Rouge, LA"
    },
    {
        "City":"Irving",
        "State":"Texas",
        "Population":228653,
        "lat":32.8140177,
        "lon":-96.9488945,
        "eligible":1,
        "name":"Irving, TX"
    },
    {
        "City":"Scottsdale",
        "State":"Arizona",
        "Population":226918,
        "lat":33.4941704,
        "lon":-111.9260519,
        "eligible":1,
        "name":"Scottsdale, AZ"
    },
    {
        "City":"North Las Vegas",
        "State":"Nevada",
        "Population":226877,
        "lat":36.1988592,
        "lon":-115.1175013,
        "eligible":1,
        "name":"North Las Vegas, NV"
    },
    {
        "City":"Fremont",
        "State":"California",
        "Population":224922,
        "lat":37.5482697,
        "lon":-121.9885719,
        "eligible":1,
        "name":"Fremont, CA"
    },
    {
        "City":"Boise",
        "State":"Idaho",
        "Population":214237,
        "lat":43.6187102,
        "lon":-116.2146068,
        "eligible":1,
        "name":"Boise, ID"
    },
    {
        "City":"Richmond",
        "State":"Virginia",
        "Population":214114,
        "lat":37.5407246,
        "lon":-77.4360481,
        "eligible":1,
        "name":"Richmond, VA"
    },
    {
        "City":"San Bernardino",
        "State":"California",
        "Population":213708,
        "lat":34.1083449,
        "lon":-117.2897652,
        "eligible":1,
        "name":"San Bernardino, CA"
    },
    {
        "City":"Birmingham",
        "State":"Alabama",
        "Population":212113,
        "lat":33.5206608,
        "lon":-86.80249,
        "eligible":1,
        "name":"Birmingham, AL"
    },
    {
        "City":"Spokane",
        "State":"Washington",
        "Population":210721,
        "lat":47.6587802,
        "lon":-117.4260466,
        "eligible":1,
        "name":"Spokane, WA"
    },
    {
        "City":"Rochester",
        "State":"New York",
        "Population":210358,
        "lat":43.16103,
        "lon":-77.6109219,
        "eligible":1,
        "name":"Rochester, NY"
    },
    {
        "City":"Des Moines",
        "State":"Iowa",
        "Population":207510,
        "lat":41.6005448,
        "lon":-93.6091064,
        "eligible":1,
        "name":"Des Moines, IA"
    },
    {
        "City":"Modesto",
        "State":"California",
        "Population":204933,
        "lat":37.6390972,
        "lon":-120.9968782,
        "eligible":0,
        "name":"Modesto, CA"
    },
    {
        "City":"Fayetteville",
        "State":"North Carolina",
        "Population":204408,
        "lat":35.0526641,
        "lon":-78.8783585,
        "eligible":0,
        "name":"Fayetteville, NC"
    },
    {
        "City":"Tacoma",
        "State":"Washington",
        "Population":203446,
        "lat":47.2528768,
        "lon":-122.4442906,
        "eligible":0,
        "name":"Tacoma, WA"
    },
    {
        "City":"Oxnard",
        "State":"California",
        "Population":203007,
        "lat":34.1975048,
        "lon":-119.1770516,
        "eligible":0,
        "name":"Oxnard, CA"
    },
    {
        "City":"Fontana",
        "State":"California",
        "Population":203003,
        "lat":34.0922335,
        "lon":-117.435048,
        "eligible":0,
        "name":"Fontana, CA"
    },
    {
        "City":"Columbus",
        "State":"Georgia",
        "Population":202824,
        "lat":32.4609764,
        "lon":-84.9877094,
        "eligible":0,
        "name":"Columbus, GA"
    },
    {
        "City":"Montgomery",
        "State":"Alabama",
        "Population":201332,
        "lat":32.3668052,
        "lon":-86.2999689,
        "eligible":1,
        "name":"Montgomery, AL"
    },
    {
        "City":"Moreno Valley",
        "State":"California",
        "Population":201175,
        "lat":33.9424658,
        "lon":-117.2296717,
        "eligible":0,
        "name":"Moreno Valley, CA"
    },
    {
        "City":"Shreveport",
        "State":"Louisiana",
        "Population":200327,
        "lat":32.5251516,
        "lon":-93.7501789,
        "eligible":0,
        "name":"Shreveport, LA"
    },
    {
        "City":"Aurora",
        "State":"Illinois",
        "Population":199963,
        "lat":41.7605849,
        "lon":-88.3200715,
        "eligible":0,
        "name":"Aurora, IL"
    },
    {
        "City":"Yonkers",
        "State":"New York",
        "Population":199766,
        "lat":40.9312099,
        "lon":-73.8987469,
        "eligible":0,
        "name":"Yonkers, NY"
    },
    {
        "City":"Akron",
        "State":"Ohio",
        "Population":198100,
        "lat":41.0814447,
        "lon":-81.5190053,
        "eligible":1,
        "name":"Akron, OH"
    },
    {
        "City":"Huntington Beach",
        "State":"California",
        "Population":197575,
        "lat":33.660297,
        "lon":-117.9992265,
        "eligible":0,
        "name":"Huntington Beach, CA"
    },
    {
        "City":"Little Rock",
        "State":"Arkansas",
        "Population":197357,
        "lat":34.7464809,
        "lon":-92.2895948,
        "eligible":1,
        "name":"Little Rock, AR"
    },
    {
        "City":"Augusta",
        "State":"Georgia",
        "Population":197350,
        "lat":33.4734978,
        "lon":-82.0105148,
        "eligible":1,
        "name":"Augusta, GA"
    },
    {
        "City":"Amarillo",
        "State":"Texas",
        "Population":196429,
        "lat":35.2219971,
        "lon":-101.8312969,
        "eligible":0,
        "name":"Amarillo, TX"
    },
    {
        "City":"Glendale",
        "State":"California",
        "Population":196021,
        "lat":34.1425078,
        "lon":-118.255075,
        "eligible":0,
        "name":"Glendale, CA"
    },
    {
        "City":"Mobile",
        "State":"Alabama",
        "Population":194899,
        "lat":30.6953657,
        "lon":-88.0398912,
        "eligible":0,
        "name":"Mobile, AL"
    },
    {
        "City":"Grand Rapids",
        "State":"Michigan",
        "Population":192294,
        "lat":42.9633599,
        "lon":-85.6680863,
        "eligible":1,
        "name":"Grand Rapids, MI"
    },
    {
        "City":"Salt Lake City",
        "State":"Utah",
        "Population":191180,
        "lat":40.7607793,
        "lon":-111.8910474,
        "eligible":1,
        "name":"Salt Lake City, UT"
    },
    {
        "City":"Tallahassee",
        "State":"Florida",
        "Population":186411,
        "lat":30.4382559,
        "lon":-84.2807329,
        "eligible":1,
        "name":"Tallahassee, FL"
    },
    {
        "City":"Huntsville",
        "State":"Alabama",
        "Population":186254,
        "lat":34.7303688,
        "lon":-86.5861037,
        "eligible":1,
        "name":"Huntsville, AL"
    },
    {
        "City":"Grand Prairie",
        "State":"Texas",
        "Population":183372,
        "lat":32.7459645,
        "lon":-96.9977846,
        "eligible":0,
        "name":"Grand Prairie, TX"
    },
    {
        "City":"Knoxville",
        "State":"Tennessee",
        "Population":183270,
        "lat":35.9606384,
        "lon":-83.9207392,
        "eligible":1,
        "name":"Knoxville, TN"
    },
    {
        "City":"Worcester",
        "State":"Massachusetts",
        "Population":182544,
        "lat":42.2625932,
        "lon":-71.8022934,
        "eligible":1,
        "name":"Worcester, MA"
    },
    {
        "City":"Newport News",
        "State":"Virginia",
        "Population":182020,
        "lat":37.0870821,
        "lon":-76.4730122,
        "eligible":0,
        "name":"Newport News, VA"
    },
    {
        "City":"Brownsville",
        "State":"Texas",
        "Population":181860,
        "lat":25.9017472,
        "lon":-97.4974838,
        "eligible":0,
        "name":"Brownsville, TX"
    },
    {
        "City":"Overland Park",
        "State":"Kansas",
        "Population":181260,
        "lat":38.9822282,
        "lon":-94.6707917,
        "eligible":0,
        "name":"Overland Park, KS"
    },
    {
        "City":"Santa Clarita",
        "State":"California",
        "Population":179590,
        "lat":34.3916641,
        "lon":-118.542586,
        "eligible":0,
        "name":"Santa Clarita, CA"
    },
    {
        "City":"Providence",
        "State":"Rhode Island",
        "Population":177994,
        "lat":41.8239891,
        "lon":-71.4128343,
        "eligible":1,
        "name":"Providence, RI"
    },
    {
        "City":"Garden Grove",
        "State":"California",
        "Population":175140,
        "lat":33.7739053,
        "lon":-117.9414477,
        "eligible":0,
        "name":"Garden Grove, CA"
    },
    {
        "City":"Chattanooga",
        "State":"Tennessee",
        "Population":173366,
        "lat":35.0456297,
        "lon":-85.3096801,
        "eligible":1,
        "name":"Chattanooga, TN"
    },
    {
        "City":"Oceanside",
        "State":"California",
        "Population":172794,
        "lat":33.1958696,
        "lon":-117.3794834,
        "eligible":0,
        "name":"Oceanside, CA"
    },
    {
        "City":"Jackson",
        "State":"Mississippi",
        "Population":172638,
        "lat":32.2987573,
        "lon":-90.1848103,
        "eligible":1,
        "name":"Jackson, MS"
    },
    {
        "City":"Fort Lauderdale",
        "State":"Florida",
        "Population":172389,
        "lat":26.1224386,
        "lon":-80.1373174,
        "eligible":0,
        "name":"Fort Lauderdale, FL"
    },
    {
        "City":"Santa Rosa",
        "State":"California",
        "Population":171990,
        "lat":38.440429,
        "lon":-122.7140548,
        "eligible":0,
        "name":"Santa Rosa, CA"
    },
    {
        "City":"Rancho Cucamonga",
        "State":"California",
        "Population":171386,
        "lat":34.1063989,
        "lon":-117.5931084,
        "eligible":0,
        "name":"Rancho Cucamonga, CA"
    },
    {
        "City":"Port St. Lucie",
        "State":"Florida",
        "Population":171016,
        "lat":27.2730492,
        "lon":-80.3582261,
        "eligible":0,
        "name":"Port St. Lucie, FL"
    },
    {
        "City":"Tempe",
        "State":"Arizona",
        "Population":168228,
        "lat":33.4255104,
        "lon":-111.9400054,
        "eligible":0,
        "name":"Tempe, AZ"
    },
    {
        "City":"Ontario",
        "State":"California",
        "Population":167500,
        "lat":34.0633443,
        "lon":-117.6508876,
        "eligible":0,
        "name":"Ontario, CA"
    },
    {
        "City":"Vancouver",
        "State":"Washington",
        "Population":167405,
        "lat":45.6387281,
        "lon":-122.6614861,
        "eligible":0,
        "name":"Vancouver, WA"
    },
    {
        "City":"Cape Coral",
        "State":"Florida",
        "Population":165831,
        "lat":26.5628537,
        "lon":-81.9495331,
        "eligible":0,
        "name":"Cape Coral, FL"
    },
    {
        "City":"Sioux Falls",
        "State":"South Dakota",
        "Population":164676,
        "lat":43.5445959,
        "lon":-96.7311034,
        "eligible":1,
        "name":"Sioux Falls, SD"
    },
    {
        "City":"Springfield",
        "State":"Missouri",
        "Population":164122,
        "lat":37.2089572,
        "lon":-93.2922989,
        "eligible":0,
        "name":"Springfield, MO"
    },
    {
        "City":"Peoria",
        "State":"Arizona",
        "Population":162592,
        "lat":33.5805955,
        "lon":-112.2373779,
        "eligible":0,
        "name":"Peoria, AZ"
    },
    {
        "City":"Pembroke Pines",
        "State":"Florida",
        "Population":162329,
        "lat":26.007765,
        "lon":-80.2962555,
        "eligible":0,
        "name":"Pembroke Pines, FL"
    },
    {
        "City":"Elk Grove",
        "State":"California",
        "Population":161007,
        "lat":38.4087993,
        "lon":-121.3716178,
        "eligible":0,
        "name":"Elk Grove, CA"
    },
    {
        "City":"Salem",
        "State":"Oregon",
        "Population":160614,
        "lat":44.9428975,
        "lon":-123.0350963,
        "eligible":0,
        "name":"Salem, OR"
    },
    {
        "City":"Lancaster",
        "State":"California",
        "Population":159523,
        "lat":34.6867846,
        "lon":-118.1541632,
        "eligible":0,
        "name":"Lancaster, CA"
    },
    {
        "City":"Corona",
        "State":"California",
        "Population":159503,
        "lat":33.8752935,
        "lon":-117.5664384,
        "eligible":0,
        "name":"Corona, CA"
    },
    {
        "City":"Eugene",
        "State":"Oregon",
        "Population":159190,
        "lat":44.0520691,
        "lon":-123.0867536,
        "eligible":0,
        "name":"Eugene, OR"
    },
    {
        "City":"Palmdale",
        "State":"California",
        "Population":157161,
        "lat":34.5794343,
        "lon":-118.1164613,
        "eligible":0,
        "name":"Palmdale, CA"
    },
    {
        "City":"Salinas",
        "State":"California",
        "Population":155662,
        "lat":36.6777372,
        "lon":-121.6555013,
        "eligible":0,
        "name":"Salinas, CA"
    },
    {
        "City":"Springfield",
        "State":"Massachusetts",
        "Population":153703,
        "lat":42.1014831,
        "lon":-72.589811,
        "eligible":1,
        "name":"Springfield, MA"
    },
    {
        "City":"Pasadena",
        "State":"Texas",
        "Population":152735,
        "lat":29.6910625,
        "lon":-95.2091006,
        "eligible":0,
        "name":"Pasadena, TX"
    },
    {
        "City":"Fort Collins",
        "State":"Colorado",
        "Population":152061,
        "lat":40.5852602,
        "lon":-105.084423,
        "eligible":0,
        "name":"Fort Collins, CO"
    },
    {
        "City":"Hayward",
        "State":"California",
        "Population":151574,
        "lat":37.6688205,
        "lon":-122.0807964,
        "eligible":0,
        "name":"Hayward, CA"
    },
    {
        "City":"Pomona",
        "State":"California",
        "Population":151348,
        "lat":34.055103,
        "lon":-117.7499909,
        "eligible":0,
        "name":"Pomona, CA"
    },
    {
        "City":"Cary",
        "State":"North Carolina",
        "Population":151088,
        "lat":35.79154,
        "lon":-78.7811169,
        "eligible":0,
        "name":"Cary, NC"
    },
    {
        "City":"Rockford",
        "State":"Illinois",
        "Population":150251,
        "lat":42.2711311,
        "lon":-89.0939952,
        "eligible":0,
        "name":"Rockford, IL"
    },
    {
        "City":"Alexandria",
        "State":"Virginia",
        "Population":148892,
        "lat":38.8048355,
        "lon":-77.0469214,
        "eligible":0,
        "name":"Alexandria, VA"
    },
    {
        "City":"Escondido",
        "State":"California",
        "Population":148738,
        "lat":33.1192068,
        "lon":-117.086421,
        "eligible":0,
        "name":"Escondido, CA"
    },
    {
        "City":"McKinney",
        "State":"Texas",
        "Population":148559,
        "lat":33.1972465,
        "lon":-96.6397822,
        "eligible":0,
        "name":"McKinney, TX"
    },
    {
        "City":"Kansas City",
        "State":"Kansas",
        "Population":148483,
        "lat":39.114053,
        "lon":-94.6274636,
        "eligible":0,
        "name":"Kansas City, KS"
    },
    {
        "City":"Joliet",
        "State":"Illinois",
        "Population":147806,
        "lat":41.525031,
        "lon":-88.0817251,
        "eligible":0,
        "name":"Joliet, IL"
    },
    {
        "City":"Sunnyvale",
        "State":"California",
        "Population":147559,
        "lat":37.36883,
        "lon":-122.0363496,
        "eligible":0,
        "name":"Sunnyvale, CA"
    },
    {
        "City":"Torrance",
        "State":"California",
        "Population":147478,
        "lat":33.8358492,
        "lon":-118.3406288,
        "eligible":0,
        "name":"Torrance, CA"
    },
    {
        "City":"Bridgeport",
        "State":"Connecticut",
        "Population":147216,
        "lat":41.1865478,
        "lon":-73.1951767,
        "eligible":1,
        "name":"Bridgeport, CT"
    },
    {
        "City":"Lakewood",
        "State":"Colorado",
        "Population":147214,
        "lat":39.7047095,
        "lon":-105.0813734,
        "eligible":0,
        "name":"Lakewood, CO"
    },
    {
        "City":"Hollywood",
        "State":"Florida",
        "Population":146526,
        "lat":26.0112014,
        "lon":-80.1494901,
        "eligible":0,
        "name":"Hollywood, FL"
    },
    {
        "City":"Paterson",
        "State":"New Jersey",
        "Population":145948,
        "lat":40.9167654,
        "lon":-74.171811,
        "eligible":0,
        "name":"Paterson, NJ"
    },
    {
        "City":"Naperville",
        "State":"Illinois",
        "Population":144864,
        "lat":41.7508391,
        "lon":-88.1535352,
        "eligible":0,
        "name":"Naperville, IL"
    },
    {
        "City":"Syracuse",
        "State":"New York",
        "Population":144669,
        "lat":43.0481221,
        "lon":-76.1474244,
        "eligible":1,
        "name":"Syracuse, NY"
    },
    {
        "City":"Mesquite",
        "State":"Texas",
        "Population":143484,
        "lat":32.7667955,
        "lon":-96.5991593,
        "eligible":0,
        "name":"Mesquite, TX"
    },
    {
        "City":"Dayton",
        "State":"Ohio",
        "Population":143355,
        "lat":39.7589478,
        "lon":-84.1916069,
        "eligible":1,
        "name":"Dayton, OH"
    },
    {
        "City":"Savannah",
        "State":"Georgia",
        "Population":142772,
        "lat":32.0835407,
        "lon":-81.0998342,
        "eligible":0,
        "name":"Savannah, GA"
    },
    {
        "City":"Clarksville",
        "State":"Tennessee",
        "Population":142357,
        "lat":36.5297706,
        "lon":-87.3594528,
        "eligible":0,
        "name":"Clarksville, TN"
    },
    {
        "City":"Orange",
        "State":"California",
        "Population":139969,
        "lat":33.7877944,
        "lon":-117.8531119,
        "eligible":0,
        "name":"Orange, CA"
    },
    {
        "City":"Pasadena",
        "State":"California",
        "Population":139731,
        "lat":34.1477849,
        "lon":-118.1445155,
        "eligible":0,
        "name":"Pasadena, CA"
    },
    {
        "City":"Fullerton",
        "State":"California",
        "Population":138981,
        "lat":33.8703596,
        "lon":-117.9242966,
        "eligible":0,
        "name":"Fullerton, CA"
    },
    {
        "City":"Killeen",
        "State":"Texas",
        "Population":137147,
        "lat":31.1171194,
        "lon":-97.7277959,
        "eligible":0,
        "name":"Killeen, TX"
    },
    {
        "City":"Frisco",
        "State":"Texas",
        "Population":136791,
        "lat":33.1506744,
        "lon":-96.8236116,
        "eligible":0,
        "name":"Frisco, TX"
    },
    {
        "City":"Hampton",
        "State":"Virginia",
        "Population":136699,
        "lat":37.0298687,
        "lon":-76.3452218,
        "eligible":0,
        "name":"Hampton, VA"
    },
    {
        "City":"McAllen",
        "State":"Texas",
        "Population":136639,
        "lat":26.2034071,
        "lon":-98.2300124,
        "eligible":1,
        "name":"McAllen, TX"
    },
    {
        "City":"Warren",
        "State":"Michigan",
        "Population":134873,
        "lat":42.5144566,
        "lon":-83.0146526,
        "eligible":0,
        "name":"Warren, MI"
    },
    {
        "City":"Bellevue",
        "State":"Washington",
        "Population":133992,
        "lat":47.610377,
        "lon":-122.2006786,
        "eligible":0,
        "name":"Bellevue, WA"
    },
    {
        "City":"West Valley City",
        "State":"Utah",
        "Population":133579,
        "lat":40.6916132,
        "lon":-112.0010501,
        "eligible":0,
        "name":"West Valley City, UT"
    },
    {
        "City":"Columbia",
        "State":"South Carolina",
        "Population":133358,
        "lat":34.0007104,
        "lon":-81.0348144,
        "eligible":1,
        "name":"Columbia, SC"
    },
    {
        "City":"Olathe",
        "State":"Kansas",
        "Population":131885,
        "lat":38.8813958,
        "lon":-94.8191285,
        "eligible":0,
        "name":"Olathe, KS"
    },
    {
        "City":"Sterling Heights",
        "State":"Michigan",
        "Population":131224,
        "lat":42.5803122,
        "lon":-83.0302033,
        "eligible":0,
        "name":"Sterling Heights, MI"
    },
    {
        "City":"New Haven",
        "State":"Connecticut",
        "Population":130660,
        "lat":41.308274,
        "lon":-72.9278835,
        "eligible":1,
        "name":"New Haven, CT"
    },
    {
        "City":"Miramar",
        "State":"Florida",
        "Population":130288,
        "lat":25.9860762,
        "lon":-80.3035602,
        "eligible":0,
        "name":"Miramar, FL"
    },
    {
        "City":"Waco",
        "State":"Texas",
        "Population":129030,
        "lat":31.549333,
        "lon":-97.1466695,
        "eligible":0,
        "name":"Waco, TX"
    },
    {
        "City":"Thousand Oaks",
        "State":"California",
        "Population":128731,
        "lat":34.1705609,
        "lon":-118.8375937,
        "eligible":0,
        "name":"Thousand Oaks, CA"
    },
    {
        "City":"Cedar Rapids",
        "State":"Iowa",
        "Population":128429,
        "lat":41.9778795,
        "lon":-91.6656232,
        "eligible":0,
        "name":"Cedar Rapids, IA"
    },
    {
        "City":"Charleston",
        "State":"South Carolina",
        "Population":127999,
        "lat":32.7764749,
        "lon":-79.9310512,
        "eligible":1,
        "name":"Charleston, SC"
    },
    {
        "City":"Visalia",
        "State":"California",
        "Population":127763,
        "lat":36.3302284,
        "lon":-119.2920585,
        "eligible":0,
        "name":"Visalia, CA"
    },
    {
        "City":"Topeka",
        "State":"Kansas",
        "Population":127679,
        "lat":39.0558235,
        "lon":-95.6890185,
        "eligible":1,
        "name":"Topeka, KS"
    },
    {
        "City":"Elizabeth",
        "State":"New Jersey",
        "Population":127558,
        "lat":40.6639916,
        "lon":-74.2107006,
        "eligible":0,
        "name":"Elizabeth, NJ"
    },
    {
        "City":"Gainesville",
        "State":"Florida",
        "Population":127488,
        "lat":29.6516344,
        "lon":-82.3248262,
        "eligible":0,
        "name":"Gainesville, FL"
    },
    {
        "City":"Thornton",
        "State":"Colorado",
        "Population":127359,
        "lat":39.8680412,
        "lon":-104.9719243,
        "eligible":0,
        "name":"Thornton, CO"
    },
    {
        "City":"Roseville",
        "State":"California",
        "Population":127035,
        "lat":38.7521235,
        "lon":-121.2880059,
        "eligible":0,
        "name":"Roseville, CA"
    },
    {
        "City":"Carrollton",
        "State":"Texas",
        "Population":126700,
        "lat":32.9756415,
        "lon":-96.8899636,
        "eligible":0,
        "name":"Carrollton, TX"
    },
    {
        "City":"Coral Springs",
        "State":"Florida",
        "Population":126604,
        "lat":26.271192,
        "lon":-80.2706044,
        "eligible":0,
        "name":"Coral Springs, FL"
    },
    {
        "City":"Stamford",
        "State":"Connecticut",
        "Population":126456,
        "lat":41.0534302,
        "lon":-73.5387341,
        "eligible":0,
        "name":"Stamford, CT"
    },
    {
        "City":"Simi Valley",
        "State":"California",
        "Population":126181,
        "lat":34.2694474,
        "lon":-118.781482,
        "eligible":0,
        "name":"Simi Valley, CA"
    },
    {
        "City":"Concord",
        "State":"California",
        "Population":125880,
        "lat":37.9779776,
        "lon":-122.0310733,
        "eligible":0,
        "name":"Concord, CA"
    },
    {
        "City":"Hartford",
        "State":"Connecticut",
        "Population":125017,
        "lat":41.7637111,
        "lon":-72.6850932,
        "eligible":1,
        "name":"Hartford, CT"
    },
    {
        "City":"Kent",
        "State":"Washington",
        "Population":124435,
        "lat":47.3809335,
        "lon":-122.2348431,
        "eligible":0,
        "name":"Kent, WA"
    },
    {
        "City":"Lafayette",
        "State":"Louisiana",
        "Population":124276,
        "lat":30.2240897,
        "lon":-92.0198427,
        "eligible":0,
        "name":"Lafayette, LA"
    },
    {
        "City":"Midland",
        "State":"Texas",
        "Population":123933,
        "lat":31.9973456,
        "lon":-102.0779146,
        "eligible":0,
        "name":"Midland, TX"
    },
    {
        "City":"Surprise",
        "State":"Arizona",
        "Population":123546,
        "lat":33.6292337,
        "lon":-112.3679279,
        "eligible":0,
        "name":"Surprise, AZ"
    },
    {
        "City":"Denton",
        "State":"Texas",
        "Population":123099,
        "lat":33.2148412,
        "lon":-97.1330683,
        "eligible":0,
        "name":"Denton, TX"
    },
    {
        "City":"Victorville",
        "State":"California",
        "Population":121096,
        "lat":34.5362184,
        "lon":-117.2927641,
        "eligible":0,
        "name":"Victorville, CA"
    },
    {
        "City":"Evansville",
        "State":"Indiana",
        "Population":120310,
        "lat":37.9715592,
        "lon":-87.5710898,
        "eligible":0,
        "name":"Evansville, IN"
    },
    {
        "City":"Santa Clara",
        "State":"California",
        "Population":120245,
        "lat":37.3541079,
        "lon":-121.9552356,
        "eligible":0,
        "name":"Santa Clara, CA"
    },
    {
        "City":"Abilene",
        "State":"Texas",
        "Population":120099,
        "lat":32.4487364,
        "lon":-99.7331439,
        "eligible":0,
        "name":"Abilene, TX"
    },
    {
        "City":"Athens",
        "State":"Georgia",
        "Population":119980,
        "lat":33.9519347,
        "lon":-83.357567,
        "eligible":0,
        "name":"Athens, GA"
    },
    {
        "City":"Vallejo",
        "State":"California",
        "Population":118837,
        "lat":38.1040864,
        "lon":-122.2566367,
        "eligible":0,
        "name":"Vallejo, CA"
    },
    {
        "City":"Allentown",
        "State":"Pennsylvania",
        "Population":118577,
        "lat":40.6084305,
        "lon":-75.4901833,
        "eligible":1,
        "name":"Allentown, PA"
    },
    {
        "City":"Norman",
        "State":"Oklahoma",
        "Population":118197,
        "lat":35.2225668,
        "lon":-97.4394777,
        "eligible":0,
        "name":"Norman, OK"
    },
    {
        "City":"Beaumont",
        "State":"Texas",
        "Population":117796,
        "lat":30.080174,
        "lon":-94.1265562,
        "eligible":0,
        "name":"Beaumont, TX"
    },
    {
        "City":"Independence",
        "State":"Missouri",
        "Population":117240,
        "lat":39.0911161,
        "lon":-94.4155068,
        "eligible":0,
        "name":"Independence, MO"
    },
    {
        "City":"Murfreesboro",
        "State":"Tennessee",
        "Population":117044,
        "lat":35.8456213,
        "lon":-86.39027,
        "eligible":0,
        "name":"Murfreesboro, TN"
    },
    {
        "City":"Ann Arbor",
        "State":"Michigan",
        "Population":117025,
        "lat":42.2808256,
        "lon":-83.7430378,
        "eligible":0,
        "name":"Ann Arbor, MI"
    },
    {
        "City":"Springfield",
        "State":"Illinois",
        "Population":117006,
        "lat":39.7817213,
        "lon":-89.6501481,
        "eligible":1,
        "name":"Springfield, IL"
    },
    {
        "City":"Berkeley",
        "State":"California",
        "Population":116768,
        "lat":37.8715926,
        "lon":-122.272747,
        "eligible":0,
        "name":"Berkeley, CA"
    },
    {
        "City":"Peoria",
        "State":"Illinois",
        "Population":116513,
        "lat":40.6936488,
        "lon":-89.5889864,
        "eligible":0,
        "name":"Peoria, IL"
    },
    {
        "City":"Provo",
        "State":"Utah",
        "Population":116288,
        "lat":40.2338438,
        "lon":-111.6585337,
        "eligible":1,
        "name":"Provo, UT"
    },
    {
        "City":"El Monte",
        "State":"California",
        "Population":115708,
        "lat":34.0686206,
        "lon":-118.0275667,
        "eligible":0,
        "name":"El Monte, CA"
    },
    {
        "City":"Columbia",
        "State":"Missouri",
        "Population":115276,
        "lat":38.9517053,
        "lon":-92.3340724,
        "eligible":0,
        "name":"Columbia, MO"
    },
    {
        "City":"Lansing",
        "State":"Michigan",
        "Population":113972,
        "lat":42.732535,
        "lon":-84.5555347,
        "eligible":1,
        "name":"Lansing, MI"
    },
    {
        "City":"Fargo",
        "State":"North Dakota",
        "Population":113658,
        "lat":46.8771863,
        "lon":-96.7898034,
        "eligible":1,
        "name":"Fargo, ND"
    },
    {
        "City":"Downey",
        "State":"California",
        "Population":113242,
        "lat":33.9401088,
        "lon":-118.1331593,
        "eligible":0,
        "name":"Downey, CA"
    },
    {
        "City":"Costa Mesa",
        "State":"California",
        "Population":112174,
        "lat":33.6411316,
        "lon":-117.9186689,
        "eligible":0,
        "name":"Costa Mesa, CA"
    },
    {
        "City":"Wilmington",
        "State":"North Carolina",
        "Population":112067,
        "lat":34.2257255,
        "lon":-77.9447102,
        "eligible":0,
        "name":"Wilmington, NC"
    },
    {
        "City":"Arvada",
        "State":"Colorado",
        "Population":111707,
        "lat":39.8027644,
        "lon":-105.0874842,
        "eligible":0,
        "name":"Arvada, CO"
    },
    {
        "City":"Inglewood",
        "State":"California",
        "Population":111542,
        "lat":33.9616801,
        "lon":-118.3531311,
        "eligible":0,
        "name":"Inglewood, CA"
    },
    {
        "City":"Miami Gardens",
        "State":"Florida",
        "Population":111378,
        "lat":25.9420377,
        "lon":-80.2456045,
        "eligible":0,
        "name":"Miami Gardens, FL"
    },
    {
        "City":"Carlsbad",
        "State":"California",
        "Population":110972,
        "lat":33.1580933,
        "lon":-117.3505939,
        "eligible":0,
        "name":"Carlsbad, CA"
    },
    {
        "City":"Westminster",
        "State":"Colorado",
        "Population":110945,
        "lat":39.8366528,
        "lon":-105.0372046,
        "eligible":0,
        "name":"Westminster, CO"
    },
    {
        "City":"Rochester",
        "State":"Minnesota",
        "Population":110742,
        "lat":44.0121221,
        "lon":-92.4801989,
        "eligible":0,
        "name":"Rochester, MN"
    },
    {
        "City":"Odessa",
        "State":"Texas",
        "Population":110720,
        "lat":31.8456816,
        "lon":-102.3676431,
        "eligible":0,
        "name":"Odessa, TX"
    },
    {
        "City":"Manchester",
        "State":"New Hampshire",
        "Population":110378,
        "lat":42.9956397,
        "lon":-71.4547891,
        "eligible":1,
        "name":"Manchester, NH"
    },
    {
        "City":"Elgin",
        "State":"Illinois",
        "Population":110145,
        "lat":42.0354084,
        "lon":-88.2825668,
        "eligible":0,
        "name":"Elgin, IL"
    },
    {
        "City":"West Jordan",
        "State":"Utah",
        "Population":110077,
        "lat":40.6096698,
        "lon":-111.9391031,
        "eligible":0,
        "name":"West Jordan, UT"
    },
    {
        "City":"Round Rock",
        "State":"Texas",
        "Population":109821,
        "lat":30.5082551,
        "lon":-97.678896,
        "eligible":0,
        "name":"Round Rock, TX"
    },
    {
        "City":"Clearwater",
        "State":"Florida",
        "Population":109703,
        "lat":27.9658533,
        "lon":-82.8001026,
        "eligible":0,
        "name":"Clearwater, FL"
    },
    {
        "City":"Waterbury",
        "State":"Connecticut",
        "Population":109676,
        "lat":41.5581525,
        "lon":-73.0514965,
        "eligible":0,
        "name":"Waterbury, CT"
    },
    {
        "City":"Gresham",
        "State":"Oregon",
        "Population":109397,
        "lat":45.5001357,
        "lon":-122.4302013,
        "eligible":0,
        "name":"Gresham, OR"
    },
    {
        "City":"Fairfield",
        "State":"California",
        "Population":109320,
        "lat":38.2493581,
        "lon":-122.0399663,
        "eligible":0,
        "name":"Fairfield, CA"
    },
    {
        "City":"Billings",
        "State":"Montana",
        "Population":109059,
        "lat":45.7832856,
        "lon":-108.5006904,
        "eligible":1,
        "name":"Billings, MT"
    },
    {
        "City":"Lowell",
        "State":"Massachusetts",
        "Population":108861,
        "lat":42.6334247,
        "lon":-71.3161718,
        "eligible":0,
        "name":"Lowell, MA"
    },
    {
        "City":"Ventura",
        "State":"California",
        "Population":108817,
        "lat":34.274646,
        "lon":-119.2290316,
        "eligible":1,
        "name":"Ventura, CA"
    },
    {
        "City":"Pueblo",
        "State":"Colorado",
        "Population":108249,
        "lat":38.2544472,
        "lon":-104.6091409,
        "eligible":0,
        "name":"Pueblo, CO"
    },
    {
        "City":"High Point",
        "State":"North Carolina",
        "Population":107741,
        "lat":35.9556923,
        "lon":-80.0053176,
        "eligible":0,
        "name":"High Point, NC"
    },
    {
        "City":"West Covina",
        "State":"California",
        "Population":107740,
        "lat":34.0686208,
        "lon":-117.9389526,
        "eligible":0,
        "name":"West Covina, CA"
    },
    {
        "City":"Richmond",
        "State":"California",
        "Population":107571,
        "lat":37.9357576,
        "lon":-122.3477486,
        "eligible":0,
        "name":"Richmond, CA"
    },
    {
        "City":"Murrieta",
        "State":"California",
        "Population":107479,
        "lat":33.5539143,
        "lon":-117.2139232,
        "eligible":0,
        "name":"Murrieta, CA"
    },
    {
        "City":"Cambridge",
        "State":"Massachusetts",
        "Population":107289,
        "lat":42.3736158,
        "lon":-71.1097335,
        "eligible":0,
        "name":"Cambridge, MA"
    },
    {
        "City":"Antioch",
        "State":"California",
        "Population":107100,
        "lat":38.0049214,
        "lon":-121.805789,
        "eligible":0,
        "name":"Antioch, CA"
    },
    {
        "City":"Temecula",
        "State":"California",
        "Population":106780,
        "lat":33.4936391,
        "lon":-117.1483648,
        "eligible":0,
        "name":"Temecula, CA"
    },
    {
        "City":"Norwalk",
        "State":"California",
        "Population":106589,
        "lat":33.9022367,
        "lon":-118.081733,
        "eligible":0,
        "name":"Norwalk, CA"
    },
    {
        "City":"Centennial",
        "State":"Colorado",
        "Population":106114,
        "lat":39.5807452,
        "lon":-104.8771726,
        "eligible":0,
        "name":"Centennial, CO"
    },
    {
        "City":"Everett",
        "State":"Washington",
        "Population":105370,
        "lat":47.9789848,
        "lon":-122.2020794,
        "eligible":0,
        "name":"Everett, WA"
    },
    {
        "City":"Wichita Falls",
        "State":"Texas",
        "Population":104898,
        "lat":33.9137085,
        "lon":-98.4933873,
        "eligible":0,
        "name":"Wichita Falls, TX"
    },
    {
        "City":"Palm Bay",
        "State":"Florida",
        "Population":104898,
        "lat":28.0344621,
        "lon":-80.5886646,
        "eligible":0,
        "name":"Palm Bay, FL"
    },
    {
        "City":"Green Bay",
        "State":"Wisconsin",
        "Population":104779,
        "lat":44.519159,
        "lon":-88.019826,
        "eligible":0,
        "name":"Green Bay, WI"
    },
    {
        "City":"Daly City",
        "State":"California",
        "Population":104739,
        "lat":37.6879241,
        "lon":-122.4702079,
        "eligible":0,
        "name":"Daly City, CA"
    },
    {
        "City":"Burbank",
        "State":"California",
        "Population":104709,
        "lat":34.1808392,
        "lon":-118.3089661,
        "eligible":0,
        "name":"Burbank, CA"
    },
    {
        "City":"Richardson",
        "State":"Texas",
        "Population":104475,
        "lat":32.9483335,
        "lon":-96.7298519,
        "eligible":0,
        "name":"Richardson, TX"
    },
    {
        "City":"Pompano Beach",
        "State":"Florida",
        "Population":104410,
        "lat":26.2378597,
        "lon":-80.1247667,
        "eligible":0,
        "name":"Pompano Beach, FL"
    },
    {
        "City":"North Charleston",
        "State":"South Carolina",
        "Population":104054,
        "lat":32.8546197,
        "lon":-79.9748103,
        "eligible":0,
        "name":"North Charleston, SC"
    },
    {
        "City":"Broken Arrow",
        "State":"Oklahoma",
        "Population":103500,
        "lat":36.060949,
        "lon":-95.7974526,
        "eligible":0,
        "name":"Broken Arrow, OK"
    },
    {
        "City":"Boulder",
        "State":"Colorado",
        "Population":103166,
        "lat":40.0149856,
        "lon":-105.2705456,
        "eligible":0,
        "name":"Boulder, CO"
    },
    {
        "City":"West Palm Beach",
        "State":"Florida",
        "Population":102436,
        "lat":26.7153424,
        "lon":-80.0533746,
        "eligible":0,
        "name":"West Palm Beach, FL"
    },
    {
        "City":"Santa Maria",
        "State":"California",
        "Population":102216,
        "lat":34.9530337,
        "lon":-120.4357191,
        "eligible":0,
        "name":"Santa Maria, CA"
    },
    {
        "City":"El Cajon",
        "State":"California",
        "Population":102211,
        "lat":32.7947731,
        "lon":-116.9625269,
        "eligible":0,
        "name":"El Cajon, CA"
    },
    {
        "City":"Davenport",
        "State":"Iowa",
        "Population":102157,
        "lat":41.5236437,
        "lon":-90.5776367,
        "eligible":0,
        "name":"Davenport, IA"
    },
    {
        "City":"Rialto",
        "State":"California",
        "Population":101910,
        "lat":34.1064001,
        "lon":-117.3703235,
        "eligible":0,
        "name":"Rialto, CA"
    },
    {
        "City":"Las Cruces",
        "State":"New Mexico",
        "Population":101324,
        "lat":32.3199396,
        "lon":-106.7636538,
        "eligible":0,
        "name":"Las Cruces, NM"
    },
    {
        "City":"San Mateo",
        "State":"California",
        "Population":101128,
        "lat":37.5629917,
        "lon":-122.3255254,
        "eligible":0,
        "name":"San Mateo, CA"
    },
    {
        "City":"Lewisville",
        "State":"Texas",
        "Population":101074,
        "lat":33.046233,
        "lon":-96.994174,
        "eligible":0,
        "name":"Lewisville, TX"
    },
    {
        "City":"South Bend",
        "State":"Indiana",
        "Population":100886,
        "lat":41.6763545,
        "lon":-86.2519898,
        "eligible":0,
        "name":"South Bend, IN"
    },
    {
        "City":"Lakeland",
        "State":"Florida",
        "Population":100710,
        "lat":28.0394654,
        "lon":-81.9498042,
        "eligible":1,
        "name":"Lakeland, FL"
    },
    {
        "City":"Erie",
        "State":"Pennsylvania",
        "Population":100671,
        "lat":42.1292241,
        "lon":-80.085059,
        "eligible":0,
        "name":"Erie, PA"
    },
    {
        "City":"Tyler",
        "State":"Texas",
        "Population":100223,
        "lat":32.3512601,
        "lon":-95.3010624,
        "eligible":0,
        "name":"Tyler, TX"
    },
    {
        "City":"Pearland",
        "State":"Texas",
        "Population":100065,
        "lat":29.5635666,
        "lon":-95.2860474,
        "eligible":0,
        "name":"Pearland, TX"
    },
    {
        "City":"College Station",
        "State":"Texas",
        "Population":100050,
        "lat":30.627977,
        "lon":-96.3344068,
        "eligible":0,
        "name":"College Station, TX"
    },
    {
        "City":"Kenosha",
        "State":"Wisconsin",
        "Population":99889,
        "lat":42.5847425,
        "lon":-87.8211854,
        "eligible":0,
        "name":"Kenosha, WI"
    },
    {
        "City":"Sandy Springs",
        "State":"Georgia",
        "Population":99770,
        "lat":33.9304352,
        "lon":-84.3733147,
        "eligible":0,
        "name":"Sandy Springs, GA"
    },
    {
        "City":"Clovis",
        "State":"California",
        "Population":99769,
        "lat":36.8252277,
        "lon":-119.7029194,
        "eligible":0,
        "name":"Clovis, CA"
    },
    {
        "City":"Flint",
        "State":"Michigan",
        "Population":99763,
        "lat":43.0125274,
        "lon":-83.6874562,
        "eligible":0,
        "name":"Flint, MI"
    },
    {
        "City":"Roanoke",
        "State":"Virginia",
        "Population":98465,
        "lat":37.2709704,
        "lon":-79.9414266,
        "eligible":0,
        "name":"Roanoke, VA"
    },
    {
        "City":"Albany",
        "State":"New York",
        "Population":98424,
        "lat":42.6525793,
        "lon":-73.7562317,
        "eligible":1,
        "name":"Albany, NY"
    },
    {
        "City":"Jurupa Valley",
        "State":"California",
        "Population":98030,
        "lat":33.9971974,
        "lon":-117.4854802,
        "eligible":0,
        "name":"Jurupa Valley, CA"
    },
    {
        "City":"Compton",
        "State":"California",
        "Population":97877,
        "lat":33.8958492,
        "lon":-118.2200712,
        "eligible":0,
        "name":"Compton, CA"
    },
    {
        "City":"San Angelo",
        "State":"Texas",
        "Population":97492,
        "lat":31.4637723,
        "lon":-100.4370375,
        "eligible":0,
        "name":"San Angelo, TX"
    },
    {
        "City":"Hillsboro",
        "State":"Oregon",
        "Population":97368,
        "lat":45.5228939,
        "lon":-122.989827,
        "eligible":0,
        "name":"Hillsboro, OR"
    },
    {
        "City":"Lawton",
        "State":"Oklahoma",
        "Population":97151,
        "lat":34.6035669,
        "lon":-98.3959291,
        "eligible":0,
        "name":"Lawton, OK"
    },
    {
        "City":"Renton",
        "State":"Washington",
        "Population":97003,
        "lat":47.4828776,
        "lon":-122.2170661,
        "eligible":0,
        "name":"Renton, WA"
    },
    {
        "City":"Vista",
        "State":"California",
        "Population":96929,
        "lat":33.2000368,
        "lon":-117.2425355,
        "eligible":0,
        "name":"Vista, CA"
    },
    {
        "City":"Davie",
        "State":"Florida",
        "Population":96830,
        "lat":26.0764783,
        "lon":-80.2521157,
        "eligible":0,
        "name":"Davie, FL"
    },
    {
        "City":"Greeley",
        "State":"Colorado",
        "Population":96539,
        "lat":40.4233142,
        "lon":-104.7091322,
        "eligible":0,
        "name":"Greeley, CO"
    },
    {
        "City":"Mission Viejo",
        "State":"California",
        "Population":96346,
        "lat":33.6000232,
        "lon":-117.6719953,
        "eligible":0,
        "name":"Mission Viejo, CA"
    },
    {
        "City":"Portsmouth",
        "State":"Virginia",
        "Population":96205,
        "lat":36.8354258,
        "lon":-76.2982742,
        "eligible":0,
        "name":"Portsmouth, VA"
    },
    {
        "City":"Dearborn",
        "State":"Michigan",
        "Population":95884,
        "lat":42.3222599,
        "lon":-83.1763145,
        "eligible":0,
        "name":"Dearborn, MI"
    },
    {
        "City":"South Gate",
        "State":"California",
        "Population":95677,
        "lat":33.954737,
        "lon":-118.2120161,
        "eligible":0,
        "name":"South Gate, CA"
    },
    {
        "City":"Tuscaloosa",
        "State":"Alabama",
        "Population":95334,
        "lat":33.2098407,
        "lon":-87.5691735,
        "eligible":0,
        "name":"Tuscaloosa, AL"
    },
    {
        "City":"Livonia",
        "State":"Michigan",
        "Population":95208,
        "lat":42.36837,
        "lon":-83.3527097,
        "eligible":0,
        "name":"Livonia, MI"
    },
    {
        "City":"New Bedford",
        "State":"Massachusetts",
        "Population":95078,
        "lat":41.6362152,
        "lon":-70.934205,
        "eligible":0,
        "name":"New Bedford, MA"
    },
    {
        "City":"Vacaville",
        "State":"California",
        "Population":94275,
        "lat":38.3565773,
        "lon":-121.9877444,
        "eligible":0,
        "name":"Vacaville, CA"
    },
    {
        "City":"Brockton",
        "State":"Massachusetts",
        "Population":94089,
        "lat":42.0834335,
        "lon":-71.0183787,
        "eligible":0,
        "name":"Brockton, MA"
    },
    {
        "City":"Roswell",
        "State":"Georgia",
        "Population":94034,
        "lat":34.0232431,
        "lon":-84.3615555,
        "eligible":0,
        "name":"Roswell, GA"
    },
    {
        "City":"Beaverton",
        "State":"Oregon",
        "Population":93542,
        "lat":45.487062,
        "lon":-122.8037102,
        "eligible":0,
        "name":"Beaverton, OR"
    },
    {
        "City":"Quincy",
        "State":"Massachusetts",
        "Population":93494,
        "lat":42.2528772,
        "lon":-71.0022705,
        "eligible":0,
        "name":"Quincy, MA"
    },
    {
        "City":"Sparks",
        "State":"Nevada",
        "Population":93282,
        "lat":39.5349112,
        "lon":-119.7526886,
        "eligible":0,
        "name":"Sparks, NV"
    },
    {
        "City":"Yakima",
        "State":"Washington",
        "Population":93257,
        "lat":46.6020711,
        "lon":-120.5058987,
        "eligible":0,
        "name":"Yakima, WA"
    },
    {
        "City":"Lee's Summit",
        "State":"Missouri",
        "Population":93184,
        "lat":38.9108408,
        "lon":-94.3821724,
        "eligible":0,
        "name":"Lee's Summit, MO"
    },
    {
        "City":"Federal Way",
        "State":"Washington",
        "Population":92734,
        "lat":47.3223221,
        "lon":-122.3126222,
        "eligible":0,
        "name":"Federal Way, WA"
    },
    {
        "City":"Carson",
        "State":"California",
        "Population":92599,
        "lat":33.8316745,
        "lon":-118.281693,
        "eligible":0,
        "name":"Carson, CA"
    },
    {
        "City":"Santa Monica",
        "State":"California",
        "Population":92472,
        "lat":34.0194543,
        "lon":-118.4911912,
        "eligible":0,
        "name":"Santa Monica, CA"
    },
    {
        "City":"Hesperia",
        "State":"California",
        "Population":92147,
        "lat":34.4263886,
        "lon":-117.3008784,
        "eligible":0,
        "name":"Hesperia, CA"
    },
    {
        "City":"Allen",
        "State":"Texas",
        "Population":92020,
        "lat":33.1031744,
        "lon":-96.6705503,
        "eligible":0,
        "name":"Allen, TX"
    },
    {
        "City":"Rio Rancho",
        "State":"New Mexico",
        "Population":91956,
        "lat":35.2327544,
        "lon":-106.6630437,
        "eligible":0,
        "name":"Rio Rancho, NM"
    },
    {
        "City":"Yuma",
        "State":"Arizona",
        "Population":91923,
        "lat":32.6926512,
        "lon":-114.6276916,
        "eligible":0,
        "name":"Yuma, AZ"
    },
    {
        "City":"Westminster",
        "State":"California",
        "Population":91739,
        "lat":33.7513419,
        "lon":-117.9939921,
        "eligible":0,
        "name":"Westminster, CA"
    },
    {
        "City":"Orem",
        "State":"Utah",
        "Population":91648,
        "lat":40.2968979,
        "lon":-111.6946475,
        "eligible":0,
        "name":"Orem, UT"
    },
    {
        "City":"Lynn",
        "State":"Massachusetts",
        "Population":91589,
        "lat":42.466763,
        "lon":-70.9494938,
        "eligible":0,
        "name":"Lynn, MA"
    },
    {
        "City":"Redding",
        "State":"California",
        "Population":91119,
        "lat":40.5865396,
        "lon":-122.3916754,
        "eligible":0,
        "name":"Redding, CA"
    },
    {
        "City":"Spokane Valley",
        "State":"Washington",
        "Population":91113,
        "lat":47.6732281,
        "lon":-117.2393748,
        "eligible":0,
        "name":"Spokane Valley, WA"
    },
    {
        "City":"Miami Beach",
        "State":"Florida",
        "Population":91026,
        "lat":25.790654,
        "lon":-80.1300455,
        "eligible":0,
        "name":"Miami Beach, FL"
    },
    {
        "City":"League City",
        "State":"Texas",
        "Population":90983,
        "lat":29.5074538,
        "lon":-95.0949303,
        "eligible":0,
        "name":"League City, TX"
    },
    {
        "City":"Lawrence",
        "State":"Kansas",
        "Population":90811,
        "lat":38.9716689,
        "lon":-95.2352501,
        "eligible":0,
        "name":"Lawrence, KS"
    },
    {
        "City":"Santa Barbara",
        "State":"California",
        "Population":90412,
        "lat":34.4208305,
        "lon":-119.6981901,
        "eligible":0,
        "name":"Santa Barbara, CA"
    },
    {
        "City":"Plantation",
        "State":"Florida",
        "Population":90268,
        "lat":26.1275862,
        "lon":-80.2331036,
        "eligible":0,
        "name":"Plantation, FL"
    },
    {
        "City":"Sandy",
        "State":"Utah",
        "Population":90231,
        "lat":40.5649781,
        "lon":-111.8389726,
        "eligible":0,
        "name":"Sandy, UT"
    },
    {
        "City":"Sunrise",
        "State":"Florida",
        "Population":90116,
        "lat":26.1669711,
        "lon":-80.256595,
        "eligible":0,
        "name":"Sunrise, FL"
    },
    {
        "City":"Macon",
        "State":"Georgia",
        "Population":89981,
        "lat":32.8406946,
        "lon":-83.6324022,
        "eligible":0,
        "name":"Macon, GA"
    },
    {
        "City":"Longmont",
        "State":"Colorado",
        "Population":89919,
        "lat":40.1672068,
        "lon":-105.1019275,
        "eligible":0,
        "name":"Longmont, CO"
    },
    {
        "City":"Boca Raton",
        "State":"Florida",
        "Population":89407,
        "lat":26.3683064,
        "lon":-80.1289321,
        "eligible":0,
        "name":"Boca Raton, FL"
    },
    {
        "City":"San Marcos",
        "State":"California",
        "Population":89387,
        "lat":33.1433723,
        "lon":-117.1661449,
        "eligible":0,
        "name":"San Marcos, CA"
    },
    {
        "City":"Greenville",
        "State":"North Carolina",
        "Population":89130,
        "lat":35.612661,
        "lon":-77.3663538,
        "eligible":0,
        "name":"Greenville, NC"
    },
    {
        "City":"Waukegan",
        "State":"Illinois",
        "Population":88826,
        "lat":42.3636331,
        "lon":-87.8447938,
        "eligible":0,
        "name":"Waukegan, IL"
    },
    {
        "City":"Fall River",
        "State":"Massachusetts",
        "Population":88697,
        "lat":41.7014912,
        "lon":-71.1550451,
        "eligible":0,
        "name":"Fall River, MA"
    },
    {
        "City":"Chico",
        "State":"California",
        "Population":88077,
        "lat":39.7284944,
        "lon":-121.8374777,
        "eligible":0,
        "name":"Chico, CA"
    },
    {
        "City":"Newton",
        "State":"Massachusetts",
        "Population":87971,
        "lat":42.3370413,
        "lon":-71.2092214,
        "eligible":0,
        "name":"Newton, MA"
    },
    {
        "City":"San Leandro",
        "State":"California",
        "Population":87965,
        "lat":37.7249296,
        "lon":-122.1560768,
        "eligible":0,
        "name":"San Leandro, CA"
    },
    {
        "City":"Reading",
        "State":"Pennsylvania",
        "Population":87893,
        "lat":40.3356483,
        "lon":-75.9268747,
        "eligible":0,
        "name":"Reading, PA"
    },
    {
        "City":"Norwalk",
        "State":"Connecticut",
        "Population":87776,
        "lat":41.117744,
        "lon":-73.4081575,
        "eligible":0,
        "name":"Norwalk, CT"
    },
    {
        "City":"Fort Smith",
        "State":"Arkansas",
        "Population":87650,
        "lat":35.3859242,
        "lon":-94.3985475,
        "eligible":0,
        "name":"Fort Smith, AR"
    },
    {
        "City":"Newport Beach",
        "State":"California",
        "Population":87273,
        "lat":33.6189101,
        "lon":-117.9289469,
        "eligible":0,
        "name":"Newport Beach, CA"
    },
    {
        "City":"Asheville",
        "State":"North Carolina",
        "Population":87236,
        "lat":35.5950581,
        "lon":-82.5514869,
        "eligible":0,
        "name":"Asheville, NC"
    },
    {
        "City":"Nashua",
        "State":"New Hampshire",
        "Population":87137,
        "lat":42.7653662,
        "lon":-71.467566,
        "eligible":0,
        "name":"Nashua, NH"
    },
    {
        "City":"Edmond",
        "State":"Oklahoma",
        "Population":87004,
        "lat":35.6528323,
        "lon":-97.4780954,
        "eligible":0,
        "name":"Edmond, OK"
    },
    {
        "City":"Whittier",
        "State":"California",
        "Population":86635,
        "lat":33.9791793,
        "lon":-118.032844,
        "eligible":0,
        "name":"Whittier, CA"
    },
    {
        "City":"Nampa",
        "State":"Idaho",
        "Population":86518,
        "lat":43.5407172,
        "lon":-116.5634624,
        "eligible":0,
        "name":"Nampa, ID"
    },
    {
        "City":"Bloomington",
        "State":"Minnesota",
        "Population":86319,
        "lat":44.840798,
        "lon":-93.2982799,
        "eligible":0,
        "name":"Bloomington, MN"
    },
    {
        "City":"Deltona",
        "State":"Florida",
        "Population":86290,
        "lat":28.9005446,
        "lon":-81.2636738,
        "eligible":0,
        "name":"Deltona, FL"
    },
    {
        "City":"Hawthorne",
        "State":"California",
        "Population":86199,
        "lat":33.9164032,
        "lon":-118.3525748,
        "eligible":0,
        "name":"Hawthorne, CA"
    },
    {
        "City":"Duluth",
        "State":"Minnesota",
        "Population":86128,
        "lat":46.7866719,
        "lon":-92.1004852,
        "eligible":0,
        "name":"Duluth, MN"
    },
    {
        "City":"Carmel",
        "State":"Indiana",
        "Population":85927,
        "lat":39.978371,
        "lon":-86.1180435,
        "eligible":0,
        "name":"Carmel, IN"
    },
    {
        "City":"Suffolk",
        "State":"Virginia",
        "Population":85728,
        "lat":36.7282054,
        "lon":-76.5835621,
        "eligible":0,
        "name":"Suffolk, VA"
    },
    {
        "City":"Clifton",
        "State":"New Jersey",
        "Population":85390,
        "lat":40.8584328,
        "lon":-74.1637553,
        "eligible":0,
        "name":"Clifton, NJ"
    },
    {
        "City":"Citrus Heights",
        "State":"California",
        "Population":85285,
        "lat":38.7071247,
        "lon":-121.2810611,
        "eligible":0,
        "name":"Citrus Heights, CA"
    },
    {
        "City":"Livermore",
        "State":"California",
        "Population":85156,
        "lat":37.6818745,
        "lon":-121.7680088,
        "eligible":0,
        "name":"Livermore, CA"
    },
    {
        "City":"Tracy",
        "State":"California",
        "Population":84691,
        "lat":37.7396513,
        "lon":-121.4252227,
        "eligible":0,
        "name":"Tracy, CA"
    },
    {
        "City":"Alhambra",
        "State":"California",
        "Population":84577,
        "lat":34.095287,
        "lon":-118.1270146,
        "eligible":0,
        "name":"Alhambra, CA"
    },
    {
        "City":"Kirkland",
        "State":"Washington",
        "Population":84430,
        "lat":47.6814875,
        "lon":-122.2087353,
        "eligible":0,
        "name":"Kirkland, WA"
    },
    {
        "City":"Trenton",
        "State":"New Jersey",
        "Population":84349,
        "lat":40.2170534,
        "lon":-74.7429384,
        "eligible":1,
        "name":"Trenton, NJ"
    },
    {
        "City":"Ogden",
        "State":"Utah",
        "Population":84249,
        "lat":41.223,
        "lon":-111.9738304,
        "eligible":1,
        "name":"Ogden, UT"
    },
    {
        "City":"Hoover",
        "State":"Alabama",
        "Population":84126,
        "lat":33.4053867,
        "lon":-86.8113781,
        "eligible":0,
        "name":"Hoover, AL"
    },
    {
        "City":"Cicero",
        "State":"Illinois",
        "Population":84103,
        "lat":41.8455877,
        "lon":-87.7539448,
        "eligible":0,
        "name":"Cicero, IL"
    },
    {
        "City":"Fishers",
        "State":"Indiana",
        "Population":83891,
        "lat":39.9567548,
        "lon":-86.01335,
        "eligible":0,
        "name":"Fishers, IN"
    },
    {
        "City":"Sugar Land",
        "State":"Texas",
        "Population":83860,
        "lat":29.6196787,
        "lon":-95.6349463,
        "eligible":0,
        "name":"Sugar Land, TX"
    },
    {
        "City":"Danbury",
        "State":"Connecticut",
        "Population":83684,
        "lat":41.394817,
        "lon":-73.4540111,
        "eligible":0,
        "name":"Danbury, CT"
    },
    {
        "City":"Meridian",
        "State":"Idaho",
        "Population":83596,
        "lat":43.6121087,
        "lon":-116.3915131,
        "eligible":0,
        "name":"Meridian, ID"
    },
    {
        "City":"Indio",
        "State":"California",
        "Population":83539,
        "lat":33.7205771,
        "lon":-116.2155619,
        "eligible":0,
        "name":"Indio, CA"
    },
    {
        "City":"Concord",
        "State":"North Carolina",
        "Population":83506,
        "lat":35.4087517,
        "lon":-80.579511,
        "eligible":0,
        "name":"Concord, NC"
    },
    {
        "City":"Menifee",
        "State":"California",
        "Population":83447,
        "lat":33.6971468,
        "lon":-117.185294,
        "eligible":0,
        "name":"Menifee, CA"
    },
    {
        "City":"Champaign",
        "State":"Illinois",
        "Population":83424,
        "lat":40.1164204,
        "lon":-88.2433829,
        "eligible":0,
        "name":"Champaign, IL"
    },
    {
        "City":"Buena Park",
        "State":"California",
        "Population":82882,
        "lat":33.8675143,
        "lon":-117.9981181,
        "eligible":0,
        "name":"Buena Park, CA"
    },
    {
        "City":"Troy",
        "State":"Michigan",
        "Population":82821,
        "lat":42.6064095,
        "lon":-83.1497751,
        "eligible":0,
        "name":"Troy, MI"
    },
    {
        "City":"O'Fallon",
        "State":"Missouri",
        "Population":82809,
        "lat":38.8106075,
        "lon":-90.6998477,
        "eligible":0,
        "name":"O'Fallon, MO"
    },
    {
        "City":"Johns Creek",
        "State":"Georgia",
        "Population":82788,
        "lat":34.0289259,
        "lon":-84.198579,
        "eligible":0,
        "name":"Johns Creek, GA"
    },
    {
        "City":"Bellingham",
        "State":"Washington",
        "Population":82631,
        "lat":48.74908,
        "lon":-122.4781473,
        "eligible":0,
        "name":"Bellingham, WA"
    },
    {
        "City":"Westland",
        "State":"Michigan",
        "Population":82578,
        "lat":42.324204,
        "lon":-83.400211,
        "eligible":0,
        "name":"Westland, MI"
    },
    {
        "City":"Bloomington",
        "State":"Indiana",
        "Population":82575,
        "lat":39.165325,
        "lon":-86.5263857,
        "eligible":0,
        "name":"Bloomington, IN"
    },
    {
        "City":"Sioux City",
        "State":"Iowa",
        "Population":82459,
        "lat":42.4999942,
        "lon":-96.4003069,
        "eligible":0,
        "name":"Sioux City, IA"
    },
    {
        "City":"Warwick",
        "State":"Rhode Island",
        "Population":81971,
        "lat":41.7001009,
        "lon":-71.4161671,
        "eligible":0,
        "name":"Warwick, RI"
    },
    {
        "City":"Hemet",
        "State":"California",
        "Population":81750,
        "lat":33.7475203,
        "lon":-116.9719684,
        "eligible":0,
        "name":"Hemet, CA"
    },
    {
        "City":"Longview",
        "State":"Texas",
        "Population":81443,
        "lat":32.5007037,
        "lon":-94.7404891,
        "eligible":0,
        "name":"Longview, TX"
    },
    {
        "City":"Farmington Hills",
        "State":"Michigan",
        "Population":81295,
        "lat":42.4989936,
        "lon":-83.3677168,
        "eligible":0,
        "name":"Farmington Hills, MI"
    },
    {
        "City":"Bend",
        "State":"Oregon",
        "Population":81236,
        "lat":44.0581728,
        "lon":-121.3153096,
        "eligible":0,
        "name":"Bend, OR"
    },
    {
        "City":"Lakewood",
        "State":"California",
        "Population":81121,
        "lat":33.8536269,
        "lon":-118.1339563,
        "eligible":0,
        "name":"Lakewood, CA"
    },
    {
        "City":"Merced",
        "State":"California",
        "Population":81102,
        "lat":37.3021632,
        "lon":-120.4829677,
        "eligible":0,
        "name":"Merced, CA"
    },
    {
        "City":"Mission",
        "State":"Texas",
        "Population":81050,
        "lat":26.2159066,
        "lon":-98.3252932,
        "eligible":0,
        "name":"Mission, TX"
    },
    {
        "City":"Chino",
        "State":"California",
        "Population":80988,
        "lat":34.0122346,
        "lon":-117.688944,
        "eligible":0,
        "name":"Chino, CA"
    },
    {
        "City":"Redwood City",
        "State":"California",
        "Population":80872,
        "lat":37.4852152,
        "lon":-122.2363548,
        "eligible":0,
        "name":"Redwood City, CA"
    },
    {
        "City":"Edinburg",
        "State":"Texas",
        "Population":80836,
        "lat":26.3017374,
        "lon":-98.1633432,
        "eligible":0,
        "name":"Edinburg, TX"
    },
    {
        "City":"Cranston",
        "State":"Rhode Island",
        "Population":80566,
        "lat":41.7798226,
        "lon":-71.4372796,
        "eligible":0,
        "name":"Cranston, RI"
    },
    {
        "City":"Parma",
        "State":"Ohio",
        "Population":80429,
        "lat":41.4047742,
        "lon":-81.7229086,
        "eligible":0,
        "name":"Parma, OH"
    },
    {
        "City":"New Rochelle",
        "State":"New York",
        "Population":79446,
        "lat":40.9114882,
        "lon":-73.7823549,
        "eligible":0,
        "name":"New Rochelle, NY"
    },
    {
        "City":"Lake Forest",
        "State":"California",
        "Population":79312,
        "lat":33.6469661,
        "lon":-117.689218,
        "eligible":0,
        "name":"Lake Forest, CA"
    },
    {
        "City":"Napa",
        "State":"California",
        "Population":79068,
        "lat":38.2975381,
        "lon":-122.286865,
        "eligible":0,
        "name":"Napa, CA"
    },
    {
        "City":"Hammond",
        "State":"Indiana",
        "Population":78967,
        "lat":41.5833688,
        "lon":-87.5000412,
        "eligible":0,
        "name":"Hammond, IN"
    },
    {
        "City":"Fayetteville",
        "State":"Arkansas",
        "Population":78960,
        "lat":36.0625795,
        "lon":-94.1574263,
        "eligible":0,
        "name":"Fayetteville, AR"
    },
    {
        "City":"Bloomington",
        "State":"Illinois",
        "Population":78902,
        "lat":40.4842027,
        "lon":-88.9936873,
        "eligible":0,
        "name":"Bloomington, IL"
    },
    {
        "City":"Avondale",
        "State":"Arizona",
        "Population":78822,
        "lat":33.4355977,
        "lon":-112.3496021,
        "eligible":0,
        "name":"Avondale, AZ"
    },
    {
        "City":"Somerville",
        "State":"Massachusetts",
        "Population":78804,
        "lat":42.3875968,
        "lon":-71.0994968,
        "eligible":0,
        "name":"Somerville, MA"
    },
    {
        "City":"Palm Coast",
        "State":"Florida",
        "Population":78740,
        "lat":29.5844524,
        "lon":-81.2078699,
        "eligible":0,
        "name":"Palm Coast, FL"
    },
    {
        "City":"Bryan",
        "State":"Texas",
        "Population":78709,
        "lat":30.6743643,
        "lon":-96.3699632,
        "eligible":0,
        "name":"Bryan, TX"
    },
    {
        "City":"Gary",
        "State":"Indiana",
        "Population":78450,
        "lat":41.5933696,
        "lon":-87.3464271,
        "eligible":0,
        "name":"Gary, IN"
    },
    {
        "City":"Largo",
        "State":"Florida",
        "Population":78409,
        "lat":27.9094665,
        "lon":-82.7873244,
        "eligible":0,
        "name":"Largo, FL"
    },
    {
        "City":"Brooklyn Park",
        "State":"Minnesota",
        "Population":78373,
        "lat":45.0941315,
        "lon":-93.3563405,
        "eligible":0,
        "name":"Brooklyn Park, MN"
    },
    {
        "City":"Tustin",
        "State":"California",
        "Population":78327,
        "lat":33.7458511,
        "lon":-117.826166,
        "eligible":0,
        "name":"Tustin, CA"
    },
    {
        "City":"Racine",
        "State":"Wisconsin",
        "Population":78199,
        "lat":42.7261309,
        "lon":-87.7828523,
        "eligible":0,
        "name":"Racine, WI"
    },
    {
        "City":"Deerfield Beach",
        "State":"Florida",
        "Population":78041,
        "lat":26.3184123,
        "lon":-80.0997657,
        "eligible":0,
        "name":"Deerfield Beach, FL"
    },
    {
        "City":"Lynchburg",
        "State":"Virginia",
        "Population":78014,
        "lat":37.4137536,
        "lon":-79.1422464,
        "eligible":0,
        "name":"Lynchburg, VA"
    },
    {
        "City":"Mountain View",
        "State":"California",
        "Population":77846,
        "lat":37.3860517,
        "lon":-122.0838511,
        "eligible":0,
        "name":"Mountain View, CA"
    },
    {
        "City":"Medford",
        "State":"Oregon",
        "Population":77677,
        "lat":42.3265152,
        "lon":-122.8755949,
        "eligible":0,
        "name":"Medford, OR"
    },
    {
        "City":"Lawrence",
        "State":"Massachusetts",
        "Population":77657,
        "lat":42.7070354,
        "lon":-71.1631137,
        "eligible":0,
        "name":"Lawrence, MA"
    },
    {
        "City":"Bellflower",
        "State":"California",
        "Population":77593,
        "lat":33.8816818,
        "lon":-118.1170117,
        "eligible":0,
        "name":"Bellflower, CA"
    },
    {
        "City":"Melbourne",
        "State":"Florida",
        "Population":77508,
        "lat":28.0836269,
        "lon":-80.6081089,
        "eligible":1,
        "name":"Melbourne, FL"
    },
    {
        "City":"St. Joseph",
        "State":"Missouri",
        "Population":77147,
        "lat":39.7674578,
        "lon":-94.846681,
        "eligible":0,
        "name":"St. Joseph, MO"
    },
    {
        "City":"Camden",
        "State":"New Jersey",
        "Population":76903,
        "lat":39.9259463,
        "lon":-75.1196199,
        "eligible":0,
        "name":"Camden, NJ"
    },
    {
        "City":"St. George",
        "State":"Utah",
        "Population":76817,
        "lat":37.0965278,
        "lon":-113.5684164,
        "eligible":0,
        "name":"St. George, UT"
    },
    {
        "City":"Kennewick",
        "State":"Washington",
        "Population":76762,
        "lat":46.2112458,
        "lon":-119.1372338,
        "eligible":0,
        "name":"Kennewick, WA"
    },
    {
        "City":"Baldwin Park",
        "State":"California",
        "Population":76635,
        "lat":34.0852868,
        "lon":-117.9608978,
        "eligible":0,
        "name":"Baldwin Park, CA"
    },
    {
        "City":"Chino Hills",
        "State":"California",
        "Population":76572,
        "lat":33.9898188,
        "lon":-117.7325848,
        "eligible":0,
        "name":"Chino Hills, CA"
    },
    {
        "City":"Alameda",
        "State":"California",
        "Population":76419,
        "lat":37.7652065,
        "lon":-122.2416355,
        "eligible":0,
        "name":"Alameda, CA"
    },
    {
        "City":"Albany",
        "State":"Georgia",
        "Population":76185,
        "lat":31.5785074,
        "lon":-84.155741,
        "eligible":0,
        "name":"Albany, GA"
    },
    {
        "City":"Arlington Heights",
        "State":"Illinois",
        "Population":75994,
        "lat":42.0883603,
        "lon":-87.9806265,
        "eligible":0,
        "name":"Arlington Heights, IL"
    },
    {
        "City":"Scranton",
        "State":"Pennsylvania",
        "Population":75806,
        "lat":41.408969,
        "lon":-75.6624122,
        "eligible":1,
        "name":"Scranton, PA"
    },
    {
        "City":"Evanston",
        "State":"Illinois",
        "Population":75570,
        "lat":42.0450722,
        "lon":-87.6876969,
        "eligible":0,
        "name":"Evanston, IL"
    },
    {
        "City":"Kalamazoo",
        "State":"Michigan",
        "Population":75548,
        "lat":42.2917069,
        "lon":-85.5872286,
        "eligible":0,
        "name":"Kalamazoo, MI"
    },
    {
        "City":"Baytown",
        "State":"Texas",
        "Population":75418,
        "lat":29.7355047,
        "lon":-94.9774274,
        "eligible":0,
        "name":"Baytown, TX"
    },
    {
        "City":"Upland",
        "State":"California",
        "Population":75413,
        "lat":34.09751,
        "lon":-117.6483876,
        "eligible":0,
        "name":"Upland, CA"
    },
    {
        "City":"Springdale",
        "State":"Arkansas",
        "Population":75229,
        "lat":36.1867442,
        "lon":-94.1288141,
        "eligible":0,
        "name":"Springdale, AR"
    },
    {
        "City":"Bethlehem",
        "State":"Pennsylvania",
        "Population":75018,
        "lat":40.6259316,
        "lon":-75.3704579,
        "eligible":0,
        "name":"Bethlehem, PA"
    },
    {
        "City":"Schaumburg",
        "State":"Illinois",
        "Population":74907,
        "lat":42.0333607,
        "lon":-88.0834059,
        "eligible":0,
        "name":"Schaumburg, IL"
    },
    {
        "City":"Mount Pleasant",
        "State":"South Carolina",
        "Population":74885,
        "lat":32.8323225,
        "lon":-79.8284258,
        "eligible":0,
        "name":"Mount Pleasant, SC"
    },
    {
        "City":"Auburn",
        "State":"Washington",
        "Population":74860,
        "lat":47.3073228,
        "lon":-122.2284532,
        "eligible":0,
        "name":"Auburn, WA"
    },
    {
        "City":"Decatur",
        "State":"Illinois",
        "Population":74710,
        "lat":39.8403147,
        "lon":-88.9548001,
        "eligible":0,
        "name":"Decatur, IL"
    },
    {
        "City":"San Ramon",
        "State":"California",
        "Population":74513,
        "lat":37.7799273,
        "lon":-121.9780153,
        "eligible":0,
        "name":"San Ramon, CA"
    },
    {
        "City":"Pleasanton",
        "State":"California",
        "Population":74110,
        "lat":37.6624312,
        "lon":-121.8746789,
        "eligible":0,
        "name":"Pleasanton, CA"
    },
    {
        "City":"Wyoming",
        "State":"Michigan",
        "Population":74100,
        "lat":42.9133602,
        "lon":-85.7053085,
        "eligible":0,
        "name":"Wyoming, MI"
    },
    {
        "City":"Lake Charles",
        "State":"Louisiana",
        "Population":74024,
        "lat":30.2265949,
        "lon":-93.2173758,
        "eligible":0,
        "name":"Lake Charles, LA"
    },
    {
        "City":"Plymouth",
        "State":"Minnesota",
        "Population":73987,
        "lat":45.0105194,
        "lon":-93.4555093,
        "eligible":0,
        "name":"Plymouth, MN"
    },
    {
        "City":"Bolingbrook",
        "State":"Illinois",
        "Population":73936,
        "lat":41.6986416,
        "lon":-88.0683955,
        "eligible":0,
        "name":"Bolingbrook, IL"
    },
    {
        "City":"Pharr",
        "State":"Texas",
        "Population":73790,
        "lat":26.1947962,
        "lon":-98.1836216,
        "eligible":0,
        "name":"Pharr, TX"
    },
    {
        "City":"Appleton",
        "State":"Wisconsin",
        "Population":73596,
        "lat":44.2619309,
        "lon":-88.4153847,
        "eligible":0,
        "name":"Appleton, WI"
    },
    {
        "City":"Gastonia",
        "State":"North Carolina",
        "Population":73209,
        "lat":35.262082,
        "lon":-81.1873005,
        "eligible":0,
        "name":"Gastonia, NC"
    },
    {
        "City":"Folsom",
        "State":"California",
        "Population":73098,
        "lat":38.6779591,
        "lon":-121.1760583,
        "eligible":0,
        "name":"Folsom, CA"
    },
    {
        "City":"Southfield",
        "State":"Michigan",
        "Population":73006,
        "lat":42.4733688,
        "lon":-83.2218731,
        "eligible":0,
        "name":"Southfield, MI"
    },
    {
        "City":"Rochester Hills",
        "State":"Michigan",
        "Population":72952,
        "lat":42.6583661,
        "lon":-83.1499322,
        "eligible":0,
        "name":"Rochester Hills, MI"
    },
    {
        "City":"New Britain",
        "State":"Connecticut",
        "Population":72939,
        "lat":41.6612104,
        "lon":-72.7795419,
        "eligible":0,
        "name":"New Britain, CT"
    },
    {
        "City":"Goodyear",
        "State":"Arizona",
        "Population":72864,
        "lat":33.4353394,
        "lon":-112.3576567,
        "eligible":0,
        "name":"Goodyear, AZ"
    },
    {
        "City":"Canton",
        "State":"Ohio",
        "Population":72535,
        "lat":40.7989473,
        "lon":-81.378447,
        "eligible":0,
        "name":"Canton, OH"
    },
    {
        "City":"Warner Robins",
        "State":"Georgia",
        "Population":72531,
        "lat":32.6130007,
        "lon":-83.624201,
        "eligible":0,
        "name":"Warner Robins, GA"
    },
    {
        "City":"Union City",
        "State":"California",
        "Population":72528,
        "lat":37.5933918,
        "lon":-122.0438298,
        "eligible":0,
        "name":"Union City, CA"
    },
    {
        "City":"Perris",
        "State":"California",
        "Population":72326,
        "lat":33.7825194,
        "lon":-117.2286478,
        "eligible":0,
        "name":"Perris, CA"
    },
    {
        "City":"Manteca",
        "State":"California",
        "Population":71948,
        "lat":37.7974273,
        "lon":-121.2160526,
        "eligible":0,
        "name":"Manteca, CA"
    },
    {
        "City":"Iowa City",
        "State":"Iowa",
        "Population":71591,
        "lat":41.6611277,
        "lon":-91.5301683,
        "eligible":0,
        "name":"Iowa City, IA"
    },
    {
        "City":"Jonesboro",
        "State":"Arkansas",
        "Population":71551,
        "lat":35.8422967,
        "lon":-90.704279,
        "eligible":0,
        "name":"Jonesboro, AR"
    },
    {
        "City":"Wilmington",
        "State":"Delaware",
        "Population":71525,
        "lat":39.7390721,
        "lon":-75.5397878,
        "eligible":1,
        "name":"Wilmington, DE"
    },
    {
        "City":"Lynwood",
        "State":"California",
        "Population":71371,
        "lat":33.930293,
        "lon":-118.2114603,
        "eligible":0,
        "name":"Lynwood, CA"
    },
    {
        "City":"Loveland",
        "State":"Colorado",
        "Population":71334,
        "lat":40.3977612,
        "lon":-105.0749801,
        "eligible":0,
        "name":"Loveland, CO"
    },
    {
        "City":"Pawtucket",
        "State":"Rhode Island",
        "Population":71172,
        "lat":41.878711,
        "lon":-71.3825558,
        "eligible":0,
        "name":"Pawtucket, RI"
    },
    {
        "City":"Boynton Beach",
        "State":"Florida",
        "Population":71097,
        "lat":26.5317866,
        "lon":-80.0905465,
        "eligible":0,
        "name":"Boynton Beach, FL"
    },
    {
        "City":"Waukesha",
        "State":"Wisconsin",
        "Population":71016,
        "lat":43.0116784,
        "lon":-88.2314813,
        "eligible":0,
        "name":"Waukesha, WI"
    },
    {
        "City":"Gulfport",
        "State":"Mississippi",
        "Population":71012,
        "lat":30.3674198,
        "lon":-89.0928155,
        "eligible":0,
        "name":"Gulfport, MS"
    },
    {
        "City":"Apple Valley",
        "State":"California",
        "Population":70924,
        "lat":34.5008311,
        "lon":-117.1858759,
        "eligible":0,
        "name":"Apple Valley, CA"
    },
    {
        "City":"Passaic",
        "State":"New Jersey",
        "Population":70868,
        "lat":40.8567662,
        "lon":-74.1284764,
        "eligible":0,
        "name":"Passaic, NJ"
    },
    {
        "City":"Rapid City",
        "State":"South Dakota",
        "Population":70812,
        "lat":44.0805434,
        "lon":-103.2310149,
        "eligible":0,
        "name":"Rapid City, SD"
    },
    {
        "City":"Layton",
        "State":"Utah",
        "Population":70790,
        "lat":41.0602216,
        "lon":-111.9710529,
        "eligible":0,
        "name":"Layton, UT"
    },
    {
        "City":"Lafayette",
        "State":"Indiana",
        "Population":70373,
        "lat":40.4167022,
        "lon":-86.8752869,
        "eligible":0,
        "name":"Lafayette, IN"
    },
    {
        "City":"Turlock",
        "State":"California",
        "Population":70365,
        "lat":37.4946568,
        "lon":-120.8465941,
        "eligible":0,
        "name":"Turlock, CA"
    },
    {
        "City":"Muncie",
        "State":"Indiana",
        "Population":70316,
        "lat":40.1933767,
        "lon":-85.3863599,
        "eligible":0,
        "name":"Muncie, IN"
    },
    {
        "City":"Temple",
        "State":"Texas",
        "Population":70190,
        "lat":31.0982344,
        "lon":-97.342782,
        "eligible":0,
        "name":"Temple, TX"
    },
    {
        "City":"Missouri City",
        "State":"Texas",
        "Population":70185,
        "lat":29.6185669,
        "lon":-95.5377215,
        "eligible":0,
        "name":"Missouri City, TX"
    },
    {
        "City":"Redlands",
        "State":"California",
        "Population":69999,
        "lat":34.0555693,
        "lon":-117.1825381,
        "eligible":0,
        "name":"Redlands, CA"
    },
    {
        "City":"Santa Fe",
        "State":"New Mexico",
        "Population":69976,
        "lat":35.6869752,
        "lon":-105.937799,
        "eligible":1,
        "name":"Santa Fe, NM"
    },
    {
        "City":"Lauderhill",
        "State":"Florida",
        "Population":69813,
        "lat":26.1403635,
        "lon":-80.2133808,
        "eligible":0,
        "name":"Lauderhill, FL"
    },
    {
        "City":"Milpitas",
        "State":"California",
        "Population":69783,
        "lat":37.4323341,
        "lon":-121.8995741,
        "eligible":0,
        "name":"Milpitas, CA"
    },
    {
        "City":"Palatine",
        "State":"Illinois",
        "Population":69350,
        "lat":42.1103041,
        "lon":-88.03424,
        "eligible":0,
        "name":"Palatine, IL"
    },
    {
        "City":"Missoula",
        "State":"Montana",
        "Population":69122,
        "lat":46.8787176,
        "lon":-113.996586,
        "eligible":0,
        "name":"Missoula, MT"
    },
    {
        "City":"Rock Hill",
        "State":"South Carolina",
        "Population":69103,
        "lat":34.9248667,
        "lon":-81.0250784,
        "eligible":0,
        "name":"Rock Hill, SC"
    },
    {
        "City":"Jacksonville",
        "State":"North Carolina",
        "Population":69079,
        "lat":34.7540524,
        "lon":-77.4302414,
        "eligible":0,
        "name":"Jacksonville, NC"
    },
    {
        "City":"Franklin",
        "State":"Tennessee",
        "Population":68886,
        "lat":35.9250637,
        "lon":-86.8688899,
        "eligible":0,
        "name":"Franklin, TN"
    },
    {
        "City":"Flagstaff",
        "State":"Arizona",
        "Population":68667,
        "lat":35.1982836,
        "lon":-111.651302,
        "eligible":0,
        "name":"Flagstaff, AZ"
    },
    {
        "City":"Flower Mound",
        "State":"Texas",
        "Population":68609,
        "lat":33.0145673,
        "lon":-97.0969552,
        "eligible":0,
        "name":"Flower Mound, TX"
    },
    {
        "City":"Weston",
        "State":"Florida",
        "Population":68388,
        "lat":26.1003654,
        "lon":-80.3997748,
        "eligible":0,
        "name":"Weston, FL"
    },
    {
        "City":"Waterloo",
        "State":"Iowa",
        "Population":68366,
        "lat":42.492786,
        "lon":-92.3425775,
        "eligible":0,
        "name":"Waterloo, IA"
    },
    {
        "City":"Union City",
        "State":"New Jersey",
        "Population":68247,
        "lat":40.6975898,
        "lon":-74.2631635,
        "eligible":0,
        "name":"Union City, NJ"
    },
    {
        "City":"Mount Vernon",
        "State":"New York",
        "Population":68224,
        "lat":40.9125992,
        "lon":-73.8370786,
        "eligible":0,
        "name":"Mount Vernon, NY"
    },
    {
        "City":"Fort Myers",
        "State":"Florida",
        "Population":68190,
        "lat":26.640628,
        "lon":-81.8723084,
        "eligible":1,
        "name":"Fort Myers, FL"
    },
    {
        "City":"Dothan",
        "State":"Alabama",
        "Population":68001,
        "lat":31.2232313,
        "lon":-85.3904888,
        "eligible":0,
        "name":"Dothan, AL"
    },
    {
        "City":"Rancho Cordova",
        "State":"California",
        "Population":67911,
        "lat":38.5890723,
        "lon":-121.302728,
        "eligible":0,
        "name":"Rancho Cordova, CA"
    },
    {
        "City":"Redondo Beach",
        "State":"California",
        "Population":67815,
        "lat":33.8491816,
        "lon":-118.3884078,
        "eligible":0,
        "name":"Redondo Beach, CA"
    },
    {
        "City":"Jackson",
        "State":"Tennessee",
        "Population":67685,
        "lat":35.6145169,
        "lon":-88.8139469,
        "eligible":0,
        "name":"Jackson, TN"
    },
    {
        "City":"Pasco",
        "State":"Washington",
        "Population":67599,
        "lat":46.2395793,
        "lon":-119.1005657,
        "eligible":0,
        "name":"Pasco, WA"
    },
    {
        "City":"St. Charles",
        "State":"Missouri",
        "Population":67569,
        "lat":38.7881062,
        "lon":-90.4974359,
        "eligible":0,
        "name":"St. Charles, MO"
    },
    {
        "City":"Eau Claire",
        "State":"Wisconsin",
        "Population":67545,
        "lat":44.811349,
        "lon":-91.4984941,
        "eligible":0,
        "name":"Eau Claire, WI"
    },
    {
        "City":"North Richland Hills",
        "State":"Texas",
        "Population":67317,
        "lat":32.8342952,
        "lon":-97.2289029,
        "eligible":0,
        "name":"North Richland Hills, TX"
    },
    {
        "City":"Bismarck",
        "State":"North Dakota",
        "Population":67034,
        "lat":46.8083268,
        "lon":-100.7837392,
        "eligible":1,
        "name":"Bismarck, ND"
    },
    {
        "City":"Yorba Linda",
        "State":"California",
        "Population":67032,
        "lat":33.8886259,
        "lon":-117.8131125,
        "eligible":0,
        "name":"Yorba Linda, CA"
    },
    {
        "City":"Kenner",
        "State":"Louisiana",
        "Population":66975,
        "lat":29.9940924,
        "lon":-90.2417434,
        "eligible":0,
        "name":"Kenner, LA"
    },
    {
        "City":"Walnut Creek",
        "State":"California",
        "Population":66900,
        "lat":37.9100783,
        "lon":-122.0651819,
        "eligible":0,
        "name":"Walnut Creek, CA"
    },
    {
        "City":"Frederick",
        "State":"Maryland",
        "Population":66893,
        "lat":39.4142688,
        "lon":-77.4105409,
        "eligible":0,
        "name":"Frederick, MD"
    },
    {
        "City":"Oshkosh",
        "State":"Wisconsin",
        "Population":66778,
        "lat":44.0247062,
        "lon":-88.5426136,
        "eligible":0,
        "name":"Oshkosh, WI"
    },
    {
        "City":"Pittsburg",
        "State":"California",
        "Population":66695,
        "lat":38.0279762,
        "lon":-121.8846806,
        "eligible":0,
        "name":"Pittsburg, CA"
    },
    {
        "City":"Palo Alto",
        "State":"California",
        "Population":66642,
        "lat":37.4418834,
        "lon":-122.1430195,
        "eligible":0,
        "name":"Palo Alto, CA"
    },
    {
        "City":"Bossier City",
        "State":"Louisiana",
        "Population":66333,
        "lat":32.5159852,
        "lon":-93.7321228,
        "eligible":0,
        "name":"Bossier City, LA"
    },
    {
        "City":"Portland",
        "State":"Maine",
        "Population":66318,
        "lat":43.661471,
        "lon":-70.2553259,
        "eligible":1,
        "name":"Portland, ME"
    },
    {
        "City":"St. Cloud",
        "State":"Minnesota",
        "Population":66297,
        "lat":45.5579451,
        "lon":-94.1632404,
        "eligible":0,
        "name":"St. Cloud, MN"
    },
    {
        "City":"Davis",
        "State":"California",
        "Population":66205,
        "lat":38.5449065,
        "lon":-121.7405167,
        "eligible":0,
        "name":"Davis, CA"
    },
    {
        "City":"South San Francisco",
        "State":"California",
        "Population":66174,
        "lat":37.654656,
        "lon":-122.4077498,
        "eligible":0,
        "name":"South San Francisco, CA"
    },
    {
        "City":"Camarillo",
        "State":"California",
        "Population":66086,
        "lat":34.2163937,
        "lon":-119.0376023,
        "eligible":0,
        "name":"Camarillo, CA"
    },
    {
        "City":"North Little Rock",
        "State":"Arkansas",
        "Population":66075,
        "lat":34.769536,
        "lon":-92.2670941,
        "eligible":0,
        "name":"North Little Rock, AR"
    },
    {
        "City":"Schenectady",
        "State":"New York",
        "Population":65902,
        "lat":42.8142432,
        "lon":-73.9395687,
        "eligible":0,
        "name":"Schenectady, NY"
    },
    {
        "City":"Gaithersburg",
        "State":"Maryland",
        "Population":65690,
        "lat":39.1434406,
        "lon":-77.2013705,
        "eligible":0,
        "name":"Gaithersburg, MD"
    },
    {
        "City":"Harlingen",
        "State":"Texas",
        "Population":65665,
        "lat":26.1906306,
        "lon":-97.6961026,
        "eligible":0,
        "name":"Harlingen, TX"
    },
    {
        "City":"Woodbury",
        "State":"Minnesota",
        "Population":65656,
        "lat":44.9238552,
        "lon":-92.9593797,
        "eligible":0,
        "name":"Woodbury, MN"
    },
    {
        "City":"Eagan",
        "State":"Minnesota",
        "Population":65453,
        "lat":44.8041322,
        "lon":-93.1668858,
        "eligible":0,
        "name":"Eagan, MN"
    },
    {
        "City":"Yuba City",
        "State":"California",
        "Population":65416,
        "lat":39.1404477,
        "lon":-121.6169108,
        "eligible":0,
        "name":"Yuba City, CA"
    },
    {
        "City":"Maple Grove",
        "State":"Minnesota",
        "Population":65415,
        "lat":45.0724642,
        "lon":-93.4557877,
        "eligible":0,
        "name":"Maple Grove, MN"
    },
    {
        "City":"Youngstown",
        "State":"Ohio",
        "Population":65184,
        "lat":41.0997803,
        "lon":-80.6495194,
        "eligible":0,
        "name":"Youngstown, OH"
    },
    {
        "City":"Skokie",
        "State":"Illinois",
        "Population":65176,
        "lat":42.0324025,
        "lon":-87.7416246,
        "eligible":0,
        "name":"Skokie, IL"
    },
    {
        "City":"Kissimmee",
        "State":"Florida",
        "Population":65173,
        "lat":28.2919557,
        "lon":-81.407571,
        "eligible":0,
        "name":"Kissimmee, FL"
    },
    {
        "City":"Johnson City",
        "State":"Tennessee",
        "Population":65123,
        "lat":36.3134397,
        "lon":-82.3534727,
        "eligible":0,
        "name":"Johnson City, TN"
    },
    {
        "City":"Victoria",
        "State":"Texas",
        "Population":65098,
        "lat":28.8052674,
        "lon":-97.0035982,
        "eligible":0,
        "name":"Victoria, TX"
    },
    {
        "City":"San Clemente",
        "State":"California",
        "Population":65040,
        "lat":33.4269728,
        "lon":-117.6119925,
        "eligible":0,
        "name":"San Clemente, CA"
    },
    {
        "City":"Bayonne",
        "State":"New Jersey",
        "Population":65028,
        "lat":40.6687141,
        "lon":-74.1143091,
        "eligible":0,
        "name":"Bayonne, NJ"
    },
    {
        "City":"Laguna Niguel",
        "State":"California",
        "Population":64652,
        "lat":33.5225261,
        "lon":-117.7075526,
        "eligible":0,
        "name":"Laguna Niguel, CA"
    },
    {
        "City":"East Orange",
        "State":"New Jersey",
        "Population":64544,
        "lat":40.767323,
        "lon":-74.2048677,
        "eligible":0,
        "name":"East Orange, NJ"
    },
    {
        "City":"Shawnee",
        "State":"Kansas",
        "Population":64323,
        "lat":39.0228485,
        "lon":-94.7151865,
        "eligible":0,
        "name":"Shawnee, KS"
    },
    {
        "City":"Homestead",
        "State":"Florida",
        "Population":64079,
        "lat":25.4687224,
        "lon":-80.4775569,
        "eligible":0,
        "name":"Homestead, FL"
    },
    {
        "City":"Delray Beach",
        "State":"Florida",
        "Population":64072,
        "lat":26.4614625,
        "lon":-80.0728201,
        "eligible":0,
        "name":"Delray Beach, FL"
    },
    {
        "City":"Rockville",
        "State":"Maryland",
        "Population":64072,
        "lat":39.0839973,
        "lon":-77.1527578,
        "eligible":0,
        "name":"Rockville, MD"
    },
    {
        "City":"Janesville",
        "State":"Wisconsin",
        "Population":63820,
        "lat":42.6827885,
        "lon":-89.0187222,
        "eligible":0,
        "name":"Janesville, WI"
    },
    {
        "City":"Conway",
        "State":"Arkansas",
        "Population":63816,
        "lat":35.0886963,
        "lon":-92.4421011,
        "eligible":0,
        "name":"Conway, AR"
    },
    {
        "City":"Pico Rivera",
        "State":"California",
        "Population":63771,
        "lat":33.9830688,
        "lon":-118.096735,
        "eligible":0,
        "name":"Pico Rivera, CA"
    },
    {
        "City":"Lorain",
        "State":"Ohio",
        "Population":63710,
        "lat":41.452819,
        "lon":-82.1823746,
        "eligible":0,
        "name":"Lorain, OH"
    },
    {
        "City":"Montebello",
        "State":"California",
        "Population":63495,
        "lat":34.0165053,
        "lon":-118.1137535,
        "eligible":0,
        "name":"Montebello, CA"
    },
    {
        "City":"Lodi",
        "State":"California",
        "Population":63338,
        "lat":38.1341477,
        "lon":-121.2722194,
        "eligible":0,
        "name":"Lodi, CA"
    },
    {
        "City":"New Braunfels",
        "State":"Texas",
        "Population":63279,
        "lat":29.7030024,
        "lon":-98.1244531,
        "eligible":0,
        "name":"New Braunfels, TX"
    },
    {
        "City":"Marysville",
        "State":"Washington",
        "Population":63269,
        "lat":48.0517637,
        "lon":-122.1770818,
        "eligible":0,
        "name":"Marysville, WA"
    },
    {
        "City":"Tamarac",
        "State":"Florida",
        "Population":63155,
        "lat":26.2128609,
        "lon":-80.2497707,
        "eligible":0,
        "name":"Tamarac, FL"
    },
    {
        "City":"Madera",
        "State":"California",
        "Population":63105,
        "lat":36.9613356,
        "lon":-120.0607176,
        "eligible":0,
        "name":"Madera, CA"
    },
    {
        "City":"Conroe",
        "State":"Texas",
        "Population":63032,
        "lat":30.3118769,
        "lon":-95.4560512,
        "eligible":0,
        "name":"Conroe, TX"
    },
    {
        "City":"Santa Cruz",
        "State":"California",
        "Population":62864,
        "lat":36.9741171,
        "lon":-122.0307963,
        "eligible":0,
        "name":"Santa Cruz, CA"
    },
    {
        "City":"Eden Prairie",
        "State":"Minnesota",
        "Population":62603,
        "lat":44.8546856,
        "lon":-93.470786,
        "eligible":0,
        "name":"Eden Prairie, MN"
    },
    {
        "City":"Cheyenne",
        "State":"Wyoming",
        "Population":62448,
        "lat":41.1399814,
        "lon":-104.8202462,
        "eligible":1,
        "name":"Cheyenne, WY"
    },
    {
        "City":"Daytona Beach",
        "State":"Florida",
        "Population":62316,
        "lat":29.2108147,
        "lon":-81.0228331,
        "eligible":1,
        "name":"Daytona Beach, FL"
    },
    {
        "City":"Alpharetta",
        "State":"Georgia",
        "Population":62298,
        "lat":34.0753762,
        "lon":-84.2940899,
        "eligible":0,
        "name":"Alpharetta, GA"
    },
    {
        "City":"Hamilton",
        "State":"Ohio",
        "Population":62258,
        "lat":39.3995008,
        "lon":-84.5613355,
        "eligible":0,
        "name":"Hamilton, OH"
    },
    {
        "City":"Waltham",
        "State":"Massachusetts",
        "Population":62227,
        "lat":42.3764852,
        "lon":-71.2356113,
        "eligible":0,
        "name":"Waltham, MA"
    },
    {
        "City":"Coon Rapids",
        "State":"Minnesota",
        "Population":62103,
        "lat":45.1732394,
        "lon":-93.3030063,
        "eligible":0,
        "name":"Coon Rapids, MN"
    },
    {
        "City":"Haverhill",
        "State":"Massachusetts",
        "Population":62088,
        "lat":42.7762015,
        "lon":-71.0772796,
        "eligible":0,
        "name":"Haverhill, MA"
    },
    {
        "City":"Council Bluffs",
        "State":"Iowa",
        "Population":61969,
        "lat":41.2619444,
        "lon":-95.8608333,
        "eligible":0,
        "name":"Council Bluffs, IA"
    },
    {
        "City":"Taylor",
        "State":"Michigan",
        "Population":61817,
        "lat":42.240872,
        "lon":-83.2696509,
        "eligible":0,
        "name":"Taylor, MI"
    },
    {
        "City":"Utica",
        "State":"New York",
        "Population":61808,
        "lat":43.100903,
        "lon":-75.232664,
        "eligible":0,
        "name":"Utica, NY"
    },
    {
        "City":"Ames",
        "State":"Iowa",
        "Population":61792,
        "lat":42.034722,
        "lon":-93.62,
        "eligible":0,
        "name":"Ames, IA"
    },
    {
        "City":"La Habra",
        "State":"California",
        "Population":61653,
        "lat":33.9319578,
        "lon":-117.9461734,
        "eligible":0,
        "name":"La Habra, CA"
    },
    {
        "City":"Encinitas",
        "State":"California",
        "Population":61588,
        "lat":33.0369867,
        "lon":-117.2919818,
        "eligible":0,
        "name":"Encinitas, CA"
    },
    {
        "City":"Bowling Green",
        "State":"Kentucky",
        "Population":61488,
        "lat":36.9685219,
        "lon":-86.4808043,
        "eligible":0,
        "name":"Bowling Green, KY"
    },
    {
        "City":"Burnsville",
        "State":"Minnesota",
        "Population":61434,
        "lat":44.7677424,
        "lon":-93.2777226,
        "eligible":0,
        "name":"Burnsville, MN"
    },
    {
        "City":"Greenville",
        "State":"South Carolina",
        "Population":61397,
        "lat":34.8526176,
        "lon":-82.3940104,
        "eligible":1,
        "name":"Greenville, SC"
    },
    {
        "City":"West Des Moines",
        "State":"Iowa",
        "Population":61255,
        "lat":41.5772115,
        "lon":-93.711332,
        "eligible":0,
        "name":"West Des Moines, IA"
    },
    {
        "City":"Cedar Park",
        "State":"Texas",
        "Population":61238,
        "lat":30.505198,
        "lon":-97.8202888,
        "eligible":0,
        "name":"Cedar Park, TX"
    },
    {
        "City":"Tulare",
        "State":"California",
        "Population":61170,
        "lat":36.2077288,
        "lon":-119.3473379,
        "eligible":0,
        "name":"Tulare, CA"
    },
    {
        "City":"Monterey Park",
        "State":"California",
        "Population":61085,
        "lat":34.0625106,
        "lon":-118.1228476,
        "eligible":0,
        "name":"Monterey Park, CA"
    },
    {
        "City":"Vineland",
        "State":"New Jersey",
        "Population":61050,
        "lat":39.4863773,
        "lon":-75.0259637,
        "eligible":0,
        "name":"Vineland, NJ"
    },
    {
        "City":"Terre Haute",
        "State":"Indiana",
        "Population":61025,
        "lat":39.4667034,
        "lon":-87.4139092,
        "eligible":0,
        "name":"Terre Haute, IN"
    },
    {
        "City":"North Miami",
        "State":"Florida",
        "Population":61007,
        "lat":25.8900949,
        "lon":-80.1867138,
        "eligible":0,
        "name":"North Miami, FL"
    },
    {
        "City":"Mansfield",
        "State":"Texas",
        "Population":60872,
        "lat":32.5631924,
        "lon":-97.1416768,
        "eligible":0,
        "name":"Mansfield, TX"
    },
    {
        "City":"West Allis",
        "State":"Wisconsin",
        "Population":60697,
        "lat":43.0166806,
        "lon":-88.0070315,
        "eligible":0,
        "name":"West Allis, WI"
    },
    {
        "City":"Bristol",
        "State":"Connecticut",
        "Population":60568,
        "lat":41.6717648,
        "lon":-72.9492703,
        "eligible":0,
        "name":"Bristol, CT"
    },
    {
        "City":"Taylorsville",
        "State":"Utah",
        "Population":60519,
        "lat":40.6677248,
        "lon":-111.9388258,
        "eligible":0,
        "name":"Taylorsville, UT"
    },
    {
        "City":"Malden",
        "State":"Massachusetts",
        "Population":60509,
        "lat":42.4250964,
        "lon":-71.066163,
        "eligible":0,
        "name":"Malden, MA"
    },
    {
        "City":"Meriden",
        "State":"Connecticut",
        "Population":60456,
        "lat":41.5381535,
        "lon":-72.8070435,
        "eligible":0,
        "name":"Meriden, CT"
    },
    {
        "City":"Blaine",
        "State":"Minnesota",
        "Population":60407,
        "lat":45.1607987,
        "lon":-93.2349489,
        "eligible":0,
        "name":"Blaine, MN"
    },
    {
        "City":"Wellington",
        "State":"Florida",
        "Population":60202,
        "lat":26.6617635,
        "lon":-80.2683571,
        "eligible":0,
        "name":"Wellington, FL"
    },
    {
        "City":"Cupertino",
        "State":"California",
        "Population":60189,
        "lat":37.3229978,
        "lon":-122.0321823,
        "eligible":0,
        "name":"Cupertino, CA"
    },
    {
        "City":"Springfield",
        "State":"Oregon",
        "Population":60177,
        "lat":44.0462362,
        "lon":-123.0220289,
        "eligible":0,
        "name":"Springfield, OR"
    },
    {
        "City":"Rogers",
        "State":"Arkansas",
        "Population":60112,
        "lat":36.3320196,
        "lon":-94.1185366,
        "eligible":0,
        "name":"Rogers, AR"
    },
    {
        "City":"St. Clair Shores",
        "State":"Michigan",
        "Population":60070,
        "lat":42.4974085,
        "lon":-82.8963604,
        "eligible":0,
        "name":"St. Clair Shores, MI"
    },
    {
        "City":"Gardena",
        "State":"California",
        "Population":59957,
        "lat":33.8883487,
        "lon":-118.3089624,
        "eligible":0,
        "name":"Gardena, CA"
    },
    {
        "City":"Pontiac",
        "State":"Michigan",
        "Population":59887,
        "lat":42.6389216,
        "lon":-83.2910468,
        "eligible":0,
        "name":"Pontiac, MI"
    },
    {
        "City":"National City",
        "State":"California",
        "Population":59834,
        "lat":32.6781085,
        "lon":-117.0991967,
        "eligible":0,
        "name":"National City, CA"
    },
    {
        "City":"Grand Junction",
        "State":"Colorado",
        "Population":59778,
        "lat":39.0638705,
        "lon":-108.5506486,
        "eligible":0,
        "name":"Grand Junction, CO"
    },
    {
        "City":"Rocklin",
        "State":"California",
        "Population":59738,
        "lat":38.7907339,
        "lon":-121.2357828,
        "eligible":0,
        "name":"Rocklin, CA"
    },
    {
        "City":"Chapel Hill",
        "State":"North Carolina",
        "Population":59635,
        "lat":35.9131996,
        "lon":-79.0558445,
        "eligible":0,
        "name":"Chapel Hill, NC"
    },
    {
        "City":"Casper",
        "State":"Wyoming",
        "Population":59628,
        "lat":42.866632,
        "lon":-106.313081,
        "eligible":0,
        "name":"Casper, WY"
    },
    {
        "City":"Broomfield",
        "State":"Colorado",
        "Population":59471,
        "lat":39.9205411,
        "lon":-105.0866504,
        "eligible":0,
        "name":"Broomfield, CO"
    },
    {
        "City":"Petaluma",
        "State":"California",
        "Population":59440,
        "lat":38.232417,
        "lon":-122.6366524,
        "eligible":0,
        "name":"Petaluma, CA"
    },
    {
        "City":"South Jordan",
        "State":"Utah",
        "Population":59366,
        "lat":40.5621704,
        "lon":-111.929658,
        "eligible":0,
        "name":"South Jordan, UT"
    },
    {
        "City":"Springfield",
        "State":"Ohio",
        "Population":59357,
        "lat":39.9242266,
        "lon":-83.8088171,
        "eligible":0,
        "name":"Springfield, OH"
    },
    {
        "City":"Great Falls",
        "State":"Montana",
        "Population":59351,
        "lat":47.4941836,
        "lon":-111.2833449,
        "eligible":0,
        "name":"Great Falls, MT"
    },
    {
        "City":"Lancaster",
        "State":"Pennsylvania",
        "Population":59325,
        "lat":40.0378755,
        "lon":-76.3055144,
        "eligible":0,
        "name":"Lancaster, PA"
    },
    {
        "City":"North Port",
        "State":"Florida",
        "Population":59212,
        "lat":27.044224,
        "lon":-82.2359254,
        "eligible":0,
        "name":"North Port, FL"
    },
    {
        "City":"Lakewood",
        "State":"Washington",
        "Population":59097,
        "lat":47.1717649,
        "lon":-122.518458,
        "eligible":0,
        "name":"Lakewood, WA"
    },
    {
        "City":"Marietta",
        "State":"Georgia",
        "Population":59089,
        "lat":33.952602,
        "lon":-84.5499327,
        "eligible":0,
        "name":"Marietta, GA"
    },
    {
        "City":"San Rafael",
        "State":"California",
        "Population":58994,
        "lat":37.9735346,
        "lon":-122.5310874,
        "eligible":0,
        "name":"San Rafael, CA"
    },
    {
        "City":"Royal Oak",
        "State":"Michigan",
        "Population":58946,
        "lat":42.4894801,
        "lon":-83.1446485,
        "eligible":0,
        "name":"Royal Oak, MI"
    },
    {
        "City":"Des Plaines",
        "State":"Illinois",
        "Population":58918,
        "lat":42.0333623,
        "lon":-87.8833991,
        "eligible":0,
        "name":"Des Plaines, IL"
    },
    {
        "City":"Huntington Park",
        "State":"California",
        "Population":58879,
        "lat":33.9816812,
        "lon":-118.2250725,
        "eligible":0,
        "name":"Huntington Park, CA"
    },
    {
        "City":"La Mesa",
        "State":"California",
        "Population":58642,
        "lat":32.7678287,
        "lon":-117.0230839,
        "eligible":0,
        "name":"La Mesa, CA"
    },
    {
        "City":"Orland Park",
        "State":"Illinois",
        "Population":58590,
        "lat":41.6303103,
        "lon":-87.8539425,
        "eligible":0,
        "name":"Orland Park, IL"
    },
    {
        "City":"Auburn",
        "State":"Alabama",
        "Population":58582,
        "lat":32.6098566,
        "lon":-85.4807825,
        "eligible":0,
        "name":"Auburn, AL"
    },
    {
        "City":"Lakeville",
        "State":"Minnesota",
        "Population":58562,
        "lat":44.6496868,
        "lon":-93.24272,
        "eligible":0,
        "name":"Lakeville, MN"
    },
    {
        "City":"Owensboro",
        "State":"Kentucky",
        "Population":58416,
        "lat":37.7719074,
        "lon":-87.1111676,
        "eligible":0,
        "name":"Owensboro, KY"
    },
    {
        "City":"Moore",
        "State":"Oklahoma",
        "Population":58414,
        "lat":35.3395079,
        "lon":-97.4867028,
        "eligible":0,
        "name":"Moore, OK"
    },
    {
        "City":"Jupiter",
        "State":"Florida",
        "Population":58298,
        "lat":26.9342246,
        "lon":-80.0942087,
        "eligible":0,
        "name":"Jupiter, FL"
    },
    {
        "City":"Idaho Falls",
        "State":"Idaho",
        "Population":58292,
        "lat":43.4916514,
        "lon":-112.0339645,
        "eligible":0,
        "name":"Idaho Falls, ID"
    },
    {
        "City":"Dubuque",
        "State":"Iowa",
        "Population":58253,
        "lat":42.5005583,
        "lon":-90.6645718,
        "eligible":0,
        "name":"Dubuque, IA"
    },
    {
        "City":"Bartlett",
        "State":"Tennessee",
        "Population":58226,
        "lat":35.2045328,
        "lon":-89.8739753,
        "eligible":0,
        "name":"Bartlett, TN"
    },
    {
        "City":"Rowlett",
        "State":"Texas",
        "Population":58043,
        "lat":32.9029017,
        "lon":-96.56388,
        "eligible":0,
        "name":"Rowlett, TX"
    },
    {
        "City":"Novi",
        "State":"Michigan",
        "Population":57960,
        "lat":42.48059,
        "lon":-83.4754913,
        "eligible":0,
        "name":"Novi, MI"
    },
    {
        "City":"White Plains",
        "State":"New York",
        "Population":57866,
        "lat":41.0339862,
        "lon":-73.7629097,
        "eligible":0,
        "name":"White Plains, NY"
    },
    {
        "City":"Arcadia",
        "State":"California",
        "Population":57639,
        "lat":34.1397292,
        "lon":-118.0353449,
        "eligible":0,
        "name":"Arcadia, CA"
    },
    {
        "City":"Redmond",
        "State":"Washington",
        "Population":57530,
        "lat":47.6739881,
        "lon":-122.121512,
        "eligible":0,
        "name":"Redmond, WA"
    },
    {
        "City":"Lake Elsinore",
        "State":"California",
        "Population":57525,
        "lat":33.6680772,
        "lon":-117.3272615,
        "eligible":0,
        "name":"Lake Elsinore, CA"
    },
    {
        "City":"Ocala",
        "State":"Florida",
        "Population":57468,
        "lat":29.1871986,
        "lon":-82.1400923,
        "eligible":0,
        "name":"Ocala, FL"
    },
    {
        "City":"Tinley Park",
        "State":"Illinois",
        "Population":57282,
        "lat":41.5731442,
        "lon":-87.7932939,
        "eligible":0,
        "name":"Tinley Park, IL"
    },
    {
        "City":"Port Orange",
        "State":"Florida",
        "Population":57203,
        "lat":29.1383165,
        "lon":-80.9956105,
        "eligible":0,
        "name":"Port Orange, FL"
    },
    {
        "City":"Medford",
        "State":"Massachusetts",
        "Population":57170,
        "lat":42.4184296,
        "lon":-71.1061639,
        "eligible":0,
        "name":"Medford, MA"
    },
    {
        "City":"Oak Lawn",
        "State":"Illinois",
        "Population":57073,
        "lat":41.719978,
        "lon":-87.7479528,
        "eligible":0,
        "name":"Oak Lawn, IL"
    },
    {
        "City":"Rocky Mount",
        "State":"North Carolina",
        "Population":56954,
        "lat":35.9382103,
        "lon":-77.7905339,
        "eligible":0,
        "name":"Rocky Mount, NC"
    },
    {
        "City":"Kokomo",
        "State":"Indiana",
        "Population":56895,
        "lat":40.486427,
        "lon":-86.1336033,
        "eligible":0,
        "name":"Kokomo, IN"
    },
    {
        "City":"Coconut Creek",
        "State":"Florida",
        "Population":56792,
        "lat":26.2517482,
        "lon":-80.1789351,
        "eligible":0,
        "name":"Coconut Creek, FL"
    },
    {
        "City":"Bowie",
        "State":"Maryland",
        "Population":56759,
        "lat":39.0067768,
        "lon":-76.7791365,
        "eligible":0,
        "name":"Bowie, MD"
    },
    {
        "City":"Berwyn",
        "State":"Illinois",
        "Population":56758,
        "lat":41.8505874,
        "lon":-87.7936685,
        "eligible":0,
        "name":"Berwyn, IL"
    },
    {
        "City":"Midwest City",
        "State":"Oklahoma",
        "Population":56756,
        "lat":35.4495065,
        "lon":-97.3967019,
        "eligible":0,
        "name":"Midwest City, OK"
    },
    {
        "City":"Fountain Valley",
        "State":"California",
        "Population":56707,
        "lat":33.7091847,
        "lon":-117.9536697,
        "eligible":0,
        "name":"Fountain Valley, CA"
    },
    {
        "City":"Buckeye",
        "State":"Arizona",
        "Population":56683,
        "lat":33.3703197,
        "lon":-112.5837766,
        "eligible":0,
        "name":"Buckeye, AZ"
    },
    {
        "City":"Dearborn Heights",
        "State":"Michigan",
        "Population":56620,
        "lat":42.3369816,
        "lon":-83.2732627,
        "eligible":0,
        "name":"Dearborn Heights, MI"
    },
    {
        "City":"Woodland",
        "State":"California",
        "Population":56590,
        "lat":38.6785157,
        "lon":-121.7732971,
        "eligible":0,
        "name":"Woodland, CA"
    },
    {
        "City":"Noblesville",
        "State":"Indiana",
        "Population":56540,
        "lat":40.0455917,
        "lon":-86.0085955,
        "eligible":0,
        "name":"Noblesville, IN"
    },
    {
        "City":"Valdosta",
        "State":"Georgia",
        "Population":56481,
        "lat":30.8327022,
        "lon":-83.2784851,
        "eligible":0,
        "name":"Valdosta, GA"
    },
    {
        "City":"Diamond Bar",
        "State":"California",
        "Population":56449,
        "lat":34.0286226,
        "lon":-117.8103367,
        "eligible":0,
        "name":"Diamond Bar, CA"
    },
    {
        "City":"Manhattan",
        "State":"Kansas",
        "Population":56143,
        "lat":39.1836082,
        "lon":-96.5716694,
        "eligible":0,
        "name":"Manhattan, KS"
    },
    {
        "City":"Santee",
        "State":"California",
        "Population":56105,
        "lat":32.8383828,
        "lon":-116.9739167,
        "eligible":0,
        "name":"Santee, CA"
    },
    {
        "City":"Taunton",
        "State":"Massachusetts",
        "Population":56069,
        "lat":41.900101,
        "lon":-71.0897674,
        "eligible":0,
        "name":"Taunton, MA"
    },
    {
        "City":"Sanford",
        "State":"Florida",
        "Population":56002,
        "lat":28.8028612,
        "lon":-81.269453,
        "eligible":0,
        "name":"Sanford, FL"
    },
    {
        "City":"Kettering",
        "State":"Ohio",
        "Population":55870,
        "lat":39.6895036,
        "lon":-84.1688274,
        "eligible":0,
        "name":"Kettering, OH"
    },
    {
        "City":"New Brunswick",
        "State":"New Jersey",
        "Population":55831,
        "lat":40.4862157,
        "lon":-74.4518188,
        "eligible":0,
        "name":"New Brunswick, NJ"
    },
    {
        "City":"Decatur",
        "State":"Alabama",
        "Population":55816,
        "lat":34.6059253,
        "lon":-86.9833417,
        "eligible":0,
        "name":"Decatur, AL"
    },
    {
        "City":"Chicopee",
        "State":"Massachusetts",
        "Population":55717,
        "lat":42.1487043,
        "lon":-72.6078672,
        "eligible":0,
        "name":"Chicopee, MA"
    },
    {
        "City":"Anderson",
        "State":"Indiana",
        "Population":55670,
        "lat":40.1053196,
        "lon":-85.6802541,
        "eligible":0,
        "name":"Anderson, IN"
    },
    {
        "City":"Margate",
        "State":"Florida",
        "Population":55456,
        "lat":26.2445263,
        "lon":-80.206436,
        "eligible":0,
        "name":"Margate, FL"
    },
    {
        "City":"Weymouth Town",
        "State":"Massachusetts",
        "Population":55419,
        "lat":42.2180724,
        "lon":-70.9410356,
        "eligible":0,
        "name":"Weymouth Town, MA"
    },
    {
        "City":"Hempstead",
        "State":"New York",
        "Population":55361,
        "lat":40.7062128,
        "lon":-73.6187397,
        "eligible":0,
        "name":"Hempstead, NY"
    },
    {
        "City":"Corvallis",
        "State":"Oregon",
        "Population":55298,
        "lat":44.5645659,
        "lon":-123.2620435,
        "eligible":0,
        "name":"Corvallis, OR"
    },
    {
        "City":"Eastvale",
        "State":"California",
        "Population":55191,
        "lat":33.952463,
        "lon":-117.5848025,
        "eligible":0,
        "name":"Eastvale, CA"
    },
    {
        "City":"Porterville",
        "State":"California",
        "Population":55174,
        "lat":36.06523,
        "lon":-119.0167679,
        "eligible":0,
        "name":"Porterville, CA"
    },
    {
        "City":"West Haven",
        "State":"Connecticut",
        "Population":55046,
        "lat":41.2705484,
        "lon":-72.9469711,
        "eligible":0,
        "name":"West Haven, CT"
    },
    {
        "City":"Brentwood",
        "State":"California",
        "Population":55000,
        "lat":37.931868,
        "lon":-121.6957863,
        "eligible":0,
        "name":"Brentwood, CA"
    },
    {
        "City":"Paramount",
        "State":"California",
        "Population":54980,
        "lat":33.8894598,
        "lon":-118.1597911,
        "eligible":0,
        "name":"Paramount, CA"
    },
    {
        "City":"Grand Forks",
        "State":"North Dakota",
        "Population":54932,
        "lat":47.9252568,
        "lon":-97.0328547,
        "eligible":0,
        "name":"Grand Forks, ND"
    },
    {
        "City":"Georgetown",
        "State":"Texas",
        "Population":54898,
        "lat":30.6332618,
        "lon":-97.6779842,
        "eligible":0,
        "name":"Georgetown, TX"
    },
    {
        "City":"St. Peters",
        "State":"Missouri",
        "Population":54842,
        "lat":38.7874699,
        "lon":-90.6298922,
        "eligible":0,
        "name":"St. Peters, MO"
    },
    {
        "City":"Shoreline",
        "State":"Washington",
        "Population":54790,
        "lat":47.7556531,
        "lon":-122.3415178,
        "eligible":0,
        "name":"Shoreline, WA"
    },
    {
        "City":"Mount Prospect",
        "State":"Illinois",
        "Population":54771,
        "lat":42.0664167,
        "lon":-87.9372908,
        "eligible":0,
        "name":"Mount Prospect, IL"
    },
    {
        "City":"Hanford",
        "State":"California",
        "Population":54686,
        "lat":36.3274502,
        "lon":-119.6456844,
        "eligible":0,
        "name":"Hanford, CA"
    },
    {
        "City":"Normal",
        "State":"Illinois",
        "Population":54664,
        "lat":40.5142026,
        "lon":-88.9906312,
        "eligible":0,
        "name":"Normal, IL"
    },
    {
        "City":"Rosemead",
        "State":"California",
        "Population":54561,
        "lat":34.0805651,
        "lon":-118.072846,
        "eligible":0,
        "name":"Rosemead, CA"
    },
    {
        "City":"Lehi",
        "State":"Utah",
        "Population":54382,
        "lat":40.3916172,
        "lon":-111.8507662,
        "eligible":0,
        "name":"Lehi, UT"
    },
    {
        "City":"Pocatello",
        "State":"Idaho",
        "Population":54350,
        "lat":42.8713032,
        "lon":-112.4455344,
        "eligible":0,
        "name":"Pocatello, ID"
    },
    {
        "City":"Highland",
        "State":"California",
        "Population":54291,
        "lat":34.1283442,
        "lon":-117.2086513,
        "eligible":0,
        "name":"Highland, CA"
    },
    {
        "City":"Novato",
        "State":"California",
        "Population":54194,
        "lat":38.1074198,
        "lon":-122.5697032,
        "eligible":0,
        "name":"Novato, CA"
    },
    {
        "City":"Port Arthur",
        "State":"Texas",
        "Population":54135,
        "lat":29.8849504,
        "lon":-93.939947,
        "eligible":0,
        "name":"Port Arthur, TX"
    },
    {
        "City":"Carson City",
        "State":"Nevada",
        "Population":54080,
        "lat":39.1637984,
        "lon":-119.7674034,
        "eligible":1,
        "name":"Carson City, NV"
    },
    {
        "City":"San Marcos",
        "State":"Texas",
        "Population":54076,
        "lat":29.8832749,
        "lon":-97.9413941,
        "eligible":0,
        "name":"San Marcos, TX"
    },
    {
        "City":"Hendersonville",
        "State":"Tennessee",
        "Population":54068,
        "lat":36.3047735,
        "lon":-86.6199957,
        "eligible":0,
        "name":"Hendersonville, TN"
    },
    {
        "City":"Elyria",
        "State":"Ohio",
        "Population":53956,
        "lat":41.3683798,
        "lon":-82.1076486,
        "eligible":0,
        "name":"Elyria, OH"
    },
    {
        "City":"Revere",
        "State":"Massachusetts",
        "Population":53756,
        "lat":42.4084302,
        "lon":-71.0119948,
        "eligible":0,
        "name":"Revere, MA"
    },
    {
        "City":"Pflugerville",
        "State":"Texas",
        "Population":53752,
        "lat":30.4393696,
        "lon":-97.6200043,
        "eligible":0,
        "name":"Pflugerville, TX"
    },
    {
        "City":"Greenwood",
        "State":"Indiana",
        "Population":53665,
        "lat":39.6136578,
        "lon":-86.1066526,
        "eligible":0,
        "name":"Greenwood, IN"
    },
    {
        "City":"Bellevue",
        "State":"Nebraska",
        "Population":53663,
        "lat":41.1543623,
        "lon":-95.9145568,
        "eligible":0,
        "name":"Bellevue, NE"
    },
    {
        "City":"Wheaton",
        "State":"Illinois",
        "Population":53648,
        "lat":41.8661403,
        "lon":-88.1070127,
        "eligible":0,
        "name":"Wheaton, IL"
    },
    {
        "City":"Smyrna",
        "State":"Georgia",
        "Population":53438,
        "lat":33.8839926,
        "lon":-84.5143761,
        "eligible":0,
        "name":"Smyrna, GA"
    },
    {
        "City":"Sarasota",
        "State":"Florida",
        "Population":53326,
        "lat":27.3364347,
        "lon":-82.5306527,
        "eligible":1,
        "name":"Sarasota, FL"
    },
    {
        "City":"Blue Springs",
        "State":"Missouri",
        "Population":53294,
        "lat":39.0169509,
        "lon":-94.2816148,
        "eligible":0,
        "name":"Blue Springs, MO"
    },
    {
        "City":"Colton",
        "State":"California",
        "Population":53243,
        "lat":34.0739016,
        "lon":-117.3136547,
        "eligible":0,
        "name":"Colton, CA"
    },
    {
        "City":"Euless",
        "State":"Texas",
        "Population":53224,
        "lat":32.8370727,
        "lon":-97.0819541,
        "eligible":0,
        "name":"Euless, TX"
    },
    {
        "City":"Castle Rock",
        "State":"Colorado",
        "Population":53063,
        "lat":39.3722121,
        "lon":-104.8560902,
        "eligible":0,
        "name":"Castle Rock, CO"
    },
    {
        "City":"Cathedral City",
        "State":"California",
        "Population":52977,
        "lat":33.7805388,
        "lon":-116.4668036,
        "eligible":0,
        "name":"Cathedral City, CA"
    },
    {
        "City":"Kingsport",
        "State":"Tennessee",
        "Population":52962,
        "lat":36.548434,
        "lon":-82.5618186,
        "eligible":0,
        "name":"Kingsport, TN"
    },
    {
        "City":"Lake Havasu City",
        "State":"Arizona",
        "Population":52844,
        "lat":34.483901,
        "lon":-114.3224548,
        "eligible":0,
        "name":"Lake Havasu City, AZ"
    },
    {
        "City":"Pensacola",
        "State":"Florida",
        "Population":52703,
        "lat":30.421309,
        "lon":-87.2169149,
        "eligible":0,
        "name":"Pensacola, FL"
    },
    {
        "City":"Hoboken",
        "State":"New Jersey",
        "Population":52575,
        "lat":40.7439905,
        "lon":-74.0323626,
        "eligible":0,
        "name":"Hoboken, NJ"
    },
    {
        "City":"Yucaipa",
        "State":"California",
        "Population":52536,
        "lat":34.033625,
        "lon":-117.0430865,
        "eligible":0,
        "name":"Yucaipa, CA"
    },
    {
        "City":"Watsonville",
        "State":"California",
        "Population":52477,
        "lat":36.910231,
        "lon":-121.7568946,
        "eligible":0,
        "name":"Watsonville, CA"
    },
    {
        "City":"Richland",
        "State":"Washington",
        "Population":52413,
        "lat":46.2856907,
        "lon":-119.2844621,
        "eligible":0,
        "name":"Richland, WA"
    },
    {
        "City":"Delano",
        "State":"California",
        "Population":52403,
        "lat":35.7688425,
        "lon":-119.2470536,
        "eligible":0,
        "name":"Delano, CA"
    },
    {
        "City":"Hoffman Estates",
        "State":"Illinois",
        "Population":52398,
        "lat":42.0629915,
        "lon":-88.1227199,
        "eligible":0,
        "name":"Hoffman Estates, IL"
    },
    {
        "City":"Florissant",
        "State":"Missouri",
        "Population":52363,
        "lat":38.789217,
        "lon":-90.322614,
        "eligible":0,
        "name":"Florissant, MO"
    },
    {
        "City":"Placentia",
        "State":"California",
        "Population":52206,
        "lat":33.8722371,
        "lon":-117.8703363,
        "eligible":0,
        "name":"Placentia, CA"
    },
    {
        "City":"West New York",
        "State":"New Jersey",
        "Population":52122,
        "lat":40.7878788,
        "lon":-74.0143064,
        "eligible":0,
        "name":"West New York, NJ"
    },
    {
        "City":"Dublin",
        "State":"California",
        "Population":52105,
        "lat":37.7021521,
        "lon":-121.9357918,
        "eligible":0,
        "name":"Dublin, CA"
    },
    {
        "City":"Oak Park",
        "State":"Illinois",
        "Population":52066,
        "lat":41.8850317,
        "lon":-87.7845025,
        "eligible":0,
        "name":"Oak Park, IL"
    },
    {
        "City":"Peabody",
        "State":"Massachusetts",
        "Population":52044,
        "lat":42.5278731,
        "lon":-70.9286609,
        "eligible":0,
        "name":"Peabody, MA"
    },
    {
        "City":"Perth Amboy",
        "State":"New Jersey",
        "Population":51982,
        "lat":40.5067723,
        "lon":-74.2654234,
        "eligible":0,
        "name":"Perth Amboy, NJ"
    },
    {
        "City":"Battle Creek",
        "State":"Michigan",
        "Population":51848,
        "lat":42.3211522,
        "lon":-85.1797142,
        "eligible":0,
        "name":"Battle Creek, MI"
    },
    {
        "City":"Bradenton",
        "State":"Florida",
        "Population":51763,
        "lat":27.4989278,
        "lon":-82.5748194,
        "eligible":0,
        "name":"Bradenton, FL"
    },
    {
        "City":"Gilroy",
        "State":"California",
        "Population":51701,
        "lat":37.0057816,
        "lon":-121.5682751,
        "eligible":0,
        "name":"Gilroy, CA"
    },
    {
        "City":"Milford",
        "State":"Connecticut",
        "Population":51644,
        "lat":41.2306979,
        "lon":-73.064036,
        "eligible":0,
        "name":"Milford, CT"
    },
    {
        "City":"Albany",
        "State":"Oregon",
        "Population":51583,
        "lat":44.6365107,
        "lon":-123.1059282,
        "eligible":0,
        "name":"Albany, OR"
    },
    {
        "City":"Ankeny",
        "State":"Iowa",
        "Population":51567,
        "lat":41.7317884,
        "lon":-93.6001278,
        "eligible":0,
        "name":"Ankeny, IA"
    },
    {
        "City":"La Crosse",
        "State":"Wisconsin",
        "Population":51522,
        "lat":43.8013556,
        "lon":-91.2395807,
        "eligible":0,
        "name":"La Crosse, WI"
    },
    {
        "City":"Burlington",
        "State":"North Carolina",
        "Population":51510,
        "lat":36.0956918,
        "lon":-79.4377991,
        "eligible":0,
        "name":"Burlington, NC"
    },
    {
        "City":"DeSoto",
        "State":"Texas",
        "Population":51483,
        "lat":32.5896998,
        "lon":-96.8570738,
        "eligible":0,
        "name":"DeSoto, TX"
    },
    {
        "City":"Harrisonburg",
        "State":"Virginia",
        "Population":51395,
        "lat":38.4495688,
        "lon":-78.8689155,
        "eligible":0,
        "name":"Harrisonburg, VA"
    },
    {
        "City":"Minnetonka",
        "State":"Minnesota",
        "Population":51368,
        "lat":44.9211836,
        "lon":-93.4687489,
        "eligible":0,
        "name":"Minnetonka, MN"
    },
    {
        "City":"Elkhart",
        "State":"Indiana",
        "Population":51265,
        "lat":41.6819935,
        "lon":-85.9766671,
        "eligible":0,
        "name":"Elkhart, IN"
    },
    {
        "City":"Lakewood",
        "State":"Ohio",
        "Population":51143,
        "lat":41.4819932,
        "lon":-81.7981908,
        "eligible":0,
        "name":"Lakewood, OH"
    },
    {
        "City":"Glendora",
        "State":"California",
        "Population":51074,
        "lat":34.1361187,
        "lon":-117.865339,
        "eligible":0,
        "name":"Glendora, CA"
    },
    {
        "City":"Southaven",
        "State":"Mississippi",
        "Population":50997,
        "lat":34.9889818,
        "lon":-90.0125913,
        "eligible":0,
        "name":"Southaven, MS"
    },
    {
        "City":"Charleston",
        "State":"West Virginia",
        "Population":50821,
        "lat":38.3498195,
        "lon":-81.6326234,
        "eligible":1,
        "name":"Charleston, WV"
    },
    {
        "City":"Joplin",
        "State":"Missouri",
        "Population":50789,
        "lat":37.0842271,
        "lon":-94.513281,
        "eligible":0,
        "name":"Joplin, MO"
    },
    {
        "City":"Enid",
        "State":"Oklahoma",
        "Population":50725,
        "lat":36.3955891,
        "lon":-97.8783911,
        "eligible":0,
        "name":"Enid, OK"
    },
    {
        "City":"Palm Beach Gardens",
        "State":"Florida",
        "Population":50699,
        "lat":26.8233946,
        "lon":-80.1386547,
        "eligible":0,
        "name":"Palm Beach Gardens, FL"
    },
    {
        "City":"Brookhaven",
        "State":"Georgia",
        "Population":50603,
        "lat":33.8651033,
        "lon":-84.3365917,
        "eligible":0,
        "name":"Brookhaven, GA"
    },
    {
        "City":"Plainfield",
        "State":"New Jersey",
        "Population":50588,
        "lat":40.6337136,
        "lon":-74.4073736,
        "eligible":0,
        "name":"Plainfield, NJ"
    },
    {
        "City":"Grand Island",
        "State":"Nebraska",
        "Population":50550,
        "lat":40.9263957,
        "lon":-98.3420118,
        "eligible":0,
        "name":"Grand Island, NE"
    },
    {
        "City":"Palm Desert",
        "State":"California",
        "Population":50508,
        "lat":33.7222445,
        "lon":-116.3744556,
        "eligible":0,
        "name":"Palm Desert, CA"
    },
    {
        "City":"Huntersville",
        "State":"North Carolina",
        "Population":50458,
        "lat":35.410694,
        "lon":-80.8428504,
        "eligible":0,
        "name":"Huntersville, NC"
    },
    {
        "City":"Tigard",
        "State":"Oregon",
        "Population":50444,
        "lat":45.4312294,
        "lon":-122.7714861,
        "eligible":0,
        "name":"Tigard, OR"
    },
    {
        "City":"Lenexa",
        "State":"Kansas",
        "Population":50344,
        "lat":38.9536174,
        "lon":-94.7335709,
        "eligible":0,
        "name":"Lenexa, KS"
    },
    {
        "City":"Saginaw",
        "State":"Michigan",
        "Population":50303,
        "lat":43.4194699,
        "lon":-83.9508068,
        "eligible":0,
        "name":"Saginaw, MI"
    },
    {
        "City":"Kentwood",
        "State":"Michigan",
        "Population":50233,
        "lat":42.8694731,
        "lon":-85.6447492,
        "eligible":0,
        "name":"Kentwood, MI"
    },
    {
        "City":"Doral",
        "State":"Florida",
        "Population":50213,
        "lat":25.8195424,
        "lon":-80.3553302,
        "eligible":0,
        "name":"Doral, FL"
    },
    {
        "City":"Apple Valley",
        "State":"Minnesota",
        "Population":50201,
        "lat":44.7319094,
        "lon":-93.21772,
        "eligible":0,
        "name":"Apple Valley, MN"
    },
    {
        "City":"Grapevine",
        "State":"Texas",
        "Population":50195,
        "lat":32.9342919,
        "lon":-97.0780654,
        "eligible":0,
        "name":"Grapevine, TX"
    },
    {
        "City":"Aliso Viejo",
        "State":"California",
        "Population":50175,
        "lat":33.5676842,
        "lon":-117.7256083,
        "eligible":0,
        "name":"Aliso Viejo, CA"
    },
    {
        "City":"Sammamish",
        "State":"Washington",
        "Population":50169,
        "lat":47.6162683,
        "lon":-122.0355736,
        "eligible":0,
        "name":"Sammamish, WA"
    },
    {
        "City":"Casa Grande",
        "State":"Arizona",
        "Population":50111,
        "lat":32.8795022,
        "lon":-111.7573521,
        "eligible":0,
        "name":"Casa Grande, AZ"
    },
    {
        "City":"Pinellas Park",
        "State":"Florida",
        "Population":49998,
        "lat":27.8428025,
        "lon":-82.6995443,
        "eligible":0,
        "name":"Pinellas Park, FL"
    },
    {
        "City":"Troy",
        "State":"New York",
        "Population":49974,
        "lat":42.7284117,
        "lon":-73.6917851,
        "eligible":0,
        "name":"Troy, NY"
    },
    {
        "City":"West Sacramento",
        "State":"California",
        "Population":49891,
        "lat":38.5804609,
        "lon":-121.530234,
        "eligible":0,
        "name":"West Sacramento, CA"
    },
    {
        "City":"Burien",
        "State":"Washington",
        "Population":49858,
        "lat":47.4703767,
        "lon":-122.3467918,
        "eligible":0,
        "name":"Burien, WA"
    },
    {
        "City":"Commerce City",
        "State":"Colorado",
        "Population":49799,
        "lat":39.8083196,
        "lon":-104.9338675,
        "eligible":0,
        "name":"Commerce City, CO"
    },
    {
        "City":"Monroe",
        "State":"Louisiana",
        "Population":49761,
        "lat":32.5093109,
        "lon":-92.1193012,
        "eligible":0,
        "name":"Monroe, LA"
    },
    {
        "City":"Cerritos",
        "State":"California",
        "Population":49707,
        "lat":33.8583483,
        "lon":-118.0647871,
        "eligible":0,
        "name":"Cerritos, CA"
    },
    {
        "City":"Downers Grove",
        "State":"Illinois",
        "Population":49670,
        "lat":41.8089191,
        "lon":-88.0111746,
        "eligible":0,
        "name":"Downers Grove, IL"
    },
    {
        "City":"Coral Gables",
        "State":"Florida",
        "Population":49631,
        "lat":25.72149,
        "lon":-80.2683838,
        "eligible":0,
        "name":"Coral Gables, FL"
    },
    {
        "City":"Wilson",
        "State":"North Carolina",
        "Population":49628,
        "lat":35.7212689,
        "lon":-77.9155395,
        "eligible":0,
        "name":"Wilson, NC"
    },
    {
        "City":"Niagara Falls",
        "State":"New York",
        "Population":49468,
        "lat":43.0962143,
        "lon":-79.0377388,
        "eligible":0,
        "name":"Niagara Falls, NY"
    },
    {
        "City":"Poway",
        "State":"California",
        "Population":49417,
        "lat":32.9628232,
        "lon":-117.0358646,
        "eligible":0,
        "name":"Poway, CA"
    },
    {
        "City":"Edina",
        "State":"Minnesota",
        "Population":49376,
        "lat":44.8896866,
        "lon":-93.3499489,
        "eligible":0,
        "name":"Edina, MN"
    },
    {
        "City":"Cuyahoga Falls",
        "State":"Ohio",
        "Population":49267,
        "lat":41.1339449,
        "lon":-81.4845585,
        "eligible":0,
        "name":"Cuyahoga Falls, OH"
    },
    {
        "City":"Rancho Santa Margarita",
        "State":"California",
        "Population":49228,
        "lat":33.640855,
        "lon":-117.603104,
        "eligible":0,
        "name":"Rancho Santa Margarita, CA"
    },
    {
        "City":"Harrisburg",
        "State":"Pennsylvania",
        "Population":49188,
        "lat":40.2731911,
        "lon":-76.8867008,
        "eligible":1,
        "name":"Harrisburg, PA"
    },
    {
        "City":"Huntington",
        "State":"West Virginia",
        "Population":49177,
        "lat":38.4192496,
        "lon":-82.445154,
        "eligible":0,
        "name":"Huntington, WV"
    },
    {
        "City":"La Mirada",
        "State":"California",
        "Population":49133,
        "lat":33.9172357,
        "lon":-118.0120086,
        "eligible":0,
        "name":"La Mirada, CA"
    },
    {
        "City":"Cypress",
        "State":"California",
        "Population":49087,
        "lat":33.8169599,
        "lon":-118.0372852,
        "eligible":0,
        "name":"Cypress, CA"
    },
    {
        "City":"Caldwell",
        "State":"Idaho",
        "Population":48957,
        "lat":43.6629384,
        "lon":-116.6873596,
        "eligible":0,
        "name":"Caldwell, ID"
    },
    {
        "City":"Logan",
        "State":"Utah",
        "Population":48913,
        "lat":41.7369803,
        "lon":-111.8338359,
        "eligible":0,
        "name":"Logan, UT"
    },
    {
        "City":"Galveston",
        "State":"Texas",
        "Population":48733,
        "lat":29.3013479,
        "lon":-94.7976958,
        "eligible":0,
        "name":"Galveston, TX"
    },
    {
        "City":"Sheboygan",
        "State":"Wisconsin",
        "Population":48725,
        "lat":43.7508284,
        "lon":-87.71453,
        "eligible":0,
        "name":"Sheboygan, WI"
    },
    {
        "City":"Middletown",
        "State":"Ohio",
        "Population":48630,
        "lat":39.5150576,
        "lon":-84.3982763,
        "eligible":0,
        "name":"Middletown, OH"
    },
    {
        "City":"Murray",
        "State":"Utah",
        "Population":48612,
        "lat":40.6668916,
        "lon":-111.8879909,
        "eligible":0,
        "name":"Murray, UT"
    },
    {
        "City":"Roswell",
        "State":"New Mexico",
        "Population":48611,
        "lat":33.3942655,
        "lon":-104.5230242,
        "eligible":0,
        "name":"Roswell, NM"
    },
    {
        "City":"Parker",
        "State":"Colorado",
        "Population":48608,
        "lat":39.5186002,
        "lon":-104.7613633,
        "eligible":0,
        "name":"Parker, CO"
    },
    {
        "City":"Bedford",
        "State":"Texas",
        "Population":48592,
        "lat":32.844017,
        "lon":-97.1430671,
        "eligible":0,
        "name":"Bedford, TX"
    },
    {
        "City":"East Lansing",
        "State":"Michigan",
        "Population":48554,
        "lat":42.7369792,
        "lon":-84.4838654,
        "eligible":0,
        "name":"East Lansing, MI"
    },
    {
        "City":"Methuen",
        "State":"Massachusetts",
        "Population":48514,
        "lat":42.7262016,
        "lon":-71.1908924,
        "eligible":0,
        "name":"Methuen, MA"
    },
    {
        "City":"Covina",
        "State":"California",
        "Population":48508,
        "lat":34.0900091,
        "lon":-117.8903397,
        "eligible":0,
        "name":"Covina, CA"
    },
    {
        "City":"Alexandria",
        "State":"Louisiana",
        "Population":48426,
        "lat":31.3112936,
        "lon":-92.4451371,
        "eligible":0,
        "name":"Alexandria, LA"
    },
    {
        "City":"Olympia",
        "State":"Washington",
        "Population":48338,
        "lat":47.0378741,
        "lon":-122.9006951,
        "eligible":1,
        "name":"Olympia, WA"
    },
    {
        "City":"Euclid",
        "State":"Ohio",
        "Population":48139,
        "lat":41.5931049,
        "lon":-81.5267873,
        "eligible":0,
        "name":"Euclid, OH"
    },
    {
        "City":"Mishawaka",
        "State":"Indiana",
        "Population":47989,
        "lat":41.6619927,
        "lon":-86.1586156,
        "eligible":0,
        "name":"Mishawaka, IN"
    },
    {
        "City":"Salina",
        "State":"Kansas",
        "Population":47846,
        "lat":38.8402805,
        "lon":-97.6114237,
        "eligible":0,
        "name":"Salina, KS"
    },
    {
        "City":"Azusa",
        "State":"California",
        "Population":47842,
        "lat":34.1336186,
        "lon":-117.9075627,
        "eligible":0,
        "name":"Azusa, CA"
    },
    {
        "City":"Newark",
        "State":"Ohio",
        "Population":47777,
        "lat":40.0581205,
        "lon":-82.4012642,
        "eligible":0,
        "name":"Newark, OH"
    },
    {
        "City":"Chesterfield",
        "State":"Missouri",
        "Population":47749,
        "lat":38.6631083,
        "lon":-90.5770675,
        "eligible":0,
        "name":"Chesterfield, MO"
    },
    {
        "City":"Leesburg",
        "State":"Virginia",
        "Population":47673,
        "lat":39.1156615,
        "lon":-77.5636015,
        "eligible":0,
        "name":"Leesburg, VA"
    },
    {
        "City":"Dunwoody",
        "State":"Georgia",
        "Population":47591,
        "lat":33.9462125,
        "lon":-84.3346473,
        "eligible":0,
        "name":"Dunwoody, GA"
    },
    {
        "City":"Hattiesburg",
        "State":"Mississippi",
        "Population":47556,
        "lat":31.3271189,
        "lon":-89.2903392,
        "eligible":0,
        "name":"Hattiesburg, MS"
    },
    {
        "City":"Roseville",
        "State":"Michigan",
        "Population":47555,
        "lat":42.4972583,
        "lon":-82.9371409,
        "eligible":0,
        "name":"Roseville, MI"
    },
    {
        "City":"Bonita Springs",
        "State":"Florida",
        "Population":47547,
        "lat":26.339806,
        "lon":-81.7786972,
        "eligible":0,
        "name":"Bonita Springs, FL"
    },
    {
        "City":"Portage",
        "State":"Michigan",
        "Population":47523,
        "lat":42.2011538,
        "lon":-85.5800022,
        "eligible":0,
        "name":"Portage, MI"
    },
    {
        "City":"St. Louis Park",
        "State":"Minnesota",
        "Population":47411,
        "lat":44.9597376,
        "lon":-93.3702186,
        "eligible":0,
        "name":"St. Louis Park, MN"
    },
    {
        "City":"Collierville",
        "State":"Tennessee",
        "Population":47333,
        "lat":35.042036,
        "lon":-89.6645266,
        "eligible":0,
        "name":"Collierville, TN"
    },
    {
        "City":"Middletown",
        "State":"Connecticut",
        "Population":47333,
        "lat":41.5623209,
        "lon":-72.6506488,
        "eligible":0,
        "name":"Middletown, CT"
    },
    {
        "City":"Stillwater",
        "State":"Oklahoma",
        "Population":47186,
        "lat":36.1156071,
        "lon":-97.0583681,
        "eligible":0,
        "name":"Stillwater, OK"
    },
    {
        "City":"East Providence",
        "State":"Rhode Island",
        "Population":47149,
        "lat":41.8137116,
        "lon":-71.3700545,
        "eligible":0,
        "name":"East Providence, RI"
    },
    {
        "City":"Lawrence",
        "State":"Indiana",
        "Population":47135,
        "lat":39.8386516,
        "lon":-86.0252612,
        "eligible":0,
        "name":"Lawrence, IN"
    },
    {
        "City":"Wauwatosa",
        "State":"Wisconsin",
        "Population":47134,
        "lat":43.0494572,
        "lon":-88.0075875,
        "eligible":0,
        "name":"Wauwatosa, WI"
    },
    {
        "City":"Mentor",
        "State":"Ohio",
        "Population":46979,
        "lat":41.6661573,
        "lon":-81.339552,
        "eligible":0,
        "name":"Mentor, OH"
    },
    {
        "City":"Ceres",
        "State":"California",
        "Population":46714,
        "lat":37.5949316,
        "lon":-120.9577098,
        "eligible":0,
        "name":"Ceres, CA"
    },
    {
        "City":"Cedar Hill",
        "State":"Texas",
        "Population":46663,
        "lat":32.5884689,
        "lon":-96.9561152,
        "eligible":0,
        "name":"Cedar Hill, TX"
    },
    {
        "City":"Mansfield",
        "State":"Ohio",
        "Population":46454,
        "lat":40.75839,
        "lon":-82.5154471,
        "eligible":0,
        "name":"Mansfield, OH"
    },
    {
        "City":"Binghamton",
        "State":"New York",
        "Population":46444,
        "lat":42.0986867,
        "lon":-75.9179738,
        "eligible":0,
        "name":"Binghamton, NY"
    },
    {
        "City":"Coeur d'Alene",
        "State":"Idaho",
        "Population":46402,
        "lat":47.6776832,
        "lon":-116.7804664,
        "eligible":0,
        "name":"Coeur d'Alene, ID"
    },
    {
        "City":"San Luis Obispo",
        "State":"California",
        "Population":46377,
        "lat":35.2827524,
        "lon":-120.6596156,
        "eligible":0,
        "name":"San Luis Obispo, CA"
    },
    {
        "City":"Minot",
        "State":"North Dakota",
        "Population":46321,
        "lat":48.2329668,
        "lon":-101.2922906,
        "eligible":0,
        "name":"Minot, ND"
    },
    {
        "City":"Palm Springs",
        "State":"California",
        "Population":46281,
        "lat":33.8302961,
        "lon":-116.5452921,
        "eligible":0,
        "name":"Palm Springs, CA"
    },
    {
        "City":"Pine Bluff",
        "State":"Arkansas",
        "Population":46094,
        "lat":34.2284312,
        "lon":-92.0031955,
        "eligible":0,
        "name":"Pine Bluff, AR"
    },
    {
        "City":"Texas City",
        "State":"Texas",
        "Population":46081,
        "lat":29.383845,
        "lon":-94.9027002,
        "eligible":0,
        "name":"Texas City, TX"
    },
    {
        "City":"Summerville",
        "State":"South Carolina",
        "Population":46074,
        "lat":33.0185039,
        "lon":-80.1756481,
        "eligible":0,
        "name":"Summerville, SC"
    },
    {
        "City":"Twin Falls",
        "State":"Idaho",
        "Population":45981,
        "lat":42.5629668,
        "lon":-114.4608711,
        "eligible":0,
        "name":"Twin Falls, ID"
    },
    {
        "City":"Jeffersonville",
        "State":"Indiana",
        "Population":45929,
        "lat":38.2775702,
        "lon":-85.7371847,
        "eligible":0,
        "name":"Jeffersonville, IN"
    },
    {
        "City":"San Jacinto",
        "State":"California",
        "Population":45851,
        "lat":33.7839084,
        "lon":-116.958635,
        "eligible":0,
        "name":"San Jacinto, CA"
    },
    {
        "City":"Madison",
        "State":"Alabama",
        "Population":45799,
        "lat":34.6992579,
        "lon":-86.7483318,
        "eligible":0,
        "name":"Madison, AL"
    },
    {
        "City":"Altoona",
        "State":"Pennsylvania",
        "Population":45796,
        "lat":40.5186809,
        "lon":-78.3947359,
        "eligible":0,
        "name":"Altoona, PA"
    },
    {
        "City":"Columbus",
        "State":"Indiana",
        "Population":45775,
        "lat":39.2014404,
        "lon":-85.9213796,
        "eligible":0,
        "name":"Columbus, IN"
    },
    {
        "City":"Beavercreek",
        "State":"Ohio",
        "Population":45712,
        "lat":39.7092262,
        "lon":-84.0632685,
        "eligible":0,
        "name":"Beavercreek, OH"
    },
    {
        "City":"Apopka",
        "State":"Florida",
        "Population":45587,
        "lat":28.6934076,
        "lon":-81.5322149,
        "eligible":0,
        "name":"Apopka, FL"
    },
    {
        "City":"Elmhurst",
        "State":"Illinois",
        "Population":45556,
        "lat":41.8994744,
        "lon":-87.9403418,
        "eligible":0,
        "name":"Elmhurst, IL"
    },
    {
        "City":"Maricopa",
        "State":"Arizona",
        "Population":45508,
        "lat":33.0581063,
        "lon":-112.0476423,
        "eligible":0,
        "name":"Maricopa, AZ"
    },
    {
        "City":"Farmington",
        "State":"New Mexico",
        "Population":45426,
        "lat":36.7280583,
        "lon":-108.2186856,
        "eligible":0,
        "name":"Farmington, NM"
    },
    {
        "City":"Glenview",
        "State":"Illinois",
        "Population":45417,
        "lat":42.0697509,
        "lon":-87.7878408,
        "eligible":0,
        "name":"Glenview, IL"
    },
    {
        "City":"Cleveland Heights",
        "State":"Ohio",
        "Population":45394,
        "lat":41.5200518,
        "lon":-81.556235,
        "eligible":0,
        "name":"Cleveland Heights, OH"
    },
    {
        "City":"Draper",
        "State":"Utah",
        "Population":45285,
        "lat":40.5246711,
        "lon":-111.8638226,
        "eligible":0,
        "name":"Draper, UT"
    },
    {
        "City":"Lincoln",
        "State":"California",
        "Population":45237,
        "lat":38.891565,
        "lon":-121.2930079,
        "eligible":0,
        "name":"Lincoln, CA"
    },
    {
        "City":"Sierra Vista",
        "State":"Arizona",
        "Population":45129,
        "lat":31.5455001,
        "lon":-110.2772856,
        "eligible":0,
        "name":"Sierra Vista, AZ"
    },
    {
        "City":"Lacey",
        "State":"Washington",
        "Population":44919,
        "lat":47.0342629,
        "lon":-122.8231915,
        "eligible":0,
        "name":"Lacey, WA"
    },
    {
        "City":"Biloxi",
        "State":"Mississippi",
        "Population":44820,
        "lat":30.3960318,
        "lon":-88.8853078,
        "eligible":0,
        "name":"Biloxi, MS"
    },
    {
        "City":"Strongsville",
        "State":"Ohio",
        "Population":44730,
        "lat":41.3144966,
        "lon":-81.83569,
        "eligible":0,
        "name":"Strongsville, OH"
    },
    {
        "City":"Barnstable Town",
        "State":"Massachusetts",
        "Population":44641,
        "lat":41.7003208,
        "lon":-70.3002024,
        "eligible":0,
        "name":"Barnstable Town, MA"
    },
    {
        "City":"Wylie",
        "State":"Texas",
        "Population":44575,
        "lat":33.0151201,
        "lon":-96.5388789,
        "eligible":0,
        "name":"Wylie, TX"
    },
    {
        "City":"Sayreville",
        "State":"New Jersey",
        "Population":44412,
        "lat":40.4594021,
        "lon":-74.360846,
        "eligible":0,
        "name":"Sayreville, NJ"
    },
    {
        "City":"Kannapolis",
        "State":"North Carolina",
        "Population":44359,
        "lat":35.4873613,
        "lon":-80.6217341,
        "eligible":0,
        "name":"Kannapolis, NC"
    },
    {
        "City":"Charlottesville",
        "State":"Virginia",
        "Population":44349,
        "lat":38.0293059,
        "lon":-78.4766781,
        "eligible":0,
        "name":"Charlottesville, VA"
    },
    {
        "City":"Littleton",
        "State":"Colorado",
        "Population":44275,
        "lat":39.613321,
        "lon":-105.0166498,
        "eligible":0,
        "name":"Littleton, CO"
    },
    {
        "City":"Titusville",
        "State":"Florida",
        "Population":44206,
        "lat":28.6122187,
        "lon":-80.8075537,
        "eligible":0,
        "name":"Titusville, FL"
    },
    {
        "City":"Hackensack",
        "State":"New Jersey",
        "Population":44113,
        "lat":40.8859325,
        "lon":-74.0434736,
        "eligible":0,
        "name":"Hackensack, NJ"
    },
    {
        "City":"Newark",
        "State":"California",
        "Population":44096,
        "lat":37.5296593,
        "lon":-122.0402399,
        "eligible":0,
        "name":"Newark, CA"
    },
    {
        "City":"Pittsfield",
        "State":"Massachusetts",
        "Population":44057,
        "lat":42.4500845,
        "lon":-73.2453824,
        "eligible":0,
        "name":"Pittsfield, MA"
    },
    {
        "City":"York",
        "State":"Pennsylvania",
        "Population":43935,
        "lat":39.9625984,
        "lon":-76.727745,
        "eligible":0,
        "name":"York, PA"
    },
    {
        "City":"Lombard",
        "State":"Illinois",
        "Population":43907,
        "lat":41.8800296,
        "lon":-88.0078435,
        "eligible":0,
        "name":"Lombard, IL"
    },
    {
        "City":"Attleboro",
        "State":"Massachusetts",
        "Population":43886,
        "lat":41.9445441,
        "lon":-71.2856082,
        "eligible":0,
        "name":"Attleboro, MA"
    },
    {
        "City":"DeKalb",
        "State":"Illinois",
        "Population":43849,
        "lat":41.9294736,
        "lon":-88.7503647,
        "eligible":0,
        "name":"DeKalb, IL"
    },
    {
        "City":"Blacksburg",
        "State":"Virginia",
        "Population":43609,
        "lat":37.2295733,
        "lon":-80.4139393,
        "eligible":0,
        "name":"Blacksburg, VA"
    },
    {
        "City":"Dublin",
        "State":"Ohio",
        "Population":43607,
        "lat":40.0992294,
        "lon":-83.1140771,
        "eligible":0,
        "name":"Dublin, OH"
    },
    {
        "City":"Haltom City",
        "State":"Texas",
        "Population":43580,
        "lat":32.7995738,
        "lon":-97.2691817,
        "eligible":0,
        "name":"Haltom City, TX"
    },
    {
        "City":"Lompoc",
        "State":"California",
        "Population":43509,
        "lat":34.6391501,
        "lon":-120.4579409,
        "eligible":0,
        "name":"Lompoc, CA"
    },
    {
        "City":"El Centro",
        "State":"California",
        "Population":43363,
        "lat":32.792,
        "lon":-115.5630514,
        "eligible":0,
        "name":"El Centro, CA"
    },
    {
        "City":"Danville",
        "State":"California",
        "Population":43341,
        "lat":37.8215929,
        "lon":-121.9999606,
        "eligible":0,
        "name":"Danville, CA"
    },
    {
        "City":"Jefferson City",
        "State":"Missouri",
        "Population":43330,
        "lat":38.5767017,
        "lon":-92.1735164,
        "eligible":1,
        "name":"Jefferson City, MO"
    },
    {
        "City":"Cutler Bay",
        "State":"Florida",
        "Population":43328,
        "lat":25.5808323,
        "lon":-80.3468593,
        "eligible":0,
        "name":"Cutler Bay, FL"
    },
    {
        "City":"Oakland Park",
        "State":"Florida",
        "Population":43286,
        "lat":26.1723065,
        "lon":-80.1319893,
        "eligible":0,
        "name":"Oakland Park, FL"
    },
    {
        "City":"North Miami Beach",
        "State":"Florida",
        "Population":43250,
        "lat":25.9331488,
        "lon":-80.1625463,
        "eligible":0,
        "name":"North Miami Beach, FL"
    },
    {
        "City":"Freeport",
        "State":"New York",
        "Population":43167,
        "lat":40.6576022,
        "lon":-73.5831835,
        "eligible":0,
        "name":"Freeport, NY"
    },
    {
        "City":"Moline",
        "State":"Illinois",
        "Population":43116,
        "lat":41.5067003,
        "lon":-90.5151342,
        "eligible":0,
        "name":"Moline, IL"
    },
    {
        "City":"Coachella",
        "State":"California",
        "Population":43092,
        "lat":33.6803003,
        "lon":-116.173894,
        "eligible":0,
        "name":"Coachella, CA"
    },
    {
        "City":"Fort Pierce",
        "State":"Florida",
        "Population":43074,
        "lat":27.4467056,
        "lon":-80.3256056,
        "eligible":0,
        "name":"Fort Pierce, FL"
    },
    {
        "City":"Smyrna",
        "State":"Tennessee",
        "Population":43060,
        "lat":35.9828412,
        "lon":-86.5186045,
        "eligible":0,
        "name":"Smyrna, TN"
    },
    {
        "City":"Bountiful",
        "State":"Utah",
        "Population":43023,
        "lat":40.8893895,
        "lon":-111.880771,
        "eligible":0,
        "name":"Bountiful, UT"
    },
    {
        "City":"Fond du Lac",
        "State":"Wisconsin",
        "Population":42970,
        "lat":43.7730448,
        "lon":-88.4470508,
        "eligible":0,
        "name":"Fond du Lac, WI"
    },
    {
        "City":"Everett",
        "State":"Massachusetts",
        "Population":42935,
        "lat":42.40843,
        "lon":-71.0536625,
        "eligible":0,
        "name":"Everett, MA"
    },
    {
        "City":"Danville",
        "State":"Virginia",
        "Population":42907,
        "lat":36.5859718,
        "lon":-79.3950228,
        "eligible":0,
        "name":"Danville, VA"
    },
    {
        "City":"Keller",
        "State":"Texas",
        "Population":42907,
        "lat":32.9341893,
        "lon":-97.229298,
        "eligible":0,
        "name":"Keller, TX"
    },
    {
        "City":"Belleville",
        "State":"Illinois",
        "Population":42895,
        "lat":38.5200504,
        "lon":-89.9839935,
        "eligible":0,
        "name":"Belleville, IL"
    },
    {
        "City":"Bell Gardens",
        "State":"California",
        "Population":42889,
        "lat":33.9652918,
        "lon":-118.1514588,
        "eligible":0,
        "name":"Bell Gardens, CA"
    },
    {
        "City":"Cleveland",
        "State":"Tennessee",
        "Population":42774,
        "lat":35.1595182,
        "lon":-84.8766115,
        "eligible":0,
        "name":"Cleveland, TN"
    },
    {
        "City":"North Lauderdale",
        "State":"Florida",
        "Population":42757,
        "lat":26.217305,
        "lon":-80.2258811,
        "eligible":0,
        "name":"North Lauderdale, FL"
    },
    {
        "City":"Fairfield",
        "State":"Ohio",
        "Population":42635,
        "lat":39.3454673,
        "lon":-84.5603187,
        "eligible":0,
        "name":"Fairfield, OH"
    },
    {
        "City":"Salem",
        "State":"Massachusetts",
        "Population":42544,
        "lat":42.51954,
        "lon":-70.8967155,
        "eligible":0,
        "name":"Salem, MA"
    },
    {
        "City":"Rancho Palos Verdes",
        "State":"California",
        "Population":42448,
        "lat":33.7444613,
        "lon":-118.3870173,
        "eligible":0,
        "name":"Rancho Palos Verdes, CA"
    },
    {
        "City":"San Bruno",
        "State":"California",
        "Population":42443,
        "lat":37.6304904,
        "lon":-122.4110835,
        "eligible":0,
        "name":"San Bruno, CA"
    },
    {
        "City":"Concord",
        "State":"New Hampshire",
        "Population":42419,
        "lat":43.2081366,
        "lon":-71.5375718,
        "eligible":1,
        "name":"Concord, NH"
    },
    {
        "City":"Burlington",
        "State":"Vermont",
        "Population":42284,
        "lat":44.4758825,
        "lon":-73.212072,
        "eligible":1,
        "name":"Burlington, VT"
    },
    {
        "City":"Apex",
        "State":"North Carolina",
        "Population":42214,
        "lat":35.732652,
        "lon":-78.8502856,
        "eligible":0,
        "name":"Apex, NC"
    },
    {
        "City":"Midland",
        "State":"Michigan",
        "Population":42181,
        "lat":43.6155825,
        "lon":-84.2472116,
        "eligible":0,
        "name":"Midland, MI"
    },
    {
        "City":"Altamonte Springs",
        "State":"Florida",
        "Population":42150,
        "lat":28.6611089,
        "lon":-81.3656242,
        "eligible":0,
        "name":"Altamonte Springs, FL"
    },
    {
        "City":"Hutchinson",
        "State":"Kansas",
        "Population":41889,
        "lat":38.0608445,
        "lon":-97.9297743,
        "eligible":0,
        "name":"Hutchinson, KS"
    },
    {
        "City":"Buffalo Grove",
        "State":"Illinois",
        "Population":41778,
        "lat":42.1662831,
        "lon":-87.9631308,
        "eligible":0,
        "name":"Buffalo Grove, IL"
    },
    {
        "City":"Urbandale",
        "State":"Iowa",
        "Population":41776,
        "lat":41.6266555,
        "lon":-93.7121656,
        "eligible":0,
        "name":"Urbandale, IA"
    },
    {
        "City":"State College",
        "State":"Pennsylvania",
        "Population":41757,
        "lat":40.7933949,
        "lon":-77.8600012,
        "eligible":0,
        "name":"State College, PA"
    },
    {
        "City":"Urbana",
        "State":"Illinois",
        "Population":41752,
        "lat":40.1105875,
        "lon":-88.2072697,
        "eligible":0,
        "name":"Urbana, IL"
    },
    {
        "City":"Plainfield",
        "State":"Illinois",
        "Population":41734,
        "lat":41.632223,
        "lon":-88.2120315,
        "eligible":0,
        "name":"Plainfield, IL"
    },
    {
        "City":"Manassas",
        "State":"Virginia",
        "Population":41705,
        "lat":38.7509488,
        "lon":-77.4752667,
        "eligible":0,
        "name":"Manassas, VA"
    },
    {
        "City":"Bartlett",
        "State":"Illinois",
        "Population":41679,
        "lat":41.9950276,
        "lon":-88.1856301,
        "eligible":0,
        "name":"Bartlett, IL"
    },
    {
        "City":"Kearny",
        "State":"New Jersey",
        "Population":41664,
        "lat":40.7684342,
        "lon":-74.1454214,
        "eligible":0,
        "name":"Kearny, NJ"
    },
    {
        "City":"Oro Valley",
        "State":"Arizona",
        "Population":41627,
        "lat":32.3909071,
        "lon":-110.966488,
        "eligible":0,
        "name":"Oro Valley, AZ"
    },
    {
        "City":"Findlay",
        "State":"Ohio",
        "Population":41512,
        "lat":41.04422,
        "lon":-83.6499321,
        "eligible":0,
        "name":"Findlay, OH"
    },
    {
        "City":"Rohnert Park",
        "State":"California",
        "Population":41398,
        "lat":38.3396367,
        "lon":-122.7010984,
        "eligible":0,
        "name":"Rohnert Park, CA"
    },
    {
        "City":"Westfield",
        "State":"Massachusetts",
        "Population":41301,
        "lat":42.1250929,
        "lon":-72.749538,
        "eligible":0,
        "name":"Westfield, MA"
    },
    {
        "City":"Linden",
        "State":"New Jersey",
        "Population":41301,
        "lat":40.6220478,
        "lon":-74.2445902,
        "eligible":0,
        "name":"Linden, NJ"
    },
    {
        "City":"Sumter",
        "State":"South Carolina",
        "Population":41190,
        "lat":33.9204354,
        "lon":-80.3414693,
        "eligible":0,
        "name":"Sumter, SC"
    },
    {
        "City":"Wilkes-Barre",
        "State":"Pennsylvania",
        "Population":41108,
        "lat":41.2459149,
        "lon":-75.8813075,
        "eligible":0,
        "name":"Wilkes-Barre, PA"
    },
    {
        "City":"Woonsocket",
        "State":"Rhode Island",
        "Population":41026,
        "lat":42.0028761,
        "lon":-71.5147839,
        "eligible":0,
        "name":"Woonsocket, RI"
    },
    {
        "City":"Leominster",
        "State":"Massachusetts",
        "Population":41002,
        "lat":42.5250906,
        "lon":-71.759794,
        "eligible":0,
        "name":"Leominster, MA"
    },
    {
        "City":"Shelton",
        "State":"Connecticut",
        "Population":40999,
        "lat":41.3164856,
        "lon":-73.0931641,
        "eligible":0,
        "name":"Shelton, CT"
    },
    {
        "City":"Brea",
        "State":"California",
        "Population":40963,
        "lat":33.9166805,
        "lon":-117.9000604,
        "eligible":0,
        "name":"Brea, CA"
    },
    {
        "City":"Covington",
        "State":"Kentucky",
        "Population":40956,
        "lat":39.0836712,
        "lon":-84.5085536,
        "eligible":0,
        "name":"Covington, KY"
    },
    {
        "City":"Rockwall",
        "State":"Texas",
        "Population":40922,
        "lat":32.9312336,
        "lon":-96.4597089,
        "eligible":0,
        "name":"Rockwall, TX"
    },
    {
        "City":"Riverton",
        "State":"Utah",
        "Population":40921,
        "lat":40.521893,
        "lon":-111.9391023,
        "eligible":0,
        "name":"Riverton, UT"
    },
    {
        "City":"Meridian",
        "State":"Mississippi",
        "Population":40921,
        "lat":32.3643098,
        "lon":-88.703656,
        "eligible":0,
        "name":"Meridian, MS"
    },
    {
        "City":"St. Cloud",
        "State":"Florida",
        "Population":40918,
        "lat":28.2489016,
        "lon":-81.2811801,
        "eligible":0,
        "name":"St. Cloud, FL"
    },
    {
        "City":"Quincy",
        "State":"Illinois",
        "Population":40915,
        "lat":39.9356016,
        "lon":-91.4098726,
        "eligible":0,
        "name":"Quincy, IL"
    },
    {
        "City":"Morgan Hill",
        "State":"California",
        "Population":40836,
        "lat":37.1305012,
        "lon":-121.6543901,
        "eligible":0,
        "name":"Morgan Hill, CA"
    },
    {
        "City":"Warren",
        "State":"Ohio",
        "Population":40768,
        "lat":41.2375569,
        "lon":-80.8184166,
        "eligible":0,
        "name":"Warren, OH"
    },
    {
        "City":"Edmonds",
        "State":"Washington",
        "Population":40727,
        "lat":47.8106521,
        "lon":-122.3773552,
        "eligible":0,
        "name":"Edmonds, WA"
    },
    {
        "City":"Burleson",
        "State":"Texas",
        "Population":40714,
        "lat":32.5420821,
        "lon":-97.3208492,
        "eligible":0,
        "name":"Burleson, TX"
    },
    {
        "City":"Beverly",
        "State":"Massachusetts",
        "Population":40664,
        "lat":42.5584283,
        "lon":-70.880049,
        "eligible":0,
        "name":"Beverly, MA"
    },
    {
        "City":"Mankato",
        "State":"Minnesota",
        "Population":40641,
        "lat":44.1635775,
        "lon":-93.9993996,
        "eligible":0,
        "name":"Mankato, MN"
    },
    {
        "City":"Hagerstown",
        "State":"Maryland",
        "Population":40612,
        "lat":39.6417629,
        "lon":-77.7199932,
        "eligible":0,
        "name":"Hagerstown, MD"
    },
    {
        "City":"Prescott",
        "State":"Arizona",
        "Population":40590,
        "lat":34.5400242,
        "lon":-112.4685025,
        "eligible":0,
        "name":"Prescott, AZ"
    },
    {
        "City":"Campbell",
        "State":"California",
        "Population":40584,
        "lat":37.2871651,
        "lon":-121.9499568,
        "eligible":0,
        "name":"Campbell, CA"
    },
    {
        "City":"Cedar Falls",
        "State":"Iowa",
        "Population":40566,
        "lat":42.5348993,
        "lon":-92.4453161,
        "eligible":0,
        "name":"Cedar Falls, IA"
    },
    {
        "City":"Beaumont",
        "State":"California",
        "Population":40481,
        "lat":33.9294606,
        "lon":-116.977248,
        "eligible":0,
        "name":"Beaumont, CA"
    },
    {
        "City":"La Puente",
        "State":"California",
        "Population":40435,
        "lat":34.0200114,
        "lon":-117.9495083,
        "eligible":0,
        "name":"La Puente, CA"
    },
    {
        "City":"Crystal Lake",
        "State":"Illinois",
        "Population":40388,
        "lat":42.2411344,
        "lon":-88.3161965,
        "eligible":0,
        "name":"Crystal Lake, IL"
    },
    {
        "City":"Fitchburg",
        "State":"Massachusetts",
        "Population":40383,
        "lat":42.5834228,
        "lon":-71.8022955,
        "eligible":0,
        "name":"Fitchburg, MA"
    },
    {
        "City":"Carol Stream",
        "State":"Illinois",
        "Population":40379,
        "lat":41.9125286,
        "lon":-88.1347927,
        "eligible":0,
        "name":"Carol Stream, IL"
    },
    {
        "City":"Hickory",
        "State":"North Carolina",
        "Population":40361,
        "lat":35.7344538,
        "lon":-81.3444573,
        "eligible":0,
        "name":"Hickory, NC"
    },
    {
        "City":"Streamwood",
        "State":"Illinois",
        "Population":40351,
        "lat":42.0255827,
        "lon":-88.1784085,
        "eligible":0,
        "name":"Streamwood, IL"
    },
    {
        "City":"Norwich",
        "State":"Connecticut",
        "Population":40347,
        "lat":41.5242649,
        "lon":-72.0759105,
        "eligible":0,
        "name":"Norwich, CT"
    },
    {
        "City":"Coppell",
        "State":"Texas",
        "Population":40342,
        "lat":32.9545687,
        "lon":-97.0150078,
        "eligible":0,
        "name":"Coppell, TX"
    },
    {
        "City":"San Gabriel",
        "State":"California",
        "Population":40275,
        "lat":34.0961111,
        "lon":-118.1058333,
        "eligible":0,
        "name":"San Gabriel, CA"
    },
    {
        "City":"Holyoke",
        "State":"Massachusetts",
        "Population":40249,
        "lat":42.2042586,
        "lon":-72.6162009,
        "eligible":0,
        "name":"Holyoke, MA"
    },
    {
        "City":"Bentonville",
        "State":"Arkansas",
        "Population":40167,
        "lat":36.3728538,
        "lon":-94.2088172,
        "eligible":0,
        "name":"Bentonville, AR"
    },
    {
        "City":"Peachtree Corners",
        "State":"Georgia",
        "Population":40059,
        "lat":33.9698929,
        "lon":-84.2214551,
        "eligible":0,
        "name":"Peachtree Corners, GA"
    },
    {
        "City":"Florence",
        "State":"Alabama",
        "Population":40059,
        "lat":34.79981,
        "lon":-87.677251,
        "eligible":0,
        "name":"Florence, AL"
    },
    {
        "City":"Brentwood",
        "State":"Tennessee",
        "Population":40021,
        "lat":36.0331164,
        "lon":-86.7827772,
        "eligible":0,
        "name":"Brentwood, TN"
    },
    {
        "City":"Bozeman",
        "State":"Montana",
        "Population":39860,
        "lat":45.6769979,
        "lon":-111.0429339,
        "eligible":0,
        "name":"Bozeman, MT"
    },
    {
        "City":"New Berlin",
        "State":"Wisconsin",
        "Population":39834,
        "lat":42.9764027,
        "lon":-88.1084224,
        "eligible":0,
        "name":"New Berlin, WI"
    },
    {
        "City":"Goose Creek",
        "State":"South Carolina",
        "Population":39823,
        "lat":32.9810059,
        "lon":-80.0325867,
        "eligible":0,
        "name":"Goose Creek, SC"
    },
    {
        "City":"Huntsville",
        "State":"Texas",
        "Population":39795,
        "lat":30.7235263,
        "lon":-95.5507771,
        "eligible":0,
        "name":"Huntsville, TX"
    },
    {
        "City":"Prescott Valley",
        "State":"Arizona",
        "Population":39791,
        "lat":34.6100243,
        "lon":-112.315721,
        "eligible":0,
        "name":"Prescott Valley, AZ"
    },
    {
        "City":"Maplewood",
        "State":"Minnesota",
        "Population":39765,
        "lat":44.9530215,
        "lon":-92.9952153,
        "eligible":0,
        "name":"Maplewood, MN"
    },
    {
        "City":"Romeoville",
        "State":"Illinois",
        "Population":39650,
        "lat":41.6475306,
        "lon":-88.0895061,
        "eligible":0,
        "name":"Romeoville, IL"
    },
    {
        "City":"Duncanville",
        "State":"Texas",
        "Population":39605,
        "lat":32.6518004,
        "lon":-96.9083366,
        "eligible":0,
        "name":"Duncanville, TX"
    },
    {
        "City":"Atlantic City",
        "State":"New Jersey",
        "Population":39551,
        "lat":39.3642834,
        "lon":-74.4229266,
        "eligible":0,
        "name":"Atlantic City, NJ"
    },
    {
        "City":"Clovis",
        "State":"New Mexico",
        "Population":39508,
        "lat":34.4047987,
        "lon":-103.2052272,
        "eligible":0,
        "name":"Clovis, NM"
    },
    {
        "City":"The Colony",
        "State":"Texas",
        "Population":39458,
        "lat":33.0806083,
        "lon":-96.8928309,
        "eligible":0,
        "name":"The Colony, TX"
    },
    {
        "City":"Culver City",
        "State":"California",
        "Population":39428,
        "lat":34.0211224,
        "lon":-118.3964665,
        "eligible":0,
        "name":"Culver City, CA"
    },
    {
        "City":"Marlborough",
        "State":"Massachusetts",
        "Population":39414,
        "lat":42.3459271,
        "lon":-71.5522874,
        "eligible":0,
        "name":"Marlborough, MA"
    },
    {
        "City":"Hilton Head Island",
        "State":"South Carolina",
        "Population":39412,
        "lat":32.216316,
        "lon":-80.752608,
        "eligible":0,
        "name":"Hilton Head Island, SC"
    },
    {
        "City":"Moorhead",
        "State":"Minnesota",
        "Population":39398,
        "lat":46.8737648,
        "lon":-96.7678039,
        "eligible":0,
        "name":"Moorhead, MN"
    },
    {
        "City":"Calexico",
        "State":"California",
        "Population":39389,
        "lat":32.6789476,
        "lon":-115.4988834,
        "eligible":0,
        "name":"Calexico, CA"
    },
    {
        "City":"Bullhead City",
        "State":"Arizona",
        "Population":39383,
        "lat":35.1359386,
        "lon":-114.5285981,
        "eligible":0,
        "name":"Bullhead City, AZ"
    },
    {
        "City":"Germantown",
        "State":"Tennessee",
        "Population":39375,
        "lat":35.0867577,
        "lon":-89.8100858,
        "eligible":0,
        "name":"Germantown, TN"
    },
    {
        "City":"La Quinta",
        "State":"California",
        "Population":39331,
        "lat":33.6633573,
        "lon":-116.3100095,
        "eligible":0,
        "name":"La Quinta, CA"
    },
    {
        "City":"Lancaster",
        "State":"Ohio",
        "Population":39325,
        "lat":39.7136754,
        "lon":-82.5993294,
        "eligible":0,
        "name":"Lancaster, OH"
    },
    {
        "City":"Wausau",
        "State":"Wisconsin",
        "Population":39309,
        "lat":44.9591352,
        "lon":-89.6301221,
        "eligible":0,
        "name":"Wausau, WI"
    },
    {
        "City":"Sherman",
        "State":"Texas",
        "Population":39296,
        "lat":33.6356618,
        "lon":-96.6088805,
        "eligible":0,
        "name":"Sherman, TX"
    },
    {
        "City":"Ocoee",
        "State":"Florida",
        "Population":39172,
        "lat":28.5691677,
        "lon":-81.5439619,
        "eligible":0,
        "name":"Ocoee, FL"
    },
    {
        "City":"Shakopee",
        "State":"Minnesota",
        "Population":39167,
        "lat":44.7973962,
        "lon":-93.5272861,
        "eligible":0,
        "name":"Shakopee, MN"
    },
    {
        "City":"Woburn",
        "State":"Massachusetts",
        "Population":39083,
        "lat":42.4792618,
        "lon":-71.1522765,
        "eligible":0,
        "name":"Woburn, MA"
    },
    {
        "City":"Bremerton",
        "State":"Washington",
        "Population":39056,
        "lat":47.5673202,
        "lon":-122.6329356,
        "eligible":0,
        "name":"Bremerton, WA"
    },
    {
        "City":"Rock Island",
        "State":"Illinois",
        "Population":38877,
        "lat":41.5094771,
        "lon":-90.5787476,
        "eligible":0,
        "name":"Rock Island, IL"
    },
    {
        "City":"Muskogee",
        "State":"Oklahoma",
        "Population":38863,
        "lat":35.7478769,
        "lon":-95.3696909,
        "eligible":0,
        "name":"Muskogee, OK"
    },
    {
        "City":"Cape Girardeau",
        "State":"Missouri",
        "Population":38816,
        "lat":37.3058839,
        "lon":-89.5181476,
        "eligible":0,
        "name":"Cape Girardeau, MO"
    },
    {
        "City":"Annapolis",
        "State":"Maryland",
        "Population":38722,
        "lat":38.9784453,
        "lon":-76.4921829,
        "eligible":1,
        "name":"Annapolis, MD"
    },
    {
        "City":"Greenacres",
        "State":"Florida",
        "Population":38696,
        "lat":26.6276276,
        "lon":-80.1353896,
        "eligible":0,
        "name":"Greenacres, FL"
    },
    {
        "City":"Ormond Beach",
        "State":"Florida",
        "Population":38661,
        "lat":29.2858129,
        "lon":-81.0558894,
        "eligible":0,
        "name":"Ormond Beach, FL"
    },
    {
        "City":"Hallandale Beach",
        "State":"Florida",
        "Population":38632,
        "lat":25.9812024,
        "lon":-80.148379,
        "eligible":0,
        "name":"Hallandale Beach, FL"
    },
    {
        "City":"Stanton",
        "State":"California",
        "Population":38623,
        "lat":33.8025155,
        "lon":-117.9931165,
        "eligible":0,
        "name":"Stanton, CA"
    },
    {
        "City":"Puyallup",
        "State":"Washington",
        "Population":38609,
        "lat":47.1853785,
        "lon":-122.2928974,
        "eligible":0,
        "name":"Puyallup, WA"
    },
    {
        "City":"Pacifica",
        "State":"California",
        "Population":38606,
        "lat":37.6138253,
        "lon":-122.4869194,
        "eligible":0,
        "name":"Pacifica, CA"
    },
    {
        "City":"Hanover Park",
        "State":"Illinois",
        "Population":38510,
        "lat":41.9994722,
        "lon":-88.1450735,
        "eligible":0,
        "name":"Hanover Park, IL"
    },
    {
        "City":"Hurst",
        "State":"Texas",
        "Population":38448,
        "lat":32.8234621,
        "lon":-97.1705678,
        "eligible":0,
        "name":"Hurst, TX"
    },
    {
        "City":"Lima",
        "State":"Ohio",
        "Population":38355,
        "lat":40.742551,
        "lon":-84.1052256,
        "eligible":0,
        "name":"Lima, OH"
    },
    {
        "City":"Marana",
        "State":"Arizona",
        "Population":38290,
        "lat":32.436381,
        "lon":-111.2224422,
        "eligible":0,
        "name":"Marana, AZ"
    },
    {
        "City":"Carpentersville",
        "State":"Illinois",
        "Population":38241,
        "lat":42.1211364,
        "lon":-88.2578582,
        "eligible":0,
        "name":"Carpentersville, IL"
    },
    {
        "City":"Oakley",
        "State":"California",
        "Population":38194,
        "lat":37.9974219,
        "lon":-121.7124536,
        "eligible":0,
        "name":"Oakley, CA"
    },
    {
        "City":"Huber Heights",
        "State":"Ohio",
        "Population":38142,
        "lat":39.843947,
        "lon":-84.1246608,
        "eligible":0,
        "name":"Huber Heights, OH"
    },
    {
        "City":"Lancaster",
        "State":"Texas",
        "Population":38071,
        "lat":32.5920798,
        "lon":-96.7561082,
        "eligible":0,
        "name":"Lancaster, TX"
    },
    {
        "City":"Montclair",
        "State":"California",
        "Population":38027,
        "lat":34.0775104,
        "lon":-117.6897776,
        "eligible":0,
        "name":"Montclair, CA"
    },
    {
        "City":"Wheeling",
        "State":"Illinois",
        "Population":38015,
        "lat":42.1391927,
        "lon":-87.9289591,
        "eligible":0,
        "name":"Wheeling, IL"
    },
    {
        "City":"Brookfield",
        "State":"Wisconsin",
        "Population":37999,
        "lat":43.0605671,
        "lon":-88.1064787,
        "eligible":0,
        "name":"Brookfield, WI"
    },
    {
        "City":"Park Ridge",
        "State":"Illinois",
        "Population":37839,
        "lat":42.0111412,
        "lon":-87.8406192,
        "eligible":0,
        "name":"Park Ridge, IL"
    },
    {
        "City":"Florence",
        "State":"South Carolina",
        "Population":37792,
        "lat":34.1954331,
        "lon":-79.7625625,
        "eligible":0,
        "name":"Florence, SC"
    },
    {
        "City":"Roy",
        "State":"Utah",
        "Population":37733,
        "lat":41.1616108,
        "lon":-112.0263313,
        "eligible":0,
        "name":"Roy, UT"
    },
    {
        "City":"Winter Garden",
        "State":"Florida",
        "Population":37711,
        "lat":28.5652787,
        "lon":-81.5861847,
        "eligible":0,
        "name":"Winter Garden, FL"
    },
    {
        "City":"Chelsea",
        "State":"Massachusetts",
        "Population":37670,
        "lat":42.3917638,
        "lon":-71.0328284,
        "eligible":0,
        "name":"Chelsea, MA"
    },
    {
        "City":"Valley Stream",
        "State":"New York",
        "Population":37659,
        "lat":40.6642699,
        "lon":-73.7084645,
        "eligible":0,
        "name":"Valley Stream, NY"
    },
    {
        "City":"Spartanburg",
        "State":"South Carolina",
        "Population":37647,
        "lat":34.9495672,
        "lon":-81.9320482,
        "eligible":0,
        "name":"Spartanburg, SC"
    },
    {
        "City":"Lake Oswego",
        "State":"Oregon",
        "Population":37610,
        "lat":45.4206749,
        "lon":-122.6706498,
        "eligible":0,
        "name":"Lake Oswego, OR"
    },
    {
        "City":"Friendswood",
        "State":"Texas",
        "Population":37587,
        "lat":29.5293998,
        "lon":-95.2010447,
        "eligible":0,
        "name":"Friendswood, TX"
    },
    {
        "City":"Westerville",
        "State":"Ohio",
        "Population":37530,
        "lat":40.1261743,
        "lon":-82.9290696,
        "eligible":0,
        "name":"Westerville, OH"
    },
    {
        "City":"Northglenn",
        "State":"Colorado",
        "Population":37499,
        "lat":39.8961821,
        "lon":-104.9811468,
        "eligible":0,
        "name":"Northglenn, CO"
    },
    {
        "City":"Phenix City",
        "State":"Alabama",
        "Population":37498,
        "lat":32.4709761,
        "lon":-85.0007653,
        "eligible":0,
        "name":"Phenix City, AL"
    },
    {
        "City":"Grove City",
        "State":"Ohio",
        "Population":37490,
        "lat":39.8814519,
        "lon":-83.0929644,
        "eligible":0,
        "name":"Grove City, OH"
    },
    {
        "City":"Texarkana",
        "State":"Texas",
        "Population":37442,
        "lat":33.425125,
        "lon":-94.0476882,
        "eligible":0,
        "name":"Texarkana, TX"
    },
    {
        "City":"Addison",
        "State":"Illinois",
        "Population":37385,
        "lat":41.931696,
        "lon":-87.9889556,
        "eligible":0,
        "name":"Addison, IL"
    },
    {
        "City":"Dover",
        "State":"Delaware",
        "Population":37366,
        "lat":39.158168,
        "lon":-75.5243682,
        "eligible":1,
        "name":"Dover, DE"
    },
    {
        "City":"Lincoln Park",
        "State":"Michigan",
        "Population":37313,
        "lat":42.2505943,
        "lon":-83.1785361,
        "eligible":0,
        "name":"Lincoln Park, MI"
    },
    {
        "City":"Calumet City",
        "State":"Illinois",
        "Population":37240,
        "lat":41.6155909,
        "lon":-87.5294871,
        "eligible":0,
        "name":"Calumet City, IL"
    },
    {
        "City":"Muskegon",
        "State":"Michigan",
        "Population":37213,
        "lat":43.2341813,
        "lon":-86.2483921,
        "eligible":0,
        "name":"Muskegon, MI"
    },
    {
        "City":"Aventura",
        "State":"Florida",
        "Population":37199,
        "lat":25.9564812,
        "lon":-80.1392121,
        "eligible":0,
        "name":"Aventura, FL"
    },
    {
        "City":"Martinez",
        "State":"California",
        "Population":37165,
        "lat":38.0193657,
        "lon":-122.1341321,
        "eligible":0,
        "name":"Martinez, CA"
    },
    {
        "City":"Greenfield",
        "State":"Wisconsin",
        "Population":37159,
        "lat":42.9614039,
        "lon":-88.0125865,
        "eligible":0,
        "name":"Greenfield, WI"
    },
    {
        "City":"Apache Junction",
        "State":"Arizona",
        "Population":37130,
        "lat":33.4150485,
        "lon":-111.5495777,
        "eligible":0,
        "name":"Apache Junction, AZ"
    },
    {
        "City":"Monrovia",
        "State":"California",
        "Population":37101,
        "lat":34.1442616,
        "lon":-118.0019482,
        "eligible":0,
        "name":"Monrovia, CA"
    },
    {
        "City":"Weslaco",
        "State":"Texas",
        "Population":37093,
        "lat":26.1595194,
        "lon":-97.9908366,
        "eligible":0,
        "name":"Weslaco, TX"
    },
    {
        "City":"Keizer",
        "State":"Oregon",
        "Population":37064,
        "lat":44.9901194,
        "lon":-123.0262077,
        "eligible":0,
        "name":"Keizer, OR"
    },
    {
        "City":"Spanish Fork",
        "State":"Utah",
        "Population":36956,
        "lat":40.114955,
        "lon":-111.654923,
        "eligible":0,
        "name":"Spanish Fork, UT"
    },
    {
        "City":"Beloit",
        "State":"Wisconsin",
        "Population":36888,
        "lat":42.5083482,
        "lon":-89.0317765,
        "eligible":0,
        "name":"Beloit, WI"
    },
    {
        "City":"Panama City",
        "State":"Florida",
        "Population":36877,
        "lat":30.1588129,
        "lon":-85.6602058,
        "eligible":0,
        "name":"Panama City, FL"
    },
    {
        "City":"Juneau",
        "State":"Alaska",
        "Population":32531,
        "lat":58.3019,
        "lon":-134.4197,
        "eligible":1,
        "name":"Juneau, AK"
    },
    {
        "City":"Frankfort",
        "State":"Kentucky",
        "Population":27535,
        "lat":38.2009,
        "lon":-84.9733,
        "eligible":1,
        "name":"Frankfort, KY"
    },
    {
        "City":"Augusta",
        "State":"Maine",
        "Population":18772,
        "lat":44.3106,
        "lon":-69.7795,
        "eligible":1,
        "name":"Augusta, ME"
    },
    {
        "City":"Helena",
        "State":"Montana",
        "Population":29600,
        "lat":46.5891,
        "lon":-112.0391,
        "eligible":1,
        "name":"Helena, MT"
    },
    {
        "City":"Montpelier",
        "State":"Vermont",
        "Population":7712,
        "lat":44.2601,
        "lon":-72.5754,
        "eligible":1,
        "name":"Montpelier, VT"
    },
    {
        "City":"Pierre",
        "State":"South Dakota",
        "Population":13983,
        "lat":44.3668,
        "lon":-100.3538,
        "eligible":1,
        "name":"Pierre, SD"
    }
]

// keep track of ambiguous city names
var duplicates = {}
const names = []
const eligibleCities = []
for (let i = 0; i < CITIES.length; i++) {
    let city = CITIES[i].City.toLowerCase()
    if (city in duplicates) {
        duplicates[city] = true
    }
    else {
        duplicates[city] = false
    }
    names.push(CITIES[i].name)

    if (CITIES[i].eligible) {
        eligibleCities.push(CITIES[i])
    }
}

const sequence = [34, 145, 16, 65, 30, 126, 115, 120, 97, 53, 24, 124, 7, 99, 110, 155, 0, 114, 68, 58, 151, 26, 81, 5, 6, 138, 2, 55, 108, 135, 56, 112, 141, 59, 88, 117, 74, 106, 142, 164, 25, 47, 161, 75, 30, 85, 128, 129, 48, 77, 72, 150, 127, 100, 8, 122, 62, 103, 44, 93, 140, 95, 22, 112, 130, 27, 41, 133, 94, 125, 7, 120, 11, 78, 157, 151, 148, 165, 43, 128, 58, 3, 51, 138, 59, 131, 88, 147, 90, 117, 68, 140, 155, 1, 98, 33, 132, 143, 52, 109, 14, 123, 93, 145, 141, 129, 105, 124, 91, 106, 0, 137, 159, 156, 84, 153, 7, 58, 162, 45, 149, 46, 23, 65, 8, 18, 21, 4, 115, 3, 71, 63, 68, 28, 47, 88, 74, 17, 42, 40, 135, 43, 69, 165, 75, 116, 82, 127, 121, 29, 6, 79, 98, 87, 107, 48, 66, 27, 64, 130, 53, 155, 110, 5, 57, 4, 101, 37, 9, 41, 114, 129, 109, 139, 56, 161, 132, 115, 134, 7, 147, 82, 15, 76, 32, 54, 12, 78, 18, 19, 79, 40, 106, 144, 64, 33, 2, 143, 9, 151, 55, 145, 117, 43, 159, 130, 96, 51, 88, 25, 52, 146, 110, 49, 126, 26, 99, 75, 129, 127, 4, 83, 156, 102, 72, 40, 144, 34, 86, 109, 54, 68, 24, 97, 140, 136, 124, 60, 16, 10, 21, 43, 42, 137, 85, 153, 65, 94, 87, 29, 74, 154, 125, 148, 141, 26, 82, 104, 18, 37, 32, 157, 150, 96, 19, 146, 140, 57, 144, 20, 68, 93, 75, 136, 117, 70, 27, 11, 3, 23, 105, 29, 10, 48, 61, 107, 41, 115, 42, 40, 26, 111, 138, 64, 122, 80, 25, 53, 81, 6, 2, 152, 100, 102, 16, 153, 116, 28, 55, 158, 120, 91, 66, 46, 78, 50, 63, 92, 20, 71, 22, 114, 23, 147, 164, 86, 58, 99, 10, 83, 47, 81, 148, 77, 62, 85, 25, 139, 156, 152, 56, 5, 102, 18, 68, 141, 19, 162, 2, 74, 91, 126, 120, 39, 128, 130, 44, 45, 38, 36, 78, 27, 131, 154, 75, 32, 52, 139, 8, 80, 159, 76, 110, 137, 40, 12, 63, 64, 16, 114, 140, 138, 112, 116, 2, 101, 86, 43, 66, 124, 6, 165, 106, 146, 4, 15, 90, 148, 35, 151, 32, 70, 144, 102, 44, 156, 22, 59, 1, 45, 135, 81, 128, 112, 163, 57, 61, 80, 126, 122, 105, 86, 143, 165, 56, 12, 18, 130, 94, 40, 52, 79, 76, 141, 95, 42, 118, 152, 21, 31, 155, 131, 146, 96, 45, 39, 64, 109, 55, 145, 13, 126, 100, 163, 89, 98, 139, 10, 134, 23, 65, 160, 25, 68, 35, 157, 20, 113, 61, 97, 110, 101, 42, 83, 112, 32, 159, 124, 54, 30, 153, 136, 104, 75, 71, 63, 96, 143, 1, 48, 135, 148, 5, 7, 160, 155, 62, 66, 52, 44, 72, 37, 138, 51, 69, 79, 149, 64, 114, 43, 139, 91, 125, 107, 31, 53, 146, 98, 27, 6, 30, 145, 3, 75, 34, 19, 128, 95, 111, 135, 82, 0, 113, 115, 89, 78, 138, 102, 86, 126, 28, 165, 96, 97, 52, 142, 71, 162, 153, 130, 50, 118, 132, 104, 43, 158, 92, 134, 99, 148, 109, 103, 159, 149, 17, 63, 163, 74, 161, 5, 39, 101, 69, 45, 18, 154, 2, 89, 67, 105, 139, 77, 38, 118, 66, 124, 43, 119, 130, 11, 25, 151, 108, 90, 17, 113, 42, 129, 41, 23, 102, 162, 70, 53, 135, 60, 85, 68, 19, 133, 94, 142, 12, 76, 69, 91, 156, 59, 100, 143, 44, 123, 66, 84, 56, 62, 7, 159, 103, 81, 110, 63, 48, 18, 160, 42, 148, 113, 37, 155, 67, 117, 134, 41, 35, 112, 92, 79, 102, 61, 29, 52, 78, 17, 27, 58, 101, 82, 126, 25, 47, 11, 14, 152, 5, 55, 8, 135, 156, 113, 87, 70, 30, 44, 24, 56, 59, 115, 96, 43, 60, 72, 118, 140, 148, 99, 54, 66, 84, 127, 151, 28, 20, 11, 3, 1, 122, 81, 98, 73, 50, 102, 40, 165, 38, 7, 37, 138, 14, 144, 97, 65, 33, 118, 77, 9, 137, 15, 134, 10, 70, 30, 110, 23, 48, 127, 163, 71, 49, 114, 99, 84, 161, 68, 66, 164, 162, 62, 150, 151, 44, 89, 109, 154, 143, 133, 90, 140, 105, 137, 51, 108, 17, 156, 18, 64, 45, 24, 38, 15, 52, 11, 13, 163, 23, 131, 120, 128, 94, 25, 80, 10, 32, 136, 8, 113, 101, 114, 6, 134, 69, 83, 21, 77, 98, 14, 66, 33, 97, 29, 24, 108, 62, 142, 52, 84, 86, 130, 100, 149, 123, 26, 143, 148, 133, 137, 7, 74, 40, 51, 94, 99, 83, 104, 88, 32, 147, 16, 11, 76, 136, 80, 106, 81, 90, 69, 128, 2, 134, 31, 38, 146, 17, 115, 71, 122, 116, 93, 97, 20, 148, 14, 34, 12, 125, 64, 62, 86, 92, 164, 94, 103, 78, 118, 153, 87, 136, 129, 42, 7, 37, 56, 144, 28, 47, 105, 158, 25, 139, 68, 27, 52, 66, 17, 161, 146, 134, 20, 18, 55, 164, 44, 130, 110, 5, 151, 94, 124, 72, 51, 153, 126, 60, 108, 115, 93, 48, 123, 65, 104, 2, 136, 97, 131, 19, 103, 157, 148, 149, 10, 90, 117, 1, 76, 164, 138, 30, 77, 80, 139, 165, 146, 141, 72, 134, 105, 132, 154, 161, 78, 115, 33, 129, 113, 150, 35, 140, 41, 64, 162, 2, 108, 144, 9, 94, 107, 102, 4, 23, 1, 98, 68, 118, 69, 95, 123, 86, 99, 116, 29, 90, 37, 106, 44, 66, 32, 150, 73, 105, 131, 70, 110, 85, 124, 55, 125, 102, 108, 23, 16, 33, 52, 38, 58, 6, 26, 64, 39, 122, 25, 47, 0, 22, 109, 156, 13, 140, 136, 88, 12]
