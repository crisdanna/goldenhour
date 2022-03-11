-- Table: public.symptom

-- DROP TABLE public.symptom;

CREATE TABLE public.symptom
(
    id bigint NOT NULL,
    description character varying(255) COLLATE pg_catalog."default",
    duration character varying(255) COLLATE pg_catalog."default",
    intensity character varying(255) COLLATE pg_catalog."default",
    location character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    score bigint,
    CONSTRAINT symptom_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.symptom
    OWNER to postgres;