"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const transportModes = [
  { id: "air", label: "Air Freight" },
  { id: "sea", label: "Sea Freight" },
  { id: "land", label: "Land Transportation" },
  { id: "rail", label: "Rail Freight" },
  { id: "multimodal", label: "Multimodal" }
]

const cargoTypes = [
  { id: "fcl", label: "FCL (Full Container Load)" },
  { id: "lcl", label: "LCL (Less than Container Load)" },
  { id: "breakbulk", label: "Break-bulk" },
  { id: "project", label: "Project Cargo" },
  { id: "temperature", label: "Temperature-Controlled" },
  { id: "dangerous", label: "Dangerous Goods Handling" },
  { id: "express", label: "Express/Time-Definite Services" },
  { id: "charter", label: "Charter Services (Air/Sea)" }
]

const logisticsServices = [
  { id: "door-to-door", label: "Door-to-Door" },
  { id: "port-to-port", label: "Port-to-Port" },
  { id: "door-to-port", label: "Door-to-Port" },
  { id: "port-to-door", label: "Port-to-Door" },
  { id: "warehousing", label: "Warehousing" },
  { id: "distribution", label: "Distribution" },
  { id: "supply-chain", label: "Supply Chain Optimization" },
  { id: "track-trace", label: "Track and Trace" },
  { id: "inventory", label: "Inventory Management" },
  { id: "last-mile", label: "Last-Mile Delivery" }
]

const customsBrokerage = [
  { id: "customs-clearance", label: "Customs Clearance" },
  { id: "documentation", label: "Documentation Assistance" },
  { id: "tariff", label: "Tariff Classification" },
  { id: "duty", label: "Duty and Tax Calculation" },
  { id: "compliance", label: "Compliance Management" },
  { id: "fta", label: "Free Trade Agreement Utilization" },
  { id: "license", label: "Import/Export License Assistance" },
  { id: "temporary", label: "Temporary Import/Export Processing" }
]

const additionalServices = [
  { id: "insurance", label: "Cargo Insurance" },
  { id: "packing", label: "Packing and Crating" },
  { id: "fumigation", label: "Fumigation" },
  { id: "inspection", label: "Inspection Services" }
]

const formSchema = z.object({
  // Company Information
  companyName: z.string().min(2, "Company name is required"),
  contactPerson: z.string().min(2, "Contact person is required"),
  position: z.string().min(2, "Position is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  address: z.string().min(5, "Address is required"),

  // Shipment Details
  origin: z.string().min(2, "Origin is required"),
  destination: z.string().min(2, "Destination is required"),
  transportMode: z.array(z.string()).min(1, "Select at least one transport mode"),
  incoterms: z.string().min(1, "Incoterms are required"),
  readyDate: z.string().min(1, "Ready date is required"),
  deliveryDeadline: z.string().optional(),

  // Cargo Information
  cargoType: z.array(z.string()).min(1, "Select at least one cargo type"),
  commodity: z.string().min(2, "Commodity description is required"),
  weight: z.string().min(1, "Weight is required"),
  dimensions: z.string().min(1, "Dimensions are required"),
  pieces: z.string().min(1, "Number of pieces is required"),
  packaging: z.string().min(1, "Packaging type is required"),
  stackable: z.boolean(),
  hazardous: z.boolean(),
  hazardousDetails: z.string().optional(),

  // Service Requirements
  logisticsServices: z.array(z.string()),
  customsBrokerage: z.array(z.string()),
  additionalServices: z.array(z.string()),
  otherServices: z.string().optional(),
  specialInstructions: z.string().optional(),

  // Volume and Frequency
  shipmentType: z.enum(["one-time", "recurring"]),
  frequency: z.string().optional(),
  annualVolume: z.string().optional(),

  // Budget
  hasBudget: z.boolean(),
  budgetAmount: z.string().optional(),

  // Terms
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  })
})

export default function QuoteRequestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transportMode: [],
      cargoType: [],
      logisticsServices: [],
      customsBrokerage: [],
      additionalServices: [],
      stackable: false,
      hazardous: false,
      hasBudget: false,
      termsAccepted: false,
      shipmentType: "one-time"
    }
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Implement form submission logic here
      console.log(data)
      // Show success message
    } catch (error) {
      // Show error message
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Company Information */}
        <Card>
          <CardHeader>
            <CardTitle>1. Company Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Person</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position/Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Address</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Shipment Details */}
        <Card>
          <CardHeader>
            <CardTitle>2. Shipment Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="origin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Origin (City, Country)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Destination (City, Country)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="readyDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ready Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="deliveryDeadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Deadline (if applicable)</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="incoterms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Incoterms</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Incoterms" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="EXW">EXW - Ex Works</SelectItem>
                        <SelectItem value="FOB">FOB - Free on Board</SelectItem>
                        <SelectItem value="CIF">CIF - Cost, Insurance & Freight</SelectItem>
                        <SelectItem value="DAP">DAP - Delivered at Place</SelectItem>
                        <SelectItem value="DDP">DDP - Delivered Duty Paid</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="transportMode"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Preferred Mode of Transport</FormLabel>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {transportModes.map((mode) => (
                      <FormField
                        key={mode.id}
                        control={form.control}
                        name="transportMode"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={mode.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(mode.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, mode.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== mode.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {mode.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Cargo Information */}
        <Card>
          <CardHeader>
            <CardTitle>3. Cargo Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <FormField
              control={form.control}
              name="cargoType"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Cargo Type</FormLabel>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {cargoTypes.map((type) => (
                      <FormField
                        key={type.id}
                        control={form.control}
                        name="cargoType"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={type.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(type.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, type.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== type.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {type.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="commodity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Commodity Description</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Weight (kg)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dimensions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dimensions (cm) - Length x Width x Height</FormLabel>
                    <FormControl>
                      <Input placeholder="100 x 100 x 100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pieces"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Pieces</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="packaging"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Packaging Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select packaging type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="boxes">Boxes</SelectItem>
                        <SelectItem value="pallets">Pallets</SelectItem>
                        <SelectItem value="crates">Crates</SelectItem>
                        <SelectItem value="drums">Drums</SelectItem>
                        <SelectItem value="bags">Bags</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="stackable"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Stackable</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hazardous"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Hazardous Materials</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            {form.watch("hazardous") && (
              <FormField
                control={form.control}
                name="hazardousDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>UN Number and Class</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </CardContent>
        </Card>

        {/* Service Requirements */}
        <Card>
          <CardHeader>
            <CardTitle>4. Service Requirements</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <FormField
              control={form.control}
              name="logisticsServices"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Logistics Services</FormLabel>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {logisticsServices.map((service) => (
                      <FormField
                        key={service.id}
                        control={form.control}
                        name="logisticsServices"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={service.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, service.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== service.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {service.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customsBrokerage"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Customs Brokerage</FormLabel>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {customsBrokerage.map((service) => (
                      <FormField
                        key={service.id}
                        control={form.control}
                        name="customsBrokerage"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={service.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, service.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== service.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {service.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionalServices"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Additional Services</FormLabel>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {additionalServices.map((service) => (
                      <FormField
                        key={service.id}
                        control={form.control}
                        name="additionalServices"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={service.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, service.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== service.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {service.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="otherServices"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other Services (please specify)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specialInstructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Instructions or Requirements</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Volume and Frequency */}
        <Card>
          <CardHeader>
            <CardTitle>5. Volume and Frequency</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <FormField
              control={form.control}
              name="shipmentType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Shipment Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="one-time" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          One-time shipment
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="recurring" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Recurring shipment
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("shipmentType") === "recurring" && (
              <FormField
                control={form.control}
                name="frequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frequency</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Weekly, Monthly" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="annualVolume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Annual Volume</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Budget */}
        <Card>
          <CardHeader>
            <CardTitle>6. Budget Considerations</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <FormField
              control={form.control}
              name="hasBudget"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>I have a target budget</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            {form.watch("hasBudget") && (
              <FormField
                control={form.control}
                name="budgetAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Budget (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </CardContent>
        </Card>

        {/* Terms and Conditions */}
        <Card>
          <CardHeader>
            <CardTitle>7. Terms and Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I understand that this is a request for a quote and does not constitute 
                      a binding agreement. I confirm that all information provided is accurate 
                      and consent to TransMENA sharing the necessary information with relevant 
                      members to provide accurate quotes.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Button type="submit" size="lg">Submit Quote Request</Button>
          <p className="text-sm text-gray-500 text-center">
            For any queries regarding this quote request or our services, please contact our customer support team:<br />
            Email: support@transmena.com | Phone: +1 (555) 789-0123
          </p>
        </div>
      </form>
    </Form>
  )
}

