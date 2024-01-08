// styles
import clasees from "./divider.module.scss";

import {
  RiProfileFill,
  RiSuitcaseFill,
  RiContactsBook2Fill,
} from "@remixicon/react";

interface IProp {
  icon_name: "profile" | "bag" | "book";
}

const DividerWithIcon = ({ icon_name }: IProp) => {
  const Tag =
    icon_name === "profile"
      ? RiProfileFill
      : icon_name === "bag"
      ? RiSuitcaseFill
      : RiContactsBook2Fill;

  return (
    <div className={clasees.divider_container}>
      <hr className={clasees.divider} />
      <Tag className={clasees.icon} size={40} />
      <hr className={clasees.divider} />
    </div>
  );
};

export default DividerWithIcon;
