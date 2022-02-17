--
-- PostgreSQL database dump
--

-- Dumped from database version 13.6
-- Dumped by pg_dump version 13.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: room_delete(); Type: FUNCTION; Schema: public; Owner: s307243
--

CREATE FUNCTION public.room_delete() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    DELETE FROM rooms WHERE hotel_id = OLD.id;
    RETURN OLD;
END;
$$;


ALTER FUNCTION public.room_delete() OWNER TO s307243;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: guests; Type: TABLE; Schema: public; Owner: s307243
--

CREATE TABLE public.guests (
    guest_id bigint NOT NULL,
    first_name text,
    last_name text,
    phone_no bigint,
    email text,
    password text
);


ALTER TABLE public.guests OWNER TO s307243;

--
-- Name: guests_guest_id_seq; Type: SEQUENCE; Schema: public; Owner: s307243
--

CREATE SEQUENCE public.guests_guest_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.guests_guest_id_seq OWNER TO s307243;

--
-- Name: guests_guest_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: s307243
--

ALTER SEQUENCE public.guests_guest_id_seq OWNED BY public.guests.guest_id;


--
-- Name: hotel_admins; Type: TABLE; Schema: public; Owner: s307243
--

CREATE TABLE public.hotel_admins (
    admin_id bigint NOT NULL,
    first_name text,
    last_name text,
    email text,
    password text,
    phone_no bigint,
    hotel_id bigint,
    created_on text,
    last_modify_on text,
    last_login_ip text
);


ALTER TABLE public.hotel_admins OWNER TO s307243;

--
-- Name: hotel_admins_admin_id_seq; Type: SEQUENCE; Schema: public; Owner: s307243
--

CREATE SEQUENCE public.hotel_admins_admin_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hotel_admins_admin_id_seq OWNER TO s307243;

--
-- Name: hotel_admins_admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: s307243
--

ALTER SEQUENCE public.hotel_admins_admin_id_seq OWNED BY public.hotel_admins.admin_id;


--
-- Name: hotel_details; Type: TABLE; Schema: public; Owner: s307243
--

CREATE TABLE public.hotel_details (
    hotel_id bigint NOT NULL,
    name text,
    country text,
    city text,
    address text,
    stars bigint
);


ALTER TABLE public.hotel_details OWNER TO s307243;

--
-- Name: hotel_details_hotel_id_seq; Type: SEQUENCE; Schema: public; Owner: s307243
--

CREATE SEQUENCE public.hotel_details_hotel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hotel_details_hotel_id_seq OWNER TO s307243;

--
-- Name: hotel_details_hotel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: s307243
--

ALTER SEQUENCE public.hotel_details_hotel_id_seq OWNED BY public.hotel_details.hotel_id;


--
-- Name: reservations; Type: TABLE; Schema: public; Owner: s307243
--

CREATE TABLE public.reservations (
    reservation_id bigint NOT NULL,
    hotel_id bigint,
    room_id bigint,
    guest_id bigint,
    check_in_date text,
    check_out_date text,
    opinion text,
    mark bigint,
    created_on text
);


ALTER TABLE public.reservations OWNER TO s307243;

--
-- Name: reservations_reservation_id_seq; Type: SEQUENCE; Schema: public; Owner: s307243
--

CREATE SEQUENCE public.reservations_reservation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reservations_reservation_id_seq OWNER TO s307243;

--
-- Name: reservations_reservation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: s307243
--

ALTER SEQUENCE public.reservations_reservation_id_seq OWNED BY public.reservations.reservation_id;


--
-- Name: rooms; Type: TABLE; Schema: public; Owner: s307243
--

CREATE TABLE public.rooms (
    room_id bigint NOT NULL,
    hotel_id bigint,
    capacity bigint,
    photos text,
    price bigint
);


ALTER TABLE public.rooms OWNER TO s307243;

--
-- Name: rooms_room_id_seq; Type: SEQUENCE; Schema: public; Owner: s307243
--

CREATE SEQUENCE public.rooms_room_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rooms_room_id_seq OWNER TO s307243;

--
-- Name: rooms_room_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: s307243
--

ALTER SEQUENCE public.rooms_room_id_seq OWNED BY public.rooms.room_id;


--
-- Name: guests guest_id; Type: DEFAULT; Schema: public; Owner: s307243
--

ALTER TABLE ONLY public.guests ALTER COLUMN guest_id SET DEFAULT nextval('public.guests_guest_id_seq'::regclass);


--
-- Name: hotel_admins admin_id; Type: DEFAULT; Schema: public; Owner: s307243
--

ALTER TABLE ONLY public.hotel_admins ALTER COLUMN admin_id SET DEFAULT nextval('public.hotel_admins_admin_id_seq'::regclass);


--
-- Name: hotel_details hotel_id; Type: DEFAULT; Schema: public; Owner: s307243
--

ALTER TABLE ONLY public.hotel_details ALTER COLUMN hotel_id SET DEFAULT nextval('public.hotel_details_hotel_id_seq'::regclass);


--
-- Name: reservations reservation_id; Type: DEFAULT; Schema: public; Owner: s307243
--

ALTER TABLE ONLY public.reservations ALTER COLUMN reservation_id SET DEFAULT nextval('public.reservations_reservation_id_seq'::regclass);


--
-- Name: rooms room_id; Type: DEFAULT; Schema: public; Owner: s307243
--

ALTER TABLE ONLY public.rooms ALTER COLUMN room_id SET DEFAULT nextval('public.rooms_room_id_seq'::regclass);


--
-- Name: guests guests_pkey; Type: CONSTRAINT; Schema: public; Owner: s307243
--

ALTER TABLE ONLY public.guests
    ADD CONSTRAINT guests_pkey PRIMARY KEY (guest_id);


--
-- Name: hotel_admins hotel_admins_pkey; Type: CONSTRAINT; Schema: public; Owner: s307243
--

ALTER TABLE ONLY public.hotel_admins
    ADD CONSTRAINT hotel_admins_pkey PRIMARY KEY (admin_id);


--
-- Name: hotel_details hotel_details_pkey; Type: CONSTRAINT; Schema: public; Owner: s307243
--

ALTER TABLE ONLY public.hotel_details
    ADD CONSTRAINT hotel_details_pkey PRIMARY KEY (hotel_id);


--
-- Name: reservations reservations_pkey; Type: CONSTRAINT; Schema: public; Owner: s307243
--

ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT reservations_pkey PRIMARY KEY (reservation_id);


--
-- Name: rooms rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: s307243
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (room_id);


--
-- Name: hotel_details room_delete; Type: TRIGGER; Schema: public; Owner: s307243
--

CREATE TRIGGER room_delete BEFORE DELETE ON public.hotel_details FOR EACH ROW EXECUTE FUNCTION public.room_delete();


--
-- Name: hotel_details fk_hotel_admins_hotel; Type: FK CONSTRAINT; Schema: public; Owner: s307243
--

ALTER TABLE ONLY public.hotel_details
    ADD CONSTRAINT fk_hotel_admins_hotel FOREIGN KEY (hotel_id) REFERENCES public.hotel_admins(admin_id);


--
-- PostgreSQL database dump complete
--

