import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_BACKEND_URL;

function NewUserForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickname, setNickname] = useState("");
  const [city, setCity] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [favtvshows, setFavtvshows] = useState("");
  const [musictaste, setMusictaste] = useState("");
  const [favouritefood, setFavouritefood] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [briefintroduction, setBriefintroduction] = useState("");
  const [mostconfidentareas, setMostconfidentareas] = useState("");
  const [improveknowledge, setImproveknowledge] = useState("");
  const [favouritequote, setFavouritequote] = useState("");
  const [interestingfact, setInterestingfact] = useState("");

  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    const body = {
      firstname,
      lastname,
      nickname,
      briefintroduction,
      city,
      hobbies,
      favtvshows,
      musictaste,
      favouritefood,
      superpower,
      mostconfidentareas,
      improveknowledge,
      favouritequote,
      interestingfact,
    };
    const response = await fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    navigate("/users", { replace: true });
    console.log(response);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-links">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "800",
            }}
          >
            Home
          </Link>
        </div>
        <div>
          <h1 id="navbar-title">THE BOOTCAMPER APP</h1>
        </div>
        <div className="navbar-links">
          <Link
            to="/form"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "800",
            }}
          >
            Form
          </Link>
        </div>
        <div className="navbar-links">
          <Link
            to="/users"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "800",
            }}
          >
            Bootcampers
          </Link>
        </div>
      </div>
      <div className="NewUserForm-container">
        <div className="NewUserForm">
          <form onSubmit={submitForm}>
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              type="text"
              placeholder="First Name..."
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              placeholder="Last Name..."
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <label htmlFor="nickname">Nickname</label>
            <input
              id="nickname"
              type="text"
              placeholder="Nickname..."
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
            <label htmlFor="city">Location</label>
            <input
              id="city"
              type="text"
              placeholder="Where are you based...?"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <label htmlFor="brief-intro">Brief Intro</label>
            <textarea
              id="brief-intro"
              type="text"
              placeholder="Brief introduction..."
              value={briefintroduction}
              onChange={(e) => setBriefintroduction(e.target.value)}
              required
            />
            <label htmlFor="hobbies">Hobbies</label>
            <input
              id="hobbies"
              type="text"
              placeholder="Got any hobbies...?"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              required
            />
            <label htmlFor="tvshows">Favourite shows and films</label>
            <input
              id="tvshows"
              type="text"
              placeholder="Shows and films..?"
              value={favtvshows}
              onChange={(e) => setFavtvshows(e.target.value)}
              required
            />
            <label htmlFor="music-taste">Music Taste</label>
            <input
              id="music-taste"
              type="text"
              placeholder="What are you into...?"
              value={musictaste}
              onChange={(e) => setMusictaste(e.target.value)}
              required
            />
            <label htmlFor="favourite-foods">Favourite foods</label>
            <input
              id="favourite-foods"
              type="text"
              placeholder="Favourite foods...?"
              value={favouritefood}
              onChange={(e) => setFavouritefood(e.target.value)}
              required
            />
            <label htmlFor="superpower">Superpower</label>
            <input
              id="superpower"
              type="text"
              placeholder="What superpower would you want...?"
              value={superpower}
              onChange={(e) => setSuperpower(e.target.value)}
              required
            />
            <label htmlFor="confident-areas">Confident learning areas</label>
            <input
              id="confident-areas"
              type="text"
              placeholder="In which areas do you feel comfortable...?"
              value={mostconfidentareas}
              onChange={(e) => setMostconfidentareas(e.target.value)}
              required
            />
            <label htmlFor="confident-areas">Areas to improve</label>
            <input
              id="confident-areas"
              type="text"
              placeholder="Where can you improve...?"
              value={improveknowledge}
              onChange={(e) => setImproveknowledge(e.target.value)}
              required
            />
            <label htmlFor="favourite-quote">Favourite Quote</label>
            <input
              id="favourite-quote"
              type="text"
              placeholder="What is your favourite quote...?"
              value={favouritequote}
              onChange={(e) => setFavouritequote(e.target.value)}
              required
            />

            <label htmlFor="interesting-fact">
              Most interesting fact you know
            </label>
            <input
              id="interesting-fact"
              type="text"
              placeholder="Most interesting fact...?"
              value={interestingfact}
              onChange={(e) => setInterestingfact(e.target.value)}
              required
            />
            <button className="submit-btn" onClick={submitForm}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewUserForm;
