import { Button } from "@/components/ui/button";
import { Brain, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Resources": [
      "Mental Health Articles",
      "Guided Meditations",
      "Study Tips",
      "Sleep Resources"
    ],
    "Support": [
      "Crisis Hotline",
      "Live Chat",
      "Support Groups",
      "Counseling Services"
    ],
    "About": [
      "Our Mission",
      "Privacy Policy",
      "Terms of Service",
      "Contact Us"
    ]
  };

  const crisisContacts = [
    { label: "Crisis Hotline", value: "988" },
    { label: "Campus Support", value: "(555) 123-HELP" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Crisis Banner */}
        <div className="bg-destructive/20 border border-destructive/30 rounded-lg p-4 mb-12 text-center">
          <h3 className="font-bold text-lg mb-2 text-background">Need Immediate Help?</h3>
          <p className="text-sm text-background/80 mb-4">
            If you're in crisis or having thoughts of self-harm, please reach out now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {crisisContacts.map((contact, index) => (
              <Button
                key={index}
                variant="outline"
                className="border-background text-background hover:bg-background hover:text-foreground transition-smooth"
              >
                <Phone className="w-4 h-4 mr-2" />
                {contact.label}: {contact.value}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-background" />
              </div>
              <span className="text-xl font-bold text-background">MindfulU</span>
            </div>
            <p className="text-background/70 text-sm mb-6 leading-relaxed">
              Supporting student mental health with compassionate care, 
              evidence-based resources, and a community that understands your journey.
            </p>
            <div className="flex items-center space-x-2 text-background/70">
              <Heart className="w-4 h-4 text-destructive" />
              <span className="text-sm">Made with care for students</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-background mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-background/70 hover:text-background transition-smooth text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="w-4 h-4 text-background/70" />
              <span className="text-background/70 text-sm">support@mindful-u.edu</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="w-4 h-4 text-background/70" />
              <span className="text-background/70 text-sm">(555) 123-MIND</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="w-4 h-4 text-background/70" />
              <span className="text-background/70 text-sm">Student Health Center, Room 205</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm mb-4 md:mb-0">
              © 2024 MindfulU. All rights reserved. Your mental health matters.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-background/70 hover:text-background transition-smooth text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-smooth text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-smooth text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;