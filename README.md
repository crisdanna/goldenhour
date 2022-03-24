# Schwester

This application is composed by 4 services and it stores its data in a PostgreSQL database. You can find more details on the services inside the backend folder.

In order to get everything running, from the root of the project execute:
docker-compose up -d

You might need to install Docker Compose. If that's the case, run the following command: docker-compose pull

All images will be created and the containers started.
To access the application, just open http://localhost:8080/schwester

The database is pre-loaded with some test data and the docker compose is responsible for starting the DB and running the queries.

If you want to deploy the services to Kubernetes, you need to push the docker images and from each service root directory run the following command:
kubectl apply -f .
