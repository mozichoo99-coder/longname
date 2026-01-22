(function () {
  addEventListener('load', () => {
    const _setNick = unsafeWindow.setNick;

    unsafeWindow.setNick = function (name, rsp) {
      let a = '';
      for (let i = 0; i < (24 - name.length >> 1); i++) {
        a += String.fromCharCode(10);
      }
      return _setNick.apply(this, [a + name + a, rsp]);
    };
  });
})();
