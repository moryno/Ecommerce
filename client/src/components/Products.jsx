import styled from "styled-components"
import { Product } from "./Product"
import {useState, useEffect} from "react"
import axios from "axios";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Products = ({cat, filters, sort}) => {
  const [products, setProducts] =useState([]);
  const [filteredProducts, setFilteredProducts] =useState([]);

  // GET PRODUCTS BY CATEGOTY
  useEffect(()=>{
      const getProducts = async ()=>{
        try{
          const {data} = await axios.get(
            cat
            ? `http://localhost:5000/api/products?category=${cat}`
             : "http://localhost:5000/api/products"
             );
          setProducts(data);
        }
        catch(err){
          console.log(err);
        }
      }
      getProducts();
  }, [cat]);

// GET FILTERED PRODUCTS
useEffect(()=>{
  cat && setFilteredProducts(
     products.filter((item)=>
       Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
       )
     )
  );
}, [cat, filters, products]);

// SORT ITEMS
useEffect(()=>{
  if(sort === "newest"){
    setFilteredProducts(prev=>
      [...prev].sort((a,b)=> a.createdAt - b.createdAt)
      );
  }
  else if( sort === "asc"){
    setFilteredProducts(prev=>
      [...prev].sort((a,b)=> a.price - b.price)
      );
  }
  else{
    setFilteredProducts(prev=>
      [...prev].sort((a,b)=> b.price - a.price)
      );
  }
}, [sort]); 

  return (
    <Container>
        {cat
        ? filteredProducts.map(item=>(
            <Product item={item} key={item.id} />))
        : products.slice(0,8).map(item=>(
            <Product item={item} key={item.id} />)
        )}
    </Container>
  )
}
