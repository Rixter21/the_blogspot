async function main() {
   const BlogSpot = await ethers.getContractFactory("BlogSpot");

   // Start deployment, returning a promise that resolves to a contract object
   const blog_spot = await BlogSpot.deploy("The BlogSpot!");
   console.log("Contract deployed to address:", blog_spot.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });