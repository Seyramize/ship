"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AutocompleteInput } from "@/components/ui/autocomplete-input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Loader2, AlertCircle, CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

const formSchema = z.object({
  // Shipping Details
  pickupLocation: z.string().min(5, { message: "Pickup location must be at least 5 characters" }),
  deliveryLocation: z.string().min(5, { message: "Delivery location must be at least 5 characters" }),
  itemType: z.string().min(1, { message: "Please select an item type" }),
  weight: z.string().min(1, { message: "Please enter the weight" }),
  dimensions: z.string().min(1, { message: "Please enter the dimensions" }),
  deliverySpeed: z.enum(["standard", "express", "same-day"], {
    required_error: "Please select a delivery speed",
  }),

  // Contact Information
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  company: z.string().optional(),
  additionalInfo: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

// Define required fields for progress calculation
const requiredFields = [
  "pickupLocation",
  "deliveryLocation",
  "itemType",
  "weight",
  "dimensions",
  "deliverySpeed",
  "name",
  "email",
  "phone",
]

// Define field groups for section completion
const shippingFields = ["pickupLocation", "deliveryLocation", "itemType", "weight", "dimensions", "deliverySpeed"]
const contactFields = ["name", "email", "phone"]

export default function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("shipping")
  const [formError, setFormError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [shippingComplete, setShippingComplete] = useState(false)
  const [contactComplete, setContactComplete] = useState(false)

  // Initialize form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pickupLocation: "",
      deliveryLocation: "",
      itemType: "",
      weight: "",
      dimensions: "",
      deliverySpeed: "standard",
      name: "",
      email: "",
      phone: "",
      company: "",
      additionalInfo: "",
    },
    mode: "onBlur", // Validate on blur for better UX
  })

  const isLoading = form.formState.isSubmitting
  const formValues = form.watch()
  const formErrors = form.formState.errors

  // Calculate progress whenever form values change
  useEffect(() => {
    // Count completed required fields
    const completedFields = requiredFields.filter((field) => {
      const value = formValues[field as keyof FormValues]
      return value && typeof value === "string" && value.length > 0
    })

    // Calculate progress percentage
    const newProgress = Math.round((completedFields.length / requiredFields.length) * 100)
    setProgress(newProgress)

    // Check if shipping section is complete
    const isShippingComplete = shippingFields.every((field) => {
      const value = formValues[field as keyof FormValues]
      return value && typeof value === "string" && value.length > 0 && !formErrors[field as keyof FormValues]
    })
    setShippingComplete(isShippingComplete)

    // Check if contact section is complete
    const isContactComplete = contactFields.every((field) => {
      const value = formValues[field as keyof FormValues]
      return value && typeof value === "string" && value.length > 0 && !formErrors[field as keyof FormValues]
    })
    setContactComplete(isContactComplete)
  }, [formValues, formErrors])

  // Handle tab change with validation
  const handleTabChange = (value: string) => {
    if (value === "contact" && !shippingComplete) {
      // Trigger validation on all shipping fields
      form.trigger(["pickupLocation", "deliveryLocation", "itemType", "weight", "dimensions", "deliverySpeed"])
      return
    }
    setActiveTab(value)
  }

  // Clear form error when fields change
  useEffect(() => {
    if (formError) {
      setFormError(null)
    }
  }, [formValues, formError])

  async function onSubmit(data: FormValues) {
    setFormError(null)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form submitted successfully:", data)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormError("There was an error submitting your quote request. Please try again.")
    }
  }

  function resetForm() {
    form.reset({
      pickupLocation: "",
      deliveryLocation: "",
      itemType: "",
      weight: "",
      dimensions: "",
      deliverySpeed: "standard",
      name: "",
      email: "",
      phone: "",
      company: "",
      additionalInfo: "",
    })
    setIsSubmitted(false)
    setActiveTab("shipping")
    setFormError(null)
    setProgress(0)
    setShippingComplete(false)
    setContactComplete(false)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Quote Request Submitted</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for your request. Our team will review your information and get back to you with a customized
            quote within 24 hours.
          </p>
          <Button onClick={resetForm}>Submit Another Request</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="pt-6">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">Form Completion</h3>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />

          <div className="flex justify-between mt-4 text-sm">
            <div className="flex items-center">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center mr-2",
                  shippingComplete ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400",
                )}
              >
                {shippingComplete ? <CheckIcon className="h-3 w-3" /> : "1"}
              </div>
              <span className={shippingComplete ? "text-green-600 font-medium" : ""}>
                Shipping Details
                {shippingComplete && (
                  <Badge variant="outline" className="ml-2 bg-green-50 text-green-600 border-green-200">
                    Complete
                  </Badge>
                )}
              </span>
            </div>
            <div className="border-t-2 border-dashed flex-grow mx-2 mt-3"></div>
            <div className="flex items-center">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center mr-2",
                  contactComplete ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400",
                )}
              >
                {contactComplete ? <CheckIcon className="h-3 w-3" /> : "2"}
              </div>
              <span className={contactComplete ? "text-green-600 font-medium" : ""}>
                Contact Information
                {contactComplete && (
                  <Badge variant="outline" className="ml-2 bg-green-50 text-green-600 border-green-200">
                    Complete
                  </Badge>
                )}
              </span>
            </div>
          </div>
        </div>

        {formError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{formError}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="shipping">Shipping Details</TabsTrigger>
                <TabsTrigger
                  value="contact"
                  disabled={!shippingComplete && activeTab !== "contact"}
                  className={!shippingComplete && activeTab !== "contact" ? "cursor-not-allowed opacity-50" : ""}
                >
                  Contact Information
                </TabsTrigger>
              </TabsList>

              <TabsContent value="shipping" className="space-y-6 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="pickupLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pickup Location</FormLabel>
                        <FormControl>
                          <AutocompleteInput
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val)
                              form.trigger("pickupLocation")
                            }}
                            placeholder="Search for pickup location"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="deliveryLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Delivery Location</FormLabel>
                        <FormControl>
                          <AutocompleteInput
                            value={field.value}
                            onChange={(val) => {
                              field.onChange(val)
                              form.trigger("deliveryLocation")
                            }}
                            placeholder="Search for delivery location"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="itemType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Item</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                          form.trigger("itemType")
                        }}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select item type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="documents">Documents</SelectItem>
                          <SelectItem value="parcel">Parcel</SelectItem>
                          <SelectItem value="fragile">Fragile Items</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="furniture">Furniture</SelectItem>
                          <SelectItem value="vehicle">Vehicle</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weight (kg)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Approximate weight"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e)
                              form.trigger("weight")
                            }}
                          />
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
                        <FormLabel>Dimensions (cm)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="L x W x H"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e)
                              form.trigger("dimensions")
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="deliverySpeed"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Preferred Delivery Speed</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={(value) => {
                            field.onChange(value)
                            form.trigger("deliverySpeed")
                          }}
                          value={field.value}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="standard" />
                            </FormControl>
                            <FormLabel className="font-normal">Standard (3-5 business days)</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="express" />
                            </FormControl>
                            <FormLabel className="font-normal">Express (1-2 business days)</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="same-day" />
                            </FormControl>
                            <FormLabel className="font-normal">Same Day (where available)</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4 flex justify-end">
                  <Button
                    type="button"
                    onClick={() => setActiveTab("contact")}
                    className="w-full md:w-auto"
                    disabled={!shippingComplete}
                  >
                    {shippingComplete ? "Next: Contact Information" : "Please complete all fields"}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="contact" className="space-y-6 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e)
                              form.trigger("name")
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormDescription>This field is optional</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your email address"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e)
                              form.trigger("email")
                            }}
                          />
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
                          <Input
                            type="tel"
                            placeholder="Your phone number"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e)
                              form.trigger("phone")
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any special requirements or additional details about your shipment"
                          className="resize-none min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>This field is optional</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setActiveTab("shipping")}
                    className="order-2 sm:order-1"
                  >
                    Back to Shipping Details
                  </Button>
                  <Button
                    type="submit"
                    className={cn("order-1 sm:order-2", isLoading && "opacity-70 cursor-not-allowed")}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Request a Quote"
                    )}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
