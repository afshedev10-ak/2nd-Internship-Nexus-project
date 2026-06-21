import { useState } from 'react';
import Avatar from '../../ui/Avatar';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import Calendar from '../../components/calendar/Calendar';
import VideoCall from '../../components/videocall/VideoCall';
import DocumentChamber from '../../components/documentchamber/DocumentChamber';

const collaborationRequests = [
  { id: 1, name: 'Michael Rodriguez', time: 'almost 3 years ago', status: 'Accepted', message: "I'd like to explore potential investment in TechWave AI. Your AI-driven financial analytics platform aligns well with my investment thesis." },
  { id: 2, name: 'Jennifer Lee', time: 'almost 3 years ago', status: 'Accepted', message: "Interested in discussing how TechWave AI can incorporate sustainable practices. Let's connect to explore potential collaboration." },
];

const recommendedInvestors = [
  { id: 1, name: 'Alex Morgan', role: 'Investor', investments: 12, stages: ['Seed', 'Series A'], interests: ['FinTech', 'SaaS', 'AI/ML'], bio: 'Early-stage investor with focus on B2B SaaS and fintech. Previously founded and exited two companies.', range: '$250K – $1.5M' },
  { id: 2, name: 'Jennifer Lee', role: 'Investor', investments: 18, stages: ['Seed', 'Series A', 'Series B'], interests: ['CleanTech', 'AgTech', 'Sustainability'], bio: 'Impact investor focused on climate tech, sustainable agriculture, and clean energy.', range: '$500K – $3M' },
  { id: 3, name: 'Robert Torres', role: 'Investor', investments: 9, stages: ['Series A', 'Series B'], interests: ['HealthTech', 'BioTech', 'Medical Devices'], bio: 'Healthcare-focused investor with medical background. Looking for innovative health solutions.', range: '$1M – $5M' },
];

const interestColors = { FinTech: 'blue', SaaS: 'purple', 'AI/ML': 'teal', CleanTech: 'green', AgTech: 'teal', Sustainability: 'green', HealthTech: 'pink', BioTech: 'blue', 'Medical Devices': 'orange' };
const stageColors = { Seed: 'blue', 'Series A': 'green', 'Series B': 'purple' };

export default function EntrepreneurDashboard({ user, activePage }) {
  const [showVideoCall, setShowVideoCall] = useState(false);

  if (activePage === 'Calendar' || activePage === 'Upcoming Meetings') return <Calendar role="entrepreneur" />;
  if (activePage === 'Documents') return <DocumentChamber />;

  return (
    <div className="flex-1 overflow-y-auto bg-[#F8FAFC]">
      {showVideoCall && <VideoCall onEnd={() => setShowVideoCall(false)} />}
      <div className="p-8 max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Avatar size="lg" avatarUrl={user?.avatarUrl || 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'} />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Welcome, {user?.name || 'Sarah Johnson'}</h1>
              <p className="text-slate-500 text-sm mt-1">Here's what's happening with your startup today</p>
            </div>
          </div>
          <Button onClick={() => {}}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Find Investors
          </Button>
        </div>

      
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Pending Requests', value: '0', icon: '🔔', color: 'bg-blue-50 text-blue-600' },
            { label: 'Total Connections', value: '2', icon: '👥', color: 'bg-green-50 text-green-600' },
            { label: 'Upcoming Meetings', value: '2', icon: '📅', color: 'bg-yellow-50 text-yellow-600' },
            { label: 'Profile Views', value: '24', icon: '📈', color: 'bg-purple-50 text-purple-600' },
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
                <Badge color="blue">0 pending</Badge>
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
                      <Badge color="green">{req.status}</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">{req.message}</p>
                    <div className="flex items-center gap-2">
                      <Button variant="secondary" size="sm" onClick={() => setShowVideoCall(true)}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        VideoCall
                      </Button>
                      <Button size="sm">View Profile</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="bg-white rounded-xl border border-slate-200">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-900">Recommended Investors</h2>
                <button className="text-sm text-[#3B5BDB] hover:underline">View all</button>
              </div>
              <div className="divide-y divide-slate-100">
                {recommendedInvestors.map(inv => (
                  <div key={inv.id} className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar name={inv.name} avatarUrl={inv.avatarUrl} size="md" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{inv.name}</p>
                        <p className="text-xs text-slate-500">{inv.role} · {inv.investments} investments</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {inv.stages.map(s => <Badge key={s} color={stageColors[s] || 'gray'} size="xs">{s}</Badge>)}
                    </div>
                    <p className="text-xs text-slate-500 font-medium mb-1">Investment Interests</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {inv.interests.map(i => <Badge key={i} color={interestColors[i] || 'blue'} size="xs">{i}</Badge>)}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-2 line-clamp-2">{inv.bio}</p>
                    <div>
                      <p className="text-xs text-slate-400">Investment Range</p>
                      <p className="text-xs font-semibold text-slate-700">{inv.range}</p>
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
