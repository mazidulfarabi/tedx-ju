import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Globe, Target } from "lucide-react";

const About = () => {
  return (
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-lg text-muted-foreground">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
            <div className="bg-tedx-light-grey p-8 rounded-lg">
              <div className="text-center">
                <div className="text-6xl font-bold text-tedx-red mb-4">TEDx</div>
                <p className="text-lg text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-tedx-red mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Lightbulb className="h-12 w-12 text-tedx-red mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="h-16 w-16 text-tedx-red mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Globe className="h-16 w-16 text-tedx-red mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
                <p className="text-muted-foreground">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Lightbulb className="h-16 w-16 text-tedx-red mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-tedx-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">TEDx by Numbers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-tedx-red mb-2">50+</div>
              <p className="text-gray-300">Lorem Ipsum</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-tedx-red mb-2">1000+</div>
              <p className="text-gray-300">Dolor Sit</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-tedx-red mb-2">25+</div>
              <p className="text-gray-300">Consectetur</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-tedx-red mb-2">100%</div>
              <p className="text-gray-300">Adipiscing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;