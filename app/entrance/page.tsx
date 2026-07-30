import styles from "./entrance.module.css";
const Entrance = () => {
  return (
    <>
      <div className={styles.entrance}>
        <h3>
          DATES FOR ENTRANCE EXAM 2025/20226 ACADEMIC SESSION
          <div className={styles.dates}>
            <h4>January 20th, 2025</h4>
            <h4> April 13th, 2025</h4>
            <h4>June 15th, 2025</h4>
          </div>
        </h3>
        <hr />
        <h4>
          Please note that all Entrance Examination assessment will be taken
          in the school premises.
        </h4>
        <br />
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Entrance Exam Registration</h2>
          <form className={styles.form}>
            <label className={styles.label}>
              Full Name
              <input
                className={styles.input}
                type="text"
                name="name"
                required
              />
            </label>
            <label>
              Date of Birth
              <input className={styles.input} type="date" name="dob" required />
            </label>
            <label>
              Parent/Guardian Name
              <input
                className={styles.input}
                type="text"
                name="guardian"
                required
              />
            </label>
            <label>
              Contact Number
              <input
                className={styles.input}
                type="tel"
                name="contact"
                required
              />
            </label>
            <label>
              Email Address
              <input
                className={styles.input}
                type="email"
                name="email"
                required
              />
            </label>
            <button className={styles.button} type="submit">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Entrance;
