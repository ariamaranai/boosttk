Object.seal = a => a;
MediaSource.isTypeSupported = a => a == 'video/mp4;codecs="hev1.1.6.L120.90"';

navigator.sendBeacon =
XMLHttpRequest.prototype.addEventListener =
XMLHttpRequest.prototype.removeEventListener = () => 0;

Node.prototype.addEventListener = function (a, b, c) {
  switch (a) {
    case "MSFullscreenChange":
    case "auxclick":
    case "contextmenu":
    case "copy":
    case "cut":
    case "dblclick":
    case "drag":
    case "dragend":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "drop":
    case "dragstart":
    case "error":
    case "gotpointercapture":
    case "lostpointercapture":
    case "mozfullscreenchange":
    case "paste":
    case "selectionchange":
    case "touchcancel":
    case "touchend":
    case "touchmove":
    case "touchstart":
    case "visibilitychange":
    case "webkitbeginfullscreen":
    case "webkitendfullscreen":
    case "webkitfullscreenchange":
      break;
    default:
      addEventListener.call(this, a, b, c);
  };
};
Node.prototype.removeEventListener = function (a, b, c) {
  switch (a) {
    case "MSFullscreenChange":
    case "contextmenu":
    case "error":
    case "mozfullscreenchange":
    case "visibilitychange":
    case "webkitbeginfullscreen":
    case "webkitendfullscreen":
    case "webkitfullscreenchange":
    default:
      removeEventListener.call(this, a, b, c);
  };
};
HTMLHeadElement.prototype.appendChild = a => {
  let src = a.src;
  src &&
  src[111] != "z" && // src.slice(110, 114) != "/zti" &&
  src[119] != "z" && // src.slice(118, 122) != "/zti" &&
  document.head.insertBefore(a, null);
};

{
  let open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (a, b, c) {
    return b != "https://mon.tiktokv.com/monitor_browser/collect/batch/?biz_id=tiktok_webapp" &&
      b != "https://mon.tiktokv.com/monitor_browser/collect/batch/?biz_id=tt_pc_banner_ads" &&
      b != "https://im-api-sg.tiktok.com/v2/message/get_by_user_init" &&
      b.slice(32, 38) != "report" &&
      b != "https://mon.tiktokv.com/monitor_browser/collect/batch/?bid=tiktok_pns_web_runtime" &&
      b != "https://mon.tiktokv.com/monitor_web/settings/browser-settings?bid=tiktok_webapp&store=1" &&
      open.call(this, a, b, c);
  };
  let fet = fetch;
  fetch = (a, b) => {
    let url = a.url;
    return url.slice(32, 38) != "report" &&
      fet(a, b);
  };
}