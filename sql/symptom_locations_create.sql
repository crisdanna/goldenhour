-- Table: public.symptom_locations

-- DROP TABLE public.symptom_locations;

CREATE TABLE public.symptom_locations
(
    symptom_id bigint NOT NULL,
    locations_id bigint NOT NULL,
    CONSTRAINT fkjckhb09uienaewdrrl0ou0de FOREIGN KEY (symptom_id)
        REFERENCES public.symptom (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkphxpqa9cxwjw7v1u7q7ne4lr5 FOREIGN KEY (locations_id)
        REFERENCES public.pain_location (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.symptom_locations
    OWNER to postgres;