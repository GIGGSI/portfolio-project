import React, {Component} from "react"

// import sto from '../images/sto.jpg'

class Connect extends Component {
    render() {
        return (
            <section className="connect">
                <article className="connect-container">
                    <img
                        src="https://images.pexels.com/photos/207589/pexels-photo-207589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt='picture'/>

                </article>
                <div className="connect-banner">

                    <div className="section-title">
                        <h2>let's get in touch</h2>
                        <div className="underline"></div>
                    </div>
                    <p className="connect-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
                        perferendis exercitationem sit. Beatae eius commodi officiis rem
                        soluta ratione dignissimos quisquam tempore laudantium, porro vitae
                        cupiditate dicta magni quas corrupti aperiam, rerum minus odio totam
                        repellendus delectus nostrum veniam!
                    </p>
                    <a href="/contacts" className="btn">contact me</a>
                </div>
            </section>

        )
    }

}

export default Connect
