import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Zap, Layers, TrendingUp, Shield, Package, Network } from 'lucide-react';

export default function SupplyChainWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Supply Chain Concepts Database
  const concepts = {
    'Fundamentals': [
      {
        id: 1,
        name: 'Procurement',
        description: 'The process of acquiring goods and services from external suppliers. It includes sourcing, supplier selection, negotiation, and purchase orders.',
        icon: '🛒',
        details: 'Procurement is critical for cost management and maintaining supplier relationships. It involves identifying requirements, evaluating suppliers, and managing contracts.'
      },
      {
        id: 2,
        name: 'Inventory Management',
        description: 'Control and oversight of stock levels throughout the supply chain. Balances demand with supply while minimizing carrying costs.',
        icon: '📦',
        details: 'Effective inventory management uses techniques like Economic Order Quantity (EOQ), Just-In-Time (JIT), and ABC analysis to optimize stock levels.'
      },
      {
        id: 3,
        name: 'Logistics',
        description: 'Planning and execution of product movement from point A to point B. Includes transportation, warehousing, and distribution.',
        icon: '🚚',
        details: 'Logistics encompasses the entire movement of goods including last-mile delivery, return logistics, and reverse supply chains.'
      },
      {
        id: 4,
        name: 'Demand Planning',
        description: 'Forecasting customer demand to align production and supply with market needs. Uses historical data and predictive analytics.',
        icon: '📊',
        details: 'Accurate demand planning prevents stockouts and overstock situations, improving cash flow and customer satisfaction.'
      }
    ],
    'Key Players': [
      {
        id: 5,
        name: 'Suppliers',
        description: 'Provide raw materials and components needed for production. They are the origin point of the supply chain.',
        icon: '🏭',
        details: 'Suppliers range from raw material providers to component manufacturers. Strong supplier relationships ensure quality and reliability.'
      },
      {
        id: 6,
        name: 'Manufacturers',
        description: 'Transform raw materials and components into finished products using production processes and quality control measures.',
        icon: '🔧',
        details: 'Manufacturers must optimize production schedules, manage quality, and minimize waste while meeting demand requirements.'
      },
      {
        id: 7,
        name: 'Distributors & Retailers',
        description: 'Bridge between manufacturers and consumers. Handle storage, fulfillment, and product availability at point of sale.',
        icon: '🏪',
        details: 'They manage inventory, handle customer orders, and ensure products are available when and where customers need them.'
      },
      {
        id: 8,
        name: 'Logistics Providers (3PL)',
        description: 'Third-party companies specializing in transportation, warehousing, and distribution. Allow companies to focus on core operations.',
        icon: '🚛',
        details: '3PL providers offer flexibility, expertise, and scalability for companies that outsource their logistics operations.'
      }
    ],
    'Processes': [
      {
        id: 9,
        name: 'Order Management',
        description: 'End-to-end process from order receipt through fulfillment. Includes order entry, processing, fulfillment, and delivery.',
        icon: '📋',
        details: 'Order management systems ensure accurate tracking and timely fulfillment, improving customer satisfaction and reducing errors.'
      },
      {
        id: 10,
        name: 'Warehousing',
        description: 'Storage and handling of inventory in warehouses. Includes receiving, storing, picking, and shipping operations.',
        icon: '🏗️',
        details: 'Modern warehouses use automation, WMS (Warehouse Management Systems), and efficient layouts to optimize space and speed.'
      },
      {
        id: 11,
        name: 'Distribution',
        description: 'Process of delivering finished products to retailers or customers. Includes routing, scheduling, and last-mile delivery.',
        icon: '🗺️',
        details: 'Efficient distribution minimizes delivery times and costs while maximizing service levels and customer satisfaction.'
      },
      {
        id: 12,
        name: 'Returns & Reverse Logistics',
        description: 'Handling of returned products, refunds, and recycling. Increasingly important for sustainability and customer satisfaction.',
        icon: '🔄',
        details: 'Reverse logistics recovers value from returned products through refurbishment, remanufacturing, or proper disposal.'
      }
    ],
    'Technologies': [
      {
        id: 13,
        name: 'ERP Systems',
        description: 'Enterprise Resource Planning systems integrate all business functions (finance, HR, supply chain, manufacturing) into one platform.',
        icon: '💻',
        details: 'Popular ERP systems: SAP, Oracle, Microsoft Dynamics. They provide real-time visibility and improve decision-making.'
      },
      {
        id: 14,
        name: 'IoT & Sensors',
        description: 'Connected devices that track products, monitor conditions (temperature, humidity), and enable real-time visibility.',
        icon: '📡',
        details: 'IoT sensors provide data on shipment conditions, inventory levels, and equipment status, enabling predictive maintenance.'
      },
      {
        id: 15,
        name: 'AI & Machine Learning',
        description: 'Predictive analytics for demand forecasting, route optimization, quality control, and anomaly detection.',
        icon: '🤖',
        details: 'AI improves forecasting accuracy, optimizes inventory, detects fraud, and automates decision-making in supply chains.'
      },
      {
        id: 16,
        name: 'Blockchain',
        description: 'Distributed ledger technology for transparency, traceability, and immutable record-keeping across supply chain partners.',
        icon: '⛓️',
        details: 'Blockchain ensures product authenticity, enables transparent tracking, and improves trust among supply chain partners.'
      },
      {
        id: 17,
        name: 'WMS & TMS',
        description: 'Warehouse Management Systems and Transportation Management Systems optimize warehouse operations and logistics routing.',
        icon: '🛣️',
        details: 'WMS automates picking, packing, and shipping. TMS optimizes routes, rates, and carrier selection for cost efficiency.'
      }
    ],
    'Challenges': [
      {
        id: 18,
        name: 'Supply Disruptions',
        description: 'Unexpected events (natural disasters, supplier failures, geopolitical events) that interrupt supply flow.',
        icon: '⚠️',
        details: 'Building resilience through diversification, safety stock, and contingency planning helps mitigate disruption risks.'
      },
      {
        id: 19,
        name: 'Demand Volatility',
        description: 'Unpredictable changes in customer demand due to market trends, seasonality, or economic conditions.',
        icon: '📈',
        details: 'Solutions: Collaborative forecasting, flexible manufacturing, safety stock strategies, and demand sensing.'
      },
      {
        id: 20,
        name: 'Cost Management',
        description: 'Rising costs in transportation, labor, materials, and energy affect supply chain profitability.',
        icon: '💰',
        details: 'Cost optimization includes supplier consolidation, process automation, mode selection, and waste reduction.'
      },
      {
        id: 21,
        name: 'Sustainability & Compliance',
        description: 'Meeting environmental regulations, reducing carbon footprint, and ensuring ethical sourcing.',
        icon: '🌱',
        details: 'Companies must balance cost efficiency with environmental responsibility and social governance requirements.'
      }
    ],
    'Best Practices': [
      {
        id: 22,
        name: 'Just-In-Time (JIT)',
        description: 'Receiving materials exactly when needed for production. Minimizes inventory holding costs and waste.',
        icon: '⏱️',
        details: 'JIT requires reliable suppliers, accurate demand forecasting, and excellent coordination. Pioneered by Toyota.'
      },
      {
        id: 23,
        name: 'Lean Manufacturing',
        description: 'Systematic approach to eliminate waste and improve efficiency. Focuses on continuous improvement.',
        icon: '🎯',
        details: 'Lean principles: value, flow, pull, perfection. Reduces lead times, improves quality, and lowers costs.'
      },
      {
        id: 24,
        name: 'Collaborative Planning',
        description: 'Regular communication and data sharing between suppliers, manufacturers, and customers to align forecasts and plans.',
        icon: '🤝',
        details: 'CPFR (Collaborative Planning, Forecasting, and Replenishment) improves forecast accuracy and reduces bullwhip effect.'
      },
      {
        id: 25,
        name: 'Risk Management',
        description: 'Identifying, assessing, and mitigating potential supply chain risks through diversification and contingency planning.',
        icon: '🛡️',
        details: 'Risk management includes supplier audits, supply diversification, insurance, and business continuity planning.'
      }
    ]
  };

  // Filter concepts based on search
  const filterConcepts = (concept) => {
    return concept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           concept.description.toLowerCase().includes(searchTerm.toLowerCase());
  };

  // Supply Chain Flow Animation Component
  const SupplyChainFlow = () => (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden">
      <style>{`
        @keyframes flowRight {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
        .flow-item {
          animation: flowRight 3s ease-in-out infinite;
        }
        .node-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 300">
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <line x1="50" y1="150" x2="950" y2="150" stroke="url(#flowGrad)" strokeWidth="3" />
          <circle cx="50" cy="150" r="15" fill="#3b82f6" className="node-glow" />
          <circle cx="250" cy="150" r="15" fill="#06b6d4" className="node-glow" />
          <circle cx="450" cy="150" r="15" fill="#3b82f6" className="node-glow" />
          <circle cx="650" cy="150" r="15" fill="#06b6d4" className="node-glow" />
          <circle cx="950" cy="150" r="15" fill="#3b82f6" className="node-glow" />
        </svg>
      </div>

      <div className="relative z-10 h-full flex items-center justify-between">
        {[
          { label: 'SUPPLIERS', icon: '🏭' },
          { label: 'MANUFACTURERS', icon: '🔧' },
          { label: 'DISTRIBUTORS', icon: '🚚' },
          { label: 'RETAILERS', icon: '🏪' },
          { label: 'CUSTOMERS', icon: '👥' }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-4xl mb-2">{item.icon}</div>
            <div className="text-sm font-bold text-blue-300">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Animated flow items */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 transform -translate-y-1/2 text-2xl flow-item"
            style={{ animationDelay: `${i * 1}s` }}
          >
            📦
          </div>
        ))}
      </div>
    </div>
  );

  // Concept Card Component
  const ConceptCard = ({ concept }) => (
    <div className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-400">
      <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-blue-500 to-cyan-500 group-hover:h-full transition-all duration-300" />
      <div className="p-6">
        <div className="text-4xl mb-3">{concept.icon}</div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
          {concept.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          {concept.description}
        </p>
        <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 rounded px-3 py-2">
          {concept.details}
        </div>
      </div>
    </div>
  );

  // Category Stats
  const stats = [
    { label: 'Supply Chain Concepts', value: '25+', icon: <Package className="w-6 h-6" /> },
    { label: 'Key Processes', value: '15+', icon: <Layers className="w-6 h-6" /> },
    { label: 'Technologies', value: '20+', icon: <Zap className="w-6 h-6" /> },
    { label: 'Best Practices', value: '30+', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Header */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Network className="w-7 h-7 text-blue-600" />
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              SupplyChain Hub
            </span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => { setActiveSection('home'); setSearchTerm(''); }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeSection === 'home' ? 'bg-blue-600 text-white' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveSection('concepts')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeSection === 'concepts' ? 'bg-blue-600 text-white' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              Concepts
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HOME SECTION */}
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fadeIn">
            {/* Hero Section */}
            <section className="relative py-20">
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
              </div>
              <div className="text-center space-y-6">
                <h1 className="text-6xl font-black text-slate-900 dark:text-white leading-tight">
                  Master Supply Chain
                  <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Concepts & Practices
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  Comprehensive guide to understanding every aspect of modern supply chain management, from procurement to delivery
                </p>
                <button
                  onClick={() => setActiveSection('concepts')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/50"
                >
                  Explore Concepts <ChevronDown className="w-5 h-5 rotate-90" />
                </button>
              </div>
            </section>

            {/* Supply Chain Flow */}
            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2">Supply Chain Flow</h2>
                <p className="text-slate-600 dark:text-slate-300">From raw materials to end customers</p>
              </div>
              <SupplyChainFlow />
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all">
                  <div className="text-blue-600 dark:text-cyan-400 mb-3">{stat.icon}</div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </section>

            {/* Key Features */}
            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white">What You'll Learn</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Core Concepts', desc: 'Fundamentals of procurement, inventory, logistics, and demand planning', icon: '📚' },
                  { title: 'Key Players', desc: 'Understanding suppliers, manufacturers, distributors, and retailers', icon: '👥' },
                  { title: 'Processes', desc: 'Order management, warehousing, distribution, and reverse logistics', icon: '⚙️' },
                  { title: 'Technologies', desc: 'ERP, IoT, AI, Blockchain, WMS, and TMS systems', icon: '🚀' },
                  { title: 'Challenges', desc: 'Supply disruptions, demand volatility, costs, and sustainability', icon: '⚡' },
                  { title: 'Best Practices', desc: 'JIT, Lean, Collaborative Planning, and Risk Management', icon: '🎯' }
                ].map((item, idx) => (
                  <div key={idx} className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:shadow-lg transition-all">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* CONCEPTS SECTION */}
        {activeSection === 'concepts' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Search & Filter */}
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search supply chain concepts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:border-blue-500 dark:text-white"
                />
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${!selectedCategory ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                >
                  All Categories
                </button>
                {Object.keys(concepts).map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${selectedCategory === category ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Concepts Grid */}
            {Object.entries(concepts).map(([category, items]) => {
              const filtered = items.filter(filterConcepts);
              if (filtered.length === 0) return null;
              if (selectedCategory && selectedCategory !== category) return null;

              return (
                <div key={category} className="space-y-4">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">{category}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(concept => (
                      <ConceptCard key={concept.id} concept={concept} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center text-slate-600 dark:text-slate-400">
          <p className="font-semibold mb-2">SupplyChain Hub</p>
          <p>Comprehensive guide to modern supply chain management</p>
          <p className="text-sm mt-4">© 2024 SupplyChain Hub. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
