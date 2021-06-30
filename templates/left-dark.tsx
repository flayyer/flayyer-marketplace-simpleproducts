import React from 'react';

import {TemplateProps} from '@flayyer/flayyer-types';
import {Static, Validator} from '@flayyer/variables';

import '../styles/tailwind.css';

import {TemplateHorizontal} from '../components/template/horizontal';
import {schema as schemaBase} from '../schema/schema';

/**
 * Export to enable variables UI on Flayyer.com
 */
export const schema = schemaBase;

type Variables = Static<typeof schema>;

const validator = new Validator(schema);

// Make sure to 'export default' a React component
export default function LeftDarkTemplate(props: TemplateProps<Variables>) {
  const {width, height, variables, locale} = props;

  const {data} = validator.parse(variables);

  return (
    <TemplateHorizontal {...data} locale={locale} className="flex-row dark" />
  );
}
