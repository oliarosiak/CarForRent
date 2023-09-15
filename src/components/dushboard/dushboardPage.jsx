import {
  DushboardContainer,
  HeaderBlock,
  MainHeader,
  SecondHeader,
  ChartsBlock,
  Li,
  Charts,
} from './dushboardPage.styled';

import LineChart from 'components/charts/lineCharts/LineChart';

const Dushboard = () => {
  return (
    <DushboardContainer>
      <HeaderBlock>
        <MainHeader>Last month</MainHeader>
        <SecondHeader>November</SecondHeader>
      </HeaderBlock>
      <ChartsBlock>
        <Li>
          <Charts>
            <LineChart />
          </Charts>
        </Li>
        <Li>
          <Charts>
            <LineChart />
          </Charts>
        </Li>
      </ChartsBlock>
    </DushboardContainer>
  );
};

export default Dushboard;
