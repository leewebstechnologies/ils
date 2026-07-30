import "./floatingButton.css";
import Link from "next/link";
import Image from "next/image";

const WHATSAPP_NUMBER = 2348088824595; // ← put your number here, e.g. "2348012345678"

const FloatingButton = () => {
  return (
    <div className="floatingButtons">
      <Link href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank">
        <button className="floatingBtnWhatsapp">
          <Image
            src="/images/pre-school/whatsapp.png"
            width={56}
            height={56}
            alt="whatsapp"
            className="whatsapp"
          />
        </button>
      </Link>
    </div>
  );
};

export default FloatingButton;