import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, CheckCircle, AlertCircle } from "lucide-react";

const Registration = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-tedx-red to-tedx-red-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white text-tedx-red hover:bg-gray-100">
            Registration
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Coming Soon
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Registration will open soon!
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-6 py-3">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Registration opens in 2024</span>
          </div>
        </div>
      </section>

      {/* Event Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tedx-black mb-4">Event Information</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 text-tedx-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Date</h3>
                <p className="text-muted-foreground">Coming Soon</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-tedx-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Time</h3>
                <p className="text-muted-foreground">TBA</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-tedx-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Venue</h3>
                <p className="text-muted-foreground">Jahangirnagar University</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-tedx-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Capacity</h3>
                <p className="text-muted-foreground">Limited Seats</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Types */}
      <section className="py-20 bg-tedx-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tedx-black mb-4">Registration Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Student Registration */}
            <Card className="relative overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-tedx-red"></div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-tedx-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-tedx-red" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Student</h3>
                <div className="text-3xl font-bold text-tedx-red mb-2">Free</div>
                <p className="text-muted-foreground mb-6">For JU Students</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Lorem ipsum dolor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Consectetur adipiscing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Sed do eiusmod</span>
                  </li>
                </ul>
                <Button className="w-full bg-tedx-red hover:bg-tedx-red-dark" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            {/* General Registration */}
            <Card className="relative overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 border-tedx-red border-2">
              <div className="absolute top-0 left-0 right-0 h-1 bg-tedx-red"></div>
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-tedx-red text-white">
                Popular
              </Badge>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-tedx-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-tedx-red" />
                </div>
                <h3 className="text-2xl font-bold mb-4">General</h3>
                <div className="text-3xl font-bold text-tedx-red mb-2">TBA</div>
                <p className="text-muted-foreground mb-6">For General Public</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Lorem ipsum dolor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Consectetur adipiscing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Sed do eiusmod</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Tempor incididunt</span>
                  </li>
                </ul>
                <Button className="w-full bg-tedx-red hover:bg-tedx-red-dark" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            {/* VIP Registration */}
            <Card className="relative overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-tedx-red"></div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-tedx-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-tedx-red" />
                </div>
                <h3 className="text-2xl font-bold mb-4">VIP</h3>
                <div className="text-3xl font-bold text-tedx-red mb-2">TBA</div>
                <p className="text-muted-foreground mb-6">Premium Experience</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Lorem ipsum dolor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Consectetur adipiscing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Sed do eiusmod</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Tempor incididunt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Ut labore et dolore</span>
                  </li>
                </ul>
                <Button className="w-full bg-tedx-red hover:bg-tedx-red-dark" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tedx-black mb-4">Important Information</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-tedx-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Registration Requirements</h3>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-tedx-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cancellation Policy</h3>
                    <p className="text-muted-foreground">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-tedx-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What to Bring</h3>
                    <p className="text-muted-foreground">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-tedx-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
                    <p className="text-muted-foreground">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notify Me Section */}
      <section className="py-20 bg-tedx-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Notified When Registration Opens
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Be the first to know when registration opens.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black"
            />
            <Button className="bg-tedx-red hover:bg-tedx-red-dark px-6">
              Notify Me
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We'll send you an email as soon as registration opens.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Registration;