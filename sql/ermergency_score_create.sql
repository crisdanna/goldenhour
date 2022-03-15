-- Table: public.emergency_score

-- DROP TABLE public.emergency_score;
CREATE SEQUENCE public.emergency_score_id_seq;

CREATE TABLE public.emergency_score
(
    id bigint NOT NULL DEFAULT nextval('emergency_score_id_seq'),
    description character varying(255) COLLATE pg_catalog."default",
    max_score bigint,
    min_score bigint,
    name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT emergency_score_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.emergency_score
    OWNER to postgres;

ALTER SEQUENCE public.emergency_score_id_seq OWNED BY public.emergency_score.id;