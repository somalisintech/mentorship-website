import { Button } from '@/components/button';
import { Navbar } from '@/components/nav';
import styled from 'styled-components';

const HeadingWrapper = styled.div`
  margin: 0px 147px;
`;
const Header = styled.div`
  margin: 20% 0%;
  max-width: 400px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: 20px 0px;
`;

const HeaderHeading = styled.h1`
  font-size: 38px;
  font-weight: 500;
`;

export default function Home() {
  return (
    <>
      <HeadingWrapper>
        <Navbar />
        <Header>
          <p>Download Anything Now A Days</p>
          <HeaderHeading>Unmatched Toner Cartridge Quality 20 Less Than Oem Price</HeaderHeading>
          <ButtonWrapper>
            <Button variant="secondary" label="Sign in" />
            <Button variant="primary" label="Register" />
          </ButtonWrapper>
        </Header>
      </HeadingWrapper>

      <h1 className="my-auto text-4xl text-center">Landing page</h1>
    </>
  );
}
