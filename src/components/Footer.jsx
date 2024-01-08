import CopyRight from "./CopyRight";

export default function Footer() {
  return (
    <div className="bg-[#CE9FFC] pt-10 mt-10">
      <div className="mx-auto w-10/12 md:w-1/2 flex flex-col md:flex-row md:justify-between text-color-one text-2xl font-semibold">
        <p>+91 6381818601</p>
        <p>thriyam782001@gmail.com</p>
      </div>
      <CopyRight />
    </div>
  );
}
