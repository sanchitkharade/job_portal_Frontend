import { useState } from "react";
import { IconChevronDown, IconChevronUp, IconHelpCircle } from "@tabler/icons-react";
import { Accordion, Container, Title, Paper } from "@mantine/core";

const faqs = [
  { question: "How do I create an account?", answer: "Click on the 'Sign Up' button and fill in your details to create an account." },
  { question: "How can I reset my password?", answer: "Go to the login page and click on 'Forgot Password?' to reset it." },
  { question: "How do I apply for jobs?", answer: "Browse job listings, click on a job, and press 'Apply Now' to submit your application." },
  { question: "Can I edit my resume after uploading?", answer: "Yes! You can edit your resume anytime from your profile dashboard." },
];

export default function FAQPage() {
  return (
    <Container size="md" className="min-h-screen flex items-center justify-center">
      <Paper shadow="xl" p="xl" radius="lg" className="w-full max-w-2xl bg-white">
        <div className="flex items-center mb-6">
          <IconHelpCircle size={32} className="text-bright-sun-400 mr-2" />
          <Title order={2} className="text-bright-sun-400">Frequently Asked Questions (FAQs)</Title>
        </div>

        {/* FIXED: Added "value" prop to each Accordion.Item */}
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={`faq-${index}`} className="border-b border-gray-200 py-2">
              <Accordion.Control className="flex items-center justify-between w-full text-left text-gray-700 font-medium cursor-pointer p-2 hover:bg-gray-50 rounded-md">
                {faq.question}
              </Accordion.Control>
              <Accordion.Panel className="p-2 text-gray-600">{faq.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Paper>
    </Container>
  );
}
