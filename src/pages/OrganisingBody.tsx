import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import team from "@/data/team.json";

const OrganisingBody = () => {
  const executives = (team as any).executives as string[];
  const advisory = (team as any).advisory as string[];
  const volunteers = (team as any).volunteers as string[];

  const ImageGrid = ({ images, altBase }: { images: string[]; altBase: string }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-lg bg-muted">
          <img
            src={src}
            alt={`${altBase} ${i + 1}`}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-tedx-red to-tedx-red-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white text-tedx-red hover:bg-gray-100">Meet the Team</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Organising Body</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            The TEDx JU team is fully volunteer‑run — executives, advisors, and volunteers joining forces to bring ideas worth spreading to campus.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-tedx-black mb-3">Our Team Structure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse photo directories for each group. Designations are embedded in the images.
            </p>
          </div>

          <Tabs defaultValue="executives" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="executives">Executives</TabsTrigger>
                <TabsTrigger value="advisory">Advisory</TabsTrigger>
                <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="executives">
              <ImageGrid images={executives} altBase="Executive" />
            </TabsContent>
            <TabsContent value="advisory">
              <ImageGrid images={advisory} altBase="Advisor" />
            </TabsContent>
            <TabsContent value="volunteers">
              <ImageGrid images={volunteers} altBase="Volunteer" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Join */}
      <section className="py-20 bg-tedx-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-0 max-w-2xl mx-auto">
            We’ll announce recruitment on our channels. Keep an eye on updates and get involved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OrganisingBody;
