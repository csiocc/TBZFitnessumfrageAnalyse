const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-lg">
        <p className="text-slate-200 font-semibold mb-1">{label}</p>
        <p className="text-emerald-400 font-bold">
          {payload[0].value} <span className="text-xs text-slate-400 ml-1">Stimmen</span>
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
