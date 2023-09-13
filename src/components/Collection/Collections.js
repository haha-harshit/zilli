const Collections = () => {
  return (
    <>
      <div className="collectionSection section flex flex-col w-my-width p-[2rem] m-auto">
        <div className="collectionSection-main">
          <h2 className="collection-title text-[2.2rem] leading-[1.5] font-[550] text-[#1C1C1C]">Collections</h2>
          <div className="sub-title-and-link flex justify-between">
            <h6 className="collection-sub-title leading-[1.4] font-[350] text-[#363636] text-[1.3rem]">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Delhi NCR, based on trends
            </h6>
            <h6 className="see-more-collections self-center text-[1rem] font-[350] leading-[1.4] text-[#ff7e8b] p-[0.3rem]">
              All collections in Delhi NCR ▶
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
