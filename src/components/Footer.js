import React from "react";

import { useSiteMetadata } from "hooks";

import Container from "components/Container";

const Footer = () => {
  const { authorName, authorUrl } = useSiteMetadata();

  return (
    <footer class="bg-success">
      <Container>
        <p>
          <a href="https://allanand.netlify.app/" target="_blank" class="text-light link-info">Andrew Allan {new Date().getFullYear()}</a >
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
