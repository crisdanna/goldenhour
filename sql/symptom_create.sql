-- Table: public.symptom

-- DROP TABLE public.symptom;
CREATE SEQUENCE public.symptom_id_seq;

CREATE TABLE public.symptom
(
    id bigint NOT NULL DEFAULT nextval('symptom_id_seq'),
    description character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    score bigint,
    duration_id bigint,
    intensity_id bigint,
    location_id bigint,
    CONSTRAINT symptom_pkey PRIMARY KEY (id),
    CONSTRAINT fkcg8b6dkujepf6k9xp8u4j6kjr FOREIGN KEY (duration_id)
        REFERENCES public.symptom_duration (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkfig3vldgihsr82jaumldlbdn4 FOREIGN KEY (location_id)
        REFERENCES public.pain_location (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkooq7eapnpl6ov6xn02bkfjiwm FOREIGN KEY (intensity_id)
        REFERENCES public.pain_intensity (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.symptom
    OWNER to postgres;

ALTER SEQUENCE public.symptom_id_seq OWNED BY public.symptom.id;