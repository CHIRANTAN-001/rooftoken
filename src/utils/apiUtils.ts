import { User } from '@/constants/types';

export async function getUser(): Promise<User | undefined> {
  try {
    // const res = await axios.get(`${API_URL}/user`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });

    const res = {
      data: {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/150',
      },
    };
    return res.data as User;
  } catch (error) {
    console.log('get user error', error);
    return undefined;
  }
}
