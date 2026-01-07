import Shape from "../../assets/Shape.png";

function CarouselCard({ title, date, desc }) {
  return (
    <div className="relative">
      <div className="bg-white p-6 rounded-[10px] border border-[#EDEDED] mx-auto w-[86%] h-full -translate-y-7">
        <h4 className="text-[16px] font-bold font-raleway">{title}</h4>
        <p className="mt-3 text-xs font-medium text-[#719AD0]">{date}</p>
        <p className="mt-4 text-gray-600">{desc}</p>
      </div>
      <figure className="absolute bottom-0 left-0 w-full -z-10">
        <img
          src={Shape}
          alt="Carousel background"
          className="w-full h-full object-contain"
        />
      </figure>
    </div>
  );
}

export default CarouselCard;
