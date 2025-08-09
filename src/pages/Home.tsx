import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MapPin, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Home = () => {
  return (
    <>
      <SEO 
        title="TEDx Jahangirnagar University - Ideas Worth Spreading"
        description="Join TEDx Jahangirnagar University for inspiring talks, performances, and ideas. Experience a day of innovation and thought leadership at JU Campus, Savar, Dhaka. Register now for Season 2025."
        keywords="TEDx, Jahangirnagar University, JU, TEDx JU, Savar, Dhaka, Bangladesh, ideas worth spreading, innovation, leadership, education, university events, TED talks, speakers, performances, registration"
        url="https://tedx-ju.netlify.app/"
        type="website"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/3213f10b-e37b-4fe3-9c54-d58ba4aa9168.png')`
          }}
        >
          <div className="absolute inset-0 bg-tedx-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-tedx-red hover:bg-tedx-red-dark text-white text-lg px-6 py-2">
            Coming Soon
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ideas Worth
            <span className="text-tedx-red block">Spreading</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            TEDx JU brings a day of talks, performances, and ideas at Jahangirnagar University — curated by volunteers for our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-tedx-red hover:bg-tedx-red-dark text-white px-8 py-4 text-lg"
              asChild
            >
              <Link to="/registration">
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white bg-white text-tedx-black hover:bg-white/90 px-8 py-4 text-lg"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tedx-black mb-4">Event Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the theme, venue, and what to expect at TEDx Jahangirnagar University 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 text-tedx-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
                <p className="text-muted-foreground">
                  Season 2025 — date announcement coming soon.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-tedx-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Venue</h3>
                <p className="text-muted-foreground">
                  Jahangirnagar University Campus, Savar, Dhaka
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-tedx-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Speakers</h3>
                <p className="text-muted-foreground">
                  A curated lineup of thinkers, makers, and change‑drivers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About TEDx Section */}
      <section className="py-20 bg-tedx-light-grey">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-tedx-black mb-6">
                What is TEDx?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                TEDx is a program of local, self‑organized events that bring people together to share a TED‑like experience.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                At JU, we spotlight ideas from science, culture, and community that matter to Bangladesh.
              </p>
              <Button 
                size="lg" 
                className="bg-tedx-red hover:bg-tedx-red-dark"
                asChild
              >
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-tedx-red to-tedx-red-dark p-8 rounded-lg text-white">
                <Star className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ideas Worth Spreading</h3>
                <p className="text-lg">
                  Independent, volunteer‑run, powered by students and alumni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tedx-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Be Part of Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of TEDx JU 2025 — volunteer, attend, and amplify ideas worth spreading.
          </p>
          <Button 
            size="lg" 
            className="bg-tedx-red hover:bg-tedx-red-dark text-white px-8 py-4 text-lg"
            asChild
          >
            <Link to="/registration">
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;