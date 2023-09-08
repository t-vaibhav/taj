import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq({ question, answer }) {
  return (
    <Accordion className="accordion-outer border-orange-500 faq-shadow">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="accordion-icon" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="font-kanitt text-2xll ">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="text-basee font-molengoo">{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
