import React from 'react';

import {TemplateProps} from '@flyyer/types';
import {Static, Validator} from '@flyyer/variables';

import '../styles/tailwind.css';

import {TemplateHorizontal} from '../components/template/horizontal';
import {schema as schemaBase} from '../schema/schema';

/**
 * Export to enable variables UI on Flyyer.io
 */
export const schema = schemaBase;

type Variables = Static<typeof schema>;

const validator = new Validator(schema);

// Make sure to 'export default' a React component
export default function RightTemplate(props: TemplateProps<Variables>) {
  const {width, height, variables, locale} = props;

  const {data} = validator.parse(variables);

  return (
    <TemplateHorizontal
      {...data}
      locale={locale}
      className="flex-row-reverse"
    />
  );
}
