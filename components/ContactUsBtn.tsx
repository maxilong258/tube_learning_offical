"use client";

import { Button } from "./ui/button";

export const handleMailClick = () => {
  const email = "adc3080027554@gmail.com";
  const subject = "[Feedback for EngSub]"; 
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoLink;
};

export default function ContactUsBtn() {
  return  <Button 
    variant="link"
    onClick={handleMailClick}
  >
    Contact Us
  </Button>
}

