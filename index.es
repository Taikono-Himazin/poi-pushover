'use strict';
import pusher from './pusher'

export const pluginDidLoad = () => {
  // for debug
  window.pusher = pusher
}

export const pluginWillUnload = () => {
}

export { settingsClass } from './views/index'
// export reactClass from './views/index'
export { reducer } from './reducer/index'