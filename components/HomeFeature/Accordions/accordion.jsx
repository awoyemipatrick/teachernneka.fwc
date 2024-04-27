import React from 'react'
import { AccordionItem } from "@/components/HomeFeature/Accordions/accordionItems";

export const Accordion = ({ items }) => {
  return (
    <div className="space-y-2 ">
      {items.map((item, i) => (
        <AccordionItem key={i} title={item.title} content={item.content} />
      ))}
    </div>
  );
};


