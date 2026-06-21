import { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import Avatar from '../../ui/Avatar';

const initialMeetings = [
  { id: 1, title: 'Investment Discussion', with: 'Michael Rodriguez', date: new Date(2026, 5, 15, 10, 0), duration: 45, type: 'Video Call', status: 'confirmed' },
  { id: 2, title: 'Product Demo', with: 'Jennifer Lee', date: new Date(2026, 5, 18, 14, 30), duration: 30, type: 'Video Call', status: 'confirmed' },
  { id: 3, title: 'Follow-up Call', with: 'Robert Torres', date: new Date(2026, 5, 22, 11, 0), duration: 60, type: 'Phone', status: 'pending' },
  { id: 4, title: 'Series A Review', with: 'Amanda Park', date: new Date(2026, 5, 25, 9, 0), duration: 90, type: 'In Person', status: 'confirmed' },
];

const TYPE_COLORS = { 'Video Call': 'blue', 'Phone': 'green', 'In Person': 'purple' };

export default function Calendar() {
  const today = new Date(2026, 5, 12);
  const [selectedDate, setSelectedDate] = useState(today);
  const [meetings, setMeetings] = useState(initialMeetings);
  const [showModal, setShowModal] = useState(false);
  const [newMeeting, setNewMeeting] = useState({ title: '', with: '', time: '10:00', duration: 30, type: 'Video Call' });
  const [errors, setErrors] = useState({});

  const getMeetingsForDate = (date) =>
    meetings.filter(m =>
      m.date.getFullYear() === date.getFullYear() &&
      m.date.getMonth() === date.getMonth() &&
      m.date.getDate() === date.getDate()
    );

  const selectedMeetings = getMeetingsForDate(selectedDate);
  const upcomingMeetings = meetings
    .filter(m => m.date >= today)
    .sort((a, b) => a.date - b.date)
    .slice(0, 5);

  const tileContent = ({ date, view }) => {
    if (view !== 'month') return null;
    const dayMeetings = getMeetingsForDate(date);
    if (!dayMeetings.length) return null;
    return (
      <div className="flex justify-center gap-0.5 mt-0.5">
        {dayMeetings.slice(0, 3).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB] block" />
        ))}
      </div>
    );
  };

  const tileClassName = ({ date, view }) => {
    if (view !== 'month') return '';
    const hasMeetings = getMeetingsForDate(date).length > 0;
    return hasMeetings ? 'has-meeting' : '';
  };

  const handleAddMeeting = () => {
    const e = {};
    if (!newMeeting.title.trim()) e.title = 'Required';
    if (!newMeeting.with.trim()) e.with = 'Required';
    if (Object.keys(e).length) { setErrors(e); return; }

    const [h, min] = newMeeting.time.split(':').map(Number);
    const date = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      h, min
    );
    setMeetings(prev => [...prev, {
      id: Date.now(),
      ...newMeeting,
      date,
      status: 'confirmed',
    }]);
    setShowModal(false);
    setNewMeeting({ title: '', with: '', time: '10:00', duration: 30, type: 'Video Call' });
    setErrors({});
  };

  const handleDelete = (id) => setMeetings(prev => prev.filter(m => m.id !== id));

  const formatDate = (date) => date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      <style>{`
        .bnx-cal .react-calendar {
          width: 100%;
          border: none;
          background: transparent;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .bnx-cal .react-calendar__navigation {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }
        .bnx-cal .react-calendar__navigation button {
          background: none;
          border: none;
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          cursor: pointer;
          padding: 6px 8px;
          border-radius: 8px;
          min-width: 32px;
        }
        .bnx-cal .react-calendar__navigation button:hover {
          background: #f1f5f9;
        }
        .bnx-cal .react-calendar__navigation button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .bnx-cal .react-calendar__month-view__weekdays {
          text-align: center;
          margin-bottom: 4px;
        }
        .bnx-cal .react-calendar__month-view__weekdays__weekday {
          padding: 6px 0;
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .bnx-cal .react-calendar__month-view__weekdays__weekday abbr {
          text-decoration: none;
        }
        .bnx-cal .react-calendar__tile {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 4px;
          border-radius: 8px;
          font-size: 13px;
          color: #334155;
          transition: background 0.15s;
          line-height: 1.4;
        }
        .bnx-cal .react-calendar__tile:hover {
          background: #eff6ff;
          color: #3B5BDB;
        }
        .bnx-cal .react-calendar__tile--now {
          background: #eff6ff;
          color: #3B5BDB;
          font-weight: 700;
        }
        .bnx-cal .react-calendar__tile--active,
        .bnx-cal .react-calendar__tile--active:hover {
          background: #3B5BDB !important;
          color: #fff !important;
          font-weight: 700;
        }
        .bnx-cal .react-calendar__tile--active .w-1\\.5 {
          background: rgba(255,255,255,0.8) !important;
        }
        .bnx-cal .react-calendar__month-view__days__day--neighboringMonth {
          color: #cbd5e1;
        }
        .bnx-cal .react-calendar__navigation__label {
          flex-grow: 1;
          text-align: center;
          font-size: 15px !important;
        }
      `}</style>

      <div className="flex-1 overflow-y-auto bg-[#F8FAFC] p-4 md:p-8">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-900">Calendar</h1>
              <p className="text-slate-500 text-sm mt-0.5">Schedule and manage your meetings</p>
            </div>
            <Button onClick={() => setShowModal(true)}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Schedule Meeting
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">

            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 md:p-6 bnx-cal">
                <ReactCalendar
                  value={selectedDate}
                  onChange={setSelectedDate}
                  tileContent={tileContent}
                  tileClassName={tileClassName}
                  locale="en-US"
                />
              </div>

              <div className="mt-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 md:p-5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-semibold text-slate-900 text-sm md:text-base">
                    {formatDate(selectedDate)}
                  </h2>
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-xs text-[#3B5BDB] hover:underline font-medium"
                  >
                    + Add meeting
                  </button>
                </div>

                {selectedMeetings.length === 0 ? (
                  <div className="py-6 text-center">
                    <span className="text-3xl block mb-2">📅</span>
                    <p className="text-sm text-slate-400">No meetings on this day</p>
                    <button
                      onClick={() => setShowModal(true)}
                      className="mt-2 text-sm text-[#3B5BDB] hover:underline"
                    >
                      Schedule one →
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {selectedMeetings.map(m => (
                      <div key={m.id} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group">
                        <div className="w-1 self-stretch rounded-full bg-[#3B5BDB] flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 truncate">{m.title}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <Avatar name={m.with} size="xs" />
                            <p className="text-xs text-slate-500 truncate">{m.with}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs font-medium text-slate-700">{formatTime(m.date)}</p>
                          <p className="text-xs text-slate-400">{m.duration}min</p>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Badge color={TYPE_COLORS[m.type] || 'gray'} size="xs">{m.type}</Badge>
                          <button
                            onClick={() => handleDelete(m.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 text-slate-300 hover:text-red-400"
                            title="Delete meeting"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 md:p-5">
                <h2 className="font-semibold text-slate-900 mb-4 text-sm md:text-base">Upcoming Meetings</h2>

                {upcomingMeetings.length === 0 ? (
                  <p className="text-sm text-slate-400 py-4 text-center">No upcoming meetings</p>
                ) : (
                  <div className="space-y-3">
                    {upcomingMeetings.map(m => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedDate(new Date(m.date.getFullYear(), m.date.getMonth(), m.date.getDate()))}
                        className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                      >
                        <div className="flex items-start justify-between mb-1.5">
                          <p className="text-sm font-semibold text-slate-900 leading-tight">{m.title}</p>
                          <Badge color={m.status === 'confirmed' ? 'green' : 'yellow'} size="xs">{m.status}</Badge>
                        </div>
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Avatar name={m.with} size="xs" />
                          <p className="text-xs text-slate-500">{m.with}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-slate-400">
                            {m.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {formatTime(m.date)}
                          </p>
                          <Badge color={TYPE_COLORS[m.type] || 'gray'} size="xs">{m.type}</Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                  {[
                    { label: 'This week', value: meetings.filter(m => { const d = m.date; const start = new Date(2026, 5, 8); const end = new Date(2026, 5, 14); return d >= start && d <= end; }).length },
                    { label: 'This month', value: meetings.filter(m => m.date.getMonth() === today.getMonth()).length },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-slate-50 rounded-xl p-3 text-center">
                      <p className="text-xl font-bold text-[#3B5BDB]">{value}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Schedule Meeting</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{formatDate(selectedDate)}</p>
                </div>
                <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1.5">Meeting Title *</label>
                  <input
                    type="text"
                    placeholder="e.g. Investment Discussion"
                    value={newMeeting.title}
                    onChange={e => { setNewMeeting(p => ({ ...p, title: e.target.value })); setErrors(p => ({ ...p, title: '' })); }}
                    className={`w-full border ${errors.title ? 'border-red-400 bg-red-50' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B5BDB]/20 focus:border-[#3B5BDB]`}
                  />
                  {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1.5">With *</label>
                  <input
                    type="text"
                    placeholder="Person's name"
                    value={newMeeting.with}
                    onChange={e => { setNewMeeting(p => ({ ...p, with: e.target.value })); setErrors(p => ({ ...p, with: '' })); }}
                    className={`w-full border ${errors.with ? 'border-red-400 bg-red-50' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B5BDB]/20 focus:border-[#3B5BDB]`}
                  />
                  {errors.with && <p className="text-xs text-red-500 mt-1">{errors.with}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">Time</label>
                    <input
                      type="time"
                      value={newMeeting.time}
                      onChange={e => setNewMeeting(p => ({ ...p, time: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B5BDB]/20 focus:border-[#3B5BDB]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">Duration (min)</label>
                    <select
                      value={newMeeting.duration}
                      onChange={e => setNewMeeting(p => ({ ...p, duration: Number(e.target.value) }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B5BDB]/20"
                    >
                      {[15, 30, 45, 60, 90, 120].map(d => <option key={d} value={d}>{d} min</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1.5">Meeting Type</label>
                  <div className="flex gap-2">
                    {['Video Call', 'Phone', 'In Person'].map(t => (
                      <button
                        key={t}
                        onClick={() => setNewMeeting(p => ({ ...p, type: t }))}
                        className={`flex-1 py-2 px-2 rounded-xl text-xs font-medium border transition-all ${
                          newMeeting.type === t
                            ? 'bg-[#3B5BDB] text-white border-[#3B5BDB]'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {t === 'Video Call' ? '📹' : t === 'Phone' ? '📞' : '🤝'} {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <Button variant="secondary" onClick={() => { setShowModal(false); setErrors({}); }}>Cancel</Button>
                <Button onClick={handleAddMeeting}>Schedule Meeting</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
