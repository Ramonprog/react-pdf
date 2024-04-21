import styled from "@emotion/styled";

export const Container = styled.ul`
  padding: 10px;
  width: 350px;

  & li {
    border: 1px solid #999;
    padding: 0.3125rem 1.25rem;
    margin-bottom: 0.3125rem;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
