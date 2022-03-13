import {makeAutoObservable} from "mobx"
import {transactions} from "near-api-js";
import {Contract} from "near-api-js/lib/contract";
import {isClientDevMode} from "../../utils/Env.ts";
import {parseKulaAmount} from "../../utils/KulaContract.ts";

export type IKulaFtStore = {
  balance?: number
}

class KulaFtStore implements IKulaFtStore {
  balance = 0

  constructor() {
    makeAutoObservable(this)
  }

  setState(s: IKulaFtStore) {
    s.balance && (this.balance = s.balance)
  }

  async fetchFtBalance(account_id: string) {
    // @ts-ignore
    if (!window.account) {
      return;
    }

    // near view token-kulapad.testnet ft_balance_of '{"account_id": "luatnd.testnet"}'
    // @ts-ignore
    const res = await window.contractFT?.ft_balance_of({
      // @ts-ignore
      account_id,
    });
    console.log("{fetchFtBalance} Result:: ", res);

    this.balance = parseKulaAmount(res)
  }
}

const s = new KulaFtStore();
export default s;

if (isClientDevMode) {
  // @ts-ignore
  window.tmp__KulaFtStore = s
}
