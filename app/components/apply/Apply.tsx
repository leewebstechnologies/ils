import "./apply.css";
import Link from "next/link";

const Apply = () => {
  return (
    <section
      id="apply-aprt"
      className="pb-120"
      style={{ background: "#ffc600" }}
    >
      <div className="container">
        <div className="apply">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="apply-cont apply-color-1">
                <h3>Apply for fall 2025</h3>
                <p>
                  Gravida nibh vel velit auctor aliquetn sollicitudirem sem
                  quibibendum auci elit cons equat ipsutis sem nibh id elituis
                  sed odio sit amet nibh vulputate cursus equat ipsutis.
                </p>
                <Link href="/contact" className="main-btn">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="apply-cont apply-color-2">
                <h3>Apply for scholarship</h3>
                <p>
                  Gravida nibh vel velit auctor aliquetn sollicitudirem sem
                  quibibendum auci elit cons equat ipsutis sem nibh id elituis
                  sed odio sit amet nibh vulputate cursus equat ipsutis.
                </p>
                <Link href="/contact" className="main-btn">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Apply;
