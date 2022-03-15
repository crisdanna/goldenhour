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

* POST - /clintech/appointment - Insert/Update an appointment. To update, just add the id property to the JSON string. JSON:

```
{
      "date": "10/30/2021",
	   "time": "09:30",
      "professional": { "id": 2 },
      "treatment": {
          "procedure": { "id": 1 },
          "patient": { "id": 7 }
      }
}
```
* GET - /clintech/appointment/list/id - Get all appointments by patient ID (replace the word 'id' by the id number)
* GET - /clintech/appointment/id - Get appointment by ID (replace the word 'id' by the id number)
* DELETE - /clintech/appointment/id - Delete the appointment by ID (replace the word 'id' by the id number)
