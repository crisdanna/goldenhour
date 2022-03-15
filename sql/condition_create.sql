-- Table: public.condition

-- DROP TABLE public.condition;
CREATE SEQUENCE public.condition_id_seq;

CREATE TABLE public.condition
(
    id bigint NOT NULL DEFAULT nextval('condition_id_seq'),
    description character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    score bigint,
    CONSTRAINT condition_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.condition
    OWNER to postgres;

ALTER SEQUENCE public.condition_id_seq OWNED BY public.condition.id;