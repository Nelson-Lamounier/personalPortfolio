import { lazy } from "react";
const Home = lazy(() => import("../../route/home/home.component")) ;

// Define the type for a screen object
type Screen = {
  screen_name: string;
  component: React.FC; // React Functional Component type
};

// Array of screen objects with type annotation
export const TOTAL_SCREENS: Screen[] = [
  {
    screen_name: "Home",
    component: Home,
  },
//   {
//     screen_name: "AboutMe",
//     component: AboutMe,
//   },
//   {
//     screen_name: "Resume",
//     component: Resume,
//   },
//   {
//     screen_name: "Testimonial",
//     component: Testimonial,
//   },
//   {
//     screen_name: "ContactMe",
//     component: ContactMe,
//   },
];

// Function to get the index of a screen by its name with type annotations
export const GET_SCREEN_INDEX = (screen_name: string | null): number => {
  if (!screen_name) return -1;

  return TOTAL_SCREENS.findIndex((screen) => screen.screen_name === screen_name);
};