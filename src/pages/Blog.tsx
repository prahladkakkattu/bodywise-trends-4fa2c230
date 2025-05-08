
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Body Shape and Fashion Choices",
      excerpt: "Learn how identifying your body shape can transform your fashion choices and style confidence.",
      date: new Date(2025, 2, 15),
      category: "Style Tips"
    },
    {
      id: 2,
      title: "The Science Behind Perfect Fit Clothing",
      excerpt: "Discover how technology is changing the way we shop for clothes online with better fit predictions.",
      date: new Date(2025, 3, 8),
      category: "Technology"
    },
    {
      id: 3,
      title: "Sustainable Fashion: Making Ethical Choices",
      excerpt: "How choosing well-fitted clothing reduces returns and contributes to sustainable fashion practices.",
      date: new Date(2025, 4, 22),
      category: "Sustainability"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfaff]">
      <Navbar />
      
      <main className="container pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The latest news, articles, and resources on fashion, body positivity, and finding your perfect fit.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-100"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium bg-brand-100 text-brand-700 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {format(post.date, "MMMM d, yyyy")}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-sm font-medium text-brand-500 hover:text-brand-700 transition-colors">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="bg-white border-t py-8">
        <div className="container">
          <div className="text-center">
            <h3 className="font-bold text-xl text-brand-500 mb-2">StyleMyFit</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Personalized fashion recommendations based on your unique body shape.
            </p>
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">FAQ</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-300 transition-colors">Contact Us</a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} StyleMyFit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
