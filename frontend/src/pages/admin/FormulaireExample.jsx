import React from "react";
import "./FormulaireExample.scss";

function FormulaireExample() {
  return (
    <form>
      <label>
        Title
        <input
          type="text"
          required
          minLength={10}
          maxLength={255}
          name="title"
        />
      </label>

      <label>
        Original Title
        <input
          type="text"
          required
          minLength={10}
          maxLength={255}
          name="original_title"
        />
      </label>

      <label>
        SubTitle
        <input
          type="text"
          required
          minLength={10}
          maxLength={255}
          name="subtitle"
        />
      </label>

      <label>
        Resume
        <textarea required name="resume" />
      </label>

      <label>
        text
        <textarea required name="text" />
      </label>

      <label>
        Author
        <input type="text" required maxLength={85} name="author" />
      </label>

      <label>
        url image
        <input type="text" required minLength={10} maxLength={255} name="src" />
      </label>

      <label>
        text alternatif
        <input type="text" required minLength={10} maxLength={255} name="alt" />
      </label>

      <p>tag</p>
    </form>
  );
}

export default FormulaireExample;
