require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember equip guess clinic olympic trip'; 
let testAccounts = [
"0x8f04c31661404707db78657561b8008728deb30a5774d4a4d713876b08858fc8",
"0xd7cf20d1fc662a72392b6a662a69d0ad9d3f1b59c840b02557b94cf0d4b3004d",
"0xab19f8fdaf216fcd74ec8b9f1fea4dd9c86ecacdd2f4d29324e526d7f75380f3",
"0x17cf8f5bbf42720178df9f9c7b2b8507febfa16f6fa66517a058a03f9e57b098",
"0xf6cd2afe40fb998bf4fdaf901d4cb39ccbd7ecbd57a4b28494e66269d671b21a",
"0x6c20b420626e6d9c55b552650009855fc83541ce97c1280618e1740598b982e0",
"0x1ca75f5da3846bce8f49a07cf31a2d80efc5a63492c920ae9a3f0bdd49237800",
"0xaaf54719ab8a4f1e54b92105c045a95497355ed34a52cf9cc87ea7187ef433d2",
"0xa1c5c8b108a2ee3157b110f278a1acb8af904d37784f2cc64c52ae2cffb3ea21",
"0x79548468c8fdfea6c44ca5e921e2656f416ad587dcf4b9513f565db56a497631"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
