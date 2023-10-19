import React from 'react'
import "./Hero.scss"
export default function Hero() {
    return (
        <section id='hero-section'>
            <div className="container">
                <div className="hero-content">
                    <h1>What art piece do you want?</h1>
                    <p>NFTs are the future! And you can rent one for as long as you need, all within your budget.</p>
                    <div className="rent-nft">
                        <button>Rent your NFT</button>
                    </div>
                </div>
                <div className="hero-img">
                    <img src="asset/herobg.png" alt="" />
                </div>
            </div>
        </section>
    )
}
