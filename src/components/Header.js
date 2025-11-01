import React from 'react';
export default function Header({onSearch=()=>{}}){
  return (
    <header style={{background:'#fff',padding:'12px 0',boxShadow:'0 1px 2px rgba(0,0,0,0.04)'}}>
      <div style={{maxWidth:1100,margin:'0 auto',display:'flex',alignItems:'center',gap:16,padding:'0 16px'}}>
        <div style={{fontWeight:700,color:'var(--accent)'}}>appscrip</div>
        <nav style={{display:'flex',gap:12,alignItems:'center',flex:1}}>
          <a href="#" aria-current="page">Home</a>
          <a href="#">Shop</a>
        </nav>
        <div style={{minWidth:220}}>
          <label style={{display:'block',fontSize:12,color:'var(--muted)'}}>Search</label>
          <input
            aria-label="Search products"
            onChange={(e)=>onSearch(e.target.value)}
            placeholder="Search products by title..."
            style={{width:'100%',padding:'8px',borderRadius:6,border:'1px solid #e5e7eb'}}
          />
        </div>
      </div>
    </header>
  );
}
