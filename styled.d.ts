// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      dark: string;
      focus: string;
      active: string;
    };
  }
}
