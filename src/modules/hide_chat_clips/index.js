import $ from 'jquery';
import {ChatFlags, PlatformTypes, SettingIds} from '../../constants.js';
import settings from '../../settings.js';
import {hasFlag} from '../../utils/flags.js';
import {loadModuleForPlatforms} from '../../utils/modules.js';

class HideChatClipsModule {
  constructor() {
    settings.on(`changed.${SettingIds.CHAT}`, () => this.load());
    this.load();
  }

  load() {
    $('body').toggleClass('bttv-hide-chat-clips', !hasFlag(settings.get(SettingIds.CHAT), ChatFlags.CHAT_CLIPS));
  }
}

export default loadModuleForPlatforms([PlatformTypes.TWITCH, () => new HideChatClipsModule()]);
