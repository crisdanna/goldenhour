-- Table: public.pain_intensity

-- DROP TABLE public.pain_intensity;
CREATE SEQUENCE public.pain_intensity_id_seq;

CREATE TABLE public.pain_intensity
(
    id bigint NOT NULL DEFAULT nextval('pain_intensity_id_seq'),
    bottom_range integer,
    description character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    top_range integer,
    score bigint,
    CONSTRAINT pain_intensity_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.pain_intensity
    OWNER to postgres;

ALTER SEQUENCE public.pain_intensity_id_seq OWNED BY public.pain_intensity.id;