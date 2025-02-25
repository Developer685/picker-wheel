import styled from "styled-components";

export const theme = {
  color: {
    lightTheme: {
      babyBlue: "#E3F2FD",
      lemonChiffon: "#FFFDE7",
      lightMint: "#E6F7E5",
      lightCream: "#FFF8E7",
      fieryCoral: "#EE4040",
      goldenSand: "#F0CF50",
      royalLvender: "#815CD1",

      white: "#ffffff",
      warmGray: " #d4cfc7;",
      jadeGreen: "#03a66a",
      deepJungleGreen: "#038c5a",
      goldenRod: "#f2c53d",
      sunfloweYellow: "#f2b33d",
      taupe: "#8c8177",

    },

    darkTheme: {
      midnightBlue: "#191970",
      charcoal: "#36454F",
      black: "#000",
      shylinePurple: "#815CD1",
    }
  },

  breakpoint: {
    mobileMax: 767,
  },
};

export const StyledApp = styled.div`  
  text-align: center;
  display: block;
  &:spinning {
    animation: spin 2s linear infinite;
  }
  `;
export const StyledBody = styled.div`

  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: left;
  margin: 0 auto;
  `;