import React from "react";
import "./Contacts.css"
import Title from "../Title";

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const {status} = this.state;
        return (
            <section className="contact-page">
                <article className="contact-form">
                    <Title title="get in touch" />
                    <form
                        onSubmit={this.submitForm}
                        action="https://formspree.io/mnqgeayw"
                        method="POST"
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                className="form-control"
                            />
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="form-control"
                            />
                            <input
                                type="number"
                                placeholder="phone number"
                                name="phoneNumber"
                                className="form-control"
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="message"
                                className="form-control"
                            ></textarea>
                        </div>
                        {status === "SUCCESS" ? <p>Thanks!</p> : <button type="submit" className="submit-btn btn">
                            submit here
                        </button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </form>
                </article>
            </section>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({status: "SUCCESS"});
            } else {
                this.setState({status: "ERROR"});
            }
        };
        xhr.send(data);
    }
}