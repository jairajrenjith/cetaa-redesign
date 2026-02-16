import TiltCard from '../components/TiltCard';
import { motion } from 'framer-motion';

// Real Assets
import hallProposed from '../assets/CETAAHALLproposed.PNG';
import hallCurrent from '../assets/CETAAHALLCURRENT.PNG';
import receptionProposed from '../assets/receptionareaproposed.PNG';
import receptionCurrent from '../assets/receptionareacurrent.PNG';
import officeCurrent from '../assets/CETAAofficecurrent.PNG';
import rampCurrent from '../assets/rampcurrent.PNG';

const sites = [
  { name: "CETAA Hall", proposed: hallProposed, current: hallCurrent },
  { name: "Reception Area", proposed: receptionProposed, current: receptionCurrent },
  { name: "Office & Ramp", proposed: officeCurrent, current: rampCurrent }
];

export default function Renovation() {
  return (
    <div className="pt-40 px-10 pb-40">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-32">
        <h2 className="text-4xl font-black text-neon uppercase tracking-widest mb-6">Campus Renovation</h2>
        <p className="text-sm opacity-60 max-w-xl mx-auto leading-relaxed italic">
          Seeking financial support from Alumni across the globe for the renovation of the CETAA Hall, Reception Area, Office, and Ramp facility.
        </p>
      </motion.div>

      <div className="space-y-40 max-w-6xl mx-auto">
        {sites.map((site, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
            <div className="flex-1 space-y-6">
              <h3 className="text-5xl font-black uppercase tracking-tighter">{site.name}</h3>
              <p className="opacity-70 leading-relaxed italic">Help us restore our legacy and build a modern future for the next generation.</p>
              <button className="px-12 py-4 bg-neon text-black font-black rounded-2xl uppercase tracking-widest hover:scale-110 transition-transform">Support</button>
            </div>
            <div className="flex-1">
              <TiltCard>
                <div className="glass p-4 rounded-[3rem] relative group overflow-hidden border-neon/20 shadow-2xl">
                  <img src={site.proposed} className="rounded-[2.5rem] w-full h-[400px] object-cover" alt="Proposed Vision" />
                  <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-12 text-center rounded-[2.5rem]">
                    <span className="text-[10px] text-neon font-black mb-4 uppercase tracking-[0.3em]">Current State</span>
                    <img src={site.current} className="w-full h-48 object-cover rounded-2xl border border-white/10 mb-6" alt="Current State" />
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}