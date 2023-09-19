import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

function Home() {
    return (
        <>
        <div className='home' id='home  45`'>
            <main>
                <h1>React Star</h1>
                <p>Ready to serve my self with React</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphic" />

            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, amet repellat pariatur iste officiis saepe, dolorem ex minus nam eum voluptatibus quibusdam voluptate, suscipit reprehenderit qui tenetur. Aperiam, atque molestiae!
                </p>
            </div>
        </div>


        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio exercitationem asperiores mollitia! Expedita quasi quis, consequuntur aliquam quas voluptatum mollitia veritatis adipisci, corrupti praesentium vitae illum fuga laborum laboriosam quisquam in ducimus amet nobis tempora. Porro numquam vero hic esse maiores? Possimus consequatur unde quidem. Commodi, saepe alias cupiditate magnam esse quo voluptates! Ab nam perspiciatis iusto tempore magni, neque alias, pariatur distinctio, placeat recusandae tempora explicabo nulla dicta exercitationem doloribus saepe. Veritatis commodi, dolores architecto tenetur, eum, exercitationem recusandae hic?</p>
            </div>
        </div>


        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay:"0.3s"}}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>

                    <div style={{animationDelay:"0.5s"}}>
                        <AiFillAmazonCircle/>
                        <p>Amazone</p>
                    </div>
                    <div style={{animationDelay:"0.7s"}}>
                        <AiFillYoutube/>
                        <p>YouTube</p>
                    </div>
                    <div style={{animationDelay:"1s"}}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
        </>
    )
}

export default Home