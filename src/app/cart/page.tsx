import React from 'react'
import NavbarProduct from '../components/cartPage-Components/AnnoucementBarProduct'
import HeaderProduct from '../components/cartPage-Components/HeaderProduct'
import CartItems from '../components/cartPage-Components/cartItems'
import ProductDisc from '../components/cartPage-Components/productDisc'
import BestSellerProduct from '../components/cartPage-Components/bestSellerProduct'
import Footer from '../components/footer'

function CartPage() {
  return (
    <div>
      <NavbarProduct/>
      <HeaderProduct/>
      <CartItems/>
      <ProductDisc/>
      <BestSellerProduct />.
      <Footer/>
    </div>
  )
}

export default CartPage
