import { TOTAL_SCREENS } from './screen';
import { Subject } from "rxjs";

// Define the structure of a screen object
type Screen = {
  screen_name: string;
  alreadyRendered?: boolean;
};

type FadeInEvent = {
  fadeInScreen: string;
};

type ScreenViewEvent = {
  screenInView: string;
};

export default class ScrollService {
  /* SINGLETON CLASS INSTANCE */
  static scrollHandler: ScrollService = new ScrollService();

  /* Instantiate the Subject broadcasters */
  static currentScreenBroadcaster = new Subject<ScreenViewEvent>();
  static currentScreenFadeIn = new Subject<FadeInEvent>();

  constructor() {
    /* Add scroll event listener to window */
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }

  /* Scroll to "Hire Me" / "Contact Me" screen */
  scrollToHireMe = (): void => {
    const contactMeScreen = document.getElementById("ContactMe");
    if (!contactMeScreen) return;

    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  scrollToHome = (): void => {
    const homeScreen = document.getElementById("Home");
    if (!homeScreen) return;

    homeScreen.scrollIntoView({ behavior: "smooth" });
  };

  /* Check if element is in view */
  isElementInView = (elem: HTMLElement, type: "partial" | "complete"): boolean => {
    const rect = elem.getBoundingClientRect();
    const elementTop = rect.top;
    const elementBottom = rect.bottom;

    /* Partially visible */
    const partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;

    /* Completely visible */
    const completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };

  /* Check which screen is currently in the viewport */
  checkCurrentScreenUnderViewport = (event: Event): void => {
    if (!event) return;

    for (const screen of TOTAL_SCREENS as Screen[]) {
      const screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      const fullyVisible = this.isElementInView(screenFromDOM, "complete");
      const partiallyVisible = this.isElementInView(screenFromDOM, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          // Broadcast fade-in effect
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen.alreadyRendered = true;
          break;
        }

        if (fullyVisible) {
          // Broadcast screen name
          ScrollService.currentScreenBroadcaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}