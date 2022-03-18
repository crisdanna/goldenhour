# Golden Hour

This application is composed by 4 services and it stores its data in a PostgreSQL database.

In order to get everything running, from the root of the project execute:
docker-compose up -d

You might need to install Docker Compose. If that's the case, run the following command: docker-compose pull

All images will be created and the containers started.
To access the application, just open http://localhost:8080/goldenhour

The database is pre-loaded with some test data and the docker compose is responsible for starting the DB and running the queries.

If you want to deploy the services to Kubernetes, you need to push the docker images and from each service root directory run the following command:
kubectl apply -f .

Services:

symptom
- GET - http://localhost:8085/goldenhour/symptom/list - Get all symptoms with its scores

- GET - http://localhost:8085/goldenhour/symptom/{id} - Get a symptom's information by its ID

symptom duration
- GET - http://localhost:8085/goldenhour/symptom/duration/list - Get all possible values for the duration interval of a symptom

symptom location
- GET - http://localhost:8085/goldenhour/symptom/location/list - Get all possible values for the location of a symptom

symptom pain intensity
- GET - http://localhost:8085/goldenhour/symptom/intensity/list - Get all possible values for the pain intensity of a symptom

patient
- GET - http://localhost:8085/goldenhour/patient/{id} - Get a patient's personal information by his ID

questionnaire
- POST - http://localhost:8085/goldenhour/questionnaire - Save a questionnaire for a specific patient. JSON:

```
{"patient":{"id":1,"birthDate":"05/15/1983","addresses":[{"id":1}]},
 "age":38,
 "date":"02/10/2022",
 "time":"18:35",
 "items":[{"symptomId":1,
           "symptomScore":2,
           "locationId":2,
           "locationScore":1,
           "intensityId":2,
           "intensityScore":2,
           "durationId":1,
           "durationScore":1,
           "comments":""}]}
 ```

- GET - http://localhost:8085/goldenhour/questionnaire/{id} - Get a questionnaire by its ID

- GET - http://localhost:8085/goldenhour/questionnaire/list/{id} - Get all questionnaires created by a patient. The search is done by the patients ID

- GET - http://localhost:8085/goldenhour/questionnaire/score - Calculate the score of a questionnaire. The input is a questionnaire on the following format:

- POST - http://localhost:8085/goldenhour/healthForm - Save a health form for a specific patient. JSON:

```
{"patient":{"id":1,"birthDate":"05/15/1983","addresses":[{"id":1}]},
 "age":38,
 "conditions":[{"id":4}],
 "date":"02/10/2022",
 "time":"18:35"}
 ```

- GET - http://localhost:8085/goldenhour/healthForm/{id} - Get a health form by its ID

- GET - http://localhost:8085/goldenhour/healthForm/patient/{id} - Get a health form for a specific patient by his ID


