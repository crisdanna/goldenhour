-- Table: public.questionnaire_symptoms

-- DROP TABLE public.questionnaire_symptoms;

CREATE TABLE public.questionnaire_symptoms
(
    questionnaire_id bigint NOT NULL,
    symptoms_id bigint NOT NULL,
    CONSTRAINT uk_ruy1x7ogs5righjc5pqgrw2gk UNIQUE (symptoms_id),
    CONSTRAINT fkil92d7kqdiy813rnog6g1sfv3 FOREIGN KEY (questionnaire_id)
        REFERENCES public.questionnaire (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkjx6daqyqbrb2l98qhk8x1b4ty FOREIGN KEY (symptoms_id)
        REFERENCES public.symptom (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.questionnaire_symptoms
    OWNER to postgres;