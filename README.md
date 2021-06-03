
 # Chat Application 
 ## school project from Internet Application Design (CS 667), I'm looking to refactor and re-deploy soon! 
 
Requirements for project:
- Express back end with get/post endpoints
- Mongodb for storage
- Websocket
- React + Redux with routes
- Microserver architecture, gateway must only server to route requests, break up microservices by topic, ie user services, comment services… can be done with express or NGNIX
- redis for shared data
- Backend components must be dockerized and running in Docker swarm mode
- Node components can use either docker or pm2 (cluster)
- Use at least 1 kafka message topic to broadcast real time updates (can get extra credit with this)
- Bonus points for an electron port with some native functionality.
- Hopefully reverse proxy with NGNIX
