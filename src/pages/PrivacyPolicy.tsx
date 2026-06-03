import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-accent text-sm mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-primary-foreground/70">Privacy Policy</span>
          </div>
          <div className="flex items-center gap-4">
            <Shield className="w-10 h-10 text-accent" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold">Privacy Policy</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Information Collection</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Nisar & Nisar respects and is committed to protecting your privacy. We collect information from you when you visit our website, fill out a form, or contact us via email. The information collected may include your name, email address, phone number and any message you choose to send us.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Use of Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Any information we collect from you may be used to personalize your experience and to improve our website and services. We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Confidentiality</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              As a law firm, we are bound by strict professional rules of confidentiality. Any information shared with us in the context of seeking legal advice is treated as strictly confidential and is protected by attorney-client privilege. We implement a variety of security measures to maintain the safety of your personal information.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Cookies</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Our website may use cookies to enhance your experience. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. This is done through your browser settings. If you turn cookies off, some features may not function properly.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Third-Party Links</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Nisar & Nisar reserves the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting on the website. If you have any questions regarding this policy, you may contact us at{" "}
              <a href="mailto:info@nisarandnisar.com" className="text-accent hover:underline">info@nisarandnisar.com</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
