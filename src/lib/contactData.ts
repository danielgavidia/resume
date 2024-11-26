import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";

export const contactData: { link: string; icon: IconDefinition; linkOutside: boolean }[] = [
  {
    link: "dgavidia1@gmail.com",
    icon: faEnvelope,
    linkOutside: false,
  },
  {
    link: "linkedin.com/in/danielgavidia1",
    icon: faLinkedin,
    linkOutside: true,
  },
  {
    link: "github.com/danielgavidia",
    icon: faGithub,
    linkOutside: true,
  },
  {
    link: "x.com/dgavidia1",
    icon: faSquareXTwitter,
    linkOutside: true,
  },
];
