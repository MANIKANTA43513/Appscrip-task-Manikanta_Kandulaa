import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import './App.css';

export default function App(){
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data=>{
        setProducts(data);
        setFiltered(data);
        const cats = Array.from(new Set(data.map(p=>p.category)));
        setCategories(cats);
      })
      .catch(err=>console.error('API error',err));
  },[]);

  useEffect(()=>{
    let out = products;
    if(selectedCategory !== 'all'){
      out = out.filter(p=>p.category===selectedCategory);
    }
    if(search.trim()){
      const q = search.toLowerCase();
      out = out.filter(p=> p.title.toLowerCase().includes(q) || (p.description||'').toLowerCase().includes(q));
    }
    setFiltered(out);
  },[products, selectedCategory, search]);

  return (
    <div className="app-root">
      <Header onSearch={setSearch} />
      <main className="container">
        <aside className="sidebar" aria-label="Filters">
          <Filters
            categories={categories}
            selected={selectedCategory}
            onChangeCategory={setSelectedCategory}
          />
        </aside>
        <section className="content" aria-label="Products">
          <h1 className="page-title">Products</h1>
          <p className="results">{filtered.length} results</p>
          <div className="product-grid" role="list">
            {filtered.map(product=>(
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p>Made for Appscrip assignment — Manikandan</p>
      </footer>
    </div>
  );
}
