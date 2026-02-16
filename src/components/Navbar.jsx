import { Link } from 'react-router-dom';
import logo from '../assets/cetaalogo.jpg'; // Matches your assets folder

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-4 glass flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src={logo} alt="CETAA Logo" className="h-12 w-auto rounded-full" />
        <div className="hidden sm:block">
          <h1 className="text-[11px] font-black uppercase tracking-tighter text-white">College of Engineering Trivandrum</h1>
          <p className="text-[9px] text-neon font-bold uppercase tracking-widest">Alumni Association</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest">
          <Link to="/" className="text-white hover:text-neon transition-colors">Home</Link>
          <Link to="/renovation" className="text-white hover:text-neon transition-colors">Renovation</Link>
        </div>
        
        <div className="flex gap-4 text-[10px] font-black uppercase tracking-tighter">
          <Link to="/register" className="text-white hover:text-neon">Register</Link>
          <Link to="/login" className="text-white hover:text-neon">Login</Link>
        </div>
      </div>
    </nav>
  );
}