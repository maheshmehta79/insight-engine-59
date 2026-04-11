import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/credupe-logo.jpeg";

const footerLinks = {
  "Popular Products": ["Savings Account", "Credit Cards", "Home Loans", "Personal Loans", "Fixed Deposits"],
  "Quick Links": ["Net Banking", "Mobile Banking", "Locate ATM", "Customer Support", "Grievance Redressal"],
  "About Us": ["Our Story", "Leadership", "Investor Relations", "Careers", "CSR Initiatives"],
  "Important Links": ["Privacy Policy", "Terms & Conditions", "Fee Schedule", "Regulatory Disclosures", "DICGC"],
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="CreduPe" className="h-9 w-auto object-contain" />
              <span className="font-bold text-lg text-foreground">CreduPe</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Banking reimagined for a digital-first world. Your trusted financial partner.
            </p>
            <div className="flex gap-2 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 text-foreground">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 CreduPe. All rights reserved. CreduPe is a fictional brand created for demonstration purposes.
          </p>
          <p className="text-muted-foreground text-xs">
            This is not a real banking platform. Do not enter personal or financial information.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
