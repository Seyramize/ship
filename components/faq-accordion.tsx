import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I track my package?",
    answer:
      "You can track your package by entering your tracking number on our Track page. The tracking number is provided in your shipping confirmation email. Our system provides real-time updates on your shipment's status and location.",
  },
  {
    question: "What items can't be shipped?",
    answer:
      "We have restrictions on shipping hazardous materials, perishable items without proper packaging, illegal substances, and certain valuables. Please contact our customer service for a complete list of prohibited items or if you have questions about specific items.",
  },
  {
    question: "How are shipping costs calculated?",
    answer:
      "Shipping costs are calculated based on several factors including weight, dimensions, distance, delivery speed, and any special handling requirements. You can get an accurate quote by using our Quote Request form with your specific shipping details.",
  },
  {
    question: "What shipping options do you offer?",
    answer:
      "We offer a range of shipping options including standard delivery (3-5 business days), express delivery (1-2 business days), and same-day delivery in select areas. International shipping timeframes vary by destination.",
  },
  {
    question: "Do you provide packaging materials?",
    answer:
      "Yes, we offer a variety of packaging materials and solutions. We can provide standard boxes, specialty packaging for fragile items, and custom crating for large shipments. Our packaging experts can recommend the best option for your specific needs.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Our return policy depends on the type of service you've purchased. For most shipping services, we offer refunds if the package hasn't been processed yet. For completed deliveries, we may offer partial refunds in cases of service issues. Please contact customer service within 30 days of shipment.",
  },
  {
    question: "Do you offer insurance for shipments?",
    answer:
      "Yes, we offer insurance options for all shipments. Basic coverage is included for packages up to a certain value, and additional insurance can be purchased for higher-value items. We recommend insuring all valuable or irreplaceable items.",
  },
  {
    question: "How do I prepare my items for shipping?",
    answer:
      "For best results, use appropriate packaging materials, ensure items are securely packed with proper cushioning, seal boxes with quality packing tape, and clearly label the package. For fragile or specialty items, we recommend our professional packaging services.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, bank transfers, and corporate accounts with approved credit. For regular business shipping, we offer monthly billing options with detailed invoices and shipping reports.",
  },
  {
    question: "Can I change the delivery address after shipping?",
    answer:
      "Yes, in many cases you can request an address change for packages that haven't been delivered yet. There may be additional fees depending on when the request is made and the new delivery location. Contact customer service as soon as possible to request changes.",
  },
]

export default function FaqAccordion() {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
