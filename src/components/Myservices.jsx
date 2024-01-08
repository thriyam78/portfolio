import Container from "./Container";
import webImage from "../assets/svgs/webisteDev.svg"
import appImage from "../assets/svgs/appDev.svg"
import uiImage from "../assets/svgs/uiUx.svg"

export default function MyServices() {
  const data = [
    {
      title: "Website Developement",
      approach: [
        "Unique figma Design",
        "Premium Look",
        "Graphic Design",
        "Content Upload",
        "Responsive",
        "Highly Scalable",
        "Third Integration",
        "Payment Gateway",
        "And Much More…",
      ],
      imagePath : webImage,
    },
    {
      title: "Mobile App Development",
      approach: [
        "complete Re-Branding",
        "New Premium Designs",
        "Graphic Design",
        "Responsive",
        "Content Upload",
        "Highly Scalable",
        "Third Integration",
        "Payment Gateway",
        "And Much More…",
      ],
      imagePath : appImage,
    },

    {
      title: "UI/UX Design",
      approach: [
        "complete Re-Branding",
        "New Premium Designs",
        "Graphic Design",
        "Responsive",
        "Content Upload",
        "Highly Scalable",
        "Third Integration",
        "Payment Gateway",
        "And Much More…",
      ],
      imagePath : uiImage,
    },
  ];
  return (
    <div className="mt-10 pb-10" id="servicesOffered">
      <Container>
        <p className="text-center text-color-one text-4xl font-semibold mb-10">Services<span className="text-color-two"> I Offer</span></p>
        <div className="w-10/12 mx-auto flex flex-col md:flex-row gap-10">
          {data.map((currEle, index) => {
            return (
              <div className="bg-[#CE9FFC] rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-[#4C0182] pb-5 cursor-pointer basis-1/3">
                <div className="w-full py-5 rounded-t-2xl text-lg font-semibold text-color-two text-center">
                  <p className="my-auto">{currEle.title}</p>
                </div>
                <div className="w-10/12 mx-auto text-lg font-semibold mt-5">
                  <img className="w-[250px] h-[250px] mx-auto" src={currEle.imagePath} alt={currEle.imagePath}/>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
