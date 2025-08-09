import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import data from "@/data/blogs.json";
import SEO from "@/components/SEO";

type Blog = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  content: string[];
};

const Blog = () => {
  const posts = (data as any).posts as Blog[];
  const [selected, setSelected] = useState<string>("All");

  useEffect(() => {
    document.title = "TEDx JU Blog – Updates, Stories, Insights";
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map((p) => p.category)));
    return ["All", ...cats];
  }, [posts]);

  const filtered = useMemo(() => {
    return selected === "All" ? posts : posts.filter((p) => p.category === selected);
  }, [selected, posts]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <SEO 
        title="TEDx JU Blog - Updates, Stories, Insights"
        description="Stay updated with TEDx Jahangirnagar University! Read our latest blog posts featuring announcements, spotlights, and behind-the-scenes stories from our community."
        keywords="TEDx JU blog, TEDx Jahangirnagar University updates, university blog, community stories, event announcements, behind the scenes, TEDx news"
        url="https://tedx-ju.netlify.app/blog"
        type="website"
      />
      <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-tedx-red to-tedx-red-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white text-tedx-red hover:bg-gray-100">Latest Updates</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">TEDx JU Blog</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stories from the TEDx Jahangirnagar University community — announcements, spotlights, and behind‑the‑scenes.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selected ? "default" : "outline"}
                size="sm"
                className={category === selected ? "bg-tedx-red hover:bg-tedx-red-dark" : ""}
                onClick={() => setSelected(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-tedx-black mb-4">Featured Post</h2>
            </div>

            <Card className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
                  <Badge className="absolute top-4 left-4 bg-tedx-red text-white">{featured.category}</Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featured.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featured.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featured.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featured.title}</h3>
                  <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
                  <Button asChild className="bg-tedx-red hover:bg-tedx-red-dark w-fit">
                    <Link to={`/blog/${featured.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-20 bg-tedx-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tedx-black mb-4">Latest Posts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore announcements, stories, and insights from our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 left-4 bg-tedx-red text-white text-xs">{post.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <Button asChild size="sm" variant="ghost" className="text-tedx-red hover:text-tedx-red-dark p-0">
                      <Link to={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-tedx-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe for 2025 announcements and highlights from TEDx JU.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-black" />
            <Button className="bg-tedx-red hover:bg-tedx-red-dark px-6">Subscribe</Button>
          </div>
        </div>
      </section>
          </div>
    </>
    );
  };
  
  export default Blog;
