import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
`;

export const MainContent = styled.div`
  grid-column: 1;
`;

export const SideContent = styled.div`
  grid-column: 2;
  background-color: #e9ecef;
  padding: 20px;
  border-radius: 10px;
`;

export const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    border-bottom: 2px solid #007bff;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    color: #007bff;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "•";
    color: #007bff;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;