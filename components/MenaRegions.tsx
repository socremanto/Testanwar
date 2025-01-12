"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe2, MapPin, Plane, Ship, Truck } from 'lucide-react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from 'react'

const regions = {
  northAfrica: {
    title: "North Africa",
    countries: ["Morocco", "Algeria", "Tunisia", "Libya", "Egypt", "Sudan"],
    description: "The gateway between Africa and Europe, North Africa represents a crucial logistics corridor for international trade."
  },
  middleEast: {
    title: "Middle East",
    countries: [
      "Saudi Arabia",
      "UAE",
      "Qatar",
      "Bahrain",
      "Kuwait",
      "Oman",
      "Jordan",
      "Lebanon",
      "Syria",
      "Iraq",
      "Israel",
      "Palestine",
      "Turkey"
    ],
    description: "The heart of our network, the Middle East connects three continents and serves as a global logistics hub."
  },
  extendedRegion: {
    title: "Extended Region",
    countries: ["Iran", "Yemen", "Cyprus"],
    description: "Our extended network reaches beyond traditional boundaries to provide comprehensive coverage of the greater MENA region."
  }
}

const ports = {
  UAE: {
    airPorts: [
      "Dubai International Airport (DXB)",
      "Al Maktoum International Airport (DWC)",
      "Abu Dhabi International Airport (AUH)",
      "Sharjah International Airport (SHJ)",
      "Ras Al Khaimah International Airport (RKT)",
      "Fujairah International Airport (FJR)",
      "Al Ain International Airport (AAN)"
    ],
    seaPorts: [
      "Port of Jebel Ali (Dubai)",
      "Port Khalifa (Abu Dhabi)",
      "Port Zayed (Abu Dhabi)",
      "Port of Fujairah",
      "Port of Sharjah",
      "Khor Fakkan Port (Sharjah)",
      "Port of Ras Al Khaimah"
    ],
    landPorts: [
      "Al Ain - Buraimi Border Crossing",
      "Hatta Border Crossing",
      "Khatmat Milaha Border Crossing",
      "Al Ghuwaifat Border Crossing"
    ]
  },
  SaudiArabia: {
    airPorts: [
      "King Abdulaziz International Airport (JED)",
      "King Khalid International Airport (RUH)",
      "King Fahd International Airport (DMM)",
      "Prince Mohammad bin Abdulaziz Airport (MED)",
      "Abha International Airport (AHB)",
      "Taif International Airport (TIF)",
      "King Abdullah bin Abdulaziz Airport (GIZ)"
    ],
    seaPorts: [
      "Jeddah Islamic Port",
      "King Abdullah Port",
      "King Abdulaziz Port (Dammam)",
      "Jubail Commercial Port",
      "Yanbu Commercial Port"
    ],
    landPorts: [
      "Al-Haditha Border Crossing",
      "Arar Border Crossing",
      "Khafji Border Crossing",
      "Salwa Border Crossing",
      "Al-Batha Border Crossing",
      "Al-Wadi'ah Border Crossing",
      "Al-Wadia Crossing",
      "Al-Tuwal Crossing"
    ]
  },
  Egypt: {
    airPorts: [
      "Cairo International Airport (CAI)",
      "Hurghada International Airport (HRG)",
      "Sharm El Sheikh International Airport (SSH)",
      "Borg El Arab Airport (HBE)",
      "Luxor International Airport (LXR)",
      "Aswan International Airport (ASW)"
    ],
    seaPorts: [
      "Port Said",
      "Alexandria Port",
      "Damietta Port",
      "Sokhna Port"
    ],
    landPorts: [
      "Salloum Border Crossing",
      "Qustul Border Crossing",
      "Taba Border Crossing",
      "Rafah Border Crossing"
    ]
  },
  Morocco: {
    airPorts: [
      "Mohammed V International Airport (CMN)",
      "Menara Airport (RAK)",
      "Fes–Saïs Airport (FEZ)",
      "Tangier Ibn Battuta Airport (TNG)",
      "Agadir–Al Massira Airport (AGA)"
    ],
    seaPorts: [
      "Tanger Med Port",
      "Casablanca Port",
      "Mohammedia Port"
    ],
    landPorts: [
      "Ceuta Border Crossing",
      "Melilla Border Crossing",
      "Guerguerat Border Crossing"
    ]
  },
  Algeria: {
    airPorts: [
      "Houari Boumediene Airport (ALG)",
      "Oran Es Sénia Airport (ORN)",
      "Constantine Mohamed Boudiaf International Airport (CZL)",
      "Annaba Rabah Bitat Airport (AAE)"
    ],
    seaPorts: [
      "Algiers Port",
      "Oran Port",
      "Skikda Port"
    ],
    landPorts: [
      "Tébessa Border Crossing",
      "Debdeb Border Crossing",
      "In Guezzam Border Crossing",
      "Bordj Badji Mokhtar Border Crossing",
      "Tindouf Border Crossing"
    ]
  },
  Tunisia: {
    airPorts: [
      "Tunis–Carthage International Airport (TUN)",
      "Djerba–Zarzis International Airport (DJE)",
      "Monastir Habib Bourguiba International Airport (MIR)",
      "Sfax–Thyna International Airport (SFA)"
    ],
    seaPorts: [
      "La Goulette Port (Tunis)",
      "Sfax Commercial Port",
      "Bizerte Port"
    ],
    landPorts: [
      "Hazoua Border Crossing",
      "Taleb Larbi Border Crossing",
      "Ras Jedir Border Crossing"
    ]
  },
  Libya: {
    airPorts: [
      "Tripoli International Airport (TIP)",
      "Mitiga International Airport (MJI)",
      "Benina International Airport (BEN)",
      "Misrata Airport (MRA)"
    ],
    seaPorts: [
      "Tripoli Port",
      "Benghazi Port",
      "Misrata Port"
    ],
    landPorts: [
      "Ras Jedir Border Crossing",
      "Ghadames Border Crossing",
      "Toummo Border Crossing",
      "Wour Border Crossing",
      "Al Kufra Border Crossing",
      "Musaid Border Crossing"
    ]
  },
  Jordan: {
    airPorts: [
      "Queen Alia International Airport (AMM)",
      "King Hussein International Airport (AQJ)"
    ],
    seaPorts: [
      "Port of Aqaba"
    ],
    landPorts: [
      "Jaber Border Crossing",
      "Karameh-Turaibil Border Crossing",
      "Al-Omari Border Crossing",
      "Al-Mudawara Border Crossing",
      "Sheikh Hussein Bridge",
      "Wadi Araba Crossing",
      "King Hussein Bridge"
    ]
  },
  Lebanon: {
    airPorts: [
      "Beirut–Rafic Hariri International Airport (BEY)"
    ],
    seaPorts: [
      "Port of Beirut",
      "Tripoli Port"
    ],
    landPorts: [
      "Masnaa Border Crossing",
      "Abboudiyeh Border Crossing"
    ]
  },
  Syria: {
    airPorts: [
      "Damascus International Airport (DAM)",
      "Aleppo International Airport (ALP)"
    ],
    seaPorts: [
      "Latakia Port",
      "Tartus Port"
    ],
    landPorts: [
      "Bab al-Hawa Border Crossing",
      "Al-Waleed Border Crossing",
      "Nasib Border Crossing",
      "Masnaa Border Crossing",
      "Abboudiyeh Border Crossing"
    ]
  },
  Iraq: {
    airPorts: [
      "Baghdad International Airport (BGW)",
      "Basra International Airport (BSR)",
      "Erbil International Airport (EBL)",
      "Sulaymaniyah International Airport (ISU)"
    ],
    seaPorts: [
      "Umm Qasr Port",
      "Khor Al Zubair Port",
      "Al Faw Port"
    ],
    landPorts: [
      "Ibrahim Khalil Border Crossing",
      "Al-Waleed Border Crossing",
      "Trebil Border Crossing",
      "Arar Border Crossing",
      "Safwan Border Crossing",
      "Shalamcheh Border Crossing",
      "Bashmaq Border Crossing",
      "Parvizkhan Border Crossing"
    ]
  },
  Iran: {
    airPorts: [
      "Imam Khomeini International Airport (IKA)",
      "Mehrabad International Airport (THR)",
      "Mashhad International Airport (MHD)",
      "Shiraz International Airport (SYZ)",
      "Isfahan International Airport (IFN)",
      "Bandar Abbas International Airport (BND)"
    ],
    seaPorts: [
      "Bandar Abbas Port",
      "Chabahar Port",
      "Bushehr Port",
      "Anzali Port"
    ],
    landPorts: [
      "Bazargan Border Crossing",
      "Nordooz Border Crossing",
      "Astara Border Crossing",
      "Sarakhs Border Crossing",
      "Dogharoon Border Crossing",
      "Milak Border Crossing",
      "Mirjaveh Border Crossing",
      "Shalamcheh Border Crossing",
      "Mehran Border Crossing"
    ]
  },
  Israel: {
    airPorts: [
      "Ben Gurion Airport (TLV)",
      "Eilat Ramon Airport (ETM)",
      "Haifa Airport (HFA)"
    ],
    seaPorts: [
      "Port of Haifa",
      "Port of Ashdod",
      "Port of Eilat"
    ],
    landPorts: [
      "Taba Border Crossing",
      "Allenby Bridge"
    ]
  },
  Kuwait: {
    airPorts: [
      "Kuwait International Airport (KWI)"
    ],
    seaPorts: [
      "Shuwaikh Port",
      "Shuaiba Port",
      "Doha Port (Kuwait)"
    ],
    landPorts: [
      "Nuwaiseeb Border Crossing",
      "Safwan Border Crossing"
    ]
  },
  Bahrain: {
    airPorts: [
      "Bahrain International Airport (BAH)"
    ],
    seaPorts: [
      "Khalifa Bin Salman Port",
      "Mina Salman Port"
    ],
    landPorts: [
      "King Fahd Causeway"
    ]
  },
  Qatar: {
    airPorts: [
      "Hamad International Airport (DOH)"
    ],
    seaPorts: [
      "Hamad Port",
      "Doha Port",
      "Ras Laffan Port"
    ],
    landPorts: [
      "Abu Samra Border Crossing"
    ]
  },
  Oman: {
    airPorts: [
      "Muscat International Airport (MCT)",
      "Salalah Airport (SLL)",
      "Duqm International Airport (DQM)",
      "Sohar Airport (OHS)"
    ],
    seaPorts: [
      "Port of Salalah",
      "Port Sultan Qaboos",
      "Port of Sohar",
      "Port of Duqm"
    ],
    landPorts: [
      "Al Ain - Buraimi Border Crossing",
      "Hatta Border Crossing",
      "Khatmat Milaha Border Crossing",
      "Al-Wadi'ah Border Crossing",
      "Shahn Border Crossing"
    ]
  },
  Yemen: {
    airPorts: [
      "Sana'a International Airport (SAH)",
      "Aden International Airport (ADE)",
      "Seiyun Airport (GXF)"
    ],
    seaPorts: [
      "Port of Aden",
      "Hodeidah Port",
      "Mukalla Port"
    ],
    landPorts: [
      "Al-Wadia Crossing",
      "Al-Tuwal Crossing",
      "Al-Alb Crossing",
      "Al-Buqi Crossing",
      "Shahn Border Crossing"
    ]
  }
}

export default function MenaRegions() {
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(undefined)
  const currentDate = "1/12/2025"

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Our MENA Coverage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            TransMENA Network operates across the entire MENA region, connecting local expertise 
            with global opportunities through our extensive network of logistics partners.
          </p>
          <p className="text-sm text-muted-foreground mt-2">Last updated: {currentDate}</p>
        </div>

        <Tabs defaultValue="map" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="map" className="flex items-center gap-2">
              <Globe2 className="h-4 w-4" />
              Regional Map
            </TabsTrigger>
            <TabsTrigger value="list" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Country List
            </TabsTrigger>
            <TabsTrigger value="ports" className="flex items-center gap-2">
              <Ship className="h-4 w-4" />
              Ports Directory
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map">
            <div className="aspect-video relative bg-muted rounded-lg overflow-hidden w-full h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mena-map-2x-2KNWchaTD9k5k8L1d5T1QIuWxhzEtP.png"
                alt="MENA Region Map"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </TabsContent>

          <TabsContent value="list">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.values(regions).map((region) => (
                <Card key={region.title}>
                  <CardHeader>
                    <CardTitle>{region.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {region.description}
                    </p>
                    <ul className="space-y-2">
                      {region.countries.map((country) => (
                        <li key={country} className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          {country}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ports">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="h-5 w-5" />
                      Air Ports
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Major international airports serving cargo operations across MENA
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Ship className="h-5 w-5" />
                      Sea Ports
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Strategic maritime gateways connecting MENA to global trade routes
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      Land Ports
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Key border crossings facilitating regional trade and transportation
                  </CardContent>
                </Card>
              </div>

              <div className="mb-6">
                <Select onValueChange={(value) => setSelectedCountry(value)}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(ports).sort().map((country) => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {selectedCountry && (
                  <AccordionItem value={selectedCountry}>
                    <AccordionTrigger>{selectedCountry}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold flex items-center gap-2 mb-2">
                            <Plane className="h-4 w-4" />
                            Air Ports
                          </h4>
                          <ul className="list-disc list-inside space-y-1">
                            {ports[selectedCountry as keyof typeof ports].airPorts.map((port) => (
                              <li key={port}>{port}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold flex items-center gap-2 mb-2">
                            <Ship className="h-4 w-4" />
                            Sea Ports
                          </h4>
                          <ul className="list-disc list-inside space-y-1">
                            {ports[selectedCountry as keyof typeof ports].seaPorts.map((port) => (
                              <li key={port}>{port}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold flex items-center gap-2 mb-2">
                            <Truck className="h-4 w-4" />
                            Land Ports
                          </h4>
                          <ul className="list-disc list-inside space-y-1">
                            {ports[selectedCountry as keyof typeof ports].landPorts.map((port) => (
                              <li key={port}>{port}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

