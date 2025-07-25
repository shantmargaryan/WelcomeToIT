import styled from 'styled-components';
import { InputReset } from '@/styled/reset';

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

export const SearchInput = styled.input`
  ${InputReset}
  width: 100%;
  padding: 12px 20px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;


  [data-theme="dark"] & {
    border: 2px solid ${({ theme }) => theme.colors.yellow};
  }

  &::placeholder {
    color: #999;
  }
`;