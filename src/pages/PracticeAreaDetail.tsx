import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { practiceAreas } from "@/data/practiceAreas";
import { Scale, ArrowLeft } from "lucide-react";

const PracticeAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Practice Area Not Found</h1>
          <Link to="/practice-areas" className="text-accent hover:underline">
            ← Back to Practice Areas
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-accent text-sm mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/practice-areas" className="hover:underline">Area of Practice</Link>
            <span>/</span>
            <span className="text-primary-foreground/70">{area.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <Scale className="w-10 h-10 text-accent" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold">{area.title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="space-y-6">
              {area.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-foreground/80 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Link
                to="/practice-areas"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Practice Areas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreaDetail;
