import React from "react";
import { Link } from "gatsby";
import { FaGithub } from "react-icons/fa";

import { useSiteMetadata } from "hooks";

import Container from "components/Container";

const Header = () => {
  const { companyName, companyUrl } = useSiteMetadata();

  return (
    <header class="bg-success">
      <Container type="content">
        <p>MSU Smash Ultimate Data</p>
      </Container>
    </header>
  );
};

export default Header;
