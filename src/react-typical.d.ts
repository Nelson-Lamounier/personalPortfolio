declare module "react-typical" {
    import { FC } from "react";
  
    export interface ReactTypicalProps {
      steps: (string | number)[];
      loop?: number;
      wrapper?: string;
    }
  
    const Typical: FC<ReactTypicalProps>;
    export default Typical;
  }