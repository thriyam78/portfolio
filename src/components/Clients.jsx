import biAcademy from "../assets/svgs/Biacademy.svg";
import amazon from "../assets/svgs/Amazon_logo.webp";
import transcurators from "../assets/imgs/transcurators.png";
import vidiotics from "../assets/imgs/VidioticsLogo.png";

export default function Clients() {
  return (
    <div className="hidden md:flex flex-col gap-4 mt-1 mb-0 pb-10">
      <p className="text-xl md:text-6xl font-semibold text-color-one text-center pb-10">
        Organizations And Clients
      </p>
      <div className=" mx-auto flex flex-col md:flex-row gap-10 my-10">
        <img
          className="h-8 md:h-12 mr-10 opacity-50 hover:opacity-100"
          src={amazon}
          alt="companyImages"
        />
        <img
          className="h-8 md:h-12 mr-10 opacity-50 hover:opacity-100"
          src={biAcademy}
          alt="companyImages"
        />
        <img
          className="h-8 md:h-12 mr-10 opacity-50 hover:opacity-100"
          src={transcurators}
          alt="companyImages"
        />

        <img
          className="h-8 md:h-12 mr-10 opacity-50 hover:opacity-100"
          src={vidiotics}
          alt="companyImages"
        />
      </div>
    </div>
  );
}
