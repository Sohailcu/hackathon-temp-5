import React from 'react'
import NavbarProduct from '../components/productList-Components/AnnoucementBarProduct'
import HeaderProduct from '../components/productList-Components/HeaderProduct'
import Footer from '../components/footer'
import ProductPage from '../components/productList-Components/productpage'
import ItemList from '../components/productList-Components/ProductsItemList'

function ProductList() {
  return (
    <div>
      <NavbarProduct/>
      <HeaderProduct/>
      <ProductPage/>
      <Footer />
     <ItemList/>
    </div>
  )
}

export default ProductList
