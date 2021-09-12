import { ABFWSGMNotification, ABFWSGMRequest } from '../gm/WSGMCombatMessageTypes';
import { UserCombatAttackResult } from '../../dialogs/UserCombatAttackDialog';
import { UserCombatDefenseResult } from '../../dialogs/UserCombatDefenseDialog';

export enum UserMessageTypes {
  RequestToAttack = 'UserRequestToAttackRequest',
  Attack = 'UserAttack',
  Defend = 'UserDefend'
}

export type UserRequestToAttackMessage = {
  type: UserMessageTypes.RequestToAttack;
  senderId: string;
  payload: {
    attackerId: string;
    defenderId: string;
  };
};

export type UserAttackMessage = {
  type: UserMessageTypes.Attack;
  payload: UserCombatAttackResult;
};

export type UserDefendMessage = {
  type: UserMessageTypes.Defend;
  payload: UserCombatDefenseResult;
};

export type ABFWSUserRequest = ABFWSGMNotification;

export type ABFWSUserNotification = ABFWSGMRequest;