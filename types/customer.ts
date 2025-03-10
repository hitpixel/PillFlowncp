export interface CustomerAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: CustomerAddress;
  allergies?: string[];
  createdAt: string;
  createdBy: string;
}

export interface CustomerFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: CustomerAddress;
  allergies: string[];
} 