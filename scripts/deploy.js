// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const covenProfile = await ethers.deployContract("CovenProfile");

  console.log("covenProfile address:", await covenProfile.getAddress());

  saveFrontendFiles(covenProfile);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


function saveFrontendFiles(covenProfile) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ CovenProfile: covenProfile.address }, undefined, 2)
  );

  const CovenProfileArtifact = artifacts.readArtifactSync("CovenProfile");

  fs.writeFileSync(
    contractsDir + "/CovenProfile.json",
    JSON.stringify(CovenProfileArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

