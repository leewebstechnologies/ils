import "./category.css";
import Link from "next/link";
import Image from "next/image";
// import alphabet from "../../../images/all-icon/alphabet.png";
// import amusement from "../../../images/all-icon/amusement-park.png";
// import education from "../../../images/all-icon/education.png";

const Category = () => {
  return (
    <section id="category-part">
      <div className="container">
        <div className="category pt-40 pb-80">
          <div className="row">
            <div className="col-lg-4">
              <div className="category-text pt-40">
                <h2>ENROLL IN OUR SCHOOL</h2>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
              <div className="row category-slied mt-40">
                <div className="col-lg-4">
                  <Link href="/preschool">
                    <span className="singel-category text-center color-1">
                      <span className="icon">
                        <Image className="icon-image" src="/images/all-icon/alphabet.png" width={512} height={512} alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>Creche</span>
                      </span>
                    </span>
                  </Link>
                </div>

                <div className="col-lg-4">
                  <Link href="/preschool">
                    <span className="singel-category text-center color-2">
                      <span className="icon">
                        <Image className="icon-image" src="/images/all-icon/amusement-park.png" width={512} height={512} alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>Pre-school</span>
                      </span>
                    </span>
                  </Link>
                </div>

                <div className="col-lg-4">
                  <Link href="/gradeschool">
                    <span className="singel-category text-center color-3">
                      <span className="icon">
                        <Image className="icon-image" src="/images/all-icon/education.png" width={512} height={512} alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>Grade-school</span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Category

