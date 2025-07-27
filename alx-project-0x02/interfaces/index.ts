export interface CardProps {
  title: string;
  content: string;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  name: string;
  email: string;
  address: Address;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: {
    lat: string;
    lng: string;
  };
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostModalProps {
  close: (close: boolean) => void;
  onSubmit: (post: CardProps) => void;
}
