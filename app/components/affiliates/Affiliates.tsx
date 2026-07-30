import Image from "next/image";
import { affiliatesData } from "../../data";
import "./affiliates.css";

const Affiliates = () => {
  return (
    <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
      <div className="container">
        <h2 className="affiliates">Affiliations</h2>
        <div className="row patnar-slied">
          {affiliatesData.map((index) => (
            <div key={index.id} className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <Image src={index.image} alt="Logo" width={100} height={100} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Affiliates