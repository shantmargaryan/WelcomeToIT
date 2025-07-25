import styled from 'styled-components';
import {Img} from "@/styled/mixStyle";

export const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 1rem;
  margin-block-end: 5rem;
`;

export const MarqueeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  height: 100px;
`;

export const MarqueeImage = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
