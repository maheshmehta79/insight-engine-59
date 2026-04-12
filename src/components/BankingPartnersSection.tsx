import { motion } from "framer-motion";

import axisBank from "@/assets/partners/axis-bank.png";
import federalBank from "@/assets/partners/federal-bank.png";
import hdfcBank from "@/assets/partners/hdfc-bank.png";
import iciciBank from "@/assets/partners/icici-bank.png";
import idfcFirstBank from "@/assets/partners/idfc-first-bank.png";
import indusindBank from "@/assets/partners/indusind-bank.png";
import kotak from "@/assets/partners/kotak.png";
import sbi from "@/assets/partners/sbi.png";
import yesBank from "@/assets/partners/yes-bank.png";
import rblBank from "@/assets/partners/rbl-bank.png";
import auSmallFinance from "@/assets/partners/au-small-finance.png";
import hsbc from "@/assets/partners/hsbc.png";
import standardChartered from "@/assets/partners/standard-chartered.png";
import sbmBank from "@/assets/partners/sbm-bank.png";
import hdbFinancial from "@/assets/partners/hdb-financial.png";
import tataCapital from "@/assets/partners/tata-capital.png";
import ltFinance from "@/assets/partners/lt-finance.png";
import muthootFinance from "@/assets/partners/muthoot-finance.png";
import heroFincorp from "@/assets/partners/hero-fincorp.png";
import poonawalla from "@/assets/partners/poonawalla.png";
import indiabulls from "@/assets/partners/indiabulls.png";
import homeCredit from "@/assets/partners/home-credit.png";
import tvsCredit from "@/assets/partners/tvs-credit.png";
import piramal from "@/assets/partners/piramal.png";
import stashfin from "@/assets/partners/stashfin.png";
import dmiFinance from "@/assets/partners/dmi-finance.png";
import protium from "@/assets/partners/protium.png";
import homefirst from "@/assets/partners/homefirst.png";

const partners = [
  [
    { name: "Axis Bank", logo: axisBank },
    { name: "Federal Bank", logo: federalBank },
    { name: "HDFC Bank", logo: hdfcBank },
    { name: "ICICI Bank", logo: iciciBank },
    { name: "IDFC First Bank", logo: idfcFirstBank },
    { name: "IndusInd Bank", logo: indusindBank },
    { name: "Kotak", logo: kotak },
  ],
  [
    { name: "SBI", logo: sbi },
    { name: "Yes Bank", logo: yesBank },
    { name: "RBL Bank", logo: rblBank },
    { name: "AU Small Finance", logo: auSmallFinance },
    { name: "HSBC", logo: hsbc },
    { name: "Standard Chartered", logo: standardChartered },
    { name: "SBM Bank", logo: sbmBank },
  ],
  [
    { name: "HDB Financial", logo: hdbFinancial },
    { name: "Tata Capital", logo: tataCapital },
    { name: "L&T Finance", logo: ltFinance },
    { name: "Muthoot Finance", logo: muthootFinance },
    { name: "Hero FinCorp", logo: heroFincorp },
    { name: "Poonawalla", logo: poonawalla },
    { name: "Indiabulls", logo: indiabulls },
  ],
  [
    { name: "Home Credit", logo: homeCredit },
    { name: "TVS Credit", logo: tvsCredit },
    { name: "Piramal", logo: piramal },
    { name: "Stashfin", logo: stashfin },
    { name: "DMI Finance", logo: dmiFinance },
    { name: "Protium", logo: protium },
    { name: "HomeFirst", logo: homefirst },
  ],
];

const BankingPartnersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {partners.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 mb-4"
            >
              {row.map((partner, colIndex) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (rowIndex * 7 + colIndex) * 0.015 }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-primary/15 bg-card hover:bg-primary/5 hover:border-primary/25 hover:shadow-lg transition-all duration-300 cursor-default h-28 gap-2"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-14 max-w-full object-contain"
                    loading="lazy"
                  />
                  <span className="text-[11px] font-bold text-foreground/90 text-center leading-tight tracking-tight">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground text-sm">
            ...and <span className="font-semibold text-primary">50+ more</span> lending partners across India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BankingPartnersSection;
