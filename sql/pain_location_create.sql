-- Table: public.pain_location

-- DROP TABLE public.pain_location;

CREATE TABLE public.pain_location
(
    id bigint NOT NULL,
    description character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT pain_location_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.pain_location
    OWNER to postgres;