import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Navbar";
import { IoMdArrowBack } from "react-icons/io";

export const Body = styled.div`
  margin: 0;
  display: flex;
  place-items: center;
  justify-content: center;
  min-width: 320px;
  min-height: 100vh;
`;

export const Button = styled.button`
  text-align: center;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
`;

export const Banner = styled.img`
  width: 100vmax;
  height: 50%;
  object-fit: cover;
  object-position: top;
`;

export const InputStyle = styled.input`
  border-radius: 1rem;
  font-size: 1em;
  padding: 0.5rem;
`;

export const TypeStyle = styled.span`
  font-size: 1em;
  color: black;
`;

export const H2Style = styled.h2`
  font-size: 2em;
  color: black;
`;
export const Type1 = styled.span`
  font-size: 1em;
  color: black;
`;

export const Type2 = styled.span`
  font-size: 2em;
  color: black;
`;
export const NavButton = ({ to, children }: { to: string; children: any }) => {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
};

export const NavBody = ({ children }: any) => {
  return (
    <Body>
      <div style={{ marginTop: 70 }}>
        <Navbar />
        {children}
      </div>
    </Body>
  );
};

export const Input = ({
  label,
  onChange,
  value,
  type = "text",
}: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  type?: string;
}) => {
  return (
    <div>
      <TypeStyle>{label} </TypeStyle>
      <InputStyle onChange={onChange} value={value} type={type} />
    </div>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: lightgrey;
  border-radius: 2rem;
  text-align: end;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: lightgrey;
  border-radius: 2rem;
  text-align: end;
`;
export const GoBack = ({ action }: { action: Function }) => {
  return (
    <Button onClick={() => action()} type="button">
      <IoMdArrowBack style={{ fontSize: "1.5rem" }} />
    </Button>
  );
};
