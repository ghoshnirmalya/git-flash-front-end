function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@chakra-ui/core');
var Link = _interopDefault(require('next/link'));
var React = _interopDefault(require('react'));

var Navbar = function Navbar() {
  var linksForAllUsers = [{
    id: "home",
    label: "Home",
    href: "/"
  }];
  var linksForAuthenticatedUsers = [{
    id: "sites",
    label: "Sites",
    href: "/sites"
  }, {
    id: "myAccount",
    label: "My Account",
    href: "/my-account"
  }];

  var signInButtonNode = function signInButtonNode() {
    return React.createElement(core.Box, null, React.createElement(Link, {
      href: "/api/auth/signin"
    }, React.createElement(core.Button, {
      onClick: function onClick(e) {
        e.preventDefault();
      }
    }, "Sign In")));
  };

  var signOutButtonNode = function signOutButtonNode() {
    return React.createElement(core.Box, null, React.createElement(Link, {
      href: "/api/auth/signout"
    }, React.createElement(core.Button, {
      onClick: function onClick(e) {
        e.preventDefault();
      }
    }, "Sign Out")));
  };

  return React.createElement(core.Box, {
    bg: "white"
  }, React.createElement(core.Box, {
    p: 4,
    shadow: "lg",
    pos: "relative"
  }, React.createElement(core.Box, {
    maxW: "6xl",
    mx: "auto",
    w: "full"
  }, React.createElement(core.Stack, {
    isInline: true,
    spacing: 4,
    align: "center",
    justifyContent: "space-between",
    w: "full"
  }, React.createElement(core.Box, null, React.createElement(core.Stack, {
    isInline: true,
    spacing: 4,
    align: "center",
    fontWeight: "semibold"
  }, linksForAllUsers.map(function (link) {
    return React.createElement(core.Box, {
      key: link.id
    }, React.createElement(Link, {
      href: link.href
    }, React.createElement(core.Link, null, link.label)));
  }), linksForAuthenticatedUsers.map(function (link) {
    return React.createElement(core.Box, {
      key: link.id
    }, React.createElement(Link, {
      href: link.href
    }, React.createElement(core.Link, null, link.label)));
  }))), React.createElement(core.Box, null, React.createElement(core.Stack, {
    isInline: true,
    spacing: 4,
    align: "center"
  }, signInButtonNode(), signOutButtonNode()))))));
};

exports.Navbar = Navbar;
//# sourceMappingURL=index.js.map
