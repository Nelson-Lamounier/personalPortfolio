import { FC } from "react";
import Typical from "react-typical";

import ScrollService from "../util/scroll";

import {
  ProfileContainer,
  ProfileParent,
  Colz,
  ProfileDetailsName,
  ProfileDetailsRole,
  ProfileOptions,
  ProfilePicture,
  Button,
  PrimaryButton,
  HighlightedButton,
  ProfileRoleTagline,
  ColzIcon,

} from "./profile.styled";

// Component
const Profile: FC = () => {
  return (
    <ProfileContainer>
      <ProfileParent>
        <div>
          <Colz>
            <ColzIcon>
            
      <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-facebook" ></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-google" ></i>
      </a>
      <a href="https://www.instagram.com/instructor_ehizeex/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-instagram" ></i>
      </a>
      <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-youtube" ></i>
      </a>
      <a href="https://twitter.com/Ehiedu_baba" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-twitter" ></i>
      </a>
  
            </ColzIcon>
          </Colz>
          <ProfileDetailsName>
            <span>
              Hello, I'M <span className="highlighted-text">Nelson</span>
            </span>
          </ProfileDetailsName>
          <ProfileDetailsRole>
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev",
                  1000,
                  "Full stack Developer ",
                  1000,
                  "Mern stack Dev ",
                  1000,
                  "Cross Platform Dev ",
                  1000,
                  "React/React Native ",
                  1000,
                ]}
              />
            </h1>
            <ProfileRoleTagline>
              Knack of building applications with front and back end operations.
            </ProfileRoleTagline>
          </ProfileDetailsRole>
          <ProfileOptions>
            <PrimaryButton
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </PrimaryButton>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <HighlightedButton >Get Resume</HighlightedButton>
            </a>
          </ProfileOptions>
        </div>
        <ProfilePicture>
          <div className="profile-picture-background"></div>
        </ProfilePicture>
      </ProfileParent>
    </ProfileContainer>
  );
};

export default Profile;
