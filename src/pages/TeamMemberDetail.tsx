import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { teamMembers } from "@/data/teamMembers";
import { User, ArrowLeft, MapPin, Briefcase } from "lucide-react";

const TeamMemberDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Team Member Not Found</h1>
          <Link to="/team" className="text-accent hover:underline">
            ← Back to Our Team
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
            <Link to="/team" className="hover:underline">Our Team</Link>
            <span>/</span>
            <span className="text-primary-foreground/70">{member.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold">{member.name}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Profile Card */}
            <div className="bg-card border border-border rounded-lg p-8 mb-10">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">{member.name}</h2>
                  <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4 text-accent" />
                      {member.title}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-accent" />
                      {member.office} Office
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            {member.bio.length > 0 && (
              <div className="space-y-6">
                {member.bio.map((paragraph, index) => (
                  <p key={index} className="text-foreground/80 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-border">
              <Link
                to="/team"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamMemberDetail;
