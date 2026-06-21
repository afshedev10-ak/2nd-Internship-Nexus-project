const startup = {
  founder: {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    company: 'TechWave AI',
    avatar: 'SJ',
    location: 'San Francisco, CA',
    bio: 'Serial entrepreneur with 10+ years building at the intersection of AI and enterprise software. Previously led product at Salesforce and founded two SaaS companies. Obsessed with making intelligent automation accessible to every mid-market business.',
    linkedIn: '#',
    twitter: '#',
  },
  about: {
    stage: 'Seed',
    founded: '2022',
    employees: '18',
    industry: 'AI / SaaS',
  },
  overview: {
    problem: "Mid-market companies spend 40% of operational hours on repetitive data workflows that enterprise tools are too expensive to solve and spreadsheets can't scale.",
    solution: 'TechWave AI is a no-code automation layer that connects existing business tools, learns from usage patterns, and surfaces workflow optimisations in plain English.',
    market: '$42B TAM in SMB process automation, growing at 23% CAGR. Our ICP is 500–5,000 employee companies in financial services, logistics, and healthcare.',
    advantage: 'Proprietary fine-tuned model trained on 200M+ anonymised enterprise workflows gives us 3× better suggestion accuracy than general-purpose LLM competitors.',
  },
  team: [
    { name: 'Sarah Johnson', role: 'Founder & CEO', avatar: 'SJ', bg: 'bg-blue-100', text: 'text-[#3B5BDB]', note: 'Ex-Salesforce PM · Stanford MBA' },
    { name: 'David Park', role: 'CTO', avatar: 'DP', bg: 'bg-violet-100', text: 'text-violet-700', note: 'Ex-Google Brain · MIT CS PhD' },
    { name: 'Aisha Reyes', role: 'Head of Product', avatar: 'AR', bg: 'bg-emerald-100', text: 'text-emerald-700', note: 'Ex-Notion · 0→1 specialist' },
    { name: 'Open Role', role: 'Head of Sales', avatar: '+', bg: 'bg-slate-100', text: 'text-slate-400', note: 'We\'re hiring →' },
  ],
  funding: {
    currentRound: 'Seed',
    raising: '$4M',
    valuation: '$18M pre-money',
    committed: '$2.1M',
    lead: 'Horizon Ventures',
    previous: [
      { round: 'Pre-seed', amount: '$650K', date: 'Mar 2022', investors: 'Angel syndicate' },
    ],
    timeline: [
      { label: 'Pre-seed', amount: '$650K', date: '2022', done: true },
      { label: 'Seed', amount: '$4M', date: '2024', done: false, active: true },
      { label: 'Series A', amount: '~$15M', date: '2026', done: false },
    ],
  },
  documents: [
    { name: 'Pitch Deck', desc: 'Full investor presentation · 22 slides', icon: 'deck', size: '3.4 MB' },
    { name: 'Business Plan', desc: 'Executive summary + 3-year roadmap', icon: 'plan', size: '1.1 MB' },
    { name: 'Financial Projections', desc: 'P&L, cash flow, unit economics · FY24–27', icon: 'finance', size: '890 KB' },
  ],
};

function DocIcon({ type }) {
  const base = 'w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0';
  if (type === 'deck')    return <div className={`${base} bg-blue-50`}><svg className="w-4 h-4 text-[#3B5BDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg></div>;
  if (type === 'plan')    return <div className={`${base} bg-emerald-50`}><svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>;
  return <div className={`${base} bg-amber-50`}><svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>;
}

function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h2 className="text-base font-semibold text-slate-800 mb-4 pb-3 border-b border-slate-100">{title}</h2>
      {children}
    </div>
  );
}

function Tag({ label }) {
  return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-[#3B5BDB]">{label}</span>;
}

export default function ProfilePage() {
  const { founder, overview, team, funding, documents } = startup;

  return (
    <div className="flex-1 overflow-y-auto bg-[#F8FAFC] p-3 sm:p-5 lg:p-6">
      <div className="max-w-5xl mx-auto space-y-5">

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="h-20 sm:h-28 bg-gradient-to-r from-[#3B5BDB] to-[#6475e8]" />
          <div className="px-5 pb-5">
            <div className="-mt-8 sm:-mt-10 mb-3 flex items-end justify-between">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-4 border-white shadow-md flex items-center justify-center text-xl sm:text-2xl font-bold text-[#3B5BDB]">
                {founder.avatar}
              </div>
              <button className="mb-1 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
                Edit Profile
              </button>
            </div>
            <div className="flex flex-wrap items-start gap-x-4 gap-y-1">
              <div>
                <h1 className="text-xl font-semibold text-slate-900">{founder.name}</h1>
                <p className="text-sm text-slate-500">{founder.role} · <span className="font-medium text-[#3B5BDB]">{founder.company}</span></p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <Tag label={startup.about.stage} />
              <Tag label={startup.about.industry} />
              <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {founder.location}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Founded {startup.about.founded}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {startup.about.employees} employees
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div className="lg:col-span-2 space-y-5">

            <SectionCard title="About">
              <p className="text-sm text-slate-600 leading-relaxed">{founder.bio}</p>
            </SectionCard>

            <SectionCard title="Startup Overview">
              <div className="space-y-4">
                {[
                  { label: 'Problem', value: overview.problem, color: 'bg-red-50 text-red-600' },
                  { label: 'Solution', value: overview.solution, color: 'bg-green-50 text-green-700' },
                  { label: 'Market Opportunity', value: overview.market, color: 'bg-blue-50 text-[#3B5BDB]' },
                  { label: 'Competitive Advantage', value: overview.advantage, color: 'bg-violet-50 text-violet-700' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="flex gap-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide flex-shrink-0 h-fit mt-0.5 ${color}`}>
                      {label}
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Team */}
            <SectionCard title="Team">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${member.name === 'Open Role' ? 'border-dashed border-slate-200 bg-slate-50' : 'border-slate-100 bg-slate-50'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 ${member.bg} ${member.text}`}>
                      {member.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className={`text-sm font-medium ${member.name === 'Open Role' ? 'text-slate-400' : 'text-slate-800'}`}>{member.name}</p>
                      <p className="text-xs text-slate-500">{member.role}</p>
                      <p className="text-xs text-slate-400 truncate">{member.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <div className="lg:col-span-1 space-y-5">

            <SectionCard title="Funding">

              <div className="rounded-lg bg-blue-50 border border-blue-100 p-4 mb-4">
                <p className="text-xs font-semibold text-[#3B5BDB] uppercase tracking-wide mb-1">Current Round</p>
                <p className="text-2xl font-bold text-slate-900">{funding.raising}</p>
                <p className="text-xs text-slate-500 mt-0.5">{funding.currentRound} · {funding.valuation}</p>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Committed</span>
                    <span className="font-medium text-slate-700">{funding.committed} of {funding.raising}</span>
                  </div>
                  <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#3B5BDB] rounded-full" style={{ width: '52%' }} />
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Lead: <span className="font-medium text-slate-700">{funding.lead}</span></p>
              </div>


              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Previous Rounds</p>
              {funding.previous.map((r) => (
                <div key={r.round} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-slate-700">{r.round}</p>
                    <p className="text-xs text-slate-400">{r.investors} · {r.date}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{r.amount}</span>
                </div>
              ))}


              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-4 mb-3">Funding Timeline</p>
              <div className="relative">

                <div className="absolute left-3 top-3 bottom-3 w-px bg-slate-200" />
                <div className="space-y-4">
                  {funding.timeline.map((step) => (
                    <div key={step.label} className="flex items-start gap-3 relative">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 z-10 text-[10px] font-bold
                        ${step.done ? 'bg-[#3B5BDB] text-white' : step.active ? 'bg-white border-2 border-[#3B5BDB] text-[#3B5BDB]' : 'bg-white border-2 border-slate-200 text-slate-300'}`}>
                        {step.done
                          ? <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          : step.active ? '●' : '○'
                        }
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${step.active ? 'text-[#3B5BDB]' : 'text-slate-700'}`}>{step.label}</p>
                        <p className="text-xs text-slate-400">{step.amount} · {step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Documents">
              <div className="space-y-2">
                {documents.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer group"
                  >
                    <DocIcon type={doc.icon} />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-800 group-hover:text-[#3B5BDB] transition-colors">{doc.name}</p>
                      <p className="text-xs text-slate-400 truncate">{doc.desc}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-slate-400">{doc.size}</span>
                      <svg className="w-4 h-4 text-slate-300 group-hover:text-[#3B5BDB] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full text-xs font-medium text-[#3B5BDB] hover:text-[#2F4AC0] py-2 border border-dashed border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                + Upload Document
              </button>
            </SectionCard>

          </div>
        </div>
      </div>
    </div>
  );
}
