import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <div>
        <h3>Greetings, brave visitor!</h3>

<p>Welcome to the enchanted realm of Thaleia Vavanou.
Feel free to use, modify, and adore my creations, just remember to credit the mystical coder behind the magic.
A heartfelt 'Thank You' to mentors, peers, and family who shaped my coding journey. You're the unsung heroes!</p>
<p>My website may use cookies, but they're not the delicious kind. They're gluten-free and GDPR-compliant.
Enjoy my digital wonderland, and let your coding be joyful, laughter-filled, and bug-free!</p>

<p>Yours magically,</p>

<p>Thaleia Vavanou<br />
Mistress of Code, Conqueror of Bugs</p>
        </div>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Privacy Policy</h2>
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;