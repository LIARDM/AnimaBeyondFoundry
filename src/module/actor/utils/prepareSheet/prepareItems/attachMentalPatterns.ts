import { ABFActor } from '../../../ABFActor';

export const attachMentalPatterns = (
  originalSheet: ActorSheet.Data<ABFActor>,
  item: InnerDuplicated<Item.Data>
) => {
  const newSheet = JSON.parse(JSON.stringify(originalSheet)) as ActorSheet.Data<ABFActor>;

  const { data } = newSheet.actor;

  if (!data.psychic.mentalPatterns) {
    data.psychic.mentalPatterns = [];
  } else {
    data.psychic.mentalPatterns.push(item);
  }

  return newSheet;
};
