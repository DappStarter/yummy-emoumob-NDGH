require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture stone repeat saddle pumpkin hunt bag army gate'; 
let testAccounts = [
"0xc629c7202db3b7c6d70e87cfbbfdb2229aba6e671ff7967f3c97313705a87fa7",
"0x9a825ce31e6314c132683bf6a1c84a44e098073b8e5cedb72d6f4eaf5832ddda",
"0xe6fbb74513a50dee45f3422ce025649233b42189e47749b635f82745ee4bf37a",
"0xc319b36101608598215fc641a00c8839749a1f05b9afaed5f04f41a5761e1d13",
"0xa2f747cee69152ce582923cb4aec2aab59625844876c69dcdef9153f8ef0a3ac",
"0x9d886845c6bac45a94fe399a224c3c6b32cad0edd4839772f37cb85667226322",
"0x0d125d20115974a83cf20a0137afeddf158f9cdb605f8dd7bdddffaa56d0bf59",
"0x8561ea85ad89dd7f97e566f2d75a2bedfa3e5a0e389af74eff17a9fff8f58141",
"0x006e7bc9989cf5cd299224221fd22ddb1d76d33facaa4e8e7be140b62f7150f9",
"0x42d7977d187f7933176bc835ad5af9528d953c4030edd96aaceaf8c13ba3fef2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

