import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Zap, Layers, TrendingUp, Package, Network, BookOpen, CheckCircle, BarChart2, Lightbulb, Target, Clock } from 'lucide-react';
import { conceptsData } from './data/concepts.js';

const ConceptDetail = ({ concept, onClose }) => {
  const diffColor = { Beginner:'bg-green-100 text-green-700', Intermediate:'bg-yellow-100 text-yellow-700', Advanced:'bg-red-100 text-red-700' };
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="min-h-screen flex items-start justify-center p-4 py-8" onClick={e => e.stopPropagation()}>
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-4xl">
          <div className="relative bg-gradient-to-br from-blue-700 to-indigo-800 rounded-t-2xl p-8 text-white">
            <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-lg transition-colors font-bold">x</button>
            <div className="flex items-start gap-5">
              <span className="text-6xl leading-none">{concept.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${diffColor[concept.difficulty]}`}>{concept.difficulty}</span>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full flex items-center gap-1"><Clock className="w-3 h-3"/> {concept.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-1 leading-tight">{concept.name}</h2>
                <p className="text-blue-200 text-sm italic">{concept.tagline}</p>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <section>
              <div className="flex items-center gap-2 mb-3"><BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0"/><h3 className="text-lg font-bold text-slate-900 dark:text-white">Overview</h3></div>
              {concept.overview.split('\n\n').map((para, i) => (<p key={i} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">{para.trim()}</p>))}
            </section>
            <section>
              <div className="flex items-center gap-2 mb-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0"/><h3 className="text-lg font-bold text-slate-900 dark:text-white">Key Concepts</h3></div>
              <div className="space-y-2">
                {concept.keyPoints.map((point, i) => {
                  const ci = point.indexOf(':');
                  const ht = ci > 0 && ci < 50;
                  return (
                    <div key={i} className="flex gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl p-3">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i+1}</span>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {ht ? <><strong className="text-slate-900 dark:text-white">{point.slice(0,ci)}:</strong>{point.slice(ci+1)}</> : point}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
            <section>
              <div className="flex items-center gap-2 mb-3"><BarChart2 className="w-5 h-5 text-purple-600 flex-shrink-0"/><h3 className="text-lg font-bold text-slate-900 dark:text-white">Key Metrics to Track</h3></div>
              <div className="grid sm:grid-cols-2 gap-3">
                {concept.metrics.map((m, i) => (
                  <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-xl p-3 bg-white dark:bg-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{m.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3"><Lightbulb className="w-5 h-5 text-yellow-300 flex-shrink-0"/><h3 className="text-lg font-bold">Real-World Example: {concept.realExample.company}</h3></div>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">{concept.realExample.story}</p>
              <div className="bg-white/15 rounded-xl p-4">
                <p className="text-xs font-bold text-yellow-300 mb-1 uppercase tracking-wider">Outcome</p>
                <p className="text-white text-sm leading-relaxed">{concept.realExample.outcome}</p>
              </div>
            </section>
            <div className="grid sm:grid-cols-2 gap-4">
              <section>
                <div className="flex items-center gap-2 mb-3"><Zap className="w-5 h-5 text-amber-500 flex-shrink-0"/><h3 className="text-base font-bold text-slate-900 dark:text-white">Tools & Platforms</h3></div>
                <div className="flex flex-wrap gap-2">{concept.tools.map((t,i)=><span key={i} className="text-xs bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-700 px-2 py-1 rounded-lg font-medium">{t}</span>)}</div>
              </section>
              <section>
                <div className="flex items-center gap-2 mb-3"><Target className="w-5 h-5 text-teal-500 flex-shrink-0"/><h3 className="text-base font-bold text-slate-900 dark:text-white">Frameworks</h3></div>
                <div className="flex flex-wrap gap-2">{concept.frameworks.map((f,i)=><span key={i} className="text-xs bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700 px-2 py-1 rounded-lg font-medium">{f}</span>)}</div>
              </section>
            </div>
            <section className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2"><span className="text-xl">🇮🇳</span><h3 className="font-bold text-orange-800 dark:text-orange-300">India Context</h3></div>
              <p className="text-sm text-orange-700 dark:text-orange-300 leading-relaxed">{concept.indianContext}</p>
            </section>
            <div className="text-center pt-2 pb-2">
              <button onClick={onClose} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-blue-500/20">
                Close ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConceptCard = ({ concept, onClick }) => (
  <div onClick={onClick} className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-400 cursor-pointer">
    <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-blue-500 to-cyan-500 group-hover:h-full transition-all duration-300"/>
    <div className="p-5">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">{concept.icon}</div>
      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">{concept.name}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{concept.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400">{concept.readTime} read</span>
        <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Deep dive →</span>
      </div>
    </div>
  </div>
);

const SupplyChainFlow = () => (
  <div className="relative w-full h-60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 overflow-hidden">
    <style>{`@keyframes fR{0%{transform:translateX(-150%);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translateX(200vw);opacity:0}}@keyframes pG{0%,100%{box-shadow:0 0 10px rgba(59,130,246,.5)}50%{box-shadow:0 0 25px rgba(59,130,246,.9)}}.fp{animation:fR 4s ease-in-out infinite;}.ng{animation:pG 2s ease-in-out infinite;}`}</style>
    <div className="relative z-10 h-full flex items-center justify-between gap-1">
      {[{l:'SUPPLIERS',i:'🏭'},{l:'MANUFACTURERS',i:'🔧'},{l:'DISTRIBUTORS',i:'🚚'},{l:'RETAILERS',i:'🏪'},{l:'CUSTOMERS',i:'👥'}].map((item,idx,arr)=>(
        <React.Fragment key={idx}>
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="w-11 h-11 bg-slate-700 rounded-xl flex items-center justify-center text-xl ng">{item.i}</div>
            <span className="text-xs font-bold text-blue-300 text-center leading-tight max-w-14">{item.l}</span>
          </div>
          {idx<arr.length-1&&<div className="flex-1 h-px bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50 relative min-w-2">
            <div className="fp absolute -top-2 text-sm" style={{animationDelay:`${idx*0.9}s`}}>📦</div>
          </div>}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default function SupplyChainWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const fn = () => { const st=window.scrollY,dh=document.documentElement.scrollHeight-window.innerHeight; setScrollProgress(dh>0?(st/dh)*100:0); };
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => { if(e.key==='Escape') setSelectedConcept(null); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedConcept ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedConcept]);

  const filterFn = (c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.description.toLowerCase().includes(searchTerm.toLowerCase());

  const stats = [
    { label:'Concepts', value:'25+', icon:<Package className="w-5 h-5"/> },
    { label:'Processes', value:'15+', icon:<Layers className="w-5 h-5"/> },
    { label:'Technologies', value:'20+', icon:<Zap className="w-5 h-5"/> },
    { label:'Best Practices', value:'30+', icon:<TrendingUp className="w-5 h-5"/> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 z-50 transition-all duration-150" style={{width:`${scrollProgress}%`}}/>
      {selectedConcept && <ConceptDetail concept={selectedConcept} onClose={() => setSelectedConcept(null)}/>}

      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Network className="w-7 h-7 text-blue-600"/>
            <span className="text-xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">SupplyChain Hub</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => {setActiveSection('home');setSearchTerm('');}} className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all ${activeSection==='home'?'bg-blue-600 text-white':'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Home</button>
            <button onClick={() => setActiveSection('concepts')} className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all ${activeSection==='concepts'?'bg-blue-600 text-white':'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Concepts</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fadeIn">
            <section className="text-center space-y-6 py-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-200 dark:border-blue-800">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Comprehensive · India-Focused · Real-World Examples
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                Master Supply Chain<span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Concepts & Practices</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Click any concept card to explore an in-depth breakdown with real examples, metrics, tools, frameworks, and India context.</p>
              <button onClick={() => setActiveSection('concepts')} className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/30">
                Explore All 25 Concepts <ChevronDown className="w-5 h-5 -rotate-90"/>
              </button>
            </section>

            <section>
              <div className="text-center mb-4"><h2 className="text-3xl font-black text-slate-900 dark:text-white">Supply Chain Flow</h2><p className="text-slate-500 text-sm mt-1">From raw materials to end customers</p></div>
              <SupplyChainFlow/>
            </section>

            <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s,i)=>(
                <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all text-center">
                  <div className="text-blue-600 dark:text-cyan-400 mb-2 flex justify-center">{s.icon}</div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </section>

            <section>
              <div className="text-center mb-6">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">Click Any Concept to Deep Dive</h2>
                <p className="text-slate-500 text-sm mt-2">Each card opens a full breakdown with metrics, real examples, tools, and India context</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Object.values(conceptsData).flat().slice(0,6).map(c=><ConceptCard key={c.id} concept={c} onClick={()=>setSelectedConcept(c)}/>)}
              </div>
              <div className="text-center mt-8">
                <button onClick={() => setActiveSection('concepts')} className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:opacity-90 transition-opacity">See All 25 Concepts →</button>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'concepts' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400"/>
                <input type="text" placeholder="Search supply chain concepts..." value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white text-sm"/>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={()=>setSelectedCategory(null)} className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${!selectedCategory?'bg-blue-600 text-white shadow':'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'}`}>All</button>
                {Object.keys(conceptsData).map(cat=><button key={cat} onClick={()=>setSelectedCategory(cat)} className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${selectedCategory===cat?'bg-blue-600 text-white shadow':'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'}`}>{cat}</button>)}
              </div>
            </div>
            {Object.entries(conceptsData).map(([cat,items])=>{
              const filtered = items.filter(filterFn);
              if(!filtered.length) return null;
              if(selectedCategory && selectedCategory!==cat) return null;
              return (
                <div key={cat}>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-3 mb-5">{cat}</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map(c=><ConceptCard key={c.id} concept={c} onClick={()=>setSelectedConcept(c)}/>)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-slate-600 dark:text-slate-400">
          <p className="font-bold text-lg mb-1 text-slate-900 dark:text-white">SupplyChain Hub</p>
          <p className="text-sm mb-2">A comprehensive guide to modern supply chain management with real-world examples and India context.</p>
          <p className="text-xs text-slate-400 mt-4">© {new Date().getFullYear()} SupplyChain Hub. All rights reserved.</p>
        </div>
      </footer>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.animate-fadeIn{animation:fadeIn .5s ease-out}`}</style>
    </div>
  );
}
