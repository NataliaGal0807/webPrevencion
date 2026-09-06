const misServicios = [
  {
    id: "cursos-primeros-auxilios",
    titulo: "Cursos de Primeros Auxilios",
    texto:
      "Preparamos a su equipo para convertirse en la primera línea de respuesta ante situaciones críticas. A través de formación práctica y dinámica, enseñamos técnicas vitales como la Reanimación Cardiopulmonar (RCP) y la maniobra de Heimlich. Nuestro objetivo es empoderar a sus colaboradores para que puedan estabilizar a una víctima y, literalmente, salvar vidas mientras llega la asistencia médica.",
  },

  {
    id: "capacitaciones",
    titulo:
      "Capacitaciones Especializadas e Información de los Riesgos Laborales",
    texto:
      "Garantizamos que su personal comprenda a cabalidad los riesgos asociados a sus labores diarias y las medidas de control necesarias para evitarlos. Cumplimos rigurosamente con la Información de los Riesgos Laborales (IRL), fomentando una cultura de autocuidado y asegurando que su empresa esté alineada con las exigencias legales desde el primer día de trabajo.",
  },

  {
    id: "politica-seguridad-salud",
    titulo: "Política de Seguridad y Salud en el Trabajo",
    texto:
      "Le ayudamos a redactar e implementar la declaración oficial de su gerencia frente a la seguridad. Más que un documento legal, elaboramos una hoja de ruta clara que establece los compromisos, valores y directrices fundamentales de su empresa para proteger la integridad física y mental de todos sus colaboradores.",
  },

  {
    id: "gestion-cphs",
    titulo: "Gestión del Comité Paritario de Higiene y Seguridad (CPHS)",
    texto:
      "Brindamos asesoría integral para la constitución y el funcionamiento eficiente de su Comité Paritario. Acompañamos a sus representantes en la adopción de su rol, capacitándolos para investigar accidentes, vigilar el cumplimiento de las normativas internas y convertirse en un motor activo de la prevención dentro de la empresa.",
  },

  {
    id: "ley-karin",
    titulo: "Implementación Ley N° 21.643 (Ley Karin)",
    texto:
      "Protegemos el clima laboral de su empresa adaptando sus procesos a las nuevas exigencias de la Ley Karin. Diseñamos e implementamos normativas enfocadas en prevenir, investigar y sancionar cualquier tipo de acoso o violencia en el trabajo, asegurando un entorno seguro, de buen trato y libre de contingencias legales.",
  },

  {
    id: "asesoria-legal",
    titulo: "Asesoría Legal en Prevención",
    texto:
      "Asesoramos a su empresa frente a posibles multas, paralizaciones o responsabilidades civiles y penales derivadas de accidentes o enfermedades profesionales. Entregamos orientación técnico-jurídica precisa para asegurar que todas sus operaciones cumplan con la normativa vigente.",
  },

  {
    id: "control-contratistas",
    titulo: "Control de Contratistas (Ley N° 20.123)",
    texto:
      "Protegemos a su empresa mandante frente a la responsabilidad solidaria y subsidiaria. Realizamos una fiscalización exhaustiva del cumplimiento laboral, previsional y preventivo de sus empresas subcontratistas, asegurando que operen bajo los mismos estándares de seguridad que su organización.",
  },

  {
    id: "reglamento-interno-riohs",
    titulo: "Reglamento Interno de Orden, Higiene y Seguridad (RIOHS)",
    texto:
      "Elaboramos y actualizamos el documento central que regula la convivencia y seguridad en su empresa. Este reglamento, de carácter obligatorio, es redactado de forma clara para fijar los derechos, obligaciones, prohibiciones y sanciones, garantizando un entorno de trabajo organizado, seguro y apegado a la ley.",
  },

  {
    id: "asesorias-terreno",
    titulo: "Asesorías y Auditorías en Terreno",
    texto:
      "Llevamos la prevención desde el papel directamente a la acción. Realizamos visitas presenciales a sus instalaciones o faenas para observar las operaciones en tiempo real, detectando desviaciones de forma temprana y asegurando que las normativas de seguridad se apliquen verdaderamente en el día a día.",
  },

  {
    id: "levantamiento-higiene-seguridad",
    titulo: "Levantamiento de Condiciones de Higiene y Seguridad",
    texto:
      "Ejecutamos inspecciones detalladas de cada área de trabajo para identificar de manera proactiva cualquier riesgo físico, químico, biológico o ergonómico. A partir de este análisis, diseñamos medidas preventivas eficaces para eliminar o controlar los peligros antes de que generen un accidente.",
  },

  {
    id: "diagnostico-prevencion",
    titulo: "Diagnóstico en Prevención de Riesgos Laborales",
    texto:
      "Conocer su punto de partida es vital. Realizamos una evaluación inicial completa del nivel de cumplimiento legal e interno de su empresa. Identificamos brechas, áreas de mejora y diseñamos un plan de acción preventivo a medida para alcanzar los estándares requeridos sin interrumpir su productividad.",
  },

  {
    id: "matriz-iper",
    titulo:
      "Matriz de Identificación de Peligros y Evaluación de Riesgos (IPER)",
    texto:
      "Desarrollamos la herramienta central de toda gestión preventiva. Documentamos meticulosamente cada actividad de su empresa, identificamos sus peligros asociados, evaluamos la magnitud del riesgo y definimos los controles específicos necesarios para mitigarlos, asegurando una operación controlada.",
  },

  {
    id: "procedimiento-trabajo-seguro",
    titulo: "Procedimiento de Trabajo Seguro (PTS)",
    texto:
      "Estandarizamos la seguridad en sus operaciones mediante documentos claros y detallados que explican el paso a paso correcto para ejecutar tareas críticas. Definimos responsabilidades precisas, métodos de trabajo y los Equipos de Protección Personal (EPP) obligatorios, minimizando el error humano.",
  },

  {
    id: "sistema-gestion-sgsst",
    titulo: "Sistema de Gestión en Seguridad y Salud en el Trabajo (SGSST)",
    texto:
      "Transformamos la prevención en un proceso de mejora continua. Estructuramos un sistema de administración de riesgos proactivo, integrado a los objetivos de su negocio y perfectamente alineable con normativas.",
  },

  {
    id: "carpetas-arranque",
    titulo: "Elaboración de Carpetas de Arranque",
    texto:
      "Garantizamos un inicio de obras sin contratiempos ni demoras. Nos encargamos de la recopilación, estructuración y validación técnica de toda la documentación de seguridad y salud ocupacional exigida por las autoridades o empresas mandantes para autorizar el inicio de su proyecto.",
  },

  {
    id: "programa-maquinaria",
    titulo: "Programa Preventivo de Seguridad en Maquinaria",
    texto:
      "Aseguramos la integridad de sus operadores y la continuidad de sus operaciones. Implementamos rigurosos controles, pautas de mantenimiento e inspecciones periódicas para garantizar que todas las maquinarias y herramientas funcionen bajo condiciones óptimas, evitando accidentes de alta gravedad.",
  },

  {
    id: "protocolos-minsal",
    titulo: "Elaboración e Implementación de Protocolos MINSAL",
    texto:
      "Cuidamos la salud a largo plazo de su equipo. Aplicamos, medimos y gestionamos el cumplimiento de todas las normativas exigidas por el Ministerio de Salud, evitando el desarrollo de enfermedades profesionales por exposición a agentes de riesgo.",
  },

  {
    id: "reduccion-riesgos-desastre",
    titulo: "Plan para la Reducción del Riesgo de Desastre",
    texto:
      "Preparamos a su empresa para afrontar lo inesperado. Diseñamos procedimientos estratégicos y operativos para enfrentar emergencias mayores, como sismos de alta magnitud o incendios estructurales, con el objetivo primordial de proteger vidas, salvaguardar activos y mantener la operatividad del negocio.",
  },

  {
    id: "plan-emergencias-evacuacion",
    titulo: "Plan de Emergencias y Evacuación (Ley N° 21.442)",
    texto:
      "Damos cumplimiento a las normativas vigentes para edificios y copropiedades, diseñando planes de emergencia detallados. Establecemos vías de escape seguras, zonas de seguridad y asignamos roles claros a los ocupantes para garantizar evacuaciones rápidas y ordenadas ante cualquier siniestro.",
  },

  {
    id: "informe-sanitario",
    titulo: "Informe Sanitario",
    texto:
      "Gestionamos la certificación técnica fundamental para su infraestructura. Acreditamos de manera formal ante las autoridades que las instalaciones, servicios básicos y procesos de su recinto cumplen a cabalidad con las normativas mínimas exigidas en materia de salud pública y laboral.",
  },

  {
    id: "calificacion-tecnica-industrial",
    titulo: "Calificación Técnica Industrial",
    texto:
      "Tramitamos y gestionamos ante la Seremi de Salud la correcta clasificación de su actividad económica (inofensiva, molesta, insalubre o peligrosa). Evaluamos los riesgos que sus operaciones representan para el entorno y los trabajadores, facilitando su regularización territorial.",
  },

  {
    id: "resolucion-sanitaria",
    titulo: "Resolución Sanitaria",
    texto:
      "Le acompañamos hasta obtener la luz verde para operar. Gestionamos la autorización definitiva emitida por la Seremi de Salud, asegurándonos de que su empresa sortee con éxito las verificaciones en terreno y demuestre que cumple con todos los estándares sanitarios e higiénicos vigentes.",
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
