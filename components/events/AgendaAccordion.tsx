"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const agenda = {
  "Day 1: November 15, 2025": [
    { time: "8:00 AM", event: "Registration & Welcome Breakfast" },
    { time: "9:30 AM", event: "Opening Keynote: 'The Future of Global Trade'" },
    { time: "11:00 AM", event: "Panel Discussion: 'Innovations in Logistics and Supply Chain'" },
    { time: "1:00 PM", event: "Networking Lunch" },
    { time: "2:30 PM", event: "Workshop: 'Navigating Customs and Trade Regulations'" },
    { time: "5:00 PM", event: "Evening Reception" }
  ],
  "Day 2: November 16, 2025": [
    { time: "9:00 AM", event: "Keynote: 'Sustainable Trade Practices for a Greener Future'" },
    { time: "10:30 AM", event: "Breakout Sessions" },
    { time: "1:00 PM", event: "Networking Lunch" },
    { time: "2:30 PM", event: "Panel Discussion: 'Women in Global Trade: Breaking Barriers'" },
    { time: "4:00 PM", event: "Closing Remarks" }
  ],
  "Day 3: November 17, 2025": [
    { time: "9:00 AM", event: "Optional Site Visits" },
    { time: "12:00 PM", event: "Event Concludes" }
  ]
}

export default function AgendaAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {Object.entries(agenda).map(([day, schedule], index) => (
        <AccordionItem key={index} value={`day-${index + 1}`}>
          <AccordionTrigger>{day}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {schedule.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-24 font-semibold">{item.time}</div>
                  <div>{item.event}</div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

