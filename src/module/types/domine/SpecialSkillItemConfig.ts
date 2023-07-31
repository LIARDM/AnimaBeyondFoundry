import { ABFItems } from '../../items/ABFItems';
import { openSimpleInputDialog } from '../../utils/dialogs/openSimpleInputDialog';
import { ABFItemConfigMinimal, ItemChanges } from '../Items';
import { ABFItemBaseDataSource } from '../../../animabf.types';

export type SpecialSkillItemData = Record<string, never>;

export type SpecialSkillDataSource = ABFItemBaseDataSource<
  ABFItems.SPECIAL_SKILL,
  SpecialSkillItemData
>;

export type SpecialSkillChanges = ItemChanges<SpecialSkillItemData>;

export const SpecialSkillItemConfig: ABFItemConfigMinimal<SpecialSkillDataSource> = {
  type: ABFItems.SPECIAL_SKILL,
  isInternal: true,
  fieldPath: ['domine', 'specialSkills'],
  selectors: {
    addItemButtonSelector: 'add-special-skill',
    containerSelector: '#special-skills-context-menu-container',
    rowSelector: '.special-skill-row'
  },
  onCreate: async (actor): Promise<void> => {
    const { i18n } = game as Game;

    const name = await openSimpleInputDialog({
      content: i18n.localize('dialogs.items.specialSkill.content')
    });

    await actor.createInnerItem({
      name,
      type: ABFItems.SPECIAL_SKILL
    });
  },
  onUpdate: async (actor, changes): Promise<void> => {
    for (const id of Object.keys(changes)) {
      const { name } = changes[id];

      await actor.updateInnerItem({
        id,
        type: ABFItems.SPECIAL_SKILL,
        name
      });
    }
  }
};
