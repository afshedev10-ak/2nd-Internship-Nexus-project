import Avatar from '../../ui/Avatar';

export default function Navbar({ user, onLogout }) {
  return (
    <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#3B5BDB] rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2" />
          </svg>
        </div>
        <span className="font-bold text-slate-900 text-sm">Business Nexus</span>
      </div>

      <nav className="flex items-center gap-6">
        {[
          { icon: '⊞', label: 'Dashboard' },
          { icon: '✉', label: 'Messages' },
          { icon: '🔔', label: 'Notifications' },
          { icon: '👤', label: 'Profile' },
        ].map(({ icon, label }) => (
          <button key={label} className="flex items-center gap-1.5 pr-6 m-6 text-sm text-slate-600 hover:text-slate-900 transition-colors">
            <span className="text-base">{icon}</span>
            <span>{label}</span>
          </button>
        ))}
        <button onClick={onLogout} className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors">
          <span>↗</span>
          <span>Logout</span>
        </button>
        <div className="flex items-center gap-2 ml-2">
          <Avatar name={user?.name || 'User'} avatarUrl={user?.avatarUrl} size="sm" />
          <span className="text-sm font-medium text-slate-700">{user?.name}</span>
        </div>
      </nav>
    </header>
  );
}
