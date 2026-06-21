import { useState } from 'react';
import Avatar from '../../ui/Avatar';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import Calendar from '../../components/calendar/Calendar';
import VideoCall from '../../components/videocall/VideoCall';
import DocumentChamber from '../../components/documentchamber/DocumentChamber';

const collaborationRequests = [
  { id: 1, name: 'Sarah Johnson', time: '2 days ago', status: 'Pending', message: "TechWave AI is seeking Series A funding of $2M. Our AI-driven financial analytics platform has shown 300% YoY growth. Would love to discuss investment opportunities." },
  { id: 2, name: 'Marcus Chen', time: '5 days ago', status: 'Pending', message: "GreenBuild Technologies is revolutionizing sustainable construction. We're raising $1.5M to expand our carbon-neutral building materials division." },
];

const recommendedStartups = [
  { id: 1, name: 'TechWave AI', founder: 'Sarah Johnson', stage: 'Series A', sector: 'FinTech', traction: '$500K ARR', ask: '$2M', tags: ['AI/ML', 'FinTech', 'SaaS'], bio: 'AI-driven financial analytics platform with enterprise clients in 12 countries.' },
  { id: 2, name: 'GreenBuild Tech', founder: 'Marcus Chen', stage: 'Seed', sector: 'CleanTech', traction: '45 B2B clients', ask: '$1.5M', tags: ['CleanTech', 'Construction', 'SaaS'], bio: 'Sustainable construction materials with 60% lower carbon footprint than traditional materials.' },
  { id: 3, name: 'MedCore Health', founder: 'Priya Patel', stage: 'Series A', sector: 'HealthTech', traction: '12K MAU', ask: '$3M', tags: ['HealthTech', 'AI', 'MedDevice'], bio: 'AI-powered diagnostic tool for early detection of chronic diseases used by 200+ clinics.' },
];

export default function InvestorDashboard({ user, activePage }) {
  const [showVideoCall, setShowVideoCall] = useState(false);

  if (activePage === 'Calendar') return <Calendar role="investor" />;
  if (activePage === 'Documents') return <DocumentChamber />;

  return (
    <div className="flex-1 overflow-y-auto bg-[#F8FAFC]">
      {showVideoCall && <VideoCall onEnd={() => setShowVideoCall(false)} />}
      <div className="p-8 max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Welcome, {user?.name || 'Alex Morgan'}</h1>
              <p className="text-slate-500 text-sm mt-1">Here's what's happening with your portfolio today</p>
            </div>
          </div>
          <Button>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Find Startups
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Pending Requests', value: '2', icon: '🔔', color: 'bg-blue-50 text-blue-600' },
            { label: 'Portfolio Companies', value: '12', icon: '💼', color: 'bg-purple-50 text-purple-600' },
            { label: 'Upcoming Meetings', value: '3', icon: '📅', color: 'bg-yellow-50 text-yellow-600' },
            { label: 'Total Invested', value: '$4.2M', icon: '💰', color: 'bg-green-50 text-green-600' },
          ].map(({ label, value, icon, color }) => (
            <div key={label} className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-4">
              <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center text-lg`}>{icon}</div>
              <div>
                <p className="text-xs text-slate-500 font-medium">{label}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3">
            <div className="bg-white rounded-xl border border-slate-200">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-900">Collaboration Requests</h2>
                <Badge color="blue">2 pending</Badge>
              </div>
              <div className="divide-y divide-slate-100">
                {collaborationRequests.map(req => (
                  <div key={req.id} className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar name={req.name} avatarUrl={req.avatarUrl} size="md" online />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{req.name}</p>
                          <p className="text-xs text-slate-400">{req.time}</p>
                        </div>
                      </div>
                      <Badge color={req.status === 'Pending' ? 'yellow' : 'green'}>{req.status}</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">{req.message}</p>
                    <div className="flex items-center gap-2">
                      <Button variant="secondary" size="sm" onClick={() => setShowVideoCall(true)}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        VideoCall
                      </Button>
                      <Button size="sm">View Profile</Button>
                      <Button variant="outline" size="sm">Accept</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="bg-white rounded-xl border border-slate-200">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-900">Recommended Startups</h2>
                <button className="text-sm text-[#3B5BDB] hover:underline">View all</button>
              </div>
              <div className="divide-y divide-slate-100">
                {recommendedStartups.map(startup => (
                  <div key={startup.id} className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar name={startup.name} avatarUrl={startup.avatarUrl} size="md" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{startup.name}</p>
                        <p className="text-xs text-slate-500">{startup.founder} · {startup.sector}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {startup.tags.map(t => <Badge key={t} color="blue" size="xs">{t}</Badge>)}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-2">{startup.bio}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs text-slate-400">Traction</p>
                        <p className="text-xs font-semibold text-slate-700">{startup.traction}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Raising</p>
                        <p className="text-xs font-semibold text-[#3B5BDB]">{startup.ask}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
