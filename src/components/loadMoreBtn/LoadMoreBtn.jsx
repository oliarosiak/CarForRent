import { Button } from './LoadMoreBtn.styled';
const LoadMoreBtn = ({ handler, visible }) => {
  return (
    <>
      {visible ? (
        <Button onClick={() => handler()}>Load more</Button>
      ) : (
        <Button disabled>Load more</Button>
      )}
    </>
  );
};

export default LoadMoreBtn;
