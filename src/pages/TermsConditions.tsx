import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const TermsConditions = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-accent text-sm mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-primary-foreground/70">Terms & Conditions</span>
          </div>
          <div className="flex items-center gap-4">
            <FileText className="w-10 h-10 text-accent" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold">Terms & Conditions</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Acceptance of Terms</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              By accessing or using the Nisar & Nisar website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use this website.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Disclaimer</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              The information provided on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is established by your use of this website or by sending us an email or other communication. You should not act or rely on any information on this website without seeking the advice of a qualified attorney.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              All content on this website, including text, graphics, logos, and images, is the property of Nisar & Nisar and is protected by applicable intellectual property laws. You may not reproduce, distribute, or transmit any content from this website without our prior written permission.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Nisar & Nisar shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of this website or the information contained herein. We make no warranties or representations about the accuracy or completeness of the content on this website.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">External Links</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Our website may contain links to external websites. We are not responsible for the content, privacy policies, or practices of any third-party websites. The inclusion of any link does not imply endorsement by Nisar & Nisar.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of Pakistan. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of Karachi, Pakistan.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Contact</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              If you have any questions about these Terms and Conditions, please contact us at{" "}
              <a href="mailto:info@nisarandnisar.com" className="text-accent hover:underline">info@nisarandnisar.com</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
