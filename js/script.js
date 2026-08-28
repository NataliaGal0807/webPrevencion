const misServicios = [
  {
    id: "cursos-primeros-auxilios",
    titulo: "Cursos de Primeros Auxilios",
    texto:
      "Formación práctica para actuar ante emergencias médicas y estabilizar víctimas mediante técnicas vitales como RCP y la maniobra de Heimlich.",
  },
  {
    id: "ley-karin",
    titulo: "Ley N° 21.643 (Ley Karin)",
    texto:
      "Normativa enfocada en prevenir, investigar y sancionar el acoso y la violencia en el trabajo, promoviendo ambientes seguros y de buen trato.",
  },
  {
    id: "asesoria-legal",
    titulo: "Asesoría Legal",
    texto:
      "Orientación técnico-jurídica para asegurar el cumplimiento normativo de la empresa, previniendo multas y responsabilidades por accidentes o enfermedades.",
  },
  {
    id: "asesorias-terreno",
    titulo: "Asesorías en Terreno",
    texto:
      "Visitas presenciales a faenas para detectar desviaciones en tiempo real y asegurar que las normativas de seguridad se apliquen en la operación diaria.",
  },
  {
    id: "levantamiento-higiene-seguridad",
    titulo: "Levantamiento de Condiciones de Higiene y Seguridad",
    texto:
      "Inspección exhaustiva de las áreas de trabajo para identificar riesgos físicos, químicos o ergonómicos y aplicar medidas preventivas.",
  },
  {
    id: "diagnostico-prevencion",
    titulo: "Diagnóstico en Prevención de Riesgos Laborales",
    texto:
      "Evaluación inicial del nivel de cumplimiento legal de la empresa para identificar brechas y diseñar un plan de acción preventivo.",
  },
  {
    id: "control-contratistas",
    titulo: "Control de contratista (Ley N° 20.123)",
    texto:
      "Fiscalización del cumplimiento laboral y preventivo de subcontratistas, protegiendo a la empresa mandante de responsabilidades legales.",
  },
  {
    id: "protocolos-minsal",
    titulo: "Elaboración e Implementación de Protocolos MINSAL",
    texto:
      "Aplicación de normativas de salud (TMERT, PREXOR, etc.) para prevenir enfermedades profesionales por exposición a agentes de riesgo.",
  },
  {
    id: "carpetas-arranque",
    titulo: "Elaboración de Carpetas de Arranque",
    texto:
      "Recopilación y validación de toda la documentación de seguridad exigida para autorizar el inicio de una obra o proyecto.",
  },
  {
    id: "programa-maquinaria",
    titulo: "Programa Preventivo de Seguridad en Maquinaria (PPSMEHM)",
    texto:
      "Controles e inspecciones para garantizar la operación segura de maquinarias y herramientas, evitando accidentes graves.",
  },
  {
    id: "capacitaciones",
    titulo: "Capacitaciones",
    texto:
      "Instrucción a los trabajadores sobre los riesgos de sus labores y medidas de control, cumpliendo con el Derecho a Saber (ODI).",
  },
  {
    id: "matriz-iper",
    titulo:
      "Matriz de Identificación de Peligros y Evaluación de Riesgos (IPER)",
    texto:
      "Herramienta central que documenta los peligros de cada actividad, evalúa su riesgo y define cómo mitigarlos.",
  },
  {
    id: "reduccion-riesgos-desastre",
    titulo: "Plan para la Reducción del Riesgo de Desastre",
    texto:
      "Procedimientos estratégicos para enfrentar emergencias (incendios, sismos) con el fin de proteger vidas y mantener la operatividad.",
  },
  {
    id: "plan-emergencias-evacuacion",
    titulo: "Plan de Emergencias y Evacuación (Ley N° 21.442)",
    texto:
      "Planificación obligatoria para copropiedades que detalla vías de escape y roles para asegurar evacuaciones ordenadas ante emergencias.",
  },
  {
    id: "politica-seguridad-salud",
    titulo: "Política de Seguridad y Salud en el Trabajo",
    texto:
      "Declaración gerencial que establece los compromisos y directrices fundamentales para proteger la integridad de los trabajadores.",
  },
  {
    id: "gestion-cphs",
    titulo: "Gestión Comité Paritario de Higiene y Seguridad (CPHS)",
    texto:
      "Asesoría en la formación y funcionamiento de este comité encargado de investigar accidentes y vigilar el cumplimiento preventivo interno.",
  },
  {
    id: "procedimiento-trabajo-seguro",
    titulo: "Procedimiento de Trabajo Seguro (PTS)",
    texto:
      "Documento que detalla el paso a paso correcto para ejecutar una tarea, indicando responsabilidades y equipos de protección obligatorios.",
  },
  {
    id: "sistema-gestion-sgsst",
    titulo: "Sistema de Gestión en Seguridad y Salud en el Trabajo (SGSST)",
    texto:
      "Estructura de mejora continua para administrar riesgos laborales de forma proactiva, alineable con normativas como ISO 45001.",
  },
  {
    id: "reglamento-interno-riohs",
    titulo: "Reglamento Interno de Orden, Higiene y Seguridad (RIOHS)",
    texto:
      "Documento obligatorio que fija las normas, derechos, obligaciones y sanciones internas para garantizar un entorno seguro.",
  },
  {
    id: "informe-sanitario",
    titulo: "Informe Sanitario",
    texto:
      "Certificación técnica que acredita que las instalaciones y procesos de un recinto cumplen con las normativas mínimas de salud pública y laboral.",
  },
  {
    id: "calificacion-tecnica-industrial",
    titulo: "Calificación Técnica Industrial",
    texto:
      "Clasificación (inofensiva, molesta, peligrosa, etc.) otorgada por la Seremi de Salud según los riesgos que la actividad representa para su entorno.",
  },
  {
    id: "resolucion-sanitaria",
    titulo: "Resolución Sanitaria",
    texto:
      "Autorización de la Seremi de Salud que permite el funcionamiento de instalaciones tras verificar en terreno que cumplen con los estándares vigentes.",
  },
];

const container = document.getElementById("accordionServicios");

if (container) {
  // 1. Renderizamos los acordeones
  misServicios.forEach((item) => {
    container.innerHTML += `
      <div class="accordion-item border-top border-bottom-0 border-start-0 border-end-0">
        <h2 class="accordion-header" id="heading-${item.id}">
          <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${item.id}" aria-expanded="false" aria-controls="${item.id}">
            ${item.titulo}
          </button>
        </h2>
        <div id="${item.id}" class="accordion-collapse collapse" aria-labelledby="heading-${item.id}" data-bs-parent="#accordionServicios">
          <div class="accordion-body">${item.texto}</div>
        </div>
      </div>`;
  });

  // 2. Función que maneja la apertura y el scroll
  function activarAcordeonDesdeUrl() {
    const hash = window.location.hash;

    if (hash) {
      history.replaceState(null, null, window.location.pathname);
      const acordeonObjetivo = document.querySelector(hash);

      if (acordeonObjetivo) {
        // Si el acordeón YA ESTÁ abierto, solo hacemos scroll
        if (acordeonObjetivo.classList.contains("show")) {
          acordeonObjetivo.parentElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          history.replaceState(null, null, hash);
        } else {
          // Si está cerrado, lo abrimos y hacemos scroll
          const bsCollapse = new bootstrap.Collapse(acordeonObjetivo, {
            toggle: false,
          });

          acordeonObjetivo.addEventListener(
            "shown.bs.collapse",
            function () {
              acordeonObjetivo.parentElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
              history.replaceState(null, null, hash);
            },
            { once: true },
          );

          bsCollapse.show();
        }
      }
    }
  }

  // 3. Ejecutamos al cargar la página (cuando vienes desde el Inicio)
  activarAcordeonDesdeUrl();

  // 4. Ejecutamos si cambia la URL estando en la misma página (cuando haces clic en el footer de Servicios)
  window.addEventListener("hashchange", activarAcordeonDesdeUrl);
}

// Lógica para abrir/cerrar el widget de WhatsApp
const btnToggle = document.getElementById("btnWhatsAppToggle");
const whatsappBox = document.getElementById("whatsappBox");
const cerrarChat = document.getElementById("cerrarChat");

if (btnToggle && whatsappBox) {
  // Abrir o cerrar al hacer clic en el botón flotante
  btnToggle.addEventListener("click", () => {
    whatsappBox.classList.toggle("activo");
  });

  // Cerrar al hacer clic en la "X"
  if (cerrarChat) {
    cerrarChat.addEventListener("click", () => {
      whatsappBox.classList.remove("activo");
    });
  }
}

// Inicializar AOS
AOS.init({
  duration: 900, // Duración de la animación en milisegundos
  once: true, // La animación ocurre solo una vez al hacer scroll hacia abajo
  offset: 100, // Distancia (en px) desde abajo de la pantalla para que se active
});
