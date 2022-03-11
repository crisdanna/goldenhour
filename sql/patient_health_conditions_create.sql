-- Table: public.patient_health_conditions

-- DROP TABLE public.patient_health_conditions;

CREATE TABLE public.patient_health_conditions
(
    patient_health_form_id bigint NOT NULL,
    conditions_id bigint NOT NULL,
    CONSTRAINT uk_m1gci5svoxfq6adjew0vwmgm6 UNIQUE (conditions_id),
    CONSTRAINT fkmruqc7oprx6fhafkjustyqga5 FOREIGN KEY (patient_health_form_id)
        REFERENCES public.patient_health (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkog8p80xykxlpgh540nvmdrm82 FOREIGN KEY (conditions_id)
        REFERENCES public.condition (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.patient_health_conditions
    OWNER to postgres;