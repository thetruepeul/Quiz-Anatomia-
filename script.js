
  
/* ===============================================================
   OGGETTO QUIZ COMPLETO – pronto da incollare in script.js
   =============================================================== */

const quizzes = {
  "0-28": [
    { question: "Le cellule sono rivestite da una membrana plasmatica che racchiude il protoplasma.", correctAnswer: true },
    { question: "Nel protoplasma si distingue solo il citoplasma, ma non esiste un nucleo separato.", correctAnswer: false },
    { question: "I mitocondri sono organelli non membranosi che producono energia.", correctAnswer: false },
    { question: "Il complesso di Golgi è formato da 3-10 cisterne con convessità rivolta verso il nucleo.", correctAnswer: true },
    { question: "I ribosomi sono composti da proteine e RNA e sintetizzano le proteine.", correctAnswer: true },
    { question: "I lisosomi possiedono una doppia membrana.", correctAnswer: false },
    { question: "Il reticolo endoplasmatico si divide in liscio e rugoso.", correctAnswer: true },
    { question: "Nell’organismo umano si riconoscono circa 200 tipi diversi di cellule.", correctAnswer: true },
    { question: "Tutte le cellule sono prive di citoscheletro.", correctAnswer: false },
    { question: "Perossisomi e lisosomi contengono enzimi litici.", correctAnswer: true },
    { question: "Gli organi cavi presentano un lume e pareti costituite da tonache.", correctAnswer: true },
    { question: "Negli organi parenchimatosi vasi e nervi entrano da più punti della superficie esterna.", correctAnswer: false },
    { question: "Un gruppo di organi con struttura e origine embriologica omogenee forma un sistema.", correctAnswer: true },
    { question: "Gli apparati riuniscono organi omogenei per funzione, struttura e origine embriologica.", correctAnswer: false },
    { question: "L’organismo umano è costituito da apparati e sistemi che lavorano in modo coordinato.", correctAnswer: true },
    { question: "Il piano sagittale divide il corpo in una metà anteriore e una posteriore.", correctAnswer: false },
    { question: "Il piano trasversale è perpendicolare sia al sagittale sia al frontale.", correctAnswer: true },
    { question: "Un elemento più vicino al piano sagittale è detto mediale.", correctAnswer: true },
    { question: "Con abduzione si intende l’allontanamento di un segmento dal piano sagittale.", correctAnswer: true },
    { question: "La flessione avvicina un segmento al piano frontale (tranne l’estensione dorsale).", correctAnswer: false },
    { question: "La rotazione interna dell’avambraccio è detta pronazione.", correctAnswer: true },
    { question: "La circonduzione descrive un cono con apice nell’articolazione stessa.", correctAnswer: true },
    { question: "Il termine “prossimale” indica ciò che è più lontano dal corpo.", correctAnswer: false },
    { question: "Tutti gli epiteli poggiano su una membrana basale di tessuto connettivo.", correctAnswer: true },
    { question: "Gli epiteli sono direttamente vascolarizzati da capillari interni.", correctAnswer: false },
    { question: "Gli epiteli semplici includono i tipi pavimentoso, cubico, cilindrico e pseudostratificato.", correctAnswer: true },
    { question: "Negli epiteli pluristratificati lo strato germinativo è quello più superficiale.", correctAnswer: false },
    { question: "I microvilli aumentano la superficie assorbente dell’epitelio.", correctAnswer: true },
    { question: "Le ghiandole esocrine secernono i loro prodotti direttamente nel sangue.", correctAnswer: false },
    { question: "La secrezione apocrina comporta il distacco della sola parte apicale della cellula.", correctAnswer: true },
    { question: "Tutti i tessuti connettivi derivano dall’ectoderma.", correctAnswer: false },
    { question: "L’acido ialuronico è un glicosamminoglicano della sostanza fondamentale connettivale.", correctAnswer: true },
    { question: "Le fibre collagene sono molto resistenti alla trazione meccanica.", correctAnswer: true },
    { question: "I mastociti partecipano alla risposta allergica immediata.", correctAnswer: true },
    { question: "Il connettivo lasso forma la tonaca propria degli organi cavi.", correctAnswer: true },
    { question: "Il tessuto adiposo bruno è metabolicamente meno attivo di quello bianco.", correctAnswer: false },
    { question: "La cartilagine ialina riveste le superfici articolari delle ossa.", correctAnswer: true },
    { question: "La cartilagine elastica contiene molte fibre elastiche oltre a collagene.", correctAnswer: true },
    { question: "La cartilagine articolare è circondata da pericondrio.", correctAnswer: false },
    { question: "I condrociti si trovano in lacune all’interno della matrice cartilaginea.", correctAnswer: true },
    { question: "La cartilagine fibrosa è ricca di collagene di tipo I.", correctAnswer: true },
    { question: "L’osso compatto è organizzato in unità chiamate osteoni.", correctAnswer: true },
    { question: "Il canale di Havers occupa il centro di ogni osteone.", correctAnswer: true },
    { question: "L’endostio riveste la superficie esterna dell’osso.", correctAnswer: false },
    { question: "Nelle diafisi il midollo osseo giallo riempie la cavità midollare.", correctAnswer: true },
    { question: "Il periostio è riccamente innervato e partecipa alla crescita ossea.", correctAnswer: true },
    { question: "Le ossa piatte sono costituite solo da osso compatto senza diploe.", correctAnswer: false },
    { question: "Le ossa lunghe presentano due epifisi e una diafisi.", correctAnswer: true },
    { question: "L’osso spugnoso è formato da osteoni con canale centrale.", correctAnswer: false },
    { question: "Nell’ossificazione intramembranosa l’osso si forma direttamente dal mesenchima.", correctAnswer: true },
    { question: "Nell’ossificazione endocondrale il tessuto cartilagineo viene sostituito da osso.", correctAnswer: true },
    { question: "L’ossificazione inizia circa alla 6ª settimana di vita intrauterina e termina intorno ai 25 anni.", correctAnswer: true },
    { question: "La metafisi scompare completamente prima dei 10 anni di età.", correctAnswer: false },
    { question: "Durante la formazione dell’osso gli osteoblasti si trasformano in osteoclasti.", correctAnswer: false },
    { question: "Gli eritrociti sono cellule anucleate a forma di lente biconcava.", correctAnswer: true },
    { question: "Le piastrine sono corpuscoli anucleati che contribuiscono all’emostasi.", correctAnswer: true },
    { question: "Il plasma contiene principalmente fibre elastiche.", correctAnswer: false },
    { question: "Le fibre muscolari rosse sono ricche di mioglobina e adatte alla resistenza.", correctAnswer: true },
    { question: "Il sarcomero è compreso tra due linee Z.", correctAnswer: true },
    { question: "La banda I contiene filamenti spessi di miosina.", correctAnswer: false },
    { question: "Il reticolo sarcoplasmatico è ricco di Ca²⁺ e coordina la contrazione della fibra.", correctAnswer: true },
    { question: "Lo scheletro appendicolare comprende cranio e gabbia toracica.", correctAnswer: false },
    { question: "Le leve di terzo tipo sacrificano forza a favore di velocità e precisione.", correctAnswer: true },
    { question: "Le cartilagini fibrose fanno parte dell’apparato locomotore.", correctAnswer: true },
    { question: "I muscoli agonisti generano il movimento opposto a quello richiesto.", correctAnswer: false },
    { question: "Le diartrosi possiedono una camera articolare delimitata da capsula fibrosa.", correctAnswer: true },
    { question: "Le artrodie consentono soprattutto movimenti di scivolamento.", correctAnswer: true },
    { question: "Le condiloartrosi permettono solo rotazione, senza flessione né estensione.", correctAnswer: false },
    { question: "La troclea (ginglimo angolare) consente flessione ed estensione.", correctAnswer: true },
    { question: "Le sinartrosi non permettono alcun movimento.", correctAnswer: true },
    { question: "Nelle sindesmosi il tessuto interposto è cartilagine ialina.", correctAnswer: false },
    { question: "Le sinfisi sono anfiartrosi con disco di fibrocartilagine interposto.", correctAnswer: true },
    { question: "La colonna vertebrale comprende 24 vertebre mobili.", correctAnswer: true },
    { question: "La regione lombare è formata da 5 vertebre indipendenti.", correctAnswer: true },
    { question: "Le curve toracica e sacrale sono considerate curve primarie.", correctAnswer: true },
    { question: "La lordosi cervicale compare durante lo sviluppo fetale.", correctAnswer: false },
    { question: "Il canale vertebrale è costituito esclusivamente da osso.", correctAnswer: false },
    { question: "Ogni vertebra possiede due peduncoli che collegano il corpo alle lamine.", correctAnswer: true },
    { question: "Il processo spinoso si proietta ventralmente.", correctAnswer: false },
    { question: "I fori intervertebrali sono delimitati superiormente e inferiormente dai peduncoli.", correctAnswer: true },
    { question: "Le faccette articolari inferiori di una vertebra si articolano con la vertebra sottostante.", correctAnswer: true },
    { question: "Le vertebre cervicali possiedono fori trasversi nei processi trasversi.", correctAnswer: true },
    { question: "L’atlante presenta un grande processo spinoso bifido.", correctAnswer: false },
    { question: "Il dente dell’epistrofeo si articola con l’arco anteriore dell’atlante.", correctAnswer: true },
    { question: "La vertebra prominente ha un processo spinoso corto e bifido.", correctAnswer: false },
    { question: "Le vertebre toraciche T1-T10 presentano faccette costali trasverse.", correctAnswer: true },
    { question: "Il foro vertebrale delle toraciche è tipicamente triangolare.", correctAnswer: false },
    { question: "I processi spinosi delle vertebre lombari sono sottili e molto inclinati in basso.", correctAnswer: false },
    { question: "Il corpo delle vertebre lombari è più grande di quello delle toraciche.", correctAnswer: true },
    { question: "L’osso sacro deriva dalla fusione di cinque vertebre.", correctAnswer: true },
    { question: "L’hiatus sacrale è situato all’estremità craniale del sacro.", correctAnswer: false },
    { question: "La tuberosità sacrale offre inserzione ai legamenti sacro-iliaci.", correctAnswer: true },
    { question: "La prima vertebra coccigea possiede processi trasversi e due corna che si articolano col sacro.", correctAnswer: true },
    { question: "Nell’uomo ci sono 12 paia di coste.", correctAnswer: true },
    { question: "Le coste VIII-X non si collegano allo sterno in alcun modo.", correctAnswer: false },
    { question: "Le coste fluttuanti corrispondono ai numeri XI e XII.", correctAnswer: true },
    { question: "Il manubrio sternale forma con il corpo lo “angolo di Louis”.", correctAnswer: true },
    { question: "La faccetta per la prima costa si trova sul corpo dello sterno.", correctAnswer: false },
    { question: "Ciascun osso dell’anca è formato da ileo, ischio e pube.", correctAnswer: true },
    { question: "L’acetabolo è formato esclusivamente dall’ileo.", correctAnswer: false }
  ],

  /* -------------------- 29-53 -------------------- */
  "29-53": [
    { question: "La scapola è un osso piatto di forma triangolare che riposa sulla faccia posteriore della gabbia toracica.", correctAnswer: true },
    { question: "Il margine laterale della scapola è detto vertebrale.", correctAnswer: false },
    { question: "La spina scapolare si trova sulla faccia ventrale della scapola.", correctAnswer: false },
    { question: "Il processo coracoideo origina dal margine superiore della scapola, al di sopra dell’acromion.", correctAnswer: true },
    { question: "La cavità glenoidea, rivestita di cartilagine, si articola con la testa dell’omero.", correctAnswer: true },
    { question: "La tuberosità sopraglenoidea serve per l’inserzione del capo lungo del tricipite brachiale.", correctAnswer: false },
    { question: "La tuberosità sottoglenoidea è posta sul margine inferiore della testa scapolare.", correctAnswer: true },
    { question: "La clavicola presenta due curve entrambe con convessità anteriore.", correctAnswer: false },
    { question: "Sulla superficie inferiore dell’estremità sternale della clavicola si trova il tubercolo costale.", correctAnswer: true },
    { question: "L’estremità acromiale della clavicola è più piccola di quella sternale.", correctAnswer: false },
    { question: "L’articolazione sterno-clavicolare è l’unica connessione ossea diretta tra cintura scapolare e scheletro assile.", correctAnswer: true },
    { question: "L’articolazione sterno-clavicolare è classificata come enartrosi.", correctAnswer: false },
    { question: "L’articolazione acromion-clavicolare è un’artrodia dotata di disco fibrocartilagineo intra-articolare.", correctAnswer: true },
    { question: "Nell’articolazione acromion-clavicolare si articola il tubercolo conoide con l’acromion.", correctAnswer: false },
    { question: "L’articolazione scapolo-omerale è un’enartrosi con labbro glenoideo fibrocartilagineo.", correctAnswer: true },
    { question: "L’articolazione scapolo-omerale consente solo flessione ed estensione.", correctAnswer: false },
    { question: "Il legamento coraco-clavicolare è costituito da due fasci: trapezoide e conoide.", correctAnswer: true },
    { question: "Il legamento coraco-omerale rinforza il margine posteriore della capsula scapolo-omerale.", correctAnswer: false },
    { question: "Il legamento trapezoide si inserisce sul margine anteriore della faccia inferiore della clavicola.", correctAnswer: true },
    { question: "Il legamento conoide si inserisce sul tubercolo conoideo della clavicola.", correctAnswer: true },
    { question: "Il collo chirurgico dell’omero separa direttamente la testa dalle tuberosità.", correctAnswer: false },
    { question: "Il solco bicipitale dell’omero ospita il tendine del capo lungo del bicipite brachiale.", correctAnswer: true },
    { question: "Sulla grande tuberosità dell’omero si inseriscono i muscoli sopraspinato, sottospinato e piccolo rotondo.", correctAnswer: true },
    { question: "La cresta della piccola tuberosità accoglie il muscolo grande pettorale.", correctAnswer: false },
    { question: "La tuberosità deltoidea si trova sulla faccia laterale della diafisi omerale.", correctAnswer: true },
    { question: "Il solco radiale decorre anteriormente alla tuberosità deltoidea.", correctAnswer: false },
    { question: "Il condilo omerale si articola con la testa del radio.", correctAnswer: true },
    { question: "La troclea omerale si articola con l’incisura semilunare dell’ulna.", correctAnswer: true },
    { question: "L’epicondilo si trova medialmente alla troclea.", correctAnswer: false },
    { question: "L’epitroclea è posta medialmente alla troclea.", correctAnswer: true },
    { question: "L’ulna è l’osso mediale dell’avambraccio.", correctAnswer: true },
    { question: "L’olecrano è un processo anteriore dell’ulna.", correctAnswer: false },
    { question: "Il becco dell’olecrano entra nella fossa olecranica dell’omero durante l’estensione completa dell’avambraccio.", correctAnswer: true },
    { question: "Il processo coronoideo contribuisce a delimitare l’incisura semilunare.", correctAnswer: true },
    { question: "L’incisura radiale dell’ulna si trova sul processo coronoideo.", correctAnswer: true },
    { question: "La tuberosità dell’ulna dà inserzione al muscolo brachiale.", correctAnswer: true },
    { question: "Il capitello dell’ulna appartiene all’epifisi prossimale.", correctAnswer: false },
    { question: "Il processo stiloideo ulnare è laterale rispetto al capitello.", correctAnswer: false },
    { question: "Il radio è l’osso laterale dell’avambraccio.", correctAnswer: true },
    { question: "La fossetta del capitello radiale si articola con il condilo omerale.", correctAnswer: true },
    { question: "Il collo del radio è situato distalmente al capitello.", correctAnswer: true },
    { question: "La tuberosità radiale è posta sulla faccia dorsale della diafisi.", correctAnswer: false },
    { question: "Il margine mediale del radio, detto cresta interossea, riceve l’inserzione della membrana interossea.", correctAnswer: true },
    { question: "Il processo stiloideo radiale è localizzato sul margine laterale dell’epifisi distale.", correctAnswer: true },
    { question: "L’incisione ulnare del radio si trova sul margine laterale dell’epifisi distale.", correctAnswer: false },
    { question: "L’articolazione omero-ulnare è una diartrosi a ginglimo angolare.", correctAnswer: true },
    { question: "L’articolazione omero-radiale è classificata come artrodia.", correctAnswer: false },
    { question: "L’articolazione radio-ulnare prossimale consente flessione ed estensione.", correctAnswer: false },
    { question: "Il legamento anulare del radio avvolge il condilo omerale.", correctAnswer: false },
    { question: "La membrana interossea concorre alla fissità dell’articolazione del gomito.", correctAnswer: true },
    { question: "Il legamento collaterale ulnare origina dall’epitroclea.", correctAnswer: true },
    { question: "Il legamento collaterale radiale si inserisce direttamente sul radio.", correctAnswer: false },
    { question: "Il carpo è formato da otto ossa brevi disposte su due file.", correctAnswer: true },
    { question: "La concavità palmare del carpo è situata sul versante dorsale.", correctAnswer: false },
    { question: "I metacarpi sono cinque ossa lunghe che uniscono carpo e falangi.", correctAnswer: true },
    { question: "Anche il pollice possiede tre falangi.", correctAnswer: false },
    { question: "La tuberosità ungueale è presente sulla falange distale.", correctAnswer: true },
    { question: "Il muscolo grande pettorale origina dal tratto mediale della clavicola, dallo sterno e dalle cartilagini costali I-VI.", correctAnswer: true },
    { question: "Il muscolo grande pettorale si inserisce sulla cresta della piccola tuberosità.", correctAnswer: false },
    { question: "Il muscolo piccolo pettorale si inserisce sul processo coracoideo della scapola.", correctAnswer: true },
    { question: "Il muscolo dentato anteriore mantiene la scapola aderente al torace.", correctAnswer: true },
    { question: "Dentato anteriore e trapezio, ruotando la scapola, elevano il braccio sul piano frontale fino a circa 150°.", correctAnswer: true },
    { question: "Il muscolo succlavio si inserisce sulla faccia superiore della prima costa.", correctAnswer: false },
    { question: "Il muscolo succlavio avvicina la clavicola alla prima costa e può sollevare la costa stessa.", correctAnswer: true },
    { question: "La debolezza del muscolo romboide può provocare scapole alate.", correctAnswer: true },
    { question: "Il muscolo dentato anteriore è innervato dal nervo toracico lungo (C5-C7).", correctAnswer: true },
    { question: "Il muscolo sovraspinato origina dalla fossa sottospinata.", correctAnswer: false },
    { question: "Il muscolo infraspinato è parte della cuffia dei rotatori.", correctAnswer: true },
    { question: "La cuffia dei rotatori comprende i tendini di sovraspinato, infraspinato, sottoscapolare e deltoide.", correctAnswer: false },
    { question: "Il tendine del capo lungo del bicipite scorre sotto la cuffia dei rotatori.", correctAnswer: true },
    { question: "Il muscolo piccolo rotondo contribuisce all’extrarotazione del braccio.", correctAnswer: true },
    { question: "Il muscolo grande rotondo adduce, estende e intraruota il braccio.", correctAnswer: true },
    { question: "Il muscolo sottoscapolare si inserisce sulla piccola tuberosità dell’omero.", correctAnswer: true },
    { question: "Il muscolo sottoscapolare extraruota l’omero.", correctAnswer: false },
    { question: "Il capo lungo del bicipite brachiale origina dalla tuberosità sopraglenoidea.", correctAnswer: true },
    { question: "Il bicipite brachiale si inserisce sulla tuberosità ulnare.", correctAnswer: false },
    { question: "Il muscolo coracobrachiale flette e adduce il braccio.", correctAnswer: true },
    { question: "Il muscolo brachiale è innervato principalmente dal nervo muscolocutaneo.", correctAnswer: true },
    { question: "Il capo lungo del tricipite origina dalla tuberosità sottoglenoidea e il tricipite estende l’avambraccio.", correctAnswer: true },
    { question: "Il muscolo anconeo si inserisce sull’epicondilo dell’ulna.", correctAnswer: false },
    { question: "Gli estensori superficiali dell’avambraccio originano dall’epitroclea.", correctAnswer: false },
    { question: "Il muscolo pronatore rotondo origina dall’epitroclea e si inserisce sul radio.", correctAnswer: true },
    { question: "Il muscolo supinatore origina dall’epicondilo e termina sul radio.", correctAnswer: true },
    { question: "I muscoli estensori profondi dell’avambraccio originano da radio e ulna.", correctAnswer: true },
    { question: "Il flessore profondo delle dita origina dal terzo distale dell’ulna.", correctAnswer: false },
    { question: "Il brachioradiale appartiene al gruppo laterale dei muscoli dell’avambraccio.", correctAnswer: true },
    { question: "Tutti i muscoli dell’avambraccio sono innervati dal nervo mediano.", correctAnswer: false },
    { question: "L’estensore lungo del pollice è uno dei muscoli posteriori profondi dell’avambraccio.", correctAnswer: true },
    { question: "L’articolazione radio-ulnare distale è una trocoide che consente supinazione e pronazione.", correctAnswer: true },
    { question: "La capsula del gomito delimita tre cavità articolari distinte.", correctAnswer: false },
    { question: "Il legamento collaterale radiale si continua con il legamento anulare del radio.", correctAnswer: true },
    { question: "Il muscolo grande pettorale è innervato dai nervi toracici anteriori C5-T1.", correctAnswer: true },
    { question: "Il muscolo piccolo pettorale eleva le coste durante l’inspirazione.", correctAnswer: true },
    { question: "Il muscolo succlavio allontana la clavicola dalla prima costa.", correctAnswer: false },
    { question: "I movimenti di prono-supinazione avvengono nelle articolazioni radio-ulnari prossimale e distale.", correctAnswer: true },
    { question: "Nell’articolazione acromion-clavicolare il disco fibrocartilagineo è assente.", correctAnswer: false },
    { question: "La fossa sottospinata è situata cranialmente alla spina della scapola.", correctAnswer: false },
    { question: "La fossa sovraspinata ospita il muscolo sovraspinato.", correctAnswer: true },
    { question: "Il margine vertebrale della scapola è anche detto margine mediale.", correctAnswer: true },
    { question: "Il processo stiloideo radiale si trova medialmente rispetto all’incisione ulnare.", correctAnswer: false }
  ],

  /* -------------------- 54-81 -------------------- */
  "54-81": [
    { question: "La cintura pelvica è formata da due ossa coxali, ciascuna suddivisa in ileo, ischio e pube.", correctAnswer: true },
    { question: "L’acetabolo si articola con la testa della tibia.", correctAnswer: false },
    { question: "La cresta iliaca termina anteriormente con la spina iliaca anteriore superiore.", correctAnswer: true },
    { question: "La grande incisura ischiatica si trova inferiormente alla spina ischiatica.", correctAnswer: false },
    { question: "Le due ossa pubiche sono unite anteriormente dalla sinfisi pubica in fibrocartilagine.", correctAnswer: true },
    { question: "Il forame otturatorio è completamente aperto e privo di membrana otturatoria.", correctAnswer: false },
    { question: "Il ramo ischiopubico nasce dalla fusione del ramo ischiatico con il ramo inferiore del pube.", correctAnswer: true },
    { question: "La tuberosità ischiatica sostiene il peso corporeo quando si è seduti.", correctAnswer: true },
    { question: "La linea arcuata dell’ileo contribuisce a delimitare lo stretto superiore del bacino.", correctAnswer: true },
    { question: "Lo stretto superiore del bacino separa la piccola pelvi dalla cavità toracica.", correctAnswer: false },
    { question: "La testa del femore presenta la fovea capitis per l’inserzione del legamento rotondo.", correctAnswer: true },
    { question: "Il collo anatomico del femore forma un angolo di circa 150° con la diafisi.", correctAnswer: true },
    { question: "La diafisi femorale converge prossimalmente verso il bacino invece che distalmente.", correctAnswer: false },
    { question: "I condili femorali si trovano sull’epifisi distale del femore.", correctAnswer: true },
    { question: "Il grande trocantere è localizzato sull’epifisi distale del femore.", correctAnswer: false },
    { question: "Il legamento ileo-femorale, a forma di Y, limita l’estensione della coscia.", correctAnswer: true },
    { question: "Il legamento pubo-femorale origina dall’ischio e si inserisce sulla linea intertrocanterica.", correctAnswer: false },
    { question: "Il legamento ischio-femorale si inserisce sulla faccia anteriore del grande trocantere.", correctAnswer: true },
    { question: "Il legamento rotondo unisce la fovea della testa femorale all’acetabolo.", correctAnswer: true },
    { question: "Tutti i legamenti capsulari dell’anca limitano l’adduzione della coscia.", correctAnswer: false },
    { question: "Il ginocchio include in una sola cavità l’articolazione femoro-rotulea e quella femoro-tibiale.", correctAnswer: true },
    { question: "L’articolazione femoro-tibiale è una doppia condiloartrosi incompleta resa congruente dai menischi.", correctAnswer: true },
    { question: "I menischi del ginocchio sono costituiti da cartilagine ialina.", correctAnswer: false },
    { question: "Il legamento crociato anteriore impedisce alla tibia di spostarsi posteriormente.", correctAnswer: false },
    { question: "Il legamento crociato posteriore si inserisce sulla superficie mediale del condilo mediale femorale.", correctAnswer: true },
    { question: "Il legamento collaterale mediale è teso fra l’epicondilo mediale femorale e la testa del perone.", correctAnswer: false },
    { question: "Il legamento rotuleo collega la patella alla tuberosità tibiale.", correctAnswer: true },
    { question: "La patella è un osso sesamoide incluso nel tendine del quadricipite femorale.", correctAnswer: true },
    { question: "I retinacoli patellari si inseriscono sui condili tibiali anteriori, stabilizzando la patella.", correctAnswer: true },
    { question: "A gamba estesa il ginocchio permette ampia rotazione interna.", correctAnswer: false },
    { question: "La tibia è l’osso mediale della gamba e partecipa all’articolazione del ginocchio.", correctAnswer: true },
    { question: "La fibula è indispensabile per sostenere il peso corporeo durante la stazione eretta.", correctAnswer: false },
    { question: "La tuberosità tibiale è punto d’inserzione del legamento rotuleo.", correctAnswer: true },
    { question: "La fibula non possiede un malleolo distale.", correctAnswer: false },
    { question: "L’articolazione tibio-fibulare prossimale è un’artrodia fra tibia e testa della fibula.", correctAnswer: true },
    { question: "L’articolazione tibio-fibulare distale è una sinartrosi.", correctAnswer: true },
    { question: "Fra tibia e fibula è tesa una robusta membrana interossea fibrosa.", correctAnswer: true },
    { question: "L’eminenza intercondiloidea si trova sull’epifisi distale della tibia.", correctAnswer: false },
    { question: "Il malleolo mediale appartiene alla tibia.", correctAnswer: true },
    { question: "La testa della fibula presenta un processo stiloideo per l’inserzione del tendine del bicipite femorale.", correctAnswer: true },
    { question: "L’articolazione tibio-tarsica è un ginglimo angolare che consente flessione dorsale e plantare del piede.", correctAnswer: true },
    { question: "I malleoli tibiale e peroneale formano il mortaio crurale che accoglie la troclea dell’astragalo.", correctAnswer: true },
    { question: "Il legamento deltoideo origina dal malleolo laterale e si inserisce sul tarso.", correctAnswer: false },
    { question: "Il legamento collaterale laterale della caviglia si inserisce sia sull’astragalo sia sul calcagno.", correctAnswer: true },
    { question: "La caviglia permette ampi movimenti di lateralità.", correctAnswer: false },
    { question: "Il tarso comprende sette ossa, fra cui astragalo, calcagno e tre cuneiformi.", correctAnswer: true },
    { question: "Il calcagno costituisce la branca posteriore dell’arco plantare che scarica il peso a terra.", correctAnswer: true },
    { question: "L’astragalo trasmette il peso corporeo dalla tibia al piede.", correctAnswer: true },
    { question: "L’alluce possiede tre falangi come le altre dita del piede.", correctAnswer: false },
    { question: "I metatarsi si articolano prossimalmente direttamente con il calcagno.", correctAnswer: false },
    { question: "Il muscolo ileopsoas si inserisce sul piccolo trocantere del femore.", correctAnswer: true },
    { question: "Il muscolo iliaco origina dal labbro interno della cresta iliaca e dalla fossa iliaca.", correctAnswer: true },
    { question: "Il muscolo piccolo psoas si inserisce sulla cresta pettinea del pube.", correctAnswer: true },
    { question: "Il muscolo grande gluteo estende ed extraruota la coscia.", correctAnswer: true },
    { question: "Il muscolo medio gluteo è superficiale rispetto al grande gluteo.", correctAnswer: false },
    { question: "Le fibre anteriori del piccolo gluteo partecipano all’intrarotazione della coscia.", correctAnswer: true },
    { question: "Il muscolo piriforme attraversa la grande incisura ischiatica insieme al nervo sciatico.", correctAnswer: true },
    { question: "La sindrome del piriforme è dovuta a compressione del nervo femorale.", correctAnswer: false },
    { question: "Il muscolo gemello superiore è classificato tra i muscoli esterni dell’anca.", correctAnswer: true },
    { question: "Il muscolo quadrato del femore appartiene anch’esso ai muscoli esterni dell’anca.", correctAnswer: true },
    { question: "Il muscolo tensore della fascia lata origina dalla spina iliaca anteriore superiore.", correctAnswer: true },
    { question: "Il tensore della fascia lata si inserisce sulla benderella ileo-tibiale al condilo laterale della tibia.", correctAnswer: true },
    { question: "La “sindrome della fascia lata” è conosciuta anche come ginocchio del corridore.", correctAnswer: true },
    { question: "Il muscolo sartorio forma la zampa d’oca con gracile e semitendinoso.", correctAnswer: true },
    { question: "Il sartorio extra-ruota la coscia e intraruota la gamba.", correctAnswer: true },
    { question: "Il quadricipite femorale è composto da cinque capi muscolari.", correctAnswer: false },
    { question: "Il retto femorale è l’unico capo del quadricipite che flette la coscia.", correctAnswer: true },
    { question: "Gli adduttori lungo, breve e grande appartengono alla loggia postero-mediale della coscia.", correctAnswer: true },
    { question: "Il muscolo gracile origina dalla branca ischiopubica e partecipa anch’esso alla zampa d’oca.", correctAnswer: true },
    { question: "Il muscolo pettineo adduce, flette ed extraruota la coscia.", correctAnswer: true },
    { question: "Il bicipite femorale possiede un capo lungo dalla tuberosità ischiatica e un capo breve dal femore.", correctAnswer: true },
    { question: "Il capo lungo del bicipite femorale è innervato dal nervo tibiale.", correctAnswer: true },
    { question: "Il semimembranoso contribuisce a formare il legamento popliteo obliquo dietro al ginocchio.", correctAnswer: true },
    { question: "Il grande adduttore è innervato principalmente dal nervo femorale.", correctAnswer: false },
    { question: "Il muscolo gracile è innervato dal nervo otturatorio.", correctAnswer: true },
    { question: "Il tibiale anteriore flette dorsalmente e supina il piede.", correctAnswer: true },
    { question: "Il tibiale posteriore flette plantarmente e supina il piede.", correctAnswer: true },
    { question: "Il tricipite della sura è formato da gastrocnemio e soleo.", correctAnswer: true },
    { question: "Il tricipite della sura estende la gamba al ginocchio.", correctAnswer: false },
    { question: "Il peroneo lungo appartiene al gruppo laterale dei muscoli della gamba.", correctAnswer: true },
    { question: "Il muscolo plantare è incluso tra i muscoli posteriori della gamba.", correctAnswer: true },
    { question: "Il popliteo è un muscolo anteriore della gamba.", correctAnswer: false },
    { question: "Il flessore lungo dell’alluce partecipa alla flessione plantare del piede.", correctAnswer: true },
    { question: "Il peroneo breve everte il piede ma non estende le dita.", correctAnswer: true },
    { question: "Il muscolo estensore breve delle dita non interessa l’alluce.", correctAnswer: false },
    { question: "Il flessore breve delle dita agisce sulle falangi intermedie delle dita II-V.", correctAnswer: true },
    { question: "I muscoli interossei plantari adducono le dita del piede verso l’asse dell’alluce.", correctAnswer: true },
    { question: "L’abduttore dell’alluce è un muscolo del compartimento plantare mediale.", correctAnswer: true },
    { question: "Il quadrato della pianta appartiene ai muscoli plantari intermedi del piede.", correctAnswer: true },
    { question: "Il nervo otturatorio (L2-L4) innerva i principali muscoli adduttori della coscia.", correctAnswer: true },
    { question: "Il nervo femorale fornisce motilità al quadricipite femorale e sensibilità alla parte anteriore della coscia.", correctAnswer: true },
    { question: "Il nervo tibiale innerva i muscoli posteriori di coscia e gamba e origina dal plesso sacrale.", correctAnswer: true },
    { question: "Il nervo peroneo profondo innerva il compartimento mediale della gamba.", correctAnswer: false },
    { question: "Il nervo peroneo profondo innerva il tibiale anteriore.", correctAnswer: true },
    { question: "Lo scheletro dell’arto inferiore è più robusto di quello dell’arto superiore perché deve sostenere il peso corporeo.", correctAnswer: true },
    { question: "Le articolazioni dell’arto inferiore consentono maggiore libertà di movimento rispetto a quelle dell’arto superiore.", correctAnswer: false },
    { question: "Il piede umano possiede complessivamente 26 ossa.", correctAnswer: true },
    { question: "Il cingolo pelvico è collegato allo scheletro assile tramite una diartrosi mobile.", correctAnswer: false },
    { question: "Il segmento distale dell’arto inferiore è orientato perpendicolarmente al segmento intermedio.", correctAnswer: true },
    { question: "Il femore è l’osso più lungo e resistente del corpo umano.", correctAnswer: true }
  ],

  /* -------------------- 82-113 -------------------- */
  "82-113": [
    { question: "Il neurocranio è la parte del cranio che contiene e protegge cervello, tronco cerebrale e cervelletto.", correctAnswer: true },
    { question: "Il neurocranio è formato da quattordici ossa piatte.", correctAnswer: false },
    { question: "Le articolazioni fra le ossa della scatola cranica sono sincondrosi cartilaginee.", correctAnswer: false },
    { question: "L’unica articolazione mobile del cranio è quella temporo-mandibolare.", correctAnswer: true },
    { question: "Le ossa del massiccio facciale appartengono allo splancnocranio.", correctAnswer: true },
    { question: "I tre paia di ossicini dell’orecchio medio sono considerati ossa associate al cranio.", correctAnswer: true },
    { question: "L’osso ioide si articola direttamente con il neurocranio.", correctAnswer: false },
    { question: "La dura madre periostiale è fusa con il periostio della faccia interna della scatola cranica.", correctAnswer: true },
    { question: "La falce cerebrale separa i due emisferi cerebellari.", correctAnswer: false },
    { question: "Lo spazio subaracnoideo si trova tra aracnoide e pia madre ed è pieno di liquor.", correctAnswer: true },
    { question: "La dura madre meningea è interna alla dura madre periostiale.", correctAnswer: true },
    { question: "Le meningi rivestono esclusivamente l’encefalo, ma non il midollo spinale.", correctAnswer: false },
    { question: "Il midollo spinale è suddiviso in 31 segmenti funzionali.", correctAnswer: true },
    { question: "Nel midollo spinale esistono otto segmenti cervicali.", correctAnswer: true },
    { question: "Il midollo spinale termina normalmente a livello della vertebra L3.", correctAnswer: false },
    { question: "Le corna laterali di sostanza grigia sono presenti lungo tutta la colonna spinale.", correctAnswer: false },
    { question: "Il volume della sostanza bianca è maggiore a livello cervicale che sacrale.", correctAnswer: true },
    { question: "Il riflesso osteotendineo è un riflesso monosinaptico organizzato dal midollo spinale.", correctAnswer: true },
    { question: "La stimolazione dell’organo tendineo di Golgi eccita il motoneurone agonista per prevenire lesioni.", correctAnswer: false },
    { question: "Gli interneuroni inibitori spinali modulano l’attività dei motoneuroni durante i riflessi.", correctAnswer: true },
    { question: "Le fibre dell’emiretina nasale decussano nel chiasma ottico.", correctAnswer: true },
    { question: "Il tratto ottico trasporta informazioni dell’emicampo visivo ipsilaterale.", correctAnswer: false },
    { question: "Nel corpo genicolato laterale gli strati 2, 3 e 5 ricevono fibre dalla retina nasale controlaterale.", correctAnswer: false },
    { question: "Le radiazioni ottiche si dirigono dal diencefalo al lobo occipitale.", correctAnswer: true },
    { question: "L’area visiva primaria corrisponde all’area 17 di Brodmann.", correctAnswer: true },
    { question: "Nelle colonne corticali visive le afferenze arrivano inizialmente allo strato IV.", correctAnswer: true },
    { question: "La via ottica riflessa coinvolge i nuclei pretettali e regola il riflesso pupillare.", correctAnswer: true },
    { question: "La cornea costituisce la porzione anteriore trasparente del bulbo oculare.", correctAnswer: true },
    { question: "Il cristallino è connesso alla parete oculare tramite il muscolo ciliare.", correctAnswer: true },
    { question: "La contrazione del muscolo ciliare rende il cristallino più piatto.", correctAnswer: false },
    { question: "L’umor vitreo riempie la camera anteriore dell’occhio.", correctAnswer: false },
    { question: "La sclera è la tonaca più resistente e mantiene la forma dell’occhio.", correctAnswer: true },
    { question: "La retina pigmentaria è la porzione recettoriale contenente coni e bastoncelli.", correctAnswer: false },
    { question: "La fovea rappresenta la zona di massima acuità visiva.", correctAnswer: true },
    { question: "La papilla del nervo ottico è priva di recettori sensoriali.", correctAnswer: true },
    { question: "Lo strato delle cellule gangliari è più esterno di quello dei fotorecettori.", correctAnswer: false },
    { question: "Le sinapsi simmetriche sono tipicamente eccitatorie.", correctAnswer: false },
    { question: "Le spine dendritiche ospitano frequenti sinapsi asso-spino-dendritiche.", correctAnswer: true },
    { question: "Nel polmone sinistro il margine anteriore presenta l’incisura cardiaca.", correctAnswer: true },
    { question: "La lingula appartiene al lobo inferiore destro del polmone.", correctAnswer: false },
    { question: "Il lobo superiore sinistro comprende i segmenti lingulari superiore e inferiore.", correctAnswer: true },
    { question: "I bronchioli sono privi di cartilagine ma ricchi di muscolatura liscia.", correctAnswer: true },
    { question: "Il parasimpatico determina broncodilatazione dei bronchioli.", correctAnswer: false },
    { question: "Gli alveoli possono originare direttamente dai bronchioli respiratori.", correctAnswer: true },
    { question: "La membrana respiratoria è spessa per limitare la diffusione dei gas.", correctAnswer: false },
    { question: "Il liquido pleurico riduce l’attrito e mantiene pressione negativa nella cavità pleurica.", correctAnswer: true },
    { question: "La piccola circolazione inizia nel ventricolo destro e termina nell’atrio sinistro.", correctAnswer: true },
    { question: "Il tronco polmonare trasporta sangue ossigenato.", correctAnswer: false },
    { question: "Le quattro vene polmonari sboccano nell’atrio destro.", correctAnswer: false },
    { question: "L’arco aortico è la continuazione dell’aorta ascendente dopo una curva di 180°.", correctAnswer: true },
    { question: "Dal solo arco aortico nascono tronco brachiocefalico, carotide comune sinistra e succlavia sinistra.", correctAnswer: true },
    { question: "Le arterie vertebrali originano dalle succlavie e attraversano i forami trasversi cervicali.", correctAnswer: true },
    { question: "Il setto interventricolare è più spesso del setto interatriale.", correctAnswer: true },
    { question: "Gli atri hanno pareti più spesse dei ventricoli.", correctAnswer: false },
    { question: "Il forame ovale fetale permette al sangue di bypassare la piccola circolazione polmonare.", correctAnswer: true },
    { question: "Dopo la nascita il forame ovale diventa la fossa ovale.", correctAnswer: true },
    { question: "Le corde tendinee collegano i lembi valvolari ai muscoli papillari.", correctAnswer: true },
    { question: "La banda moderatrice si trova nel ventricolo sinistro.", correctAnswer: false },
    { question: "La valvola tricuspide è formata da due cuspidi.", correctAnswer: false },
    { question: "La valvola mitrale regola il flusso tra atrio e ventricolo sinistri.", correctAnswer: true },
    { question: "La valvola polmonare è una valvola semilunare a tre lembi.", correctAnswer: true },
    { question: "Durante la sistole ventricolare le valvole atrioventricolari sono chiuse.", correctAnswer: true },
    { question: "Il ventricolo sinistro ha pareti più sottili di quello destro.", correctAnswer: false },
    { question: "Il nodo seno-atriale si trova nella parete posteriore dell’atrio destro.", correctAnswer: true },
    { question: "Le vie internodali collegano il nodo seno-atriale al nodo atrioventricolare.", correctAnswer: true },
    { question: "Il sistema di conduzione cardiaca è costituito da muscolatura liscia specializzata.", correctAnswer: false },
    { question: "Il colon sigmoideo ha decorso a S e termina nel retto.", correctAnswer: true },
    { question: "Il retto è lungo circa 5 cm.", correctAnswer: false },
    { question: "L’ano è rivestito da epitelio pavimentoso stratificato corneificato.", correctAnswer: true },
    { question: "Lo sfintere anale interno è costituito da muscolatura scheletrica.", correctAnswer: false },
    { question: "Il fegato è fissato alla parete addominale anteriore dal legamento falciforme.", correctAnswer: true },
    { question: "Il legamento rotondo del fegato è il residuo della vena ombelicale fetale.", correctAnswer: true },
    { question: "Il fegato occupa l’ipocondrio destro, l’epigastrio e parte dell’ipocondrio sinistro.", correctAnswer: true },
    { question: "Il fegato pesa in media circa 3 kg.", correctAnswer: false },
    { question: "Il fegato è un organo retroperitoneale.", correctAnswer: false },
    { question: "Il sistema nervoso periferico comprende nervi e gangli.", correctAnswer: true },
    { question: "La sostanza bianca del SNC è costituita principalmente da corpi neuronali.", correctAnswer: false },
    { question: "I vasa nervorum decorrono nell’epinevrio.", correctAnswer: false },
    { question: "Nell’uomo si stimano 100-1000 miliardi di neuroni.", correctAnswer: true },
    { question: "Il citoscheletro fa parte del citoplasma cellulare.", correctAnswer: true },
    { question: "I perossisomi sono organelli non membranosi.", correctAnswer: false },
    { question: "Il complesso di Golgi presenta convessità rivolta verso il nucleo.", correctAnswer: true },
    { question: "I ribosomi sono costituiti da proteine e RNA.", correctAnswer: true },
    { question: "Il reticolo endoplasmatico liscio è specializzato nella sintesi proteica.", correctAnswer: false },
    { question: "Il tronco encefalico comprende mesencefalo, ponte e midollo allungato.", correctAnswer: true },
    { question: "I nuclei somatomotori ricevono proiezioni corticali bilaterali, eccetto quelli del VII e XII nervo.", correctAnswer: true },
    { question: "La formazione reticolare è confinata al solo mesencefalo.", correctAnswer: false },
    { question: "La regione laterale della formazione reticolare contiene grossi neuroni di proiezione.", correctAnswer: false },
    { question: "Nel cervelletto le lamelle presentano sostanza bianca centrale e grigia periferica.", correctAnswer: true },
    { question: "Le lamelle cerebellari sono organizzate in strutture dette foglie cerebellari.", correctAnswer: true },
    { question: "Il lobo medio è presente solo nel polmone destro.", correctAnswer: true },
    { question: "Con la riduzione della cartilagine bronchiale aumenta la muscolatura liscia nella parete aerea.", correctAnswer: true },
    { question: "L’ortosimpatico provoca broncocostrizione.", correctAnswer: false },
    { question: "Il piano sagittale divide il corpo in metà destra e sinistra.", correctAnswer: true },
    { question: "Un punto più lontano dal piano sagittale si definisce mediale.", correctAnswer: false },
    { question: "Il piano frontale è perpendicolare al piano trasversale.", correctAnswer: true },
    { question: "I piani trasversali separano porzioni craniali e caudali del corpo.", correctAnswer: true },
    { question: "Il termine “craniale” può essere usato come sinonimo di “rostrale”.", correctAnswer: true },
    { question: "Le suture craniche rimangono completamente mobili per tutta la vita.", correctAnswer: false },
    { question: "Le pareti alveolari sono formate da penumociti di tipo I che favoriscono lo scambio gassoso.", correctAnswer: true }
  ],

  /* -------------------- 114-140 -------------------- */
  "114-140": [
    { question: "L’apparato urinario elimina scorie e partecipa al mantenimento dell’omeostasi idro-elettrolitica.", correctAnswer: true },
    { question: "L’apparato urinario comprende un solo rene ma due ureteri.", correctAnswer: false },
    { question: "I reni ricevono circa il 25 % del flusso ematico della grande circolazione.", correctAnswer: true },
    { question: "Il peso medio di un rene adulto giovane è di circa 250 g.", correctAnswer: true },
    { question: "Con l’avanzare dell’età il peso renale aumenta fino a 300 g.", correctAnswer: false },
    { question: "I reni si proiettano approssimativamente tra le vertebre T12 ed L3.", correctAnswer: true },
    { question: "Il polo superiore di ciascun rene è in diretto contatto con il surrene.", correctAnswer: true },
    { question: "La capsula fibrosa è lo strato più interno che riveste il rene.", correctAnswer: true },
    { question: "La fascia renale è racchiusa all’interno della capsula adiposa.", correctAnswer: false },
    { question: "Il seno renale è una cavità centrale che accoglie vasi, grasso e vie urinarie intrarenali.", correctAnswer: true },
    { question: "La corticale renale costituisce lo strato più esterno del parenchima.", correctAnswer: true },
    { question: "Le papille renali corrispondono agli apici delle colonne renali.", correctAnswer: false },
    { question: "Un lobo renale è formato da una piramide e dalla corticale sovrastante.", correctAnswer: true },
    { question: "L’ilo renale è situato sul margine laterale dell’organo.", correctAnswer: false },
    { question: "I dotti collettori sboccano direttamente nei calici renali minori senza passare per i dotti papillari.", correctAnswer: false },
    { question: "La pelvi renale è la continuazione dei calici maggiori all’ilo.", correctAnswer: true },
    { question: "Le arterie interlobari decorrono lungo il confine cortico-midollare.", correctAnswer: false },
    { question: "Le arterie arcuate si trovano al limite tra midollare e corticale.", correctAnswer: true },
    { question: "Dalle arterie interlobulari nascono le arteriole afferenti dei glomeruli.", correctAnswer: true },
    { question: "Circa l’80 % dei nefroni è di tipo corticale.", correctAnswer: true },
    { question: "I nefroni iuxtamidollari possiedono tubuli molto brevi.", correctAnswer: false },
    { question: "Le vasa recta accompagnano l’ansa di Henle dei nefroni iuxtamidollari.", correctAnswer: true },
    { question: "Il corpuscolo renale è localizzato esclusivamente nella midollare.", correctAnswer: false },
    { question: "L’epitelio parietale della capsula di Bowman è pavimentoso semplice.", correctAnswer: true },
    { question: "I podociti costituiscono la parete parietale della capsula glomerulare.", correctAnswer: false },
    { question: "Fra i pedicelli dei podociti si trovano le fessure di filtrazione.", correctAnswer: true },
    { question: "Le cellule mesangiali glomerulari possono secernere renina.", correctAnswer: true },
    { question: "Il filtrato glomerulare è normalmente ricco di proteine plasmatiche.", correctAnswer: false },
    { question: "Dalle arteriole efferenti originano i capillari peritubulari che circondano il tubulo renale.", correctAnswer: true },
    { question: "Il tubulo contorto prossimale nasce al polo urinario della capsula di Bowman.", correctAnswer: true },
    { question: "L’ansa di Henle è contenuta interamente nella corticale renale.", correctAnswer: false },
    { question: "Il tubulo contorto distale è privo di microvilli.", correctAnswer: true },
    { question: "L’ADH aumenta la permeabilità dei dotti collettori all’acqua.", correctAnswer: true },
    { question: "La macula densa fa parte del tubulo contorto distale.", correctAnswer: true },
    { question: "Le cellule iuxtaglomerulari appartengono alla parete dell’arteria renale principale.", correctAnswer: false },
    { question: "L’apparato iuxtaglomerulare contribuisce al controllo pressorio attraverso la renina.", correctAnswer: true },
    { question: "Gli ureteri sono retroperitoneali lungo tutto il loro decorso.", correctAnswer: true },
    { question: "Nella tonaca muscolare degli ureteri lo strato longitudinale è interno e quello circolare esterno.", correctAnswer: true },
    { question: "La lunghezza media di ciascun uretere è di circa 30 cm.", correctAnswer: true },
    { question: "Negli uomini gli ureteri attraversano la parete del diaframma toracico prima di raggiungere la vescica.", correctAnswer: false },
    { question: "Solo la faccia superiore della vescica è rivestita da peritoneo viscerale.", correctAnswer: true },
    { question: "Nella femmina la vescica è situata anteriormente alla vagina.", correctAnswer: true },
    { question: "Nel maschio la vescica è posta dietro la sinfisi pubica e davanti al retto.", correctAnswer: true },
    { question: "Le ghiandole di Littré sono abbondanti nell’uretra cavernosa maschile.", correctAnswer: true },
    { question: "Durante la prima fase dell’eiaculazione entrambi gli sfinteri uretrali risultano aperti.", correctAnswer: false },
    { question: "Lo sfintere uretrale esterno è formato da muscolatura striata.", correctAnswer: true },
    { question: "L’uretra è rivestita da urotelio per tutta la sua lunghezza.", correctAnswer: false },
    { question: "Il dotto cistico si unisce al dotto epatico comune formando il coledoco.", correctAnswer: true },
    { question: "Lo sfintere di Oddi circonda il coledoco prima che esso si apra nel duodeno.", correctAnswer: true },
    { question: "Il pancreas si estende dalla testa incastonata nel duodeno fino alla coda adiacente alla milza.", correctAnswer: true },
    { question: "La componente endocrina del pancreas è costituita dagli acini pancreatici.", correctAnswer: false },
    { question: "Il dotto pancreatico principale di Wirsung confluisce nel duodeno.", correctAnswer: true },
    { question: "Il dotto pancreatico accessorio di Santorini è sempre assente.", correctAnswer: false },
    { question: "Il pancreas riceve sangue dalle arterie splenica, mesenterica superiore ed epatica.", correctAnswer: true },
    { question: "Le vie respiratorie superiori includono naso, cavità nasali, seni paranasali e faringe.", correctAnswer: true },
    { question: "La porzione di conduzione del tratto respiratorio comprende i bronchioli terminali.", correctAnswer: true },
    { question: "L’epitelio respiratorio tipico è pseudostratificato ciliato con cellule caliciformi.", correctAnswer: true },
    { question: "Nei bronchioli più piccoli l’epitelio diventa cubico con poche ciglia.", correctAnswer: true },
    { question: "Negli alveoli l’epitelio è pavimentoso specializzato per gli scambi gassosi.", correctAnswer: true },
    { question: "Ogni ampolla dei canali semicircolari contiene una cresta ampollare con cupola gelatinosa.", correctAnswer: true },
    { question: "Secondo il testo, l’utricolo risponde ad accelerazioni verticali mentre il sacculo a quelle orizzontali.", correctAnswer: true },
    { question: "Nel riflesso vestibolo-oculare gli occhi ruotano nello stesso senso del capo.", correctAnswer: false },
    { question: "Il sistema nervoso autonomo efferente è costituito da componenti ortosimpatica e parasimpatica.", correctAnswer: true },
    { question: "La componente simpatica è predominante nelle situazioni di riposo e digestione.", correctAnswer: false },
    { question: "Il plesso mioenterico di Auerbach coordina i movimenti della muscolatura del tubo digerente.", correctAnswer: true },
    { question: "Il plesso sottomucoso di Meissner regola la secrezione ghiandolare della parete intestinale.", correctAnswer: true },
    { question: "La peristalsi è un movimento di frammentazione e rimescolamento del bolo.", correctAnswer: false },
    { question: "Il numero di neuroni enterici è di poco inferiore a quello della corteccia cerebrale.", correctAnswer: true },
    { question: "Il tubo gastroenterico può mantenere peristalsi anche se denervato esternamente.", correctAnswer: true },
    { question: "Il sistema parasimpatico è chiamato anche metasimpatico.", correctAnswer: false },
    { question: "Il tessuto muscolare liscio è innervato da fibre del sistema nervoso autonomo.", correctAnswer: true },
    { question: "Le fibre muscolari lisce presentano striature trasversali analoghe a quelle scheletriche.", correctAnswer: false },
    { question: "Nel cuore esistono cardiomiociti specializzati che fungono da pacemaker e vie di conduzione.", correctAnswer: true },
    { question: "Lo scheletro appendicolare comprende cranio, colonna e gabbia toracica.", correctAnswer: false },
    { question: "Nelle ossa piatte il diploe è compreso tra due strati di osso compatto.", correctAnswer: true },
    { question: "Le ossa lunghe presentano due epifisi e una diafisi centrale.", correctAnswer: true },
    { question: "Il tessuto osseo compatto occupa la parte più interna dell’osso lungo.", correctAnswer: false },
    { question: "Le arterie ombelicali fetali trasportano sangue povero di O₂ verso la placenta.", correctAnswer: true },
    { question: "Alla nascita il dotto arterioso di Botallo va incontro a chiusura funzionale.", correctAnswer: true },
    { question: "Il forame ovale fetale consente il passaggio di sangue dall’atrio destro al sinistro.", correctAnswer: true },
    { question: "Dopo la nascita il forame ovale si trasforma nel legamento rotondo del fegato.", correctAnswer: false },
    { question: "L’epinevrio è la guaina connettivale più esterna che riveste l’intero nervo.", correctAnswer: true },
    { question: "Il perinevrio interno contiene i vasa nervorum.", correctAnswer: true },
    { question: "L’endonevrio avvolge fasci multipli di fibre nervose.", correctAnswer: false },
    { question: "La componente esocrina del pancreas secerne enzimi digestivi e soluzioni tampone alcaline.", correctAnswer: true },
    { question: "Il dotto pancreatico principale di Wirsung sbocca direttamente nel duodeno.", correctAnswer: true },
    { question: "Gli isolotti di Langerhans sono raggruppamenti di lobuli esocrini.", correctAnswer: false },
    { question: "Il sistema respiratorio contribuisce al controllo del pH dei fluidi corporei.", correctAnswer: true },
    { question: "L’epitelio della porzione inferiore della faringe è pavimentoso stratificato.", correctAnswer: true },
    { question: "I bronchioli terminali appartengono ancora alla porzione di conduzione delle vie aeree.", correctAnswer: true },
    { question: "Il sistema limbico comprende il giro cingolo e l’amigdala.", correctAnswer: true },
    { question: "Il corpo striato è formato da nucleo caudato e putamen.", correctAnswer: true },
    { question: "Il claustro è laterale al corpo striato e mediale alla corteccia dell’insula.", correctAnswer: true },
    { question: "L’amigdala è situata nel lobo occipitale.", correctAnswer: false },
    { question: "L’area di Broca (44-45) è deputata alla produzione del linguaggio.", correctAnswer: true },
    { question: "Il fascicolo arcuato connette l’area di Wernicke con l’area di Broca.", correctAnswer: true },
    { question: "Negli individui destrimani la dominanza emisferica per il linguaggio è normalmente a destra.", correctAnswer: false },
    { question: "Il giro cingolo circonda il corpo calloso ed è parte del sistema limbico.", correctAnswer: true },
    { question: "Negli homunculi corticali la grandezza di ogni regione riflette la densità di innervazione, non le dimensioni fisiche.", correctAnswer: true },
    { question: "Nella corteccia somatosensoriale i neuroni del piede sono adiacenti a quelli della mano.", correctAnswer: false }
  ],

  /* -------------------- PROVA FINALE -------------------- */
  "ProvaFinale": [
    { question: "Il citoplasma è la porzione del protoplasma compresa tra membrana plasmatica e nucleo.", correctAnswer: true },
    { question: "I lisosomi sono organelli delimitati da doppia membrana identica a quella mitocondriale.", correctAnswer: false },
    { question: "La cartilagine elastica è costituita prevalentemente da fibre collagene di tipo I.", correctAnswer: false },
    { question: "La cartilagine articolare è priva di pericondrio.", correctAnswer: true },
    { question: "Il piano trasversale separa il corpo in porzioni craniale e caudale.", correctAnswer: true },
    { question: "Nelle vertebre cervicali tipiche i forami nei processi trasversi permettono il passaggio delle arterie vertebrali.", correctAnswer: true },
    { question: "Il legamento coraco-clavicolare è formato da due fasci, conoide e trapezoide.", correctAnswer: true },
    { question: "La cavità glenoidea della scapola si articola con il capitello del radio.", correctAnswer: false },
    { question: "I menischi del ginocchio sono costituiti da fibrocartilagine.", correctAnswer: true },
    { question: "Il legamento crociato anteriore impedisce alla tibia di traslare posteriormente rispetto al femore.", correctAnswer: false },
    { question: "Il muscolo grande gluteo è più superficiale del medio gluteo.", correctAnswer: true },
    { question: "Il muscolo brachiale si inserisce sulla tuberosità dell’ulna e flette l’avambraccio.", correctAnswer: true },
    { question: "Il bicipite brachiale si inserisce sulla tuberosità radiale.", correctAnswer: true },
    { question: "Il nervo tibiale innerva l’intero compartimento posteriore della gamba, incluso il tricipite della sura.", correctAnswer: true },
    { question: "Il legamento deltoideo origina dal malleolo mediale.", correctAnswer: true },
    { question: "Le fibre dell’emiretina temporale decussano nel chiasma ottico.", correctAnswer: false },
    { question: "L’area visiva primaria corrisponde all’area 17 di Brodmann, intorno alla scissura calcarina.", correctAnswer: true },
    { question: "La cornea è riccamente vascolarizzata.", correctAnswer: false },
    { question: "Il lobo medio polmonare è presente soltanto a sinistra.", correctAnswer: false },
    { question: "L’attivazione parasimpatica provoca broncocostrizione dei bronchioli.", correctAnswer: true },
    { question: "Il ventricolo sinistro possiede pareti più spesse del destro.", correctAnswer: true },
    { question: "Durante la sistole ventricolare le valvole semilunari sono aperte.", correctAnswer: true },
    { question: "Dopo la nascita il dotto arterioso di Botallo si trasforma nel legamento arterioso.", correctAnswer: true },
    { question: "Il fegato è un organo intraperitoneale ancorato dal legamento falciforme.", correctAnswer: true },
    { question: "I nefroni iuxtamidollari possiedono anse di Henle più lunghe di quelle dei nefroni corticali.", correctAnswer: true },
    { question: "L’ADH riduce la permeabilità dei dotti collettori all’acqua.", correctAnswer: false },
    { question: "Lo sfintere uretrale interno è formato da muscolatura liscia.", correctAnswer: true },
    { question: "La parte endocrina del pancreas è costituita dagli isolotti di Langerhans che secernono insulina e glucagone.", correctAnswer: true },
    { question: "Il sistema nervoso enterico può mantenere la peristalsi anche in assenza di input extrinseci.", correctAnswer: true },
    { question: "Il plesso sottomucoso di Meissner si trova tra gli strati della muscolatura liscia intestinale.", correctAnswer: false },
    { question: "Il muscolo tensore della fascia lata, tramite la benderella ileotibiale, contribuisce all’estensione del ginocchio.", correctAnswer: true },
    { question: "La cuffia dei rotatori è formata dai tendini di sovraspinato, infraspinato, piccolo rotondo e sottoscapolare.", correctAnswer: true },
    { question: "Le sinapsi asimmetriche sono generalmente eccitatorie.", correctAnswer: true },
    { question: "La quantità di sostanza bianca nel midollo spinale diminuisce procedendo cranio-caudalmente.", correctAnswer: true },
    { question: "Le arterie vertebrali derivano direttamente dalle carotidi comuni.", correctAnswer: false },
    { question: "Il muscolo popliteo appartiene al compartimento posteriore profondo della gamba e flette medialmente il ginocchio.", correctAnswer: true },
    { question: "La membrana respiratoria alveolo-capillare è spessa circa 0,5 µm per favorire la diffusione dei gas.", correctAnswer: true },
    { question: "L’osso ioide si articola con la cartilagine tiroidea tramite una sincondrosi.", correctAnswer: false },
    { question: "Il tessuto adiposo bruno è metabolicamente meno attivo di quello bianco.", correctAnswer: false },
    { question: "Il sistema limbico comprende ippocampo, amigdala, giro cingolo e corpi mammillari.", correctAnswer: true }
  ]
};

/* ===============================================================
   FINE OGGETTO 'quizzes'
   =============================================================== */



/* ===============================================================
   VARIABILI GLOBALI & COSTANTI
   =============================================================== */
let currentQuizKey   = null;   // stringa chiave (es. "0-28" o "ProvaFinale")
let currentQuestions = [];     // array di domande in corso
let currentIndex     = 0;      // indice domanda corrente
let correctAnswers   = 0;      // conteggio risposte corrette

const FINAL_DURATION = 1500;   // 25 minuti (in secondi)
let  timeLeft        = FINAL_DURATION;
let  timerInterval   = null;   // ID setInterval

/* ===============================================================
   RIFERIMENTI AL DOM
   =============================================================== */
const homeSection  = document.getElementById("home");
const quizListDiv  = document.getElementById("quiz-list");

const quizSection  = document.getElementById("quiz-container");
const quizTitle    = document.getElementById("quiz-title");
const timerBox     = document.getElementById("timer");
const questionText = document.getElementById("question-text");
const feedbackEl   = document.getElementById("feedback");
const counterEl    = document.getElementById("counter");

const trueBtn      = document.getElementById("true-btn");
const falseBtn     = document.getElementById("false-btn");
const nextBtn      = document.getElementById("next-btn");
const quitBtn      = document.getElementById("quit-btn");

const resultSection= document.getElementById("result-container");
const resultText   = document.getElementById("result-text");
const homeBtn      = document.getElementById("home-btn");

/* --- effetti sonori (file mp3 locali) --- */
const sfxGood = new Audio("correct.mp3");
const sfxBad  = new Audio("wrong.mp3");

/* ===============================================================
   INIZIALIZZAZIONE
   =============================================================== */
document.addEventListener("DOMContentLoaded", () => {
  buildQuizCards();                        // crea le “carte” nella home
  trueBtn .addEventListener("click", e => handleAnswer(true , e.target));
  falseBtn.addEventListener("click", e => handleAnswer(false, e.target));
  nextBtn .addEventListener("click", nextQuestion);
  quitBtn .addEventListener("click", returnHome);
  homeBtn .addEventListener("click", returnHome);
});

/* ===============================================================
   HOME – CREAZIONE CARDS DI SELEZIONE QUIZ
   =============================================================== */
function buildQuizCards(){
  if(!window.quizzes) return console.error("⚠️  Oggetto 'quizzes' mancante!");
  const palette = ["violet","teal","orange","yellow","red"];

  Object.keys(quizzes).forEach((key,i)=>{
    const card = document.createElement("div");
    card.className = "quiz-card";
    card.addEventListener("click", ()=> startQuiz(key));

    card.innerHTML = `
      <div class="top ${palette[i%palette.length]}">
        <h3>${key==="ProvaFinale" ? "Prova Finale" : `Quiz Pagine ${key}`}</h3>
        <span class="icon material-symbols-outlined">school</span>
      </div>
      <div class="bottom"><span>Seleziona</span></div>`;
    quizListDiv.appendChild(card);
  });
}

/* ===============================================================
   AVVIO QUIZ
   =============================================================== */
function startQuiz(key){
  currentQuizKey   = key;
  currentQuestions = [...quizzes[key]];   // copia difensiva
  currentIndex = correctAnswers = 0;

  quizTitle.textContent =
    key==="ProvaFinale" ? "Prova Finale" : `Quiz Pagine ${key}`;

  document.body.classList.add("playing");
  document.documentElement.classList.toggle("final-mode", key==="ProvaFinale");

  /* --- gestione timer solo per la finale ----------------------- */
  if(key === "ProvaFinale"){
    timerBox.classList.remove("hidden");
    quitBtn .classList.add   ("hidden");
    timeLeft = FINAL_DURATION;
    updateTimerDisplay();
    timerInterval = setInterval(countDown, 1000);
  }else{
    timerBox.classList.add("hidden");
    quitBtn .classList.remove("hidden");
  }

  homeSection .classList.add   ("hidden");
  quizSection .classList.remove("hidden");
  resultSection.classList.add  ("hidden");

  renderQuestion();
}

/* ===============================================================
   STAMPA DOMANDA
   =============================================================== */
function renderQuestion(){
  /* fine quiz? */
  if(currentIndex >= currentQuestions.length){
    endQuiz();
    return;
  }

  const q = currentQuestions[currentIndex];

  questionText.textContent =
    `Domanda ${currentIndex+1}/${currentQuestions.length}\n\n${q.question}`;
  counterEl.textContent = currentIndex + 1;

  feedbackEl.textContent = "";
  feedbackEl.className   = "feedback";

  trueBtn .disabled = false;
  falseBtn.disabled = false;
  nextBtn .classList.add("hidden");
}

/* ===============================================================
   GESTIONE RISPOSTA
   =============================================================== */
function handleAnswer(choice, btn){
  const isCorrect = currentQuestions[currentIndex].correctAnswer === choice;
  const isStandard = currentQuizKey !== "ProvaFinale";

  /* --- feedback visivo/sonoro (solo standard) ------------------ */
  if(isStandard){
    btn.classList.add(isCorrect ? "flash-good" : "flash-bad");
    if(!isCorrect) btn.classList.add("shake");

    /* piccola icona animata */
    const fx = document.createElement("span");
    fx.className   = "fx-icon material-symbols-outlined";
    fx.textContent = isCorrect ? "check_circle" : "cancel";
    fx.style.color = isCorrect ? "#22b266" : "#e74c3c";
    fx.style.top   = `${btn.offsetTop - 28}px`;
    fx.style.left  = `${btn.offsetLeft + btn.offsetWidth/2 - 12}px`;
    btn.parentElement.appendChild(fx);

    /* rimuovi effetti dopo 600 ms */
    setTimeout(()=> {
      btn.classList.remove("flash-good","flash-bad","shake");
      fx.remove();
    }, 600);

    /* suono */
    (isCorrect ? sfxGood : sfxBad).play().catch(()=>{});
  }

  /* --- feedback testuale --------------------------------------- */
  if(isCorrect){
    correctAnswers++;
    feedbackEl.textContent = "Corretto ✓";
    feedbackEl.classList.add("correct");
  }else{
    feedbackEl.textContent = "Sbagliato ✗";
    feedbackEl.classList.add("wrong");
  }

  trueBtn .disabled = true;
  falseBtn.disabled = true;
  nextBtn .classList.remove("hidden");
}

/* ===============================================================
   NAVIGAZIONE / FINE QUIZ / RITORNO HOME
   =============================================================== */
function nextQuestion(){ currentIndex++; renderQuestion(); }

function endQuiz(){
  clearInterval(timerInterval);

  quizSection .classList.add   ("hidden");
  resultSection.classList.remove("hidden");
  resultText.textContent =
    `Risposte corrette: ${correctAnswers} su ${currentQuestions.length}.`;
}

function returnHome(){
  clearInterval(timerInterval);

  quizSection .classList.add ("hidden");
  resultSection.classList.add("hidden");
  homeSection  .classList.remove("hidden");

  document.body.classList.remove("playing");
  document.documentElement.classList.remove("final-mode");
}

/* ===============================================================
   TIMER (solo Prova Finale)
   =============================================================== */
function countDown(){
  timeLeft--;
  updateTimerDisplay();
  if(timeLeft <= 0){
    feedbackEl.textContent = "Tempo scaduto! Quiz chiuso.";
    trueBtn .disabled = falseBtn.disabled = true;
    nextBtn .classList.add("hidden");
    clearInterval(timerInterval);
    setTimeout(endQuiz, 1500);
  }
}
function updateTimerDisplay(){
  const m = String(Math.floor(timeLeft / 60)).padStart(2,"0");
  const s = String(timeLeft % 60).padStart(2,"0");
  timerBox.textContent = `${m}:${s}`;
}
