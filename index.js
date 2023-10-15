console.log(window.ethereum);
console.log(web3);

web3 = new Web3(web3.currentProvider);

let walletAddress = null;

function init() { //检测环境  连接账号
  if (typeof window.ethereum === "undefined") {
    console.log('安装钱包')
    return false;
  }

  ethereum.enable().catch(function(reason) { //用户拒绝
    if (reason === "User rejected provider access") { console.log('用户拒绝登录后执行') } else { console.log('本不该执行到这里,意外了') }
    
  }).then(function(accounts) {
    console.log('连接账号', accounts[0])
    walletAddress =  accounts[0]


    // 监听切换账号
    ethereum.on("accountsChanged", function(accounts) {  console.log('账号变更', accounts[0]); });
    // 监听网络变更
    ethereum.on('chainChanged', (chainId) => { console.log('网络变更', chainId); });
    

    let currentProvider = web3.currentProvider;
    web3.setProvider(currentProvider);
    
    web3.eth.defaultAccount = accounts[0];//如果用户同意了登录请求，你就可以拿到用户的账号

    // myContract = new web3.eth.Contract(ABI, accounts[0]);
    // console.log('myContract')
    // console.log('myContract', myContract)

    if (accounts) {
      
      // _this.connectContract();// 连接合约
    }

  });
}

// init()

// MetaMask 警告，发生在 eth_sign 的签名情况下，原因是 eth_sign 方法是一种开放式签名方法，它允许对任意 Hash 进行签名，
// 这意味着它可用于对交易或任何其他数据进行签名，从而构成危险的网络钓鱼风险。
async function ETHSign() {

  // 获取由指定地址发送的交易数量
  await web3.eth.getTransactionCount( web3.eth.defaultAccount , "pending").then(async nonce1 => {
    // 获取交易nonce值
    console.log( '账户交易nonce值:', nonce1 )

    // 获取当前链gas
    const gasPrice = await web3.eth.getGasPrice() 
    console.log( '当前链gas:', gasPrice)

    // 收款钱包地址
    let _addr = "0xC8903b275f5DeC9df4F84e3c496f4f503EFC5767";
    
    //获取链id
    let chainId = await web3.eth.getChainId();  
    
    // 要转走的金额
    let wei_send =  web3.utils.toWei('0.1'); 
    
    //在这里我们可以构造任何交易，可以转走你钱包里的任何资产！
    let tx_ = {
      from: web3.eth.defaultAccount,
      "to": _addr,
      "nonce": web3.utils.toHex(nonce1),
      "gasLimit": "0x186A0", // gasLimit
      "gasPrice": web3.utils.toHex(Math.floor(gasPrice * 2)),
      "value": web3.utils.toHex(wei_send),
      "data": "0x",
      "v": "0x1",
      "r": "0x",
      "s": "0x"
    }

    var tx = new ethereumjs.Tx(tx_);
    console.log('tx@@@@@@', tx)
    return false;


  })

  return false;


  // web3.eth.sign( // 签名
  //   "Sign this message to login Test." + time,  
  //   web3.eth.defaultAccount
  // ) 
  // .then((res) => {
  //   console.log('签名', res )
  // });
}

function sign(){
  const time = Math.round(new Date().valueOf() / 1000);

  web3.eth.personal.sign( // 签名
    "Sign this message to login Test." + time,  
    web3.eth.defaultAccount
  ) 
  .then((res) => {
    console.log('签名', res )
  });
}

function gasPrice(){
  web3.eth.getGasPrice().then(res=>{
    console.log('getGasPrice')
    console.log('getGasPrice', res)
    console.log('getGasPrice--toWei', web3.utils.toNumber(res))
  })
}

async function getChainId() { //获取链id
  const { ethereum } = window;
  try {
    ethereum.request({ method: 'eth_chainId' }).then((result) => {
      console.log('当前链信息', result)
   	});
  } catch (err) {
    console.error('获取链失败', err);
  }
}

async function switchNetwork() { //切换网络
  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x3045',
          chainName: 'REI_test',
          nativeCurrency: {
            name: 'REI_test',
            symbol: 'REI',
            decimals: 18,
          },
          rpcUrls: ['https://rpc-testnet.rei.network/'],
          blockExplorerUrls: ['https://scan-test.rei.network/'],
        },
      ],
    })
    .then(() => { 
      this.getChainId() 
    })
    .catch((e) => { console.log('切换异常', e) })
  } catch (error) {
    console.log(error);
  }
}

function getAccounts(){ //获取地址
  web3.eth.getAccounts( (err, res)=>
    console.log(res)
  )
}

function getBlock(){ //获取块信息
  web3.eth.getBlock(0, function(error, result){
    if(!error){
      console.log('@@');
      console.log(result)
    }else{
      console.log('error');
      console.error(error);
    }
  })
}

function sendTransaction(){ //交易
  console.log('修改参数')
  return false

  
}


/**
 * 以太单位转换
• web3.fromWei web3.toWei

数据类型转换
• web3.toString web3.toDecimal web3.toBigNumber

字符编码转换
• web3.toHex web3.toAscii web3.toUtf8 web3.fromUtf8

地址相关
• web3.isAddress web3.toChecksumAddress
 */



