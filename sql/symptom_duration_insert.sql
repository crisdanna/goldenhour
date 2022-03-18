INSERT INTO public.symptom_duration(
	bottom_interval_in_minutes, top_interval_in_minutes, description, is_constant, name, score)
	VALUES (5, 20, 'Sintoma dura de 5 a 20 minutos', true, '5 a 20',2);
INSERT INTO public.symptom_duration(
	bottom_interval_in_minutes, top_interval_in_minutes, description, is_constant, name, score)
	VALUES (20, 30, 'Sintoma dura de 20 a 30 minutos', true, '20 a 30',1);
INSERT INTO public.symptom_duration(
	bottom_interval_in_minutes, top_interval_in_minutes, description, is_constant, name, score)
	VALUES (0, 0, 'Sintoma dura alguns segundos', false, 'alguns segundos',0);
INSERT INTO public.symptom_duration(
	bottom_interval_in_minutes, top_interval_in_minutes, description, is_constant, name, score)
	VALUES (0, 0, 'Sintoma constante', true, 'constante',1);