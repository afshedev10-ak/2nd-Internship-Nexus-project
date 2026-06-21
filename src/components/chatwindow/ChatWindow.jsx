import { useState, useRef, useEffect } from 'react';

const CURRENT_USER = 'You';

export default function ChatWindow({ contact, initialMessages = [] }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [
      ...prev,
      { id: Date.now(), sender: CURRENT_USER, text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
    ]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">

      {contact && (
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 bg-white flex-shrink-0">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${contact.bg} ${contact.text}`}>
            {contact.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">{contact.name}</p>
            <p className="text-xs text-emerald-500 font-medium">{contact.online ? '● Online' : '○ Offline'}</p>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto space-y-3 p-4 bg-[#F8FAFC]">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center gap-2 py-16">
            <svg className="w-10 h-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-sm text-slate-400">No messages yet. Say hello!</p>
          </div>
        )}

        {messages.map((msg) => {
          const isMe = msg.sender === CURRENT_USER;
          return (
            <div key={msg.id} className={`flex items-end gap-2 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
              {!isMe && (
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${contact?.bg ?? 'bg-slate-200'} ${contact?.text ?? 'text-slate-600'}`}>
                  {msg.sender.slice(0, 2).toUpperCase()}
                </div>
              )}

              <div className={`flex flex-col gap-0.5 max-w-[75%] sm:max-w-[60%] ${isMe ? 'items-end' : 'items-start'}`}>
                {!isMe && (
                  <span className="text-xs font-semibold text-slate-500 px-1">{msg.sender}</span>
                )}
                <div className={`px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  isMe
                    ? 'bg-[#3B5BDB] text-white rounded-br-sm'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
                {msg.time && (
                  <span className="text-[10px] text-slate-400 px-1">{msg.time}</span>
                )}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      <div className="flex items-center gap-2 p-3 border-t border-slate-200 bg-white flex-shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message…"
          className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B5BDB] focus:border-transparent placeholder:text-slate-400 bg-slate-50"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="bg-[#3B5BDB] hover:bg-[#2F4AC0] disabled:opacity-40 disabled:cursor-not-allowed text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span className="hidden sm:inline">Send</span>
        </button>
      </div>
    </div>
  );
}
