import { Link } from "react-router-dom";
import {
  ChevronRight, FileText, Building2, BadgePercent, ClipboardList,
  type LucideIcon
} from "lucide-react";

interface SidebarSection {
  title: string;
  items: string[];
  icon: LucideIcon;
  highlighted?: boolean;
}

interface ProductSidebarProps {
  productName: string;
  insights: string[];
  topLenders: string[];
  interestRates: string[];
  eligibilityDocs: string[];
  extraSections?: SidebarSection[];
  ctaIcon: LucideIcon;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
}

const SidebarCard = ({ title, items, icon: Icon, highlighted }: { title: string; items: string[]; icon: LucideIcon; highlighted?: boolean }) => (
  <div className={`rounded-xl border p-4 mb-4 ${highlighted ? "border-primary/30 bg-primary/5" : "border-border bg-card"}`}>
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-4 h-4 text-primary" />
      <h3 className="text-sm font-bold text-foreground">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">
          <ChevronRight className="w-3 h-3 text-primary/60 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ProductSidebar = ({
  productName,
  insights,
  topLenders,
  interestRates,
  eligibilityDocs,
  extraSections,
  ctaIcon: CtaIcon,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
}: ProductSidebarProps) => {
  return (
    <aside className="hidden lg:block w-[280px] shrink-0">
      <div className="sticky top-24">
        <SidebarCard title={`${productName} Insights`} items={insights} icon={FileText} />
        <SidebarCard title={`Top ${productName} Lenders`} items={topLenders} icon={Building2} />
        <SidebarCard title="Compare Interest Rates" items={interestRates} icon={BadgePercent} />
        <SidebarCard title="Eligibility & Documents" items={eligibilityDocs} icon={ClipboardList} />

        {extraSections?.map((section, i) => (
          <SidebarCard
            key={i}
            title={section.title}
            items={section.items}
            icon={section.icon}
            highlighted={section.highlighted}
          />
        ))}

        {/* CTA Card */}
        <div className="rounded-xl bg-[hsl(var(--purple-deep))] p-5 text-white">
          <CtaIcon className="w-8 h-8 text-white/80 mb-3" />
          <h3 className="text-sm font-bold mb-1">{ctaTitle || `Get Instant ${productName}`}</h3>
          <p className="text-xs text-white/70 mb-4">{ctaDescription || `Compare offers from top lenders and get the best rates instantly.`}</p>
          <Link to="/login" className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity text-center block">
            {ctaButtonText || "Apply Now"}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ProductSidebar;
