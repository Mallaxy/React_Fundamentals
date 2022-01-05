import styled from 'styled-components';

export const StyledCourseDetailsForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 3rem 1rem;
  border: 1px solid darkgray;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    h2 {
      font-size: 24px;
    }
  }
`;

export const DurationInfo = styled.div`
  font-size: 28px;
  width: 100%;
`;
