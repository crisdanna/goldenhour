-- Table: public.symptom_durations

-- DROP TABLE public.symptom_durations;

CREATE TABLE public.symptom_durations
(
    symptom_id bigint NOT NULL,
    durations_id bigint NOT NULL,
    CONSTRAINT uk_18tg20o0g3pxc1bf91gj1g54y UNIQUE (durations_id),
    CONSTRAINT fk8aa7svnosmb4u62gsnvl4ov9o FOREIGN KEY (symptom_id)
        REFERENCES public.symptom (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkcj8dnge5q2o8yelgqlmyin8hq FOREIGN KEY (durations_id)
        REFERENCES public.symptom_duration (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.symptom_durations
    OWNER to postgres;