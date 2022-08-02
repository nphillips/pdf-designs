// middleware.ts
import { NextApiRequest, NextApiResponse } from "next";

import React, { ReactElement } from "react";

import { renderToStaticMarkup } from "react-dom/server";
import pdf from "html-pdf";


import demo from "../../../templates/demo.mdx";
import confirm from "../../../templates/confirm.mdx";

import { MDXProvider } from "@mdx-js/react";
import {
  AnimusProvider,
  Text,
  Box,
  FlexBox,
  GridBox,
  Li,
  Link,
  Ol,
  Ul,
} from "@animus-ui/components";
import { compatTheme } from "@animus-ui/core";

const TEMPLATES = {
  confirm,
  demo,
};

const options = {
  format: "A4",
  orientation: "portrait",
  border: "10mm",
  footer: {
    height: "10mm",
  },
  type: "pdf",
  timeout: 30000,
} as const;

const Provider = AnimusProvider as any;

const componentToPDFBuffer = (component: ReactElement) => {
  return new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component);
    const buffer = pdf.create(html, options).toBuffer((err, buffer) => {
      if (err) {
        return reject(err);
      }
      return resolve(buffer);
    });
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const html = ReactDOMServer.renderToString(<Confirm data={data} />);
  const { template } = req.query;
  const { date = "20220801", account = "100000", data = [] } = req.body;

  const TemplateComponent = TEMPLATES?.[template as keyof typeof TEMPLATES];

  if (!TemplateComponent) {
    res.status(404).end();
  }

  // prompt to download pdf
  res.setHeader(
    "Content-disposition",
    `attachment; filename="${template}-${date}-${account}.pdf`
  );

  // set content type
  res.setHeader("Content-Type", "application/pdf");

  // output the pdf buffer
  res.end(
    await componentToPDFBuffer(
      <Provider theme={compatTheme}>
        <MDXProvider
          components={{
            h1: (props) => <Text as="h1" {...props} />,
            h2: (props) => <Text as="h2" {...props} />,
            h3: (props) => <Text as="h3" {...props} />,
            h4: (props) => <Text as="h4" {...props} />,
            h5: (props) => <Text as="h5" {...props} />,
            h6: (props) => <Text as="h6" {...props} />,
            li: Li,
            a: Link,
            ol: Ol,
            ul: Ul,
            p: Text,
          }}
        >
          <TemplateComponent data={data} date={date} account={account} />
        </MDXProvider>
      </Provider>
    )
  );
}
