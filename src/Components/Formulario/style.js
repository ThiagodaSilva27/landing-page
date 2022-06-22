import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: -10px;
  @media (max-width: 767px) {
    margin-top: 10px;
  }
`;

export const Logo = styled.img`
  width: 10rem;
  margin-top: -10px;
  @media (max-width: 767px) {
    width: 5rem;
    margin-top: 10px;
  }
`;

export const InputDefault = styled.input`
  width: 262px;
  height: 36px;
  margin: 2px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #191e26;
  padding: 12px;
  flex-direction: row;

  @media (max-width: 767px) {
    width: 330px;
    height: 41px;
    margin: 10px;
  }
  &::placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
  }
`;

export const InputEnderecoPrimeiro = styled.input`
  width: 400px;
  height: 36px;
  margin: 2px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #191e26;
  padding: 12px;
  background-color: #6d6e71;

  @media (max-width: 767px) {
    width: 250px;
    height: 41px;
    margin: 5px;
  }
  &::placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
    color: #ffffff;
  }
`;

export const InputEnderecoNumero = styled.input`
  width: 60px;
  height: 36px;
  margin: 2px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #191e26;
  padding: 12px;

  @media (max-width: 767px) {
    width: 60px;
    height: 41px;
    margin: 5px;
  }
  &::placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const InputEnderecoSegundo = styled.input`
  width: 262px;
  height: 36px;
  margin: 2px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #191e26;
  background-color: #6d6e71;

  @media (max-width: 767px) {
    width: 110px;
    height: 41px;
    margin: 2px;
  }
  &::placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
    color: #ffffff;
  }
`;

export const InputEnderecoEstado = styled.input`
  width: 100px;
  height: 36px;
  margin: 2px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #191e26;
  background-color: #6d6e71;

  @media (max-width: 767px) {
    width: 60px;
    height: 41px;
    margin: 2px;
  }
  &::placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
    color: #ffffff;
  }
`;

export const ContainerForm = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #191e26;
    border-radius: 8px;
    padding: 10px;
    button {
      width: 262px;
      height: 44px;
      left: 49px;
      top: 555px;
      border: none;
      margin-top: 30px;
      background: var(--green);
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: white;
      background-color: #f24f1d;
    }
    div {
      margin: 20px auto;
      a {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 15px;

        color: var(--green);
      }
    }
  }
`;
