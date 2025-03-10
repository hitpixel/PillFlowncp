import { type ChangeEvent, type FormEvent, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { type CustomerFormData } from "@/types/customer";

export function CustomerForm(): JSX.Element {
  const { toast } = useToast();
  const createCustomer = useMutation(api.customers.create);

  const [formData, setFormData] = useState<CustomerFormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
    },
    allergies: [],
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await createCustomer(formData);
      toast({
        title: "Success",
        description: "Customer created successfully",
      });
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        address: {
          street: "",
          city: "",
          state: "",
          postalCode: "",
        },
        allergies: [],
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create customer",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1] as keyof typeof formData.address;
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: name === "allergies" ? value.split(",").map((s) => s.trim()) : value,
      }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add New Customer</CardTitle>
        <CardDescription>Enter customer details for webster packing</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address.street">Street Address</Label>
            <Input
              id="address.street"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address.city">City</Label>
              <Input
                id="address.city"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address.state">State</Label>
              <Input
                id="address.state"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address.postalCode">Postal Code</Label>
            <Input
              id="address.postalCode"
              name="address.postalCode"
              value={formData.address.postalCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="allergies">
              Allergies (optional, separate with commas)
            </Label>
            <Textarea
              id="allergies"
              name="allergies"
              value={formData.allergies.join(", ")}
              onChange={handleChange}
              placeholder="e.g. Penicillin, Peanuts"
            />
          </div>

          <Button type="submit" className="w-full">
            Create Customer
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 