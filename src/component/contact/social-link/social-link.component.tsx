import iconInfoData from "../../../data/IconData.json" with { type: "json" };


import * as Icons from "react-icons/fa6";

import {SocialIconContainer, SocialIconLink, IconContainer} from "./social-link.styled"



type IconKey = keyof typeof Icons;

interface IconDetails {
    icon: IconKey;
    title: string;
    items: string[];
  }


  interface IconInfoData {
    iconDetails: IconDetails[]
  }

  const iconInfoDataTyped = iconInfoData as IconInfoData;

  const SocialLinks = () => {
    const { iconDetails } = iconInfoDataTyped;


    return (
        <SocialIconContainer className="center">
        {iconDetails.map((detail, index) => {
          const IconComponent = Icons[detail.icon];
          return (
            <IconContainer>

            <SocialIconLink
              key={index}
              href={`https://${detail.items[0]}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit our ${detail.title}`}
            >
              {IconComponent && <IconComponent size={40} />}
            </SocialIconLink>
            </IconContainer>
          );
        })}
      </SocialIconContainer>
    )
  }

  export default SocialLinks;