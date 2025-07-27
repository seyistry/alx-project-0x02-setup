import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">API Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.name + user.email} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: {
      users,
    },
    revalidate: 60,
  };
}

export default Users;
