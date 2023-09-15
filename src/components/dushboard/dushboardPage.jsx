import {
  DushboardContainer,
  HeaderBlock,
  MainHeader,
  SecondHeader,
  ChartsBlock,
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
        <Charts>
          <LineChart />
        </Charts>
        <Charts />
      </ChartsBlock>
    </DushboardContainer>
  );
};

export default Dushboard;
