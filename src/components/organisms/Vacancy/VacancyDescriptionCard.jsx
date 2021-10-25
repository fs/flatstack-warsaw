import React from 'react';
import styled from 'styled-components';
import Card from '../../atoms/Card';

const CardInner = styled(Card)`
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;
const VacancyDescriptionCardTitle = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin: 0 1em;
  flex: 1 1 20%;
`;
const VacancyDescriptionCardDescription = styled.span`
  flex: 3 1 70%;

  ul li {
    margin: 0.25em 0;
  }
`;

const VacancyDescriptionCard = ({ title, description }) => {
  return (
    <CardInner>
      <VacancyDescriptionCardTitle>{title}</VacancyDescriptionCardTitle>
      <VacancyDescriptionCardDescription>
        {description}
      </VacancyDescriptionCardDescription>
    </CardInner>
  );
};

export default VacancyDescriptionCard;
