import { useState, useEffect } from 'react';
import Avatar from '../../ui/Avatar';

export default function VideoCall({ onEnd, participant = 'Michael Rodriguez' }) {
  const [muted, setMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [duration, setDuration] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: participant, text: 'Hey! Can you see my screen?', time: '10:02 AM' },
    { id: 2, from: 'You', text: 'Yes, perfectly! Let me share the pitch deck.', time: '10:03 AM' },
  ]);
  const [newMsg, setNewMsg] = useState('');

  useEffect(() => {
    const t = setInterval(() => setDuration(d => d + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const sendMsg = () => {
    if (!newMsg.trim()) return;
    setMessages(p => [...p, { id: Date.now(), from: 'You', text: newMsg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setNewMsg('');
  };

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col">
          <div className="flex items-center justify-between px-6 py-3 bg-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-white text-sm font-medium">Live · {fmt(duration)}</span>
        </div>
        <p className="text-gray-300 text-sm">{participant} — Investment Discussion</p>
        <div className="flex items-center gap-2">
          <button onClick={() => setChatOpen(p => !p)} className="text-gray-400 hover:text-white transition-colors text-sm px-3 py-1.5 rounded border border-gray-600 hover:border-gray-400">
            Chat {messages.length > 0 && <span className="ml-1 bg-blue-500 text-white rounded-full text-xs px-1.5">{messages.length}</span>}
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-2 p-4 relative">
        <div className="flex-1 bg-gray-800 rounded-xl overflow-hidden relative flex items-center justify-center">
          {videoOff ? (
            <div className="flex flex-col items-center gap-3">
              <Avatar name={participant} size="xl" />
              <p className="text-gray-400 text-sm">Camera off</p>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <Avatar name={participant} size="xl" />
                <p className="text-gray-300 mt-3 text-sm">{participant}</p>
              </div>
            </div>
          )}
          {sharing && (
            <div className="absolute top-3 left-3 bg-blue-500/90 text-white text-xs px-2 py-1 rounded-full">📺 Screen sharing active</div>
          )}
        </div>

        <div className="absolute bottom-8 right-8 w-36 h-24 bg-gray-700 rounded-xl flex items-center justify-center border-2 border-gray-600">
          {videoOff ? (
            <Avatar name="You" size="md" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center">
              <Avatar name="You" size="md" />
            </div>
          )}
          <span className="absolute bottom-1 left-2 text-white text-xs">You</span>
        </div>

        {chatOpen && (
          <div className="w-72 bg-gray-800 rounded-xl flex flex-col">
            <div className="px-4 py-3 border-b border-gray-700">
              <p className="text-white text-sm font-medium">Chat</p>
            </div>
            <div className="flex-1 p-3 space-y-2 overflow-y-auto">
              {messages.map(m => (
                <div key={m.id} className={`flex flex-col ${m.from === 'You' ? 'items-end' : 'items-start'}`}>
                  <div className={`px-3 py-2 rounded-xl text-xs max-w-[85%] ${m.from === 'You' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                    {m.text}
                  </div>
                  <span className="text-gray-500 text-xs mt-0.5">{m.time}</span>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-gray-700 flex gap-2">
              <input value={newMsg} onChange={e => setNewMsg(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMsg()} placeholder="Type a message…" className="flex-1 bg-gray-700 text-white text-xs px-3 py-2 rounded-lg outline-none placeholder-gray-500" />
              <button onClick={sendMsg} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs">Send</button>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-3 py-4 bg-gray-800">
        <button onClick={() => setMuted(p => !p)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${muted ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-600 hover:bg-gray-500'}`}>
          <span className="text-white text-lg">{muted ? '🔇' : '🎙'}</span>
        </button>
        <button onClick={() => setVideoOff(p => !p)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${videoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-600 hover:bg-gray-500'}`}>
          <span className="text-white text-lg">{videoOff ? '📵' : '📹'}</span>
        </button>
        <button onClick={() => setSharing(p => !p)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${sharing ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'}`}>
          <span className="text-white text-lg">🖥</span>
        </button>
        <button className="w-12 h-12 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center">
          <span className="text-white text-lg">⋯</span>
        </button>
        <button onClick={onEnd} className="w-14 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors ml-4">
          <span className="text-white text-lg">📞</span>
        </button>
      </div>
    </div>
  );
}
