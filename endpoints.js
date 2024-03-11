import { IP } from "./config"

const  addData = async ({name, no_family, address, month, waste_collected}) => {
    let url = `http://${IP}/save`;
    await fetch(
        url,{
            method:"POST",
            body:{
                name, no_family, address, month, waste_collected
            }
        }
    )
}

const  getData = async () => {
    let url = `http://${IP}/save`;
    await fetch(url)

}
    
export{
    getData,
    addData
}