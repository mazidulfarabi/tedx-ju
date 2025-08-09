import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Globe, Target } from "lucide-react";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <>
      <SEO 
        title="About TEDx Jahangirnagar University"
        description="Learn about TEDx JU - an independently organized TED event at Jahangirnagar University celebrating local voices and global ideas. Discover our mission, vision, and what makes us special."
        keywords="TEDx JU about, TEDx program, Jahangirnagar University, mission vision, local voices, global ideas, TEDx events, university community, innovation platform"
        url="https://tedx-ju.netlify.app/about"
        type="website"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-tedx-red to-tedx-red-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white text-tedx-red hover:bg-gray-100">
            About TEDx JU
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What is TEDx Jahangirnagar University?
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            TEDx JU is an independently organized TED event at Jahangirnagar University, celebrating local voices and global ideas.
          </p>
        </div>
      </section>

      {/* TEDx Explanation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-tedx-black mb-6">
                About TEDx Program
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                TEDx is a program of local, self‑organized events that bring people together to share a TED‑like experience. At TEDx JU we host live speakers and performances.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Each talk is curated around a unifying theme and recorded to share with the world.
              </p>
              <p className="text-lg text-muted-foreground">
                TED grants free licenses; content and production are fully organized by our volunteer team.
              </p>
            </div>
            <div className="bg-tedx-light-grey p-8 rounded-lg">
              <div className="text-center">
                <div className="text-6xl font-bold text-tedx-red mb-4">TEDx</div>
                <p className="text-lg text-muted-foreground">
                  An initiative to surface ideas from JU — research, art, entrepreneurship, and social impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-tedx-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tedx-black mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We amplify compelling ideas from JU and beyond, connect communities, and inspire action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-tedx-red mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  We create a platform where diverse voices share clear, actionable ideas that can create positive change.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Lightbulb className="h-12 w-12 text-tedx-red mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  A campus‑wide culture of curiosity where ideas cross disciplines and spark collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tedx-black mb-4">What Makes TEDx JU Special</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What makes TEDx JU special is the people who build it and the stories they bring to the stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="h-16 w-16 text-tedx-red mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
                <p className="text-muted-foreground">
                  Organized entirely by JU students across curation, design, and production.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Globe className="h-16 w-16 text-tedx-red mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
                <p className="text-muted-foreground">
                  Talks are filmed and shared online to reach audiences far beyond campus.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Lightbulb className="h-16 w-16 text-tedx-red mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We experiment with stagecraft, storytelling, and interactive experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Images */}
      <section className="py-20 bg-tedx-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tedx-black mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about TEDx JU events and participation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/faq1.jpg" 
                alt="FAQ 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/faq2.jpg" 
                alt="FAQ 2" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/faq3.jpg" 
                alt="FAQ 3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/faq4.jpg" 
                alt="FAQ 4" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* License and TED Website */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tedx-black mb-4">Official TEDx License</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              TEDx JU operates under an official license from TED, ensuring we follow the highest standards of quality and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-tedx-black mb-4">Find Us on TED.com</h3>
              <p className="text-muted-foreground mb-6">
                Visit our official TEDx event page to learn more about our upcoming event "Threads of Change" on September 20, 2025, and stay updated with the latest information.
              </p>
              <a 
                href="https://www.ted.com/tedx/events/64697" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-tedx-red text-white font-semibold rounded-lg hover:bg-tedx-red-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Find Us on TED Website
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-md">
                <img 
                  src="/license.jpeg" 
                  alt="TEDx JU Official License" 
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-tedx-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">TEDx by Numbers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A snapshot of the TEDx movement and our campus ambition in 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-tedx-red mb-2">50+</div>
              <p className="text-gray-300">Organising Members</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-tedx-red mb-2">10,000+</div>
              <p className="text-gray-300">Interested Audience</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-tedx-red mb-2">25+</div>
              <p className="text-gray-300">Advisors</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-tedx-red mb-2">100%</div>
              <p className="text-gray-300">Hype</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;