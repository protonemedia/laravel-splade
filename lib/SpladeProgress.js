const SpladeProgress = {
    injectCSS(color) {
        const element = document.createElement("style");
        element.type = "text/css";
        element.textContent = `
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${color};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
      opacity: 1.0;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${color};
      border-left-color: ${color};
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
        document.head.appendChild(element);
    },

    timeout: null,

    start(event, delay, NProgress) {
        SpladeProgress.timeout = setTimeout(() => NProgress.start(), delay);
    },

    progress(event, NProgress) {
        if (NProgress.isStarted() && event.detail.progress.percentage) {
            NProgress.set(Math.max(NProgress.status, event.detail.progress.percentage / 100 * 0.9));
        }
    },

    stop(event, NProgress) {
        clearTimeout(SpladeProgress.timeout);
        NProgress.done();
        NProgress.remove();
    },

    init(options) {
        const self = this;
        import("nprogress").then((NProgress) => {
            document.addEventListener("splade:request", (event) => self.start(event, options.delay, NProgress.default));
            document.addEventListener("splade:request-progress", (event) => self.progress(event, NProgress.default));
            document.addEventListener("splade:request-response", (event) => self.stop(event, NProgress.default));
            document.addEventListener("splade:request-error", (event) => self.stop(event, NProgress.default));

            NProgress.default.configure({ showSpinner: options.spinner });

            if(options.css) {
                this.injectCSS(options.color);
            }
        });
    }
};

export { SpladeProgress };
