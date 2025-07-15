import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "March 15, 2024",
      author: "Lorem Author",
      category: "Event Updates",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Consectetur Adipiscing Elit",
      excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "March 10, 2024",
      author: "Dolor Sit",
      category: "Speaker Spotlight",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "Sed Do Eiusmod Tempor",
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "March 5, 2024",
      author: "Amet Consectetur",
      category: "Behind the Scenes",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Incididunt Ut Labore",
      excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "February 28, 2024",
      author: "Elit Sed",
      category: "Community",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Et Dolore Magna Aliqua",
      excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      date: "February 20, 2024",
      author: "Tempor Incididunt",
      category: "Insights",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Totam Rem Aperiam",
      excerpt: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      date: "February 15, 2024",
      author: "Ut Labore",
      category: "Preparation",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      readTime: "8 min read",
    },
  ];

  const categories = ["All", "Event Updates", "Speaker Spotlight", "Behind the Scenes", "Community", "Insights", "Preparation"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-tedx-red to-tedx-red-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white text-tedx-red hover:bg-gray-100">
            Latest Updates
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            TEDx JU Blog
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Stay updated with our latest news and insights.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-tedx-red hover:bg-tedx-red-dark" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tedx-black mb-4">Featured Post</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-tedx-red text-white">
                  {blogPosts[0].category}
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <Button className="bg-tedx-red hover:bg-tedx-red-dark w-fit">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-tedx-light-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tedx-black mb-4">Latest Posts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-tedx-red text-white text-xs">
                    {post.category}
                  </Badge>
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
                    <Button size="sm" variant="ghost" className="text-tedx-red hover:text-tedx-red-dark p-0">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-tedx-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Subscribe to our newsletter to get the latest updates and insights.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black"
            />
            <Button className="bg-tedx-red hover:bg-tedx-red-dark px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;