'use client';
import { useState } from 'react';
export function Dashboard() {
 const [zoom, setZoom] = useState(false);
 return <><button className="dashboard" onClick={() => setZoom(true)} aria-label="Open command center preview">
  <div className="dash-top"><span><b className="live-dot" /> LIVE · PERIMETER 04</span><span>14:32:08 IST</span></div>
  <div className="camera-view"><img src="https://picsum.photos/seed/sentryx-border/1200/620" alt="Border surveillance camera preview" />
    <div className="grid-lines" /><div className="box human"><em>PERSON 98.4%</em></div><div className="box vehicle"><em>VEHICLE 96.1%</em></div><div className="fence-line">VIRTUAL FENCE · SECTOR A</div>
  </div><div className="dash-footer"><span>4 active feeds</span><span>THREAT LEVEL <b>LOW</b></span><span>Edge latency 42ms</span></div>
 </button>{zoom && <div className="lightbox" onClick={() => setZoom(false)}><div className="lightbox-card" onClick={e => e.stopPropagation()}><button onClick={() => setZoom(false)}>×</button><DashboardPreview /></div></div>}</>;
}
function DashboardPreview(){ return <div className="preview"><p className="eyebrow">Expanded live view</p><h3>Sector A · Camera 04</h3><img src="https://picsum.photos/seed/sentryx-border/1500/800" alt="Expanded surveillance feed" /></div> }
