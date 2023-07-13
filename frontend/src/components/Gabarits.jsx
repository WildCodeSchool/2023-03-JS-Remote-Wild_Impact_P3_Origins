import React from "react";

function Gabarits() {
  return (
    <div>
      <div className="btn-container">
        <a href="/" className="main-btn">
          Envoyer
        </a>
      </div>
      <h1 className="main-titel"> Titre</h1>
      <form>
        <div className="form-container">
          <label className="label-title" htmlFor="">
            Titre
            <input
              className="basic-input animated"
              type=""
              required
              minLength={1}
              maxLength={255}
              name="title"
            />
          </label>
          <label htmlFor="" className="label-title">
            Sous-titre
            <input
              className="basic-input formEntry animated"
              type="text"
              required
              minLength={1}
              maxLength={255}
              name="subtitle"
            />
          </label>
          <label htmlFor="" className="label-title">
            Résumé
            <input type="text/" name="resume" className="basic-input" />
          </label>
          <label htmlFor="" className="label-title">
            Source image
            <input
              type="url"
              name="src"
              className="basic-input formEntry animated"
            />
          </label>
          <label htmlFor="" className="label-title">
            Texte alternatif
            <input
              type="text"
              name="alt"
              className="basic-input formEntry animated"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Gabarits;
