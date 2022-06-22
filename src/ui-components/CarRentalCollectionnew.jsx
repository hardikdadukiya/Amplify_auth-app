/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { RentalCars } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CarRental from "./CarRental";
import { Collection } from "@aws-amplify/ui-react";
export default function CarRentalCollectionnew(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.Price(SortDirection.ASCENDING) };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: RentalCars,
    pagination: itemsPagination,
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
      {...getOverrideProps(overrides, "CarRentalCollectionnew")}
    >
      {(item, index) => (
        <CarRental
          rentalcar={item}
          height="auto"
          width="auto"
          margin="0 2em 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CarRental>
      )}
    </Collection>
  );
}
