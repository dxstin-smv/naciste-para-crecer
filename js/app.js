/*
  CONFIGURACIÓN INICIAL
  1) EMAIL_DESTINO: correo donde José recibirá las evaluaciones.
  2) WHATSAPP_NUMERO: número con clave de país, solo dígitos. México: 52 + número.
  3) Activa FormSubmit desde el correo de confirmación que llegará al primer envío.
*/
const CONFIG = {
  EMAIL_DESTINO: "josecoaching.n@gmail.com",
  WHATSAPP_NUMERO: "52XXXXXXXXXX"
};

const steps = [
  {
    title: "Datos personales", kicker: "CONOZCAMOS TU PUNTO DE PARTIDA", description: "Comencemos con algunos datos básicos.",
    fields: [
      { id: "nombre", label: "Nombre completo", type: "text", placeholder: "Escribe tu nombre", required: true, full: true },
      { id: "edad", label: "Edad", type: "number", placeholder: "Ej. 25", min: 13, max: 100, required: true },
      { id: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "Tu número de contacto", required: true },
      { id: "correo", label: "Correo electrónico", type: "email", placeholder: "nombre@correo.com", required: true, full: true },
      { id: "ocupacion", label: "Ocupación", type: "text", placeholder: "¿A qué te dedicas?", full: true },
      { id: "horario", label: "Horario de trabajo o estudio", type: "textarea", placeholder: "Cuéntanos tus horarios habituales...", full: true }
    ]
  },
  {
    title: "Medidas", kicker: "TU PUNTO DE PARTIDA", description: "Estos datos son opcionales y sirven como referencia para tu proceso.",
    fields: [
      { id: "peso_actual", label: "Peso actual (kg)", type: "number", placeholder: "Ej. 70", min: 0, step: "0.1" },
      { id: "estatura", label: "Estatura (cm)", type: "number", placeholder: "Ej. 170", min: 0, step: "0.1" },
      { id: "peso_meta", label: "Peso meta (kg)", type: "number", placeholder: "Opcional", min: 0, step: "0.1", full: true }
    ]
  },
  {
    title: "Salud", kicker: "PRIMERO, TU BIENESTAR", description: "Comparte solo lo que consideres necesario. No sustituyas la orientación de un profesional de salud.",
    fields: [
      { id: "salud_condiciones", label: "¿Lesiones, dolor crónico, condición médica, cirugías o medicamentos?", type: "textarea", placeholder: "Describe lo que debamos tener en cuenta...", full: true },
      { id: "restriccion_medica", label: "¿Algún médico te ha restringido hacer ejercicio?", type: "select", options: ["Selecciona una opción", "No", "Sí", "No estoy seguro/a"], full: true },
      { id: "restriccion_detalle", label: "Si respondiste sí, explica brevemente", type: "textarea", placeholder: "Información adicional (opcional)...", full: true },
      { id: "alergias", label: "Alergias o intolerancias alimentarias", type: "textarea", placeholder: "Indica cuáles, si aplica...", full: true }
    ]
  },
  {
    title: "Experiencia física", kicker: "MOVIMIENTO Y ENTRENAMIENTO", description: "Queremos conocer tu experiencia y los recursos que tienes disponibles.",
    fields: [
      { id: "ejercicio_actual", label: "¿Qué ejercicio haces hoy y cuántos días a la semana?", type: "textarea", placeholder: "Cuéntanos tu actividad actual...", full: true },
      { id: "lugar_equipo", label: "¿Dónde entrenarás y con qué equipo?", type: "textarea", placeholder: "Casa, gimnasio, parque; equipo disponible...", full: true },
      { id: "ejercicios_gustan", label: "Ejercicios que te gustan", type: "textarea", placeholder: "¿Qué actividades disfrutas?", full: true },
      { id: "ejercicios_no_gustan", label: "Ejercicios que no te gustan", type: "textarea", placeholder: "¿Qué actividades prefieres evitar?", full: true }
    ]
  },
  {
    title: "Alimentación", kicker: "TUS HÁBITOS ALIMENTICIOS", description: "No buscamos respuestas perfectas, sino conocer tu rutina habitual.",
    fields: [
      { id: "comidas_horarios", label: "Comidas al día y horarios", type: "textarea", placeholder: "Describe cuántas veces comes y a qué hora...", full: true },
      { id: "dia_tipico", label: "Describe un día típico (desayuno, almuerzo, cena, snacks)", type: "textarea", placeholder: "Cuéntanos qué sueles comer...", full: true },
      { id: "agua_bebidas", label: "Agua diaria, alcohol, refrescos y ultraprocesados", type: "textarea", placeholder: "Describe tu consumo habitual...", full: true },
      { id: "comer_fuera", label: "¿Comes fuera seguido? ¿Quién cocina en casa?", type: "textarea", placeholder: "Cuéntanos cómo organizas tus comidas...", full: true }
    ]
  },
  {
    title: "Sueño y energía", kicker: "DESCANSO Y RECUPERACIÓN", description: "El descanso y el estrés también forman parte de tu bienestar.",
    fields: [
      { id: "horas_sueno", label: "Horas de sueño y hora de dormir", type: "textarea", placeholder: "Ej. duermo 7 horas y suelo acostarme a las 23:00...", full: true },
      { id: "energia", label: "Energía actual (del 1 al 10)", type: "number", min: 1, max: 10, placeholder: "1 a 10" },
      { id: "estres", label: "Estrés actual (del 1 al 10)", type: "number", min: 1, max: 10, placeholder: "1 a 10" }
    ]
  },
  {
    title: "Objetivos físicos", kicker: "HACIA DÓNDE QUIERES AVANZAR", description: "Define qué te gustaría trabajar. Cada proceso es distinto.",
    fields: [
      { id: "objetivo_fisico", label: "¿Qué quieres lograr?", type: "textarea", placeholder: "Bajar grasa, ganar músculo, fuerza, resistencia, salud general u otro objetivo...", full: true },
      { id: "zona_mejorar", label: "¿Qué parte de tu cuerpo quieres mejorar más?", type: "textarea", placeholder: "Cuéntanos tu objetivo...", full: true },
      { id: "tiempo_resultados", label: "¿En cuánto tiempo quieres revisar tus avances?", type: "text", placeholder: "Ej. en los próximos 3 meses", full: true }
    ]
  },
  {
    title: "Objetivos mentales", kicker: "FORTALECE TU MENTALIDAD", description: "Este espacio es para reflexionar sobre tus pensamientos y hábitos.",
    fields: [
      { id: "cambio_mental", label: "¿Qué quieres cambiar en tu mente?", type: "textarea", placeholder: "Disciplina, confianza, ansiedad, constancia, motivación...", full: true },
      { id: "dialogo_interno", label: "¿Cómo te hablas a ti mismo cuando fallas?", type: "textarea", placeholder: "Describe qué sueles pensar...", full: true },
      { id: "abandono_metas", label: "¿Qué te hace abandonar tus metas?", type: "textarea", placeholder: "¿Qué situaciones suelen detenerte?", full: true },
      { id: "emociones", label: "¿Qué emociones sientes con más frecuencia?", type: "textarea", placeholder: "Comparte lo que quieras...", full: true },
      { id: "habitos", label: "¿Qué hábitos quieres eliminar y cuáles construir?", type: "textarea", placeholder: "Hábitos que quieres dejar y hábitos que quieres desarrollar...", full: true }
    ]
  },
  {
    title: "Tiempo y compromiso", kicker: "ORGANIZA TU PROCESO", description: "La planificación debe adaptarse a tu vida real.",
    fields: [
      { id: "dias_sesion", label: "Días por semana y tiempo por sesión", type: "textarea", placeholder: "Ej. 4 días por semana, 45 minutos por sesión...", full: true },
      { id: "tiempo_habitos", label: "Tiempo diario para hábitos mentales (lectura, journaling, meditación)", type: "textarea", placeholder: "¿Cuánto tiempo podrías dedicar?", full: true },
      { id: "compromiso", label: "Nivel de compromiso (del 1 al 10)", type: "number", min: 1, max: 10, placeholder: "1 a 10", full: true }
    ]
  },
  {
    title: "Disciplina profunda", kicker: "EL MOTIVO DETRÁS DEL CAMBIO", description: "Tómate un momento para responder con calma.",
    fields: [
      { id: "por_que_ahora", label: "¿Por qué quieres cambiar ahora?", type: "textarea", placeholder: "Tu motivo...", full: true },
      { id: "vida_cambio", label: "¿Cómo sería tu vida si logras este cambio?", type: "textarea", placeholder: "Imagina qué podría mejorar...", full: true },
      { id: "si_no_cambio", label: "¿Qué pasaría si no haces ningún cambio?", type: "textarea", placeholder: "Reflexiona sin juzgarte...", full: true },
      { id: "apoyo", label: "¿Quién o qué te apoya en este proceso?", type: "textarea", placeholder: "Personas, recursos o motivaciones...", full: true },
      { id: "obstaculos", label: "¿Qué obstáculos crees que enfrentarás?", type: "textarea", placeholder: "¿Qué podría dificultar tu constancia?", full: true },
      { id: "consentimiento", label: "Leí y acepto que mis respuestas se utilicen para contactarme y valorar mi ingreso al proceso.", type: "checkbox", required: true, full: true, hint: "No incluyas información médica detallada que no sea necesaria. Antes de publicar el formulario, añade un aviso de privacidad con la identidad del responsable, finalidades y medios para ejercer tus derechos." }
    ]
  }
];

const form = document.getElementById("intakeForm");
const fieldsBox = document.getElementById("fields");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");
let currentStep = 0;
const answers = {};

function whatsappUrl(message = "Hola, me gustaría obtener más información sobre Naciste para Crecer.") {
  const number = CONFIG.WHATSAPP_NUMERO.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
function configureContactLinks() {
  const ready = /^\d{10,15}$/.test(CONFIG.WHATSAPP_NUMERO.replace(/\D/g, "")) &&
                !CONFIG.WHATSAPP_NUMERO.includes("X");
  ["headerWhatsapp", "footerWhatsapp", "successWhatsapp"].forEach(id => {
    const link = document.getElementById(id);
    link.href = ready ? whatsappUrl() : "#";
    if (!ready) link.addEventListener("click", e => {
      e.preventDefault();
      alert("Configura el número de WhatsApp en js/app.js para activar este enlace.");
    });
  });
}
function saveCurrentValues() {
  steps[currentStep].fields.forEach(field => {
    const element = document.getElementById(field.id);
    if (element) answers[field.id] = field.type === "checkbox" ? element.checked : element.value.trim();
  });
}
function createField(field) {
  const wrapper = document.createElement("div");
  wrapper.className = `field${field.full ? " full" : ""}`;
  const label = document.createElement("label");
  label.htmlFor = field.id;
  label.textContent = field.label;
  if (!field.required) {
    const optional = document.createElement("span");
    optional.className = "optional";
    optional.textContent = " · Opcional";
    label.appendChild(optional);
  }
  wrapper.appendChild(label);
  let control;
  if (field.type === "textarea") {
    control = document.createElement("textarea");
    control.rows = 3;
    control.placeholder = field.placeholder || "";
  } else if (field.type === "select") {
    control = document.createElement("select");
    field.options.forEach((option, index) => {
      const item = document.createElement("option");
      item.value = index === 0 ? "" : option;
      item.textContent = option;
      control.appendChild(item);
    });
  } else if (field.type === "checkbox") {
    label.remove();
    const row = document.createElement("label");
    row.className = "consent-row";
    control = document.createElement("input");
    control.type = "checkbox";
    control.checked = Boolean(answers[field.id]);
    control.id = field.id;
    control.name = field.id;
    control.required = Boolean(field.required);
    const text = document.createElement("span");
    text.textContent = field.label;
    row.append(control, text);
    wrapper.appendChild(row);
  } else {
    control = document.createElement("input");
    control.type = field.type;
    control.placeholder = field.placeholder || "";
    if (field.min !== undefined) control.min = field.min;
    if (field.max !== undefined) control.max = field.max;
    if (field.step) control.step = field.step;
    if (field.type === "number") control.inputMode = "decimal";
  }
  if (field.type !== "checkbox") {
    control.id = field.id;
    control.name = field.id;
    control.required = Boolean(field.required);
    control.value = answers[field.id] || "";
    wrapper.appendChild(control);
  }
  if (field.hint) {
    const hint = document.createElement("p");
    hint.className = "field-hint";
    hint.textContent = field.hint;
    wrapper.appendChild(hint);
  }
  return wrapper;
}
function renderStep() {
  const step = steps[currentStep];
  document.getElementById("stepCounter").textContent = `PASO ${currentStep + 1} DE ${steps.length}`;
  document.getElementById("progressPercent").textContent = `${Math.round(((currentStep + 1) / steps.length) * 100)}%`;
  document.getElementById("progressBar").style.width = `${((currentStep + 1) / steps.length) * 100}%`;
  document.getElementById("stepTitle").textContent = step.title;
  document.getElementById("stepKicker").textContent = step.kicker;
  document.getElementById("stepDescription").textContent = step.description;
  fieldsBox.replaceChildren(...step.fields.map(createField));
  fieldsBox.classList.remove("fields-enter");
  void fieldsBox.offsetWidth;
  fieldsBox.classList.add("fields-enter");
  backButton.disabled = currentStep === 0;
  nextButton.hidden = currentStep === steps.length - 1;
  submitButton.hidden = currentStep !== steps.length - 1;
  errorMessage.textContent = "";
}
function validateStep() {
  saveCurrentValues();
  const step = steps[currentStep];
  for (const field of step.fields) {
    const control = document.getElementById(field.id);
    const value = answers[field.id];

    if (field.required && !value) {
      errorMessage.textContent = "Completa el campo obligatorio para continuar.";
      control.focus();
      return false;
    }
    if (field.type === "email" && value && !control.validity.valid) {
      errorMessage.textContent = "Escribe un correo electrónico válido.";
      control.focus();
      return false;
    }
    if (field.type === "number" && (control.validity.badInput || (value && !control.validity.valid))) {
      errorMessage.textContent = `Revisa el valor de "${field.label}".`;
      control.focus();
      return false;
    }
    if (field.type === "tel" && value) {
      const digits = value.replace(/\D/g, "");
      if (!/^\+?[\d\s().-]+$/.test(value) || digits.length < 7 || digits.length > 15) {
        errorMessage.textContent = "Escribe un número de WhatsApp válido, incluyendo la clave de país.";
        control.focus();
        return false;
      }
    }
    if (control.validity.badInput || (!field.required && value && !control.validity.valid)) {
      errorMessage.textContent = `Revisa el valor de "${field.label}".`;
      control.focus();
      return false;
    }
  }
  errorMessage.textContent = "";
  return true;
}
backButton.addEventListener("click", () => {
  saveCurrentValues();
  if (currentStep > 0) currentStep--;
  renderStep();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
nextButton.addEventListener("click", () => {
  if (!validateStep()) return;
  currentStep++;
  renderStep();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function getEmailFieldLabel(field) {
  const visibleLabel = field.emailLabel || field.label || field.id;
  return visibleLabel
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

form.addEventListener("submit", async event => {
  event.preventDefault();
  if (!validateStep()) return;
  const email = CONFIG.EMAIL_DESTINO.trim();
  if (!email || email === "TU_CORREO@EJEMPLO.COM" || !email.includes("@")) {
    errorMessage.textContent = "Antes de recibir respuestas, configura el correo de José en js/app.js.";
    return;
  }
  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";
  backButton.disabled = true;
  errorMessage.textContent = "";
  const payload = new FormData();
  payload.append("_subject", `Nueva evaluación de Naciste para Crecer: ${answers.nombre || "Participante"}`);
  payload.append("_template", "table");
  payload.append("_captcha", "false");
  payload.append("Formulario", "Naciste para Crecer");
  steps.forEach(step => step.fields.forEach(field => {
    const value = answers[field.id];
    const response = field.type === "checkbox"
      ? (value ? "Aceptado" : "No aceptado")
      : (value || "Sin respuesta");
    payload.append(getEmailFieldLabel(field), response);
  }));
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
      method: "POST", body: payload, headers: { "Accept": "application/json" }
    });
    const result = await response.json();
    if (!response.ok || (result.success !== "true" && result.success !== true)) {
      throw new Error(result.message || "FormSubmit no confirmó el envío.");
    }
    form.hidden = true;
    document.querySelector(".form-topline").hidden = true;
    document.querySelector(".progress-track").hidden = true;
    document.querySelector(".step-heading").hidden = true;
    document.getElementById("successPanel").hidden = false;
  } catch (error) {
    const detail = error instanceof Error ? ` ${error.message}` : "";
    errorMessage.textContent = `No se pudo enviar la evaluación.${detail} Revisa tu conexión e inténtalo de nuevo. Si es el primer envío, confirma el correo de activación de FormSubmit.`;
    submitButton.disabled = false;
    submitButton.innerHTML = 'Enviar evaluación <span>→</span>';
    backButton.disabled = false;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
configureContactLinks();
renderStep();

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splashScreen");
  setTimeout(() => {
    splash.style.transition= "opacity 1s ease";
    splash.style.opacity = "0";
    setTimeout(() => {
      splash.remove();
      document.body.classList.remove("intro-activa");
      fieldsBox.classList.remove("fields-enter");
      void fieldsBox.offsetWidth;
      fieldsBox.classList.add("fields-enter");
    }, 1000);
  }, 3000);

});
