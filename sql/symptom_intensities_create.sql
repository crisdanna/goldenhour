-- Table: public.symptom_intensities

-- DROP TABLE public.symptom_intensities;

CREATE TABLE public.symptom_intensities
(
    symptom_id bigint NOT NULL,
    intensities_id bigint NOT NULL,
    CONSTRAINT fkap142y45t4bynr2998cuj6w94 FOREIGN KEY (intensities_id)
        REFERENCES public.pain_intensity (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkcfukgta14gvfynfracb3cyoo1 FOREIGN KEY (symptom_id)
        REFERENCES public.symptom (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.symptom_intensities
    OWNER to postgres;