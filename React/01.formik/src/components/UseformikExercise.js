import React from "react";
import { ReactDOM } from "react";
import { useFormik } from 'formik';
import styles from "../css/style.module.css"

function UseformikExercise() {
    const { handleChange, handleSubmit, values } = useFormik({

      initialValues: {
        firstName: "Elif",
        lastName: "Cifci",
        email: "elifcifci@gmail.com",
        gender: "female",
        hobies: "Programing",
        country: "England"
      },

      onSubmit: values => {
        console.log(JSON.stringify(values));
      },

    });
  
  return (
    <div className={styles.formik}>
      <h1>Sign Up</h1>
      
      {/* handleSubmit and handleChange (Without Form and Field) */}
        <form onSubmit={handleSubmit}>
          {/*Name field */}
          <div>
            <label htmlFor="firstName" >First Name: </label> <span />
            <input
              value={values.firstName}
              className={styles.formItem}
              id="firstName"
              name="firstName"
              placeholder="Jane"
              onChange={handleChange} />
          </div>

          {/* Lastname field */}
          <div>
            <label htmlFor="lastName">Last Name: </label> <span />
            <input
              className={styles.formItem}
              value={values.lastName}
              id="lastName"
              name="lastName"
              placeholder="Doe"
              onChange={handleChange}
            />
          </div>

          {/* E-mail field */}
          <div>
            <label htmlFor="email">Email: </label> <span />
            <input
              className={styles.formItem}
              value={values.email}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={handleChange}
            />
          </div>

          {/* Select gender field */}
          <div>
            <span>Male </span>
            <input
              className={styles.genderMale, styles.formItem}
              type="radio"
              id="gender"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />

            <span> Female </span>
            <input type="radio"
              id="gender"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
          </div>

          {/* checkboxes field */}
          <div className={styles.formItem}>
            <div className={styles.checkboxes}>
              <input
                type="checkbox"
                name="hobies"
                value="Programing"
                onChange={handleChange}
              />
              <span>Programing </span>
            </div>

            <div className={styles.checkboxes}>
              <input
                type="checkbox"
                name="hobies"
                value="voleyball"
                onChange={handleChange}
              />
              <span> Voleyball </span>
            </div>

            <div className={styles.checkboxes}>
              <input
                type="checkbox"
                name="hobies"
                value="Chess"
                onChange={handleChange}
              />
              <span> Chess </span>
            </div>

            <div className={styles.checkboxes}>
              <input
                type="checkbox"
                name="hobies"
                value="Painting"
                onChange={handleChange}
              />
              <span> Painting </span>
            </div>
          </div>

          {/* Select country field */}
          <select className={styles.formItem} value={values.country} onChange={handleChange}>
            <option value="Turkey">Turkey</option>
            <option value="England">England</option>
            <option value="America">America</option>
          </select>
          <br />

          <button className={styles.formItem} type="submit">Submit</button>
          <br />

          {JSON.stringify(values)}
        </form>
    </div>
  );
}

export default UseformikExercise;
