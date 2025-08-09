import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="Page Not Found - TEDx Jahangirnagar University"
        description="The page you're looking for doesn't exist. Return to TEDx Jahangirnagar University homepage to explore our event and community."
        keywords="404, page not found, TEDx JU, error page"
        url="https://tedx-ju.netlify.app/404"
        type="website"
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
          </div>
    </>
    );
  };
  
  export default NotFound;
