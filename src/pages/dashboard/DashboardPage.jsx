import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import EntrepreneurDashboard from './EntrepreneurDashboard';
import InvestorDashboard from './InvestorDashboard';
import ProfilePage from '../profile/ProfilePage';
import InvestorProfilePage from '../investorprofile/InvestorProfilePage';
import Messages from '../messages/Messages';

export default function DashboardPage({ user, onLogout }) {
  const [activePage, setActivePage] = useState('Dashboard');
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    setActivePage(page);
    const routes = {
      Dashboard:        '/dashboard',
      'My Startup':     user?.role === 'investor' ? '/investor-profile' : '/profile',
      'Find Investors': '/find-investors',
      MyStartup:        '/profile',
      'Find Startups':  '/find-startups',
      Messages:         '/messages',
      Notifications:    '/notifications',
      Documents:        '/documents',
      Calendar:         '/calendar',
      Settings:         '/settings',
      'Help & Support': '/help',
    };
    if (routes[page]) navigate(routes[page]);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <div className="flex items-center gap-3 px-3 sm:px-5 py-2 bg-white border-b border-slate-200 flex-shrink-0">
        
        <span className="text-sm text-slate-400 hidden sm:inline">/ {activePage}</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar role={user?.role} activePage={activePage} onNavigate={handleNavigate} />

        <Routes>
          <Route
            path="/dashboard"
            element={
              user?.role === 'entrepreneur'
                ? <EntrepreneurDashboard user={user} activePage={activePage} onBack={onLogout} />
                : <InvestorDashboard    user={user} activePage={activePage} onBack={onLogout} />
            }
          />
          <Route path="/profile"          element={<ProfilePage />} />
          <Route path="/investor-profile" element={<InvestorProfilePage />} />
          <Route path="/messages"         element={<Messages />} />
          <Route path="*"                 element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
}
