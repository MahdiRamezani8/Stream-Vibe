// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dicMD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fb7cc976878c95f2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aB3ls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _runtime = require("regenerator-runtime/runtime");
var _navView = require("../views/sectionsView/navView");
var _navViewDefault = parcelHelpers.interopDefault(_navView);
var _genreSplideView = require("../views/sectionsView/genreSplideView");
var _genreSplideViewDefault = parcelHelpers.interopDefault(_genreSplideView);
var _devicesView = require("../views/indexViews/devicesView");
var _devicesViewDefault = parcelHelpers.interopDefault(_devicesView);
var _config = require("../config");
function init() {
    // appending elements:
    (0, _genreSplideViewDefault.default).render();
    (0, _navViewDefault.default).render();
    (0, _devicesViewDefault.default).render((0, _config.devices));
}
init();

},{"core-js/modules/web.immediate.js":"49tUX","regenerator-runtime/runtime":"dXNgZ","../views/sectionsView/navView":"1MyVo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../views/sectionsView/genreSplideView":"hfbbQ","../views/indexViews/devicesView":"yEMPn","../config":"4Wc5b"}],"49tUX":[function(require,module,exports) {
"use strict";
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("52e9b3eefbbce1ed");
require("292fa64716f5b39e");

},{"52e9b3eefbbce1ed":"fOGFr","292fa64716f5b39e":"l7FDS"}],"fOGFr":[function(require,module,exports) {
"use strict";
var $ = require("79389288a80b279c");
var globalThis = require("e4d64249a0133d14");
var clearImmediate = require("84ba5ca62b8b14c9").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"79389288a80b279c":"dIGt4","e4d64249a0133d14":"9fY7y","84ba5ca62b8b14c9":"7jDg7"}],"dIGt4":[function(require,module,exports) {
"use strict";
var globalThis = require("23dea28abc8414d1");
var getOwnPropertyDescriptor = require("2ec751f39e500b85").f;
var createNonEnumerableProperty = require("b4567636b28a3b3a");
var defineBuiltIn = require("50460aa43dd4048a");
var defineGlobalProperty = require("581238c99f8c2c30");
var copyConstructorProperties = require("566a383894c688bc");
var isForced = require("f0e2e697f04e8ad9");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = globalThis;
    else if (STATIC) target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
    else target = globalThis[TARGET] && globalThis[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"23dea28abc8414d1":"9fY7y","2ec751f39e500b85":"lk5NI","b4567636b28a3b3a":"8CL42","50460aa43dd4048a":"6XwEX","581238c99f8c2c30":"ggjnO","566a383894c688bc":"9Z12i","f0e2e697f04e8ad9":"6uTCZ"}],"9fY7y":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("c04e6fb248689dba");
var call = require("553ec943aa2a4554");
var propertyIsEnumerableModule = require("bbc5e69071aa2fbd");
var createPropertyDescriptor = require("1d2ffbfd99e01f41");
var toIndexedObject = require("c4ea69a78a643d87");
var toPropertyKey = require("8ab18ff766aa2ab9");
var hasOwn = require("3761c5d34b7aa48f");
var IE8_DOM_DEFINE = require("c4dfcc26308f1b4a");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"c04e6fb248689dba":"92ZIi","553ec943aa2a4554":"d7JlP","bbc5e69071aa2fbd":"7SuiS","1d2ffbfd99e01f41":"1lpav","c4ea69a78a643d87":"jLWwQ","8ab18ff766aa2ab9":"5XWKd","3761c5d34b7aa48f":"gC2Q5","c4dfcc26308f1b4a":"qS9uN"}],"92ZIi":[function(require,module,exports) {
"use strict";
var fails = require("735b783268fd06c0");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"735b783268fd06c0":"hL6D2"}],"hL6D2":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("44e025d030d66023");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"44e025d030d66023":"i16Dq"}],"i16Dq":[function(require,module,exports) {
"use strict";
var fails = require("2642aa7619056f20");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"2642aa7619056f20":"hL6D2"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
"use strict";
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
"use strict";
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("9d8f8f50ac9468eb");
var requireObjectCoercible = require("f7224aed72953ac4");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"9d8f8f50ac9468eb":"kPk5h","f7224aed72953ac4":"fOR0B"}],"kPk5h":[function(require,module,exports) {
"use strict";
var uncurryThis = require("7ba7e65983d7b662");
var fails = require("df551e12a7c872dd");
var classof = require("1d34ea813cebff9c");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;

},{"7ba7e65983d7b662":"7GlkT","df551e12a7c872dd":"hL6D2","1d34ea813cebff9c":"bdfmm"}],"7GlkT":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("829dd7a4e960cf9e");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"829dd7a4e960cf9e":"i16Dq"}],"bdfmm":[function(require,module,exports) {
"use strict";
var uncurryThis = require("1c71c3f6daac476c");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1c71c3f6daac476c":"7GlkT"}],"fOR0B":[function(require,module,exports) {
"use strict";
var isNullOrUndefined = require("74607922ed30019f");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"74607922ed30019f":"gM5ar"}],"gM5ar":[function(require,module,exports) {
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"5XWKd":[function(require,module,exports) {
"use strict";
var toPrimitive = require("53a3a67ac381c4e8");
var isSymbol = require("b992ca9cdcf7937b");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"53a3a67ac381c4e8":"a2mK1","b992ca9cdcf7937b":"4aV4F"}],"a2mK1":[function(require,module,exports) {
"use strict";
var call = require("70235907dc93b4b0");
var isObject = require("46fb53dace408c8e");
var isSymbol = require("677bdc4d74d2f983");
var getMethod = require("80395bcde336a28b");
var ordinaryToPrimitive = require("49552a7324952190");
var wellKnownSymbol = require("aea01c71276624bf");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"70235907dc93b4b0":"d7JlP","46fb53dace408c8e":"Z0pBo","677bdc4d74d2f983":"4aV4F","80395bcde336a28b":"9Zfiw","49552a7324952190":"7MME2","aea01c71276624bf":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
"use strict";
var isCallable = require("f87cee1cb79cbcca");
module.exports = function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"f87cee1cb79cbcca":"l3Kyn"}],"l3Kyn":[function(require,module,exports) {
"use strict";
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == "object" && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == "undefined" && documentAll !== undefined ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{}],"4aV4F":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("6b6c481cdfb7df35");
var isCallable = require("2af44fcbdbf14c83");
var isPrototypeOf = require("76e903e830c40e7c");
var USE_SYMBOL_AS_UID = require("7e2fe930b3598e22");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"6b6c481cdfb7df35":"6ZUSY","2af44fcbdbf14c83":"l3Kyn","76e903e830c40e7c":"3jtKQ","7e2fe930b3598e22":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
"use strict";
var globalThis = require("e057fc33d60763c1");
var isCallable = require("f1d62079325906cb");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};

},{"e057fc33d60763c1":"9fY7y","f1d62079325906cb":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
"use strict";
var uncurryThis = require("83f14842ef67e16a");
module.exports = uncurryThis({}.isPrototypeOf);

},{"83f14842ef67e16a":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("da4a972af0214ea0");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"da4a972af0214ea0":"8KyTD"}],"8KyTD":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("53b951dfb9de4d22");
var fails = require("b37df495bcdc1d99");
var globalThis = require("e5929e9affd2affc");
var $String = globalThis.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"53b951dfb9de4d22":"8UQPO","b37df495bcdc1d99":"hL6D2","e5929e9affd2affc":"9fY7y"}],"8UQPO":[function(require,module,exports) {
"use strict";
var globalThis = require("d049c1c2aa0eee5b");
var userAgent = require("4eb5796bbafe334d");
var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"d049c1c2aa0eee5b":"9fY7y","4eb5796bbafe334d":"lApyY"}],"lApyY":[function(require,module,exports) {
"use strict";
var globalThis = require("888bcb4c75dc4ad");
var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;
module.exports = userAgent ? String(userAgent) : "";

},{"888bcb4c75dc4ad":"9fY7y"}],"9Zfiw":[function(require,module,exports) {
"use strict";
var aCallable = require("bbfed17b24e215f4");
var isNullOrUndefined = require("492a86e2970f6a26");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"bbfed17b24e215f4":"gOMir","492a86e2970f6a26":"gM5ar"}],"gOMir":[function(require,module,exports) {
"use strict";
var isCallable = require("4094667126ecac05");
var tryToString = require("fce2a7573db493fa");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a function");
};

},{"4094667126ecac05":"l3Kyn","fce2a7573db493fa":"4O7d7"}],"4O7d7":[function(require,module,exports) {
"use strict";
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
"use strict";
var call = require("abe9ca006f56626e");
var isCallable = require("c96b3a89fec6248a");
var isObject = require("551615fda0214f1b");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"abe9ca006f56626e":"d7JlP","c96b3a89fec6248a":"l3Kyn","551615fda0214f1b":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
"use strict";
var globalThis = require("ad5ef4474219c101");
var shared = require("6a2cda01df6b4c79");
var hasOwn = require("dccc28ffa5beeb54");
var uid = require("48d6af1225853d44");
var NATIVE_SYMBOL = require("9f762329148684");
var USE_SYMBOL_AS_UID = require("1ce268781e409df2");
var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"ad5ef4474219c101":"9fY7y","6a2cda01df6b4c79":"i1mHK","dccc28ffa5beeb54":"gC2Q5","48d6af1225853d44":"a3SEE","9f762329148684":"8KyTD","1ce268781e409df2":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
"use strict";
var store = require("84eeed9891aafe14");
module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
};

},{"84eeed9891aafe14":"l4ncH"}],"l4ncH":[function(require,module,exports) {
"use strict";
var IS_PURE = require("7b43004672b1879f");
var globalThis = require("bc8329e77dc2c1cc");
var defineGlobalProperty = require("dfb72a1d809f7b02");
var SHARED = "__core-js_shared__";
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
    version: "3.38.1",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"7b43004672b1879f":"5ZsyC","bc8329e77dc2c1cc":"9fY7y","dfb72a1d809f7b02":"ggjnO"}],"5ZsyC":[function(require,module,exports) {
"use strict";
module.exports = false;

},{}],"ggjnO":[function(require,module,exports) {
"use strict";
var globalThis = require("2d1c29655635b9ea");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(globalThis, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        globalThis[key] = value;
    }
    return value;
};

},{"2d1c29655635b9ea":"9fY7y"}],"gC2Q5":[function(require,module,exports) {
"use strict";
var uncurryThis = require("f5dcaa60a713971f");
var toObject = require("ab17c4f45fcf0841");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"f5dcaa60a713971f":"7GlkT","ab17c4f45fcf0841":"5cb35"}],"5cb35":[function(require,module,exports) {
"use strict";
var requireObjectCoercible = require("f45a7b5dcdc4a410");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"f45a7b5dcdc4a410":"fOR0B"}],"a3SEE":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5da0fe4507da20a3");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"5da0fe4507da20a3":"7GlkT"}],"qS9uN":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("9b4278b13c076bf");
var fails = require("8aee5d88a5f9b6b5");
var createElement = require("1db4d60148afcf21");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"9b4278b13c076bf":"92ZIi","8aee5d88a5f9b6b5":"hL6D2","1db4d60148afcf21":"4bOHl"}],"4bOHl":[function(require,module,exports) {
"use strict";
var globalThis = require("845bcece0e6d354");
var isObject = require("824df78b2e007250");
var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"845bcece0e6d354":"9fY7y","824df78b2e007250":"Z0pBo"}],"8CL42":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("a8753383ef98ee18");
var definePropertyModule = require("189ab650b8f71085");
var createPropertyDescriptor = require("1168c8162aa30435");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"a8753383ef98ee18":"92ZIi","189ab650b8f71085":"iJR4w","1168c8162aa30435":"1lpav"}],"iJR4w":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("ca50eb9163928400");
var IE8_DOM_DEFINE = require("d482f9e5478795e8");
var V8_PROTOTYPE_DEFINE_BUG = require("b6ad7537efb06f4b");
var anObject = require("16365a73399e7fe7");
var toPropertyKey = require("fab1d366c47796d9");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"ca50eb9163928400":"92ZIi","d482f9e5478795e8":"qS9uN","b6ad7537efb06f4b":"ka1Un","16365a73399e7fe7":"4isCr","fab1d366c47796d9":"5XWKd"}],"ka1Un":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("b22a5a2de93e3ad2");
var fails = require("249a5b857c2dfccd");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"b22a5a2de93e3ad2":"92ZIi","249a5b857c2dfccd":"hL6D2"}],"4isCr":[function(require,module,exports) {
"use strict";
var isObject = require("2b6c6258a0a6082f");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
};

},{"2b6c6258a0a6082f":"Z0pBo"}],"6XwEX":[function(require,module,exports) {
"use strict";
var isCallable = require("99ee13632b3fa68");
var definePropertyModule = require("9ebb3e3004fccc0a");
var makeBuiltIn = require("f10cc812a3094053");
var defineGlobalProperty = require("d354802d852d9c2b");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"99ee13632b3fa68":"l3Kyn","9ebb3e3004fccc0a":"iJR4w","f10cc812a3094053":"cTB4k","d354802d852d9c2b":"ggjnO"}],"cTB4k":[function(require,module,exports) {
"use strict";
var uncurryThis = require("ca84677f1ebd1804");
var fails = require("13360f2842eba261");
var isCallable = require("103e488c0928755a");
var hasOwn = require("cbf9b0e0779cc368");
var DESCRIPTORS = require("3f2eb7efeae2f72b");
var CONFIGURABLE_FUNCTION_NAME = require("548b10f284264c72").CONFIGURABLE;
var inspectSource = require("358f00f3103bd55b");
var InternalStateModule = require("9b2ce14119fd2412");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"ca84677f1ebd1804":"7GlkT","13360f2842eba261":"hL6D2","103e488c0928755a":"l3Kyn","cbf9b0e0779cc368":"gC2Q5","3f2eb7efeae2f72b":"92ZIi","548b10f284264c72":"l6Kgd","358f00f3103bd55b":"9jh7O","9b2ce14119fd2412":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("8ad2bacb0e20b95c");
var hasOwn = require("4eabfd8f83afc9d5");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"8ad2bacb0e20b95c":"92ZIi","4eabfd8f83afc9d5":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
"use strict";
var uncurryThis = require("26e26db98367212e");
var isCallable = require("40ed9a4f6ae66648");
var store = require("485d48d6f4c6739e");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"26e26db98367212e":"7GlkT","40ed9a4f6ae66648":"l3Kyn","485d48d6f4c6739e":"l4ncH"}],"7AMlF":[function(require,module,exports) {
"use strict";
var NATIVE_WEAK_MAP = require("d3f0c9f3327b2fd6");
var globalThis = require("28c3574d0c39fe7e");
var isObject = require("f82e6cc0ac249fa5");
var createNonEnumerableProperty = require("c0ae163eea4ef97");
var hasOwn = require("6dea7358344877bb");
var shared = require("3e035a1241da2f0");
var sharedKey = require("88d6ccc27e779e5a");
var hiddenKeys = require("d40b9b3abdbb956e");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"d3f0c9f3327b2fd6":"2PZTl","28c3574d0c39fe7e":"9fY7y","f82e6cc0ac249fa5":"Z0pBo","c0ae163eea4ef97":"8CL42","6dea7358344877bb":"gC2Q5","3e035a1241da2f0":"l4ncH","88d6ccc27e779e5a":"eAjGz","d40b9b3abdbb956e":"661m4"}],"2PZTl":[function(require,module,exports) {
"use strict";
var globalThis = require("8b1a8c1dbfd18eb5");
var isCallable = require("aa77fff8d5ef0565");
var WeakMap = globalThis.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"8b1a8c1dbfd18eb5":"9fY7y","aa77fff8d5ef0565":"l3Kyn"}],"eAjGz":[function(require,module,exports) {
"use strict";
var shared = require("dbc8182adeb8c92f");
var uid = require("90b4ffb58508a6e5");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"dbc8182adeb8c92f":"i1mHK","90b4ffb58508a6e5":"a3SEE"}],"661m4":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
"use strict";
var hasOwn = require("d91d786cc71453ce");
var ownKeys = require("88cb809f98beddc6");
var getOwnPropertyDescriptorModule = require("10ea642aad5f7c21");
var definePropertyModule = require("39ff598ce822187e");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"d91d786cc71453ce":"gC2Q5","88cb809f98beddc6":"1CX1A","10ea642aad5f7c21":"lk5NI","39ff598ce822187e":"iJR4w"}],"1CX1A":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("3cc1e4329d869e34");
var uncurryThis = require("2b8e77cbdbe3db7a");
var getOwnPropertyNamesModule = require("d703bcb62fcda216");
var getOwnPropertySymbolsModule = require("157674bad2772c6d");
var anObject = require("a09e060b9cae3c6c");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"3cc1e4329d869e34":"6ZUSY","2b8e77cbdbe3db7a":"7GlkT","d703bcb62fcda216":"fjY04","157674bad2772c6d":"4DWO3","a09e060b9cae3c6c":"4isCr"}],"fjY04":[function(require,module,exports) {
"use strict";
var internalObjectKeys = require("6d8591e17a49376c");
var enumBugKeys = require("2c933f93dd98f385");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"6d8591e17a49376c":"hl5T1","2c933f93dd98f385":"9RnJm"}],"hl5T1":[function(require,module,exports) {
"use strict";
var uncurryThis = require("363ee0e6bb4f46a7");
var hasOwn = require("3183fe0b0bf6f6ac");
var toIndexedObject = require("28192ac12e934672");
var indexOf = require("a5f9c5d8e993ccd6").indexOf;
var hiddenKeys = require("57775908f1581bc6");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"363ee0e6bb4f46a7":"7GlkT","3183fe0b0bf6f6ac":"gC2Q5","28192ac12e934672":"jLWwQ","a5f9c5d8e993ccd6":"n5IsC","57775908f1581bc6":"661m4"}],"n5IsC":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("d5dcbcd68ac5acd0");
var toAbsoluteIndex = require("212b13aecfa48226");
var lengthOfArrayLike = require("e5a8b3e1da4c5637");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"d5dcbcd68ac5acd0":"jLWwQ","212b13aecfa48226":"5yh27","e5a8b3e1da4c5637":"lY4mS"}],"5yh27":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("72fe0a53ad43912c");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"72fe0a53ad43912c":"kLXGe"}],"kLXGe":[function(require,module,exports) {
"use strict";
var trunc = require("3403cba02b5f61d8");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"3403cba02b5f61d8":"7O8gb"}],"7O8gb":[function(require,module,exports) {
"use strict";
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
"use strict";
var toLength = require("23d9716c54a2ab90");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"23d9716c54a2ab90":"fU04N"}],"fU04N":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("c48d3a8b8ac52b0b");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"c48d3a8b8ac52b0b":"kLXGe"}],"9RnJm":[function(require,module,exports) {
"use strict";
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
"use strict";
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
"use strict";
var fails = require("10299561ea0c7870");
var isCallable = require("8b1ecdaf59f07210");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"10299561ea0c7870":"hL6D2","8b1ecdaf59f07210":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
"use strict";
var globalThis = require("629a4d99f4fe5b2e");
var apply = require("e574be68c288c7c8");
var bind = require("df212787338802d3");
var isCallable = require("afdf018c2d01bbc6");
var hasOwn = require("35a3e849940fd612");
var fails = require("b8bf5434d2248ca7");
var html = require("731f9370cc21fc3b");
var arraySlice = require("ec358060964e4bde");
var createElement = require("907adb6d219da7a3");
var validateArgumentsLength = require("f398561ebd49a798");
var IS_IOS = require("8a8e342aaad83bb");
var IS_NODE = require("6eef8b4e43dd6731");
var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = globalThis.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    globalThis.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (globalThis.addEventListener && isCallable(globalThis.postMessage) && !globalThis.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        globalThis.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"629a4d99f4fe5b2e":"9fY7y","e574be68c288c7c8":"148ka","df212787338802d3":"7vpmS","afdf018c2d01bbc6":"l3Kyn","35a3e849940fd612":"gC2Q5","b8bf5434d2248ca7":"hL6D2","731f9370cc21fc3b":"2pze4","ec358060964e4bde":"RsFXo","907adb6d219da7a3":"4bOHl","f398561ebd49a798":"b9O3D","8a8e342aaad83bb":"cGUFx","6eef8b4e43dd6731":"35LXH"}],"148ka":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("d07466971ded2aca");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"d07466971ded2aca":"i16Dq"}],"7vpmS":[function(require,module,exports) {
"use strict";
var uncurryThis = require("92f6f475baa85665");
var aCallable = require("547ee4f9dab0cc76");
var NATIVE_BIND = require("5acd31cba656d393");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"92f6f475baa85665":"5Hioa","547ee4f9dab0cc76":"gOMir","5acd31cba656d393":"i16Dq"}],"5Hioa":[function(require,module,exports) {
"use strict";
var classofRaw = require("8e77093015e1e67f");
var uncurryThis = require("9daa4dbbca634c9e");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"8e77093015e1e67f":"bdfmm","9daa4dbbca634c9e":"7GlkT"}],"2pze4":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("14cb391fa4a0dda8");
module.exports = getBuiltIn("document", "documentElement");

},{"14cb391fa4a0dda8":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5250b5c9324ccbe");
module.exports = uncurryThis([].slice);

},{"5250b5c9324ccbe":"7GlkT"}],"b9O3D":[function(require,module,exports) {
"use strict";
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError("Not enough arguments");
    return passed;
};

},{}],"cGUFx":[function(require,module,exports) {
"use strict";
var userAgent = require("88313d0d5d3e28c");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"88313d0d5d3e28c":"lApyY"}],"35LXH":[function(require,module,exports) {
"use strict";
var ENVIRONMENT = require("5fac34e3c4c0e043");
module.exports = ENVIRONMENT === "NODE";

},{"5fac34e3c4c0e043":"888a9"}],"888a9":[function(require,module,exports) {
"use strict";
/* global Bun, Deno -- detection */ var globalThis = require("7dc361f46ecde901");
var userAgent = require("9f6e24ecbba66a9e");
var classof = require("a008a59fdc341842");
var userAgentStartsWith = function(string) {
    return userAgent.slice(0, string.length) === string;
};
module.exports = function() {
    if (userAgentStartsWith("Bun/")) return "BUN";
    if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
    if (userAgentStartsWith("Deno/")) return "DENO";
    if (userAgentStartsWith("Node.js/")) return "NODE";
    if (globalThis.Bun && typeof Bun.version == "string") return "BUN";
    if (globalThis.Deno && typeof Deno.version == "object") return "DENO";
    if (classof(globalThis.process) === "process") return "NODE";
    if (globalThis.window && globalThis.document) return "BROWSER";
    return "REST";
}();

},{"7dc361f46ecde901":"9fY7y","9f6e24ecbba66a9e":"lApyY","a008a59fdc341842":"bdfmm"}],"l7FDS":[function(require,module,exports) {
"use strict";
var $ = require("33581c362196ed1f");
var globalThis = require("503bb555249cad41");
var setTask = require("4219ce460223bd08").set;
var schedulersFix = require("738dc378e6a94c64");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = globalThis.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"33581c362196ed1f":"dIGt4","503bb555249cad41":"9fY7y","4219ce460223bd08":"7jDg7","738dc378e6a94c64":"cAPb6"}],"cAPb6":[function(require,module,exports) {
"use strict";
var globalThis = require("aa6765693e58a0fe");
var apply = require("a68ecfcbf29c46f6");
var isCallable = require("7087588d33667af2");
var ENVIRONMENT = require("864edee099e8affb");
var USER_AGENT = require("3a3a5a2cfab86f21");
var arraySlice = require("cff2c830bdea4f24");
var validateArgumentsLength = require("58a74f00cee1ac64");
var Function = globalThis.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === "BUN" && function() {
    var version = globalThis.Bun.version.split(".");
    return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"aa6765693e58a0fe":"9fY7y","a68ecfcbf29c46f6":"148ka","7087588d33667af2":"l3Kyn","864edee099e8affb":"888a9","3a3a5a2cfab86f21":"lApyY","cff2c830bdea4f24":"RsFXo","58a74f00cee1ac64":"b9O3D"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"1MyVo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("../view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../../icons/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _logoSvg = require("url:../../../images/mobile/logo.svg");
var _logoSvgDefault = parcelHelpers.interopDefault(_logoSvg);
class NavView extends (0, _viewDefault.default) {
    _markup = `<nav class="grid nav nav--mb">
      <img src="${0, _logoSvgDefault.default}" alt="StramVibe" />
      <button>
        <svg width="24" height="24">
          <use href="${0, _iconsSvgDefault.default}#nav"></use>
        </svg>
      </button>
    </nav>

   <!-- Navbar is the same in Laptop and Desktop !-->
    <nav class="grid nav nav--lt">
      <img src="${0, _logoSvgDefault.default}" alt="StramVibe" />

      <ul class="nav__list">
        <li class="nav__list__item nav__list__item--active">
          <a href="#">home</a>
        </li>
        <li class="nav__list__item"><a href="#">movies & shows</a></li>
        <li class="nav__list__item"><a href="#">support</a></li>
      </ul>

      <span>
        <button class="btn-search">
          <svg width="24" height="24">
            <use href="${0, _iconsSvgDefault.default}#search"></use>
          </svg>
        </button>
        <button>
          <svg width="24" height="24">
            <use href="${0, _iconsSvgDefault.default}#bell"></use>
          </svg>
        </button>
      </span>
    </nav>`;
    render() {
        this.appendToDom(document.body, this._markup, "afterbegin");
        this._intersectionObserevrHandler();
    }
    _intersectionObserevrHandler() {
        const headerEl = document.querySelector(".header");
        const navEls = document.querySelectorAll(".nav");
        function obsereveCallback([entry]) {
            if (!entry.isIntersecting) navEls.forEach((el)=>el.classList.add("active"));
            else navEls.forEach((el)=>el.classList.remove("active"));
        }
        const observerOptoins = {
            root: null,
            threshold: 0.5
        };
        const headerObserevr = new IntersectionObserver(obsereveCallback, observerOptoins);
        headerObserevr.observe(headerEl);
    }
}
exports.default = new NavView();

},{"url:../../../icons/icons.svg":"hNB7L","url:../../../images/mobile/logo.svg":"6mcRQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../view":"7MbWE"}],"hNB7L":[function(require,module,exports) {
module.exports = require("b8176b95b0c287f9").getBundleURL("lAF1V") + "icons.7502462f.svg" + "?" + Date.now();

},{"b8176b95b0c287f9":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"6mcRQ":[function(require,module,exports) {
module.exports = require("ddc45e897bf2c4b0").getBundleURL("lAF1V") + "logo.24819939.svg" + "?" + Date.now();

},{"ddc45e897bf2c4b0":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7MbWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    constructor(){}
    appendToDom(parent, el, position) {
        parent.insertAdjacentHTML(position, el);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hfbbQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _splide = require("@splidejs/splide");
var _splideDefault = parcelHelpers.interopDefault(_splide);
var _view = require("../view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../../icons/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _image1Png = require("url:../../../images/Image1.png");
var _image1PngDefault = parcelHelpers.interopDefault(_image1Png);
var _image2Png = require("url:../../../images/Image2.png");
var _image2PngDefault = parcelHelpers.interopDefault(_image2Png);
var _image3Png = require("url:../../../images/Image3.png");
var _image3PngDefault = parcelHelpers.interopDefault(_image3Png);
var _image4Png = require("url:../../../images/Image4.png");
var _image4PngDefault = parcelHelpers.interopDefault(_image4Png);
var _config = require("../../config");
// Class to handle the genre-specific Splide carousel view
class GenreSplideView extends (0, _viewDefault.default) {
    // Array of slide data with associated images and genre labels
    _slides = [
        {
            images: [
                (0, _image1PngDefault.default),
                (0, _image2PngDefault.default),
                (0, _image3PngDefault.default),
                (0, _image4PngDefault.default)
            ],
            genre: "Action"
        },
        {
            images: [
                (0, _image1PngDefault.default),
                (0, _image2PngDefault.default),
                (0, _image3PngDefault.default),
                (0, _image4PngDefault.default)
            ],
            genre: "Horror"
        },
        {
            images: [
                (0, _image1PngDefault.default),
                (0, _image2PngDefault.default),
                (0, _image3PngDefault.default),
                (0, _image4PngDefault.default)
            ],
            genre: "Comedy"
        },
        {
            images: [
                (0, _image1PngDefault.default),
                (0, _image2PngDefault.default),
                (0, _image3PngDefault.default),
                (0, _image4PngDefault.default)
            ],
            genre: "Action"
        },
        {
            images: [
                (0, _image1PngDefault.default),
                (0, _image2PngDefault.default),
                (0, _image3PngDefault.default),
                (0, _image4PngDefault.default)
            ],
            genre: "Action"
        }
    ];
    // Markup template for the Splide carousel and custom pagination container
    _markup = `
    <section class="splide" aria-label="Slide Container Example">
      <div class="splide__track">
        <ul class="splide__list">
          ${this._generateSlidesMarkup.call(this)}
        </ul>
      </div>
    </section>
    <ul class="splide--pagination-cu splide--pagination-cu--MB"></ul>
  `;
    // Render the carousel and initialize Splide
    render() {
        this.appendToDom(document.querySelector(".section-title"), this._markup, "afterend");
        this.initSplide();
    }
    // Generate the HTML markup for each slide using the _slides array
    _generateSlidesMarkup() {
        return this._slides.map((slide)=>`
          <li class="splide__slide">
            <div class="genre-slider__slide swiper-slide">
              <header class="genre-slider__slide__header">
                ${slide.images.map((img)=>`<img src="${img}" alt="${slide.genre} Image" />`).join("")}
              </header>
              <footer class="genre-slider__slide__footer">
                <span>${slide.genre}</span>
                <span>
                  <svg width="24" height="24">
                    <use href="${0, _iconsSvgDefault.default}#arrow-right"></use>
                  </svg>
                </span>
              </footer>
            </div>
          </li>`).join("");
    }
    // Initialize the Splide carousel with responsive configuration and custom pagination
    initSplide() {
        const genreSplide = new (0, _splideDefault.default)(".splide", {
            arrows: false,
            pagination: false,
            perPage: (0, _config.SLIDES_PER_PAGE_MB),
            mediaQuery: "min",
            gap: "20px",
            perMove: 1,
            breakpoints: {
                768: {
                    perPage: (0, _config.SLIDES_PER_PAGE_TB)
                },
                1440: {
                    perPage: (0, _config.SLIDES_PER_PAGE_LT)
                },
                1920: {
                    perPage: (0, _config.SLIDES_PER_PAGE_DE)
                }
            }
        }).mount();
        // Set up custom pagination behavior
        this._setupPagination(genreSplide);
    }
    // Method to set up custom pagination based on the current slide
    _setupPagination(genreSplide) {
        const pagination = document.querySelector(".splide--pagination-cu");
        const handleMediaQueryChange = (mediaQueryList, slidesPerPage)=>{
            if (mediaQueryList.matches) this.paginationHandler(slidesPerPage, genreSplide);
        };
        // Set up event listeners for media queries to update pagination accordingly
        Object.keys((0, _config.mediaQueryConfig)).forEach((query)=>{
            const mediaQueryList = window.matchMedia(query);
            const slidesPerPage = (0, _config.mediaQueryConfig)[query];
            handleMediaQueryChange(mediaQueryList, slidesPerPage);
            mediaQueryList.addEventListener("change", (e)=>{
                handleMediaQueryChange(e, slidesPerPage);
            });
        });
    }
    // Method to handle pagination updates when the slide changes
    paginationHandler(slidesPerPage, genreSplide) {
        const pagination = document.querySelector(".splide--pagination-cu");
        pagination.innerHTML = "";
        const pagesLength = Math.ceil(genreSplide.length / slidesPerPage);
        // Generate pagination markers based on the number of pages
        for(let index = 0; index < pagesLength; index++){
            const markup = `<li></li>`;
            pagination.insertAdjacentHTML("afterbegin", markup);
        }
        // If there's only one page, no need for pagination
        if (pagesLength === 1) return;
        const paginationItems = document.querySelectorAll(".splide--pagination-cu>li");
        // Set the active pagination item based on the current slide index
        paginationItems[genreSplide.index].classList.add("active");
        // Listen for slide move events to update pagination
        genreSplide.on("move", (index, prev)=>{
            const page = Math.ceil(index / slidesPerPage);
            const prevPage = Math.ceil(prev / slidesPerPage);
            if (page === prevPage) return;
            paginationItems[prevPage]?.classList.remove("active");
            paginationItems[page]?.classList.add("active");
        });
    }
}
// Export an instance of the GenreSplideView class
exports.default = new GenreSplideView();

},{"@splidejs/splide":"5CJev","url:../../../icons/icons.svg":"hNB7L","url:../../../images/Image1.png":"lINO8","url:../../../images/Image2.png":"fJn8S","url:../../../images/Image3.png":"9T6aC","url:../../../images/Image4.png":"dcKRr","../../config":"4Wc5b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../view":"7MbWE"}],"5CJev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CLASSES", ()=>CLASSES);
parcelHelpers.export(exports, "CLASS_ACTIVE", ()=>CLASS_ACTIVE);
parcelHelpers.export(exports, "CLASS_ARROW", ()=>CLASS_ARROW);
parcelHelpers.export(exports, "CLASS_ARROWS", ()=>CLASS_ARROWS);
parcelHelpers.export(exports, "CLASS_ARROW_NEXT", ()=>CLASS_ARROW_NEXT);
parcelHelpers.export(exports, "CLASS_ARROW_PREV", ()=>CLASS_ARROW_PREV);
parcelHelpers.export(exports, "CLASS_CLONE", ()=>CLASS_CLONE);
parcelHelpers.export(exports, "CLASS_CONTAINER", ()=>CLASS_CONTAINER);
parcelHelpers.export(exports, "CLASS_FOCUS_IN", ()=>CLASS_FOCUS_IN);
parcelHelpers.export(exports, "CLASS_INITIALIZED", ()=>CLASS_INITIALIZED);
parcelHelpers.export(exports, "CLASS_LIST", ()=>CLASS_LIST);
parcelHelpers.export(exports, "CLASS_LOADING", ()=>CLASS_LOADING);
parcelHelpers.export(exports, "CLASS_NEXT", ()=>CLASS_NEXT);
parcelHelpers.export(exports, "CLASS_OVERFLOW", ()=>CLASS_OVERFLOW);
parcelHelpers.export(exports, "CLASS_PAGINATION", ()=>CLASS_PAGINATION);
parcelHelpers.export(exports, "CLASS_PAGINATION_PAGE", ()=>CLASS_PAGINATION_PAGE);
parcelHelpers.export(exports, "CLASS_PREV", ()=>CLASS_PREV);
parcelHelpers.export(exports, "CLASS_PROGRESS", ()=>CLASS_PROGRESS);
parcelHelpers.export(exports, "CLASS_PROGRESS_BAR", ()=>CLASS_PROGRESS_BAR);
parcelHelpers.export(exports, "CLASS_ROOT", ()=>CLASS_ROOT);
parcelHelpers.export(exports, "CLASS_SLIDE", ()=>CLASS_SLIDE);
parcelHelpers.export(exports, "CLASS_SPINNER", ()=>CLASS_SPINNER);
parcelHelpers.export(exports, "CLASS_SR", ()=>CLASS_SR);
parcelHelpers.export(exports, "CLASS_TOGGLE", ()=>CLASS_TOGGLE);
parcelHelpers.export(exports, "CLASS_TOGGLE_PAUSE", ()=>CLASS_TOGGLE_PAUSE);
parcelHelpers.export(exports, "CLASS_TOGGLE_PLAY", ()=>CLASS_TOGGLE_PLAY);
parcelHelpers.export(exports, "CLASS_TRACK", ()=>CLASS_TRACK);
parcelHelpers.export(exports, "CLASS_VISIBLE", ()=>CLASS_VISIBLE);
parcelHelpers.export(exports, "DEFAULTS", ()=>DEFAULTS);
parcelHelpers.export(exports, "EVENT_ACTIVE", ()=>EVENT_ACTIVE);
parcelHelpers.export(exports, "EVENT_ARROWS_MOUNTED", ()=>EVENT_ARROWS_MOUNTED);
parcelHelpers.export(exports, "EVENT_ARROWS_UPDATED", ()=>EVENT_ARROWS_UPDATED);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PAUSE", ()=>EVENT_AUTOPLAY_PAUSE);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PLAY", ()=>EVENT_AUTOPLAY_PLAY);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PLAYING", ()=>EVENT_AUTOPLAY_PLAYING);
parcelHelpers.export(exports, "EVENT_CLICK", ()=>EVENT_CLICK);
parcelHelpers.export(exports, "EVENT_DESTROY", ()=>EVENT_DESTROY);
parcelHelpers.export(exports, "EVENT_DRAG", ()=>EVENT_DRAG);
parcelHelpers.export(exports, "EVENT_DRAGGED", ()=>EVENT_DRAGGED);
parcelHelpers.export(exports, "EVENT_DRAGGING", ()=>EVENT_DRAGGING);
parcelHelpers.export(exports, "EVENT_END_INDEX_CHANGED", ()=>EVENT_END_INDEX_CHANGED);
parcelHelpers.export(exports, "EVENT_HIDDEN", ()=>EVENT_HIDDEN);
parcelHelpers.export(exports, "EVENT_INACTIVE", ()=>EVENT_INACTIVE);
parcelHelpers.export(exports, "EVENT_LAZYLOAD_LOADED", ()=>EVENT_LAZYLOAD_LOADED);
parcelHelpers.export(exports, "EVENT_MOUNTED", ()=>EVENT_MOUNTED);
parcelHelpers.export(exports, "EVENT_MOVE", ()=>EVENT_MOVE);
parcelHelpers.export(exports, "EVENT_MOVED", ()=>EVENT_MOVED);
parcelHelpers.export(exports, "EVENT_NAVIGATION_MOUNTED", ()=>EVENT_NAVIGATION_MOUNTED);
parcelHelpers.export(exports, "EVENT_OVERFLOW", ()=>EVENT_OVERFLOW);
parcelHelpers.export(exports, "EVENT_PAGINATION_MOUNTED", ()=>EVENT_PAGINATION_MOUNTED);
parcelHelpers.export(exports, "EVENT_PAGINATION_UPDATED", ()=>EVENT_PAGINATION_UPDATED);
parcelHelpers.export(exports, "EVENT_READY", ()=>EVENT_READY);
parcelHelpers.export(exports, "EVENT_REFRESH", ()=>EVENT_REFRESH);
parcelHelpers.export(exports, "EVENT_RESIZE", ()=>EVENT_RESIZE);
parcelHelpers.export(exports, "EVENT_RESIZED", ()=>EVENT_RESIZED);
parcelHelpers.export(exports, "EVENT_SCROLL", ()=>EVENT_SCROLL);
parcelHelpers.export(exports, "EVENT_SCROLLED", ()=>EVENT_SCROLLED);
parcelHelpers.export(exports, "EVENT_SHIFTED", ()=>EVENT_SHIFTED);
parcelHelpers.export(exports, "EVENT_SLIDE_KEYDOWN", ()=>EVENT_SLIDE_KEYDOWN);
parcelHelpers.export(exports, "EVENT_UPDATED", ()=>EVENT_UPDATED);
parcelHelpers.export(exports, "EVENT_VISIBLE", ()=>EVENT_VISIBLE);
parcelHelpers.export(exports, "EventBinder", ()=>EventBinder);
parcelHelpers.export(exports, "EventInterface", ()=>EventInterface);
parcelHelpers.export(exports, "FADE", ()=>FADE);
parcelHelpers.export(exports, "LOOP", ()=>LOOP);
parcelHelpers.export(exports, "LTR", ()=>LTR);
parcelHelpers.export(exports, "RTL", ()=>RTL);
parcelHelpers.export(exports, "RequestInterval", ()=>RequestInterval);
parcelHelpers.export(exports, "SLIDE", ()=>SLIDE);
parcelHelpers.export(exports, "STATUS_CLASSES", ()=>STATUS_CLASSES);
parcelHelpers.export(exports, "Splide", ()=>Splide);
parcelHelpers.export(exports, "SplideRenderer", ()=>SplideRenderer);
parcelHelpers.export(exports, "State", ()=>State);
parcelHelpers.export(exports, "TTB", ()=>TTB);
parcelHelpers.export(exports, "Throttle", ()=>Throttle);
parcelHelpers.export(exports, "default", ()=>Splide);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
    CREATED: CREATED,
    MOUNTED: MOUNTED,
    IDLE: IDLE,
    MOVING: MOVING,
    SCROLLING: SCROLLING,
    DRAGGING: DRAGGING,
    DESTROYED: DESTROYED
};
function empty(array) {
    array.length = 0;
}
function slice(arrayLike, start, end) {
    return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
    return func.bind.apply(func, [
        null
    ].concat(slice(arguments, 1)));
}
var nextTick = setTimeout;
var noop = function noop() {};
function raf(func) {
    return requestAnimationFrame(func);
}
function typeOf(type, subject) {
    return typeof subject === type;
}
function isObject(subject) {
    return !isNull(subject) && typeOf("object", subject);
}
var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");
function isNull(subject) {
    return subject === null;
}
function isHTMLElement(subject) {
    try {
        return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
    } catch (e) {
        return false;
    }
}
function toArray(value) {
    return isArray(value) ? value : [
        value
    ];
}
function forEach(values, iteratee) {
    toArray(values).forEach(iteratee);
}
function includes(array, value) {
    return array.indexOf(value) > -1;
}
function push(array, items) {
    array.push.apply(array, toArray(items));
    return array;
}
function toggleClass(elm, classes, add) {
    if (elm) forEach(classes, function(name) {
        if (name) elm.classList[add ? "add" : "remove"](name);
    });
}
function addClass(elm, classes) {
    toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children) {
    forEach(children, parent.appendChild.bind(parent));
}
function before(nodes, ref) {
    forEach(nodes, function(node) {
        var parent = (ref || node).parentNode;
        if (parent) parent.insertBefore(node, ref);
    });
}
function matches(elm, selector) {
    return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function children(parent, selector) {
    var children2 = parent ? slice(parent.children) : [];
    return selector ? children2.filter(function(child) {
        return matches(child, selector);
    }) : children2;
}
function child(parent, selector) {
    return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
var ownKeys = Object.keys;
function forOwn(object, iteratee, right) {
    if (object) (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function(key) {
        key !== "__proto__" && iteratee(object[key], key);
    });
    return object;
}
function assign(object) {
    slice(arguments, 1).forEach(function(source) {
        forOwn(source, function(value, key) {
            object[key] = source[key];
        });
    });
    return object;
}
function merge(object) {
    slice(arguments, 1).forEach(function(source) {
        forOwn(source, function(value, key) {
            if (isArray(value)) object[key] = value.slice();
            else if (isObject(value)) object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
            else object[key] = value;
        });
    });
    return object;
}
function omit(object, keys) {
    forEach(keys || ownKeys(object), function(key) {
        delete object[key];
    });
}
function removeAttribute(elms, attrs) {
    forEach(elms, function(elm) {
        forEach(attrs, function(attr) {
            elm && elm.removeAttribute(attr);
        });
    });
}
function setAttribute(elms, attrs, value) {
    if (isObject(attrs)) forOwn(attrs, function(value2, name) {
        setAttribute(elms, name, value2);
    });
    else forEach(elms, function(elm) {
        isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
}
function create(tag, attrs, parent) {
    var elm = document.createElement(tag);
    if (attrs) isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
    parent && append(parent, elm);
    return elm;
}
function style(elm, prop, value) {
    if (isUndefined(value)) return getComputedStyle(elm)[prop];
    if (!isNull(value)) elm.style[prop] = "" + value;
}
function display(elm, display2) {
    style(elm, "display", display2);
}
function focus(elm) {
    elm["setActive"] && elm["setActive"]() || elm.focus({
        preventScroll: true
    });
}
function getAttribute(elm, attr) {
    return elm.getAttribute(attr);
}
function hasClass(elm, className) {
    return elm && elm.classList.contains(className);
}
function rect(target) {
    return target.getBoundingClientRect();
}
function remove(nodes) {
    forEach(nodes, function(node) {
        if (node && node.parentNode) node.parentNode.removeChild(node);
    });
}
function parseHtml(html) {
    return child(new DOMParser().parseFromString(html, "text/html").body);
}
function prevent(e, stopPropagation) {
    e.preventDefault();
    if (stopPropagation) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
}
function query(parent, selector) {
    return parent && parent.querySelector(selector);
}
function queryAll(parent, selector) {
    return selector ? slice(parent.querySelectorAll(selector)) : [];
}
function removeClass(elm, classes) {
    toggleClass(elm, classes, false);
}
function timeOf(e) {
    return e.timeStamp;
}
function unit(value) {
    return isString(value) ? value : value ? value + "px" : "";
}
var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
function assert(condition, message) {
    if (!condition) throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
}
var min = Math.min, max = Math.max, floor = Math.floor, ceil = Math.ceil, abs = Math.abs;
function approximatelyEqual(x, y, epsilon) {
    return abs(x - y) < epsilon;
}
function between(number, x, y, exclusive) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}
function clamp(number, x, y) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return min(max(minimum, number), maximum);
}
function sign(x) {
    return +(x > 0) - +(x < 0);
}
function camelToKebab(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function format(string, replacements) {
    forEach(replacements, function(replacement) {
        string = string.replace("%s", "" + replacement);
    });
    return string;
}
function pad(number) {
    return number < 10 ? "0" + number : "" + number;
}
var ids = {};
function uniqueId(prefix) {
    return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}
function EventBinder() {
    var listeners = [];
    function bind(targets, events, callback, options) {
        forEachEvent(targets, events, function(target, event, namespace) {
            var isEventTarget = "addEventListener" in target;
            var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
            isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
            listeners.push([
                target,
                event,
                namespace,
                callback,
                remover
            ]);
        });
    }
    function unbind(targets, events, callback) {
        forEachEvent(targets, events, function(target, event, namespace) {
            listeners = listeners.filter(function(listener) {
                if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
                    listener[4]();
                    return false;
                }
                return true;
            });
        });
    }
    function dispatch(target, type, detail) {
        var e;
        var bubbles = true;
        if (typeof CustomEvent === "function") e = new CustomEvent(type, {
            bubbles: bubbles,
            detail: detail
        });
        else {
            e = document.createEvent("CustomEvent");
            e.initCustomEvent(type, bubbles, false, detail);
        }
        target.dispatchEvent(e);
        return e;
    }
    function forEachEvent(targets, events, iteratee) {
        forEach(targets, function(target) {
            target && forEach(events, function(events2) {
                events2.split(" ").forEach(function(eventNS) {
                    var fragment = eventNS.split(".");
                    iteratee(target, fragment[0], fragment[1]);
                });
            });
        });
    }
    function destroy() {
        listeners.forEach(function(data) {
            data[4]();
        });
        empty(listeners);
    }
    return {
        bind: bind,
        unbind: unbind,
        dispatch: dispatch,
        destroy: destroy
    };
}
var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";
function EventInterface(Splide2) {
    var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
    var binder = EventBinder();
    function on(events, callback) {
        binder.bind(bus, toArray(events).join(" "), function(e) {
            callback.apply(callback, isArray(e.detail) ? e.detail : []);
        });
    }
    function emit(event) {
        binder.dispatch(bus, event, slice(arguments, 1));
    }
    if (Splide2) Splide2.event.on(EVENT_DESTROY, binder.destroy);
    return assign(binder, {
        bus: bus,
        on: on,
        off: apply(binder.unbind, bus),
        emit: emit
    });
}
function RequestInterval(interval, onInterval, onUpdate, limit) {
    var now = Date.now;
    var startTime;
    var rate = 0;
    var id;
    var paused = true;
    var count = 0;
    function update() {
        if (!paused) {
            rate = interval ? min((now() - startTime) / interval, 1) : 1;
            onUpdate && onUpdate(rate);
            if (rate >= 1) {
                onInterval();
                startTime = now();
                if (limit && ++count >= limit) return pause();
            }
            id = raf(update);
        }
    }
    function start(resume) {
        resume || cancel();
        startTime = now() - (resume ? rate * interval : 0);
        paused = false;
        id = raf(update);
    }
    function pause() {
        paused = true;
    }
    function rewind() {
        startTime = now();
        rate = 0;
        if (onUpdate) onUpdate(rate);
    }
    function cancel() {
        id && cancelAnimationFrame(id);
        rate = 0;
        id = 0;
        paused = true;
    }
    function set(time) {
        interval = time;
    }
    function isPaused() {
        return paused;
    }
    return {
        start: start,
        rewind: rewind,
        pause: pause,
        cancel: cancel,
        set: set,
        isPaused: isPaused
    };
}
function State(initialState) {
    var state = initialState;
    function set(value) {
        state = value;
    }
    function is(states) {
        return includes(toArray(states), state);
    }
    return {
        set: set,
        is: is
    };
}
function Throttle(func, duration) {
    var interval = RequestInterval(duration || 0, func, null, 1);
    return function() {
        interval.isPaused() && interval.start();
    };
}
function Media(Splide2, Components2, options) {
    var state = Splide2.state;
    var breakpoints = options.breakpoints || {};
    var reducedMotion = options.reducedMotion || {};
    var binder = EventBinder();
    var queries = [];
    function setup() {
        var isMin = options.mediaQuery === "min";
        ownKeys(breakpoints).sort(function(n, m) {
            return isMin ? +n - +m : +m - +n;
        }).forEach(function(key) {
            register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
        });
        register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
        update();
    }
    function destroy(completely) {
        if (completely) binder.destroy();
    }
    function register(options2, query) {
        var queryList = matchMedia(query);
        binder.bind(queryList, "change", update);
        queries.push([
            options2,
            queryList
        ]);
    }
    function update() {
        var destroyed = state.is(DESTROYED);
        var direction = options.direction;
        var merged = queries.reduce(function(merged2, entry) {
            return merge(merged2, entry[1].matches ? entry[0] : {});
        }, {});
        omit(options);
        set(merged);
        if (options.destroy) Splide2.destroy(options.destroy === "completely");
        else if (destroyed) {
            destroy(true);
            Splide2.mount();
        } else direction !== options.direction && Splide2.refresh();
    }
    function reduce(enable) {
        if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
    function set(opts, base, notify) {
        merge(options, opts);
        base && merge(Object.getPrototypeOf(options), opts);
        if (notify || !state.is(CREATED)) Splide2.emit(EVENT_UPDATED, options);
    }
    return {
        setup: setup,
        destroy: destroy,
        reduce: reduce,
        set: set
    };
}
var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
    width: [
        "height"
    ],
    left: [
        "top",
        "right"
    ],
    right: [
        "bottom",
        "left"
    ],
    x: [
        "y"
    ],
    X: [
        "Y"
    ],
    Y: [
        "X"
    ],
    ArrowLeft: [
        ARROW_UP,
        ARROW_RIGHT
    ],
    ArrowRight: [
        ARROW_DOWN,
        ARROW_LEFT
    ]
};
function Direction(Splide2, Components2, options) {
    function resolve(prop, axisOnly, direction) {
        direction = direction || options.direction;
        var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
        return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
            var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
            return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
        });
    }
    function orient(value) {
        return value * (options.direction === RTL ? 1 : -1);
    }
    return {
        resolve: resolve,
        orient: orient
    };
}
var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [
    ROLE,
    TAB_INDEX,
    DISABLED,
    ARIA_CONTROLS,
    ARIA_CURRENT,
    ARIA_LABEL,
    ARIA_LABELLEDBY,
    ARIA_HIDDEN,
    ARIA_ORIENTATION,
    ARIA_ROLEDESCRIPTION
];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [
    CLASS_ACTIVE,
    CLASS_VISIBLE,
    CLASS_PREV,
    CLASS_NEXT,
    CLASS_LOADING,
    CLASS_FOCUS_IN,
    CLASS_OVERFLOW
];
var CLASSES = {
    slide: CLASS_SLIDE,
    clone: CLASS_CLONE,
    arrows: CLASS_ARROWS,
    arrow: CLASS_ARROW,
    prev: CLASS_ARROW_PREV,
    next: CLASS_ARROW_NEXT,
    pagination: CLASS_PAGINATION,
    page: CLASS_PAGINATION_PAGE,
    spinner: CLASS_SPINNER
};
function closest(from, selector) {
    if (isFunction(from.closest)) return from.closest(selector);
    var elm = from;
    while(elm && elm.nodeType === 1){
        if (matches(elm, selector)) break;
        elm = elm.parentElement;
    }
    return elm;
}
var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
function Elements(Splide2, Components2, options) {
    var _EventInterface = EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
    var root = Splide2.root;
    var i18n = options.i18n;
    var elements = {};
    var slides = [];
    var rootClasses = [];
    var trackClasses = [];
    var track;
    var list;
    var isUsingKey;
    function setup() {
        collect();
        init();
        update();
    }
    function mount() {
        on(EVENT_REFRESH, destroy);
        on(EVENT_REFRESH, setup);
        on(EVENT_UPDATED, update);
        bind(document, POINTER_DOWN_EVENTS + " keydown", function(e) {
            isUsingKey = e.type === "keydown";
        }, {
            capture: true
        });
        bind(root, "focusin", function() {
            toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
        });
    }
    function destroy(completely) {
        var attrs = ALL_ATTRIBUTES.concat("style");
        empty(slides);
        removeClass(root, rootClasses);
        removeClass(track, trackClasses);
        removeAttribute([
            track,
            list
        ], attrs);
        removeAttribute(root, completely ? attrs : [
            "style",
            ARIA_ROLEDESCRIPTION
        ]);
    }
    function update() {
        removeClass(root, rootClasses);
        removeClass(track, trackClasses);
        rootClasses = getClasses(CLASS_ROOT);
        trackClasses = getClasses(CLASS_TRACK);
        addClass(root, rootClasses);
        addClass(track, trackClasses);
        setAttribute(root, ARIA_LABEL, options.label);
        setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
    }
    function collect() {
        track = find("." + CLASS_TRACK);
        list = child(track, "." + CLASS_LIST);
        assert(track && list, "A track/list element is missing.");
        push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
        forOwn({
            arrows: CLASS_ARROWS,
            pagination: CLASS_PAGINATION,
            prev: CLASS_ARROW_PREV,
            next: CLASS_ARROW_NEXT,
            bar: CLASS_PROGRESS_BAR,
            toggle: CLASS_TOGGLE
        }, function(className, key) {
            elements[key] = find("." + className);
        });
        assign(elements, {
            root: root,
            track: track,
            list: list,
            slides: slides
        });
    }
    function init() {
        var id = root.id || uniqueId(PROJECT_CODE);
        var role = options.role;
        root.id = id;
        track.id = track.id || id + "-track";
        list.id = list.id || id + "-list";
        if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) setAttribute(root, ROLE, role);
        setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
        setAttribute(list, ROLE, "presentation");
    }
    function find(selector) {
        var elm = query(root, selector);
        return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
    }
    function getClasses(base) {
        return [
            base + "--" + options.type,
            base + "--" + options.direction,
            options.drag && base + "--draggable",
            options.isNavigation && base + "--nav",
            base === CLASS_ROOT && CLASS_ACTIVE
        ];
    }
    return assign(elements, {
        setup: setup,
        mount: mount,
        destroy: destroy
    });
}
var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";
function Slide$1(Splide2, index, slideIndex, slide) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
    var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
    var resolve = Components.Direction.resolve;
    var styles = getAttribute(slide, "style");
    var label = getAttribute(slide, ARIA_LABEL);
    var isClone = slideIndex > -1;
    var container = child(slide, "." + CLASS_CONTAINER);
    var destroyed;
    function mount() {
        if (!isClone) {
            slide.id = root.id + "-slide" + pad(index + 1);
            setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
            setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
            setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [
                index + 1,
                Splide2.length
            ]));
        }
        listen();
    }
    function listen() {
        bind(slide, "click", apply(emit, EVENT_CLICK, self));
        bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
        on([
            EVENT_MOVED,
            EVENT_SHIFTED,
            EVENT_SCROLLED
        ], update);
        on(EVENT_NAVIGATION_MOUNTED, initNavigation);
        if (updateOnMove) on(EVENT_MOVE, onMove);
    }
    function destroy() {
        destroyed = true;
        event.destroy();
        removeClass(slide, STATUS_CLASSES);
        removeAttribute(slide, ALL_ATTRIBUTES);
        setAttribute(slide, "style", styles);
        setAttribute(slide, ARIA_LABEL, label || "");
    }
    function initNavigation() {
        var controls = Splide2.splides.map(function(target) {
            var Slide2 = target.splide.Components.Slides.getAt(index);
            return Slide2 ? Slide2.slide.id : "";
        }).join(" ");
        setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
        setAttribute(slide, ARIA_CONTROLS, controls);
        setAttribute(slide, ROLE, slideFocus ? "button" : "");
        slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
    }
    function onMove() {
        if (!destroyed) update();
    }
    function update() {
        if (!destroyed) {
            var curr = Splide2.index;
            updateActivity();
            updateVisibility();
            toggleClass(slide, CLASS_PREV, index === curr - 1);
            toggleClass(slide, CLASS_NEXT, index === curr + 1);
        }
    }
    function updateActivity() {
        var active = isActive();
        if (active !== hasClass(slide, CLASS_ACTIVE)) {
            toggleClass(slide, CLASS_ACTIVE, active);
            setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
            emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
        }
    }
    function updateVisibility() {
        var visible = isVisible();
        var hidden = !visible && (!isActive() || isClone);
        if (!Splide2.state.is([
            MOVING,
            SCROLLING
        ])) setAttribute(slide, ARIA_HIDDEN, hidden || "");
        setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
        if (slideFocus) setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
        if (visible !== hasClass(slide, CLASS_VISIBLE)) {
            toggleClass(slide, CLASS_VISIBLE, visible);
            emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
        }
        if (!visible && document.activeElement === slide) {
            var Slide2 = Components.Slides.getAt(Splide2.index);
            Slide2 && focus(Slide2.slide);
        }
    }
    function style$1(prop, value, useContainer) {
        style(useContainer && container || slide, prop, value);
    }
    function isActive() {
        var curr = Splide2.index;
        return curr === index || options.cloneStatus && curr === slideIndex;
    }
    function isVisible() {
        if (Splide2.is(FADE)) return isActive();
        var trackRect = rect(Components.Elements.track);
        var slideRect = rect(slide);
        var left = resolve("left", true);
        var right = resolve("right", true);
        return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
    }
    function isWithin(from, distance) {
        var diff = abs(from - index);
        if (!isClone && (options.rewind || Splide2.is(LOOP))) diff = min(diff, Splide2.length - diff);
        return diff <= distance;
    }
    var self = {
        index: index,
        slideIndex: slideIndex,
        slide: slide,
        container: container,
        isClone: isClone,
        mount: mount,
        destroy: destroy,
        update: update,
        style: style$1,
        isWithin: isWithin
    };
    return self;
}
function Slides(Splide2, Components2, options) {
    var _EventInterface2 = EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
    var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
    var Slides2 = [];
    function mount() {
        init();
        on(EVENT_REFRESH, destroy);
        on(EVENT_REFRESH, init);
    }
    function init() {
        slides.forEach(function(slide, index) {
            register(slide, index, -1);
        });
    }
    function destroy() {
        forEach$1(function(Slide2) {
            Slide2.destroy();
        });
        empty(Slides2);
    }
    function update() {
        forEach$1(function(Slide2) {
            Slide2.update();
        });
    }
    function register(slide, index, slideIndex) {
        var object = Slide$1(Splide2, index, slideIndex, slide);
        object.mount();
        Slides2.push(object);
        Slides2.sort(function(Slide1, Slide2) {
            return Slide1.index - Slide2.index;
        });
    }
    function get(excludeClones) {
        return excludeClones ? filter(function(Slide2) {
            return !Slide2.isClone;
        }) : Slides2;
    }
    function getIn(page) {
        var Controller = Components2.Controller;
        var index = Controller.toIndex(page);
        var max = Controller.hasFocus() ? 1 : options.perPage;
        return filter(function(Slide2) {
            return between(Slide2.index, index, index + max - 1);
        });
    }
    function getAt(index) {
        return filter(index)[0];
    }
    function add(items, index) {
        forEach(items, function(slide) {
            if (isString(slide)) slide = parseHtml(slide);
            if (isHTMLElement(slide)) {
                var ref = slides[index];
                ref ? before(slide, ref) : append(list, slide);
                addClass(slide, options.classes.slide);
                observeImages(slide, apply(emit, EVENT_RESIZE));
            }
        });
        emit(EVENT_REFRESH);
    }
    function remove$1(matcher) {
        remove(filter(matcher).map(function(Slide2) {
            return Slide2.slide;
        }));
        emit(EVENT_REFRESH);
    }
    function forEach$1(iteratee, excludeClones) {
        get(excludeClones).forEach(iteratee);
    }
    function filter(matcher) {
        return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
            return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
        });
    }
    function style(prop, value, useContainer) {
        forEach$1(function(Slide2) {
            Slide2.style(prop, value, useContainer);
        });
    }
    function observeImages(elm, callback) {
        var images = queryAll(elm, "img");
        var length = images.length;
        if (length) images.forEach(function(img) {
            bind(img, "load error", function() {
                if (!--length) callback();
            });
        });
        else callback();
    }
    function getLength(excludeClones) {
        return excludeClones ? slides.length : Slides2.length;
    }
    function isEnough() {
        return Slides2.length > options.perPage;
    }
    return {
        mount: mount,
        destroy: destroy,
        update: update,
        register: register,
        get: get,
        getIn: getIn,
        getAt: getAt,
        add: add,
        remove: remove$1,
        forEach: forEach$1,
        filter: filter,
        style: style,
        getLength: getLength,
        isEnough: isEnough
    };
}
function Layout(Splide2, Components2, options) {
    var _EventInterface3 = EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
    var Slides = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
    var getAt = Slides.getAt, styleSlides = Slides.style;
    var vertical;
    var rootRect;
    var overflow;
    function mount() {
        init();
        bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], init);
        on(EVENT_RESIZE, resize);
    }
    function init() {
        vertical = options.direction === TTB;
        style(root, "maxWidth", unit(options.width));
        style(track, resolve("paddingLeft"), cssPadding(false));
        style(track, resolve("paddingRight"), cssPadding(true));
        resize(true);
    }
    function resize(force) {
        var newRect = rect(root);
        if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
            style(track, "height", cssTrackHeight());
            styleSlides(resolve("marginRight"), unit(options.gap));
            styleSlides("width", cssSlideWidth());
            styleSlides("height", cssSlideHeight(), true);
            rootRect = newRect;
            emit(EVENT_RESIZED);
            if (overflow !== (overflow = isOverflow())) {
                toggleClass(root, CLASS_OVERFLOW, overflow);
                emit(EVENT_OVERFLOW, overflow);
            }
        }
    }
    function cssPadding(right) {
        var padding = options.padding;
        var prop = resolve(right ? "right" : "left");
        return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
    }
    function cssTrackHeight() {
        var height = "";
        if (vertical) {
            height = cssHeight();
            assert(height, "height or heightRatio is missing.");
            height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
        }
        return height;
    }
    function cssHeight() {
        return unit(options.height || rect(list).width * options.heightRatio);
    }
    function cssSlideWidth() {
        return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
    }
    function cssSlideHeight() {
        return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
    }
    function cssSlideSize() {
        var gap = unit(options.gap);
        return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
    }
    function listSize() {
        return rect(list)[resolve("width")];
    }
    function slideSize(index, withoutGap) {
        var Slide = getAt(index || 0);
        return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
    }
    function totalSize(index, withoutGap) {
        var Slide = getAt(index);
        if (Slide) {
            var right = rect(Slide.slide)[resolve("right")];
            var left = rect(list)[resolve("left")];
            return abs(right - left) + (withoutGap ? 0 : getGap());
        }
        return 0;
    }
    function sliderSize(withoutGap) {
        return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
    }
    function getGap() {
        var Slide = getAt(0);
        return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
    }
    function getPadding(right) {
        return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
    }
    function isOverflow() {
        return Splide2.is(FADE) || sliderSize(true) > listSize();
    }
    return {
        mount: mount,
        resize: resize,
        listSize: listSize,
        slideSize: slideSize,
        sliderSize: sliderSize,
        totalSize: totalSize,
        getPadding: getPadding,
        isOverflow: isOverflow
    };
}
var MULTIPLIER = 2;
function Clones(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on;
    var Elements = Components2.Elements, Slides = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var clones = [];
    var cloneCount;
    function mount() {
        on(EVENT_REFRESH, remount);
        on([
            EVENT_UPDATED,
            EVENT_RESIZE
        ], observe);
        if (cloneCount = computeCloneCount()) {
            generate(cloneCount);
            Components2.Layout.resize(true);
        }
    }
    function remount() {
        destroy();
        mount();
    }
    function destroy() {
        remove(clones);
        empty(clones);
        event.destroy();
    }
    function observe() {
        var count = computeCloneCount();
        if (cloneCount !== count) {
            if (cloneCount < count || !count) event.emit(EVENT_REFRESH);
        }
    }
    function generate(count) {
        var slides = Slides.get().slice();
        var length = slides.length;
        if (length) {
            while(slides.length < count)push(slides, slides);
            push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide, index) {
                var isHead = index < count;
                var clone = cloneDeep(Slide.slide, index);
                isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
                push(clones, clone);
                Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
            });
        }
    }
    function cloneDeep(elm, index) {
        var clone = elm.cloneNode(true);
        addClass(clone, options.classes.clone);
        clone.id = Splide2.root.id + "-clone" + pad(index + 1);
        return clone;
    }
    function computeCloneCount() {
        var clones2 = options.clones;
        if (!Splide2.is(LOOP)) clones2 = 0;
        else if (isUndefined(clones2)) {
            var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
            var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
            clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
        }
        return clones2;
    }
    return {
        mount: mount,
        destroy: destroy
    };
}
function Move(Splide2, Components2, options) {
    var _EventInterface4 = EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
    var set = Splide2.state.set;
    var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
    var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
    var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
    var Transition;
    function mount() {
        Transition = Components2.Transition;
        on([
            EVENT_MOUNTED,
            EVENT_RESIZED,
            EVENT_UPDATED,
            EVENT_REFRESH
        ], reposition);
    }
    function reposition() {
        if (!Components2.Controller.isBusy()) {
            Components2.Scroll.cancel();
            jump(Splide2.index);
            Components2.Slides.update();
        }
    }
    function move(dest, index, prev, callback) {
        if (dest !== index && canShift(dest > prev)) {
            cancel();
            translate(shift(getPosition(), dest > prev), true);
        }
        set(MOVING);
        emit(EVENT_MOVE, index, prev, dest);
        Transition.start(index, function() {
            set(IDLE);
            emit(EVENT_MOVED, index, prev, dest);
            callback && callback();
        });
    }
    function jump(index) {
        translate(toPosition(index, true));
    }
    function translate(position, preventLoop) {
        if (!Splide2.is(FADE)) {
            var destination = preventLoop ? position : loop(position);
            style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
            position !== destination && emit(EVENT_SHIFTED);
        }
    }
    function loop(position) {
        if (Splide2.is(LOOP)) {
            var index = toIndex(position);
            var exceededMax = index > Components2.Controller.getEnd();
            var exceededMin = index < 0;
            if (exceededMin || exceededMax) position = shift(position, exceededMax);
        }
        return position;
    }
    function shift(position, backwards) {
        var excess = position - getLimit(backwards);
        var size = sliderSize();
        position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
        return position;
    }
    function cancel() {
        translate(getPosition(), true);
        Transition.cancel();
    }
    function toIndex(position) {
        var Slides = Components2.Slides.get();
        var index = 0;
        var minDistance = Infinity;
        for(var i = 0; i < Slides.length; i++){
            var slideIndex = Slides[i].index;
            var distance = abs(toPosition(slideIndex, true) - position);
            if (distance <= minDistance) {
                minDistance = distance;
                index = slideIndex;
            } else break;
        }
        return index;
    }
    function toPosition(index, trimming) {
        var position = orient(totalSize(index - 1) - offset(index));
        return trimming ? trim(position) : position;
    }
    function getPosition() {
        var left = resolve("left");
        return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
    }
    function trim(position) {
        if (options.trimSpace && Splide2.is(SLIDE)) position = clamp(position, 0, orient(sliderSize(true) - listSize()));
        return position;
    }
    function offset(index) {
        var focus = options.focus;
        return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
    }
    function getLimit(max) {
        return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
    }
    function canShift(backwards) {
        var shifted = orient(shift(getPosition(), backwards));
        return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
    }
    function exceededLimit(max, position) {
        position = isUndefined(position) ? getPosition() : position;
        var exceededMin = max !== true && orient(position) < orient(getLimit(false));
        var exceededMax = max !== false && orient(position) > orient(getLimit(true));
        return exceededMin || exceededMax;
    }
    return {
        mount: mount,
        move: move,
        jump: jump,
        translate: translate,
        shift: shift,
        cancel: cancel,
        toIndex: toIndex,
        toPosition: toPosition,
        getPosition: getPosition,
        getLimit: getLimit,
        exceededLimit: exceededLimit,
        reposition: reposition
    };
}
function Controller(Splide2, Components2, options) {
    var _EventInterface5 = EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
    var Move = Components2.Move;
    var getPosition = Move.getPosition, getLimit = Move.getLimit, toPosition = Move.toPosition;
    var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
    var omitEnd = options.omitEnd;
    var isLoop = Splide2.is(LOOP);
    var isSlide = Splide2.is(SLIDE);
    var getNext = apply(getAdjacent, false);
    var getPrev = apply(getAdjacent, true);
    var currIndex = options.start || 0;
    var endIndex;
    var prevIndex = currIndex;
    var slideCount;
    var perMove;
    var perPage;
    function mount() {
        init();
        on([
            EVENT_UPDATED,
            EVENT_REFRESH,
            EVENT_END_INDEX_CHANGED
        ], init);
        on(EVENT_RESIZED, onResized);
    }
    function init() {
        slideCount = getLength(true);
        perMove = options.perMove;
        perPage = options.perPage;
        endIndex = getEnd();
        var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
        if (index !== currIndex) {
            currIndex = index;
            Move.reposition();
        }
    }
    function onResized() {
        if (endIndex !== getEnd()) emit(EVENT_END_INDEX_CHANGED);
    }
    function go(control, allowSameIndex, callback) {
        if (!isBusy()) {
            var dest = parse(control);
            var index = loop(dest);
            if (index > -1 && (allowSameIndex || index !== currIndex)) {
                setIndex(index);
                Move.move(dest, index, prevIndex, callback);
            }
        }
    }
    function scroll(destination, duration, snap, callback) {
        Components2.Scroll.scroll(destination, duration, snap, function() {
            var index = loop(Move.toIndex(getPosition()));
            setIndex(omitEnd ? min(index, endIndex) : index);
            callback && callback();
        });
    }
    function parse(control) {
        var index = currIndex;
        if (isString(control)) {
            var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
            if (indicator === "+" || indicator === "-") index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
            else if (indicator === ">") index = number ? toIndex(+number) : getNext(true);
            else if (indicator === "<") index = getPrev(true);
        } else index = isLoop ? control : clamp(control, 0, endIndex);
        return index;
    }
    function getAdjacent(prev, destination) {
        var number = perMove || (hasFocus() ? 1 : perPage);
        var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
        if (dest === -1 && isSlide) {
            if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) return prev ? 0 : endIndex;
        }
        return destination ? dest : loop(dest);
    }
    function computeDestIndex(dest, from, snapPage) {
        if (isEnough() || hasFocus()) {
            var index = computeMovableDestIndex(dest);
            if (index !== dest) {
                from = dest;
                dest = index;
                snapPage = false;
            }
            if (dest < 0 || dest > endIndex) {
                if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) dest = toIndex(toPage(dest));
                else {
                    if (isLoop) dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
                    else if (options.rewind) dest = dest < 0 ? endIndex : 0;
                    else dest = -1;
                }
            } else if (snapPage && dest !== from) dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        } else dest = -1;
        return dest;
    }
    function computeMovableDestIndex(dest) {
        if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
            var position = getPosition();
            while(position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind))dest < currIndex ? --dest : ++dest;
        }
        return dest;
    }
    function loop(index) {
        return isLoop ? (index + slideCount) % slideCount || 0 : index;
    }
    function getEnd() {
        var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
        while(omitEnd && end-- > 0)if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
            end++;
            break;
        }
        return clamp(end, 0, slideCount - 1);
    }
    function toIndex(page) {
        return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
    }
    function toPage(index) {
        return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
    }
    function toDest(destination) {
        var closest = Move.toIndex(destination);
        return isSlide ? clamp(closest, 0, endIndex) : closest;
    }
    function setIndex(index) {
        if (index !== currIndex) {
            prevIndex = currIndex;
            currIndex = index;
        }
    }
    function getIndex(prev) {
        return prev ? prevIndex : currIndex;
    }
    function hasFocus() {
        return !isUndefined(options.focus) || options.isNavigation;
    }
    function isBusy() {
        return Splide2.state.is([
            MOVING,
            SCROLLING
        ]) && !!options.waitForTransition;
    }
    return {
        mount: mount,
        go: go,
        scroll: scroll,
        getNext: getNext,
        getPrev: getPrev,
        getAdjacent: getAdjacent,
        getEnd: getEnd,
        setIndex: setIndex,
        getIndex: getIndex,
        toIndex: toIndex,
        toPage: toPage,
        toDest: toDest,
        hasFocus: hasFocus,
        isBusy: isBusy
    };
}
var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;
function Arrows(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, bind = event.bind, emit = event.emit;
    var classes = options.classes, i18n = options.i18n;
    var Elements = Components2.Elements, Controller = Components2.Controller;
    var placeholder = Elements.arrows, track = Elements.track;
    var wrapper = placeholder;
    var prev = Elements.prev;
    var next = Elements.next;
    var created;
    var wrapperClasses;
    var arrows = {};
    function mount() {
        init();
        on(EVENT_UPDATED, remount);
    }
    function remount() {
        destroy();
        mount();
    }
    function init() {
        var enabled = options.arrows;
        if (enabled && !(prev && next)) createArrows();
        if (prev && next) {
            assign(arrows, {
                prev: prev,
                next: next
            });
            display(wrapper, enabled ? "" : "none");
            addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
            if (enabled) {
                listen();
                update();
                setAttribute([
                    prev,
                    next
                ], ARIA_CONTROLS, track.id);
                emit(EVENT_ARROWS_MOUNTED, prev, next);
            }
        }
    }
    function destroy() {
        event.destroy();
        removeClass(wrapper, wrapperClasses);
        if (created) {
            remove(placeholder ? [
                prev,
                next
            ] : wrapper);
            prev = next = null;
        } else removeAttribute([
            prev,
            next
        ], ALL_ATTRIBUTES);
    }
    function listen() {
        on([
            EVENT_MOUNTED,
            EVENT_MOVED,
            EVENT_REFRESH,
            EVENT_SCROLLED,
            EVENT_END_INDEX_CHANGED
        ], update);
        bind(next, "click", apply(go, ">"));
        bind(prev, "click", apply(go, "<"));
    }
    function go(control) {
        Controller.go(control, true);
    }
    function createArrows() {
        wrapper = placeholder || create("div", classes.arrows);
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        append(wrapper, [
            prev,
            next
        ]);
        !placeholder && before(wrapper, track);
    }
    function createArrow(prev2) {
        var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '" focusable="false"><path d="' + (options.arrowPath || PATH) + '" />';
        return parseHtml(arrow);
    }
    function update() {
        if (prev && next) {
            var index = Splide2.index;
            var prevIndex = Controller.getPrev();
            var nextIndex = Controller.getNext();
            var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
            var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
            prev.disabled = prevIndex < 0;
            next.disabled = nextIndex < 0;
            setAttribute(prev, ARIA_LABEL, prevLabel);
            setAttribute(next, ARIA_LABEL, nextLabel);
            emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
        }
    }
    return {
        arrows: arrows,
        mount: mount,
        destroy: destroy,
        update: update
    };
}
var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
function Autoplay(Splide2, Components2, options) {
    var _EventInterface6 = EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
    var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
    var isPaused = interval.isPaused;
    var Elements = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
    var autoplay = options.autoplay;
    var hovered;
    var focused;
    var stopped = autoplay === "pause";
    function mount() {
        if (autoplay) {
            listen();
            toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
            stopped || play();
            update();
        }
    }
    function listen() {
        if (options.pauseOnHover) bind(root, "mouseenter mouseleave", function(e) {
            hovered = e.type === "mouseenter";
            autoToggle();
        });
        if (options.pauseOnFocus) bind(root, "focusin focusout", function(e) {
            focused = e.type === "focusin";
            autoToggle();
        });
        if (toggle) bind(toggle, "click", function() {
            stopped ? play() : pause(true);
        });
        on([
            EVENT_MOVE,
            EVENT_SCROLL,
            EVENT_REFRESH
        ], interval.rewind);
        on(EVENT_MOVE, onMove);
    }
    function play() {
        if (isPaused() && Components2.Slides.isEnough()) {
            interval.start(!options.resetProgress);
            focused = hovered = stopped = false;
            update();
            emit(EVENT_AUTOPLAY_PLAY);
        }
    }
    function pause(stop) {
        if (stop === void 0) stop = true;
        stopped = !!stop;
        update();
        if (!isPaused()) {
            interval.pause();
            emit(EVENT_AUTOPLAY_PAUSE);
        }
    }
    function autoToggle() {
        if (!stopped) hovered || focused ? pause(false) : play();
    }
    function update() {
        if (toggle) {
            toggleClass(toggle, CLASS_ACTIVE, !stopped);
            setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
        }
    }
    function onAnimationFrame(rate) {
        var bar = Elements.bar;
        bar && style(bar, "width", rate * 100 + "%");
        emit(EVENT_AUTOPLAY_PLAYING, rate);
    }
    function onMove(index) {
        var Slide = Components2.Slides.getAt(index);
        interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
    }
    return {
        mount: mount,
        destroy: interval.cancel,
        play: play,
        pause: pause,
        isPaused: isPaused
    };
}
function Cover(Splide2, Components2, options) {
    var _EventInterface7 = EventInterface(Splide2), on = _EventInterface7.on;
    function mount() {
        if (options.cover) {
            on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
            on([
                EVENT_MOUNTED,
                EVENT_UPDATED,
                EVENT_REFRESH
            ], apply(cover, true));
        }
    }
    function cover(cover2) {
        Components2.Slides.forEach(function(Slide) {
            var img = child(Slide.container || Slide.slide, "img");
            if (img && img.src) toggle(cover2, img, Slide);
        });
    }
    function toggle(cover2, img, Slide) {
        Slide.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
        display(img, cover2 ? "none" : "");
    }
    return {
        mount: mount,
        destroy: apply(cover, false)
    };
}
var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;
function Scroll(Splide2, Components2, options) {
    var _EventInterface8 = EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
    var set = Splide2.state.set;
    var Move = Components2.Move;
    var getPosition = Move.getPosition, getLimit = Move.getLimit, exceededLimit = Move.exceededLimit, translate = Move.translate;
    var isSlide = Splide2.is(SLIDE);
    var interval;
    var callback;
    var friction = 1;
    function mount() {
        on(EVENT_MOVE, clear);
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], cancel);
    }
    function scroll(destination, duration, snap, onScrolled, noConstrain) {
        var from = getPosition();
        clear();
        if (snap && (!isSlide || !exceededLimit())) {
            var size = Components2.Layout.sliderSize();
            var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
            destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
        }
        var noDistance = approximatelyEqual(from, destination, 1);
        friction = 1;
        duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
        callback = onScrolled;
        interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
        set(SCROLLING);
        emit(EVENT_SCROLL);
        interval.start();
    }
    function onEnd() {
        set(IDLE);
        callback && callback();
        emit(EVENT_SCROLLED);
    }
    function update(from, to, noConstrain, rate) {
        var position = getPosition();
        var target = from + (to - from) * easing(rate);
        var diff = (target - position) * friction;
        translate(position + diff);
        if (isSlide && !noConstrain && exceededLimit()) {
            friction *= FRICTION_FACTOR;
            if (abs(diff) < BOUNCE_DIFF_THRESHOLD) scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
        }
    }
    function clear() {
        if (interval) interval.cancel();
    }
    function cancel() {
        if (interval && !interval.isPaused()) {
            clear();
            onEnd();
        }
    }
    function easing(t) {
        var easingFunc = options.easingFunc;
        return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
    }
    return {
        mount: mount,
        destroy: clear,
        scroll: scroll,
        cancel: cancel
    };
}
var SCROLL_LISTENER_OPTIONS = {
    passive: false,
    capture: true
};
function Drag(Splide2, Components2, options) {
    var _EventInterface9 = EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
    var state = Splide2.state;
    var Move = Components2.Move, Scroll = Components2.Scroll, Controller = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
    var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
    var getPosition = Move.getPosition, exceededLimit = Move.exceededLimit;
    var basePosition;
    var baseEvent;
    var prevBaseEvent;
    var isFree;
    var dragging;
    var exceeded = false;
    var clickPrevented;
    var disabled;
    var target;
    function mount() {
        bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
        bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
        bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
        bind(track, "click", onClick, {
            capture: true
        });
        bind(track, "dragstart", prevent);
        on([
            EVENT_MOUNTED,
            EVENT_UPDATED
        ], init);
    }
    function init() {
        var drag = options.drag;
        disable(!drag);
        isFree = drag === "free";
    }
    function onPointerDown(e) {
        clickPrevented = false;
        if (!disabled) {
            var isTouch = isTouchEvent(e);
            if (isDraggable(e.target) && (isTouch || !e.button)) {
                if (!Controller.isBusy()) {
                    target = isTouch ? track : window;
                    dragging = state.is([
                        MOVING,
                        SCROLLING
                    ]);
                    prevBaseEvent = null;
                    bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
                    bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
                    Move.cancel();
                    Scroll.cancel();
                    save(e);
                } else prevent(e, true);
            }
        }
    }
    function onPointerMove(e) {
        if (!state.is(DRAGGING)) {
            state.set(DRAGGING);
            emit(EVENT_DRAG);
        }
        if (e.cancelable) {
            if (dragging) {
                Move.translate(basePosition + constrain(diffCoord(e)));
                var expired = diffTime(e) > LOG_INTERVAL;
                var hasExceeded = exceeded !== (exceeded = exceededLimit());
                if (expired || hasExceeded) save(e);
                clickPrevented = true;
                emit(EVENT_DRAGGING);
                prevent(e);
            } else if (isSliderDirection(e)) {
                dragging = shouldStart(e);
                prevent(e);
            }
        }
    }
    function onPointerUp(e) {
        if (state.is(DRAGGING)) {
            state.set(IDLE);
            emit(EVENT_DRAGGED);
        }
        if (dragging) {
            move(e);
            prevent(e);
        }
        unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
        unbind(target, POINTER_UP_EVENTS, onPointerUp);
        dragging = false;
    }
    function onClick(e) {
        if (!disabled && clickPrevented) prevent(e, true);
    }
    function save(e) {
        prevBaseEvent = baseEvent;
        baseEvent = e;
        basePosition = getPosition();
    }
    function move(e) {
        var velocity = computeVelocity(e);
        var destination = computeDestination(velocity);
        var rewind = options.rewind && options.rewindByDrag;
        reduce(false);
        if (isFree) Controller.scroll(destination, 0, options.snap);
        else if (Splide2.is(FADE)) Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
        else if (Splide2.is(SLIDE) && exceeded && rewind) Controller.go(exceededLimit(true) ? ">" : "<");
        else Controller.go(Controller.toDest(destination), true);
        reduce(true);
    }
    function shouldStart(e) {
        var thresholds = options.dragMinThreshold;
        var isObj = isObject(thresholds);
        var mouse = isObj && thresholds.mouse || 0;
        var touch = (isObj ? thresholds.touch : +thresholds) || 10;
        return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
    }
    function isSliderDirection(e) {
        return abs(diffCoord(e)) > abs(diffCoord(e, true));
    }
    function computeVelocity(e) {
        if (Splide2.is(LOOP) || !exceeded) {
            var time = diffTime(e);
            if (time && time < LOG_INTERVAL) return diffCoord(e) / time;
        }
        return 0;
    }
    function computeDestination(velocity) {
        return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
    }
    function diffCoord(e, orthogonal) {
        return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
    }
    function diffTime(e) {
        return timeOf(e) - timeOf(getBaseEvent(e));
    }
    function getBaseEvent(e) {
        return baseEvent === e && prevBaseEvent || baseEvent;
    }
    function coordOf(e, orthogonal) {
        return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
    }
    function constrain(diff) {
        return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
    }
    function isDraggable(target2) {
        var noDrag = options.noDrag;
        return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
    }
    function isTouchEvent(e) {
        return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
    }
    function isDragging() {
        return dragging;
    }
    function disable(value) {
        disabled = value;
    }
    return {
        mount: mount,
        disable: disable,
        isDragging: isDragging
    };
}
var NORMALIZATION_MAP = {
    Spacebar: " ",
    Right: ARROW_RIGHT,
    Left: ARROW_LEFT,
    Up: ARROW_UP,
    Down: ARROW_DOWN
};
function normalizeKey(key) {
    key = isString(key) ? key : key.key;
    return NORMALIZATION_MAP[key] || key;
}
var KEYBOARD_EVENT = "keydown";
function Keyboard(Splide2, Components2, options) {
    var _EventInterface10 = EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
    var root = Splide2.root;
    var resolve = Components2.Direction.resolve;
    var target;
    var disabled;
    function mount() {
        init();
        on(EVENT_UPDATED, destroy);
        on(EVENT_UPDATED, init);
        on(EVENT_MOVE, onMove);
    }
    function init() {
        var keyboard = options.keyboard;
        if (keyboard) {
            target = keyboard === "global" ? window : root;
            bind(target, KEYBOARD_EVENT, onKeydown);
        }
    }
    function destroy() {
        unbind(target, KEYBOARD_EVENT);
    }
    function disable(value) {
        disabled = value;
    }
    function onMove() {
        var _disabled = disabled;
        disabled = true;
        nextTick(function() {
            disabled = _disabled;
        });
    }
    function onKeydown(e) {
        if (!disabled) {
            var key = normalizeKey(e);
            if (key === resolve(ARROW_LEFT)) Splide2.go("<");
            else if (key === resolve(ARROW_RIGHT)) Splide2.go(">");
        }
    }
    return {
        mount: mount,
        destroy: destroy,
        disable: disable
    };
}
var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
function LazyLoad(Splide2, Components2, options) {
    var _EventInterface11 = EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
    var isSequential = options.lazyLoad === "sequential";
    var events = [
        EVENT_MOVED,
        EVENT_SCROLLED
    ];
    var entries = [];
    function mount() {
        if (options.lazyLoad) {
            init();
            on(EVENT_REFRESH, init);
        }
    }
    function init() {
        empty(entries);
        register();
        if (isSequential) loadNext();
        else {
            off(events);
            on(events, check);
            check();
        }
    }
    function register() {
        Components2.Slides.forEach(function(Slide) {
            queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function(img) {
                var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
                var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
                if (src !== img.src || srcset !== img.srcset) {
                    var className = options.classes.spinner;
                    var parent = img.parentElement;
                    var spinner = child(parent, "." + className) || create("span", className, parent);
                    entries.push([
                        img,
                        Slide,
                        spinner
                    ]);
                    img.src || display(img, "none");
                }
            });
        });
    }
    function check() {
        entries = entries.filter(function(data) {
            var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
            return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
        });
        entries.length || off(events);
    }
    function load(data) {
        var img = data[0];
        addClass(data[1].slide, CLASS_LOADING);
        bind(img, "load error", apply(onLoad, data));
        setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
        setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
        removeAttribute(img, SRC_DATA_ATTRIBUTE);
        removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
    }
    function onLoad(data, e) {
        var img = data[0], Slide = data[1];
        removeClass(Slide.slide, CLASS_LOADING);
        if (e.type !== "error") {
            remove(data[2]);
            display(img, "");
            emit(EVENT_LAZYLOAD_LOADED, img, Slide);
            emit(EVENT_RESIZE);
        }
        isSequential && loadNext();
    }
    function loadNext() {
        entries.length && load(entries.shift());
    }
    return {
        mount: mount,
        destroy: apply(empty, entries),
        check: check
    };
}
function Pagination(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Slides = Components2.Slides, Elements = Components2.Elements, Controller = Components2.Controller;
    var hasFocus = Controller.hasFocus, getIndex = Controller.getIndex, go = Controller.go;
    var resolve = Components2.Direction.resolve;
    var placeholder = Elements.pagination;
    var items = [];
    var list;
    var paginationClasses;
    function mount() {
        destroy();
        on([
            EVENT_UPDATED,
            EVENT_REFRESH,
            EVENT_END_INDEX_CHANGED
        ], mount);
        var enabled = options.pagination;
        placeholder && display(placeholder, enabled ? "" : "none");
        if (enabled) {
            on([
                EVENT_MOVE,
                EVENT_SCROLL,
                EVENT_SCROLLED
            ], update);
            createPagination();
            update();
            emit(EVENT_PAGINATION_MOUNTED, {
                list: list,
                items: items
            }, getAt(Splide2.index));
        }
    }
    function destroy() {
        if (list) {
            remove(placeholder ? slice(list.children) : list);
            removeClass(list, paginationClasses);
            empty(items);
            list = null;
        }
        event.destroy();
    }
    function createPagination() {
        var length = Splide2.length;
        var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
        var max = hasFocus() ? Controller.getEnd() + 1 : ceil(length / perPage);
        list = placeholder || create("ul", classes.pagination, Elements.track.parentElement);
        addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
        setAttribute(list, ROLE, "tablist");
        setAttribute(list, ARIA_LABEL, i18n.select);
        setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
        for(var i = 0; i < max; i++){
            var li = create("li", null, list);
            var button = create("button", {
                class: classes.page,
                type: "button"
            }, li);
            var controls = Slides.getIn(i).map(function(Slide) {
                return Slide.slide.id;
            });
            var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
            bind(button, "click", apply(onClick, i));
            if (options.paginationKeyboard) bind(button, "keydown", apply(onKeydown, i));
            setAttribute(li, ROLE, "presentation");
            setAttribute(button, ROLE, "tab");
            setAttribute(button, ARIA_CONTROLS, controls.join(" "));
            setAttribute(button, ARIA_LABEL, format(text, i + 1));
            setAttribute(button, TAB_INDEX, -1);
            items.push({
                li: li,
                button: button,
                page: i
            });
        }
    }
    function onClick(page) {
        go(">" + page, true);
    }
    function onKeydown(page, e) {
        var length = items.length;
        var key = normalizeKey(e);
        var dir = getDirection();
        var nextPage = -1;
        if (key === resolve(ARROW_RIGHT, false, dir)) nextPage = ++page % length;
        else if (key === resolve(ARROW_LEFT, false, dir)) nextPage = (--page + length) % length;
        else if (key === "Home") nextPage = 0;
        else if (key === "End") nextPage = length - 1;
        var item = items[nextPage];
        if (item) {
            focus(item.button);
            go(">" + nextPage);
            prevent(e, true);
        }
    }
    function getDirection() {
        return options.paginationDirection || options.direction;
    }
    function getAt(index) {
        return items[Controller.toPage(index)];
    }
    function update() {
        var prev = getAt(getIndex(true));
        var curr = getAt(getIndex());
        if (prev) {
            var button = prev.button;
            removeClass(button, CLASS_ACTIVE);
            removeAttribute(button, ARIA_SELECTED);
            setAttribute(button, TAB_INDEX, -1);
        }
        if (curr) {
            var _button = curr.button;
            addClass(_button, CLASS_ACTIVE);
            setAttribute(_button, ARIA_SELECTED, true);
            setAttribute(_button, TAB_INDEX, "");
        }
        emit(EVENT_PAGINATION_UPDATED, {
            list: list,
            items: items
        }, prev, curr);
    }
    return {
        items: items,
        mount: mount,
        destroy: destroy,
        getAt: getAt,
        update: update
    };
}
var TRIGGER_KEYS = [
    " ",
    "Enter"
];
function Sync(Splide2, Components2, options) {
    var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
    var events = [];
    function mount() {
        Splide2.splides.forEach(function(target) {
            if (!target.isParent) {
                sync(Splide2, target.splide);
                sync(target.splide, Splide2);
            }
        });
        if (isNavigation) navigate();
    }
    function destroy() {
        events.forEach(function(event) {
            event.destroy();
        });
        empty(events);
    }
    function remount() {
        destroy();
        mount();
    }
    function sync(splide, target) {
        var event = EventInterface(splide);
        event.on(EVENT_MOVE, function(index, prev, dest) {
            target.go(target.is(LOOP) ? dest : index);
        });
        events.push(event);
    }
    function navigate() {
        var event = EventInterface(Splide2);
        var on = event.on;
        on(EVENT_CLICK, onClick);
        on(EVENT_SLIDE_KEYDOWN, onKeydown);
        on([
            EVENT_MOUNTED,
            EVENT_UPDATED
        ], update);
        events.push(event);
        event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
    }
    function update() {
        setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
    }
    function onClick(Slide) {
        Splide2.go(Slide.index);
    }
    function onKeydown(Slide, e) {
        if (includes(TRIGGER_KEYS, normalizeKey(e))) {
            onClick(Slide);
            prevent(e);
        }
    }
    return {
        setup: apply(Components2.Media.set, {
            slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
        }, true),
        mount: mount,
        destroy: destroy,
        remount: remount
    };
}
function Wheel(Splide2, Components2, options) {
    var _EventInterface12 = EventInterface(Splide2), bind = _EventInterface12.bind;
    var lastTime = 0;
    function mount() {
        if (options.wheel) bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
    function onWheel(e) {
        if (e.cancelable) {
            var deltaY = e.deltaY;
            var backwards = deltaY < 0;
            var timeStamp = timeOf(e);
            var _min = options.wheelMinThreshold || 0;
            var sleep = options.wheelSleep || 0;
            if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
                Splide2.go(backwards ? "<" : ">");
                lastTime = timeStamp;
            }
            shouldPrevent(backwards) && prevent(e);
        }
    }
    function shouldPrevent(backwards) {
        return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
    }
    return {
        mount: mount
    };
}
var SR_REMOVAL_DELAY = 90;
function Live(Splide2, Components2, options) {
    var _EventInterface13 = EventInterface(Splide2), on = _EventInterface13.on;
    var track = Components2.Elements.track;
    var enabled = options.live && !options.isNavigation;
    var sr = create("span", CLASS_SR);
    var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
    function mount() {
        if (enabled) {
            disable(!Components2.Autoplay.isPaused());
            setAttribute(track, ARIA_ATOMIC, true);
            sr.textContent = "\u2026";
            on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
            on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
            on([
                EVENT_MOVED,
                EVENT_SCROLLED
            ], apply(toggle, true));
        }
    }
    function toggle(active) {
        setAttribute(track, ARIA_BUSY, active);
        if (active) {
            append(track, sr);
            interval.start();
        } else {
            remove(sr);
            interval.cancel();
        }
    }
    function destroy() {
        removeAttribute(track, [
            ARIA_LIVE,
            ARIA_ATOMIC,
            ARIA_BUSY
        ]);
        remove(sr);
    }
    function disable(disabled) {
        if (enabled) setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
    return {
        mount: mount,
        disable: disable,
        destroy: destroy
    };
}
var ComponentConstructors = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Media: Media,
    Direction: Direction,
    Elements: Elements,
    Slides: Slides,
    Layout: Layout,
    Clones: Clones,
    Move: Move,
    Controller: Controller,
    Arrows: Arrows,
    Autoplay: Autoplay,
    Cover: Cover,
    Scroll: Scroll,
    Drag: Drag,
    Keyboard: Keyboard,
    LazyLoad: LazyLoad,
    Pagination: Pagination,
    Sync: Sync,
    Wheel: Wheel,
    Live: Live
});
var I18N = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s"
};
var DEFAULTS = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: true,
    arrows: true,
    pagination: true,
    paginationKeyboard: true,
    interval: 5e3,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: true,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: true,
    direction: "ltr",
    trimSpace: true,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: true,
    classes: CLASSES,
    i18n: I18N,
    reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: "pause"
    }
};
function Fade(Splide2, Components2, options) {
    var Slides = Components2.Slides;
    function mount() {
        EventInterface(Splide2).on([
            EVENT_MOUNTED,
            EVENT_REFRESH
        ], init);
    }
    function init() {
        Slides.forEach(function(Slide) {
            Slide.style("transform", "translateX(-" + 100 * Slide.index + "%)");
        });
    }
    function start(index, done) {
        Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
        nextTick(done);
    }
    return {
        mount: mount,
        start: start,
        cancel: noop
    };
}
function Slide(Splide2, Components2, options) {
    var Move = Components2.Move, Controller = Components2.Controller, Scroll = Components2.Scroll;
    var list = Components2.Elements.list;
    var transition = apply(style, list, "transition");
    var endCallback;
    function mount() {
        EventInterface(Splide2).bind(list, "transitionend", function(e) {
            if (e.target === list && endCallback) {
                cancel();
                endCallback();
            }
        });
    }
    function start(index, done) {
        var destination = Move.toPosition(index, true);
        var position = Move.getPosition();
        var speed = getSpeed(index);
        if (abs(destination - position) >= 1 && speed >= 1) {
            if (options.useScroll) Scroll.scroll(destination, speed, false, done);
            else {
                transition("transform " + speed + "ms " + options.easing);
                Move.translate(destination, true);
                endCallback = done;
            }
        } else {
            Move.jump(index);
            done();
        }
    }
    function cancel() {
        transition("");
        Scroll.cancel();
    }
    function getSpeed(index) {
        var rewindSpeed = options.rewindSpeed;
        if (Splide2.is(SLIDE) && rewindSpeed) {
            var prev = Controller.getIndex(true);
            var end = Controller.getEnd();
            if (prev === 0 && index >= end || prev >= end && index === 0) return rewindSpeed;
        }
        return options.speed;
    }
    return {
        mount: mount,
        start: start,
        cancel: cancel
    };
}
var _Splide = /*#__PURE__*/ function() {
    function _Splide(target, options) {
        this.event = EventInterface();
        this.Components = {};
        this.state = State(CREATED);
        this.splides = [];
        this._o = {};
        this._E = {};
        var root = isString(target) ? query(document, target) : target;
        assert(root, root + " is invalid.");
        this.root = root;
        options = merge({
            label: getAttribute(root, ARIA_LABEL) || "",
            labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
        }, DEFAULTS, _Splide.defaults, options || {});
        try {
            merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
        } catch (e) {
            assert(false, "Invalid JSON");
        }
        this._o = Object.create(merge({}, options));
    }
    var _proto = _Splide.prototype;
    _proto.mount = function mount(Extensions, Transition) {
        var _this = this;
        var state = this.state, Components2 = this.Components;
        assert(state.is([
            CREATED,
            DESTROYED
        ]), "Already mounted!");
        state.set(CREATED);
        this._C = Components2;
        this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
        this._E = Extensions || this._E;
        var Constructors = assign({}, ComponentConstructors, this._E, {
            Transition: this._T
        });
        forOwn(Constructors, function(Component, key) {
            var component = Component(_this, Components2, _this._o);
            Components2[key] = component;
            component.setup && component.setup();
        });
        forOwn(Components2, function(component) {
            component.mount && component.mount();
        });
        this.emit(EVENT_MOUNTED);
        addClass(this.root, CLASS_INITIALIZED);
        state.set(IDLE);
        this.emit(EVENT_READY);
        return this;
    };
    _proto.sync = function sync(splide) {
        this.splides.push({
            splide: splide
        });
        splide.splides.push({
            splide: this,
            isParent: true
        });
        if (this.state.is(IDLE)) {
            this._C.Sync.remount();
            splide.Components.Sync.remount();
        }
        return this;
    };
    _proto.go = function go(control) {
        this._C.Controller.go(control);
        return this;
    };
    _proto.on = function on(events, callback) {
        this.event.on(events, callback);
        return this;
    };
    _proto.off = function off(events) {
        this.event.off(events);
        return this;
    };
    _proto.emit = function emit(event) {
        var _this$event;
        (_this$event = this.event).emit.apply(_this$event, [
            event
        ].concat(slice(arguments, 1)));
        return this;
    };
    _proto.add = function add(slides, index) {
        this._C.Slides.add(slides, index);
        return this;
    };
    _proto.remove = function remove(matcher) {
        this._C.Slides.remove(matcher);
        return this;
    };
    _proto.is = function is(type) {
        return this._o.type === type;
    };
    _proto.refresh = function refresh() {
        this.emit(EVENT_REFRESH);
        return this;
    };
    _proto.destroy = function destroy(completely) {
        if (completely === void 0) completely = true;
        var event = this.event, state = this.state;
        if (state.is(CREATED)) EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
        else {
            forOwn(this._C, function(component) {
                component.destroy && component.destroy(completely);
            }, true);
            event.emit(EVENT_DESTROY);
            event.destroy();
            completely && empty(this.splides);
            state.set(DESTROYED);
        }
        return this;
    };
    _createClass(_Splide, [
        {
            key: "options",
            get: function get() {
                return this._o;
            },
            set: function set(options) {
                this._C.Media.set(options, true, true);
            }
        },
        {
            key: "length",
            get: function get() {
                return this._C.Slides.getLength(true);
            }
        },
        {
            key: "index",
            get: function get() {
                return this._C.Controller.getIndex();
            }
        }
    ]);
    return _Splide;
}();
var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
    listTag: "ul",
    slideTag: "li"
};
var Style = /*#__PURE__*/ function() {
    function Style(id, options) {
        this.styles = {};
        this.id = id;
        this.options = options;
    }
    var _proto2 = Style.prototype;
    _proto2.rule = function rule(selector, prop, value, breakpoint) {
        breakpoint = breakpoint || "default";
        var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
        var styles = selectors[selector] = selectors[selector] || {};
        styles[prop] = value;
    };
    _proto2.build = function build() {
        var _this2 = this;
        var css = "";
        if (this.styles.default) css += this.buildSelectors(this.styles.default);
        Object.keys(this.styles).sort(function(n, m) {
            return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
        }).forEach(function(breakpoint) {
            if (breakpoint !== "default") {
                css += "@media screen and (max-width: " + breakpoint + "px) {";
                css += _this2.buildSelectors(_this2.styles[breakpoint]);
                css += "}";
            }
        });
        return css;
    };
    _proto2.buildSelectors = function buildSelectors(selectors) {
        var _this3 = this;
        var css = "";
        forOwn(selectors, function(styles, selector) {
            selector = ("#" + _this3.id + " " + selector).trim();
            css += selector + " {";
            forOwn(styles, function(value, prop) {
                if (value || value === 0) css += prop + ": " + value + ";";
            });
            css += "}";
        });
        return css;
    };
    return Style;
}();
var SplideRenderer = /*#__PURE__*/ function() {
    function SplideRenderer(contents, options, config, defaults) {
        this.slides = [];
        this.options = {};
        this.breakpoints = [];
        merge(DEFAULTS, defaults || {});
        merge(merge(this.options, DEFAULTS), options || {});
        this.contents = contents;
        this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
        this.id = this.config.id || uniqueId("splide");
        this.Style = new Style(this.id, this.options);
        this.Direction = Direction(null, null, this.options);
        assert(this.contents.length, "Provide at least 1 content.");
        this.init();
    }
    SplideRenderer.clean = function clean(splide) {
        var _EventInterface14 = EventInterface(splide), on = _EventInterface14.on;
        var root = splide.root;
        var clones = queryAll(root, "." + CLASS_CLONE);
        on(EVENT_MOUNTED, function() {
            remove(child(root, "style"));
        });
        remove(clones);
    };
    var _proto3 = SplideRenderer.prototype;
    _proto3.init = function init() {
        this.parseBreakpoints();
        this.initSlides();
        this.registerRootStyles();
        this.registerTrackStyles();
        this.registerSlideStyles();
        this.registerListStyles();
    };
    _proto3.initSlides = function initSlides() {
        var _this4 = this;
        push(this.slides, this.contents.map(function(content, index) {
            content = isString(content) ? {
                html: content
            } : content;
            content.styles = content.styles || {};
            content.attrs = content.attrs || {};
            _this4.cover(content);
            var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
            assign(content.attrs, {
                class: (classes + " " + (content.attrs.class || "")).trim(),
                style: _this4.buildStyles(content.styles)
            });
            return content;
        }));
        if (this.isLoop()) this.generateClones(this.slides);
    };
    _proto3.registerRootStyles = function registerRootStyles() {
        var _this5 = this;
        this.breakpoints.forEach(function(_ref2) {
            var width = _ref2[0], options = _ref2[1];
            _this5.Style.rule(" ", "max-width", unit(options.width), width);
        });
    };
    _proto3.registerTrackStyles = function registerTrackStyles() {
        var _this6 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_TRACK;
        this.breakpoints.forEach(function(_ref3) {
            var width = _ref3[0], options = _ref3[1];
            Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
            Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
            Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
        });
    };
    _proto3.registerListStyles = function registerListStyles() {
        var _this7 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_LIST;
        this.breakpoints.forEach(function(_ref4) {
            var width = _ref4[0], options = _ref4[1];
            Style2.rule(selector, "transform", _this7.buildTranslate(options), width);
            if (!_this7.cssSlideHeight(options)) Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
        });
    };
    _proto3.registerSlideStyles = function registerSlideStyles() {
        var _this8 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_SLIDE;
        this.breakpoints.forEach(function(_ref5) {
            var width = _ref5[0], options = _ref5[1];
            Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
            Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
            Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
            Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
        });
    };
    _proto3.buildTranslate = function buildTranslate(options) {
        var _this$Direction = this.Direction, resolve = _this$Direction.resolve, orient = _this$Direction.orient;
        var values = [];
        values.push(this.cssOffsetClones(options));
        values.push(this.cssOffsetGaps(options));
        if (this.isCenter(options)) {
            values.push(this.buildCssValue(orient(-50), "%"));
            values.push.apply(values, this.cssOffsetCenter(options));
        }
        return values.filter(Boolean).map(function(value) {
            return "translate" + resolve("X") + "(" + value + ")";
        }).join(" ");
    };
    _proto3.cssOffsetClones = function cssOffsetClones(options) {
        var _this$Direction2 = this.Direction, resolve = _this$Direction2.resolve, orient = _this$Direction2.orient;
        var cloneCount = this.getCloneCount();
        if (this.isFixedWidth(options)) {
            var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]), value = _this$parseCssValue.value, unit2 = _this$parseCssValue.unit;
            return this.buildCssValue(orient(value) * cloneCount, unit2);
        }
        var percent = 100 * cloneCount / options.perPage;
        return orient(percent) + "%";
    };
    _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
        var _this$Direction3 = this.Direction, resolve = _this$Direction3.resolve, orient = _this$Direction3.orient;
        if (this.isFixedWidth(options)) {
            var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]), value = _this$parseCssValue2.value, unit2 = _this$parseCssValue2.unit;
            return [
                this.buildCssValue(orient(value / 2), unit2)
            ];
        }
        var values = [];
        var perPage = options.perPage, gap = options.gap;
        values.push(orient(50 / perPage) + "%");
        if (gap) {
            var _this$parseCssValue3 = this.parseCssValue(gap), _value = _this$parseCssValue3.value, _unit = _this$parseCssValue3.unit;
            var gapOffset = (_value / perPage - _value) / 2;
            values.push(this.buildCssValue(orient(gapOffset), _unit));
        }
        return values;
    };
    _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
        var cloneCount = this.getCloneCount();
        if (cloneCount && options.gap) {
            var orient = this.Direction.orient;
            var _this$parseCssValue4 = this.parseCssValue(options.gap), value = _this$parseCssValue4.value, unit2 = _this$parseCssValue4.unit;
            if (this.isFixedWidth(options)) return this.buildCssValue(orient(value * cloneCount), unit2);
            var perPage = options.perPage;
            var gaps = cloneCount / perPage;
            return this.buildCssValue(orient(gaps * value), unit2);
        }
        return "";
    };
    _proto3.resolve = function resolve(prop) {
        return camelToKebab(this.Direction.resolve(prop));
    };
    _proto3.cssPadding = function cssPadding(options, right) {
        var padding = options.padding;
        var prop = this.Direction.resolve(right ? "right" : "left", true);
        return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
    };
    _proto3.cssTrackHeight = function cssTrackHeight(options) {
        var height = "";
        if (this.isVertical()) {
            height = this.cssHeight(options);
            assert(height, '"height" is missing.');
            height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
        }
        return height;
    };
    _proto3.cssHeight = function cssHeight(options) {
        return unit(options.height);
    };
    _proto3.cssSlideWidth = function cssSlideWidth(options) {
        return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
    };
    _proto3.cssSlideHeight = function cssSlideHeight(options) {
        return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
    };
    _proto3.cssSlideSize = function cssSlideSize(options) {
        var gap = unit(options.gap);
        return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
    };
    _proto3.cssAspectRatio = function cssAspectRatio(options) {
        var heightRatio = options.heightRatio;
        return heightRatio ? "" + 1 / heightRatio : "";
    };
    _proto3.buildCssValue = function buildCssValue(value, unit2) {
        return "" + value + unit2;
    };
    _proto3.parseCssValue = function parseCssValue(value) {
        if (isString(value)) {
            var number = parseFloat(value) || 0;
            var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
            return {
                value: number,
                unit: unit2
            };
        }
        return {
            value: value,
            unit: "px"
        };
    };
    _proto3.parseBreakpoints = function parseBreakpoints() {
        var _this9 = this;
        var breakpoints = this.options.breakpoints;
        this.breakpoints.push([
            "default",
            this.options
        ]);
        if (breakpoints) forOwn(breakpoints, function(options, width) {
            _this9.breakpoints.push([
                width,
                merge(merge({}, _this9.options), options)
            ]);
        });
    };
    _proto3.isFixedWidth = function isFixedWidth(options) {
        return !!options[this.Direction.resolve("fixedWidth")];
    };
    _proto3.isLoop = function isLoop() {
        return this.options.type === LOOP;
    };
    _proto3.isCenter = function isCenter(options) {
        if (options.focus === "center") {
            if (this.isLoop()) return true;
            if (this.options.type === SLIDE) return !this.options.trimSpace;
        }
        return false;
    };
    _proto3.isVertical = function isVertical() {
        return this.options.direction === TTB;
    };
    _proto3.buildClasses = function buildClasses() {
        var options = this.options;
        return [
            CLASS_ROOT,
            CLASS_ROOT + "--" + options.type,
            CLASS_ROOT + "--" + options.direction,
            options.drag && CLASS_ROOT + "--draggable",
            options.isNavigation && CLASS_ROOT + "--nav",
            CLASS_ACTIVE,
            !this.config.hidden && CLASS_RENDERED
        ].filter(Boolean).join(" ");
    };
    _proto3.buildAttrs = function buildAttrs(attrs) {
        var attr = "";
        forOwn(attrs, function(value, key) {
            attr += value ? " " + camelToKebab(key) + '="' + value + '"' : "";
        });
        return attr.trim();
    };
    _proto3.buildStyles = function buildStyles(styles) {
        var style = "";
        forOwn(styles, function(value, key) {
            style += " " + camelToKebab(key) + ":" + value + ";";
        });
        return style.trim();
    };
    _proto3.renderSlides = function renderSlides() {
        var _this10 = this;
        var tag = this.config.slideTag;
        return this.slides.map(function(content) {
            return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
        }).join("");
    };
    _proto3.cover = function cover(content) {
        var styles = content.styles, _content$html = content.html, html = _content$html === void 0 ? "" : _content$html;
        if (this.options.cover && !this.options.lazyLoad) {
            var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);
            if (src && src[2]) styles.background = "center/cover no-repeat url('" + src[2] + "')";
        }
    };
    _proto3.generateClones = function generateClones(contents) {
        var classes = this.options.classes;
        var count = this.getCloneCount();
        var slides = contents.slice();
        while(slides.length < count)push(slides, slides);
        push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function(content, index) {
            var attrs = assign({}, content.attrs, {
                class: content.attrs.class + " " + classes.clone
            });
            var clone = assign({}, content, {
                attrs: attrs
            });
            index < count ? contents.unshift(clone) : contents.push(clone);
        });
    };
    _proto3.getCloneCount = function getCloneCount() {
        if (this.isLoop()) {
            var options = this.options;
            if (options.clones) return options.clones;
            var perPage = max.apply(void 0, this.breakpoints.map(function(_ref6) {
                var options2 = _ref6[1];
                return options2.perPage;
            }));
            return perPage * ((options.flickMaxPages || 1) + 1);
        }
        return 0;
    };
    _proto3.renderArrows = function renderArrows() {
        var html = "";
        html += '<div class="' + this.options.classes.arrows + '">';
        html += this.renderArrow(true);
        html += this.renderArrow(false);
        html += "</div>";
        return html;
    };
    _proto3.renderArrow = function renderArrow(prev) {
        var _this$options = this.options, classes = _this$options.classes, i18n = _this$options.i18n;
        var attrs = {
            class: classes.arrow + " " + (prev ? classes.prev : classes.next),
            type: "button",
            ariaLabel: prev ? i18n.prev : i18n.next
        };
        return "<button " + this.buildAttrs(attrs) + '><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '"><path d="' + (this.options.arrowPath || PATH) + '" /></svg></button>';
    };
    _proto3.html = function html() {
        var _this$config = this.config, rootClass = _this$config.rootClass, listTag = _this$config.listTag, arrows = _this$config.arrows, beforeTrack = _this$config.beforeTrack, afterTrack = _this$config.afterTrack, slider = _this$config.slider, beforeSlider = _this$config.beforeSlider, afterSlider = _this$config.afterSlider;
        var html = "";
        html += '<div id="' + this.id + '" class="' + this.buildClasses() + " " + (rootClass || "") + '">';
        html += "<style>" + this.Style.build() + "</style>";
        if (slider) {
            html += beforeSlider || "";
            html += '<div class="splide__slider">';
        }
        html += beforeTrack || "";
        if (arrows) html += this.renderArrows();
        html += '<div class="splide__track">';
        html += "<" + listTag + ' class="splide__list">';
        html += this.renderSlides();
        html += "</" + listTag + ">";
        html += "</div>";
        html += afterTrack || "";
        if (slider) {
            html += "</div>";
            html += afterSlider || "";
        }
        html += "</div>";
        return html;
    };
    return SplideRenderer;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lINO8":[function(require,module,exports) {
module.exports = require("edc71edd1510d3a8").getBundleURL("lAF1V") + "Image1.7a668ad2.png" + "?" + Date.now();

},{"edc71edd1510d3a8":"lgJ39"}],"fJn8S":[function(require,module,exports) {
module.exports = require("5ccde0e58dc17622").getBundleURL("lAF1V") + "Image2.8a8d5ba0.png" + "?" + Date.now();

},{"5ccde0e58dc17622":"lgJ39"}],"9T6aC":[function(require,module,exports) {
module.exports = require("5b1a615e8a91734a").getBundleURL("lAF1V") + "Image3.65a3d10e.png" + "?" + Date.now();

},{"5b1a615e8a91734a":"lgJ39"}],"dcKRr":[function(require,module,exports) {
module.exports = require("5c0765063e6960d2").getBundleURL("lAF1V") + "Image4.10ba38b2.png" + "?" + Date.now();

},{"5c0765063e6960d2":"lgJ39"}],"4Wc5b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "URL", ()=>URL);
parcelHelpers.export(exports, "SLIDES_PER_PAGE_MB", ()=>SLIDES_PER_PAGE_MB);
parcelHelpers.export(exports, "SLIDES_PER_PAGE_TB", ()=>SLIDES_PER_PAGE_TB);
parcelHelpers.export(exports, "SLIDES_PER_PAGE_LT", ()=>SLIDES_PER_PAGE_LT);
parcelHelpers.export(exports, "SLIDES_PER_PAGE_DE", ()=>SLIDES_PER_PAGE_DE);
parcelHelpers.export(exports, "mediaQueryConfig", ()=>mediaQueryConfig);
parcelHelpers.export(exports, "devices", ()=>devices);
const API_KEY = "e82b2dba";
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
const SLIDES_PER_PAGE_MB = 2;
const SLIDES_PER_PAGE_TB = 3;
const SLIDES_PER_PAGE_LT = 4;
const SLIDES_PER_PAGE_DE = 5;
const mediaQueryConfig = {
    "(min-width: 0px)": SLIDES_PER_PAGE_MB,
    "(min-width: 768px)": SLIDES_PER_PAGE_TB,
    "(min-width: 1440px)": SLIDES_PER_PAGE_LT,
    "(min-width: 1920px)": SLIDES_PER_PAGE_DE
};
const devices = [
    {
        icon: "phoneicon",
        device: "smartphone",
        caption: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        icon: "tablet",
        device: "tablet",
        caption: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        icon: "TV",
        device: "smart TV",
        caption: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        icon: "laptop",
        device: "laptops",
        caption: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        icon: "gaming",
        device: "gaming consoles",
        caption: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        icon: "VR",
        device: "VR headsets",
        caption: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    }
];
const POSTER_MOVIES = {
    action: [
        "the union",
        "civil war",
        "deadpool",
        "the fall guy"
    ],
    adventure: [
        "blue beetle",
        "atlas",
        "spaceman",
        "borderlands"
    ],
    comedy: [
        "fly me to the moon",
        "incoming",
        "superbad",
        "green book"
    ],
    drama: [
        "war dogs",
        "waves",
        "southpaw",
        "the killer"
    ],
    horro: [
        "talk to me",
        "dark harvest",
        "candyman",
        "baghead"
    ]
};
const MOVIES = {
    action: [
        "the union",
        "civil war",
        "deadpool",
        "the fall guy",
        "john wick",
        "lift",
        "freelance",
        "hit man",
        "wing women",
        "red notice"
    ],
    adventure: [
        "blue beetle",
        "atlas",
        "spaceman",
        "borderlands",
        "madame web",
        "inception",
        "the creator",
        "interstellar",
        "dolittle",
        "no time to die"
    ],
    comedy: [
        "fly me to the moon",
        "incoming",
        "superbad",
        "green book",
        "scary movie",
        "freaky",
        "the gentlman",
        "getout",
        "magic mike",
        "anyone but you"
    ],
    drama: [
        "war dogs",
        "waves",
        "southpaw",
        "the killer",
        "the hate you give",
        "joker",
        "smile",
        "the black phone",
        "selma",
        "the iron claw"
    ],
    horro: [
        "talk to me",
        "dark harvest",
        "candyman",
        "baghead",
        "seven",
        "a hunted house",
        "split",
        "halloween",
        "the first omen",
        "agness"
    ]
};
const SHOW_POSTERS = {
    action: [
        "the rookie",
        "the acolyte",
        "gotham",
        "squid game"
    ],
    // prettier-ignore
    adventure: [
        "game of thrones",
        "the wheel of time",
        "smallville",
        "the flash"
    ],
    comedy: [
        "modern family",
        "the nanny",
        "bad sisters",
        "emily in paris"
    ],
    drama: [
        "severance",
        "tulsa king",
        "show horses",
        "shirinking"
    ],
    horro: [
        "stranger things",
        "the walking dead",
        "them",
        "supernatural"
    ]
};
const SHOWS = {
    action: [
        "the rookie",
        "the acolyte",
        "gotham",
        "squid game",
        "the terminal list",
        "fire country",
        "the old man",
        "arcane",
        "seal team",
        "the equalizer"
    ],
    adventure: [
        "game of thrones",
        "the wheel of time",
        "smallville",
        "the flash",
        "the umbrella academy",
        "vikings",
        "fallout",
        "outlander",
        "sweet tooth",
        "black sails"
    ],
    comedy: [
        "modern family",
        "the nanny",
        "bad sisters",
        "emily in paris",
        "bad monkey",
        "time bandits",
        "pernille",
        "victorious",
        "cobra kai",
        "sunny"
    ],
    drama: [
        "severance",
        "tulsa king",
        "show horses",
        "shirinking",
        "heartstopper",
        "industry",
        "the bear",
        "bridgerton",
        "your honor",
        "yellowstone"
    ],
    horro: [
        "stranger things",
        "the walking dead",
        "them",
        "supernatural",
        "the terror",
        "the last of us",
        "the outsider",
        "chuncky",
        "sweet home",
        "midnight mass"
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"yEMPn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("../view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../../../icons/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class DevicesView extends (0, _viewDefault.default) {
    render(devices) {
        const generatedMarkup = this._generateMarkup(devices);
        this.appendToDom(document.querySelector(".devices__list"), generatedMarkup, "beforeend");
    }
    _generateMarkup(devices) {
        return devices.map((device)=>{
            return `
        <li class="devices__list__item">
            <header class="devices__list__item__head">
            <span>
                <svg width="24" height="24">
                <use href="${0, _iconsSvgDefault.default}#${device.icon}"></use>
                </svg>
            </span>
            <h3>
                ${device.device}
            </h3>
            </header>
            <footer class="devices__list__item__foot">
            <p>${device.caption}</p>
            </footer>
        </li>
    `;
        }).join("");
    }
}
exports.default = new DevicesView();

},{"../view":"7MbWE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../icons/icons.svg":"aUFhk"}],"aUFhk":[function(require,module,exports) {
module.exports = require("dc532ecd6313c8e9").getBundleURL("lAF1V") + "icons.012a97ad.svg" + "?" + Date.now();

},{"dc532ecd6313c8e9":"lgJ39"}]},["dicMD","aB3ls"], "aB3ls", "parcelRequire0374")

//# sourceMappingURL=index.878c95f2.js.map
