class Animations {
    /* SINGLETON CLASS INSTANCE */
    static animations = new Animations();
  
    fadeInScreen(screenName: string): void {
      const screen = document.getElementById(screenName);
      if (!screenName || !screen) return;
  
      screen.style.opacity = "5";
      screen.style.transform = "translateY(1px)";
    }
  }
  
  export default Animations;