import { useState, useRef } from 'react';
import Button from '../../ui/Button';
import Badge from '../../ui/Badge';
import Avatar from '../../ui/Avatar';

const initialDocs = [
  { id: 1, name: 'TechWave AI – Pitch Deck.pdf', type: 'PDF', size: '2.4 MB', uploadedBy: 'Sarah Johnson', date: '2026-06-08', shared: ['Michael Rodriguez', 'Jennifer Lee'], category: 'Pitch Deck' },
  { id: 2, name: 'Financial Projections 2026.xlsx', type: 'Excel', size: '1.1 MB', uploadedBy: 'Sarah Johnson', date: '2026-06-05', shared: ['Michael Rodriguez'], category: 'Financials' },
  { id: 3, name: 'NDA Agreement – Rodriguez.pdf', type: 'PDF', size: '0.3 MB', uploadedBy: 'Michael Rodriguez', date: '2026-06-01', shared: ['Sarah Johnson'], category: 'Legal' },
  { id: 4, name: 'Product Roadmap Q3 2026.docx', type: 'Word', size: '0.8 MB', uploadedBy: 'Sarah Johnson', date: '2026-05-28', shared: [], category: 'Product' },
];

const typeColors = { PDF: 'red', Excel: 'green', Word: 'blue', Image: 'purple', Other: 'gray' };
const categoryColors = { 'Pitch Deck': 'blue', Financials: 'green', Legal: 'orange', Product: 'purple' };

const fileIcons = { PDF: '📄', Excel: '📊', Word: '📝', Image: '🖼', Other: '📁' };

export default function DocumentChamber() {
  const [docs, setDocs] = useState(initialDocs);
  const [filter, setFilter] = useState('All');
  const [shareModal, setShareModal] = useState(null);
  const [shareWith, setShareWith] = useState('');
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef();

  const categories = ['All', ...new Set(initialDocs.map(d => d.category))];

  const filtered = filter === 'All' ? docs : docs.filter(d => d.category === filter);

  const handleUpload = (files) => {
    const newDocs = Array.from(files).map(f => ({
      id: Date.now() + Math.random(),
      name: f.name,
      type: f.name.endsWith('.pdf') ? 'PDF' : f.name.endsWith('.xlsx') ? 'Excel' : f.name.endsWith('.docx') ? 'Word' : 'Other',
      size: (f.size / 1024 / 1024).toFixed(1) + ' MB',
      uploadedBy: 'You',
      date: new Date().toISOString().slice(0, 10),
      shared: [],
      category: 'Other',
    }));
    setDocs(p => [...newDocs, ...p]);
  };

  const handleShare = () => {
    if (!shareWith.trim()) return;
    setDocs(p => p.map(d => d.id === shareModal.id ? { ...d, shared: [...d.shared, shareWith] } : d));
    setShareWith('');
    setShareModal(null);
  };

  const handleDelete = (id) => setDocs(p => p.filter(d => d.id !== id));

  return (
    <div className="flex-1 overflow-y-auto bg-[#F8FAFC] p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Document Chamber</h1>
            <p className="text-slate-500 text-sm mt-1">Securely share and manage documents with your connections</p>
          </div>
          <Button onClick={() => fileRef.current?.click()}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            Upload Document
          </Button>
          <input ref={fileRef} type="file" multiple className="hidden" onChange={e => handleUpload(e.target.files)} />
        </div>

        <div
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => { e.preventDefault(); setDragging(false); handleUpload(e.dataTransfer.files); }}
          className={`border-2 border-dashed rounded-xl p-8 text-center mb-6 transition-colors ${dragging ? 'border-[#3B5BDB] bg-blue-50' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
        >
          <p className="text-2xl mb-2">📂</p>
          <p className="text-sm font-medium text-slate-700">Drag & drop files here</p>
          <p className="text-xs text-slate-400 mt-1">or <button onClick={() => fileRef.current?.click()} className="text-[#3B5BDB] hover:underline">browse</button> to upload</p>
        </div>

        <div className="flex gap-2 mb-4">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filter === c ? 'bg-[#3B5BDB] text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>{c}</button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
          {filtered.length === 0 && <p className="p-6 text-center text-sm text-slate-400">No documents found</p>}
          {filtered.map(doc => (
            <div key={doc.id} className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors">
              <span className="text-2xl">{fileIcons[doc.type]}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">{doc.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge color={typeColors[doc.type] || 'gray'} size="xs">{doc.type}</Badge>
                  <Badge color={categoryColors[doc.category] || 'gray'} size="xs">{doc.category}</Badge>
                  <span className="text-xs text-slate-400">{doc.size}</span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs text-slate-400">{doc.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-slate-400">Shared with:</span>
                  {doc.shared.length === 0 ? (
                    <span className="text-xs text-slate-400">Only you</span>
                  ) : (
                    <div className="flex -space-x-1">
                      {doc.shared.slice(0, 3).map(name => <Avatar key={name} name={name} size="xs" />)}
                      {doc.shared.length > 3 && <span className="text-xs text-slate-500 ml-1">+{doc.shared.length - 3}</span>}
                    </div>
                  )}
                </div>
                <Button variant="outline" size="sm" onClick={() => setShareModal(doc)}>Share</Button>
                <Button variant="ghost" size="sm" onClick={() => handleDelete(doc.id)}>
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {shareModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
            <h3 className="font-semibold text-slate-900 mb-1">Share Document</h3>
            <p className="text-sm text-slate-500 mb-4 truncate">{shareModal.name}</p>
            <label className="text-sm font-medium text-slate-700 block mb-1">Share with (name)</label>
            <input value={shareWith} onChange={e => setShareWith(e.target.value)} placeholder="e.g. Robert Torres" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 mb-4" />
            {shareModal.shared.length > 0 && (
              <div className="mb-4">
                <p className="text-xs text-slate-400 mb-1">Already shared with:</p>
                <div className="flex flex-wrap gap-1">{shareModal.shared.map(n => <Badge key={n} color="blue" size="xs">{n}</Badge>)}</div>
              </div>
            )}
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setShareModal(null)}>Cancel</Button>
              <Button onClick={handleShare}>Share</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
