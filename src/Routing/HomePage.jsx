import React from 'react'
import Categories from '../Components/Categories/Categories'
import Features from '../Components/Features/Features'
import Landing from '../Components/Landing/Landing'
import Products from '../Components/Products/Products'
import SalesSection from '../Components/Sales/SalesSection'

export default function HomePage() {
    return (
        <>
            <Landing />
            <Categories />
            <SalesSection />
            <Products />
            <Features />
        </>
    )
}
