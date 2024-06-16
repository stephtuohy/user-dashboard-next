import UserProfile from "@/components/UserProfile";
import { fetchUsers } from "@/services/api";

export default async function UserPage({ params }) {
  const userId = params.id;
  const users = await fetchUsers();
  const user = users.find((thisUser) => thisUser.id == userId);

  if (!user) {
    return <p>User not found</p>;
  }

  return <UserProfile user={user} />;
}
