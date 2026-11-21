MUBARAK & MILLICENT WEDDING WEBSITE
===================================

FILES
-----
index.html   Main website
style.css    Design and responsive layout
script.js    Live countdown, mobile menu and slideshow controls
Highlights/  Photos used on the invitation
Throwbacks/  Photos used in the Throwback Pictures card

HOW TO PREVIEW
--------------
Open index.html in a web browser. The countdowns run automatically.
The website uses Google Fonts when internet access is available; it has
fallback fonts if those fonts cannot load.

PUBLISH ON NETLIFY (FREE)
-------------------------
1. Extract/unzip this folder on your computer.
2. Go to https://app.netlify.com/signup and create/sign in to your account.
3. In Netlify, choose Add new project / Add new site, then Deploy manually
   (the wording may vary).
4. Drag the extracted folder "mubarak-millicent-wedding-website" into the
   Netlify deploy area. Upload the folder contents (the index.html file
   must be at the top level).
5. Netlify will publish the site and give you an address ending in
   .netlify.app. You can change the site name in Site configuration /
   Domain management if the name you want is available.

IMPORTANT: Do not upload the ZIP file if the upload screen asks for a
folder of site files. Extract it first and upload the extracted folder.

PERSONALISE BEFORE SHARING
--------------------------
A. WhatsApp RSVP number
   The RSVP form opens WhatsApp for 0549698459. To change it, update
   the form action and fallback link in index.html with the international
   number without +.

B. Ceremony countdown times
   The countdowns target 10:00 AM on 8 January 2027 and 1:00 PM on
   9 January 2027 in Ghana local time (GMT).
   To change a countdown, edit its data-date attribute in index.html.
   Use 24-hour time with the UTC offset +00:00.

C. Change the photographs
   The event, story, gallery and slideshow photos are set in index.html using files
   in Highlights/. The main background is set in style.css.

D. Venue and reception details
   Update the venue and directions section in index.html when more details
   are available.

REDEPLOY AFTER CHANGES
----------------------
Whenever you update the files, upload the updated site folder to the same
Netlify site using the manual deploy area. Your public URL stays the same.

NOTES
-----
- This is a static website; hosting can be free on Netlify's Free plan within
  its current usage limits.
- WhatsApp RSVP opens a pre-filled WhatsApp message. It does not store
  guest responses in a database.
- The countdown is real and updates every second in the visitor's browser.
- The website is mobile responsive.
