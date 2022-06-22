/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { RentalCars } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CarRental from "./CarRental";
import { Collection } from "@aws-amplify/ui-react";
export default function CarRentalCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: RentalCars,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "CarRentalCollection")}
    >
      {(item, index) => (
        <CarRental
          rentalcar={item}
          height="auto"
          width="25em"
          margin="1em 1em 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CarRental>
      )}
    </Collection>
  );
}
