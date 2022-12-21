import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//prisma.user.

async function main() {
   //const newUser= await prisma.user.create({data: {name:"aditya"}}) 
   //console.log(newUser);

//    const userList = await prisma.user.findMany()
//    console.log(userList);

await prisma.user.deleteMany()
   const user= await prisma.user.create({
    data:{
      name: "Puja ",
      email: "puja34@gmail.com",
      age: 22,  
      userPreference:{
        create:{
            emailUpdates: true
        }
      }
    },
    // include: {
    //     userPreference: true
    // },
    select:{
        id: true,
        name: true,
        age: true,
        userPreference: {
            select:{
                id: true
            }
        }
    }
   })
  
  const user=await prisma.user.findUnique({
    where:{
        email:"puja34@gmail.com"
    }
  })
   console.log(user);
}

main()
.catch((err)=>{
    console.log(err);
}).finally(async()=> {
    await prisma.$disconnect()
})