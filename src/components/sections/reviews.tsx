import ReviewsCards from "@components/reviews";

export const Reviews = () => {
  return (
    <section className="w-full flex flex-col items-center pt-[40px] pb-[120px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
      <p className="text-white text-base font-light tracking-[0px] uppercase">Reviews</p>
      <p className="mt-[32px] text-white text-2xl font-semibold tracking-[0px]">
        We always value your opinion!
      </p>
      <p className="mt-6 text-line text-base text-center font-light tracking-[0px] max-w-[550px]">
        We appreciate every piece of feedback and strive to create projects that inspire you.
      </p>

      <ReviewsCards />
    </section>
  );
};
