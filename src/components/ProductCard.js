import React from 'react';
export default function ProductCard({product}){
  return (
    <article className="product-card" role="listitem" style={{
      background:'#fff',padding:12,borderRadius:8,boxShadow:'0 1px 3px rgba(0,0,0,0.04)',display:'flex',flexDirection:'column',gap:8
    }}>
      <img src={product.image} alt={product.title} style={{height:160,objectFit:'contain',alignSelf:'center'}} />
      <h3 style={{fontSize:15,margin:'4px 0'}}>{product.title}</h3>
      <p style={{margin:0,color:'var(--muted)',fontSize:13}}>{product.category}</p>
      <div style={{marginTop:'auto',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <strong>${product.price.toFixed(2)}</strong>
        <button aria-label={`Add ${product.title} to cart`} style={{padding:'8px 10px',borderRadius:6,border:'none',background:'var(--accent)',color:'#fff'}}>Add</button>
      </div>
    </article>
  );
}
