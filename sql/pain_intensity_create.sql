-- Table: public.pain_intensity

-- DROP TABLE public.pain_intensity;

CREATE TABLE public.pain_intensity
(
    id bigint NOT NULL,
    bottom_range integer,
    description character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    top_range integer,
    CONSTRAINT pain_intensity_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.pain_intensity
    OWNER to postgres;