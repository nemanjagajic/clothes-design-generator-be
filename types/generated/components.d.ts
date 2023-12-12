import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderItemsOrderItems extends Schema.Component {
  collectionName: 'components_order_items_order_items';
  info: {
    displayName: 'Order Items';
    icon: 'stack';
  };
  attributes: {
    imageUrl: Attribute.String;
    type: Attribute.String;
    size: Attribute.String;
    color: Attribute.String;
    position: Attribute.String;
    gender: Attribute.String;
    quantity: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order-items.order-items': OrderItemsOrderItems;
    }
  }
}
