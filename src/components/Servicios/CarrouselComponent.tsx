"use client";

import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import { forwardRef, useState, type SVGProps } from "react";
import CardComponent from "./CardComponent";

const services = [
  {
    title: "Eliminación de reportes negativos en centrales de riesgo",
    description:
      "El servicio de eliminación de reportes negativos en centrales de riesgo está diseñado para ayudar a las personas a mejorar su historial crediticio y recuperar su acceso a oportunidades financieras.",
    image: "/reporte-negativo.png",
    index: 1,
  },
  {
    title: "Aumento de score o puntaje financiero",
    description:
      "Este servicio está diseñado para optimizar tu puntaje crediticio, ayudándote a acceder a mejores condiciones en préstamos, tarjetas de crédito y otros productos financieros.",
    image: "/score.png",
    index: 2,
  },
  {
    title: "Asesorías financieras en créditos bancarios",
    description:
      "Te brindamos orientación personalizada para que encuentres la opción de crédito que mejor se adapte a tus necesidades, asegurando que tomes decisiones informadas y favorables para tu futuro financiero.",
    image: "/asesorias.png",
    index: 3,
  },
  {
    title: "Eliminación de castigos",
    description:
      "Te ayudamos a eliminar sanciones y restricciones en tu historial financiero, permitiéndote recuperar la confianza de las entidades bancarias y acceder nuevamente a oportunidades de crédito.",
    image: "/castigos.png",
    index: 4,
  },
  {
    title: "Créditos por libranzas para reportados",
    description:
      "Accede a financiamiento sin importar tu historial en centrales de riesgo, a través de créditos por libranza con descuentos directos de nómina, facilitando el pago y reduciendo el riesgo de sobreendeudamiento.",
    image: "/creditos.png",
    index: 5,
  },
  {
    title: "Compra de cartera",
    description:
      "Te ofrecemos la posibilidad de unificar tus deudas en una sola cuota con tasas de interés más bajas, permitiéndote mejorar tu liquidez y aliviar tu carga financiera de manera eficiente.",
    image: "/compra.png",
    index: 6,
  },
];

export default function CarrouselComponent() {
  const items = services;
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [direction, setDirection] = useState<1 | -1>(1);

  function setSlide(newDirection: 1 | -1) {
    const nextItem = wrap(1, items.length, selectedItem.index + newDirection);
    setSelectedItem(items[nextItem - 1]);
    setDirection(newDirection);
  }

  return (
    <div style={container}>
      <motion.button
        initial={false}
        aria-label="Previous"
        style={button}
        onClick={() => setSlide(-1)}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft />
      </motion.button>
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.div
          key={selectedItem.index}
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -50 }}
        >
          <CardComponent
            title={selectedItem.title}
            description={selectedItem.description}
            image={selectedItem.image}
          />
        </motion.div>
      </AnimatePresence>
      <motion.button
        initial={false}
        aria-label="Next"
        style={button}
        onClick={() => setSlide(1)}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight />
      </motion.button>
    </div>
  );
}

const iconsProps: SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function ArrowLeft() {
  return (
    <svg {...iconsProps}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg {...iconsProps}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const container: React.CSSProperties = {
  display: "flex",
  position: "relative",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
};

const button: React.CSSProperties = {
  backgroundColor: "transparent",
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  outlineOffset: 2,
  cursor: "pointer",
};
