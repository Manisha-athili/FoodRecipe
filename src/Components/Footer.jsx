const Footer = () => {
    
  return (
    <footer className="bg-gray-800 text-white py-6 bg-black w-100% p-5">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Manisha. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </a>
          |
          <a href="/terms" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
