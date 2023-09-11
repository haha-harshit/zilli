const Collections = () => {
  return (
    <>
      <div className="collectionSection section flex flex-col w-my-width p-[2rem] m-auto">
        <div className="collectionSection-main">
          <h2 className="collection-title text-[2.2rem] leading-[1.5] font-[550] text-[rgb(28, 28, 28)]">Collections</h2>
          <div className="sub-title-and-link flex justify-between">
            <h6 className="collection-sub-title leading-[1.4] font-[350] text-[rgb(54, 54, 54)] text-[1.3rem]">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Delhi NCR, based on trends
            </h6>
            <h6 className="see-more-collections self-center text-base font-[350] leading-[1.4] text-[rgb(255, 126, 139)] p-[0.3rem]">
              All collections in Delhi NCR ▶
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
