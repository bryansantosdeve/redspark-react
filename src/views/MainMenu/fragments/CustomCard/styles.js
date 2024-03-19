import styled from 'styled-components';

export const Image = styled.img`
  float: left;
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-right: 10px;
`;

export const Section = styled.section`
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  padding: 15px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  /// https://getcssscan.com/css-box-shadow-examples --> Exemplos de sombras para contâineres
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
