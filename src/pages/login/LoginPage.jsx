import { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [role, setRole] = useState('entrepreneur');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Enter a valid email';
    if (!password) e.password = 'Password is required';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    onLogin({ role, name: role === 'entrepreneur' ? 'Sarah Johnson' : 'Alex Morgan', email });
  };

  const handleDemo = (demoRole) => {
    onLogin({ role: demoRole, name: demoRole === 'entrepreneur' ? 'Sarah Johnson' : 'Alex Morgan', email: `demo@${demoRole}.com` });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-sm">

        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-[#3B5BDB] rounded-xl flex items-center justify-center mb-4 shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Sign in to Business Nexus</h1>
          <p className="text-slate-500 text-sm mt-1">Connect with investors and entrepreneurs</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

          <div className="mb-5">
            <p className="text-sm text-slate-600 mb-2">I am a</p>
            <div className="flex gap-2">
              {['entrepreneur', 'investor'].map(r => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border text-sm font-medium capitalize transition-all ${role === r ? 'bg-[#3B5BDB] text-white border-[#3B5BDB]' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                >
                  <span>{r === 'entrepreneur' ? '🔒' : '💡'}</span>
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 mb-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Email address</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={`w-full border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded-lg py-2.5 pl-9 pr-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B5BDB]/20 focus:border-[#3B5BDB]`}
                />
              </div>
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full border ${errors.password ? 'border-red-400' : 'border-slate-200'} rounded-lg py-2.5 px-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B5BDB]/20 focus:border-[#3B5BDB]`}
              />
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>
          </div>

          <div className="flex items-center justify-between mb-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="w-3.5 h-3.5 rounded border-slate-300 text-[#3B5BDB]" />
              <span className="text-sm text-slate-600">Remember me</span>
            </label>
            <button className="text-sm text-[#3B5BDB] hover:underline">Forgot your password?</button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#3B5BDB] hover:bg-[#2F4AC0] text-white font-medium py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            Sign In
          </button>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400">Demo Accounts</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="flex gap-2 mb-4">
            {[
              { role: 'entrepreneur', label: 'Entrepreneur Demo', icon: '🔒' },
              { role: 'investor', label: 'Investor Demo', icon: '💡' },
            ].map(({ role: r, label, icon }) => (
              <button
                key={r}
                onClick={() => handleDemo(r)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <span>{icon}</span>
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 h-px bg-slate-100" />
            <span className="text-xs text-slate-400">Or</span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>

          <p className="text-center text-sm text-slate-500">
            Don't have an account?{' '}
            <button className="text-[#3B5BDB] hover:underline font-medium">Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
}
