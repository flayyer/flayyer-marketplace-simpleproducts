import React from 'react';

import {TemplateProps} from '@flyyer/types';
import {Static, Validator} from '@flyyer/variables';

import '../styles/tailwind.css';

import {TemplateVertical} from '../components/template/vertical';
import {schema as schemaBase} from '../schema/schema';

/**
 * Export to enable variables UI on Flyyer.io
 */
export const schema = schemaBase;

type Variables = Static<typeof schema>;

const validator = new Validator(schema);

export default function BottomTemplate(props: TemplateProps<Variables>) {
  const {width, height, variables, locale} = props;

  const {data} = validator.parse(variables);

  return (
    <TemplateVertical
      {...data}
      locale={locale}
      reverse={false}
      className="flex-col"
    />
  );
}
