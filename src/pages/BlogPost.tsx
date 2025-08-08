import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import data from "@/data/blogs.json";

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

const BlogPost = () => {
  const { slug } = useParams();
  const post = ((data as any).posts as Blog[]).find((p) => p.slug === slug);

  useEffect(() => {
    document.title = post ? `${post.title} – TEDx JU Blog` : "Post Not Found – TEDx JU Blog";
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-tedx-red hover:text-tedx-red-dark">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-tedx-red to-tedx-red-dark text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white text-tedx-red hover:bg-gray-100">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200">
            <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="bg-background">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden -mt-10">
            <img src={post.image} alt={post.title} className="w-full h-[340px] object-cover" />
          </Card>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
            {post.content.map((para, idx) => (
              <p key={idx} className="text-lg text-foreground/90 leading-relaxed mb-6">{para}</p>
            ))}
            <Card className="mt-8">
              <CardContent className="p-4">
                <Link to="/blog" className="inline-flex items-center text-tedx-red hover:text-tedx-red-dark">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
