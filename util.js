
function accountInit(){
  console.log('web3', web3)
}

function createAccount() {
  // web3.eth.accounts.create();
  console.log('createAccount', web3.eth.accounts.create())
}

function removeAccount() {
  console.log('移除？', web3.eth.accounts.wallet.remove('0xf98e9db2cc9efc7563555d1d365e5b03eaa8410e'))
  // let account = '0xf98e9db2cc9efc7563555d1d365e5b03eaa8410e';
  // web3.eth.accounts.wallet.remove(account);
}


//获取图片的Blob值
function getImageBlob(url, cb) {
  var xhr  = new XMLHttpRequest();
  xhr.open("get", url, true);
  xhr.responseType = "blob";
  xhr.onload = function() {
    if (this.status == 200) {
      if(cb) cb(this.response);
    }
  };
  xhr.send();
}

function viewAccount1( url, cb ){
  // var url = "https://ipfs.covas.io/ipfs/QmRLkaeX3o9YPGUdLYiYySzxT86Zgf2J2CDUkr1jJLKGLJ";
  var url = "https://www.baidu.com/link?url=pNCTHYW7YGOQQT84YdCa9mAtw__ZoOYUrIi97dM2DeXAUZrS71W7bIwzGbmitqDTni8fp7Z_mKkJ1NJkDIEX-8Fu_J-n2PRK-5qSQMvFA_cvH3mxoEGTjbOW4b3yafhOznfEk3n_BJK9Axl8QtgCqKUVsBttPbveYoao_ZKwqAQepi6GT8LXnfPl2LBFFaY9rggLrbN_H5djcxZ8qKHVGzltyXcbObYQoG5csAulphfxnwIPxWNR_N9cl-XMY0gqFIN6w3wqY2EJiLt16ymM3FquW9krRA0nyoyntOvBbiEI4jVi7pYkFjopyAIn1SKyfG4kGV9HJob9Kt5cSL3pHma8TnRqgEHVdaPWwlK9pAQn2sDYTB3bvFqn8Cb9ktXLu38s0ixy10y0Aq9CHIHfid1Vj9YQB_u-B8-j510nkcPuk7w58gabAySsMLRiGP-uJESqn_DB814p03YjPTT96y3bSfbGI1QZN4Jo_vdFYfe0DGj_xKwRQTLciInVDGsasI6j587hGZ4l4TZHSCY_4f0__49LTf-p8rEJntp2Gift_MbJ7VWdPtCMavhrW4qp1hwz9WfWPX96HIBzKSFEoRjbgekamHi1n8kdCtSSLeeL0IKokQydMzCPuyvjIWA6mpEj5AzDOiCj5747Xi4n0K&wd=&eqid=86688f090009e37900000004638da315";
  console.log('查看创建的数据', url)
  
  let reader = new FileReader();
 
  this.getImageBlob( url , function(blob){
    reader.readAsDataURL(blob);
  });
  
  reader.onload = function(e) {
    console.log('e', e)
    // var img = document.createElement("img");
    // img.src = e.target.result;
    // document.body.appendChild(img);
  }
}


function viewAccount( url ){
  // 获取指定网页源码
  var url = 'https://ipfs.covas.io/ipfs/QmRLkaeX3o9YPGUdLYiYySzxT86Zgf2J2CDUkr1jJLKGLJ';

  let sourceCodeTxt = 'url';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  sourceCodeTxt = xhr.responseText;
  
  console.log( 'sourceCodeTxt@@@@@@@@', sourceCodeTxt )
  return sourceCodeTxt;
}

function chooseAccount(){
  document.getElementById('files').click()
}

function confirmWriteFile( file ){
  console.log( 'confirm Write File~', file.files[0] )
}

function writeAccount() {
  var writeFiles = document.getElementById('files')
  var files1 = writeFiles.files[0]
  
  var reader = new FileReader()
  let cc = reader.readAsText(files1)
  
  reader.onload = function() {
    console.log(this.result)
    return false;
    
    // var data1 = JSON.parse(this.result)
    var data1 = [{ 'label':'aaa', 'value':'123123' },{ 'label':'bbb', 'value':'456456' }]
    data1.forEach(item => {
      console.log('item', item)
    })
    console.log(JSON.stringify(data1))
    let data1JSON = JSON.stringify(data1)
    var blob = new Blob([data1JSON],{type:"text/plain;charset=utf-8"})
    saveAs(blob,"save json")
  }
}
