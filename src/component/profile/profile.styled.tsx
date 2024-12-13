import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 10%;
  min-height: fit-content;
  background-color: #000000;
`;

export const ProfileParent = styled.div`
  display: flex;
  align-items: center;
  color: #16ff00;
`;

export const ProfileDetailsName = styled.div`
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
`;

export const ProfileDetailsRole = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 0 24px 0;

  h1 {
    font-size: 4rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const PrimaryText = styled.span`
  color: #000000;
`;

export const HighlightedText = styled.span`
  color: #ff5823;
`;

export const ProfileRoleTagline = styled.span`
  font-size: 2rem;
  margin: 5rem 0 0 0;
`;

export const ProfileOptions = styled.div`
  display: flex;
  margin: 0 0 0 2.8rem;
`;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px #ffffff;
  border-radius: 50%;
  height: 380px;
  width: 380px;
  margin: 0 0px 0 100px;
`;

export const ProfilePictureBackground = styled.div`
  height: 92%;
  width: 92%;
  border-radius: 50%;
  background-image: url("../../../src/assets/Home/profilephoto.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    transform: scale(1.07);
    transition: 1s ease-out;
  }
`;

export const Colz = styled.div`
      color: red;
      padding: 8rem;
      padding-left: 0px;

      &:hover {
        transform: scale(1.5);
`;

export const ColzIcon = styled.div`
i   {
    color: red;
    padding: 8rem;
    padding-left: 0px;
    &:hover {
      transform: scale(1.5);
}
`;

export const Button = styled.div`
  padding: 1.4rem 0;
  width: 16rem;
  cursor: pointer;
  transition: 0.2s;
  .btn:active {
    transform: translateY(2px);
  }
`;

export const PrimaryButton = styled(Button)`
  color: #16ff00;
  border: 0.1rem solid linen;
  font-size: 1.2rem;
  background-color: #000000;
  &:hover {
    color: #16ff00;
    border: 0.1rem solid #16ff00;
    background-color: #1f2235;
  }
`;
export const HighlightedButton = styled(Button)`
  color: #ffff;
  font-size: 1.2rem;
  background-color: #16ff00;
  margin: 0 0 0 2.8rem;
  border-radius: 1.2rem solid white;
  &:hover {
    margin: 0 0 0 2.8rem;
    background-color: #000000;
    color: #000000;
  }
`;
