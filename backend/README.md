# schwester

This project communicates with a PostgreSQL database. Install PostgreSQL, using all default settings, don't change the default port. 

Use the following password: pg_adm123. If you change any of those setting, change them on the application.yml file as well before running the application.


SQL scripts execution order:

* ../sql/address_create.sql
* ../sql/patient_create.sql
* ../sql/patient_address_create.sql
* ../sql/condition_create.sql
* ../sql/patient_health_create.sql
* ../sql/patient_health_conditions_create.sql
* ../sql/pain_location_create.sql
* ../sql/pain_intensity_create.sql
* ../sql/symptom_duration_create.sql
* ../sql/symptom_create.sql
* ../sql/symptom_durations_create.sql
* ../sql/symptom_locations_create.sql
* ../sql/symptom_intensities_create.sql
* ../sql/questionnaire_create.sql
* ../sql/questionnaire_item_create.sql
* ../sql/questionnaire_items_create.sql
* ../sql/emergency_score_create.sql
* ../sql/address_insert.sql
* ../sql/patient_insert.sql
* ../sql/patient_address_insert.sql
* ../sql/condition_insert.sql
* ../sql/patient_health_insert.sql
* ../sql/patient_health_conditions_insert.sql
* ../sql/pain_location_insert.sql
* ../sql/pain_intensity_insert.sql
* ../sql/symptom_duration_insert.sql
* ../sql/symptom_insert.sql
* ../sql/emergency_score_insert.sql


RESTful URLs:

Services:

symptom
- GET - http://localhost:8085/schwester/symptom/list - Get all symptoms with its scores

- GET - http://localhost:8085/schwester/symptom/{id} - Get a symptom's information by its ID

- GET - http://localhost:8085/schwester/symptom/name/{name} - Get all symptoms registered with the same name (case insensitive).

symptom duration
- GET - http://localhost:8085/schwester/symptom/duration/list - Get all possible values for the duration interval of a symptom

symptom location
- GET - http://localhost:8085/schwester/symptom/location/list - Get all possible values for the location of a symptom

symptom pain intensity
- GET - http://localhost:8085/schwester/symptom/intensity/list - Get all possible values for the pain intensity of a symptom

patient
- GET - http://localhost:8085/schwester/patient/{id} - Get a patient's personal information by his ID

questionnaire
- POST - http://localhost:8085/schwester/questionnaire - Save a questionnaire for a specific patient. JSON:

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

- GET - http://localhost:8085/schwester/questionnaire/{id} - Get a questionnaire by its ID

- GET - http://localhost:8085/schwester/questionnaire/list/{id} - Get all questionnaires created by a patient. The search is done by the patients ID

- GET - http://localhost:8085/schwester/questionnaire/score - Calculate the score of a questionnaire. The input is a questionnaire on the following format:

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

- POST - http://localhost:8085/schwester/healthForm - Save a health form for a specific patient. JSON:

```
{"patient":{"id":1,"birthDate":"05/15/1983","addresses":[{"id":1}]},
 "age":38,
 "conditions":[{"id":4}],
 "date":"02/10/2022",
 "time":"18:35"}
 ```

- GET - http://localhost:8085/schwester/healthForm/{id} - Get a health form by its ID

- GET - http://localhost:8085/schwester/healthForm/patient/{id} - Get a health form for a specific patient by his ID

