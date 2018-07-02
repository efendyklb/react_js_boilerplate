
Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store, persistConfig, config) {
  config = config || {};
  var blacklist = config.blacklist || null;
  var whitelist = config.whitelist || null;
  var keyPrefix = config.keyPrefix || _constants.KEY_PREFIX;

  var key = persistConfig.key;


  window.addEventListener('storage', handleStorageEvent, false);

  function handleStorageEvent(e) {
    if (e.key && e.key.indexOf(keyPrefix) === 0) {
      if (e.oldValue === e.newValue) {
        return;
      }

      var statePartial = JSON.parse(e.newValue);

      var state = Object.keys(statePartial).reduce(function (state, reducerKey) {
        if (whitelist && whitelist.indexOf(reducerKey) === -1) {
          return state;
        }
        if (blacklist && blacklist.indexOf(reducerKey) !== -1) {
          return state;
        }

        state[reducerKey] = JSON.parse(statePartial[reducerKey]);

        return state;
      }, {});

      store.dispatch({
        key: key,
        payload: state,
        type: _constants.REHYDRATE
      });
    }
  }
};

var _constants = require('redux-persist/lib/constants');