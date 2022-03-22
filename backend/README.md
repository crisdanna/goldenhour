# golden_hour_questionnaire

This project communicates with a PostgreSQL database. Install PostgreSQL, using all default settings, don't change the default port. 

Use the following password: pg_adm123. If you change any of those setting, change them on the application.yml file as well before running the application.


SQL scripts execution order:

* address_create.sql
* patient_create.sql
* patient_address_create.sql
* condition_create.sql
* patient_health_form_create.sql
* health_form_condition_create.sql
* symptom_create.sql
* questionnaire_create.sql
* questionnaire_symptom_create.sql
* emergency_score_create.sql
* address_insert.sql
* patient_insert.sql
* patient_address_insert.sql
* condition_insert.sql
* patient_health_form_insert.sql
* health_form_condition_insert.sql
* symptom_insert.sql
* questionnaire_insert.sql
* questionnaire_symptom_insert.sql
* emergency_score_insert.sql


RESTful URLs:

Services:

symptom
- GET - http://localhost:8085/goldenhour/symptom/list - Get all symptoms with its scores

- GET - http://localhost:8085/goldenhour/symptom/{id} - Get a symptom's information by its ID

- GET - http://localhost:8085/goldenhour/symptom/name/{name} - Get all symptoms registered with the same name (case insensitive).

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

