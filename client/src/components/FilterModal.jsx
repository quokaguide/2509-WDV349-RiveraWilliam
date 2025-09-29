import { useEffect } from "react";

export default function FilterModal({ onClose }) {
  useEffect(() => {
    const onKey = e => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const overlay = { position:"fixed", inset:0, background:"rgba(0,0,0,0.4)" };
  const panel = { position:"fixed", left:"50%", top:"20%", transform:"translateX(-50%)",
                  background:"#fff", width:320, borderRadius:12, padding:16 };

  return (
    <div style={overlay} onClick={onClose}>
      <div style={panel} onClick={e=>e.stopPropagation()}>
        <h3>Filters</h3>
        <div style={{display:"flex", gap:8, flexWrap:"wrap", margin:"8px 0 16px"}}>
          {["Distance","Clarity","Amenities","View"].map(x =>
            <button key={x} style={{padding:"6px 10px", border:"1px solid #ccc", borderRadius:16}}>{x}</button>
          )}
        </div>
        <div style={{display:"flex", gap:8, justifyContent:"flex-end"}}>
          <button onClick={onClose}>Reset</button>
          <button onClick={onClose} style={{padding:"6px 12px"}}>Apply</button>
        </div>
      </div>
    </div>
  );
}
