/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const rainierNFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, age, weight, height) {
    const NFT = { 
        "name": name,
        "age": age,
        "weight": weight,
        "height": height,

    }
    rainierNFTs.push(NFT);
    console.log("Minted: " + name); 
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < rainierNFTs.length; i++) {
        console.log(rainierNFTs[i]);

    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log(rainierNFTs.length);
}

// call your functions below this line
mintNFT("rainier", "20", "48", "5'4");
listNFTs();
getTotalSupply();
