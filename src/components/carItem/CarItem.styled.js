import styled from '@emotion/styled';

export const CarBlock = styled.li`
  flex-basis: calc((100% - 3 * 29px) / 4);
  margin-bottom: 50px;
`;

export const CarImg = styled.img`
  height: 268px;
  border-radius: 12px;
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  /* font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417; */

  & > h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
    & > span {
      color: #3470ff;
    }
  }

  & > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 28px;

  & > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #12141780;
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;

export const CarButton = styled.button`
  width: 274px;
  height: 44px;
  padding: 12px auto;
  border-color: transparent;
  border-radius: 12px;
  background-color: #3470ff;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: #ffffff;
`;

/**
 * 
      
    
      
        
     
      <button>Learn more</button>
 */
