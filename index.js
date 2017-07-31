export const debugNetworkCalls = () => {
  const isReactNativeDebuggerOpen = window.__REMOTEDEV__;

  if (isReactNativeDebuggerOpen) {
    global.XMLHttpRequest = global.originalXMLHttpRequest ? global.originalXMLHttpRequest : global.XMLHttpRequest;
  }
};
