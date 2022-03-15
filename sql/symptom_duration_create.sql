-- Table: public.symptom_duration

-- DROP TABLE public.symptom_duration;
CREATE SEQUENCE public.symptom_duration_id_seq;

CREATE TABLE public.symptom_duration
(
    id bigint NOT NULL DEFAULT nextval('symptom_duration_id_seq'),
    bottom_interval_in_minutes integer,
    description character varying(255) COLLATE pg_catalog."default",
    is_constant character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    top_interval_in_minutes integer,
    CONSTRAINT symptom_duration_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.symptom_duration
    OWNER to postgres;

ALTER SEQUENCE public.symptom_duration_id_seq OWNED BY public.symptom_duration.id;