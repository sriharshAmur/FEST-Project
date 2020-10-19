# FEST-Project
5 Assignments had to be done and uploaded in order to qualify for a job in FEST

# Element - 1 : Loading Page
For a Loading Page, I used simple HTML and CSS with CSS animations. 

# Element - 2 : HomePage
For the homepage, I've mostly used HTML and CSS. The navigation bar is done using flexbox as it is simple and gets the job done. The rest of the sections are also made from flexbox, for example the explore section, the features section, the salary section and the blog section have all been made with flexbox. For the Hiring section which contains logos of companies that have been top hiring companies, I've made use of a external JS library called Slick.js (https://kenwheeler.github.io/slick/). It's easy to use and is light weight. THe end product looked quite nice. For the Break points, I've used an open source library called include-media (https://github.com/eduardoboucas/include-media). This helped make the breaking points easy to remember and it also had handy functions to set the media query (for example, @include media(">phone")). For the animations, I've used a library called AOS.js (https://github.com/michalsnik/aos). This made using animations very simple as I just had to add a class name to elements to perform animations. 

# Element - 3 : Login
For the Login Page, I've again used plain HTML and CSS with a bit of JS to have popups. The website contains Google Sign in facility but I wasn't able to work on the authentication part due to the time limit. But if there was time, I would have made a database to store user's details like their email address, hashed and salted password and/or google account token ID with other details. I have learnt the spring framework in Module 4 to interact with the database, so I don't see any problems occuring by using the same framework to enable the back end functionality of the website. 
A few more things could be improved. More 3rd party authentication services could be used like linkedin or facebook. The design can be a bit more dynamic.

# Element - 4 : Portfolio
For the Portfolio, I've a mix of technologies. CSS grid and flexbox for the layouts and JS for editing the portfolio contents. The second navigation bar is again made using flexbox and is fully responsive. By clicking the edit button in it, a form opens where the details of the portfolio could be typed. The portfolio itself contains about me, skills and slideshow sections. The skills sections contains a grid view of the skills a person knows which is visually appealing. For the slideshow, this time I've used another library called Flickity (https://github.com/metafizzy/flickity). It is very easy to use as only class names have to be added to the dic containing the images in order for the images to be viewed as a slideshow. 
Things to improve: the form is very basic in design, the layout could be imrpoved. More animaitons can be added to the pictures and cards in order to make it look fluid. Also, if there was more time, I've would added these details into the database. As of now, all images and texts are locally stored in the system.

# Element - 5 : Job Search Platform
For this page, I've used data attributes to filter through the job listing. The data attributes cantains various attributes so that search could be as thorough as possible. Another way of implementing this could be by using fetch API. Using tools like https://jsonplaceholder.typicode.com/ instead of a complete back end facility, fetch API calls can be implemented but under the time pressure this was not possible.

# Conclusion
Overall, I've used various languages and light weight libraries to create this website. I've used scss instead of writing css directly to make the coding process faster. I made common css files for pages that share commonm styles like that for the navigation or footer. I've used VS Code to build the website. 
