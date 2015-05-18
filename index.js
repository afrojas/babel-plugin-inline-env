module.exports = function (babel) {
  var t = babel.types;

  var match = t.buildMatchMemberExpression("process.env");

  return new babel.Transformer("inline-env", {
    MemberExpression: function (node) {
      if (match(node.object)) {
        var key = this.toComputedKey();
        if (t.isLiteral(key)) {
          return t.valueToNode(process.env[key.value]);
        }
      }
    }
  });
};