import React from 'react';
export default function Filters({categories=[], selected='all', onChangeCategory=()=>{}}){
  return (
    <div>
      <h2 style={{marginTop:0,fontSize:16}}>Filters</h2>
      <div>
        <label>
          <input type="radio" name="cat" value="all" checked={selected==='all'} onChange={()=>onChangeCategory('all')} />
          <span style={{marginLeft:8}}>All</span>
        </label>
      </div>
      <div style={{marginTop:8}}>
        {categories.map(cat=>(
          <div key={cat} style={{marginTop:6}}>
            <label>
              <input type="radio" name="cat" value={cat} checked={selected===cat} onChange={()=>onChangeCategory(cat)} />
              <span style={{marginLeft:8,textTransform:'capitalize'}}>{cat}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
