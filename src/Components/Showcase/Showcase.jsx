import React from 'react'
import "./Showcase.scss"


export default function Showcase() {
    return (
        <section id='showcase-container'>
            <div className="showcase">
                <div className="showcase-image"></div>
                <div className="showcase-content">
                    <h2>Everydays: The First 5000 Days</h2>
                    <p>It invites you to take a closer look at the mosaic of work and discover all its secrets.
                        It is currently priced at $63 million. Expensive? We know!
                        Rent this NFT for $1000 per day on Vindepo and get VIP access to exclusive events.</p>
                </div>
            </div>

            <div className="showcase">
                <div className="showcase-content">
                    <h2>Clock:</h2>
                    <p>This NFT depicts a timer that counts the number of days Assange has spent in prison.
                        It is currently priced at $52.7 million.
                        Rent this NFT for $600 per day on Vindepo to get access into exclusively rooms.</p>
                </div>
                <div className="showcase-image"></div>
            </div>

            <div className="showcase">
                <div className="showcase-image three"></div>
                <div className="showcase-content">
                    <h2>CryptoPunk #5822:</h2>
                    <p>#5822 is one of the only nine aliens in the collection. The NFT depicts an alien-style punk featuring a blue bandana.
                        It is currently worth $23 million!
                        Renting this for $450 per day on Vindepo gets you access to clubs where pricey NFT is the gate pass. </p>
                </div>
            </div>
        </section>
    )
}
