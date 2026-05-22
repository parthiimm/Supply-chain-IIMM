export const conceptsData = {
  'Fundamentals': [
    {
      id: 1, name: 'Procurement', icon: '🛒',
      description: 'Acquiring goods and services from external suppliers through sourcing, negotiation, and purchase orders.',
      tagline: 'The strategic art of sourcing the right goods at the right price',
      overview: `Procurement is the end-to-end process of identifying, evaluating, selecting, and managing suppliers who provide goods and services required by an organization. It is far more than just "buying" — it is a strategic function that directly impacts cost, quality, and supply chain resilience.\n\nIn modern supply chains, procurement accounts for 50–80% of a company's total spend, making it one of the largest cost levers available to management.`,
      keyPoints: [
        'Strategic vs Tactical: Strategic procurement focuses on long-term supplier relationships; tactical handles day-to-day purchases',
        'Sourcing Process: Need identification → Market research → RFQ/RFP → Supplier evaluation → Negotiation → Contract → PO',
        'Total Cost of Ownership (TCO): Evaluate not just price but quality, lead time, reliability, and risk',
        'Supplier Segmentation: Classify suppliers by spend and criticality using the Kraljic Matrix',
        'e-Procurement: Digital platforms like SAP Ariba and Coupa automate and streamline the entire process'
      ],
      metrics: [
        { name: 'Cost Savings %', desc: 'Reduction in procurement spend vs prior period or benchmark' },
        { name: 'Purchase Price Variance (PPV)', desc: 'Actual price paid vs standard/budgeted price' },
        { name: 'Supplier Lead Time', desc: 'Days from PO issue to goods receipt' },
        { name: 'PO Cycle Time', desc: 'Time from requisition to approved purchase order' },
        { name: 'Spend Under Management %', desc: 'Proportion of total spend managed through formal procurement' },
        { name: 'Supplier Defect Rate', desc: 'Percentage of delivered items failing quality checks' }
      ],
      realExample: {
        company: 'Britannia Industries',
        story: 'A supply chain strategy project at Britannia involving strategic procurement through demand planning. Using ABC-XYZ analysis, the team aligned inventory with demand patterns and automated supplier risk assessment for 450+ vendors using VBA macros — cutting review time by 80%.',
        outcome: 'Automated 95% of supplier assessments, improving speed and decision quality across Britannia\'s procurement function.'
      },
      tools: ['SAP Ariba', 'Oracle Procurement', 'Coupa', 'MS Excel/VBA', 'Power BI', 'Icertis (contracts)'],
      indianContext: 'GeM (Government e-Marketplace) has digitized procurement for Indian government agencies. Private sector leaders like Tata, Reliance, and Infosys have mature strategic procurement functions managing thousands of global suppliers.',
      frameworks: ['Kraljic Matrix', 'QCDDM Supplier Evaluation', 'CPFR', 'Vendor Managed Inventory (VMI)', 'Strategic Sourcing 7-Step Process'],
      difficulty: 'Intermediate', readTime: '8 min'
    },
    {
      id: 2, name: 'Inventory Management', icon: '📦',
      description: 'Control and oversight of stock levels throughout the supply chain, balancing demand with supply.',
      tagline: 'The science of having exactly what you need — no more, no less',
      overview: `Inventory Management is the systematic approach to sourcing, storing, and selling inventory — both raw materials and finished goods. It sits at the intersection of customer service and cost management.\n\nToo much inventory ties up cash and increases holding costs. Too little causes stockouts and lost sales. The goal is optimization — finding the "Goldilocks zone" of stock levels that maximizes service while minimizing cost.`,
      keyPoints: [
        'EOQ (Economic Order Quantity): Optimal order size = √(2DS/H) where D=annual demand, S=ordering cost, H=holding cost',
        'ABC Analysis: A-items (20% SKUs, 80% value) need daily monitoring; C-items can be reviewed monthly',
        'Safety Stock: Buffer inventory = Z × σ(demand) × √(lead time). Higher service level → more safety stock needed',
        'Reorder Point (ROP): When to reorder = (Average daily demand × Lead time) + Safety stock',
        'FIFO/FEFO: Product rotation methods — FEFO (First Expired First Out) is critical for perishable goods'
      ],
      metrics: [
        { name: 'Inventory Turnover', desc: 'COGS / Average Inventory — higher is better (FMCG benchmark: 8-12x)' },
        { name: 'Days Inventory Outstanding (DIO)', desc: '365 / Inventory Turnover — days of stock on hand' },
        { name: 'Fill Rate', desc: '% of customer orders fulfilled from available stock without backorder' },
        { name: 'Stockout Rate', desc: '% of time a SKU is unavailable when demanded' },
        { name: 'Carrying Cost %', desc: 'Annual cost of holding inventory as % of inventory value (typically 20-30%)' },
        { name: 'Dead Stock %', desc: '% of inventory with no movement in 90+ days' }
      ],
      realExample: {
        company: 'Indian Seafood Exporter',
        story: 'A supply chain analyst identified ₹29 Crore in high-risk aging seafood stock using a 2x2 Liquidation Matrix categorizing inventory by age and revenue. He also optimized SKU codes reducing MDM complexity.',
        outcome: 'Saved ₹1.4 Crore in obsolescence and storage costs, improved Customer Service Level (CSL), and reduced excess inventory across the cold chain.'
      },
      tools: ['Oracle MM', 'SAP MM', 'Zoho Inventory', 'Fishbowl', 'Advanced Excel', 'Power BI', 'Python (Pandas)'],
      indianContext: 'India\'s fragmented retail landscape (12 million+ kirana stores) makes inventory management uniquely challenging. DMart uses EDLP strategy with extremely lean inventory, achieving one of the highest inventory turns in Indian retail.',
      frameworks: ['ABC-XYZ Analysis', 'EOQ Model', 'Newsvendor Model', 'Multi-Echelon Inventory Optimization', 'VMI'],
      difficulty: 'Intermediate', readTime: '10 min'
    },
    {
      id: 3, name: 'Logistics', icon: '🚚',
      description: 'Planning and execution of product movement — transportation, warehousing, and distribution.',
      tagline: 'Getting the right product to the right place at the right time',
      overview: `Logistics is the detailed coordination of complex operations involving people, facilities, and supplies. In supply chain context, it covers the physical movement and storage of goods from point of origin to point of consumption.\n\nIndia's logistics sector is undergoing massive transformation — from a fragmented, unorganized sector to a technology-enabled, integrated industry driven by GST, PM Gati Shakti, and digital platforms.`,
      keyPoints: [
        'Inbound vs Outbound: Inbound = supplier to factory; Outbound = factory to customer/store',
        'Modes of Transport: Road (65% of India\'s freight), Rail (27%), Sea (coastal), Air (high value/urgent)',
        'Last Mile: Most expensive part of logistics (30-40% of total cost). Critical for e-commerce success',
        'Multimodal Logistics: Combining road + rail + sea for cost optimization. Rail beats road beyond 600km',
        '3PL vs 4PL: 3PL executes logistics operations; 4PL manages the entire supply chain including multiple 3PLs'
      ],
      metrics: [
        { name: 'OTIF %', desc: 'On-Time In-Full delivery performance — the gold standard logistics KPI' },
        { name: 'Cost per Tonne-km', desc: 'Transportation cost efficiency across modes and distances' },
        { name: 'Transit Time', desc: 'Average time from dispatch to delivery' },
        { name: 'Freight Cost as % of Revenue', desc: 'Logistics cost efficiency relative to business size' },
        { name: 'Damage Rate %', desc: '% of shipments arriving with damage' }
      ],
      realExample: {
        company: 'Delhivery',
        story: 'Delhivery processes 2 million+ shipments per day across 18,000+ pin codes using AI-powered route optimization. Their algorithms continuously recalculate delivery routes based on real-time traffic, order density, and vehicle capacity.',
        outcome: 'Reduced cost per delivery by 20%, making tier-2 and tier-3 India accessible to e-commerce brands for the first time.'
      },
      tools: ['Blue Yonder TMS', 'Oracle TMS', 'Google Maps Platform', 'FarEye', 'Locus.sh', 'ULIP (Govt India)'],
      indianContext: 'India\'s logistics cost is 7.97% of GDP (DPIIT-NCAER 2024). PM Gati Shakti aims to reduce this through dedicated freight corridors, multimodal logistics parks, and digital coordination via ULIP.',
      frameworks: ['Hub-and-Spoke Model', 'Cross-Docking', 'Milk Run Routing', 'Vehicle Routing Problem (VRP)', 'Direct Store Delivery'],
      difficulty: 'Beginner', readTime: '7 min'
    },
    {
      id: 4, name: 'Demand Planning', icon: '📊',
      description: 'Forecasting customer demand using historical data and analytics to align supply with market needs.',
      tagline: 'Predicting the future of customer demand with data and intelligence',
      overview: `Demand Planning is the process of forecasting customer demand to ensure supply chain resources are aligned accordingly. It is the critical bridge between market intelligence and operational execution.\n\nPoor demand planning leads to the Bullwhip Effect — where small demand variations get amplified upstream causing massive inventory swings. Best-in-class companies achieve MAPE below 10%.`,
      keyPoints: [
        'MAPE (Mean Absolute % Error): Primary forecast accuracy metric = (|Actual - Forecast| / Actual) × 100. Target: <10%',
        'Time Series Methods: Moving Average, Exponential Smoothing, ARIMA, SARIMA for seasonal products',
        'Causal Forecasting: Uses external variables (price, promotions, weather, GDP) to improve forecast accuracy',
        'Collaborative Forecasting (CPFR): Share forecasts with suppliers and customers to align the entire supply chain',
        'Demand Sensing: Short-term forecast (7-14 days) using real-time POS, social, and market data'
      ],
      metrics: [
        { name: 'MAPE %', desc: 'Mean Absolute Percentage Error — lower is better. <10% = excellent performance' },
        { name: 'Forecast Bias', desc: 'Systematic over or under-forecasting. Ideal = 0 (perfectly unbiased)' },
        { name: 'Forecast Value Added (FVA)', desc: 'Does the forecast improve on a simple naïve baseline model?' },
        { name: 'Safety Stock Level', desc: 'Buffer stock driven by forecast error — lower MAPE = less safety stock required' },
        { name: 'Demand Signal Coverage', desc: '% of demand captured through real-time data vs historical data only' }
      ],
      realExample: {
        company: 'Seafood Export Company — Demand Forecasting',
        story: 'An analyst achieved a MAPE of 6.5% forecasting 2025 Cephalopod export demand using ARIMA and SARIMA time-series models in Python — significantly better than the 15-20% industry average for seafood exports.',
        outcome: 'Enabled strategic procurement decisions for 2025 exports, aligned cold storage capacity, and optimized vendor selection across 72+ cold storage facilities in the sourcing zone.'
      },
      tools: ['Python (statsmodels, scikit-learn)', 'R', 'SAP IBP', 'Oracle Demantra', 'Anaplan', 'Excel Solver'],
      indianContext: 'India\'s demand is uniquely complex — driven by festivals (Diwali, Eid), regional preferences, monsoon cycles, and rapid income growth. FMCG companies like HUL and ITC run AI-based demand planning for 5,000+ SKUs.',
      frameworks: ['ARIMA/SARIMA', 'Exponential Smoothing (ETS)', 'Holt-Winters', 'Neural Network Forecasting', 'CPFR Framework'],
      difficulty: 'Advanced', readTime: '12 min'
    }
  ],
  'Key Players': [
    {
      id: 5, name: 'Suppliers', icon: '🏭',
      description: 'Provide raw materials and components at the origin of the supply chain.',
      tagline: 'The foundation on which every supply chain is built',
      overview: `Suppliers are entities that provide raw materials, components, sub-assemblies, or services required for production. They represent the upstream start of any supply chain, and their performance directly determines downstream cost, quality, and delivery.\n\nModern supply chains involve multiple tiers — Tier 1 (direct suppliers), Tier 2 (suppliers' suppliers), and Tier 3 (further upstream). Managing risk across all tiers has become a strategic imperative.`,
      keyPoints: [
        'Supplier Tiering: Tier 1 = direct; Tier 2 = indirect. Understanding all tiers is critical for risk management',
        'Supplier Development: Investing in supplier capability improvement benefits both parties long-term',
        'Dual/Multi Sourcing: Using multiple suppliers for critical inputs reduces single-point-of-failure risk dramatically',
        'Supplier Audits: Regular quality, financial, and compliance audits ensure standards are consistently maintained',
        'SRM (Supplier Relationship Management): Formal systems to track performance, risk, and collaboration over time'
      ],
      metrics: [
        { name: 'Supplier OTIF %', desc: 'On-time in-full delivery performance by individual supplier' },
        { name: 'Quality Rejection Rate', desc: '% of incoming materials failing quality inspection' },
        { name: 'Lead Time Variance', desc: 'Variability in supplier delivery time — lower = more predictable supply' },
        { name: 'Supplier Risk Score', desc: 'Composite score covering financial, operational, and compliance risks' },
        { name: 'Price Competitiveness', desc: 'Supplier pricing vs market benchmark pricing' }
      ],
      realExample: {
        company: 'Britannia Industries — Supplier Risk Dashboard',
        story: 'A supply chain project at a leading FMCG company involved classifying 450+ suppliers into 3 risk tiers using AHP (Analytic Hierarchy Process) and building a Dynamic Supplier Risk Dashboard to visualize risk and prioritize mitigation.',
        outcome: 'Automated 95% of supplier assessments, cut review time by 80%, and gave Britannia real-time visibility into supplier risk across all plants.'
      },
      tools: ['SAP SRM', 'Coupa', 'Ariba Supplier Management', 'Power BI (dashboards)', 'MS Forms + VBA (automation)'],
      indianContext: 'India has millions of MSMEs serving as Tier 2/3 suppliers to large corporations. Programs like MSME Samadhaan and TReDS (Trade Receivables Discounting System) are helping these suppliers improve financial health.',
      frameworks: ['Kraljic Matrix', 'QCDDM Evaluation', 'AHP (Analytic Hierarchy Process)', 'Supplier Scorecard', 'SRM Framework'],
      difficulty: 'Intermediate', readTime: '8 min'
    },
    {
      id: 6, name: 'Manufacturers', icon: '🔧',
      description: 'Transform raw materials into finished products using optimized production processes.',
      tagline: 'Where raw materials become customer value',
      overview: `Manufacturers are the value-creating heart of the supply chain — they convert inputs into finished goods through controlled production processes. Manufacturing strategy (make-to-stock, make-to-order, assemble-to-order) determines how the entire supply chain is designed.\n\nIndia is the world's 6th largest manufacturer and aims to become a global manufacturing hub through Make in India and PLI (Production Linked Incentive) schemes.`,
      keyPoints: [
        'MTS vs MTO vs ATO: Make-to-Stock (FMCG), Make-to-Order (industrial), Assemble-to-Order (auto/electronics)',
        'OEE (Overall Equipment Effectiveness): OEE = Availability × Performance × Quality. World-class = 85%+',
        'Capacity Planning: Match production capacity to demand forecasts across short, medium, and long term horizons',
        'Production Planning: MRP (Material Requirements Planning) calculates what to make, when, and how much to produce',
        'Predictive Maintenance: MTBF/MTTR analysis prevents unplanned downtime and optimizes maintenance scheduling'
      ],
      metrics: [
        { name: 'OEE %', desc: 'Overall Equipment Effectiveness = Availability × Performance × Quality. Target: 85%+' },
        { name: 'MTBF (hours)', desc: 'Mean Time Between Failures — longer is better. Drives maintenance scheduling' },
        { name: 'MTTR (hours)', desc: 'Mean Time To Repair — shorter is better. Minimizes production downtime' },
        { name: 'Production Yield %', desc: '% of output meeting quality standards without rework or defects' },
        { name: 'Capacity Utilization %', desc: 'Actual production as % of maximum possible production capacity' }
      ],
      realExample: {
        company: 'Atul Chemicals — Predictive Maintenance',
        story: 'A supply chain team established a Predictive Maintenance department at Atul Chemicals using MTBF & MTTR analysis on a 16-member team. He applied Precision Maintenance Techniques and developed Excel algorithms to analyze equipment KPIs, visualized in Power BI for proactive decision-making.',
        outcome: '₹97 Lakh cost saving in 8 months. Machine breakdowns reduced by 33%. Recognized as "Best Performer of the Quarter" by the General Manager.'
      },
      tools: ['Oracle EAM', 'SAP PM', 'Power BI', 'Excel (VBA)', 'Python', 'SCADA Systems'],
      indianContext: 'India\'s manufacturing contributes ~17% to GDP. Key hubs: Pune (auto), Surat (textiles/gems), Ludhiana (engineering), Ahmedabad (chemicals/pharma). PLI schemes are driving investment in electronics, pharma, and food processing.',
      frameworks: ['Toyota Production System', 'Six Sigma (DMAIC)', 'Total Productive Maintenance (TPM)', 'Theory of Constraints', 'SMED'],
      difficulty: 'Advanced', readTime: '11 min'
    },
    {
      id: 7, name: 'Distributors & Retailers', icon: '🏪',
      description: 'Bridge between manufacturers and consumers, handling storage, fulfillment, and availability.',
      tagline: 'The critical link that puts products in customers\' hands',
      overview: `Distributors and retailers form the downstream end of the supply chain — the channel through which finished goods reach end consumers. Their efficiency determines whether a product succeeds in the market, regardless of how well it was manufactured.\n\nIndia has the world's largest and most complex retail distribution network — 12 million+ kirana stores, modern trade, and rapidly growing e-commerce, all operating simultaneously.`,
      keyPoints: [
        'General Trade vs Modern Trade vs E-commerce: Three distinct channels with very different requirements in India',
        'Distribution Network Design: Direct vs indirect distribution. Hub-spoke vs point-to-point routing',
        'Channel Conflict: Managing tension between different retail channels (price, promotion, priority)',
        'SKU Rationalization: Retailers limit shelf space — manufacturers must fight for product placement',
        'Secondary Sales Tracking: Monitoring sell-out (consumer purchase) vs sell-in (distributor purchase)'
      ],
      metrics: [
        { name: 'Sell-Through Rate', desc: '% of inventory sold to end consumers vs purchased from manufacturer' },
        { name: 'Days of Supply (DOS)', desc: 'Inventory on hand divided by average daily sales rate' },
        { name: 'Distribution Reach', desc: '% of target outlets covered by the distribution network' },
        { name: 'Out-of-Stock Rate', desc: '% of time a product is unavailable at point of sale' },
        { name: 'Return Rate %', desc: '% of goods returned from retailers/distributors back upstream' }
      ],
      realExample: {
        company: 'B2B Raw Material Platform',
        story: 'A leading B2B raw material platform directly connects manufacturers with suppliers, cutting out traditional distributor layers. In one garment vertical, a ₹350 Crore P&L is managed through direct distribution channels with no intermediary markups.',
        outcome: '~25% EBITDA delivered consistently by eliminating traditional distributor margins and streamlining the supply chain.'
      },
      tools: ['DMS (Distributor Management Systems)', 'Salesforce', 'SAP SD', 'Bizom', 'Swipe POS', 'Retailer Apps'],
      indianContext: 'India\'s FMCG distribution reaches 7 million+ outlets through C&F agents, distributors, and wholesalers. HUL has 3,500+ distributors and direct relationships with 1 million retail outlets.',
      frameworks: ['RTM (Route to Market) Strategy', 'Perfect Store Framework', 'Trade Promotion Management', 'Channel Partner Program Design'],
      difficulty: 'Intermediate', readTime: '8 min'
    },
    {
      id: 8, name: 'Logistics Providers (3PL)', icon: '🚛',
      description: 'Third-party specialists in transportation, warehousing, and distribution.',
      tagline: 'Expert partners who move your supply chain forward',
      overview: `Third-Party Logistics (3PL) providers offer outsourced logistics services including transportation, warehousing, order fulfillment, and supply chain management. They allow businesses to leverage logistics expertise without building it in-house.\n\nThe global 3PL market exceeds $1 trillion. In India, the 3PL sector is growing at 10-15% annually driven by e-commerce growth, GST implementation, and formalization of logistics.`,
      keyPoints: [
        '3PL vs 4PL: 3PL executes operations; 4PL manages multiple 3PLs and provides supply chain strategy',
        'Asset vs Non-Asset Based: Asset-based 3PLs own trucks/warehouses; non-asset-based act as brokers/coordinators',
        'Value-Added Services (VAS): Labeling, kitting, quality inspection, returns processing beyond basic storage/transport',
        'SLA Management: Service Level Agreements define performance expectations and penalty structures',
        'Total Landed Cost: Evaluate 3PL on total cost including handling, storage, transport — not just quoted rates'
      ],
      metrics: [
        { name: 'On-Time Pickup/Delivery %', desc: 'Core SLA metric for 3PL performance evaluation' },
        { name: 'Order Accuracy %', desc: 'Correct items, quantities, and condition in fulfilled orders' },
        { name: 'Inventory Accuracy %', desc: 'WMS records matching physical inventory count' },
        { name: 'Cost per Order Fulfilled', desc: 'Total 3PL cost divided by orders processed' },
        { name: 'Claims Rate %', desc: '% of shipments resulting in damage or loss claims' }
      ],
      realExample: {
        company: 'Delhivery, Ecom Express, XpressBees',
        story: 'India\'s top 3PLs have built pan-India networks. Delhivery covers 18,000+ pin codes with 80+ fulfillment centers. Their tech stack includes AI-based routing, real-time tracking, and automated warehouse operations.',
        outcome: 'Enabled thousands of D2C brands to offer 2-3 day delivery across India without investing in their own logistics infrastructure.'
      },
      tools: ['Manhattan WMS', 'Blue Yonder', 'Shiprocket', 'Delhivery APIs', 'Locus.sh', 'FarEye'],
      indianContext: 'Key Indian 3PLs: Delhivery, Blue Dart (DHL), Mahindra Logistics, TVS Supply Chain, GATI, Ecom Express. The sector employs 22 million people and is consolidating rapidly.',
      frameworks: ['3PL Selection Framework', 'SLA Design & Governance', 'Logistics Network Design', 'Total Cost of Logistics Analysis'],
      difficulty: 'Beginner', readTime: '7 min'
    }
  ],
  'Processes': [
    {
      id: 9, name: 'Order Management', icon: '📋',
      description: 'End-to-end process from order receipt through fulfillment — entry, processing, and delivery.',
      tagline: 'The heartbeat of customer-facing supply chain operations',
      overview: `Order Management is the complete lifecycle of a customer order — from placement to fulfillment, delivery, and closure. It is the customer-facing side of the supply chain and directly determines customer experience.\n\nIn e-commerce, order management is real-time and high-frequency. In B2B, orders may be complex with custom specifications, partial shipments, and long lead times.`,
      keyPoints: [
        'Order Lifecycle: Customer Order → Entry → Credit Check → ATP Check → Picking → Packing → Dispatch → Delivery → Invoice → Returns',
        'ATP (Available-to-Promise): Real-time check of inventory availability to commit a delivery date to the customer',
        'Order Prioritization: Rules for sequencing orders when supply is limited (FCFS, key accounts, highest margin)',
        'Backorder Management: Formal process for handling orders that cannot be fulfilled immediately from stock',
        'EDI (Electronic Data Interchange): Automated order transmission between trading partners without manual entry'
      ],
      metrics: [
        { name: 'Order Cycle Time', desc: 'End-to-end time from order receipt to delivery. E-commerce benchmark: 24-48 hrs' },
        { name: 'Order Accuracy %', desc: '% of orders fulfilled with correct items, quantity, and condition' },
        { name: 'Perfect Order Rate', desc: 'On-time + In-full + Damage-free + Correct docs. World-class: 95%+' },
        { name: 'Backorder Rate', desc: '% of orders that cannot be immediately fulfilled from available stock' },
        { name: 'Order Fill Rate', desc: '% of ordered quantity shipped from available inventory on first attempt' }
      ],
      realExample: {
        company: 'Britannia — OTIF ERP Module',
        story: 'An ERP prototype OTIF tracking module was built for a large FMCG company to improve inbound material planning across all plants. The module automated OTIF computation, supplier scoring, and centralized real-time visibility.',
        outcome: 'Real-time OTIF visibility across all Britannia plants enabling data-driven supplier management and proactive exception handling.'
      },
      tools: ['SAP SD', 'Oracle OMS', 'Salesforce Commerce', 'Unicommerce', 'Vinculum', 'Zoho Inventory'],
      indianContext: 'Flipkart and Amazon India process millions of orders daily using sophisticated OMS integrated with regional fulfillment centers, enabling next-day delivery in tier-1 cities.',
      frameworks: ['SCOR Model (Order Management)', 'Lean Order Processing', 'Demand-Driven Fulfillment', 'Omnichannel OMS Design'],
      difficulty: 'Intermediate', readTime: '9 min'
    },
    {
      id: 10, name: 'Warehousing', icon: '🏗️',
      description: 'Storage and handling of inventory — receiving, storing, picking, and shipping operations.',
      tagline: 'The operational engine that keeps inventory flowing',
      overview: `Modern warehouses are highly optimized operational facilities that perform receiving, quality inspection, putaway, storage, picking, packing, and shipping. They are not just storage locations — they are the execution engine of the supply chain.\n\nIndia has ~350 million sq ft of organized warehousing capacity, growing at 15-20% annually driven by e-commerce growth and GST consolidation.`,
      keyPoints: [
        'WMS (Warehouse Management System): Software controlling all operations — slotting, picking routes, real-time inventory tracking',
        'Slotting Optimization: Fast-moving items near shipping docks, slow-movers in back — reduces picking distance by 30-40%',
        'Picking Methods: Single-order, batch, zone, and wave picking — each optimized for different order profiles',
        'Cross-Docking: Unloading from inbound truck directly to outbound without storage — reduces handling cost significantly',
        'Space Utilization: Vertical storage, mobile racking, automated storage (AS/RS) to maximize cubic warehouse space'
      ],
      metrics: [
        { name: 'Space Utilization %', desc: 'Used storage space as % of total available. Target: 80-85%' },
        { name: 'Lines Picked per Hour', desc: 'Picker productivity. World-class: 150-200+ lines/hr with automation' },
        { name: 'Pick Accuracy %', desc: '% of picks with correct item/quantity. Target: 99.9%+' },
        { name: 'Dock-to-Stock Time', desc: 'Time from inbound truck arrival to inventory available in WMS system' },
        { name: 'Cost per Unit Handled', desc: 'Total warehouse cost divided by units processed — efficiency benchmark' }
      ],
      realExample: {
        company: 'Cold Chain Warehouse — WMS Heatmap',
        story: 'A supply chain analyst designed a Heat Map for the WMS tool enabling real-time tracking of Rack Weight and Species distribution. Using EDA, he identified 55.4% of warehouse space was unutilized.',
        outcome: 'Enhanced warehouse utilization and boosted capacity. Automated KPI tracking cut reporting time by 99.8% (from 2 hours to 15 seconds).'
      },
      tools: ['Manhattan Associates WMS', 'SAP EWM', 'Oracle WMS', 'Increff', 'Delhivery WMS', 'Python/Excel'],
      indianContext: 'Major logistics parks: Bhiwandi (Mumbai), Tauru (Delhi-NCR), Hoskote (Bangalore). Developers: IndoSpace, ESR, Embassy Industrial Parks. Cold warehousing growing fastest at 20%+ due to food & pharma demand.',
      frameworks: ['5S Warehouse Organization', 'Warehouse Network Design', 'ABC Slotting', 'LEAN Warehousing', 'AS/RS Implementation'],
      difficulty: 'Intermediate', readTime: '9 min'
    },
    {
      id: 11, name: 'Distribution', icon: '🗺️',
      description: 'Delivering finished products to retailers or customers — routing, scheduling, and last-mile.',
      tagline: 'The final stretch that determines customer delight or disappointment',
      overview: `Distribution is the movement of finished goods from production or storage to the point of consumption. It encompasses route planning, load optimization, fleet management, and last-mile execution.\n\nLast-mile delivery accounts for 30-40% of total supply chain cost in India — making it the most expensive and strategically important part of the distribution function.`,
      keyPoints: [
        'Hub-and-Spoke: Central hub receives and sorts shipments, sends to regional spokes for local delivery',
        'Direct Store Delivery (DSD): Manufacturer delivers directly to retail outlets, bypassing distributors (HUL, Coca-Cola model)',
        'Milk Run: One truck visits multiple suppliers/customers in a loop — reduces transport cost significantly',
        'Route Optimization: AI-driven algorithms minimize distance, time, and fuel while respecting delivery windows',
        'Last-Mile Innovation: Hyperlocal (Dunzo), drone pilots (Swiggy), EV fleets (Porter, Zepto) in India'
      ],
      metrics: [
        { name: 'On-Time Delivery %', desc: 'Deliveries within agreed time window. E-commerce benchmark: 95%+' },
        { name: 'Vehicle Utilization %', desc: 'Actual load as % of vehicle capacity (weight or volume)' },
        { name: 'Cost per Delivery', desc: 'Total distribution cost divided by number of deliveries made' },
        { name: 'First Attempt Delivery Rate', desc: '% of deliveries successful on first attempt (no re-delivery needed)' },
        { name: 'Km per Delivery', desc: 'Average distance traveled per delivery — route efficiency measure' }
      ],
      realExample: {
        company: 'Licious — Cold Chain Distribution',
        story: 'Licious built India\'s first organized meat distribution network maintaining 0-4°C from processing hub to customer door using dedicated refrigerated fleets, IoT temperature monitoring, and demand forecasting to plan daily distribution routes.',
        outcome: 'Waste under 2%, delivery within 90-120 minutes in major cities, and India\'s first D2C unicorn in the meat category.'
      },
      tools: ['Locus.sh', 'FarEye', 'DispatchTrack', 'Google OR-Tools', 'MapMyIndia', 'Onfleet'],
      indianContext: 'India\'s distribution challenge: 640,000 villages, extreme geography, poor rural roads, and highly seasonal demand. Marico uses rural distribution vans reaching 1 million+ villages through sub-distributors.',
      frameworks: ['Vehicle Routing Problem (VRP)', 'Network Design Optimization', 'Milk Run Design', 'Direct vs Indirect Distribution Analysis'],
      difficulty: 'Intermediate', readTime: '8 min'
    },
    {
      id: 12, name: 'Returns & Reverse Logistics', icon: '🔄',
      description: 'Handling returned products, refunds, and recycling — increasingly important for sustainability.',
      tagline: 'Turning the supply chain backwards — profitably',
      overview: `Reverse Logistics is the movement of goods from final destination back to manufacturer or distributor for returns, repairs, refurbishment, recycling, or disposal.\n\nWith e-commerce return rates of 15-30% in India (fashion: 40%+), reverse logistics has become a major operational challenge. But managed well, it can be a competitive advantage and revenue source.`,
      keyPoints: [
        'Return Reasons: Customer dissatisfaction, defect, wrong item, better price elsewhere, or impulse purchase reversal',
        'Return Authorization (RMA): Formal process controlling which items can be returned, when, and how',
        'Disposition Decisions: Returned goods can be resold as-is, refurbished, donated, recycled, or scrapped',
        'Reverse Logistics Cost: Typically 3-4x more expensive per unit than forward logistics due to low volume complexity',
        'EPR (Extended Producer Responsibility): Indian regulation requiring manufacturers to manage product end-of-life'
      ],
      metrics: [
        { name: 'Return Rate %', desc: 'Returns as % of total sales. Fashion e-commerce: 30-40%; Electronics: 5-10%' },
        { name: 'Return Processing Time', desc: 'Days from return pickup to disposition decision or resale' },
        { name: 'Recovery Value %', desc: 'Value recovered from returned goods as % of original selling price' },
        { name: 'Return Cost per Unit', desc: 'Total cost of processing one return (pickup, inspection, restocking)' },
        { name: 'Refurbishment Rate', desc: '% of returns successfully refurbished and resold vs scrapped' }
      ],
      realExample: {
        company: 'Myntra Returns Network',
        story: 'Myntra processes 1 million+ returns monthly. Their network includes customer pickups, returns processing centers in each metro, quality grading, and reselling through "Myntra Factory Outlet" — recovering value from returned merchandise.',
        outcome: 'Recovery rate of 60-70% on returned fashion merchandise through grading, repackaging, and discounted resale channels.'
      },
      tools: ['Returns Management Software', 'WMS (returns module)', 'Ryder Reverse Logistics', 'EXL Service'],
      indianContext: 'India\'s EPR regulations mandate producers to manage plastic, e-waste, and battery recycling. Startups like Attero (e-waste), Sampurn (plastic), and Banyan Nation are building India\'s reverse logistics infrastructure.',
      frameworks: ['Reverse Logistics Network Design', 'Product Returns Policy Design', 'Circular Economy Model', 'Remanufacturing Process Design'],
      difficulty: 'Intermediate', readTime: '8 min'
    }
  ],
  'Technologies': [
    {
      id: 13, name: 'ERP Systems', icon: '💻',
      description: 'Enterprise Resource Planning systems integrate all business functions into one platform.',
      tagline: 'The digital backbone connecting every part of your business',
      overview: `ERP systems are integrated software platforms managing core business processes across an organization — finance, HR, manufacturing, supply chain, procurement, and sales — in a single unified system.\n\nERP is the "nervous system" of modern supply chains. Without ERP integration, supply chain decisions are made in functional silos. With ERP, every function sees the same real-time data.`,
      keyPoints: [
        'Modules: Finance (FI), Materials Management (MM), Sales & Distribution (SD), Production Planning (PP), Plant Maintenance (PM)',
        'Implementation: ERP projects take 12-36 months and cost crores. Change management is the biggest risk factor',
        'SAP vs Oracle: SAP dominates manufacturing and process industries; Oracle is strong in retail and services',
        'Cloud ERP: SAP S/4HANA Cloud, Oracle Fusion — shifting from on-premise to cloud-based deployment models',
        'ERP + AI: Modern ERPs embed AI for demand forecasting, anomaly detection, and automated procurement'
      ],
      metrics: [
        { name: 'Data Accuracy %', desc: 'Correctness of master data (materials, suppliers, prices) in the ERP system' },
        { name: 'System Uptime %', desc: 'ERP availability — critical for 24/7 operations. Target: 99.9%+' },
        { name: 'Transaction Processing Time', desc: 'Speed of key transactions (PO creation, goods receipt, invoice posting)' },
        { name: 'User Adoption Rate', desc: '% of intended users actively using the system correctly and consistently' },
        { name: 'Report Generation Time', desc: 'Time to generate key business reports from ERP data' }
      ],
      realExample: {
        company: 'Atul Chemicals — Oracle MM',
        story: 'Oracle MM (Materials Management) was used at a specialty chemicals plant to manage spare parts inventory, ensuring availability and control of critical maintenance materials. ABC analysis within Oracle optimized spare parts categorization.',
        outcome: 'Optimized maintenance spares inventory, reduced excess stock levels, and ensured critical parts were always available when needed for machine maintenance.'
      },
      tools: ['SAP S/4HANA', 'Oracle ERP Cloud', 'Microsoft Dynamics 365', 'Tally (India SME)', 'Odoo (mid-market)'],
      indianContext: 'Indian manufacturing giants (Tata, Reliance, Mahindra) run SAP. Mid-sized companies increasingly adopting cloud ERPs. Tally remains dominant among Indian SMEs with 7 million+ users.',
      frameworks: ['ERP Implementation Methodology (ASAP)', 'Business Process Reengineering', 'Master Data Management', 'ERP ROI Assessment'],
      difficulty: 'Advanced', readTime: '10 min'
    },
    {
      id: 14, name: 'IoT & Sensors', icon: '📡',
      description: 'Connected devices tracking products and monitoring conditions enabling real-time visibility.',
      tagline: 'Making the invisible supply chain visible in real time',
      overview: `IoT in supply chains refers to networks of connected sensors, devices, and systems that collect and transmit real-time data about goods, assets, and conditions throughout the supply chain. IoT transforms reactive supply chains into predictive, self-aware systems.\n\nIndia's IoT market in logistics is growing at 25%+ annually, driven by temperature-sensitive pharmaceuticals, cold chain food, and fleet tracking requirements.`,
      keyPoints: [
        'Track & Trace: RFID tags, GPS trackers, and QR codes provide real-time location of goods and assets',
        'Condition Monitoring: Temperature, humidity, shock, and tilt sensors for sensitive cargo (pharma, food, chemicals)',
        'Predictive Maintenance: Vibration, temperature, and acoustic sensors predict machine failures before they occur',
        'Smart Warehousing: IoT-enabled forklifts, conveyor belts, and picking systems optimize warehouse operations',
        'Cold Chain IoT: Continuous temperature logging with auto-alerts for excursions in food/pharma supply chains'
      ],
      metrics: [
        { name: 'Asset Tracking Coverage %', desc: '% of assets/shipments with real-time location visibility' },
        { name: 'Temperature Compliance %', desc: '% of cold chain shipments maintaining required temperature throughout' },
        { name: 'Sensor Data Latency', desc: 'Time delay between event and data appearing in monitoring dashboard' },
        { name: 'Predictive Maintenance Accuracy', desc: '% of predicted failures that actually occurred (model precision)' },
        { name: 'IoT Alert Response Time', desc: 'Average time from alert generation to human response and action' }
      ],
      realExample: {
        company: 'Licious Cold Chain',
        story: 'Licious uses IoT temperature sensors throughout their cold chain — in processing hubs, refrigerated vans, and delivery bags — to ensure continuous 0-4°C maintenance from processing to the customer\'s door. Any excursion triggers an immediate alert.',
        outcome: 'Less than 2% product waste rate — one of the best in the industry — achieved through IoT-enabled cold chain integrity monitoring.'
      },
      tools: ['AWS IoT', 'Azure IoT Hub', 'Trimble (fleet)', 'Roambee (shipment)', 'StockView (cold chain)'],
      indianContext: 'FASTag (highway tolling) has created a national vehicle tracking infrastructure. India\'s pharmaceutical cold chain is driving IoT adoption mandated by WHO Good Distribution Practices.',
      frameworks: ['IoT Reference Architecture', 'Digital Twin Development', 'Condition-Based Maintenance', 'IIOT Implementation Roadmap'],
      difficulty: 'Advanced', readTime: '9 min'
    },
    {
      id: 15, name: 'AI & Machine Learning', icon: '🤖',
      description: 'Predictive analytics for demand forecasting, route optimization, quality control, and anomaly detection.',
      tagline: 'Teaching supply chains to think, predict, and optimize themselves',
      overview: `AI and ML are transforming every function of the supply chain — from demand forecasting and procurement to quality control and logistics optimization. AI enables supply chains to move from reactive to predictive to autonomous operations.\n\nThe global AI in supply chain market is projected to reach $45 billion by 2030. India's AI adoption in supply chain is accelerating, led by e-commerce giants and FMCG companies.`,
      keyPoints: [
        'Demand Forecasting: ML models (ARIMA, LSTM, XGBoost) achieve 10-30% better accuracy than traditional statistical methods',
        'Supply Chain Visibility: AI processes data from ERP, IoT, and external signals to detect disruptions early',
        'Route Optimization: Reinforcement learning continuously improves delivery routing beyond classical algorithms',
        'Quality Control: Computer vision AI detects production defects faster and more accurately than human inspection',
        'Warehouse Robotics: AI-powered AMRs navigate warehouses autonomously for picking and sorting operations'
      ],
      metrics: [
        { name: 'Forecast Accuracy Improvement', desc: 'MAPE improvement vs baseline statistical forecast (typically 15-25%)' },
        { name: 'False Positive Rate', desc: 'AI alerts that turned out to be non-issues — lower is always better' },
        { name: 'Automation Rate %', desc: '% of supply chain decisions made autonomously without human intervention' },
        { name: 'Model Drift Rate', desc: 'How quickly AI model accuracy degrades — determines retraining frequency' },
        { name: 'Cost per Prediction', desc: 'Infrastructure and operational cost of running AI models at scale' }
      ],
      realExample: {
        company: 'Amazon — Anticipatory Shipping',
        story: 'Amazon\'s AI predicts what customers will order before they order it — pre-positioning inventory in regional fulfillment centers. During COVID, Amazon\'s AI predicted mask demand 3 weeks before mainstream awareness.',
        outcome: 'Amazon achieves 85% inventory positioning accuracy, enabling 1-2 day delivery across India while minimizing working capital requirements.'
      },
      tools: ['Python (scikit-learn, TensorFlow, PyTorch)', 'AWS SageMaker', 'Azure ML', 'DataRobot', 'IBM Watson Supply Chain'],
      indianContext: 'Flipkart uses ML for demand forecasting across 150 million+ products. Mahindra Logistics uses AI for route optimization. ITC uses ML for agri-commodity price forecasting.',
      frameworks: ['CRISP-DM (ML Methodology)', 'MLOps Framework', 'Responsible AI Principles', 'Supply Chain AI Maturity Model'],
      difficulty: 'Advanced', readTime: '12 min'
    },
    {
      id: 16, name: 'Blockchain', icon: '⛓️',
      description: 'Distributed ledger technology for transparency, traceability, and immutable record-keeping.',
      tagline: 'Building unbreakable trust across supply chain partners',
      overview: `Blockchain is a distributed, immutable ledger recording transactions across a network of computers in a way that cannot be altered retroactively. In supply chains, it provides an unforgeable record of every transaction, movement, and transformation a product undergoes.\n\nPractical applications in food safety traceability, pharmaceutical serialization, and trade finance are delivering real business value today.`,
      keyPoints: [
        'Immutability: Once recorded, supply chain events cannot be altered — preventing fraud and disputes permanently',
        'Transparency: All authorized parties can see the same transaction history in real-time',
        'Smart Contracts: Automated execution of supply chain agreements (payment on delivery, penalty on OTIF miss)',
        'Pharmaceutical: Drug serialization and track-trace mandated by CDSCO in India — blockchain is the key enabler',
        'Consortiums: Multiple competitors collaborating on shared blockchain networks (IBM Food Trust, TradeLens)'
      ],
      metrics: [
        { name: 'Traceability Coverage %', desc: '% of products trackable end-to-end on the blockchain network' },
        { name: 'Time to Trace', desc: 'Time to trace a product recall from store back to farm/supplier' },
        { name: 'Smart Contract Execution %', desc: '% of eligible transactions handled by smart contracts automatically' },
        { name: 'Transaction Throughput', desc: 'Transactions per second the blockchain network can process' },
        { name: 'Partner Onboarding Time', desc: 'Time to bring a new supply chain partner onto the blockchain network' }
      ],
      realExample: {
        company: 'Walmart — IBM Food Trust',
        story: 'Walmart used IBM Food Trust blockchain to trace leafy greens back to farm source. Before blockchain: 7 days to trace. After blockchain: 2.2 seconds. Now mandatory for all leafy green suppliers to Walmart.',
        outcome: 'During a food safety recall, Walmart can now identify affected products in seconds, preventing unnecessary waste and protecting consumer safety.'
      },
      tools: ['Hyperledger Fabric', 'Ethereum', 'IBM Food Trust', 'SAP Blockchain', 'VeChain', 'OriginTrail'],
      indianContext: 'India\'s Ministry of Food Processing has piloted blockchain for food traceability. ITC is piloting farmer-to-fork traceability on blockchain for its Aashirvaad atta brand.',
      frameworks: ['Blockchain Use Case Evaluation', 'Consortium Governance Design', 'Smart Contract Development Lifecycle', 'Digital Twin Architecture'],
      difficulty: 'Advanced', readTime: '10 min'
    },
    {
      id: 17, name: 'WMS & TMS', icon: '🛣️',
      description: 'Warehouse and Transportation Management Systems optimizing operations and logistics routing.',
      tagline: 'The operating systems of modern warehouses and fleets',
      overview: `WMS and TMS are the two core technology pillars of physical supply chain execution. WMS optimizes what happens inside the four walls of a warehouse; TMS optimizes what happens between them.\n\nTogether, WMS and TMS provide end-to-end visibility and optimization from when goods arrive at a warehouse to when they are delivered to the final customer.`,
      keyPoints: [
        'WMS Core Functions: Receiving, putaway, inventory management, picking, packing, shipping, and cycle counting',
        'TMS Core Functions: Carrier selection, rate shopping, load planning, route optimization, track-and-trace, freight audit',
        'WMS Integration: Must connect to ERP (inventory), TMS (shipping), OMS (orders), and supplier systems via APIs',
        'Slotting in WMS: Dynamic product placement based on velocity, weight, size, and pick compatibility',
        'Control Tower: Advanced TMS provides end-to-end shipment visibility across all carriers and transport modes'
      ],
      metrics: [
        { name: 'Pick Rate (units/hour)', desc: 'Picker productivity — WMS optimization can improve by 20-30%' },
        { name: 'Inventory Accuracy %', desc: 'WMS records vs physical count. World-class target: 99.9%+' },
        { name: 'Freight Cost per Unit', desc: 'TMS optimization typically reduces freight cost by 5-15%' },
        { name: 'Carrier On-Time %', desc: 'TMS-tracked delivery performance by carrier across all lanes' },
        { name: 'Dock Scheduling Efficiency', desc: 'Dock utilization % and average truck wait time at facility' }
      ],
      realExample: {
        company: 'Cold Chain Warehouse — WMS Heat Map',
        story: 'A supply chain analyst designed a Heat Map tool integrated with the WMS to enable real-time tracking of rack weight and product distribution across a cold warehouse, eliminating a manual 2-hour reporting process.',
        outcome: 'Report generation time reduced by 99.8% (2 hours → 15 seconds). 55.4% unutilized warehouse space identified and reclaimed for additional inventory.'
      },
      tools: ['Manhattan Associates WMS', 'Blue Yonder WMS/TMS', 'Oracle WMS', 'SAP EWM', 'Locus TMS', 'Flexport'],
      indianContext: 'India\'s WMS market is growing at 18% annually. Key drivers: e-commerce growth, GST-driven warehouse consolidation, and pharma GDP (Good Distribution Practices) compliance requirements.',
      frameworks: ['WMS Implementation Roadmap', 'TMS Carrier Strategy', 'Warehouse Slotting Methodology', 'Freight Audit & Payment Process'],
      difficulty: 'Intermediate', readTime: '9 min'
    }
  ],
  'Challenges': [
    {
      id: 18, name: 'Supply Disruptions', icon: '⚠️',
      description: 'Unexpected events interrupting supply flow — natural disasters, supplier failures, geopolitics.',
      tagline: 'Building resilience when the unexpected becomes reality',
      overview: `Supply disruptions are unplanned interruptions to the normal flow of materials, components, or finished goods. They range from minor delays to catastrophic collapses of entire supply networks.\n\nCOVID-19 exposed the fragility of globally optimized but risk-unmanaged supply chains, causing ₹14 lakh crore in losses globally and accelerating reshoring and supply chain resilience investment.`,
      keyPoints: [
        'Disruption Types: Natural (floods, earthquakes), Supplier (failure, fire), Geopolitical (sanctions, tariffs), Demand (spikes), Cyber',
        'Supply Chain Resilience: Ability to anticipate, adapt, and recover. Measured by Time-to-Survive and Time-to-Recover',
        'Risk Mitigation: Dual sourcing, safety stock, geographic diversification, supply chain mapping, and scenario planning',
        'Business Continuity Plan (BCP): Pre-defined response protocols for specific disruption scenarios',
        'China+1 Strategy: Companies building alternate supplier bases (India, Vietnam, Mexico) to reduce concentration risk'
      ],
      metrics: [
        { name: 'Time-to-Detect (TTD)', desc: 'How quickly a disruption is identified after it occurs in the supply chain' },
        { name: 'Time-to-Recover (TTR)', desc: 'How long to restore normal supply chain operations after a disruption' },
        { name: 'Supply Risk Score', desc: 'Composite risk rating of supplier base by probability × impact matrix' },
        { name: 'Single-Source Dependency %', desc: '% of critical inputs with only one approved supplier — key vulnerability' },
        { name: 'Safety Stock Coverage (days)', desc: 'Days of supply protected against demand/supply disruptions' }
      ],
      realExample: {
        company: 'India Semiconductor Crisis (2021-23)',
        story: 'The global chip shortage hit India\'s auto sector hard — Maruti Suzuki lost production of 300,000+ vehicles in FY22. Companies with diversified chip supplier networks were far less impacted than those single-sourced from Taiwan fabs.',
        outcome: 'Indian auto companies now build strategic chip inventory buffers (from days to months) and qualify alternate suppliers — a permanent structural shift driven by the disruption experience.'
      },
      tools: ['Riskmethods', 'Resilinc', 'Everstream Analytics', 'SAP Supply Chain Control Tower', 'Tableau (risk dashboards)'],
      indianContext: 'India faces unique disruption risks: monsoon flooding of manufacturing corridors, JNPT port congestion, and political disruptions on key trade routes. Russia-Ukraine war disrupted Indian sunflower oil and fertilizer supply chains.',
      frameworks: ['Business Impact Analysis (BIA)', 'Supply Chain Risk Management (SCRM)', 'FMEA (Failure Mode Effects Analysis)', 'Resilience Engineering'],
      difficulty: 'Advanced', readTime: '10 min'
    },
    {
      id: 19, name: 'Demand Volatility', icon: '📈',
      description: 'Unpredictable demand changes due to market trends, seasonality, or economic conditions.',
      tagline: 'Mastering uncertainty when customers change their minds',
      overview: `Demand volatility refers to unpredictable fluctuations in customer demand that make supply chain planning challenging. Unlike stable demand, volatile demand requires sophisticated forecasting, flexible supply chains, and dynamic inventory strategies.\n\nThe Bullwhip Effect amplifies demand volatility — a 10% consumer demand swing can become a 40%+ swing at the manufacturer level.`,
      keyPoints: [
        'Bullwhip Effect: Small consumer demand changes amplify exponentially at each upstream supply chain stage',
        'Demand Sensing: Using real-time POS, social media, and market data for short-term (7-14 day) demand signals',
        'Flexible Manufacturing: Agile production systems that can scale up/down quickly in response to demand changes',
        'Dynamic Safety Stock: Adjusting safety stock levels based on current demand variability, not just historical averages',
        'Postponement: Delaying product differentiation as late as possible to maintain supply chain flexibility (Benetton model)'
      ],
      metrics: [
        { name: 'Coefficient of Variation (CV)', desc: 'Standard deviation / Mean demand. CV > 0.5 = high volatility requiring special planning' },
        { name: 'Forecast Error (MAPE)', desc: 'Higher MAPE in volatile products requires larger safety stock buffers to maintain service' },
        { name: 'Lost Sales Rate', desc: '% of demand lost due to stockouts during unexpected demand spikes' },
        { name: 'Inventory Write-Off Rate', desc: '% of inventory written off due to over-forecasting during demand drops' },
        { name: 'Demand Signal Latency', desc: 'Delay between actual demand change and system recognition of the change' }
      ],
      realExample: {
        company: 'COVID PPE Demand Spike',
        story: 'When COVID hit India in March 2020, demand for masks and sanitizers spiked 10,000%+ overnight. ITC, with flexible supply chains, pivoted tissue manufacturing to masks. Companies with rigid supply chains missed the opportunity entirely.',
        outcome: 'ITC\'s flexible manufacturing capability allowed them to enter the PPE market within weeks, capturing significant revenue while building brand goodwill and demonstrating supply chain agility.'
      },
      tools: ['Kinaxis RapidResponse', 'Blue Yonder Demand Planning', 'O9 Solutions', 'Python (Prophet, LSTM)', 'SAP IBP'],
      indianContext: 'India\'s demand is uniquely volatile due to: major festivals (Diwali causes 3-5x demand spikes in retail), cricket World Cup effect on electronics, monsoon-driven agricultural seasonality, and rapidly shifting consumer trends.',
      frameworks: ['S&OP with Scenario Planning', 'Demand-Driven MRP (DDMRP)', 'Responsive Supply Chain Design', 'Newsvendor Problem Framework'],
      difficulty: 'Advanced', readTime: '10 min'
    },
    {
      id: 20, name: 'Cost Management', icon: '💰',
      description: 'Managing rising transportation, labor, material, and energy costs affecting supply chain profitability.',
      tagline: 'Finding efficiency without sacrificing service',
      overview: `Supply chain cost management is the systematic identification, measurement, and optimization of all costs across the supply chain — from procurement through delivery. Supply chain costs represent 60-80% of COGS in most companies, making cost management a critical profit lever.\n\nWith rising fuel prices, increasing labor costs, and growing supply chain complexity, cost management has become a C-suite priority.`,
      keyPoints: [
        'Total Cost of Ownership (TCO): Don\'t just optimize unit price — consider quality, lead time, risk, and handling costs together',
        'Network Design: Optimal number, location, and size of warehouses. Poor design adds 5-15% to supply chain costs',
        'Mode Optimization: Shifting from air to sea, road to rail when lead times allow. Can reduce freight cost by 60-80%',
        'Process Automation: VBA, RPA, and AI automation reducing manual labor costs in planning and execution processes',
        'Supplier Consolidation: Reducing supplier count enables better pricing, lower transaction costs, and stronger relationships'
      ],
      metrics: [
        { name: 'Supply Chain Cost as % Revenue', desc: 'Total supply chain cost / revenue. Best-in-class FMCG: 8-12%' },
        { name: 'Logistics Cost per Unit', desc: 'Total logistics spend divided by units shipped across all channels' },
        { name: 'Procurement Savings %', desc: 'Cost reduction achieved vs prior year spend or market benchmark pricing' },
        { name: 'Inventory Carrying Cost %', desc: 'Annual cost of holding inventory (typically 20-30% of inventory value)' },
        { name: 'Cost per Order', desc: 'Total supply chain cost divided by number of customer orders processed' }
      ],
      realExample: {
        company: 'Atul Chemicals — ₹97L Savings',
        story: 'Through establishing a Predictive Maintenance department using MTBF & MTTR analysis, The team delivered ₹97 Lakh cost savings in 8 months at Atul Chemicals by reducing unplanned machine breakdowns by 33% and eliminating emergency repair costs.',
        outcome: 'Recognized as "Best Performer of the Quarter" by GM. The cost savings justified a full predictive maintenance program rollout across the entire plant.'
      },
      tools: ['SAP Cost Management', 'Anaplan', 'Power BI (cost dashboards)', 'Python (cost optimization)', 'Excel/VBA (automation)'],
      indianContext: 'Indian supply chain cost challenge: high logistics cost (7.97% GDP), fragmented supplier base, cash-driven small retailers, and GST compliance adding administrative overhead. But digital infrastructure (UPI, GST, ULIP) is progressively reducing frictions.',
      frameworks: ['Activity-Based Costing (ABC)', 'Zero-Based Budgeting', 'Supply Chain Benchmarking', 'Network Optimization Modeling'],
      difficulty: 'Intermediate', readTime: '9 min'
    },
    {
      id: 21, name: 'Sustainability & Compliance', icon: '🌱',
      description: 'Meeting environmental regulations, reducing carbon footprint, and ensuring ethical sourcing.',
      tagline: 'Building supply chains that are good for business and the planet',
      overview: `Supply chain sustainability involves operating in ways that protect the environment, respect human rights, and create long-term economic value. ESG requirements from investors, customers, and regulators are making sustainability a strategic necessity.\n\nSEBI now mandates BRSR (Business Responsibility & Sustainability Reporting) for India's top 1000 listed companies.`,
      keyPoints: [
        'Scope 3 Emissions: 70%+ of a company\'s carbon footprint comes from supply chain — must measure and reduce',
        'EPR (Extended Producer Responsibility): Indian regulation requiring producers to manage product end-of-life',
        'Ethical Sourcing: No child labor, fair wages, safe conditions in supply chain — audited via SA8000, SMETA standards',
        'Green Logistics: EV fleets, optimized routing (less fuel), multimodal shift (rail/sea), packaging reduction',
        'Circular Economy: Design for reuse — take-back programs, remanufacturing, and material recovery over disposal'
      ],
      metrics: [
        { name: 'Carbon per Unit Shipped (kg CO₂)', desc: 'Supply chain carbon intensity — key ESG reporting metric' },
        { name: 'Renewable Energy % in Ops', desc: '% of warehouse/plant energy from renewable sources' },
        { name: 'Plastic Packaging Reduction %', desc: 'Year-on-year reduction in virgin plastic use in packaging' },
        { name: 'Supplier Sustainability Score', desc: 'ESG rating of supplier base based on audits and self-assessments' },
        { name: 'Waste Diversion Rate %', desc: '% of operational waste diverted from landfill through recycling/reuse' }
      ],
      realExample: {
        company: 'Maersk — Carbon Neutral Shipping',
        story: 'Maersk committed to carbon-neutral shipping by 2040 and launched the world\'s first methanol-powered container ship in 2023. They offer customers carbon-neutral shipping options at a premium price.',
        outcome: 'Major shippers (IKEA, Patagonia, Amazon) pay the green premium to meet their own Scope 3 emission targets — creating a new sustainability-driven market segment.'
      },
      tools: ['EcoVadis (supplier ESG)', 'Carbonfact', 'Watershed', 'Sourcemap (supply chain mapping)', 'SAP Sustainability'],
      indianContext: 'India\'s plastic EPR rules (2022) and e-waste rules mandate producers to collect and recycle products. SEBI BRSR reporting creates supply chain transparency requirements. Green warehousing (IGBC certified) growing at 30%+ annually.',
      frameworks: ['Science-Based Targets (SBTi)', 'Circular Economy Framework', 'GRI Sustainability Reporting', 'UN SDGs Supply Chain Mapping'],
      difficulty: 'Intermediate', readTime: '9 min'
    }
  ],
  'Best Practices': [
    {
      id: 22, name: 'Just-In-Time (JIT)', icon: '⏱️',
      description: 'Receiving materials exactly when needed. Minimizes inventory holding costs and waste.',
      tagline: 'The art of perfect timing in supply chain execution',
      overview: `Just-In-Time (JIT) is a production and inventory strategy pioneered by Toyota in the 1970s that aims to produce and deliver goods exactly when needed — no sooner, no later. The goal is to eliminate all forms of waste (muda), particularly inventory waste.\n\nJIT is the foundation of the Toyota Production System (TPS), which became Lean Manufacturing when adopted globally.`,
      keyPoints: [
        'Origin: Developed by Taiichi Ohno at Toyota post-WWII to compete without capital for large inventory investments',
        'Pull vs Push: JIT is a pull system — production is triggered by actual demand, not a forecast-driven push',
        'Kanban: Visual signal system (card, bin, light) triggering replenishment only when stock is consumed',
        'Takt Time: Pace of production = Available production time / Customer demand rate — JIT aligns to this',
        'Risk: JIT reduces resilience — COVID exposed JIT\'s vulnerability when supplier networks broke down globally'
      ],
      metrics: [
        { name: 'Inventory Turnover', desc: 'JIT success measured by high inventory turns. Toyota achieves 100+ turns/year' },
        { name: 'Days Inventory Outstanding', desc: 'Target: <3 days for JIT, vs 30-60 days for traditional manufacturing' },
        { name: 'Supplier Delivery Reliability', desc: '% of supplier deliveries meeting exact time window. Must be 99%+ for JIT' },
        { name: 'WIP (Work-In-Progress) Inventory', desc: 'JIT minimizes WIP between production stages — lower = better flow' },
        { name: 'Production Lead Time', desc: 'Time from customer order to finished goods. JIT dramatically reduces this' }
      ],
      realExample: {
        company: 'Maruti Suzuki — India JIT',
        story: 'Maruti Suzuki\'s Manesar and Gurgaon plants use JIT with 300+ suppliers delivering parts multiple times per day in specific delivery windows. Supplier parks adjacent to the plant allow sub-4-hour replenishment cycles.',
        outcome: 'Maruti maintains <4 hours of component inventory in plants, freeing massive working capital and enabling 40+ vehicle model variants from the same production line.'
      },
      tools: ['Kanban Systems (physical or digital)', 'SAP MRP (JIT variant)', 'Toyota Production System tools', 'Value Stream Mapping software'],
      indianContext: 'Indian auto sector (Maruti, Hyundai, Tata Motors) has adopted JIT extensively. Less common in FMCG and pharma where demand volatility and longer supply chains require safety stock buffers.',
      frameworks: ['Toyota Production System (TPS)', 'Kanban Method', 'Heijunka (Production Leveling)', 'SMED (Quick Changeover)', 'Andon System'],
      difficulty: 'Intermediate', readTime: '10 min'
    },
    {
      id: 23, name: 'Lean Manufacturing', icon: '🎯',
      description: 'Systematic elimination of waste to improve efficiency and deliver maximum value.',
      tagline: 'Doing more with less — the philosophy that transformed manufacturing',
      overview: `Lean Manufacturing is a systematic methodology derived from the Toyota Production System that focuses on minimizing waste (muda) while maximizing productivity. It defines value from the customer's perspective and eliminates everything that doesn't add customer value.\n\nLean has expanded beyond manufacturing into services, healthcare, software (Agile), and government operations globally.`,
      keyPoints: [
        '7 Wastes (TIMWOOD): Transport, Inventory, Motion, Waiting, Overprocessing, Overproduction, Defects — all must be eliminated',
        'Value Stream Mapping (VSM): Visual tool mapping all process steps, identifying waste and designing the future state',
        '5S: Sort (seiri), Set in Order (seiton), Shine (seiso), Standardize (seiketsu), Sustain (shitsuke) — lean foundation',
        'Kaizen: Philosophy of continuous improvement through small, incremental changes by all employees at all levels',
        'Poka-Yoke: Error-proofing devices and processes that prevent defects from occurring or reaching the next stage'
      ],
      metrics: [
        { name: 'OEE (Overall Equipment Effectiveness)', desc: 'Availability × Performance × Quality. Lean target: 85%+' },
        { name: 'Cycle Time', desc: 'Time to complete one unit. Lean focuses on continuous cycle time reduction' },
        { name: 'Defect Rate (PPM)', desc: 'Defects per million — Six Sigma target: 3.4 PPM for critical processes' },
        { name: 'Value-Added Time Ratio', desc: 'Value-added time / Total lead time. Often only 5-10% — lean improves this' },
        { name: 'Floor Space Utilization', desc: 'Lean workplaces typically use 30-50% less floor space through 5S discipline' }
      ],
      realExample: {
        company: 'Garment Export Company',
        story: 'A garment export operation applied lean principles — automating production planning via VBA (95% time reduction), monitoring KPIs like MMR and efficiency, and coordinating across procurement, production, IE, and cross-functional teams.',
        outcome: 'End-to-end P&L of ₹350 Crore managed with ~25% EBITDA through operational discipline, waste elimination, and data-driven decision making.'
      },
      tools: ['Value Stream Mapping tools', 'Minitab (Six Sigma)', 'A3 Problem Solving templates', 'Gemba Walk checklists'],
      indianContext: 'CII-McKinsey surveys show Indian manufacturers implementing Lean achieve 15-25% productivity improvement. Leading sectors: Automotive (Maruti, TVS, Bajaj), Pharma (Sun Pharma, Cipla), and FMCG (HUL, ITC).',
      frameworks: ['Toyota Production System', 'DMAIC (Six Sigma)', 'A3 Problem Solving', 'Hoshin Kanri (Strategy Deployment)', 'PDCA Cycle'],
      difficulty: 'Intermediate', readTime: '10 min'
    },
    {
      id: 24, name: 'Collaborative Planning', icon: '🤝',
      description: 'Regular data sharing between suppliers, manufacturers, and customers to align forecasts and plans.',
      tagline: 'When supply chain partners share data, everyone wins',
      overview: `CPFR (Collaborative Planning, Forecasting, and Replenishment) combines intelligence of multiple trading partners in planning and fulfilling customer demand. It breaks down information silos that cause the Bullwhip Effect.\n\nIn practice, CPFR means sharing point-of-sale data upstream to suppliers, sharing capacity constraints downstream to customers, and jointly developing forecasts all parties commit to.`,
      keyPoints: [
        'CPFR Process: Collaboration Agreement → Joint Business Plan → Sales Forecasting → Order Forecasting → Order Generation',
        'VMI (Vendor Managed Inventory): Supplier monitors customer inventory and replenishes without customer-initiated PO',
        'Demand Signal Sharing: Retailers share POS data with suppliers in real-time for better upstream planning',
        'Joint S&OP: Extended S&OP includes key customers and suppliers in the cross-functional planning process',
        'Trust Requirement: Collaboration requires trust and willingness to share commercially sensitive business data'
      ],
      metrics: [
        { name: 'Joint vs Solo Forecast Accuracy', desc: 'MAPE improvement from collaborative vs unilateral forecasting' },
        { name: 'Inventory Reduction %', desc: 'Stock reduction across the supply chain from better information sharing' },
        { name: 'Fill Rate Improvement', desc: 'Service level improvement from better supply-demand alignment across partners' },
        { name: 'Collaboration Partner Coverage', desc: '% of supply chain spend with formal collaboration agreements in place' },
        { name: 'Exception Resolution Time', desc: 'Speed of resolving forecast exceptions through the collaborative process' }
      ],
      realExample: {
        company: 'Walmart & P&G — CPFR Pioneer',
        story: 'Walmart and Procter & Gamble pioneered CPFR in the 1980s — P&G representatives sat inside Walmart HQ managing P&G product inventory. P&G had direct access to Walmart\'s sales data and managed replenishment without Walmart issuing purchase orders.',
        outcome: 'Stock levels reduced by 70%, out-of-stocks nearly eliminated, and P&G became Walmart\'s largest supplier through the collaborative competitive advantage.'
      },
      tools: ['SAP Ariba (collaboration)', 'EDI (GS1)', 'Supplier Portals', 'Kinaxis (scenario planning)', 'Microsoft Teams (process)'],
      indianContext: 'Indian FMCG leaders (HUL, Nestle) are implementing distributor management systems sharing secondary sales data with supply planning. Organized retail (DMart, Reliance Retail) enabling supplier data sharing through digital platforms.',
      frameworks: ['CPFR Standard (GS1/VICS)', 'VMI Design Framework', 'S&OP Extension to Customers/Suppliers', 'Open Innovation Supply Chain'],
      difficulty: 'Intermediate', readTime: '8 min'
    },
    {
      id: 25, name: 'Risk Management', icon: '🛡️',
      description: 'Identifying, assessing, and mitigating supply chain risks through diversification and contingency planning.',
      tagline: 'Preparing for the unknown before it becomes a crisis',
      overview: `Supply Chain Risk Management (SCRM) is the systematic process of identifying, assessing, and mitigating risks that could disrupt supply chain operations. Post-COVID, SCRM has evolved from a compliance function to a strategic board-level priority.\n\nEffective SCRM balances resilience investment (which costs money) against risk exposure (which costs more when things go wrong).`,
      keyPoints: [
        'Risk Categories: Supply (supplier failure), Demand (volatility), Operational (process failure, IT outage), External (natural disaster)',
        'Risk Assessment: Probability × Impact matrix — prioritize High-Probability/High-Impact risks for immediate mitigation',
        'Mitigation Strategies: Avoidance, reduction, transfer (insurance), acceptance — choose based on cost vs risk exposure',
        'Supply Chain Mapping: Visualizing Tier 1, 2, 3 suppliers to identify hidden concentrations and single points of failure',
        'Scenario Planning: War-gaming specific disruption scenarios with response playbooks before they occur'
      ],
      metrics: [
        { name: 'Risk Exposure Score', desc: 'Composite risk score across all identified supply chain risks' },
        { name: 'Single-Source Concentration %', desc: '% of critical inputs from single suppliers — key vulnerability indicator' },
        { name: 'Geographic Concentration Risk', desc: '% of supply from single country/region — geopolitical exposure measure' },
        { name: 'Time-to-Recover (TTR)', desc: 'Expected recovery time for key disruption scenarios in the supply chain' },
        { name: 'Risk Mitigation Coverage %', desc: '% of High-identified risks with active mitigation plans currently in place' }
      ],
      realExample: {
        company: 'Britannia — Supplier Risk Framework',
        story: 'A supply chain risk project at a large FMCG company applied a Risk Assessment Framework to classify 450+ suppliers into 3 risk tiers using AHP and analytics. A Dynamic Supplier Risk Dashboard was built to visualize risk tiers and prioritize mitigation actions.',
        outcome: 'Automated validation of 450+ supplier risk responses via VBA, cutting review time by 80% and improving strategic risk management across Britannia\'s entire supply base.'
      },
      tools: ['Riskmethods', 'Resilinc', 'EcoVadis', 'Power BI (risk dashboards)', 'Python (risk modeling)', 'Excel (risk registers)'],
      indianContext: 'Indian companies face unique risks: monsoon supply disruptions, JNPT port congestion, political disruptions on key corridors, and MSME supplier financial fragility. SEBI risk management framework requires listed companies to disclose material supply chain risks.',
      frameworks: ['ISO 31000 (Risk Management)', 'FMEA (Failure Mode Effects Analysis)', 'Business Impact Analysis', 'Bow-Tie Risk Analysis', 'COSO ERM'],
      difficulty: 'Intermediate', readTime: '9 min'
    }
  ]
};
