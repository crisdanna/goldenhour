-- Table: public.patient_health

-- DROP TABLE public.patient_health;
CREATE SEQUENCE public.patient_health_id_seq;

CREATE TABLE public.patient_health
(
    id bigint NOT NULL DEFAULT nextval('patient_health_id_seq'),
    age integer,
    date date,
    "time" time without time zone,
    patient_id bigint,
    CONSTRAINT patient_health_pkey PRIMARY KEY (id),
    CONSTRAINT fkoiuimujjipus2bnowyeqn8sv6 FOREIGN KEY (patient_id)
        REFERENCES public.patient (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.patient_health
    OWNER to postgres;

ALTER SEQUENCE public.patient_health_id_seq OWNED BY public.patient_health.id;