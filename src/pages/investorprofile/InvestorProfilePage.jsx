const investor = {
  name: 'Alex Morgan',
  role: 'Angel Investor & Limited Partner',
  avatar: 'AM',
  location: 'New York, NY',
  bio: 'Investor with 12+ years of experience backing early-stage FinTech and SaaS companies across North America and Europe. Former VP of Product at Stripe, where I led the SMB payments division to $2B ARR. I write first checks, move fast, and stay involved — sitting on 4 active boards and have helped 3 portfolio companies reach Series B.',
  stats: [
    { label: 'Total Investments', value: '34' },
    { label: 'Active Portfolio', value: '18' },
    { label: 'Exits', value: '9' },
    { label: 'Avg. Return', value: '4.2x' },
  ],
  overview: {
    range: '$250K – $1.5M',
    stages: ['Pre-seed', 'Seed', 'Series A'],
    interests: ['FinTech', 'SaaS', 'AI/ML', 'Developer Tools', 'B2B Infrastructure'],
    geographies: ['North America', 'Europe', 'SE Asia'],
    checkSize: '$500K',
  },
  Profile: [
    { name: 'Payvault',  sector: 'FinTech',          stage: 'Series B', status: 'Active', year: '2021', multiple: '3.1x', logo: 'PV', bg: 'bg-blue-100',    text: 'text-[#3B5BDB]'   },
    { name: 'StackOS',   sector: 'Developer Tools',   stage: 'Series A', status: 'Active', year: '2020', multiple: '5.4x', logo: 'SO', bg: 'bg-violet-100',  text: 'text-violet-700'  },
    { name: 'Glidepath', sector: 'SaaS',              stage: 'Acquired', status: 'Exited', year: '2018', multiple: '8.0x', logo: 'GP', bg: 'bg-emerald-100', text: 'text-emerald-700' },
    { name: 'NeuralBid', sector: 'AI/ML',             stage: 'Seed',     status: 'Active', year: '2023', multiple: '1.8x', logo: 'NB', bg: 'bg-amber-100',   text: 'text-amber-700'   },
    { name: 'Clearform', sector: 'B2B SaaS',          stage: 'IPO',      status: 'Exited', year: '2017', multiple: '11.2x',logo: 'CF', bg: 'bg-rose-100',    text: 'text-rose-700'    },
  ],
  thesis: [
    'I back founders who are in the problem, not just studying it — people who have lived the pain they are solving. My model is high-conviction, low-volume: I write 4–6 checks a year and go deep with each company.',
    'Post-investment I am most useful on go-to-market strategy, enterprise sales motion, and fundraising prep for the next round. Reachable on weekdays; I expect the same candor in updates that I give in feedback.',
    'If your company has strong early retention signal and a clear wedge into a defensible market, let\'s talk.',
  ],
  documents: [
    { name: 'Investment Thesis 2024',  desc: 'Sector focus, check size, evaluation criteria', icon: 'thesis',    size: '1.2 MB' },
    { name: 'Portfolio Summary',       desc: 'Full portfolio overview with metrics',           icon: 'portfolio', size: '2.8 MB' },
    { name: 'Reference Sheet',         desc: 'Contact details for 6 portfolio founders',      icon: 'ref',       size: '420 KB' },
  ],
};

function Tag({ label, color = 'blue' }) {
  const styles = {
    blue:   'bg-blue-50 text-[#3B5BDB]',
    violet: 'bg-violet-50 text-violet-700',
    slate:  'bg-slate-100 text-slate-600',
    green:  'bg-emerald-50 text-emerald-700',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[color]}`}>
      {label}
    </span>
  );
}

function SectionCard({ title, badge, children }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <h2 className="text-base font-semibold text-slate-800">{title}</h2>
        {badge && <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">{badge}</span>}
      </div>
      {children}
    </div>
  );
}

function DocIcon({ type }) {
  const base = 'w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0';
  if (type === 'thesis')
    return <div className={`${base} bg-blue-50`}><svg className="w-4 h-4 text-[#3B5BDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>;
  if (type === 'portfolio')
    return <div className={`${base} bg-violet-50`}><svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>;
  return <div className={`${base} bg-amber-50`}><svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>;
}

export default function InvestorProfilePage() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#F8FAFC] p-3 sm:p-5 lg:p-6">
      <div className="max-w-5xl mx-auto space-y-5">

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="h-20 sm:h-28 bg-gradient-to-r from-slate-800 to-slate-600" />
          <div className="px-5 pb-5">
            <div className="-mt-8 sm:-mt-10 mb-3 flex items-end justify-between">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-4 border-white shadow-md flex items-center justify-center text-xl sm:text-2xl font-bold text-slate-700">
                {investor.avatar}
              </div>
              <div className="mb-1 flex gap-2">
                <button className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg bg-[#3B5BDB] text-white hover:bg-[#2F4AC0] transition-colors flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  <span className="hidden sm:inline">Message</span>
                </button>
                <button className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>

            <h1 className="text-xl font-semibold text-slate-900">{investor.name}</h1>
            <p className="text-sm text-slate-500 mt-0.5">{investor.role}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              <Tag label="Angel Investor" color="slate" />
              <Tag label="LP" color="slate" />
              <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {investor.location}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-500 font-medium">
                ● Actively investing
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-100">
              {investor.stats.map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-lg font-bold text-slate-900">{s.value}</p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div className="lg:col-span-2 space-y-5">

            <SectionCard title="About">
              <p className="text-sm text-slate-600 leading-relaxed">{investor.bio}</p>
            </SectionCard>

            <SectionCard title="Investment Overview">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Investment Range</p>
                    <p className="text-sm font-semibold text-slate-800">{investor.overview.range}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Avg. check: {investor.overview.checkSize}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Preferred Stages</p>
                    <div className="flex flex-wrap gap-1.5">
                      {investor.overview.stages.map(s => <Tag key={s} label={s} color="blue" />)}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Leads Rounds</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      Yes — leads and co-leads
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Sector Focus</p>
                    <div className="flex flex-wrap gap-1.5">
                      {investor.overview.interests.map(i => <Tag key={i} label={i} color="violet" />)}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Geographies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {investor.overview.geographies.map(g => <Tag key={g} label={g} color="slate" />)}
                    </div>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Track Record">
              <div className="space-y-2">
                <div className="hidden sm:grid grid-cols-12 gap-2 px-2 pb-2 border-b border-slate-100 text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                  <span className="col-span-4">Company</span>
                  <span className="col-span-3">Sector</span>
                  <span className="col-span-2">Stage</span>
                  <span className="col-span-1">Year</span>
                  <span className="col-span-2 text-right">Return</span>
                </div>
                {investor.Profile.map(co => (
                  <div key={co.name} className="flex sm:grid sm:grid-cols-12 sm:gap-2 items-center p-3 rounded-lg bg-slate-50 border border-slate-100 gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${co.bg} ${co.text}`}>
                      {co.logo}
                    </div>
                    <div className="flex-1 min-w-0 sm:col-span-3">
                      <p className="text-sm font-semibold text-slate-800 truncate">{co.name}</p>
                      <p className="text-xs text-slate-400 sm:hidden">{co.sector} · {co.year}</p>
                    </div>
                    <span className="hidden sm:block sm:col-span-3 text-xs text-slate-500 self-center">{co.sector}</span>
                    <div className="hidden sm:flex sm:col-span-2 self-center">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${co.status === 'Exited' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-[#3B5BDB]'}`}>
                        {co.stage}
                      </span>
                    </div>
                    <span className="hidden sm:block sm:col-span-1 text-xs text-slate-500 self-center">{co.year}</span>
                    <span className={`text-xs font-bold sm:col-span-2 sm:text-right self-center ml-auto sm:ml-0 ${co.status === 'Exited' ? 'text-emerald-600' : 'text-slate-600'}`}>
                      {co.multiple}
                    </span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <div className="lg:col-span-1 space-y-5">

            <SectionCard title="Investment Thesis" badge="Collaboration">
              <div className="space-y-3">
                {investor.thesis.map((para, i) => (
                  <p key={i} className="text-sm text-slate-600 leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-100">
                <p className="text-xs font-semibold text-[#3B5BDB] mb-1">Ready to connect?</p>
                <p className="text-xs text-slate-500 mb-3">Send a brief intro with your deck and traction metrics.</p>
                <button className="w-full text-xs font-medium px-3 py-2 bg-[#3B5BDB] hover:bg-[#2F4AC0] text-white rounded-lg transition-colors">
                  Send Introduction
                </button>
              </div>
            </SectionCard>

            <SectionCard title="Documents">
              <div className="space-y-2">
                {investor.documents.map(doc => (
                  <div key={doc.name} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <DocIcon type={doc.icon} />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-800 group-hover:text-[#3B5BDB] transition-colors">{doc.name}</p>
                      <p className="text-xs text-slate-400 truncate">{doc.desc}</p>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-1.5">
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
