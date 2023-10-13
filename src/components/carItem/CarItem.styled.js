import styled from '@emotion/styled';

export const CarBlock = styled.li`
  position: relative;
  flex-basis: calc((100% - 3 * 29px) / 4);
  margin-bottom: 50px;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  border: none;
  background: transparent;
`;
export const FavoriteBtnImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const CarImg = styled.img`
  height: 268px;
  border-radius: var(--radius-l);
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 14px;
  background: var(--pic-cover-gradient);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  & > h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: var(--black-text-color);
    & > span {
      color: var(--main-accent-color);
    }
  }

  & > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: var(--black-text-color);
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
    color: var(--subtext-color);
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  height: 44px;
  padding: 12px 0;
  border: none;
  outline: none;
  border-radius: var(--radius-m);
  background-color: var(--main-accent-color);
  cursor: pointer;

  font-family: var(--manrope);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: var(--white-color);

  &:hover,
  &:focus {
    background-color: var(--second-accent-color);
  }
`;
