CLIENT SERVER ARCHITECTURE
Client/server architecture is a computing model in which the server hosts, delivers and manages most of the resources and services to be consumed by the client. This type of architecture has one or more client computers connected to a central server over a network or internet connection. This system shares computing resources.

Client/server architecture is also known as a networking computing model or client/server network because all the requests and services are delivered over a network.

EXAMPLE:
When a bank customer accesses online banking services with a web browser (the client), the client initiates a request to the bank's web server. The customer's login credentials may be stored in a database, and the web server accesses the database server as a client. An application server interprets the returned data by applying the bank's business logic, and provides the output to the web server. Finally, the web server returns the result to the client web browser for display.

In each step of this sequence of client–server message exchanges, a computer processes a request and returns data. This is the request-response messaging pattern. When all the requests are met, the sequence is complete and the web browser presents the data to the customer.

HOW REQUESTS ARE SERVED:
When you enter something like Google.com the request goes to one of many special computers on the Internet known as Domain Name Servers (DNS). All these requests are routed through various routers and switches. The domain name servers keep tables of machine names and their IP addresses, so when you type in Google.com it gets translated into a number, which identifies the computers that serve the Google Website to you.

When you want to view any page on the Web, you must initiate the activity by requesting a page using your browser. The browser asks a domain name server to translate the domain name you requested into an IP address. The browser then sends a request to that server for the page you want, using a standard called Hypertext Transfer Protocol or HTTP.

The server should constantly be connected to the Internet, ready to serve pages to visitors. When it receives a request, it looks for the requested document and returns it to the Web browser. When a request is made, the server usually logs the client's IP address, the document requested, and the date and time it was requested. This information varies server to server.

An average Web page actually requires the Web browser to request more than one file from the Web server and not just the HTML / XHTML page, but also any images, style sheets, and other resources used in the web page. Each of these files including the main page needs a URL to identify each item. Then each item is sent by the Web server to the Web browser and Web browser collects all this information and displays them in the form of Web page.

STEPS OF CLIENT-SERVER INTERACTION:
A user enters a URL into a browser (for example, Google.com. This request is passed to a domain name server.

The domain name server returns an IP address for the server that hosts the Website (for example, 68.178.157.132).

The browser requests the page from the Web server using the IP address specified by the domain name server.

The Web server returns the page to the IP address specified by the browser requesting the page. The page may also contain links to other files on the same server, such as images, which the browser will also request.

The browser collects all the information and displays to your computer in the form of Web page.