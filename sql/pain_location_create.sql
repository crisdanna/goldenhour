-- Table: public.pain_location

-- DROP TABLE public.pain_location;
CREATE SEQUENCE public.pain_location_id_seq;

CREATE TABLE public.pain_location
(
    id bigint NOT NULL DEFAULT nextval('pain_location_id_seq'),
    description character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    score bigint,
    CONSTRAINT pain_location_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.pain_location
    OWNER to postgres;

ALTER SEQUENCE public.pain_location_id_seq OWNED BY public.pain_location.id;