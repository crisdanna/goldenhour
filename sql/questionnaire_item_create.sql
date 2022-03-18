-- Table: public.questionnaire_item

-- DROP TABLE public.questionnaire_item;
CREATE SEQUENCE public.questionnaire_item_id_seq;

CREATE TABLE public.questionnaire_item
(
    id bigint NOT NULL,
    comments character varying(255) COLLATE pg_catalog."default",
    duration_id bigint,
    duration_score bigint,
    intensity_id bigint,
    intensity_score bigint,
    location_id bigint,
    location_score bigint,
    symptom_id bigint,
    symptom_score bigint,
    CONSTRAINT questionnaire_item_pkey PRIMARY KEY (id)
)


TABLESPACE pg_default;

ALTER TABLE public.questionnaire_item
    OWNER to postgres;

ALTER SEQUENCE public.questionnaire_item_id_seq OWNED BY public.questionnaire_item.id;