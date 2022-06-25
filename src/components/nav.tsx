import styled from 'styled-components';
import { Button } from './button';

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  margin: 20px 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`;

export function Navbar() {
  return (
    <NavWrapper>
      <LogoWrapper>Logo</LogoWrapper>
      <ButtonWrapper>
        <Button variant="primary" label="Register" />
        <Button variant="secondary" label="Sign in" />
      </ButtonWrapper>
    </NavWrapper>
  );
}
