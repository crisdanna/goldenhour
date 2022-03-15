-- Table: public.patient

-- DROP TABLE public.patient;
CREATE SEQUENCE public.patient_id_seq;

CREATE TABLE public.patient
(
    id bigint NOT NULL DEFAULT nextval('patient_id_seq'),
    birth_date date,
    email character varying(255) COLLATE pg_catalog."default",
    id_number character varying(255) COLLATE pg_catalog."default",
    lastname character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    phone character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT patient_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.patient
    OWNER to postgres;

ALTER SEQUENCE public.patient_id_seq OWNED BY public.patient.id;