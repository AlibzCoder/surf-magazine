import contactImg from './assets/img/contacts.png'

const Contact = () => {
    return <div className="contact">

        <img src={contactImg} alt=""  />

        <div className="contact-content">
            <p className="uppercase">Our Camp</p>
            <div>
                <h1>CA 91932, USA</h1>
                <h1>Imperial Beach</h1>
                <h1>560 Silver Strand Blvd</h1>
            </div>
            <a className="uppercase underline" href="/">get in touch</a>
        </div>

    </div>
}

export default Contact;