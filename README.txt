MUBARAK & MILLICENT WEDDING WEBSITE
===================================

FILES
-----
index.html   Main website
style.css    Design and responsive layout
script.js    Live countdown, mobile menu and WhatsApp RSVP
images/      Add your own photos here

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
   Open script.js in a text editor.
   Find:
     const RSVP_WHATSAPP_NUMBER = "233000000000";
   Replace the example with your real Ghana number in international format,
   digits only, without + or spaces. Example format: 233XXXXXXXXX.
   Save the file and redeploy the folder to Netlify.

B. Ceremony countdown times
   The two countdowns currently target 10:00 AM Ghana time (GMT) on
   8 January 2027 and 9 January 2027. This is a temporary setting because
   ceremony times have not yet been supplied.
   In index.html, find data-date="2027-01-08T10:00:00+00:00" and
   data-date="2027-01-09T10:00:00+00:00". Change 10:00:00 to the confirmed
   local time in 24-hour format. Ghana is GMT (UTC+00:00).

C. Add your photographs
   Put your photo files inside the images folder, for example:
     images/couple-main.jpg
     images/gallery-1.jpg
     images/gallery-2.jpg
     images/gallery-3.jpg
   The current page has elegant photo placeholders rather than actual
   personal photographs. To display your images, edit index.html and
   replace the placeholder blocks with image elements, for example:
     <img src="images/couple-main.jpg" alt="Mubarak and Millicent">
   You can send the photos and I can update the website files for you.

D. Venue addresses and dress code
   Edit the relevant "To be announced" text in index.html when you have
   confirmed the church, reception and traditional wedding venue addresses,
   directions and guest dress code.

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
