import { prisma } from "@/Providers/prisma";

const PrismaComp = async () => {
  // Read Data from Table
  const data = await prisma.user.findMany();

  // Add Data in Table
  // const data = await prisma.user.create({
  //   data: {
  //     name: "Test",
  //     email: "test@test.com",
  //     password: "123654789",
  //     gender: "Female",
  //     userRole: "Client",
  //   },
  // });
  return (
    <div>
      <h2>Prisma Data</h2>
      {data ? <div>{JSON.stringify(data)}</div> : <div>Data Not Found.</div>}
    </div>
  );
};

export default PrismaComp;
