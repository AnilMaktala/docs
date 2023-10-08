import * as React from 'react';
import type { MDXComponents } from 'mdx/types';
import ExportedImage from 'next-image-export-optimizer';

import InlineFilter from './src/components/InlineFilter';
import { YoutubeEmbed } from './src/components/YoutubeEmbed';
import Accordion from './src/components/Accordion';
import Block from './src/components/Block';
import BlockSwitcher from './src/components/BlockSwitcher';
import Callout from './src/components/Callout';
import { Card, CardDetail, CardGraphic } from './src/components/Card';
import ExternalLinkButton from './src/components/ExternalLinkButton';
import InternalLinkButton from './src/components/InternalLinkButton';
import { MDXLink, MDXHeading } from './src/components/MDXComponents';
import MigrationAlert from './src/components/MigrationAlert';

const ResponsiveImage = (props) => (
  <ExportedImage style={{ height: 'auto' }} {...props} />
);

const MDXHeading1 = (props) => <MDXHeading level={1} {...props} />;
const MDXHeading2 = (props) => <MDXHeading level={2} {...props} />;
const MDXHeading3 = (props) => <MDXHeading level={3} {...props} />;
const MDXHeading4 = (props) => <MDXHeading level={4} {...props} />;
const MDXHeading5 = (props) => <MDXHeading level={5} {...props} />;
const MDXHeading6 = (props) => <MDXHeading level={6} {...props} />;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Map markdown elements to custom components
    a: MDXLink,
    h1: MDXHeading1,
    h2: MDXHeading2,
    h3: MDXHeading3,
    h4: MDXHeading4,
    h5: MDXHeading5,
    h6: MDXHeading6,
    img: ResponsiveImage,

    // Make common custom components available to content authors
    Accordion,
    Block,
    BlockSwitcher,
    Callout,
    Card,
    CardDetail,
    CardGraphic,
    ExternalLinkButton,
    InlineFilter,
    InternalLinkButton,
    MigrationAlert,
    YoutubeEmbed,
    ...components
  };
}
