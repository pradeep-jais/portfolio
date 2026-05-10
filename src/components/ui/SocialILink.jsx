import { socialLinks } from "../../data/socialLinks";
import { showToolTip, hideToolTip } from "./ToolTip";

const SocialLink = ({ socialLink }) => {
  const { name, link, icon } = socialLink;
  return (
    <a
      href={link}
      target="_blank"
      className="social-icon"
      data-label={name}
      onMouseEnter={(e) => {
        showToolTip(e);
      }}
      onMouseLeave={hideToolTip}
    >
      {icon}
    </a>
  );
};
export default SocialLink;
