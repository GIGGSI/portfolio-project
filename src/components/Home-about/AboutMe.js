import React, {Component} from 'react';

class AboutMe extends Component {

    render() {
        return (
            <section className="section about">
                <div className="section-center about-center">

                    <article className="about-img">
                        <img
                            src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/83873297_10206873854881370_5667927010337357824_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=rkAOE0NlqYsAX9Wynwg&_nc_ht=scontent-sof1-1.xx&oh=3dca9265008b4a631db7f599b7868c01&oe=5F6027EF"
                            className="hero-photo"
                            alt="about img"
                        />
                    </article>

                    <article className="about-info about-text">

                        <div className="section-title about-title">
                            <h2>about</h2>
                            <div className="underline"></div>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
                            eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
                            reiciendis possimus rerum omnis recusandae molestias error
                            consequuntur, doloribus inventore reprehenderit officiis. Dolore
                            aut, repellendus eius fugiat numquam cumque.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
                            eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
                            reiciendis possimus rerum omnis recusandae molestias error
                            consequuntur, doloribus inventore reprehenderit officiis. Dolore
                            aut, repellendus eius fugiat numquam cumque.
                        </p>
                        <a href="/about" className="btn">about me</a>
                    </article>
                </div>
            </section>
        )

    }


}

export default