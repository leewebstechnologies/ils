import FloatingButton from "../components/floatingButton/FloatingButton";
import styles from "./application.module.css";

const Application = () => {
  return (
    <>
      <div className={styles.app}>
        <div className={styles.application}>
          <section className={styles.requirements}>
            <h2 className={styles.h2}>📋 Application Requirements</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                Child’s Birth Certificate (original + copy)
              </li>
              <li className={styles.li}>2 recent passport-sized photos</li>
              <li className={styles.li}>
                Last school’s progress report (if applicable)
              </li>
              <li className={styles.li}>Medical/Immunization records</li>
              <li className={styles.li}>
                Proof of residence (utility bill or lease)
              </li>
              <li className={styles.li}>Completed application form</li>
            </ul>
          </section>

          <section className={styles.formSection}>
            <h2>📝 Application Form</h2>
            <form className={styles.form}>
              <label className={styles.label}>
                Child’s Full Name
                <input
                  className={styles.input}
                  type="text"
                  name="childName"
                  required
                />
              </label>

              <label className={styles.label}>
                Date of Birth
                <input
                  className={styles.input}
                  type="date"
                  name="dob"
                  required
                />
              </label>

              <label className={styles.label}>
                Gender
                <select name="gender" required>
                  <option value="">Select</option>
                  <option value="boy">Boy</option>
                  <option value="girl">Girl</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className={styles.label}>
                Parent/Guardian Full Name
                <input
                  className={styles.input}
                  type="text"
                  name="guardianName"
                  required
                />
              </label>

              <label className={styles.label}>
                Contact Number
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  required
                />
              </label>

              <label className={styles.label}>
                Email Address
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  required
                />
              </label>

              <label className={styles.label}>
                Home Address
                <textarea name="address" rows={3} required></textarea>
              </label>

              <label className={styles.label}>
                Previous School (if any)
                <input
                  className={styles.input}
                  type="text"
                  name="previousSchool"
                />
              </label>

              <button className={styles.button} type="submit">
                Submit Application
              </button>
            </form>
          </section>
        </div>
        <FloatingButton />
      </div>
    </>
  );
};
export default Application;
