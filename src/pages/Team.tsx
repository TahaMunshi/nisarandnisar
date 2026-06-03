import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { User } from "lucide-react";
import { teamMembers } from "@/data/teamMembers";

const offices = [
  { label: "Karachi Office", filter: "Karachi" as const },
  { label: "Lahore Office", filter: "Lahore" as const },
];

const Team = () => {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-3">Meet Our Lawyers</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Our Team</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          {offices.map((office) => (
            <div key={office.label} className="mb-12 last:mb-0">
              <h2 className="section-heading text-2xl mb-2">{office.label}</h2>
              <div className="gold-underline mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers
                  .filter((m) => m.office === office.filter)
                  .map((member) => {
                    const content = (
                      <>
                        <div className="w-20 h-20 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                          <User className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h3 className="font-serif font-semibold text-foreground">{member.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{member.title}</p>
                      </>
                    );

                    return member.hasDetail ? (
                      <Link
                        key={member.slug}
                        to={`/team/${member.slug}`}
                        className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg hover:border-accent/50 transition-all"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div
                        key={member.slug}
                        className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                      >
                        {content}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Team;
