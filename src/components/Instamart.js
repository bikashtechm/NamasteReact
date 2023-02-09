import { useState } from "react";
const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showHideButtonName, setShowHideButtonName] = useState("Show");
  return (
    <div className="border-2 border-grey p-3 m-3 bg-gray-100">
      <h3 className="font-bold text-lg font-serif">{title}</h3>
      <button
        className="cursor-pointer text-xs font-bold text-gray-400"
        onClick={() => {
          if (!isVisible) {
            setIsVisible(true);
            setShowHideButtonName("Hide");
          } else {
            setIsVisible(false);
            setShowHideButtonName("Show");
          }
        }}
      >
        {showHideButtonName}
      </button>
      {isVisible && <p className="text-sm">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  return (
    <div className="container max-w-full">
      <h3 className="text-3xl p-2 m-2 font-bold">InstaMart</h3>
      <Section
        title={"About InstaMart"}
        description={`
        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
        `}
      />
      <Section
        title={"Details Of InstaMart"}
        description={`
        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
        `}
      />
      <Section
        title={"Team Of InstaMart"}
        description={`
        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
        `}
      />
      {/* <AboutInstaMart />
      <DetailsOfInstaMart />
      <TeamInstaMart />
      <Product />
      <Careers /> */}
    </div>
  );
};

export default Instamart;
