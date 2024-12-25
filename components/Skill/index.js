import React from "react";
import "./Skill.css";

const Skillpage = () => {
  return (
    <div class="container">
      <p>Skills et outils</p>
      <div class="col">
        <h2 class="titre">Skills</h2>
        <ul class="skill">
          <li>
            <span class="purpleline javascript"></span>
            <em>Javascript</em>
          </li>
          <li>
            <span class="purpleline react"></span>
            <em>React.js</em>
          </li>
          <li>
            <span class="purpleline csharp"></span>
            <em>C#</em>
          </li>
          <li>
            <span class="purpleline cplus"></span>
            <em>C++</em>
          </li>
          <li>
            <span class="purpleline php "></span>
            <em>PHP</em>
          </li>
          <li>
            <span class="purpleline html"></span>
            <em>HTML</em>
          </li>
          <li>
            <span class="purpleline css"></span>
            <em>CSS</em>
          </li>
          <li>
            <span class="purpleline sql"></span>
            <em>SQL</em>
          </li>
          <li>
            <span class="purpleline java"></span>
            <em>Java</em>
          </li>
          <li>
            <span class="purpleline Asp"></span>
            <em>Asp.net</em>
          </li>
        </ul>
      </div>
      <div class="col">
        <h2 class="titre">Outils</h2>
        <ul class="skill">
          <li>
            <span class="purpleline win10"></span>
            <em>Windows 10</em>
          </li>
          <li>
            <span class="purpleline powershell"></span>
            <em>Powershell</em>
          </li>
          <li>
            <span class="purpleline linux"></span>
            <em>Linux</em>
          </li>
          <li>
            <span class="purpleline visual"></span>
            <em>Visual code</em>
          </li>
          <li>
            <span class="purpleline git"></span>
            <em>Git Hub</em>
          </li>
          <li>
            <span class="purpleline ps"></span>
            <em>PhotoShop</em>
          </li>
          <h2 class="titre">Passion</h2>
        </ul>
        <ul class="ul2">
          <br />
          <li>Informatique</li>
          <li>Astronomie</li>
          <li>Science</li>
        </ul>
      </div>
      <div class="col">
        <h2 class="titre">Expérience</h2>
        <ul class="ul2">
          2022 Stage de 8 semaines
          <li>
            Défis : concevoir un site web en PHP avec SQL,HTML,CSS pour la
            gestion de membre et la location de jouet
          </li>
          <br />
        </ul>
        <h2 class="titre">Formation</h2>
        <ul class="ul2">
          2021-2022 (Diplôme obtenu)
          <li> Collège Rosemont : AEC en programmation orientée objet</li>
        </ul>
      </div>
    </div>
  );
};

export default Skillpage;
