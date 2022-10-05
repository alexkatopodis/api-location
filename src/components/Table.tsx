export interface TableInterface {
  active: boolean;
  address: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zip: string;
  };
  id: number;
  latitude: number;
  locationDetails: string;
  locationId: string;
  locationName: string;
  locationType: string;
  locationUserRole: string;
  longitude: number;
  newLocation: boolean;
  numberofDevices: number;
  subscriptionActive: boolean;
}

const Table = (props: Array<TableInterface>) => {
  console.log(typeof props);

  return <div></div>;
};

export default Table;