import { Box, Stack, Link as Link$1, Button } from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';

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
    return React.createElement(Box, null, React.createElement(Link, {
      href: "/api/auth/signin"
    }, React.createElement(Button, {
      onClick: function onClick(e) {
        e.preventDefault();
      }
    }, "Sign In")));
  };

  var signOutButtonNode = function signOutButtonNode() {
    return React.createElement(Box, null, React.createElement(Link, {
      href: "/api/auth/signout"
    }, React.createElement(Button, {
      onClick: function onClick(e) {
        e.preventDefault();
      }
    }, "Sign Out")));
  };

  return React.createElement(Box, {
    bg: "white"
  }, React.createElement(Box, {
    p: 4,
    shadow: "lg",
    pos: "relative"
  }, React.createElement(Box, {
    maxW: "6xl",
    mx: "auto",
    w: "full"
  }, React.createElement(Stack, {
    isInline: true,
    spacing: 4,
    align: "center",
    justifyContent: "space-between",
    w: "full"
  }, React.createElement(Box, null, React.createElement(Stack, {
    isInline: true,
    spacing: 4,
    align: "center",
    fontWeight: "semibold"
  }, linksForAllUsers.map(function (link) {
    return React.createElement(Box, {
      key: link.id
    }, React.createElement(Link, {
      href: link.href
    }, React.createElement(Link$1, null, link.label)));
  }), linksForAuthenticatedUsers.map(function (link) {
    return React.createElement(Box, {
      key: link.id
    }, React.createElement(Link, {
      href: link.href
    }, React.createElement(Link$1, null, link.label)));
  }))), React.createElement(Box, null, React.createElement(Stack, {
    isInline: true,
    spacing: 4,
    align: "center"
  }, signInButtonNode(), signOutButtonNode()))))));
};

export { Navbar };
//# sourceMappingURL=index.esm.js.map
