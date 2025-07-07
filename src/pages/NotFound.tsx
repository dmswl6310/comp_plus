import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div> 요청하신 페이지가 존재하지 않습니다.</div>;
      <Link to="/">홈으로 돌아가기</Link>;
    </>
  );
};

export default NotFound;
