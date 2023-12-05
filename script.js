function generarEnlace() {
    var origen = document.getElementById("origen").value.toLowerCase();
    var destino = document.getElementById("destino").value.toLowerCase();

    // Mapeo de códigos a nombres de ciudades
    var ciudades = {
        "stgo": "santiago",
        "conc": "concepcion",
        "tlca": "talca",
        "cqbo": "coquimbo",
        "srna": "la serena",
        "aric": "arica",
        "iqui": "iquique",
        "cpo": "copiapo",
        "rgua": "rancagua",
        "chll": "chillan",
        "lsag": "los angeles",
        "tmco": "temuco",
        "mott": "puerto montt",
        "vlda": "valdivia",
        "rnco": "lago ranco",
"salv": "el salvador",
"pcon": "pucon",
"zapa": "zapallar",
"ppdo": "papudo",
"qtro": "quintero",
"ccon": "concon",
"cgua": "cachagua",
"rngo": "rngo",
"vina": "vina del mar",
"viña": "vina del mar",
"vial": "villa alemana",
"conc": "concepcion",
"quil": "quilpue",
"crco": "curico",
"vlpo": "valparaiso",
"osor": "osorno",
"frut": "frutillar",
"pvra": "puerto varas",
"vall": "vallenar",
"antf": "antofagasta",
"tocp": "tocopilla",
"pmte": "pozo al monte",
"dalm": "diego de almagro",
"sgda": "sierra gorda",
"plmu": "pichilemu",
"cale": "la calera",
"cbdo": "cabildo",
"anto": "san antonio",
"ande": "los andes",
"cbro": "cabrero",
"laja": "laja",
"yumb": "yumbel",
"clma": "calama",
"thno": "talcahuano",
"lago": "los lagos",
"alga": "algarrobo",
"tabo": "el tabo",
"qsco": "el quisco",
"clli": "collipulli",
"erci": "ercilla",
"vict": "victoria",
"ctin": "curacautin",
"ango": "angol",
"sjmq": "san jose de la mariq",
"gorb": "gorbea",
"ptru": "pitrufquen",
"unio": "la union",
"laut": "lautaro",
"cdga": "codegua",

        "futr": "futrono"
    };

    // Reemplazar códigos por nombres de ciudades
    if (ciudades.hasOwnProperty(origen)) {
        origen = ciudades[origen];
    }
    if (ciudades.hasOwnProperty(destino)) {
        destino = ciudades[destino];
    }

    if (origen && destino) {
        var enlace = `https://busqueda.turbus.cl/Turbusqueda-war/itineraryselect.jsp?ciudadOrigen=${encodeURIComponent(origen)}&ciudadDestino=${encodeURIComponent(destino)}`;
        window.open(enlace, "_blank");
    } else {
        alert("Por favor, ingresa tanto el origen como el destino.");
    }
}