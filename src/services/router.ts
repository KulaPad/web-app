import {useMemo} from "react";
import {useLocation, useSearchParams} from "react-router-dom";


export function useQuery() {
  const {search} = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

// v6
export function useHistoryUtil() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setQuery = (k, v) => {
    searchParams.set(k, encodeURIComponent(v));
    setSearchParams(searchParams);
  }

  // TODO: Why this cannot remove query, yesterday is OK!!!!
  const removeQuery = (k: string[] | string) => {
    // console.log('{useHistoryUtil.removeQuery} k, searchParams: ', k, {...searchParams});
    if (Array.isArray(k)) {
      for (let i in k) {
        searchParams.delete(k[i]);
      }
    } else {
      searchParams.delete(k);
    }
    setSearchParams(searchParams);
    // console.log('{useHistoryUtil.removeQuery} k, searchParams AFTER: ', k, {...searchParams});
  }

  return {setQuery, removeQuery}
}

// export function useHistoryUtilV5() {
//   const { search } = useLocation();
//   const history = useHistory()
//
//   const cleanNearWalletMsg = () => {
//     const query = new URLSearchParams(search)
//     query.delete('errorCode')
//     query.delete('errorMessage')
//
//     history.replace({
//       search: query.toString(),
//     })
//   }
//
//   return { cleanNearWalletMsg }
// }
