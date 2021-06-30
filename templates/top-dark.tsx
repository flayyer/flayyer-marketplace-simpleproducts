import React from 'react';

import {TemplateProps} from '@flayyer/flayyer-types';
import {Static, Validator} from '@flayyer/variables';

import '../styles/tailwind.css';

import {TemplateVertical} from '../components/template/vertical';
import {schema as schemaBase} from '../schema/schema';

/**
 * Export to enable variables UI on Flayyer.com
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
      reverse
      locale={locale}
      className="flex-col-reverse dark"
    />
  );
}
