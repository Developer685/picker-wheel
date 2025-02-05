import styled from "styled-components";  // remember to import styled from styled-components
//remember to install 
export const theme = {
  color: {

    babyBlue: "#E3F2FD",
    lemonChiffon: "#FFFDE7",
    lightMint: "#E6F7E5",
    lightCream: "#FFF8E7",
    fieryCoral: "#EE4040",
    goldenSand: "#F0CF50",
    royalLvender: "#815CD1",

    // Add a dark object to the color object
    midnightBlue: "#191970",
    charcoal: "#36454F",
    black: "#000",
    shylinePurple: "#815CD1",

  }
};

export const StyledApp = styled.div`  // always npm start 
  text-align: center;
  background-color: teal;
  display: block;
  &:spinning {
    animation: spin 2s linear infinite;
  }
  `;
export const StyledBody = styled.div`

  display: grid;
  padding: 20px;
  background-color: teal;
  color: white;
  font-family: Arial, sans-serif;
  text-align: left;
  margin: 0 auto;
  `;