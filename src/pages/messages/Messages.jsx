import { useState } from 'react';
import ChatWindow from '../../components/chatwindow/ChatWindow';

const CONTACTS = [
  {
    id: 1,
    name: 'Alex Rivera',
    role: 'Partner @ Horizon Ventures',
    avatar: 'AR',
    bg: 'bg-blue-100',
    text: 'text-[#3B5BDB]',
    online: true,
    unread: 2,
    lastMessage: 'Would love to schedule a call this week.',
    lastTime: '9:41 AM',
    messages: [
      { id: 1, sender: 'Alex Rivera', text: 'Hi Sarah! I checked out your pitch deck — really impressive traction.', time: '9:30 AM' },
      { id: 2, sender: 'Alex Rivera', text: 'Would love to schedule a call this week.', time: '9:41 AM' },
    ],
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'Angel Investor',
    avatar: 'PM',
    bg: 'bg-violet-100',
    text: 'text-violet-700',
    online: true,
    unread: 0,
    lastMessage: 'Sent you the term sheet draft.',
    lastTime: 'Yesterday',
    messages: [
      { id: 1, sender: 'Priya Mehta', text: 'Great meeting yesterday! Here is the term sheet draft.', time: 'Yesterday' },
      { id: 2, sender: 'Priya Mehta', text: 'Sent you the term sheet draft.', time: 'Yesterday' },
    ],
  },
  {
    id: 3,
    name: 'James Okafor',
    role: 'VC @ BlueNorth Capital',
    avatar: 'JO',
    bg: 'bg-emerald-100',
    text: 'text-emerald-700',
    online: false,
    unread: 0,
    lastMessage: 'Thanks for the follow-up.',
    lastTime: 'Mon',
    messages: [
      { id: 1, sender: 'James Okafor', text: 'We reviewed your deck with the partners.', time: 'Mon' },
      { id: 2, sender: 'James Okafor', text: 'Thanks for the follow-up.', time: 'Mon' },
    ],
  },
  {
    id: 4,
    name: 'Lena Hoffmann',
    role: 'Mentor @ TechStars',
    avatar: 'LH',
    bg: 'bg-amber-100',
    text: 'text-amber-700',
    online: false,
    unread: 1,
    lastMessage: 'Check your Q2 unit economics before the pitch.',
    lastTime: 'Sun',
    messages: [
      { id: 1, sender: 'Lena Hoffmann', text: 'Hey! Quick tip before your next investor meeting.', time: 'Sun' },
      { id: 2, sender: 'Lena Hoffmann', text: 'Check your Q2 unit economics before the pitch.', time: 'Sun' },
    ],
  },
];

export default function Messages() {
  const [contacts, setContacts] = useState(CONTACTS);
  const [activeId, setActiveId] = useState(CONTACTS[0].id);
  const [mobileView, setMobileView] = useState('list');
  const [search, setSearch] = useState('');

  const activeContact = contacts.find(c => c.id === activeId);
  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectContact = (id) => {
    setActiveId(id);
    setContacts(prev => prev.map(c => c.id === id ? { ...c, unread: 0 } : c));
    setMobileView('chat');
  };

  return (
    <div className="flex-1 overflow-hidden flex flex-col bg-[#F8FAFC]">

      {}
      <div className="hidden sm:flex items-center px-5 py-4 bg-white border-b border-slate-200 flex-shrink-0">
        <h1 className="text-xl font-semibold text-slate-900">Messages</h1>
        <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#3B5BDB] text-white text-[10px] font-bold">
          {contacts.reduce((n, c) => n + c.unread, 0) || null}
        </span>
      </div>

      <div className="flex flex-1 overflow-hidden">

        {}
        <aside className={`
          flex-shrink-0 w-full sm:w-64 lg:w-72
          bg-white border-r border-slate-200
          flex flex-col
          ${mobileView === 'chat' ? 'hidden sm:flex' : 'flex'}
        `}>
          {}
          <div className="flex sm:hidden items-center px-4 py-4 border-b border-slate-200 flex-shrink-0">
            <h1 className="text-xl font-semibold text-slate-900">Messages</h1>
          </div>

          {}
          <div className="p-3 border-b border-slate-100 flex-shrink-0">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search conversations…"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B5BDB] placeholder:text-slate-400"
              />
            </div>
          </div>

          {}
          <div className="flex-1 overflow-y-auto">
            {filtered.length === 0 && (
              <p className="text-sm text-slate-400 text-center py-10">No conversations found.</p>
            )}
            {filtered.map(contact => (
              <button
                key={contact.id}
                onClick={() => handleSelectContact(contact.id)}
                className={`w-full flex items-start gap-3 px-4 py-3 text-left border-b border-slate-100 transition-colors
                  ${activeId === contact.id ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
              >
                {}
                <div className="relative flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${contact.bg} ${contact.text}`}>
                    {contact.avatar}
                  </div>
                  {contact.online && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className={`text-sm font-semibold truncate ${activeId === contact.id ? 'text-[#3B5BDB]' : 'text-slate-800'}`}>
                      {contact.name}
                    </span>
                    <span className="text-[10px] text-slate-400 flex-shrink-0">{contact.lastTime}</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">{contact.role}</p>
                  <p className="text-xs text-slate-400 truncate mt-0.5">{contact.lastMessage}</p>
                </div>

                {contact.unread > 0 && (
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#3B5BDB] text-white text-[10px] font-bold flex items-center justify-center mt-1">
                    {contact.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </aside>

        {}
        <div className={`
          flex-1 flex flex-col overflow-hidden
          ${mobileView === 'list' ? 'hidden sm:flex' : 'flex'}
        `}>
          {}
          <div className="flex sm:hidden items-center gap-2 px-3 py-2 bg-white border-b border-slate-200 flex-shrink-0">
            <button
              onClick={() => setMobileView('list')}
              className="text-slate-500 hover:text-slate-800 p-1 rounded transition-colors"
              aria-label="Back to contacts"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm font-semibold text-slate-800">{activeContact?.name}</span>
          </div>

          {activeContact
            ? <ChatWindow contact={activeContact} initialMessages={activeContact.messages} />
            : (
              <div className="flex flex-col items-center justify-center h-full text-center gap-3 p-8">
                <svg className="w-12 h-12 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="text-sm text-slate-400">Select a conversation to start messaging.</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
