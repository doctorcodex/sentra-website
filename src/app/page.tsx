// Developed by doctorcodex / drferdiiskandar
// AADI home page - clinical intelligence platform
import SentraAadiDemo from "@/components/ui/sentra-aadi-demo";
import SentraAbout from "@/components/ui/sentra-about";
import SentraCredits from "@/components/ui/sentra-credits";
import SentraCustomers from "@/components/ui/sentra-customers";
import SentraFaq from "@/components/ui/sentra-faq";
import SentraFooter from "@/components/ui/sentra-footer";
import SentraHero from "@/components/ui/sentra-hero";
import SentraIntegrations from "@/components/ui/sentra-integrations";
import SentraMilestones from "@/components/ui/sentra-milestones";
import SentraProtocol7 from "@/components/ui/sentra-protocol7";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <SentraHero />

      {/* About Section */}
      <SentraAbout />

      {/* AADI Demo */}
      <SentraAadiDemo />

      {/* Protocol 7 */}
      <SentraProtocol7 />

      {/* Milestones */}
      <SentraMilestones />

      {/* Integrations */}
      <SentraIntegrations />

      {/* Customers */}
      <SentraCustomers customers={[]} />

      {/* FAQ */}
      <SentraFaq />

      {/* Credits & Acknowledgments */}
      <SentraCredits />

      {/* Footer */}
      <SentraFooter />
    </div>
  );
}
