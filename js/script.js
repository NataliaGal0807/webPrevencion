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

/* ==========================================================
   SLIDER DE SERVICIOS DESTACADOS (solo en index.html)
   - Muestra 3 tarjetas (2 en tablet, 1 en móvil)
   - Flechas, indicadores, swipe táctil y avance automático
   ========================================================== */

// Agrega o quita servicios aquí. "id" debe coincidir con el id del
// servicio en misServicios para que "Leer más" abra el acordeón correcto.
// "imagen": ruta de la foto de fondo. Si es null se usa un fondo de color.
const serviciosDestacados = [
  {
    id: "cursos-primeros-auxilios",
    titulo: "Cursos de Primeros Auxilios",
    texto:
      "Formación práctica para actuar ante emergencias médicas y estabilizar víctimas con técnicas vitales como RCP y maniobra de Heimlich.",
    icono: "bi-heart-pulse",
    imagen: "img/primeros-auxilios.jpg",
  },
  {
    id: "ley-karin",
    titulo: "Ley N° 21.643 (Ley Karin)",
    texto:
      "Normativa enfocada en prevenir, investigar y sancionar el acoso y la violencia en el trabajo, promoviendo ambientes seguros.",
    icono: "bi-file-earmark-text",
    imagen: "img/ley-karin.jpg",
  },
  {
    id: "asesorias-terreno",
    titulo: "Asesorías en Terreno",
    texto:
      "Visitas presenciales a faenas para detectar desviaciones en tiempo real y asegurar que las normativas de seguridad se apliquen.",
    icono: "bi-shield-check",
    imagen: "img/asesoria-terreno.jpg",
  },
  {
    id: "diagnostico-prevencion",
    titulo: "Diagnóstico en Prevención de Riesgos Laborales",
    texto:
      "Diagnóstico inicial y plan de acción preventivo a medida para cumplir la normativa sin frenar su productividad.",
    icono: "bi-clipboard-check",
    imagen: "img/diagnostico-prevencion.jpg",
  },
  {
    id: "carpetas-arranque",
    titulo: "Elaboración de Carpetas de Arranque",
    texto:
      "Gestión y validación de documentación de seguridad para autorizar el inicio de sus obras sin contratiempos.",
    icono: "bi-clipboard-check",
    imagen: "img/carpetas-arranque.jpg",
  },
  {
    id: "reglamento-interno-riohs",
    titulo: "Reglamento Interno (RIOHS)",
    texto:
      "Elaboramos y actualizamos el reglamento que fija derechos, obligaciones y sanciones en materia de orden, higiene y seguridad.",
    icono: "bi-journal-text",
    imagen: "img/reglamento-interno.jpg",
  },
  {
    id: "gestion-cphs",
    titulo: "Gestión del Comité Paritario (CPHS)",
    texto:
      "Asesoría para constituir y hacer funcionar su Comité Paritario, capacitando a sus representantes para prevenir accidentes.",
    icono: "bi-people-fill",
    imagen: "img/gestion-cphs.jpg",
  },
  {
    id: "capacitaciones",
    titulo: "Capacitaciones e IRL",
    texto:
      "Capacitación en Información de Riesgos Laborales (IRL) y autocuidado para un cumplimiento legal y seguro desde el primer día.",
    icono: "bi-mortarboard",
    imagen: "img/capacitaciones.jpg",
  },
];

const sliderServicios = document.getElementById("sliderServicios");

if (sliderServicios) {
  const INTERVALO_MS = 4000; // Tiempo entre movimientos automáticos
  const track = document.getElementById("sliderTrack");
  const viewport = document.getElementById("sliderViewport");
  const btnPrev = document.getElementById("sliderPrev");
  const btnNext = document.getElementById("sliderNext");
  const dotsBox = document.getElementById("sliderDots");
  const reducirMovimiento = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  let indice = 0;
  let porVista = obtenerPorVista();
  let timer = null;

  // 1. Generar las tarjetas
  track.innerHTML = serviciosDestacados
    .map((s) => {
      const claseFondo = s.imagen ? "" : " sin-imagen";
      const estiloFondo = s.imagen
        ? `style="background-image: url('${s.imagen}')"`
        : "";
      return `
        <div class="slider-slide">
          <div class="card card-servicio-pro h-100 border-0 shadow">
            <div class="card-img-bg${claseFondo}" ${estiloFondo}></div>
            <div class="card-overlay"></div>
            <div class="card-body p-4 d-flex flex-column position-relative text-white">
              <div class="icon-circle mb-3"><i class="bi ${s.icono}"></i></div>
              <h4 class="card-title fw-bold" style="font-size: 1.2rem">${s.titulo}</h4>
              <p class="card-text text-light opacity-85" style="font-size: 0.9rem">${s.texto}</p>
              <a href="servicios.html#${s.id}" class="fw-bold text-decoration-none mt-auto align-self-start d-flex align-items-center link-card">
                LEER MÁS <i class="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>`;
    })
    .join("");

  const slides = Array.from(track.children);

  // 2. Cuántas tarjetas se ven según el ancho de pantalla
  function obtenerPorVista() {
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 576) return 2;
    return 1;
  }

  function maxIndice() {
    return Math.max(0, slides.length - porVista);
  }

  // 3. Indicadores (puntos)
  function crearDots() {
    dotsBox.innerHTML = "";
    for (let i = 0; i <= maxIndice(); i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slider-dot";
      dot.setAttribute("aria-label", `Ir a la posición ${i + 1}`);
      dot.addEventListener("click", () => {
        irA(i);
        reiniciarAuto();
      });
      dotsBox.appendChild(dot);
    }
  }

  // 4. Mover el slider (con vuelta al inicio/final)
  function irA(nuevo) {
    if (nuevo > maxIndice()) nuevo = 0;
    if (nuevo < 0) nuevo = maxIndice();
    indice = nuevo;

    sliderServicios.style.setProperty("--por-vista", porVista);
    track.style.transform = `translateX(-${indice * (100 / porVista)}%)`;

    // Tarjetas fuera de vista: no enfocables con teclado
    slides.forEach((slide, i) => {
      const visible = i >= indice && i < indice + porVista;
      slide.toggleAttribute("inert", !visible);
      slide.setAttribute("aria-hidden", String(!visible));
    });

    Array.from(dotsBox.children).forEach((dot, i) => {
      dot.classList.toggle("activo", i === indice);
      dot.setAttribute("aria-current", i === indice ? "true" : "false");
    });
  }

  // 5. Movimiento automático
  function iniciarAuto() {
    detenerAuto();
    if (reducirMovimiento) return; // Respeta la preferencia del usuario
    timer = setInterval(() => irA(indice + 1), INTERVALO_MS);
  }

  function detenerAuto() {
    clearInterval(timer);
    timer = null;
  }

  function reiniciarAuto() {
    iniciarAuto();
  }

  // 6. Eventos
  btnNext.addEventListener("click", () => {
    irA(indice + 1);
    reiniciarAuto();
  });

  btnPrev.addEventListener("click", () => {
    irA(indice - 1);
    reiniciarAuto();
  });

  // Pausar al pasar el mouse o al enfocar con teclado
  sliderServicios.addEventListener("mouseenter", detenerAuto);
  sliderServicios.addEventListener("mouseleave", iniciarAuto);
  sliderServicios.addEventListener("focusin", detenerAuto);
  sliderServicios.addEventListener("focusout", iniciarAuto);

  // Pausar cuando la pestaña no está visible
  document.addEventListener("visibilitychange", () => {
    document.hidden ? detenerAuto() : iniciarAuto();
  });

  // Deslizar con el dedo (o arrastrar con el mouse)
  let inicioX = null;
  viewport.addEventListener("pointerdown", (e) => {
    inicioX = e.clientX;
  });
  viewport.addEventListener("pointerup", (e) => {
    if (inicioX === null) return;
    const diferencia = e.clientX - inicioX;
    inicioX = null;
    if (Math.abs(diferencia) > 50) {
      irA(indice + (diferencia < 0 ? 1 : -1));
      reiniciarAuto();
    }
  });
  viewport.addEventListener("pointercancel", () => {
    inicioX = null;
  });

  // Recalcular al cambiar el tamaño de la ventana
  window.addEventListener("resize", () => {
    const nuevoPorVista = obtenerPorVista();
    if (nuevoPorVista !== porVista) {
      porVista = nuevoPorVista;
      crearDots();
      irA(Math.min(indice, maxIndice()));
    }
  });

  // 7. Arranque
  crearDots();
  irA(0);
  iniciarAuto();
}

// Inicializar AOS
AOS.init({
  duration: 900, // Duración de la animación en milisegundos
  once: true, // La animación ocurre solo una vez al hacer scroll hacia abajo
  offset: 100, // Distancia (en px) desde abajo de la pantalla para que se active
});
