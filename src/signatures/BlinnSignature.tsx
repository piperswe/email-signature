import * as React from "react";
import AllPositions from "../components/AllPositions";
import Base from "../components/Base";
import {
  blinn,
  cloudflare,
  freeSoftwareEnthusiast,
  lutris,
} from "../positions";

// My signature for my Blinn College Outlook email and eCampus email.
// When changing this, copy from signatures/blinn.preview.html, and paste into:
//  - Outlook
//    1. https://outlook.office.com/mail/options/mail/messageContent
//    2. paste in "Email signature"
//    3. "Save"
//  - eCampus
//    1. click name in top right corner
//    2. "Account Settings"
//    3. "Email" tab
//    4. "..." in "Email Signature" toolbar
//    5. "</>" in "Email Signature" toolbar's new second row
//    6. paste in "Source Code"
//    7. "Save"
//    8. "Save and Close"

export default function BlinnSignature() {
  return (
    <Base
      includeLegalName
      legalNameDisclaimer={
        "My government name is Zebulon, but changing that is a painful process and Blinn doesn't let me set a preferred name. I would appreciate if you refer to me as “Piper” unless you're talking to someone who only knows about me from records that say “Zebulon.”"
      }
    >
      <AllPositions
        positions={[freeSoftwareEnthusiast, blinn, cloudflare, lutris]}
      />
    </Base>
  );
}
