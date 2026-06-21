import { useLocation } from 'react-router-dom';

const icons = {
  Dashboard: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  'My Startup': <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  'Find Investors': <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  Messages: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  Notifications: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
  Documents: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  Settings: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  'Help & Support': <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Calendar: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  Profile: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  'Find Startups': <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
};

const linkRoutes = {
  Dashboard: '/dashboard',
  'My Startup': '/profile',
  'Find Investors': '/find-investors',
  Messages: '/messages',
  Notifications: '/notifications',
  Documents: '/documents',
  Calendar: '/calendar',
  'Find Startups': '/find-startups',
  Settings: '/settings',
  'Help & Support': '/help',
};

export default function Sidebar({ role = 'entrepreneur', onNavigate }) {
  const location = useLocation();

  const entrepreneurLinks = ['Dashboard', 'My Startup', 'Find Investors', 'Calendar', 'Messages', 'Notifications', 'Documents'];
  const investorLinks     = ['Dashboard', 'My Startup', 'Find Startups', 'Calendar', 'Messages', 'Notifications', 'Documents'];
  const settingsLinks     = ['Settings', 'Help & Support'];
  const mainLinks         = role === 'entrepreneur' ? entrepreneurLinks : investorLinks;

  const isActive = (link) => location.pathname === linkRoutes[link];

  return (
    <aside className="w-52 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 h-full">
      <nav className="flex-1 p-3 space-y-0.5">
        {mainLinks.map(link => (
          <button
            key={link}
            onClick={() => onNavigate?.(link)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
              ${isActive(link)
                ? 'bg-blue-50 text-primary 700 font-medium'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            {icons[link]}
            {link}
          </button>
        ))}

        <div className="pt-4 pb-1 px-3">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Settings</p>
        </div>

        {settingsLinks.map(link => (
          <button
            key={link}
            onClick={() => onNavigate?.(link)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
              ${isActive(link)
                ? 'bg-blue-50 text-[#3B5BDB] font-medium'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            {icons[link]}
            {link}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200 bg-slate-50 mx-3 mb-3 rounded-lg">
        <p className="text-xs text-slate-500 font-medium mb-1">Need assistance?</p>
        <p className="text-xs font-semibold text-slate-700">Contact Support</p>
        <p className="text-xs text-[#3B5BDB] mt-0.5">support@businessnexus.com</p>
      </div>
    </aside>
  );
}
