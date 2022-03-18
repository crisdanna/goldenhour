-- Table: public.questionnaire_items

-- DROP TABLE public.questionnaire_items;

CREATE TABLE public.questionnaire_items
(
    questionnaire_id bigint NOT NULL,
    items_id bigint NOT NULL,
    CONSTRAINT uk_jqar6b3l0d1ynnitx28daoido UNIQUE (items_id),
    CONSTRAINT fkabshlhty6itvcmbamdfpjpi4h FOREIGN KEY (items_id)
        REFERENCES public.questionnaire_item (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkfx0a7uy2iw4cgc38c7u1tyoan FOREIGN KEY (questionnaire_id)
        REFERENCES public.questionnaire (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.questionnaire_items
    OWNER to postgres;