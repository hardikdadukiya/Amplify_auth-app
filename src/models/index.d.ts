import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RentalCarsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class RentalCars {
  readonly id: string;
  readonly Name?: string | null;
  readonly Price?: number | null;
  readonly Description?: string | null;
  readonly ImageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<RentalCars, RentalCarsMetaData>);
  static copyOf(source: RentalCars, mutator: (draft: MutableModel<RentalCars, RentalCarsMetaData>) => MutableModel<RentalCars, RentalCarsMetaData> | void): RentalCars;
}