-- Table: public.emergency_score

-- DROP TABLE public.emergency_score;

CREATE TABLE public.emergency_score
(
    id bigint NOT NULL,
    description character varying(255) COLLATE pg_catalog."default",
    max_score bigint,
    min_score bigint,
    name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT emergency_score_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.emergency_score
    OWNER to postgres;