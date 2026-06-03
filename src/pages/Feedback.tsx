import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@nisarandnisar.com?subject=${encodeURIComponent(
      `Feedback: ${form.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
    toast({ title: "Thank you!", description: "Your email client has been opened to send your feedback." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-accent text-sm mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-primary-foreground/70">Feedback</span>
          </div>
          <div className="flex items-center gap-4">
            <MessageSquare className="w-10 h-10 text-accent" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold">Send Us Your Feedback</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-foreground/70 mb-8 text-lg">
            We value your feedback. Please share your thoughts, suggestions, or comments about our services. Your input helps us improve and serve you better.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                <Input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Subject *</label>
              <Input
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Feedback Subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message *</label>
              <Textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your feedback..."
              />
            </div>
            <Button type="submit" className="bg-gold hover:bg-gold/90 text-primary font-semibold">
              <Send className="w-4 h-4 mr-2" />
              Send Feedback
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Feedback;
