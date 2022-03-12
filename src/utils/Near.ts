import {useEffect} from "react";
import {useHistoryUtil, useQuery} from "../services/router.ts";
import {useSearchParams} from "react-router-dom";

export type AccountId = string
export type U128 = string
export type Timestamp = any
export type EpochHeight = number


export function useNEARWalletResponse(
  for_feature: string,
  onError: (msg: string, feature_data: any) => void,
  onSuccess: (tx_hash: string, feature_data: any) => void,
) {
  const query = useQuery()
  const {setQuery, removeQuery} = useHistoryUtil()

  useEffect(() => {
    /**
     * Handle NEAR wallet response
     * Fuck the bad wallet UX
     */
    const feature = query.get("feature")
    if (feature !== for_feature) {
      return;
    }

    // data
    let feature_data = {};
    try {
      feature_data = JSON.parse(query.get("feature_data"))
    } catch (e) {
      console.error('{read feature_data} e: ', e);
    }

    const errorMessage = query.get("errorMessage")
    if (errorMessage) {
      // reset query
      removeQuery(['feature', 'feature_data', 'errorMessage', 'errorCode'])

      onError(decodeURIComponent(decodeURIComponent(errorMessage)), feature_data)
    }

    const transactionHashes = query.get("transactionHashes")
    if (transactionHashes) {
      // reset query
      removeQuery(['feature', 'feature_data', 'transactionHashes'])

      onSuccess(transactionHashes, feature_data);
    }
  }, [])

  return {

  }
}
