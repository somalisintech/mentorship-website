import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary';

const ButtonWrapper = styled.button<Props>`
  display: block;
  border: none;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  cursor: pointer;
  position: relative;
  outline: none;
  color: #000;
  font-size: 12px;
  padding: 4px 30px;
  margin: 10px;
  border-radius: 3px;
  height: 30px;

  ${(p) => {
    if (p.variant === 'primary') {
      return css`
        background-color: #fff;
      `;
    }

    if (p.variant === 'secondary') {
      return css`
        background-color: #0093ff;
        color: #fff;
      `;
    }
  }}
`;

interface Props {
  label: string;
  variant: ButtonVariant;
}

export function Button(props: Props) {
  return (
    <ButtonWrapper label={props.label} variant={props.variant}>
      {props.label}
    </ButtonWrapper>
  );
}
