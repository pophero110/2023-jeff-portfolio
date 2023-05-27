const fs = require("fs");
const path = require("path");

function createFolderWithFiles(name) {
  const componentsDir = path.join(__dirname, "src", "components");
  const folderPath = path.join(componentsDir, name);

  // Create folder
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Folder "${name}" created.`);
  } else {
    console.log(`Folder "${name}" already exists.`);
    return;
  }

  // Generate file names
  const moduleFileName = `${name}.module.scss`;
  const tsxFileName = `${name}.tsx`;

  // Create module file
  const moduleFilePath = path.join(folderPath, moduleFileName);
  fs.writeFileSync(moduleFilePath, "");

  // Create tsx file with code
  const tsxFilePath = path.join(folderPath, tsxFileName);
  const tsxCode = `import styles from "./${name}.module.scss";
export default function ${capitalizeFirstLetter(name)}() {
  // Add your component logic here
}`;

  fs.writeFileSync(tsxFilePath, tsxCode);

  console.log(`Files ${moduleFileName} and ${tsxFileName} created.`);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Read the command-line argument
const name = process.argv[2];

// Invoke the function
createFolderWithFiles(name);
