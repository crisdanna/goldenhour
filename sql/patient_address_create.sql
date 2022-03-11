-- Table: public.patient_addresses

-- DROP TABLE public.patient_addresses;

CREATE TABLE public.patient_addresses
(
    patient_id bigint NOT NULL,
    addresses_id bigint NOT NULL,
    CONSTRAINT uk_t17nugb8ef0anw2nfvh1o5t8o UNIQUE (addresses_id),
    CONSTRAINT fkjv6bes562cestniy5vlrgafj5 FOREIGN KEY (addresses_id)
        REFERENCES public.address (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkjwtcw03e0n2uo8jnes9ve3rco FOREIGN KEY (patient_id)
        REFERENCES public.patient (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.patient_addresses
    OWNER to postgres;