export default function Badge({ children, color = 'blue', size = 'sm' }) {
  const colors = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    purple: 'bg-purple-100 text-purple-700',
    orange: 'bg-orange-100 text-orange-700',
    red: 'bg-red-100 text-red-700',
    gray: 'bg-slate-100 text-slate-600',
    teal: 'bg-teal-100 text-teal-700',
    pink: 'bg-pink-100 text-pink-700',
    yellow: 'bg-yellow-100 text-yellow-700',
  };
  const sizes = { xs: 'px-1.5 py-0.5 text-xs', sm: 'px-2.5 py-0.5 text-xs', md: 'px-3 py-1 text-sm' };
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${colors[color] || colors.blue} ${sizes[size]}`}>
      {children}
    </span>
  );
}
