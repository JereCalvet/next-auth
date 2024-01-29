import prisma from '@/src/lib/data/db';

export default async function fetchUser(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        // Handle the user object
        return user;
    } catch (error) {
        // Handle any errors
        console.error(error);
    }
}