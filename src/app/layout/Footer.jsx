import { Linkedin, Github, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 mr-3 flex items-center justify-center text-white font-bold text-lg">
                Md
              </div>
              <h2 className="text-2xl font-bold text-white">Atik Hasan</h2>
            </div>
            <p className="mt-2 max-w-md">
              Currently open to freelance opportunities and collaborations.
              Let's build something amazing together!{" "}
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/md-atik-hasan-035686332"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/MDATIK-3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.facebook.com/mdatikhasan.096/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Telepathy. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition mr-6"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;