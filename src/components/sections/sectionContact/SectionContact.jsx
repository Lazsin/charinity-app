import './SectionContact.css';

export default function SectionContact() {
    return (
        <>
        <section className="contact-section">
        <div className="form-container">
            <h2>WRITE US</h2>
            <form>
                <div className="form-row">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="text" />
                    </div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" />
                </div>

                <div class="form-group">
                    <label>Message</label>
                    <input type="text" />
                </div>

                <div class="checkbox-group">
                    <input type="checkbox" id="subscribe" />
                    <label for="subscribe">Subscribe for our updates</label>
                </div>
                <button type="submit">Submit</button>

                <p className="privacy-note">*By clicking this button, you agree to our <a href="#">Privacy Policy</a></p>
            </form>
        </div>
        <div className="text-container">
            <h3>AND START YOUR PATH OF HARMONY WITH CHARINITY</h3>
        </div>
        </section>
        <section className="contact-section">
          <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" />
            </div>
            <div className="form-group">
                    <label>Email</label>
                    <input type="email" />
            </div>
            <button type="submit">Submit</button>
            <p className="privacy-note">*By clicking this button, you agree to our <a href="#">Privacy Policy</a></p>
          </form>
        </section>
        </>
)
}
