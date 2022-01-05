import styled from 'styled-components';

export const StyledCourseInfoForm = styled.div`
  display: grid;
  grid-template:
    'title button' auto
    'textarea textarea' max-content / 40% auto;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
`;

export const TitleInputContainer = styled.div`
  grid-area: title;
`;
export const ButtonContainer = styled.div`
  grid-area: button;
`;
export const TextareaContainer = styled.div`
  grid-area: textarea;
  align-self: normal;
`;
