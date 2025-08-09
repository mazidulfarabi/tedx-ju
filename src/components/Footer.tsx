import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tedx-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/ebb06ba2-a739-4370-ad89-d481510e7bad.png" 
              alt="TEDx Jahangirnagar University" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              TEDx JU is an independently organized event at Jahangirnagar University, led by volunteers to share ideas worth spreading.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61577137555120" className="text-gray-300 hover:text-tedx-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/tedx-jahangirnagar-university/" className="text-gray-300 hover:text-tedx-red transition-colors">
                <LinkedIn className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/tedx_ju/" className="text-gray-300 hover:text-tedx-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-tedx-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tedx-red transition-colors">
                  What is TEDx JU
                </Link>
              </li>
              <li>
                <Link to="/organising-body" className="text-gray-300 hover:text-tedx-red transition-colors">
                  Organising Body
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-tedx-red transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Jahangirnagar University</p>
              <p>Savar, Dhaka-1342</p>
              <p>Bangladesh</p>
              <div className="flex items-center space-x-2 mt-4">
                <Mail className="h-4 w-4" />
                <span>tedx@juniv.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 TEDx Jahangirnagar University. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This independent TEDx event is operated under license from TED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;