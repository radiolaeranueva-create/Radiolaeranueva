export type SourceItem = {
  name: string;
  url: string;
};

export type SportScope = {
  scope: string;
  sources: SourceItem[];
};

export type SportItem = {
  name: string;
  slug: string;
  scopes: SportScope[];
};

export type SportsGroup = {
  name: string;
  sports: SportItem[];
};

export const sportsGroups: SportsGroup[] = [
  {
    name: "Deportes de equipo",
    sports: [
      {
        name: "Baloncesto",
        slug: "baloncesto",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIBA", url: "https://www.fiba.basketball/en/news" }] },
          { scope: "nacional", sources: [{ name: "FEB", url: "https://www.feb.es/ultima-hora.aspx" }] },
          { scope: "autonomico", sources: [{ name: "FBM", url: "https://fbm.es/noticias-73/Actualidad/Noticias" }, { name: "FBM Clubs", url: "https://fbm.es/noticias-77/Clubs/Noticias" }] },
        ],
      },
      {
        name: "Balonmano",
        slug: "balonmano",
        scopes: [
          { scope: "internacional", sources: [{ name: "IHF", url: "https://www.ihf.info/media-center/news" }] },
          { scope: "europeo", sources: [{ name: "EHF", url: "https://www.eurohandball.com/" }] },
          { scope: "nacional", sources: [{ name: "RFEBM", url: "https://www.rfebm.com/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "FMBalonmano", url: "https://www.fmbalonmano.com/" }] },
        ],
      },
      {
        name: "Béisbol y Sóftbol",
        slug: "beisbol-y-softbol",
        scopes: [
          { scope: "internacional", sources: [{ name: "WBSC", url: "https://www.wbsc.org/es" }] },
          { scope: "europeo", sources: [{ name: "WBSC Europe", url: "https://www.wbsceurope.org/en/news" }] },
          { scope: "nacional", sources: [{ name: "RFEBS", url: "https://www.rfebs.es/es/news" }] },
          { scope: "autonomico", sources: [{ name: "FMBs", url: "https://fmbs.es/category/noticias/" }] },
        ],
      },
      {
        name: "Fútbol",
        slug: "futbol",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIFA", url: "https://www.fifa.com/es/news" }] },
          { scope: "europeo", sources: [{ name: "UEFA", url: "https://es.uefa.com/news-media/news/" }, { name: "UEFA Youth League", url: "https://es.uefa.com/uefayouthleague/news/" }] },
          { scope: "nacional", sources: [{ name: "RFEF", url: "https://rfef.es/es/noticias" }, { name: "RFEF División de Honor Juvenil", url: "https://rfef.es/es/competiciones/division-de-honor-juvenil" }, { name: "RFEF Torneo Juvenil Femenino", url: "https://rfef.es/es/competiciones/torneo-juvenil-femenino" }, { name: "RFEF Sub-18", url: "https://rfef.es/es/selecciones/seleccion-sub-18" }, { name: "RFEF Sub-17", url: "https://rfef.es/es/selecciones/seleccion-sub-17" }, { name: "RFEF Sub-15", url: "https://rfef.es/es/selecciones/seleccion-sub-15" }, { name: "RFEF Sub-14", url: "https://rfef.es/es/selecciones/seleccion-sub-14" }, { name: "RFEF Sub-17 Femenina", url: "https://rfef.es/es/selecciones/seleccion-sub-17-femenina" }, { name: "RFEF Sub-16 Femenina", url: "https://rfef.es/es/selecciones/seleccion-sub-16-femenina" }, { name: "RFEF Otras Selecciones Masculina", url: "https://rfef.es/es/selecciones/otras-futbol-sala-masculina" }, { name: "RFEF Otras Selecciones Femenina", url: "https://rfef.es/es/selecciones/otras-futbol-sala-femenina" }] },
          { scope: "autonomico", sources: [{ name: "RFFM Actualidad", url: "https://www.rffm.es/actualidad/federacion" }, { name: "RFFM Debutantes", url: "https://www.rffm.es/actualidad/debutantes" }] },
        ],
      },
      {
        name: "Rugby",
        slug: "rugby",
        scopes: [
          { scope: "internacional", sources: [{ name: "World Rugby", url: "https://www.world.rugby/news" }] },
          { scope: "europeo", sources: [{ name: "Rugby Europe", url: "https://www.rugbyeurope.eu/news" }] },
          { scope: "nacional", sources: [{ name: "FER", url: "https://ferugby.es/category/ferugby/" }] },
          { scope: "autonomico", sources: [{ name: "Rugby Madrid Convocatorias", url: "https://rugbymadrid.com/category/convocatorias/" }, { name: "Rugby Madrid Formación", url: "https://rugbymadrid.com/category/formacion/" }] },
        ],
      },
      {
        name: "Voleibol",
        slug: "voleibol",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIVB", url: "https://www.fivb.com/es/noticias/" }] },
          { scope: "europeo", sources: [{ name: "CEV", url: "https://www.cev.eu/news/" }] },
          { scope: "nacional", sources: [{ name: "ESVOLEY", url: "https://esvoley.es/comunicacion/noticias" }] },
          { scope: "autonomico", sources: [{ name: "FM Voley", url: "https://fmvoley.com/noticias" }] },
        ],
      },
    ],
  },
  {
    name: "Menú de combate",
    sports: [
      {
        name: "Boxeo",
        slug: "boxeo",
        scopes: [
          { scope: "internacional", sources: [{ name: "IBA", url: "https://www.iba.sport/news/" }] },
          { scope: "nacional", sources: [{ name: "FEBOXEO", url: "https://feboxeo.es/category/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "FEDMAD Boxeo", url: "https://fedmadboxeo.es/noticias/" }] },
        ],
      },
      {
        name: "Judo",
        slug: "judo",
        scopes: [
          { scope: "internacional", sources: [{ name: "IJF", url: "https://www.ijf.org/news" }] },
          { scope: "europeo", sources: [{ name: "EJU", url: "https://www.eju.net/news/" }] },
          { scope: "nacional", sources: [{ name: "RFE Judo", url: "https://www.rfejudo.com/category/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "FM Judo", url: "https://fmjudo.es/noticias/" }] },
        ],
      },
      {
        name: "Karate",
        slug: "karate",
        scopes: [
          { scope: "internacional", sources: [{ name: "WKF", url: "https://www.wkf.net/news-center" }] },
          { scope: "europeo", sources: [{ name: "European Karate Federation", url: "https://2022.europeankaratefederation.net/structure/" }] },
          { scope: "nacional", sources: [{ name: "RFEK", url: "https://rfek.es/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "FM Karate", url: "https://www.fmkarate.com/noticias/noticias-generales/" }] },
        ],
      },
      {
        name: "Muay Thai",
        slug: "muay-thai",
        scopes: [
          { scope: "internacional", sources: [{ name: "Federación Internacional Muay Thai", url: "https://federacionmuaythai.com/" }] },
          { scope: "nacional", sources: [{ name: "FEMT", url: "https://femt.es/blog/" }] },
          { scope: "autonomico", sources: [{ name: "FEMAKM", url: "https://femakm.es/equipo-de-competicion/#page-content" }] },
        ],
      },
      {
        name: "Taekwondo",
        slug: "taekwondo",
        scopes: [
          { scope: "europeo", sources: [{ name: "European Taekwondo Union", url: "https://europetaekwondo.org/news/" }] },
          { scope: "nacional", sources: [{ name: "FETA", url: "https://www.fetaekwondo.net/noticias" }] },
          { scope: "autonomico", sources: [{ name: "FMTaekwondo", url: "https://fmtaekwondo.es/eventos/#fmt-calendario" }] },
        ],
      },
    ],
  },
  {
    name: "Deportes con armas",
    sports: [
      {
        name: "Esgrima",
        slug: "esgrima",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIE", url: "https://fie.org/news" }] },
          { scope: "europeo", sources: [{ name: "EFC", url: "https://fencing-efc.eu/news" }] },
          { scope: "nacional", sources: [{ name: "Esgrima España", url: "https://esgrima.es/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "FM Esgrima", url: "https://fmesgrima.es/noticias/" }] },
        ],
      },
      {
        name: "Tiro con Arco",
        slug: "tiro-con-arco",
        scopes: [
          { scope: "internacional", sources: [{ name: "World Archery", url: "https://www.worldarchery.sport/news" }] },
          { scope: "nacional", sources: [{ name: "FederArco", url: "https://www.federarco.es/noticias" }] },
          { scope: "autonomico", sources: [{ name: "FMTA", url: "https://www.fmta.net/noticias" }] },
        ],
      },
      {
        name: "Tiro",
        slug: "tiro",
        scopes: [
          { scope: "internacional", sources: [{ name: "ISSF", url: "https://www.issf-sports.org/news" }] },
          { scope: "europeo", sources: [{ name: "ESC Shooting", url: "https://esc-shooting.org/media?filter=NEWS" }] },
          { scope: "nacional", sources: [{ name: "Tiro Olímpico", url: "https://www.tirolimpico.org/noticias" }] },
          { scope: "autonomico", sources: [{ name: "FMTO", url: "https://fmto.es/noticias-pagina-fmto/" }] },
        ],
      },
    ],
  },
  {
    name: "Deportes de raqueta",
    sports: [
      {
        name: "Bádminton",
        slug: "badminton",
        scopes: [
          { scope: "internacional", sources: [{ name: "BWF", url: "https://bwfbadminton.com/news/" }] },
          { scope: "europeo", sources: [{ name: "Badminton Europe", url: "https://badmintoneurope.com/news" }] },
          { scope: "nacional", sources: [{ name: "Badminton España", url: "https://www.badminton.es/newsarchive/0/" }] },
          { scope: "autonomico", sources: [{ name: "Badminton Madrid", url: "https://badmintonmadrid.es/inicio/noticias/" }] },
        ],
      },
      {
        name: "Pádel",
        slug: "padel",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIP", url: "https://www.padelfip.com/es/noticias/" }] },
          { scope: "nacional", sources: [{ name: "Federación Española de Pádel", url: "https://www.padelfederacion.es/Noticias" }] },
          { scope: "autonomico", sources: [{ name: "FMPadel", url: "https://www.fmpadel.com/noticias.aspx" }] },
        ],
      },
      {
        name: "Tenis",
        slug: "tenis",
        scopes: [
          { scope: "internacional", sources: [{ name: "ITF", url: "https://www.itftennis.com/es/noticias-en-espa%C3%B1ol/noticias/" }, { name: "Tennis Europe", url: "https://www.tenniseurope.org/" }] },
          { scope: "nacional", sources: [{ name: "RFET", url: "https://www.rfet.es/es/ultimas-noticias.html" }] },
          { scope: "autonomico", sources: [{ name: "FTM", url: "https://ftm.es/noticias/" }] },
        ],
      },
      {
        name: "Tenis de mesa",
        slug: "tenis-de-mesa",
        scopes: [
          { scope: "internacional", sources: [{ name: "ITTF", url: "https://www.ittf.com/news/" }] },
          { scope: "europeo", sources: [{ name: "ETTU", url: "https://www.ettu.org/all-news/" }] },
          { scope: "nacional", sources: [{ name: "RFETM", url: "https://www.rfetm.es/noticias/categoria/8" }] },
          { scope: "autonomico", sources: [{ name: "FedMAD TM", url: "https://fedmadtm.com/todas-las-noticias/" }] },
        ],
      },
    ],
  },
  {
    name: "Deportes de precisión",
    sports: [
      {
        name: "Ajedrez",
        slug: "ajedrez",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIDE", url: "https://www.fide.com/news/" }] },
          { scope: "europeo", sources: [{ name: "European Chess Union", url: "https://www.europechess.org/?post_type=post" }] },
          { scope: "nacional", sources: [{ name: "FEDA", url: "https://feda.org/feda2k16/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "Federación Madrid de Billar", url: "https://www.federacionmadriddebillar.com/" }] },
        ],
      },
      {
        name: "Billar",
        slug: "billar",
        scopes: [
          { scope: "internacional", sources: [{ name: "IBSF", url: "https://www.ibsf.info/category/6" }, { name: "IBSF", url: "https://www.ibsf.info/category/7" }, { name: "IBSF", url: "https://www.ibsf.info/category/8" }] },
          { scope: "nacional", sources: [{ name: "RFEB", url: "https://rfeb.org/noticias.php" }] },
          { scope: "autonomico", sources: [{ name: "Federación Madrid de Billar", url: "https://www.federacionmadriddebillar.com/" }] },
        ],
      },
      {
        name: "Escalada",
        slug: "escalada",
        scopes: [
          { scope: "internacional", sources: [{ name: "World Climbing", url: "https://www.worldclimbing.com/continental-councils/europe/eu-index" }] },
          { scope: "europeo", sources: [{ name: "FEDME", url: "https://fedme.es/escalada/" }] },
          { scope: "nacional", sources: [{ name: "ADESP", url: "https://adesp.es/news/" }] },
          { scope: "autonomico", sources: [{ name: "FMM", url: "https://fmm.es/noticias/" }] },
        ],
      },
    ],
  },
  {
    name: "Deportes de vehículos",
    sports: [
      {
        name: "Automovilismo",
        slug: "automovilismo",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIA", url: "https://www.fia.com/news" }] },
          { scope: "europeo", sources: [{ name: "ACEA", url: "https://www.acea.auto/nav/?content=news-articles" }] },
          { scope: "nacional", sources: [{ name: "RFEDA", url: "https://www.rfeda.es/noticias/c/0" }] },
          { scope: "autonomico", sources: [{ name: "FMAutomovilismo", url: "https://fmautomovilismo.com/noticias" }] },
          { scope: "f4-spain", sources: [{ name: "F4 Spain", url: "https://f4spain.org/newsarticle/" }] },
        ],
      },
      {
        name: "Ciclismo",
        slug: "ciclismo",
        scopes: [
          { scope: "internacional", sources: [{ name: "UCI", url: "https://www.uci.org/news/all-news/6IQ886FTfWV8yd13Egt9v3?page=1" }] },
          { scope: "nacional", sources: [{ name: "RFEC", url: "https://rfec.com/index.php/es/smartweb/seccion/seccion/rfec/home" }] },
          { scope: "autonomico", sources: [{ name: "FMC Ciclismo Carretera", url: "https://fmciclismo.com/index.php/es/smartweb/seccion/seccion/madrid/CARRETERA" }, { name: "FMC Ciclismo Pista", url: "https://fmciclismo.com/index.php/es/smartweb/seccion/seccion/madrid/PISTA.FMC" }, { name: "FMC BTT", url: "https://fmciclismo.com/index.php/es/smartweb/seccion/seccion/madrid/BTT-" }, { name: "FMC Escuelas", url: "https://fmciclismo.com/index.php/es/smartweb/seccion/seccion/madrid/ESCUELAS" }] },
        ],
      },
      {
        name: "Hípica",
        slug: "hipica",
        scopes: [
          { scope: "internacional", sources: [{ name: "IFHA", url: "https://www.ifhaonline.org/Default.asp?section=Resources&area=0" }] },
          { scope: "europeo", sources: [{ name: "Euro Equestrian", url: "https://www.euroequestrian.eu/en/EEF-Newsroom/News.html" }] },
          { scope: "nacional", sources: [{ name: "RFHE", url: "https://rfhe.com/" }] },
          { scope: "autonomico", sources: [{ name: "FHDM", url: "https://fhdm.es/" }] },
        ],
      },
      {
        name: "Motociclismo",
        slug: "motociclismo",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIM", url: "https://www.fim-moto.com/en/news" }] },
          { scope: "europeo", sources: [{ name: "FIM Europe", url: "https://www.fim-europe.com/category/press/uem-news/" }] },
          { scope: "nacional", sources: [{ name: "Prensa RFME", url: "https://prensarfme.com/" }] },
          { scope: "autonomico", sources: [{ name: "Fedemadrid", url: "https://fedemadrid.com/noticias/" }] },
          { scope: "junior-gp", sources: [{ name: "FIM Moto Junior", url: "https://fimmotojunior.com/news/2026" }] },
        ],
      },
      {
        name: "Patinaje",
        slug: "patinaje",
        scopes: [
          { scope: "internacional", sources: [{ name: "World Skate", url: "https://www.worldskate.org/news.html" }] },
          { scope: "nacional", sources: [{ name: "FEP", url: "https://fep.es/portada/federacion" }] },
          { scope: "autonomico", sources: [{ name: "FMP", url: "https://fmp.es/category/fmp/" }] },
        ],
      },
    ],
  },
  {
    name: "Deportes acuáticos",
    sports: [
      {
        name: "Natación",
        slug: "natacion",
        scopes: [
          { scope: "internacional", sources: [{ name: "World Aquatics", url: "https://www.worldaquatics.com/news" }] },
          { scope: "europeo", sources: [{ name: "European Aquatics", url: "https://europeanaquatics.org/news/" }] },
          { scope: "nacional", sources: [{ name: "RFEN", url: "https://rfen.es/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "FMN", url: "https://federacionmadridnatacion.es/" }] },
        ],
      },
      {
        name: "Piragüísmo",
        slug: "piraguismo",
        scopes: [
          { scope: "internacional", sources: [{ name: "ICF", url: "https://www.canoeicf.com/news" }] },
          { scope: "europeo", sources: [{ name: "Paddle Europe", url: "https://paddle-europe.eu/news" }] },
          { scope: "nacional", sources: [{ name: "RFEP", url: "https://rfep.es/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "Piragua Madrid", url: "https://www.piraguamadrid.com/competiciones-federadas/noticias/" }] },
        ],
      },
      {
        name: "Remo",
        slug: "remo",
        scopes: [
          { scope: "internacional", sources: [{ name: "World Rowing", url: "https://worldrowing.com/news/" }] },
          { scope: "nacional", sources: [{ name: "Federemo", url: "https://federemo.org/es/posts/news" }] },
          { scope: "autonomico", sources: [{ name: "Remo Madrid", url: "https://www.remomadrid.org/noticias/" }] },
        ],
      },
      {
        name: "Surf",
        slug: "surf",
        scopes: [
          { scope: "internacional", sources: [{ name: "ISA Surf", url: "https://isasurf.org/news/" }] },
          { scope: "europeo", sources: [{ name: "Euro Surfing", url: "https://www.eurosurfing.org/news" }] },
          { scope: "nacional", sources: [{ name: "FESurf", url: "https://www.fesurf.es/noticias/" }] },
        ],
      },
      {
        name: "Vela",
        slug: "vela",
        scopes: [
          { scope: "nacional", sources: [{ name: "RFEV", url: "https://rfev.es/noticias/" }] },
        ],
      },
    ],
  },
  {
    name: "Deportes de resistencia",
    sports: [
      {
        name: "Atletismo",
        slug: "atletismo",
        scopes: [
          { scope: "internacional", sources: [{ name: "World Athletics", url: "https://worldathletics.org/news/news" }] },
          { scope: "europeo", sources: [{ name: "European Athletics", url: "https://www.european-athletics.com/home/stories-videos/stories" }] },
          { scope: "nacional", sources: [{ name: "RFEA", url: "https://atletismorfea.es/federacion/communication-hub/noticias" }] },
          { scope: "autonomico", sources: [{ name: "Atletismo Madrid", url: "https://www.atletismomadrid.com/noticias" }] },
        ],
      },
      {
        name: "Gimnasia",
        slug: "gimnasia",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIG", url: "https://www.gymnastics.sport/site/news/search.php" }] },
          { scope: "europeo", sources: [{ name: "European Gymnastics", url: "https://www.europeangymnastics.com/news" }] },
          { scope: "nacional", sources: [{ name: "RFE Gymnasia", url: "https://rfegimnasia.es/actualidad/" }] },
          { scope: "autonomico", sources: [{ name: "FM Gimnasia", url: "https://www.fmgimnasia.com/noticias/" }] },
        ],
      },
      {
        name: "Halterofilia",
        slug: "halterofilia",
        scopes: [
          { scope: "internacional", sources: [{ name: "IWF", url: "https://ac.iwf.sport/" }] },
          { scope: "europeo", sources: [{ name: "EWF", url: "https://ewf.sport/news-center/" }] },
          { scope: "nacional", sources: [{ name: "FedeHalter", url: "https://www.fedehalter.org/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "FM Halterofilia", url: "https://fmhalterofilia.com/actualidad/noticias/" }] },
        ],
      },
      {
        name: "Triatlón",
        slug: "triatlon",
        scopes: [
          { scope: "internacional", sources: [{ name: "World Triathlon", url: "https://triathlon.org/news" }] },
          { scope: "europeo", sources: [{ name: "World Triathlon", url: "https://triathlon.org/news" }] },
          { scope: "nacional", sources: [{ name: "FETRI", url: "https://triatlon.org/fetri/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "Triatlón Madrid", url: "https://triatlonmadrid.org/noticias/" }] },
        ],
      },
    ],
  },
  {
    name: "Deportes de invierno",
    sports: [
      {
        name: "Esquí",
        slug: "esqui",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIS", url: "https://www.fis-ski.com/news?tab=news" }] },
          { scope: "nacional", sources: [{ name: "RFEDI", url: "https://rfedi.es/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "FMDI", url: "https://fmdi.es/" }] },
        ],
      },
      {
        name: "Biatlón",
        slug: "biatlon",
        scopes: [
          { scope: "internacional", sources: [{ name: "Biathlon World", url: "https://www.biathlonworld.com/news" }] },
          { scope: "nacional", sources: [{ name: "RFEDI", url: "https://rfedi.es/noticias/" }] },
        ],
      },
      {
        name: "Esquí Alpino",
        slug: "esqui-alpino",
        scopes: [
          { scope: "internacional", sources: [{ name: "RFEDI", url: "https://rfedi.es/noticias/" }] },
          { scope: "nacional", sources: [{ name: "Lugares de Nieve", url: "https://www.lugaresdenieve.com/?q=es/actualidad" }] },
        ],
      },
      {
        name: "Curling",
        slug: "curling",
        scopes: [
          { scope: "internacional", sources: [{ name: "Lugares de Nieve", url: "https://www.lugaresdenieve.com/?q=es/actualidad" }] },
          { scope: "nacional", sources: [{ name: "RFEDH", url: "https://www.rfedh.es/noticias/" }] },
        ],
      },
    ],
  },
  {
    name: "Deportes con palos",
    sports: [
      {
        name: "Béisbol",
        slug: "beisbol",
        scopes: [
          { scope: "internacional", sources: [{ name: "WBSC Baseball", url: "https://www.wbsc.org/es/disciplines/baseball" }, { name: "WBSC Baseball5", url: "https://www.wbsc.org/es/disciplines/baseball5" }] },
          { scope: "europeo", sources: [{ name: "WBSC Europe Baseball", url: "https://www.wbsceurope.org/en/disciplines/baseball" }, { name: "WBSC Europe Baseball5", url: "https://www.wbsceurope.org/en/disciplines/baseball5" }] },
          { scope: "nacional", sources: [{ name: "RFEBS Baseball", url: "https://www.rfebs.es/es/disciplines/baseball" }, { name: "RFEBS Baseball5", url: "https://www.rfebs.es/es/disciplines/baseball5" }] },
          { scope: "autonomico", sources: [{ name: "FMBs", url: "https://fmbs.es/category/noticias/" }] },
        ],
      },
      {
        name: "Golf",
        slug: "golf",
        scopes: [
          { scope: "internacional", sources: [{ name: "IGF", url: "https://www.igfgolf.org/news" }] },
          { scope: "europeo", sources: [{ name: "EGA", url: "https://www.ega-golf.ch/news-and-media" }] },
          { scope: "nacional", sources: [{ name: "RFE Golf", url: "https://rfegolf.es/noticias?year=2026&month=-1&size=9&page=1&view=card&committe=17&entity-type=rfeg" }] },
          { scope: "autonomico", sources: [{ name: "FedGolf Madrid", url: "https://fedgolfmadrid.com/noticia/lista" }] },
        ],
      },
      {
        name: "Hockey",
        slug: "hockey",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIH", url: "https://www.fih.hockey/news" }] },
          { scope: "europeo", sources: [{ name: "EuroHockey", url: "https://eurohockey.org/news#latest-news" }] },
          { scope: "nacional", sources: [{ name: "Ehsockey", url: "https://eshockey.es/noticias/" }] },
          { scope: "autonomico", sources: [{ name: "FM Hockey", url: "https://fmhockey.es/blog/" }] },
        ],
      },
      {
        name: "Frontón",
        slug: "fronton",
        scopes: [
          { scope: "internacional", sources: [{ name: "FIPV", url: "https://www.fipv.net/noticias" }] },
          { scope: "europeo", sources: [{ name: "UFEPV", url: "https://www.ufepv.com/actualidad" }] },
          { scope: "nacional", sources: [{ name: "FE Pelota", url: "https://fepelota.com/" }] },
          { scope: "autonomico", sources: [{ name: "FMPelota", url: "https://www.fmpelota.com/noticias/" }] },
        ],
      },
    ],
  },
];

export const sportIndex = sportsGroups.flatMap((group) =>
  group.sports.map((sport) => ({
    ...sport,
    groupName: group.name,
  })),
);

export const sportSlugMap = Object.fromEntries(sportIndex.map((sport) => [sport.slug, sport]));
