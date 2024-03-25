import { useLocation, useSearchParams } from "react-router-dom";

function Search() {
  const location = useLocation();
  const [searchParams, _] = useSearchParams();
  const keyword = searchParams.get("keyword");
  return <h1>{keyword}</h1>;
}

export default Search;
