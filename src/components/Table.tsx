import styled from "styled-components";
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
  const mapLocations = Object.values(props).map((item, idx) => {
    return (
      <ContainerDetails key={idx}>
        <div>Location Details: {item.locationDetails}</div>
        <div>Adress: {item.address.addressLine1}</div>
        <div>Location Type: {item.locationType}</div>
      </ContainerDetails>
    );
  });

  return <div>{mapLocations}</div>;
};

export default Table;

const ContainerDetails = styled.div`
  color: red;
  padding: 10px;
  text-align: center;
  border: 2px solid black;
  max-width: 250px;
`;
