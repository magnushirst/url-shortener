import React from 'react';

import {Button} from "../../atoms/button/button";
import {InputText} from "../../atoms/inputText/inputText";
import {Section} from "../../atoms/section/section";
import {Title} from "../../atoms/title/title";

export const Index = () => {
  return (
    <article>
      <Section align={'center'}>
        <Title>URL Shortener</Title>
        <p>
         A simple URL shortener which provides:
        </p>
        <p>
          Easy Link Shortening | Full Link History | Customized TinyURLs
        </p>
        <div>
            <InputText label={"URL"}></InputText>
            <Button primary label={'Shorten Link'} />
        </div>
      </Section>
    </article>
  );
};
