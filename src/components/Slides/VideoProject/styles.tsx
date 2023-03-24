import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  position: relative;
`;

export const ContentWrapper = styled.div`
  height: 700px;
  position: relative;
`;

export const Photo = styled.img`
  height: 500px;
  max-width: 800px;
  object-fit: cover;
  opacity: 0.7;
  position: absolute;
  width: 100%;
`;

export const Text = styled.div`
  color: white;
  font-size: 1.4em;
  font-weight: 500;
  left: 500px;
  letter-spacing: 1px;
  line-height: 40px;
  max-width: 700px;
  position: relative;
  top: 300px;
`;

export const VideoProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  height: 500px;
`;

export const VideoProjectInspiration = styled.div`
  color: ${COLORS.orange};
  font-size: 2em;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const VideoProjectDescription = styled.div`
  color: white;
  font-size: 1.2em;
  font-weight: 500;
  letter-spacing: 0.5px;
  max-width: 900px;

  .title {
    margin-bottom: 8px;
  }

  .list {
    line-height: 40px;
    list-style: none;

    .listItem {
      align-items: baseline;
      display: flex;
      gap: 6px;

      .textHighlight {
        font-weight: 600;
      }
    }
  }

  .welcomeInvitation {
    color: ${COLORS.orange};
    font-weight: 600;
    margin-top: 8px;
    font-size: 1.2em;
  }
`;

export const Circle = styled.div`
  background: white;
  border-radius: 100%;
  flex-shrink: 0;
  height: 10px;
  width: 10px;
`;
