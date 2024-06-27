import Image from "next/image";

interface campprops {
  backgroundImage: string;
  title: string;
  subtitle: string;
}
const Campsite1 = ({ backgroundImage, title, subtitle }: campprops) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20  lg:py-10 ">
        <div className="flexCenter gap-4">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="  rounded-full bg-green-50 p-4 "
          >
            <Image src="/folded-map.svg" width={24} height={24} alt="image" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="300"
            className="flex flex-col gap-1  "
          >
            <h4 className="bold-18 text-white ">{title}</h4>
            <p className="regular-14 text-white ">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6 "></div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className=" 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 ">
      <div className="hide-scrollbar flex xl:h-[640px] h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] ">
        <Campsite1
          backgroundImage="bg-bg-img-1"
          title="putuk truno camp"
          subtitle="Prigen, Pasuruan"
        />
        <Campsite1
          backgroundImage="bg-bg-img-2"
          title="mountine veiw"
          subtitle="Prigen, Pasuruan"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 ">
        <div
          data-aos="fade-down"
          data-aos-delay="300"
          className="bg-green-500 p-8 lg:max-w-[500px] xl:max-w-[740px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl  "
        >
          <h2
            data-aos="fade-down"
            data-aos-delay="300"
            className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white "
          >
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p
            data-aos="fade-down"
            data-aos-delay="300"
            className="regular-14 xl:regular-16 mt-5 text-white "
          >
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            data-aos="fade-down"
            data-aos-delay="300"
            src="/quote.svg"
            alt="qoute"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
