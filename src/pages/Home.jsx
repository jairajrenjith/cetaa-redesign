import { motion } from 'framer-motion';
import cetCampusImg from '../assets/cet.jpg';
import { 
  MessageSquare, 
  MapPin, 
  Globe, 
  Award, 
  BookOpen, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube 
} from 'lucide-react';

// Automatically import all images from your local assets folders
const galleryImages = Object.values(import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,PNG}', { eager: true, import: 'default' }));
const memberImages = Object.values(import.meta.glob('../assets/latest members/*.{png,jpg,jpeg,PNG}', { eager: true, import: 'default' }));

export default function Home() {
  return (
    <div className="pt-32 px-10 pb-20 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative h-[450px] rounded-[3rem] overflow-hidden glass mb-20 shadow-2xl">
        <img src={cetCampusImg} className="w-full h-full object-cover opacity-60" alt="CET Campus" />
        <div className="absolute inset-0 flex items-center justify-end p-20">
          <div className="glass p-12 rounded-[2.5rem] max-w-lg border-neon/30 bg-black/20">
            <h2 className="text-2xl font-black uppercase mb-4 leading-tight">Welcome to the Official Portal of CET Alumni Association</h2>
            <p className="text-sm opacity-80 mb-8 leading-relaxed">
              Create your profiles to connect with Your Classmates, Share Memories & Exchange Opportunities.
            </p>
            <button className="px-10 py-4 bg-neon text-black font-black rounded-2xl uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,133,0.3)]">
              REGISTER NOW
            </button>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {/* Detailed Welcome Section */}
          <section className="glass p-10 rounded-[3rem] border-white/10">
            <h3 className="text-xl font-black text-neon mb-6 uppercase tracking-widest border-l-4 border-neon pl-4">Welcome to Alumni</h3>
            <p className="text-sm leading-relaxed opacity-90 mb-4">
              The College of Engineering, Trivandrum was established in 1939 as the first Engineering College in the then Travancore State. The first classes were started on 3rd July 1939 during the reign of the Travancore King, Sri Chithira Thirunal Balarama Varma and as the head of the then Travancore state he deserves his share of credit in the establishment of the college. Initially the College was housed in the former office and bungalow of the Chief Engineer (present PMG Office).
            </p>
            <p className="text-sm leading-relaxed opacity-70 italic">
              Legacy of excellence in technical education for over 85 years.
            </p>
          </section>

          {/* Messages and Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-[2rem] flex flex-col items-center gap-4 hover:border-neon transition-all cursor-pointer group bg-white/5">
              <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                <MessageSquare className="text-neon" size={32} />
              </div>
              <span className="font-bold uppercase text-xs tracking-widest">President's Message</span>
            </div>
            <div className="glass p-8 rounded-[2rem] flex flex-col items-center gap-4 hover:border-neon transition-all cursor-pointer group bg-white/5">
              <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                <MessageSquare className="text-neon" size={32} />
              </div>
              <span className="font-bold uppercase text-xs tracking-widest">Secretary's Message</span>
            </div>
          </div>
        </div>

        {/* Dynamic Sidebar */}
        <aside className="space-y-10">
          <div className="glass p-8 rounded-[3rem] border-white/10 bg-white/5">
            {/* Added text-slate-900 for light mode visibility */}
            <h3 className="text-lg font-black mb-8 uppercase tracking-widest border-l-4 border-neon pl-4 text-white light:text-slate-900">Newsroom</h3>
            <div className="space-y-8">
              <div className="border-b border-white/5 pb-6">
                {/* Updated opacity classes for light mode visibility */}
                <p className="text-[10px] font-bold uppercase mb-1 text-white opacity-50 light:text-slate-500 light:opacity-100">9 Jan 2026</p>
                {/* Added light:text-slate-900 */}
                <h4 className="font-bold text-sm mb-2 text-white light:text-slate-900">GEMS Scholarship 2025-26</h4>
                <p className="text-[10px] text-neon italic break-all bg-black/30 p-2 rounded leading-tight">
                  Google Form : https://forms.gle/uKNxwC8D3n96LyP39
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase mb-1 text-white opacity-50 light:text-slate-500 light:opacity-100">25 Dec 2025</p>
                {/* Added light:text-slate-900 */}
                <h4 className="font-bold text-sm mb-2 text-white light:text-slate-900">Merry Christmas</h4>
                {/* Updated opacity/color for light mode visibility */}
                <p className="text-[11px] leading-relaxed text-white opacity-60 light:text-slate-700 light:opacity-100">
                  CETAA wishes our alumni family a joyous Christmas filled with warmth and togetherness.
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-[3rem] border-white/10 bg-white/5">
             {/* Added light:text-slate-900 */}
             <h3 className="text-lg font-black mb-8 uppercase tracking-widest border-l-4 border-neon pl-4 text-white light:text-slate-900">Past Events</h3>
             <div className="space-y-6">
                <div className="flex gap-4 items-start">
                   <div className="text-center min-w-[50px] bg-white/5 p-3 rounded-xl border border-white/10">
                      <p className="text-neon font-black text-2xl leading-none">25</p>
                      <p className="text-[10px] uppercase font-bold mt-1 text-white opacity-60 light:text-slate-500 light:opacity-100">MAY</p>
                   </div>
                   <div>
                      {/* Added light:text-slate-900 */}
                      <h4 className="font-bold text-xs uppercase text-white light:text-slate-900">CETAA AGM-2024</h4>
                      <p className="text-[9px] flex items-center gap-1 mt-1 uppercase tracking-tighter text-white opacity-50 light:text-slate-600 light:opacity-100">
                        <MapPin size={10} className="text-neon" /> 3 pm at CETAA Hall
                      </p>
                   </div>
                </div>
                <div className="flex gap-4 items-start opacity-60">
                   <div className="text-center min-w-[50px] bg-white/5 p-3 rounded-xl border border-white/10">
                      <p className="text-gray-400 font-black text-2xl leading-none">22</p>
                      <p className="text-[10px] uppercase font-bold mt-1 text-white light:text-slate-500">JUL</p>
                   </div>
                   <div>
                      {/* Added light:text-slate-900 */}
                      <h4 className="font-bold text-xs uppercase text-white light:text-slate-900">CETAA DAY-2023</h4>
                      <p className="text-[9px] flex items-center gap-1 mt-1 uppercase tracking-tighter text-white light:text-slate-600">
                        <MapPin size={10} /> Diamond Jubilee Hall
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </aside>
      </div>

      {/* Gallery Section */}
      <section className="mt-32">
        <h3 className="text-xl font-black mb-10 uppercase tracking-widest border-l-4 border-neon pl-4">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {galleryImages.map((img, i) => (
            <div key={i} className="aspect-video glass rounded-xl overflow-hidden group border-white/10">
              <img 
                src={img} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={`Gallery ${i}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Latest Members Section */}
      <section className="mt-32">
        <h3 className="text-xl font-black mb-10 uppercase tracking-widest border-l-4 border-neon pl-4">Latest Members</h3>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3 grayscale hover:grayscale-0 transition-all duration-700">
          {memberImages.map((img, i) => (
            <div key={i} className="aspect-square glass rounded-xl overflow-hidden border-white/10">
              <img 
                src={img} 
                className="w-full h-full object-cover" 
                alt={`Member ${i}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Connectivity Section */}
      <section className="mt-24 py-10 border-y border-white/5">
        <div className="flex flex-wrap justify-center items-center gap-12">
          <a href="#" className="flex items-center gap-3 group">
            <Facebook className="text-gray-500 group-hover:text-neon transition-colors" size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white">Facebook</span>
          </a>
          <a href="#" className="flex items-center gap-3 group">
            <Twitter className="text-gray-500 group-hover:text-neon transition-colors" size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white">Twitter</span>
          </a>
          <a href="#" className="flex items-center gap-3 group">
            <Linkedin className="text-gray-500 group-hover:text-neon transition-colors" size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white">LinkedIn</span>
          </a>
          <a href="#" className="flex items-center gap-3 group">
            <Youtube className="text-gray-500 group-hover:text-neon transition-colors" size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white">YouTube</span>
          </a>
        </div>
      </section>

      {/* Footer / Powered By Section */}
      <footer className="mt-20 border-t border-white/10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="opacity-40 hover:opacity-100 transition-opacity">
            <p className="text-[10px] uppercase font-bold tracking-widest mb-2">Platform Partner</p>
            <h5 className="text-2xl font-black italic tracking-tighter">Powered By VAAVE</h5>
          </div>
          <div className="flex flex-wrap justify-end gap-6 text-[10px] font-bold uppercase opacity-50">
             <a href="#" className="hover:text-neon">Copyright © 2026</a>
             <a href="#" className="hover:text-neon">Disclaimer</a>
             <a href="#" className="hover:text-neon">Terms of Use</a>
             <a href="#" className="hover:text-neon">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}