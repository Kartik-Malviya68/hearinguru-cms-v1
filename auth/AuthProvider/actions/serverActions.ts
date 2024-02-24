import { ServerStateUtils } from "@/modules/StateManagement/Core/StateUtils";

export default class ServerActions extends ServerStateUtils<AuthContextState> {

  resolver: ResolverFN;

  constructor(state: AuthContextState, setState: React.Dispatch<React.SetStateAction<AuthContextState>>, resolver: ResolverFN) {
    super(state, setState);
    this.resolver = resolver;
  }

  async isLoggedIn() {
    const res = await this.handleAsync('checkIsLoggedIn', () => this.resolver());

    this.mutateState(v => {
      v.userData = res ? res : null;
    })
  }
}