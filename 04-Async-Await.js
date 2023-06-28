const connect = true
const url1 = 'poykung.dev/file1.json'
const url2 = 'poykung.dev/file2.json'
const url3 = 'poykung.dev/file3.json'
const url4 = 'poykung.dev/file4.json'

function downloading(url){
    return new Promise(function(resolve,reject){
        console.log(`download...${url} please..wait..!`)
        setTimeout(()=>{
            if(connect){
                resolve(`download ${url} complete...:xD`)
            }else{
                reject('Something Wrong....:(')
            }
        },1000)
    })
}


//Async&await
async function start(){
    console.log (await downloading(url1))
    console.log (await downloading(url2))
    console.log (await downloading(url3))
    console.log (await downloading(url4))
}

start()
