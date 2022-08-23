function HomePage() {
    return(
        <div>
            <div>
                <h1>CDI LLC - Technical Consultant - Software Engineering (Remote)</h1>
                <h2>August 2020 – Current</h2>
                <p>CDI is one of the country's top IT Consulting and Services firms in the country and was recently awarded 4 Industry Best Marks within 40 days from companies like Dell, Logic Monitor, Pure Storage and Rubrik</p>
                <ul>
                    <li>Spent time as a resident with one of CDI’s multinational Fortune 300 clients. Spearheading an effort that would
                        improve the deployment and delivery time of the clients production Virtual Machines from 14 days to less than an
                        hour, saving the company millions in operational costs</li>
                    <li> 
                        Effectively communicated with clients to understand needs, collaborated both internally and with clients to create
                        a proposal and delivered the solutions within deadlines
                    </li>
                    <li>
                        Collaborated with an Agile client helping them build reusable frontend components for a Flutter mobile app</li>
                    <li>
                        Built, tested, and deployed a python script to streamline the migration of data during a client’s acquisition of a smaller company by crawling and writing over 600,000 lines of data using the Google, SharePoint, and Confluence APIs</li>
                    <li>
                        Created customized Salesforce triggers, tests and UI components using the Apex language for clients based on needs           
                    </li>
                    <li>
                        Designed an ASP.NET CORE MVC application that calls the ServiceNow API to get, save, and analyze datasets in
                        order to deliver key business insights for the organization. Enabling leadership to make better informed decisions
                    </li>
                </ul>
            </div>
            <div>
                <h1>
                    Soccster
                </h1>
                <h2>
                    A full stack web application for soccer coaches to create, share and search drills using a drag and drop graphical
                    user interface
                </h2>
                <ul>
                    <li>
                        Designed a drag and drop GUI in JavaScript and Konva.js for users to create drills using various SVG shapes
                    </li>
                    <li> 
                        Built a backend API in Ruby on Rails using model/controller architecture with RESTful routes to transfer and save
                        data that is input via forms on the client side
                    </li>
                    <li>
                        Utilized Redux to create a global store for the application
                    </li>
                    <li>
                        Used Redux-Thunk middleware to utilize functions for GET and POST requests to the database
                    </li>
                    <li>
                        Created stateful React components in order to save and send canvas location data based on where elements are dragged and dropped                    
                    </li>
                    <li>
                        Utilized React-Router to be able to handle all routing on the client side
                    </li>
                    <li>
                        Built Active Record associations between models to be able to search for drills by category
                    </li>
                    <li>
                        Dockerized and utilized Travis-CI to create a CI/CD pipeline
                    </li>
                </ul>
            </div>
        </div>
        
    )
}

export default HomePage;