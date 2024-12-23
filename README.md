# cs465-fullstack
CS-465 Full Stack Development with MEAN

<H3>Architecture</H3>
<li>Compare and contrast the types of frontend development you used in your full stack project, including Express, HTML, JavaScript, and the single-page application (SPA).</li>
<br>
<p>We used Express and JavaScript to create the routes and controllers for the application to handle the different requests from the browser. Express then either retrieved the static HTML page or generateed a requested page by using a handlebars template that we created which used loops and information from the database instead. Angular was used to create our SPA. The SPA worked differently in that it was loaded all at once for the single page, meaning that everything code wise was handled in the browser from there on out. If we needed anything from the backend it was just to get data from the database in the form of JSON files.</p>
<br>
<li>Why did the backend use a NoSQL MongoDB database?</li>
<p>Simply put since we were using JSON formatting for our data to be transfered back and forth anyway, using MongoDB (which stores its data in JSON format) saves us a lot of time and processing room since we don't need to convert the data storage format every time we make a request.</p>
<br>
<H3>Functionality</H3>
<li>How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?</li>
<br>
<p>JSON is a data format, whereas JavaScript is a programming language that uses JSON to manipulate data. The reason that JSON connects the frontend and backend is because it is the format that the data needs to be sent in for both sides to communicate. When the frontend sends a request to the backend the data needs to be in JSON when it is returned so the frontend knows what to do with it.</p>
<br>
<li>Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.</li>
<br>
<p>As stated earlier, we refactored some of the static HTML that was used to load in the different trips on the Express side of things by using an Handlebars template the used information from the database instead. This does two things for us, it makes it easier to update information and have it displayed without having to alter the HTML file and it also gits rid of a bunch of the HTML in the first place, taking 200+ lines of code down to about 30-50 lines.</p>
<br>
<h3>Testing</h3>
<li>Explain your understanding of methods, endpoints, and security in a full stack application.</li>
<br>
<p>HTTP methods are different types of interactions that a client can have with the server. Among these methods there are GET, POST, PUT, and DELETE. The API endpoints are how the client sends these different requests to the server by using HTTP. Security is important to make sure that the person sending the HTTP requests are authorized to do so and that the requests are valid.</p>
<H3>Reflection</H3>
<li>How has this course helped you in reaching your professional goals?</li>
<br>
<p>I honestly didn't see myself wanting to do web-development before this class but it was a lot of fun. As frustrating as it became quite a few times I really enjoy the moments where you figure something out and everything slides back into place to make the website work again. This class also deepend my understanding of how you tie all the pieces of a project together, i.e., frontend, backend, and database. I think this new understanding will help me in the coming year when I am finished with schooling and trying to seek employment in the technology industry.</p>
