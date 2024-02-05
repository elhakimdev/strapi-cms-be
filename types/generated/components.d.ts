import type { Schema, Attribute } from '@strapi/strapi';

export interface CarrouselHomepageBannners extends Schema.Component {
  collectionName: 'components_carrousel_homepage_bannners';
  info: {
    displayName: 'Homepage Bannners';
    icon: 'attachment';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    img_title: Attribute.Media;
    meta: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carrousel.homepage-bannners': CarrouselHomepageBannners;
    }
  }
}
