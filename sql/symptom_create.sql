-- Table: public.symptom

-- DROP TABLE public.symptom;
CREATE SEQUENCE public.symptom_id_seq;

CREATE TABLE public.symptom
(
    id bigint NOT NULL DEFAULT nextval('symptom_id_seq'),
    description character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    score bigint,
    CONSTRAINT symptom_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.symptom
    OWNER to postgres;

ALTER SEQUENCE public.symptom_id_seq OWNED BY public.symptom.id;