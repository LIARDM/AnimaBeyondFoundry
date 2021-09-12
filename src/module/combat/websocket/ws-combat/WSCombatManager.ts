import { ABFActor } from '../../../actor/ABFActor';

export abstract class WSCombatManager<M, N> {
  protected constructor(protected game: Game) {
    game.socket?.on('system.animabf', msg => this.receive(msg));
  }

  protected emit(msg: M) {
    this.game.socket?.emit('system.animabf', msg);
  }

  protected findActorById(actorId: string): ABFActor {
    return this.game.scenes?.current?.tokens.map(t => t.actor)?.find(u => u?.id === actorId) as ABFActor;
  }

  abstract receive(msg: N);
}