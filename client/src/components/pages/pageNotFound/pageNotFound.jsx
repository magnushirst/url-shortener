import React from 'react';

import {Section} from "../../atoms/section/section";
import {Title} from "../../atoms/title/title";

export const PageNotFound = () => {
  return (
    <article>
      <Section>
        <Title>Page Not found</Title>
        <p>
         Sorry, this page is not available. Click <a href="javascript:history.back()">here</a> to go back
        </p>
      </Section>
    </article>
  );
};
