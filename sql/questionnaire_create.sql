-- Table: public.questionnaire

-- DROP TABLE public.questionnaire;

CREATE TABLE public.questionnaire
(
    id bigint NOT NULL,
    date date,
    final_score bigint,
    "time" time without time zone,
    patient_id bigint,
    CONSTRAINT questionnaire_pkey PRIMARY KEY (id),
    CONSTRAINT fkf4hswt896f9p8wct1dgindq1c FOREIGN KEY (patient_id)
        REFERENCES public.patient (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.questionnaire
    OWNER to postgres;